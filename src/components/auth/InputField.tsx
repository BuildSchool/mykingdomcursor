import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export default function InputField({ icon, ...props }: InputFieldProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white placeholder-primary-300"
      />
    </div>
  );
}