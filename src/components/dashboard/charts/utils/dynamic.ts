import React, { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';

interface DynamicOptions {
  loading?: () => JSX.Element | null;
}

export function dynamic<P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options: DynamicOptions = {}
) {
  const LazyComponent = lazy(importFn);
  
  return function DynamicComponent(props: P) {
    const fallbackElement = options.loading?.() || null;
    
    return (
      <Suspense fallback={fallbackElement}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}