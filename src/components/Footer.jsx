import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/saif-ali6600', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/saif-ali6600', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:bakkarsaifali@gmail.com', label: 'Email' },
];

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`relative pt-16 pb-8 border-t ${isDark ? 'border-cyber-border' : 'border-gray-200'}`}>
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}>
                <span className="font-syne font-bold text-white text-sm">S</span>
              </div>
              <span className={`font-syne font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Saif<span className="gradient-text">.</span>
              </span>
            </div>
            <p className={`font-outfit text-xs leading-relaxed max-w-[200px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Frontend Developer crafting fast, beautiful web experiences with React.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => {
                    const el = document.getElementById(link.href.replace('#', ''));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-left font-outfit text-sm transition-colors duration-200 w-fit ${
                    isDark ? 'text-gray-500 hover:text-cyber-cyan' : 'text-gray-500 hover:text-purple-600'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact quick */}
          <div>
            <p className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Get In Touch
            </p>
            <div className="space-y-2">
              <a
                href="mailto:bakkarsaifali@gmail.com"
                className={`block font-outfit text-sm transition-colors duration-200 ${
                  isDark ? 'text-gray-500 hover:text-cyber-cyan' : 'text-gray-500 hover:text-purple-600'
                }`}
              >
                bakkarsaifali@gmail.com
              </a>
              <a
                href="tel:+917057656600"
                className={`block font-outfit text-sm transition-colors duration-200 ${
                  isDark ? 'text-gray-500 hover:text-cyber-cyan' : 'text-gray-500 hover:text-purple-600'
                }`}
              >
                +91 70576566600
              </a>
              <div className="flex gap-2 pt-1">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                      isDark
                        ? 'border-cyber-border text-gray-500 hover:text-cyber-cyan hover:border-cyber-cyan/30'
                        : 'border-gray-200 text-gray-400 hover:text-purple-600 hover:border-purple-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-8 ${isDark ? 'bg-cyber-border' : 'bg-gray-200'}`} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`font-outfit text-xs flex items-center gap-1.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © {year} Saif Ali Bakkar — Built with
            <FiHeart className="w-3 h-3 text-red-400" />
            using React, Tailwind & Framer Motion
          </p>

          <div className="flex items-center gap-3">
            <span className={`font-mono text-[10px] ${isDark ? 'text-gray-700' : 'text-gray-400'}`}>v1.0.0</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? 'border-cyber-border text-gray-500 hover:text-cyber-cyan hover:border-cyber-cyan/30'
                  : 'border-gray-200 text-gray-400 hover:text-purple-600 hover:border-purple-200'
              }`}
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
