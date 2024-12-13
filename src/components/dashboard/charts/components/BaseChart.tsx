import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { twMerge } from 'tailwind-merge';
import type { ChartData, ChartOptions } from 'chart.js';

// Register ChartJS components
ChartJS.register(...registerables);

interface BaseChartProps {
  data: ChartData;
  options?: ChartOptions;
  type: 'line' | 'bar' | 'pie' | 'doughnut';
  className?: string;
}

const BaseChart = ({ data, options, type, className }: BaseChartProps) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className={twMerge('w-full h-[300px]', className)}>
      <Chart
        type={type}
        data={data}
        options={{ ...defaultOptions, ...options }}
      />
    </div>
  );
};

export default BaseChart;