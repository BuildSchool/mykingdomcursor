import { lazy } from 'react';

export default function dynamic(importFn: () => Promise<any>, options: { loading?: () => JSX.Element } = {}) {
  const LazyComponent = lazy(importFn);
  
  return function DynamicComponent(props: any) {
    return (
      <React.Suspense fallback={options.loading?.() || null}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };
}