"use client";

import { ReactLenis } from "lenis/react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
