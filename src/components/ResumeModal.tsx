import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import { personalData } from '../data/personal';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { skillsCategories } from '../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# ${personalData.name}
${personalData.title}
Email: ${personalData.socials.email} | GitHub: ${personalData.socials.github} | LinkedIn: ${personalData.socials.linkedin}

## EDUCATION
${personalData.education.degree}
${personalData.education.institution} (${personalData.education.period})

## PROFESSIONAL EXPERIENCE & LEADERSHIP
- Selected Software Engineer Intern @ YugaYatra Retail (OPC) Pvt Ltd (Nov 2026)
- Vice President, RoboThinkers Club, SRMIST
- Campus Ambassador, E-Society Trichy Campus Ambassador Programme (2026-2027)

## NOTABLE PROJECTS
1. AirLink - Flight Booking Management System (React, Node.js, Express, Tailwind, Gemini API)
2. Vision One AI - AI-Powered Multi-Disease Eye Screening Platform (Python, OpenCV)
3. UrbanFlow AI - AI-Driven Urban Mobility Platform (Next.js, FastAPI, Leaflet, TomTom)
4. AurePrint - Contactless Fingerprint Authentication Concept (Python, Flask, OpenCV)
5. ByteMeal - AI-Powered Vegetarian Meal Planner (Glide, Make.com)

## TECHNICAL SKILLS
- Programming: Java, Python, C, JavaScript
- Frontend: HTML, CSS, React, Next.js, Tailwind CSS
- Backend: Node.js, Express.js, FastAPI, Flask
- AI/CV: Machine Learning Fundamentals, OpenCV, Google Gemini API
- Tools: Git, GitHub, Vite, REST APIs, Leaflet, Make.com
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Jayakrishna_M_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/65 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-ink/10 overflow-hidden flex flex-col z-10"
        >
          {/* Action Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10 bg-ivory">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                Verified Curriculum Vitae
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-ink border border-ink/15 transition-colors shadow-soft"
                title="Print or Save as PDF via browser"
              >
                <Printer className="w-3.5 h-3.5 text-electric" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
              
              <button
                type="button"
                onClick={handleDownloadMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-electric hover:bg-electric-hover text-white transition-colors shadow-soft"
                title="Download Markdown summary"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download .MD</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-ink flex items-center justify-center transition-colors ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="overflow-y-auto p-6 sm:p-10 font-sans text-ink space-y-6 bg-white selection:bg-electric-light">
            {/* Header */}
            <div className="border-b border-ink/10 pb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-electric/30 shadow-sm flex-shrink-0">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-ink tracking-tight">
                    {personalData.name}
                  </h1>
                  <p className="text-sm font-semibold text-electric mt-0.5">
                    {personalData.title}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {personalData.education.institution}
                  </p>
                </div>
              </div>
              <div className="text-xs space-y-1 font-mono text-ink-muted text-left sm:text-right">
                <div>{personalData.socials.email}</div>
                <div>{personalData.education.location}</div>
                <div className="text-electric font-medium">Selected SWE Intern @ YugaYatra Retail (OPC) Pvt Ltd</div>
              </div>
            </div>

            {/* Education */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-ink flex items-center gap-2 border-b border-ink/10 pb-1 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-electric" />
                Education
              </h2>
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-ink">{personalData.education.degree}</h3>
                  <p className="text-ink-muted text-xs">{personalData.education.institution}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-semibold text-ink-muted block">{personalData.education.period}</span>
                </div>
              </div>
            </section>

            {/* Professional Experience & Leadership */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-ink flex items-center gap-2 border-b border-ink/10 pb-1 mb-3">
                <Briefcase className="w-3.5 h-3.5 text-coral" />
                Experience & Leadership
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                {experienceData.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <div>
                        <span className="font-bold text-ink">{exp.role}</span>
                        <span className="text-ink-muted font-medium"> — {exp.organization}</span>
                      </div>
                      <span className="text-xs font-mono text-ink-muted">{exp.period}</span>
                    </div>
                    <ul className="mt-1.5 list-disc list-inside text-xs text-ink-muted space-y-0.5">
                      {exp.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Technical Projects */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-ink flex items-center gap-2 border-b border-ink/10 pb-1 mb-3">
                <Code className="w-3.5 h-3.5 text-lavender" />
                Engineered Projects
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                {projectsData.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-ink">
                        {proj.title} <span className="font-normal text-ink-muted">({proj.subtitle})</span>
                      </span>
                      <span className="text-[11px] font-mono text-electric font-semibold">{proj.status}</span>
                    </div>
                    <p className="text-xs text-ink-muted mt-0.5">{proj.description}</p>
                    <div className="text-[11px] font-mono text-ink-muted mt-1">
                      <span className="font-semibold text-ink">Tech: </span>
                      {proj.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-ink flex items-center gap-2 border-b border-ink/10 pb-1 mb-3">
                <Award className="w-3.5 h-3.5 text-electric" />
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillsCategories.map((cat, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-ink block">{cat.title}:</span>
                    <span className="text-ink-muted">
                      {cat.skills.map(s => s.name).join(' • ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
