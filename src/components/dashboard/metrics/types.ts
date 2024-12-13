import { ReactNode } from 'react';

export interface MetricProps {
  label: string;
  value: string;
  change: string;
  icon: ReactNode;
  color: string;
  index: number;
}

export interface MetricData {
  id: string;
  label: string;
  value: string;
  change: string;
  icon: ReactNode;
  color: string;
}