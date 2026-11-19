import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const iconMap = {
    blue: <Briefcase className="w-5 h-5 text-electric" />,
    coral: <Users className="w-5 h-5 text-coral" />,
    lavender: <Megaphone className="w-5 h-5 text-lavender" />,
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="03"
          tag="CAREER & LEADERSHIP"
          title="Experience & Community Impact"
          subtitle="Selected industry internship, collegiate technical executive leadership, and regional entrepreneurship ambassadorship."
          accent="lavender"
        />

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-ink/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {experienceData.map((item, idx) => {
            const dotClasses = {
              blue: 'bg-electric ring-4 ring-electric-light',
              coral: 'bg-coral ring-4 ring-coral-light',
              lavender: 'bg-lavender ring-4 ring-lavender-light',
            }[item.accentColor];

            const borderClasses = {
              blue: 'border-electric/25 hover:border-electric/50',
              coral: 'border-coral/25 hover:border-coral/50',
              lavender: 'border-lavender/30 hover:border-lavender/60',
            }[item.accentColor];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full ${dotClasses} transition-transform duration-300 group-hover:scale-125`}
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-3xl bg-white border ${borderClasses} shadow-soft hover:shadow-soft-lg transition-all duration-300`}>
                  
                  {/* Top metadata row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/5 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-ivory border border-ink/5">
                        {iconMap[item.accentColor]}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted block">
                          {item.type}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-ink tracking-tight">
                          {item.role}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-electric px-3 py-1 rounded-full bg-ivory border border-ink/10 inline-block">
                        {item.period}
                      </span>
                      {item.statusNote && (
                        <span className="block text-[11px] font-mono text-emerald-600 font-semibold mt-1">
                          ● {item.statusNote}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-ink flex items-center gap-1.5">
                      {item.organization}
                      {item.id === 'yuga-yatra' && (
                        <Sparkles className="w-4 h-4 text-electric inline" />
                      )}
                    </span>
                  </div>

                  {/* Description summary */}
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-4 space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                        <CheckCircle2 className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="mt-6 pt-4 border-t border-ink/5 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-ivory text-ink-muted border border-ink/10"
                      >
                        #{badge}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
