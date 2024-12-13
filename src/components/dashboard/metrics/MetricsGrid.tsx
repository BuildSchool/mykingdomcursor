import React from 'react';
import MetricCard from './MetricCard';
import type { MetricData } from './types';

interface MetricsGridProps {
  metrics: MetricData[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.id}
          {...metric}
          index={index}
        />
      ))}
    </div>
  );
}