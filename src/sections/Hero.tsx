import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Cpu, FileText } from 'lucide-react';
import { personalData } from '../data/personal';
import { StatusBadge } from '../components/StatusBadge';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden mesh-gradient-hero bg-grid-pattern"
    >
      {/* Decorative background ambient circles */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-electric/10 blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-coral/10 blur-3xl pointer-events-none -z-10 animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Introductory Pill & Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-light border border-electric/25 text-xs font-mono font-bold tracking-wider text-electric uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HELLO, I'M JAYAKRISHNA</span>
              </div>
              <StatusBadge />
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-ink tracking-tight leading-[1.08]">
                Building ideas into{' '}
                <span className="text-gradient-primary">
                  meaningful digital
                </span>{' '}
                experiences<span className="text-coral">.</span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-ink-muted leading-relaxed max-w-2xl font-normal"
            >
              {personalData.heroDescription}
            </motion.p>

            {/* Quick credentials chip bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-ink-muted"
            >
              <span className="px-3 py-1 rounded-lg bg-white/90 border border-ink/10 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                SRMIST CSE (2025–2029)
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/90 border border-ink/10 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Selected SWE Intern @ YugaYatra Retail (OPC) Pvt Ltd
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/90 border border-ink/10 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lavender" />
                RoboThinkers VP
              </span>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-2xl bg-electric hover:bg-electric-hover text-white font-semibold text-sm shadow-soft-xl hover:shadow-glow-blue transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-ink border border-ink/15 font-semibold text-sm shadow-soft transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted" />
              </a>

              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-ivory-card hover:bg-slate-100 text-ink-muted hover:text-ink border border-ink/10 font-semibold text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-lavender" />
                <span>Resume View</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Jayakrishna M. Portrait & Editorial Engineering Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Sculpture Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] sm:aspect-square flex items-center justify-center"
            >
              {/* Layer 1: Outer geometric decorative halo */}
              <div className="absolute inset-2 sm:inset-4 rounded-4xl border border-dashed border-electric/30 animate-spin-slow pointer-events-none" />
              
              {/* Layer 2: Main tilted asymmetric gradient backdrop */}
              <div className="absolute w-[88%] h-[92%] rounded-4xl bg-gradient-to-tr from-soft-blue via-soft-lavender to-soft-coral border border-white shadow-soft-xl transform rotate-3" />
              
              {/* Layer 3: Central Glass Photo Card */}
              <div className="relative z-10 w-[86%] h-[90%] rounded-4xl glass-card p-3 sm:p-4 shadow-soft-xl border border-white/90 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                
                {/* Photo Frame Container */}
                <div className="relative w-full flex-grow rounded-3xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 shadow-inner">
                  <img
                    src={personalData.avatar}
                    alt="Jayakrishna M. — Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle inner gradient overlay for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-black/10 pointer-events-none" />

                  {/* Top-left Verified Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-soft flex items-center gap-1.5 text-[11px] font-mono font-bold text-ink">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Jayakrishna M.</span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/70 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-heading font-extrabold text-ink block leading-tight">
                          Jayakrishna M.
                        </span>
                        <span className="text-[10px] font-mono text-electric font-semibold block">
                          Software Developer & AI Builder
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-electric-light text-electric border border-electric/25 font-bold">
                        SRMIST '29
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Yuga Yatra selection (Top Right) */}
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-white shadow-soft-lg border border-electric/25 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center text-white shadow-xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-ink-muted block uppercase tracking-wider">Opportunity</span>
                  <span className="text-xs font-bold text-ink">YugaYatra Retail (OPC) Pvt Ltd</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: SRMIST & Leadership (Bottom Left) */}
              <motion.div
                animate={{ y: [6, -4, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-2 sm:-left-4 z-20 px-3.5 py-2 rounded-2xl bg-white shadow-soft-lg border border-coral/25 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-coral flex items-center justify-center text-white shadow-xs">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-ink-muted block uppercase tracking-wider">Leadership</span>
                  <span className="text-xs font-bold text-ink">RoboThinkers VP</span>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>

        {/* Hero Scroll Indicator */}
        <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-ink-muted hover:text-electric transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
            <div className="w-5 h-8 rounded-full border border-ink/20 flex items-start justify-center p-1 group-hover:border-electric transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-electric"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
