'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    const timer = setTimeout(() => setVisible(false), 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-dark flex flex-col items-center justify-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-60" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-gold/60 font-sans text-xs tracking-[0.4em] uppercase mb-3">
                Especialista em Estética Oral
              </p>
              <h1 className="font-cormorant text-white text-4xl font-light tracking-wide">
                Dra. Michele Herreira
              </h1>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Progress number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 font-sans text-xs tabular-nums"
            >
              {progress.toString().padStart(3, '0')}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
