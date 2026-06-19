import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'top-4 w-[calc(100%_-_2rem)] max-w-7xl rounded-full bg-white/85 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/45 dark:border-slate-800/45 shadow-xl py-2.5 px-2 sm:px-4'
          : 'top-0 w-full bg-transparent border-transparent py-5 px-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logoLight} alt="Kayadu Consulting Logo" className="h-8 w-auto dark:hidden grayscale" />
            <img src={logoDark} alt="Kayadu Consulting Logo" className="h-10 w-auto hidden dark:block scale-125 origin-left" />
            <span className="font-bold text-lg lg:text-xl tracking-tight text-slate-900 dark:text-white dark:ml-2">
              Kayadu Consulting <span className="text-brand-teal">LLP</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-teal text-white hover:bg-brand-teal/90 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-brand-teal/15 hover:shadow-brand-teal/30 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              Get Consultation
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-brand-teal focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav with AnimatePresence Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden absolute left-0 right-0 w-full bg-white dark:bg-slate-900 shadow-xl border border-slate-200/50 dark:border-slate-800/50 p-4 flex flex-col space-y-2 z-40 transition-colors duration-300 ${
              isScrolled
                ? 'top-[calc(100%+0.5rem)] rounded-3xl'
                : 'top-full border-t'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(2);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors block px-4 py-2.5 rounded-xl ${
                    isActive
                      ? 'text-brand-teal dark:text-brand-teal bg-brand-teal/5 dark:bg-brand-teal/10 font-semibold'
                      : 'text-slate-600 hover:text-brand-teal dark:text-slate-300 dark:hover:text-brand-teal hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-brand-teal text-white hover:bg-brand-teal/90 text-center text-base font-semibold px-4 py-3 rounded-xl transition-all block mt-2 shadow-md shadow-brand-teal/10"
            >
              Get Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;