import { ApexOptions } from 'apexcharts';

export interface TimeRange {
  value: string;
  label: string;
}

export interface ChartProps {
  type: 'line' | 'area' | 'bar';
  options: ApexOptions;
  series: ApexAxisChartSeries;
  height?: number;
}

export interface ChartContainerProps extends ChartProps {
  title: string;
  timeRanges: TimeRange[];
  selectedRange: string;
  onRangeChange: (range: string) => void;
  delay?: number;
}

export interface ChartHeaderProps {
  title: string;
  timeRanges: TimeRange[];
  selectedRange: string;
  onRangeChange: (range: string) => void;
}