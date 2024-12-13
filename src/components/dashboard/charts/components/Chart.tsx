import { motion } from 'framer-motion';
import type { ChartProps } from '../types/chart';
import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Dynamically import ApexCharts
const ApexChart = lazy(() => import('react-apexcharts'));

export default function Chart({ type, options, series, height = 350 }: ChartProps) {
  return (
    <ErrorBoundary fallback={<div>Error loading chart</div>}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <ApexChart
          type={type}
          options={options}
          series={series}
          height={height}
        />
      </motion.div>
    </ErrorBoundary>
  );
}