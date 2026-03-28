import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiRedux, SiAxios,
  SiGit, SiGithub, SiVite, SiNodedotjs,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FiChrome } from 'react-icons/fi';

const skillCategories = [
  {
    category: 'Frontend Core',
    accent: '#00d4ff',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 90 },
    ],
  },
  {
    category: 'Styling',
    accent: '#7c3aed',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 80 },
    ],
  },
  {
    category: 'State & API',
    accent: '#00ff9f',
    skills: [
      { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 78 },
      { name: 'Context API', icon: SiReact, color: '#61DAFB', level: 85 },
      { name: 'REST APIs', icon: SiAxios, color: '#5A29E4', level: 82 },
      { name: 'Axios', icon: SiAxios, color: '#5A29E4', level: 80 },
    ],
  },
  {
    category: 'Tools',
    accent: '#f0abfc',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 88 },
      { name: 'VS Code', icon: VscCode, color: '#007ACC', level: 92 },
      { name: 'Chrome DevTools', icon: FiChrome, color: '#4285F4', level: 80 },
      { name: 'Vite', icon: SiVite, color: '#646CFF', level: 78 },
      { name: 'NPM', icon: SiNodedotjs, color: '#CB3837', level: 82 },
    ],
  },
];

const SkillCard = ({ name, icon: Icon, color, level, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.05 }}
      className={`skill-tag cyber-card p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group ${
        isDark ? 'hover:border-white/10' : 'hover:border-gray-300 hover:shadow-md'
      }`}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110" style={{ color }} />
      </div>
      <span className={`font-outfit text-xs font-medium text-center leading-tight ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {name}
      </span>
      {/* Level bar */}
      <div className={`w-full h-0.5 rounded-full overflow-hidden ${isDark ? 'bg-cyber-border' : 'bg-gray-200'}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.03, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </motion.div>
  );
};

const Skills = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isDark = theme === 'dark';

  return (
    <section id="skills" className={`py-28 relative ${isDark ? 'bg-cyber-surface/30' : 'bg-gray-50/80'}`}>
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">02 — Tech Stack</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            A carefully chosen stack for building fast, beautiful, and maintainable web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map(({ category, accent, skills }) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
                <span className={`font-mono text-xs tracking-widest uppercase ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {category}
                </span>
                <div className={`flex-1 h-px ${isDark ? 'bg-cyber-border' : 'bg-gray-200'}`} />
              </motion.div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {skills.map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} index={i} isDark={isDark} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`mt-12 text-center font-mono text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
        >
          + Always learning new technologies and frameworks
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)' }} />
    </section>
  );
};

export default Skills;
