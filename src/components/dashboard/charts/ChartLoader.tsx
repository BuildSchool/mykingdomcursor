import React from 'react';

export default function ChartLoader() {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  );
}