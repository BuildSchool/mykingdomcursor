import React from 'react';

interface CrownLogoProps {
  className?: string;
}

export default function CrownLogo({ className = "w-8 h-8" }: CrownLogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base Crown Shape */}
      <path
        d="M12 2L8 5L4 3L2 8L4 15H20L22 8L20 3L16 5L12 2Z"
        className="fill-gold-500"
        filter="url(#golden-shadow)"
      />
      {/* Crown Base */}
      <path
        d="M4 15H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V15Z"
        className="fill-gold-600"
      />
      {/* Crown Outline */}
      <path
        d="M8 5L12 2L16 5M8 5L4 3L2 8L4 15M8 5L12 8M16 5L20 3L22 8L20 15M16 5L12 8M4 15H20M4 15V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V15"
        className="stroke-gold-600"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Jewels */}
      <circle cx="12" cy="6" r="1" className="fill-red-400" /> {/* Ruby */}
      <circle cx="8" cy="8" r="1" className="fill-blue-400" /> {/* Sapphire */}
      <circle cx="16" cy="8" r="1" className="fill-green-400" /> {/* Emerald */}

      {/* Filters for golden effect */}
      <defs>
        <filter id="golden-shadow" x="-2" y="-2" width="28" height="28">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood floodColor="#B7791F" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}