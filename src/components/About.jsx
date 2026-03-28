import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiZap, FiLayers, FiHeart } from 'react-icons/fi';

const traits = [
  {
    icon: FiCode,
    title: 'Clean Code',
    desc: 'Writing readable, maintainable, and scalable code is not an option — it\'s a standard.',
    accent: '#00d4ff',
  },
  {
    icon: FiZap,
    title: 'Performance First',
    desc: 'Every millisecond matters. I optimize for speed, responsiveness, and smooth UX.',
    accent: '#7c3aed',
  },
  {
    icon: FiLayers,
    title: 'Reusable Components',
    desc: 'Building modular, composable components that scale with any project size.',
    accent: '#00ff9f',
  },
  {
    icon: FiHeart,
    title: 'Passionate Learner',
    desc: 'Constantly leveling up — from React internals to modern CSS techniques.',
    accent: '#f0abfc',
  },
];

const About = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p variants={itemVariants} className="section-label mb-3">01 — About Me</motion.p>
            <motion.h2 variants={itemVariants} className={`section-title mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              I craft digital
              <br />
              <span className="gradient-text">experiences</span>
            </motion.h2>
            <motion.p variants={itemVariants} className={`text-base leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Frontend Developer specializing in <strong className={isDark ? 'text-white' : 'text-gray-900'}>React.js</strong> and modern JavaScript (ES6+),
              with hands-on experience building scalable, high-performance web applications.
            </motion.p>
            <motion.p variants={itemVariants} className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Skilled in REST API integration, performance optimization, and responsive UI design.
              I hold a <strong className={isDark ? 'text-white' : 'text-gray-900'}>Master of Computer Science</strong> from CSIBER Kolhapur and have built
              multiple production-ready applications from scratch.
            </motion.p>

            {/* Info grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Saif Ali Bakkar' },
                { label: 'Role', value: 'Frontend Developer' },
                { label: 'Education', value: 'M.Sc. Computer Science' },
                { label: 'Location', value: 'India' },
                { label: 'Email', value: 'bakkarsaifali@gmail.com' },
                { label: 'Status', value: '🟢 Open to Work' },
              ].map(({ label, value }) => (
                <div key={label} className={`p-3 rounded-xl border ${isDark ? 'border-cyber-border bg-cyber-card' : 'border-gray-200 bg-gray-50'}`}>
                  <p className={`font-mono text-[10px] uppercase tracking-wider mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                  <p className={`font-outfit text-sm font-medium truncate ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map(({ icon: Icon, title, desc, accent }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`cyber-card p-5 group cursor-default transition-all duration-300 ${
                  isDark ? 'hover:border-cyber-cyan/30' : 'hover:border-purple-200'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${accent}20, ${accent}08)`,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className={`font-syne font-semibold text-sm mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`font-outfit text-xs leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
