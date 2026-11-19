import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 400); // Allow exit animation to finish
    }, 750);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Animated Monogram Symbol */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-3xl bg-gradient-to-br from-electric via-electric to-lavender p-0.5 shadow-soft-xl"
            >
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 11V23C14 26.5 11.5 29 8 29" stroke="#527BFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 29V11L24 20L31 11V29" stroke="#20243A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="32" cy="9" r="2.5" fill="#FF827A" />
                </svg>
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex items-center gap-2"
            >
              <span className="font-heading font-extrabold text-sm tracking-tight text-ink">
                Jayakrishna<span className="text-electric">.</span>M
              </span>
              <span className="w-1 h-1 rounded-full bg-coral animate-ping" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

