import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { personalData } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-ink/10 relative overflow-hidden">
      {/* Decorative top colored line */}
      <div className="h-1 w-full bg-gradient-to-r from-electric via-lavender to-coral" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-ink-muted max-w-sm leading-relaxed">
              {personalData.shortIntro}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Selected SWE Intern @ YugaYatra Retail (OPC) Pvt Ltd</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="font-bold text-ink uppercase tracking-wider block mb-3">
                Navigation
              </span>
              <ul className="space-y-2 text-ink-muted">
                <li><a href="#hero" className="hover:text-electric transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-electric transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-electric transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-electric transition-colors">Experience</a></li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-ink uppercase tracking-wider block mb-3">
                Domain
              </span>
              <ul className="space-y-2 text-ink-muted">
                <li><a href="#skills" className="hover:text-electric transition-colors">Skills</a></li>
                <li><a href="#education" className="hover:text-electric transition-colors">Education</a></li>
                <li><a href="#achievements" className="hover:text-electric transition-colors">Achievements</a></li>
                <li><a href="#contact" className="hover:text-electric transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Right Social & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex items-center gap-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-ivory hover:bg-electric hover:text-white text-ink border border-ink/10 flex items-center justify-center transition-all shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-ivory hover:bg-electric hover:text-white text-ink border border-ink/10 flex items-center justify-center transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                className="w-9 h-9 rounded-xl bg-ivory hover:bg-electric hover:text-white text-ink border border-ink/10 flex items-center justify-center transition-all shadow-xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-ivory hover:bg-slate-100 text-ink border border-ink/10 shadow-soft transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-electric group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-ink/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted font-mono">
          <div>
            © {new Date().getFullYear()} Jayakrishna M. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with modern creative engineering</span>
            <Sparkles className="w-3.5 h-3.5 text-coral" />
          </div>
        </div>
      </div>
    </footer>
  );
};
