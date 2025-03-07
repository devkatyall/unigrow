"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  const shapeRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (shapeRef.current) {
      // Initial animation
      gsap.fromTo(
        shapeRef.current,
        {
          opacity: 0,
          y: -150,
          rotation: rotate - 15,
        },
        {
          opacity: 1,
          y: 0,
          rotation: rotate,
          duration: 2.4,
          delay,
          ease: "power2.out",
        }
      );
    }

    if (innerRef.current) {
      // Continuous floating animation
      gsap.to(innerRef.current, {
        y: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [delay, rotate]);

  return (
    <div ref={shapeRef} className={cn("absolute", className)}>
      <div
        ref={innerRef}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </div>
    </div>
  );
}

export default function KokonutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-80">
      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-indigo-500/[0.15]"
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />

      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-rose-500/[0.15]"
        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />

      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        gradient="from-violet-500/[0.15]"
        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />

      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-amber-500/[0.15]"
        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      />

      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        gradient="from-cyan-500/[0.15]"
        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      />
    </div>
  );
}
