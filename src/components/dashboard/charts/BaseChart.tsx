import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import ChartLoader from './ChartLoader';
import type { ChartProps } from './types';

const Chart = lazy(() => import('react-apexcharts'));

interface BaseChartProps extends ChartProps {
  title: string;
  timeRanges: { value: string; label: string }[];
  onTimeRangeChange?: (range: string) => void;
  className?: string;
  delay?: number;
}

export default function BaseChart({
  title,
  timeRanges,
  options,
  series,
  type,
  height = 350,
  onTimeRangeChange,
  className = '',
  delay = 0
}: BaseChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <select
          onChange={(e) => onTimeRangeChange?.(e.target.value)}
          className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        >
          {timeRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
      <Suspense fallback={<ChartLoader />}>
        <Chart
          options={options}
          series={series}
          type={type}
          height={height}
        />
      </Suspense>
    </motion.div>
  );
}