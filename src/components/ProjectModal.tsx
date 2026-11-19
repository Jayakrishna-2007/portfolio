import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, AlertCircle, Layers, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { personalData } from '../data/personal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const accentBadge = {
    blue: 'bg-electric-light text-electric border-electric/30',
    lavender: 'bg-lavender-light text-lavender-hover border-lavender/30',
    coral: 'bg-coral-light text-coral-hover border-coral/30',
  }[project.accentColor];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-ivory rounded-3xl shadow-2xl border border-ink/10 overflow-hidden flex flex-col z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10 bg-white/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-electric px-2.5 py-1 rounded-md bg-electric-light border border-electric/20">
                PROJ // {project.number}
              </span>
              <span className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${accentBadge}`}>
                {project.status}
              </span>
            </div>
            
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-ivory-muted hover:bg-ink/10 text-ink flex items-center justify-center transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Subtitle */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider mb-1">
                <Layers className="w-3.5 h-3.5 text-electric" />
                <span>{project.category}</span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-4xl font-heading font-extrabold text-ink tracking-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg font-medium text-ink-muted mt-1">
                {project.subtitle}
              </p>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Interactive Visual Mockup / Architecture Box */}
            <div className="w-full">
              <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-coral/25 shadow-soft">
                <div className="flex items-center gap-2 text-coral font-bold text-sm mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-heading">The Problem & Challenge</span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-electric/25 shadow-soft">
                <div className="flex items-center gap-2 text-electric font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-heading">The Engineering Solution</span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Contribution Section */}
            <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-soft">
              <h3 className="text-base font-heading font-bold text-ink flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-electric" />
                <span>My Specific Engineering Contribution</span>
              </h3>
              <ul className="space-y-3">
                {project.contribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-lavender" />
                <span>Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-ink/10 text-ink shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="p-5 rounded-2xl bg-soft-blue/40 border border-electric/20">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-3">
                Key Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-ink">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with links */}
            <div className="pt-4 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-ink-muted font-mono">
                Project ID: <span className="text-ink font-semibold">{project.id}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-ink border border-ink/15 transition-colors shadow-soft"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-electric hover:bg-electric-hover text-white transition-colors shadow-sm"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
