import React from 'react';

interface DashboardChartProps {
  title: string;
  type: 'line' | 'bar';
  data: any[];
}

export default function DashboardChart({ title, type, data }: DashboardChartProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="h-64 flex items-center justify-center text-gray-400">
        Chart placeholder - Add your preferred charting library
      </div>
    </div>
  );
}