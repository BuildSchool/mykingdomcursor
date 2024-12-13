import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export default function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-white/5 hover:bg-white/10 border border-primary-500/20 rounded-lg text-white transition-colors"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}