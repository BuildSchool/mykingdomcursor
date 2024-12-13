import React, { ReactNode } from 'react';

interface SubmitButtonProps {
  children: ReactNode;
  isLoading?: boolean;
}

export default function SubmitButton({ children, isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-200 font-medium shadow-lg hover:shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}