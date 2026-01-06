import React from 'react';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", animated = false }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Symbol */}
      <div className={`relative w-12 h-12 flex items-center justify-center ${animated ? 'animate-fade-in' : ''} shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
          {/* Circular Path representing renewal */}
          <path 
            d="M 20 50 A 30 30 0 1 1 80 50" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          <path 
             d="M 80 50 A 30 30 0 0 1 70 75"
             fill="none"
             stroke="#D4AF37"
             strokeWidth="4"
             strokeLinecap="round"
             opacity="0.5"
          />
          
          {/* Masculine Arrow pointing Up-Right */}
          <path 
            d="M 35 65 L 75 25" 
            stroke="#D4AF37" 
            strokeWidth="6" 
            strokeLinecap="round"
          />
          <path 
            d="M 75 25 L 75 50 M 75 25 L 50 25" 
            stroke="#D4AF37" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex items-center">
        <h1 className="text-2xl font-black tracking-widest text-white uppercase leading-none mr-2">
          ONCE <span className="text-[#D4AF37]">MORE</span>
        </h1>
        {/* Stacked Accent Lines */}
        <div className="flex flex-col gap-[3px] justify-center h-full pt-1">
          <div className="h-[3px] w-6 bg-[#2563EB] rounded-full shadow-[0_0_5px_#2563EB]"></div>
          <div className="h-[3px] w-6 bg-[#16A34A] rounded-full shadow-[0_0_5px_#16A34A]"></div>
          <div className="h-[3px] w-6 bg-[#DC2626] rounded-full shadow-[0_0_5px_#DC2626]"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;