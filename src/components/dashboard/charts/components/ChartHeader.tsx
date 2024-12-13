import React from 'react';
import type { RangeOption } from '../types';

interface ChartHeaderProps {
  title: string;
  selectedRange: string;
  onRangeChange: (range: string) => void;
  ranges: RangeOption[];
}

export function ChartHeader({
  title,
  selectedRange,
  onRangeChange,
  ranges
}: ChartHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <select
        value={selectedRange}
        onChange={(e) => onRangeChange(e.target.value)}
        className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
      >
        {ranges.map(range => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
}