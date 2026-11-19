import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-lavender/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="05"
          tag="ACADEMICS"
          title="Education & Foundations"
          subtitle="Rigorous foundational computer science education coupled with practical hands-on engineering."
          accent="blue"
        />

        {/* Premium Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-4xl bg-gradient-to-br from-white via-white to-soft-blue/30 border border-electric/25 shadow-soft-xl overflow-hidden group"
        >
          {/* Decorative background geometry */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-electric/10 to-lavender/10 blur-xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full border border-dashed border-electric/20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Degree & Institution */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-electric flex items-center justify-center text-white shadow-soft">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric block">
                    Undergraduate Degree Program
                  </span>
                  <span className="text-xs text-ink-muted">Computer Science & Engineering</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-ink tracking-tight">
                  {personalData.education.degree}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-ink-muted mt-1.5">
                  {personalData.education.institution}
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted pt-1">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-ivory border border-ink/10 shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-electric" />
                  {personalData.education.period}
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-ivory border border-ink/10 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  {personalData.education.location}
                </span>
              </div>
            </div>

            {/* Right Column: Key Coursework & Foundations */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-white/90 border border-ink/10 shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-electric" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                    Core Coursework
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-electric-light text-electric font-semibold border border-electric/20">
                  Focus Modules
                </span>
              </div>

              <div className="space-y-2.5">
                {personalData.education.keyFocus.map((focus, idx) => (
                  <div
                    key={focus}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-ivory border border-ink/5 text-xs font-medium text-ink hover:border-electric/30 transition-colors"
                  >
                    <span className="w-5 h-5 rounded-lg bg-electric-light text-electric font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
