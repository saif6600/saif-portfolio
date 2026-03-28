import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-cyber-bg/90 backdrop-blur-xl border-b border-cyber-border shadow-lg shadow-black/20'
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg shadow-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-purple opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 flex items-center justify-center font-syne font-bold text-white text-sm">S</span>
              </div>
              <span className="font-syne font-bold text-base hidden sm:block">
                <span className={isDark ? 'text-white' : 'text-gray-900'}>Saif</span>
                <span className="gradient-text">.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-lg font-outfit text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cyber-cyan'
                        : isDark
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-500 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20"
                        transition={{ type: 'spring', duration: 0.4 }}
                      />
                    )}
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  isDark
                    ? 'border-cyber-border bg-cyber-card text-cyber-cyan hover:border-cyber-cyan/50'
                    : 'border-gray-200 bg-gray-100 text-purple-600 hover:border-purple-300'
                }`}
              >
                {isDark ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
              </motion.button>

              {/* CTA */}
              <motion.a
                href="mailto:bakkarsaifali@gmail.com"
                className="hidden sm:block cyber-btn-primary text-xs px-4 py-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.a>

              {/* Mobile menu toggle */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-9 h-9 flex items-center justify-center rounded-xl border ${
                  isDark ? 'border-cyber-border text-white' : 'border-gray-200 text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 right-0 bottom-0 z-40 w-72 flex flex-col pt-20 pb-8 px-6 ${
              isDark ? 'bg-cyber-surface/95 backdrop-blur-xl border-l border-cyber-border' : 'bg-white/95 backdrop-blur-xl border-l border-gray-200'
            }`}
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left px-4 py-3 rounded-xl font-syne font-medium text-base transition-all duration-200 ${
                    isDark ? 'text-gray-300 hover:text-white hover:bg-cyber-card' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-8">
              <a href="mailto:bakkarsaifali@gmail.com" className="cyber-btn-primary block text-center text-sm">
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
