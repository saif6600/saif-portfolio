import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { SiReact, SiRedux, SiTailwindcss, SiAxios } from 'react-icons/si';

const projects = [
  {
    id: '01',
    title: 'E-Commerce Web App',
    tagline: 'Full-featured shopping experience',
    description:
      'A production-ready e-commerce platform featuring product listing, advanced filtering, cart management, and an optimized responsive UI. Handles complex state with Redux.',
    tech: ['React', 'Redux', 'REST API', 'CSS3', 'Axios'],
    gradient: 'from-cyber-cyan/20 via-transparent to-transparent',
    accentColor: '#00d4ff',
    features: ['Product listing & filtering', 'Cart system', 'Performance optimized', 'Responsive UI'],
    github: 'https://github.com/saif-ali6600',
    live: '#',
    featured: true,
  },
  {
    id: '02',
    title: 'Portfolio Website',
    tagline: 'Personal brand & project showcase',
    description:
      'A visually engaging portfolio site built from scratch with React, achieving 30% faster load times through asset optimization and lazy loading. Deployed on Vercel.',
    tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    gradient: 'from-cyber-purple/20 via-transparent to-transparent',
    accentColor: '#7c3aed',
    features: ['30% faster load time', 'Vercel deployment', 'Responsive design', 'Custom animations'],
    github: 'https://github.com/saif-ali6600',
    live: 'https://your-portfolio-link.vercel.app',
    featured: true,
  },
  {
    id: '03',
    title: 'Weather App',
    tagline: 'Real-time weather at your fingertips',
    description:
      'A clean, intuitive weather application using a live weather API. Features real-time data fetching, robust error handling, and reusable components following best practices.',
    tech: ['React', 'OpenWeather API', 'Axios', 'CSS3'],
    gradient: 'from-green-400/20 via-transparent to-transparent',
    accentColor: '#00ff9f',
    features: ['Live weather data', 'Error handling', 'Reusable components', 'City search'],
    github: 'https://github.com/saif-ali6600',
    live: '#',
    featured: false,
  },
];

const techColorMap = {
  'React': '#61DAFB',
  'Redux': '#764ABC',
  'REST API': '#00d4ff',
  'CSS3': '#1572B6',
  'Axios': '#5A29E4',
  'HTML5': '#E34F26',
  'JavaScript': '#F7DF1E',
  'Vercel': '#ffffff',
  'OpenWeather API': '#eb6e4b',
  'Tailwind': '#06B6D4',
};

const ProjectCard = ({ project, index, isDark }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
      className="group relative"
    >
      <div
        className={`cyber-card overflow-hidden transition-all duration-500 ${
          isDark ? 'hover:border-white/10' : 'hover:border-gray-300 hover:shadow-xl'
        }`}
        style={{ '--accent': project.accentColor }}
      >
        {/* Header gradient bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}44, transparent)` }}
        />

        <div className="p-7 lg:p-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left content */}
            <div className="lg:col-span-3">
              {/* Number + tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs" style={{ color: project.accentColor }}>
                  {project.id}
                </span>
                {project.featured && (
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-mono"
                    style={{ background: `${project.accentColor}15`, color: project.accentColor, border: `1px solid ${project.accentColor}30` }}
                  >
                    Featured
                  </span>
                )}
              </div>

              <h3 className={`font-syne font-bold text-2xl mb-1.5 group-hover:text-cyber-cyan transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`font-outfit text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{project.tagline}</p>
              <p className={`font-outfit text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors duration-200 ${
                      isDark ? 'border-cyber-border text-gray-400 hover:border-white/20' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                    style={{ borderLeftColor: techColorMap[t] || project.accentColor, borderLeftWidth: '2px' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-outfit font-medium transition-all duration-300 ${
                    isDark ? 'border-cyber-border text-gray-300 hover:border-white/20 hover:text-white' : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-outfit font-semibold text-white transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}dd, ${project.accentColor}88)`,
                    boxShadow: `0 4px 20px ${project.accentColor}30`,
                  }}
                >
                  Live Demo
                  <FiExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>

            {/* Right features */}
            <div className={`lg:col-span-2 p-5 rounded-xl border ${isDark ? 'border-cyber-border bg-cyber-bg/50' : 'border-gray-100 bg-gray-50'}`}>
              <p className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                Key Features
              </p>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className={`flex items-center gap-3 text-xs font-outfit ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: project.accentColor }}
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* Preview placeholder */}
              <div
                className="mt-5 rounded-xl overflow-hidden h-28 flex items-center justify-center relative"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}08, ${project.accentColor}03)`, border: `1px solid ${project.accentColor}15` }}
              >
                <div className="text-center">
                  <FiArrowUpRight className="w-6 h-6 mx-auto mb-1" style={{ color: project.accentColor }} />
                  <span className="font-mono text-[10px]" style={{ color: project.accentColor }}>View Project</span>
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 grid-bg opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-28 relative ${isDark ? 'bg-cyber-surface/20' : 'bg-gray-50/60'}`}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">04 — Work</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Real-world projects built with production standards — optimized, responsive, and deployed.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isDark={isDark} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/saif-ali6600"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-outfit text-sm font-medium transition-all duration-300 ${
              isDark ? 'border-cyber-border text-gray-300 hover:border-cyber-cyan/40 hover:text-cyber-cyan' : 'border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-600'
            }`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiGithub className="w-4 h-4" />
            More on GitHub
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)' }} />
    </section>
  );
};

export default Projects;
