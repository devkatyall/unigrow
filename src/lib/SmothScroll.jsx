"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.3, duration: 1.5, smoothTouch: true }}
      className="root"
    >
      {children}
    </ReactLenis>
  );
}
