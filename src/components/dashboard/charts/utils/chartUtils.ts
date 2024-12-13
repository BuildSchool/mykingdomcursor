import type { ApexAxisChartSeries } from 'apexcharts';

export const generateChartData = (
  initialData: ApexAxisChartSeries,
  multiplier: number
): ApexAxisChartSeries => {
  return initialData.map(series => ({
    ...series,
    data: series.data.map(value => 
      typeof value === 'number' ? Math.round(value * multiplier) : value
    )
  }));
};

export const calculateGrowthRate = (data: number[]): number => {
  if (data.length < 2) return 0;
  const firstValue = data[0];
  const lastValue = data[data.length - 1];
  return ((lastValue - firstValue) / firstValue) * 100;
};

export const smoothData = (data: number[], factor: number = 0.3): number[] => {
  return data.map((point, index) => {
    if (index === 0) return point;
    const prevPoint = data[index - 1];
    return prevPoint + (point - prevPoint) * factor;
  });
};