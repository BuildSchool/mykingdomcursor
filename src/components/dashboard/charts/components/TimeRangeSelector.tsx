import React from 'react';
import type { TimeRange } from '../types/chart';

interface TimeRangeSelectorProps {
  ranges: TimeRange[];
  selected: string;
  onChange: (value: string) => void;
}

export default function TimeRangeSelector({
  ranges,
  selected,
  onChange
}: TimeRangeSelectorProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
    >
      {ranges.map((range) => (
        <option key={range.value} value={range.value}>
          {range.label}
        </option>
      ))}
    </select>
  );
}