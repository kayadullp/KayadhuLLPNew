import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// A rich mix of the brand's teal, blue, and complementary accent colors
const COLORS = ['#14b8a6', '#0d9488', '#1e3a8a', '#3b82f6', '#60a5fa', '#34d399', '#ffffff'];

class Particle {
  constructor(x, y, dx, dy) {
    // Add random scatter so they spawn naturally around the cursor point
    this.x = x + (Math.random() - 0.5) * 15;
    this.y = y + (Math.random() - 0.5) * 15;
    
    // Varying sizes for visual depth
    this.size = Math.random() * 3.5 + 1;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    
    // Determine if particle shoots "front" or trails "back" relative to movement
    const isFront = Math.random() > 0.5;
    const velocityMultiplier = isFront ? (Math.random() * 2.5) : -(Math.random() * 1.5);
    
    // Baseline radial drift to make them expand outwards
    const angle = Math.random() * Math.PI * 2;
    const spreadSpeed = Math.random() * 1.2;
    
    this.vx = Math.cos(angle) * spreadSpeed + (dx * velocityMultiplier);
    this.vy = Math.sin(angle) * spreadSpeed + (dy * velocityMultiplier);
    
    this.life = 1;
    // Fade out speed
    this.decay = Math.random() * 0.02 + 0.015;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.decay;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    
    // Add intense glow to each particle
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.color;
    ctx.globalAlpha = Math.max(0, this.life);
    
    ctx.fill();
  }
}

const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef(null);
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Glow background (slowest, gives a floating feel)
  const glowX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  // Arrow cursor (fastest/instant)
  const arrowX = useSpring(mouseX, { stiffness: 1000, damping: 30 });
  const arrowY = useSpring(mouseY, { stiffness: 1000, damping: 30 });

  // Create a smooth spotlight effect template that covers the entire screen
  const background = useMotionTemplate`radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(20, 184, 166, 0.12), transparent 80%)`;

  useEffect(() => {
    // Prevent execution on touch-only devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let lastX = -1000;
    let lastY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      // Calculate directional vector for particles based on movement
      if (lastX !== -1000) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 1) { 
          const normalizedDx = dx / distance;
          const normalizedDy = dy / distance;
          
          // Spawn particles relative to how fast the mouse moved
          const spawnCount = Math.min(Math.floor(distance / 3) + 1, 6);
          for (let i = 0; i < spawnCount; i++) {
            particles.push(new Particle(e.clientX, e.clientY, normalizedDx, normalizedDy));
          }
        }
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('[role="button"]') ||
        e.target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const render = () => {
      // Clear with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw(ctx);
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    // Start render loop
    render();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  // Hide entirely on touch-only devices
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      />

      {/* Full Screen Cursor Spotlight Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background,
          opacity: isVisible ? 1 : 0
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Custom Cursor Arrow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: arrowX,
          y: arrowY,
          scale: isHovering ? 1.2 : 1,
          rotate: isHovering ? -10 : 0,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-teal drop-shadow-[0_0_15px_rgba(20,184,166,1)]"
          style={{ overflow: 'visible' }}
        >
          <path
            d="M0 0 L18 6.5 L9.5 9.5 L6.5 18 L0 0 Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default MouseFollower;
