'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 0.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
