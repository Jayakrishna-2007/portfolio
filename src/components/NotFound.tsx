import React from 'react';
import { Home, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface NotFoundProps {
  onBackHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-ivory flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden text-ink font-sans">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      {/* Top bar */}
      <header className="flex justify-between items-center">
        <Logo size="md" />
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-electric-light text-electric border border-electric/25">
          Error 404 • Page Not Found
        </span>
      </header>

      {/* Center content */}
      <main className="max-w-xl mx-auto text-center space-y-6 my-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-light border border-coral/30 text-xs font-mono font-bold text-coral uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Out of Bounds</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-electric via-lavender to-coral tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-ink tracking-tight">
          Lost in Digital Space?
        </h2>

        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
          The coordinate or case-study you are trying to access doesn't exist or has been relocated within Jayakrishna's portfolio architecture.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-electric hover:bg-electric-hover text-white font-semibold text-xs shadow-soft-xl hover:shadow-glow-blue transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </main>

      {/* Footer info */}
      <footer className="text-center text-xs font-mono text-ink-muted">
        Jayakrishna M. • Software Developer | AI Enthusiast | Technology Builder
      </footer>
    </div>
  );
};
