import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: 'blue' | 'lavender' | 'coral';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  centered = false,
  accent = 'blue'
}) => {
  const accentBorder = {
    blue: 'border-electric/30 text-electric bg-electric/5',
    lavender: 'border-lavender/30 text-lavender bg-lavender/5',
    coral: 'border-coral/30 text-coral bg-coral/5',
  }[accent];

  const accentLine = {
    blue: 'from-electric to-transparent',
    lavender: 'from-lavender to-transparent',
    coral: 'from-coral to-transparent',
  }[accent];

  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {/* Category & index tracker */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider mb-4 border ${accentBorder} ${centered ? 'justify-center' : ''}`}
      >
        <span className="font-semibold">// {number}</span>
        <span className="opacity-40">•</span>
        <span className="uppercase tracking-widest">{tag}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-ink tracking-tight leading-[1.15]"
      >
        {title}
      </motion.h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative hairline */}
      <div className={`mt-5 h-[2px] w-20 bg-gradient-to-r ${accentLine} ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

