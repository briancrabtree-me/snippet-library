import { useEffect, useState, type ReactNode } from 'react';

/**
 * Renders children after requestIdleCallback (or short timeout fallback).
 * Usage: <IdleMount><HeavySection /></IdleMount>
 */
export function IdleMount({ children, timeout = 2000 }: { children: ReactNode; timeout?: number }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id =
      typeof requestIdleCallback === 'function'
        ? requestIdleCallback(() => setReady(true), { timeout })
        : window.setTimeout(() => setReady(true), 1);
    return () => {
      if (typeof cancelIdleCallback === 'function' && typeof id === 'number') {
        cancelIdleCallback(id);
      } else {
        clearTimeout(id as number);
      }
    };
  }, [timeout]);

  if (!ready) return null;
  return children;
}
