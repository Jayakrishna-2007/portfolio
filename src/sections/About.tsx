import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users2, GraduationCap, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  const iconMap = {
    '01': <Code2 className="w-6 h-6 text-electric" />,
    '02': <Lightbulb className="w-6 h-6 text-coral" />,
    '03': <Users2 className="w-6 h-6 text-lavender" />,
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-lavender/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="01"
          tag="ABOUT ME"
          title={personalData.about.title}
          subtitle="A blend of analytical systems thinking, rapid prototyping, and collaborative leadership."
          accent="blue"
        />

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
              {personalData.about.narrative.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick Facts & Identity Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-3xl bg-white border border-ink/10 shadow-soft space-y-5 mt-8"
            >
              {/* Profile Bar */}
              <div className="flex items-center gap-4 pb-4 border-b border-ink/5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-electric/30 shadow-sm flex-shrink-0">
                  <img
                    src={personalData.avatar}
                    alt="Jayakrishna M."
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-heading font-extrabold text-ink">
                      {personalData.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-electric-light text-electric border border-electric/20 font-semibold">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted">
                    {personalData.title}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-light flex items-center justify-center text-electric flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-muted uppercase">Undergraduate</span>
                    <span className="text-sm font-bold text-ink block">B.Tech Computer Science</span>
                    <span className="text-xs text-ink-muted">SRMIST (2025 – 2029)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center text-coral flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-muted uppercase">Location</span>
                    <span className="text-sm font-bold text-ink block">Tiruchirappalli</span>
                    <span className="text-xs text-ink-muted">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Three Visual Highlights */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {personalData.about.highlights.map((highlight, idx) => {
              const accentColorClass = {
                blue: 'border-electric/25 bg-white',
                coral: 'border-coral/25 bg-white',
                lavender: 'border-lavender/25 bg-white',
              }[highlight.color];

              return (
                <motion.div
                  key={highlight.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`group p-6 rounded-3xl border ${accentColorClass} shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-ivory border border-ink/5 shadow-xs">
                        {iconMap[highlight.number as '01' | '02' | '03']}
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-bold tracking-wider text-ink-muted uppercase block">
                          Highlight // {highlight.number}
                        </span>
                        <h3 className="text-lg font-heading font-extrabold text-ink tracking-tight">
                          {highlight.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-ink-muted px-2.5 py-1 rounded-full bg-ivory border border-ink/5">
                      {highlight.tagline}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-ink leading-snug">
                    "{highlight.description}"
                  </p>

                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    {highlight.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
