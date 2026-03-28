import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Self / Practice Projects',
    type: 'Internship · Remote',
    period: 'Jan 2024 – Present',
    duration: '1+ Year',
    location: 'Remote, India',
    accent: '#00d4ff',
    highlights: [
      'Built multiple React-based applications simulating real-world business scenarios',
      'Improved UI performance and responsiveness across all projects by 30%+',
      'Followed clean architecture patterns with reusable, modular component design',
      'Implemented REST API integration using Axios and Fetch API',
      'Managed version control professionally with Git & GitHub workflows',
      'Deployed production apps to Vercel with CI/CD pipelines',
    ],
    tags: ['React.js', 'Redux', 'Tailwind CSS', 'REST APIs', 'Git', 'Vercel'],
  },
];

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Chhatrapati Shahu Institute of Business Education and Research',
    short: 'CSIBER, Kolhapur',
    period: '2022 – 2024',
    accent: '#7c3aed',
    focus: 'Software Engineering, Algorithms, Web Technologies, Database Systems',
  },
];

const Experience = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">03 — Journey</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <FiBriefcase className={`w-5 h-5 ${isDark ? 'text-cyber-cyan' : 'text-purple-600'}`} />
              <h3 className={`font-syne font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Experience</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #00d4ff, rgba(0,212,255,0))' }} />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative pl-16 mb-8"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-5 w-4 h-4 rounded-full border-2 border-cyber-bg"
                    style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}` }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`cyber-card p-6 transition-all duration-300 ${
                      isDark ? 'hover:border-cyber-cyan/30' : 'hover:border-purple-200 hover:shadow-md'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className={`font-syne font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h4>
                        <p className="font-outfit text-sm" style={{ color: exp.accent }}>{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-mono border ${
                        isDark ? 'border-cyber-border text-gray-400' : 'border-gray-200 text-gray-500'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className={`flex items-center gap-1.5 text-xs font-mono ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        <FiCalendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs font-mono ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        <FiMapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + j * 0.06 }}
                          className={`flex items-start gap-2.5 text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <FiCheckCircle className="w-3 h-3 mt-0.5 shrink-0" style={{ color: exp.accent }} />
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono"
                          style={{
                            background: `${exp.accent}12`,
                            color: exp.accent,
                            border: `1px solid ${exp.accent}25`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <svg className={`w-5 h-5 ${isDark ? 'text-cyber-purple' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              <h3 className={`font-syne font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0))' }} />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative pl-16 mb-8"
                >
                  <div
                    className="absolute left-4 top-5 w-4 h-4 rounded-full border-2 border-cyber-bg"
                    style={{ background: edu.accent, boxShadow: `0 0 12px ${edu.accent}` }}
                  />

                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`cyber-card p-6 transition-all duration-300 ${
                      isDark ? 'hover:border-cyber-purple/30' : 'hover:border-purple-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className={`font-syne font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h4>
                        <p className="font-outfit text-sm" style={{ color: edu.accent }}>{edu.short}</p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono"
                        style={{ background: `${edu.accent}15`, color: edu.accent, border: `1px solid ${edu.accent}30` }}
                      >
                        {edu.period}
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>

                    <div className={`p-3 rounded-xl border text-xs font-outfit ${isDark ? 'border-cyber-border bg-cyber-bg/50 text-gray-500' : 'border-gray-200 bg-gray-50 text-gray-500'}`}>
                      <span className="font-mono mr-2" style={{ color: edu.accent }}>Focus:</span>
                      {edu.focus}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Currently learning card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`cyber-card p-6 border-dashed ${isDark ? 'border-cyber-border/60' : 'border-gray-300'}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`font-mono text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Currently Learning</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Node.js', 'GraphQL'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-lg text-xs font-mono border ${isDark ? 'border-cyber-border text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
