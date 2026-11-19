import React from 'react';
import { Sparkles } from 'lucide-react';

interface StatusBadgeProps {
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-electric/25 shadow-soft text-xs font-medium text-ink transition-all duration-300 hover:border-electric/50 ${className}`}>
      {/* Animated status beacon */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      
      <span className="font-mono text-ink-muted text-[11px] font-semibold tracking-wider uppercase">
        Selected SWE Intern
      </span>
      
      <span className="w-1 h-1 rounded-full bg-ink-faint" />
      
      <span className="text-electric font-semibold flex items-center gap-1">
        YugaYatra Retail (OPC) Pvt Ltd
        <Sparkles className="w-3 h-3 text-lavender" />
      </span>
    </div>
  );
};

