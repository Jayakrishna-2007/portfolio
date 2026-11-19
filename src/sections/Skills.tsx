import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Eye, Wrench, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skillsCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categoryIcons = [
    <Terminal className="w-4 h-4" />,
    <Layout className="w-4 h-4" />,
    <Server className="w-4 h-4" />,
    <Eye className="w-4 h-4" />,
    <Wrench className="w-4 h-4" />,
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-ivory-muted/40 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-lavender/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-electric/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="04"
          tag="TECHNICAL REPERTOIRE"
          title="Skills & Technologies"
          subtitle="Honest, battle-tested proficiencies organized by domain. Grounded in coursework, projects, and active development."
          accent="blue"
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {skillsCategories.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-mono font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-electric text-white shadow-soft shadow-electric/25'
                    : 'bg-white text-ink-muted hover:text-ink border border-ink/10 hover:border-ink/20'
                }`}
              >
                <span>{categoryIcons[idx]}</span>
                <span>{cat.title}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-ink-muted'}`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories[selectedCategory].skills.map((skill, sIdx) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: sIdx * 0.06 }}
                className="p-6 rounded-3xl bg-white border border-ink/10 shadow-soft hover:shadow-soft-lg hover:border-electric/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-electric px-2.5 py-0.5 rounded-full bg-electric-light border border-electric/20">
                      {skill.tag || 'Skill'}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-electric transition-colors" />
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-ink tracking-tight group-hover:text-electric transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Practiced
                  </span>
                  <span className="group-hover:text-electric transition-colors">Verified in code</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Summary Matrix Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-lavender/30 shadow-soft"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-ink/5 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-lavender block">
                Quick Repertoire Overview
              </span>
              <h4 className="text-xl font-heading font-extrabold text-ink">
                All Categorized Technologies at a Glance
              </h4>
            </div>
            <div className="text-xs font-mono text-ink-muted">
              Zero inflated metrics • 100% authentic
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skillsCategories.flatMap(c => c.skills).map((s) => (
              <span
                key={s.name}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-ivory text-ink border border-ink/10 hover:border-electric hover:bg-electric-light/50 transition-colors cursor-default"
              >
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
