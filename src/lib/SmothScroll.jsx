"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false,
        wheelMultiplier: 1, // Adjust desktop scroll sensitivity
        touchMultiplier: 2, // Adjust touch responsiveness
      }}
      className="root"
    >
      {children}
    </ReactLenis>
  );
}
