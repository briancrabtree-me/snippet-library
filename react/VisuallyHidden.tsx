import type { ReactNode } from 'react';

/**
 * Screen-reader-only text. Usage: <VisuallyHidden>Submit form</VisuallyHidden>
 */
export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="visually-hidden">{children}</span>;
}

/* Add once in your CSS:
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
*/
