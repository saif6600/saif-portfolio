import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#04040f' }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Animated rings */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute w-24 h-24 rounded-full"
              style={{ border: '2px solid transparent', borderTopColor: '#00d4ff', borderRightColor: 'rgba(0,212,255,0.2)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute w-16 h-16 rounded-full"
              style={{ border: '2px solid transparent', borderTopColor: '#7c3aed', borderLeftColor: 'rgba(124,58,237,0.2)' }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-6 rounded-full"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
            />
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-cyber-cyan mb-2">Initializing</p>
            <h1 className="font-syne text-2xl font-bold text-white">
              Saif Ali <span className="gradient-text">Bakkar</span>
            </h1>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 w-48 h-0.5 bg-cyber-border rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-full w-1/2 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
