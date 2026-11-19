import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectMockup } from '../components/ProjectMockup';
import { projectsData } from '../data/projects';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'AI & Computer Vision', 'Healthcare AI', 'Smart Mobility', 'Automation'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-ivory-muted/40 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            number="02"
            tag="SELECTED WORKS"
            title="Engineered Applications & AI Prototypes"
            subtitle="Deep architectural exploration spanning full-stack web platforms, computer vision triage, and autonomous mobility."
            accent="coral"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-electric text-white font-semibold shadow-sm'
                    : 'bg-white text-ink-muted hover:text-ink border border-ink/10 hover:border-ink/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            const accentClasses = {
              blue: {
                border: 'border-electric/25 hover:border-electric/50',
                badge: 'bg-electric-light text-electric border-electric/20',
                btn: 'bg-electric hover:bg-electric-hover text-white shadow-soft hover:shadow-glow-blue',
                text: 'text-electric',
              },
              coral: {
                border: 'border-coral/25 hover:border-coral/50',
                badge: 'bg-coral-light text-coral-hover border-coral/20',
                btn: 'bg-coral hover:bg-coral-hover text-white shadow-soft hover:shadow-glow-coral',
                text: 'text-coral',
              },
              lavender: {
                border: 'border-lavender/30 hover:border-lavender/60',
                badge: 'bg-lavender-light text-lavender-hover border-lavender/30',
                btn: 'bg-lavender hover:bg-lavender-hover text-white shadow-soft hover:shadow-glow-lavender',
                text: 'text-lavender',
              },
            }[project.accentColor];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`group p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border ${accentClasses.border} shadow-soft hover:shadow-soft-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Mockup Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div 
                      className="cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                      onClick={() => onSelectProject(project)}
                      title="Click to view full architecture & case study"
                    >
                      <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
                    </div>
                  </div>

                  {/* Information Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Index & Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-2xl sm:text-3xl font-extrabold text-ink-muted/40">
                          {project.number}
                        </span>
                        <span className="text-xs font-mono font-medium text-ink-muted">/ 05</span>
                      </div>
                      
                      <span className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full border ${accentClasses.badge}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-ink tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-ink-muted mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Contribution Snippet */}
                    <div className="p-4 rounded-2xl bg-ivory border border-ink/5 space-y-1.5">
                      <div className="text-xs font-mono font-bold text-ink flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-electric" />
                        <span>Core Contribution:</span>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {project.contribution[0]}
                      </p>
                    </div>

                    {/* Technology Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-ivory text-ink-muted border border-ink/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg text-xs font-mono bg-ivory text-ink-muted border border-ink/10">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action: Open Case Study */}
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold ${accentClasses.btn} transition-all duration-200`}
                      >
                        <span>View Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-mono text-ink-muted hover:text-ink underline underline-offset-4 transition-colors"
                      >
                        Inspect Architecture
                      </button>
                    </div>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
