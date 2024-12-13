import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load ApexCharts
const Chart = React.lazy(() => import('react-apexcharts'));

// Chart loader component
const ChartLoader = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

const options = {
  chart: {
    type: 'line',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#764dff'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: (value: number) => `${value}%`,
    },
    min: 0,
    max: 100,
  },
  grid: {
    borderColor: '#f3f4f6',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 4,
    colors: ['#764dff'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: {
      size: 6,
    },
  },
  tooltip: {
    y: {
      formatter: (value: number) => `${value}%`,
    },
  },
};

export default function OccupancyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Occupancy Rate</h2>
        <select className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <Suspense fallback={<ChartLoader />}>
        <Chart
          options={options}
          series={[{
            name: 'Occupancy Rate',
            data: [85, 87, 89, 88, 90, 92, 94, 93, 95, 94, 95, 94]
          }]}
          type="line"
          height={350}
        />
      </Suspense>
    </motion.div>
  );
}