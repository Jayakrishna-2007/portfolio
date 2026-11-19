import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Cpu, Megaphone, Wrench, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { achievementsData } from '../data/achievements';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'devfest-2026': <Sparkles className="w-5 h-5 text-electric" />,
    'hackathons': <Trophy className="w-5 h-5 text-coral" />,
    'robothinkers-exec': <Users className="w-5 h-5 text-lavender" />,
    'esociety-ambassador': <Megaphone className="w-5 h-5 text-electric" />,
    'hardware-software': <Cpu className="w-5 h-5 text-coral" />,
    'workshops': <Wrench className="w-5 h-5 text-lavender" />,
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-ivory-muted/30 relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="06"
          tag="COMMUNITY & INITIATIVES"
          title="Beyond the Code"
          subtitle="Hackathons, developer summits, maker initiatives, and leadership activities fostering technological growth."
          accent="coral"
        />

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const borderAccent = {
              blue: 'border-electric/25 hover:border-electric/50',
              coral: 'border-coral/25 hover:border-coral/50',
              lavender: 'border-lavender/30 hover:border-lavender/60',
            }[item.accent];

            const badgeAccent = {
              blue: 'bg-electric-light text-electric border-electric/20',
              coral: 'bg-coral-light text-coral-hover border-coral/20',
              lavender: 'bg-lavender-light text-lavender-hover border-lavender/30',
            }[item.accent];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 sm:p-7 rounded-3xl bg-white border ${borderAccent} shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-ivory border border-ink/5">
                      {iconMap[item.id] || <Sparkles className="w-5 h-5 text-electric" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-ink-muted px-2.5 py-0.5 rounded-full bg-ivory border border-ink/10">
                      {item.year}
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${badgeAccent} inline-block mb-2`}>
                    {item.category}
                  </span>

                  <h3 className="text-lg font-heading font-extrabold text-ink tracking-tight group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-ink-muted mt-1">
                    {item.organization}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="text-emerald-600 font-semibold">● Active Record</span>
                  <span className="text-ink font-medium">SRMIST & Regional</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
