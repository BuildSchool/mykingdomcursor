import { useState, useCallback } from 'react';
import type { ApexAxisChartSeries } from 'apexcharts';

interface UseChartProps {
  initialData: ApexAxisChartSeries;
  timeRanges: Record<string, number>;
  defaultRange?: string;
}

export function useChart({ initialData, timeRanges, defaultRange }: UseChartProps) {
  const [data, setData] = useState(initialData);
  const [selectedRange, setSelectedRange] = useState(defaultRange || Object.keys(timeRanges)[0]);

  const updateRange = useCallback((range: string) => {
    const multiplier = timeRanges[range] || 1;
    setData(prevData => prevData.map(series => ({
      ...series,
      data: series.data.map(value => 
        typeof value === 'number' ? Math.round(value * multiplier) : value
      )
    })));
    setSelectedRange(range);
  }, [timeRanges]);

  return {
    data,
    selectedRange,
    updateRange
  };
}