import React from 'react';

export default function FormDivider() {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white text-gray-500 uppercase tracking-wider font-medium">
          Or continue with
        </span>
      </div>
    </div>
  );
}