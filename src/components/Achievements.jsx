import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiStar, FiTrendingUp, FiGithub, FiCode, FiZap } from 'react-icons/fi';

const achievements = [
  {
    icon: FiCode,
    title: '3+ Production-Ready Projects',
    description: 'Built and deployed fully functional frontend applications simulating real-world business scenarios.',
    accent: '#00d4ff',
    stat: '3+',
    statLabel: 'Projects',
  },
  {
    icon: FiTrendingUp,
    title: '30% Performance Improvement',
    description: 'Achieved measurable 30% faster load times through code splitting, lazy loading, and asset optimization.',
    accent: '#00ff9f',
    stat: '30%',
    statLabel: 'Faster',
  },
  {
    icon: FiGithub,
    title: 'Active GitHub Contributor',
    description: 'Maintains consistent GitHub activity with clean commit history, proper branching, and descriptive PRs.',
    accent: '#7c3aed',
    stat: '100+',
    statLabel: 'Commits',
  },
  {
    icon: FiZap,
    title: 'Modern Frontend Practices',
    description: 'Strong command of ES6+, component architecture, custom hooks, and performance-first development.',
    accent: '#f0abfc',
    stat: 'ES6+',
    statLabel: 'Mastered',
  },
  {
    icon: FiStar,
    title: 'REST API Integration Expert',
    description: 'Proficient in integrating third-party APIs with Axios and Fetch, including error handling and loading states.',
    accent: '#00d4ff',
    stat: '5+',
    statLabel: 'APIs',
  },
  {
    icon: FiAward,
    title: 'Master\'s Degree in CS',
    description: 'Completed Master of Computer Science from CSIBER Kolhapur, building a strong algorithmic and systems foundation.',
    accent: '#7c3aed',
    stat: 'M.Sc.',
    statLabel: 'Degree',
  },
];

const Achievements = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isDark = theme === 'dark';

  return (
    <section id="achievements" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">05 — Recognition</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Key milestones that reflect my dedication to building quality frontend applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`cyber-card p-6 group transition-all duration-300 ${
                isDark ? 'hover:border-white/10' : 'hover:shadow-lg hover:border-gray-300'
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}20, ${item.accent}08)`,
                    border: `1px solid ${item.accent}30`,
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                </div>
                <div className="text-right">
                  <div className="font-syne font-bold text-xl" style={{ color: item.accent }}>
                    {item.stat}
                  </div>
                  <div className={`font-mono text-[10px] uppercase tracking-wide ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    {item.statLabel}
                  </div>
                </div>
              </div>

              <h3 className={`font-syne font-semibold text-sm mb-2 leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`font-outfit text-xs leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
