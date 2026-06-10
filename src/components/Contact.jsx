import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'bakkarsaifali@gmail.com',
    href: 'mailto:bakkarsaifali@gmail.com',
    accent: '#00d4ff',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 7057656600',
    href: 'tel:+917057656600',
    accent: '#00ff9f',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India',
    href: null,
    accent: '#f0abfc',
  },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/saif6600', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/saif-ali6600', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:bakkarsaifali@gmail.com', label: 'Email' },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjgjjka';

const Contact = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isDark = theme === 'dark';

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = 'Valid email is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || '(No subject)',
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        const data = await response.json();
        setErrors({
          submit: data?.errors?.[0]?.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className={`py-28 relative ${isDark ? 'bg-cyber-surface/30' : 'bg-gray-50/60'}`}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">07 — Contact</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Open to frontend developer roles, internships, and freelance projects. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-4 p-4 cyber-card transition-all duration-300 ${
                  href ? 'cursor-pointer' : 'cursor-default'
                } ${isDark ? 'hover:border-white/15' : 'hover:border-gray-300 hover:shadow-sm'}`}
                onClick={() => href && window.open(href)}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
                >
                  <Icon className="w-4 h-4" style={{ color: accent }} />
                </div>
                <div>
                  <p className={`font-mono text-[10px] uppercase tracking-wide mb-0.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    {label}
                  </p>
                  <p className={`font-outfit text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 cyber-card"
            >
              <p className={`font-mono text-[10px] uppercase tracking-wide mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                      isDark
                        ? 'border-cyber-border text-gray-400 hover:border-white/20 hover:text-white'
                        : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`p-4 rounded-xl border border-dashed ${
                isDark ? 'border-green-500/30 bg-green-500/5' : 'border-green-400/40 bg-green-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">Available Now</span>
              </div>
              <p className={`font-outfit text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                Open to frontend developer positions and freelance work.
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="cyber-card p-7 lg:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-green-400/15 border border-green-400/30 flex items-center justify-center mb-4"
                  >
                    <FiCheck className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className={`font-syne font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Message Sent! 🎉
                  </h3>
                  <p className={`font-outfit text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block font-mono text-[10px] uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`cyber-input ${errors.name ? 'border-red-500/60' : ''}`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 font-mono text-[10px] text-red-400 mt-1">
                          <FiAlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={`block font-mono text-[10px] uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`cyber-input ${errors.email ? 'border-red-500/60' : ''}`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 font-mono text-[10px] text-red-400 mt-1">
                          <FiAlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className={`block font-mono text-[10px] uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Frontend Developer Position / Project Inquiry"
                      className="cyber-input"
                    />
                  </div>

                  <div>
                    <label className={`block font-mono text-[10px] uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hi Saif, I'd like to discuss a frontend developer opportunity at..."
                      className={`cyber-input resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 font-mono text-[10px] text-red-400 mt-1">
                        <FiAlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-xl border border-red-500/30 bg-red-500/5"
                    >
                      <FiAlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <p className="font-mono text-[10px] text-red-400">{errors.submit}</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -2 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-syne font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                      boxShadow: loading ? 'none' : '0 8px 30px rgba(0,212,255,0.25)',
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className={`text-center font-mono text-[10px] ${isDark ? 'text-gray-700' : 'text-gray-400'}`}>
                    Secured &amp; delivered by{' '}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline transition-colors ${isDark ? 'hover:text-cyber-cyan' : 'hover:text-purple-600'}`}
                    >
                      Formspree
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
