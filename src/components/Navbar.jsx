import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logoLight from '../assets/images/logo/logo.webp';
import logoDark from '../assets/images/logo/logo-glow.webp';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { name: 'About Us', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle transparent to solid navbar background
      setIsScrolled(window.scrollY > 20);

      // Determine the active section
      const sections = navLinks.map(link => link.href.substring(2));
      let currentSection = 'home'; // Default fallback
      
      // Loop backwards to find the deepest section we have scrolled past
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is above the middle of the screen
          if (rect.top <= window.innerHeight / 2.5) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img src={logoLight} alt="Kayadu Consulting Logo" className="h-8 w-auto dark:hidden grayscale" />
            <img src={logoDark} alt="Kayadu Consulting Logo" className="h-10 w-auto hidden dark:block scale-125 origin-left" />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white ml-2">
              Kayadu Consulting <span className="text-brand-teal">LLP</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(2);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-2 ${
                    isActive
                      ? 'text-brand-teal dark:text-brand-teal'
                      : 'text-slate-600 hover:text-brand-teal dark:text-slate-300 dark:hover:text-brand-teal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-brand-teal"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 py-4 px-4 flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(2);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors block px-4 py-2 rounded-md ${
                  isActive
                    ? 'text-brand-teal dark:text-brand-teal bg-brand-teal/5 dark:bg-brand-teal/10 font-semibold'
                    : 'text-slate-600 hover:text-brand-teal dark:text-slate-300 dark:hover:text-brand-teal hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;