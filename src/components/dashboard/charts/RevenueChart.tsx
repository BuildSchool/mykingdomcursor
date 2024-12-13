import { useMemo } from 'react';
import BaseChart from './components/BaseChart';

interface RevenueChartProps {
  data?: {
    labels: string[];
    values: number[];
  };
  className?: string;
}

const RevenueChart = ({ data, className }: RevenueChartProps) => {
  const chartData = useMemo(() => ({
    labels: data?.labels ?? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: data?.values ?? [30, 40, 35, 50, 49, 60],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  }), [data]);

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue Overview',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={`w-full rounded-lg bg-white p-4 shadow-sm ${className}`}>
      <BaseChart
        type="line"
        data={chartData}
        options={options}
        className="h-[300px]"
      />
    </div>
  );
};

export default RevenueChart;