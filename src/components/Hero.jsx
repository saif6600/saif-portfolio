import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { useTypingEffect } from '../hooks/useTypingEffect';

const typingWords = [
  'Frontend Developer',
  'React.js Engineer',
  'UI/UX Enthusiast',
  'Clean Code Advocate',
  'Performance Optimizer',
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/saif-ali6600', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/saif-ali6600', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:bakkarsaifali@gmail.com', label: 'Email' },
];

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '1+', label: 'Year Experience' },
  { value: '100%', label: 'Passion' },
];

const Hero = ({ theme }) => {
  const typedText = useTypingEffect(typingWords, 90, 50, 2200);
  const isDark = theme === 'dark';

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(240,171,252,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-border bg-cyber-card mb-6 text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={`font-syne text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Saif Ali
              <br />
              <span className="gradient-text-animated">Bakkar</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <span className="font-mono text-sm text-gray-500">{'>'}</span>
              <span className="font-mono text-lg text-cyber-cyan typing-cursor">{typedText}</span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className={`text-base leading-relaxed mb-8 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Specializing in <span className="text-cyber-cyan font-medium">React.js</span> and modern JavaScript.
              I build scalable, high-performance web applications with clean code and pixel-perfect UI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="cyber-btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <FiArrowDown className="w-4 h-4 animate-bounce" />
              </motion.button>
              <motion.a
  href="/resume.pdf"
  download="Saif_Ali_Bakkar_Resume.pdf"
  className="cyber-btn-secondary flex items-center gap-2"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
  <FiDownload className="w-4 h-4" />
  Download CV
</motion.a>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? 'border-cyber-border bg-cyber-card text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/40'
                      : 'border-gray-200 bg-white text-gray-500 hover:text-purple-600 hover:border-purple-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
              <div className={`h-px flex-1 max-w-[60px] ${isDark ? 'bg-cyber-border' : 'bg-gray-200'}`} />
              <span className={`font-mono text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>@saif-ali6600</span>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 rounded-full"
              style={{ border: '1px dashed rgba(0,212,255,0.25)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-64 h-64 rounded-full"
              style={{ border: '1px dashed rgba(124,58,237,0.2)' }}
            />

            {/* Central card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-56 h-56"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden border border-cyber-border"
                style={{
                  background: 'linear-gradient(135deg, #0d0d22, #1a0a2e)',
                  boxShadow: '0 0 60px rgba(0,212,255,0.12), 0 0 100px rgba(124,58,237,0.08)'
                }}>
                {/* Code lines decoration */}
                <div className="p-6 h-full flex flex-col justify-center gap-3">
                  {[
                    { color: '#00d4ff', width: '70%', label: 'const saif = {' },
                    { color: '#f0abfc', width: '85%', label: '  role: "Dev",' },
                    { color: '#00ff9f', width: '75%', label: '  stack: React,' },
                    { color: '#f0abfc', width: '65%', label: '  passion: ∞' },
                    { color: '#00d4ff', width: '40%', label: '}' },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.15 }}
                      className="flex items-center gap-2"
                    >
                      <span
                        className="font-mono text-xs"
                        style={{ color: line.color }}
                      >{line.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating chips */}
            {[
              { label: 'React.js', pos: 'top-4 -left-8', color: '#00d4ff', delay: 1.2 },
              { label: 'TypeScript', pos: 'top-4 -right-8', color: '#7c3aed', delay: 1.4 },
              { label: 'Tailwind', pos: 'bottom-4 -left-4', color: '#00ff9f', delay: 1.6 },
              { label: 'Redux', pos: 'bottom-4 -right-8', color: '#f0abfc', delay: 1.8 },
            ].map((chip) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: chip.delay, type: 'spring' }}
                className={`absolute ${chip.pos} px-3 py-1.5 rounded-xl backdrop-blur-sm border border-cyber-border font-mono text-xs`}
                style={{
                  background: isDark ? 'rgba(13,13,34,0.9)' : 'rgba(255,255,255,0.95)',
                  color: chip.color,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
                }}
              >
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-sm"
        >
          {stats.map(({ value, label }, i) => (
            <div key={label} className="text-center">
              <div className="font-syne text-2xl font-bold gradient-text">{value}</div>
              <div className={`font-outfit text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`font-mono text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #00d4ff, transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
