import { useState, useCallback } from 'react';
import type { ApexAxisChartSeries } from 'apexcharts';

interface UseChartDataProps {
  initialData: ApexAxisChartSeries;
  timeRanges: Record<string, number>;
}

export function useChartData({ initialData, timeRanges }: UseChartDataProps) {
  const [data, setData] = useState(initialData);
  const [selectedRange, setSelectedRange] = useState(Object.keys(timeRanges)[0]);

  const updateTimeRange = useCallback((range: string) => {
    const multiplier = timeRanges[range] || 1;
    setData(data.map(series => ({
      ...series,
      data: series.data.map(value => 
        typeof value === 'number' ? Math.round(value * multiplier) : value
      )
    })));
    setSelectedRange(range);
  }, [data, timeRanges]);

  return {
    data,
    selectedRange,
    updateTimeRange
  };
}