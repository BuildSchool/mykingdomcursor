import React from 'react';
import CrownLogo from './CrownLogo';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CrownLogo />
      {showText && (
        <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          MyKingdom
        </span>
      )}
    </div>
  );
}