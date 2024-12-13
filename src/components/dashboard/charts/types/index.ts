export interface ChartData {
  name: string;
  data: (number | null)[];
}

export interface RangeOption {
  value: string;
  label: string;
}

export interface ChartConfig {
  type: 'line' | 'area' | 'bar';
  height?: number;
  options: any;
}

export interface ChartProps {
  title: string;
  selectedRange: string;
  onRangeChange: (range: string) => void;
  ranges: RangeOption[];
  children: React.ReactNode;
}