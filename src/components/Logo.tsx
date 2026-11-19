import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base'
  };

  return (
    <a 
      href="#hero" 
      className={`group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="Jayakrishna M. Portfolio Home"
    >
      {/* Monogram Symbol J+M */}
      <div className={`relative ${sizeClasses[size].split(' ')[0]} ${sizeClasses[size].split(' ')[1]} flex items-center justify-center rounded-2xl bg-gradient-to-br from-electric via-electric to-lavender shadow-md shadow-electric/20 p-0.5 transition-all duration-300 group-hover:shadow-glow-blue`}>
        <div className="w-full h-full bg-ivory rounded-[14px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle geometric gradient background inside logo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-light via-white to-coral-light opacity-80" />
          
          <svg 
            viewBox="0 0 40 40" 
            className="w-6 h-6 relative z-10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* J stroke */}
            <path 
              d="M14 11V23C14 26.5 11.5 29 8 29" 
              stroke="#527BFF" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* M stroke */}
            <path 
              d="M17 29V11L24 20L31 11V29" 
              stroke="#20243A" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* Accent dot */}
            <circle cx="32" cy="9" r="2.5" fill="#FF827A" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-ink tracking-tight text-base sm:text-lg flex items-center gap-1 leading-none">
            Jayakrishna<span className="text-electric">.</span>M
          </span>
          <span className="text-[11px] font-mono font-medium text-ink-muted tracking-wider uppercase mt-1">
            Software Developer
          </span>
        </div>
      )}
    </a>
  );
};

