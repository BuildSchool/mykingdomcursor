import { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';

export function dynamic<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: { loading?: ComponentType } = {}
) {
  const LazyComponent = lazy(importFunc);

  return function DynamicComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={options.loading ? <options.loading /> : null}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

export const DynamicRevenueChart = dynamic(() => 
  import("../components/dashboard/charts/RevenueChart")
);