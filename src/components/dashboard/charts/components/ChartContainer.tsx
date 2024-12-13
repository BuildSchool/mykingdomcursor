import React from 'react';
import { motion } from 'framer-motion';
import { ChartHeader } from './ChartHeader';
import type { RangeOption } from '../types';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  selectedRange: string;
  onRangeChange: (range: string) => void;
  ranges: RangeOption[];
}

export function ChartContainer({
  title,
  children,
  selectedRange,
  onRangeChange,
  ranges
}: ChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <ChartHeader
        title={title}
        selectedRange={selectedRange}
        onRangeChange={onRangeChange}
        ranges={ranges}
      />
      {children}
    </motion.div>
  );
}