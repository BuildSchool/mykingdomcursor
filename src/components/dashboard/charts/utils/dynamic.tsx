import React, { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';

interface DynamicOptions {
  loading?: () => JSX.Element | null;
}

export function dynamic<P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options: DynamicOptions = {}
): ComponentType<P> {
  const LazyComponent = lazy(importFn);
  
  const DynamicComponent = (props: P) => {
    // Evaluate the fallback element before using it in JSX
    const fallbackContent = options.loading?.() ?? null;
    
    return (
      <Suspense fallback={fallbackContent}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };

  return DynamicComponent;
}