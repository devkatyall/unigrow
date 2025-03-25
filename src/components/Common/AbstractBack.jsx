"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

// Abstract Shape Component
function AbstractShape({
  className,
  delay = 0,
  type = "circle",
  size = 100,
  rotate = 0,
  color = "purple",
  opacity = 0.15,
  blur = false,
  glow = false,
  style,
}) {
  const shapeRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    if (shapeRef.current) {
      // Initial animation
      gsap.fromTo(
        shapeRef.current,
        {
          opacity: 0,
          y: -100,
          rotation: rotate - 15,
        },
        {
          opacity: opacity,
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

      // Add subtle rotation animation
      gsap.to(innerRef.current, {
        rotation: rotate + (Math.random() > 0.5 ? 10 : -10),
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [delay, rotate, opacity]);

  const getColorClass = () => {
    switch (color) {
      case "cyan":
        return "from-cyan-500 to-cyan-600";
      case "violet":
        return "from-violet-500 to-violet-600";
      case "amber":
        return "from-amber-500 to-amber-600";
      case "rose":
        return "from-rose-500 to-rose-600";
      case "emerald":
        return "from-emerald-500 to-emerald-600";
      case "indigo":
        return "from-indigo-500 to-indigo-600";
      case "fuchsia":
        return "from-fuchsia-500 to-fuchsia-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  };

  const renderShape = () => {
    switch (type) {
      case "square":
        return (
          <div
            className={cn(
              "rounded-md bg-gradient-to-br",
              getColorClass(),
              blur && "backdrop-blur-md",
              glow && `shadow-lg shadow-${color}-500/30`
            )}
            style={{ width: size, height: size }}
          />
        );
      case "triangle":
        return (
          <div
            className={cn(
              "w-0 h-0 border-solid",
              `border-l-[${size / 2}px] border-l-transparent`,
              `border-r-[${size / 2}px] border-r-transparent`,
              `border-b-[${size}px]`,
              `border-b-${color}-500`
            )}
          />
        );
      case "hexagon":
        return (
          <div className="relative">
            <div
              className={cn(
                "absolute bg-gradient-to-br",
                getColorClass(),
                blur && "backdrop-blur-md",
                glow && `shadow-lg shadow-${color}-500/30`
              )}
              style={{
                width: size,
                height: size * 0.866, // height of hexagon = width * sin(60°)
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          </div>
        );
      case "blob":
        return (
          <div
            className={cn(
              "bg-gradient-to-br",
              getColorClass(),
              blur && "backdrop-blur-md",
              glow && `shadow-lg shadow-${color}-500/30`
            )}
            style={{
              width: size,
              height: size,
              borderRadius: "69% 31% 56% 44% / 44% 60% 40% 56%",
            }}
          />
        );
      case "ring":
        return (
          <div
            className={cn(
              "rounded-full border-4",
              `border-${color}-500`,
              glow && `shadow-lg shadow-${color}-500/30`
            )}
            style={{ width: size, height: size }}
          />
        );
      case "donut":
        return (
          <div
            className={cn(
              "rounded-full bg-gradient-to-br",
              getColorClass(),
              blur && "backdrop-blur-md",
              glow && `shadow-lg shadow-${color}-500/30`
            )}
            style={{
              width: size,
              height: size,
              clipPath: "circle(50% at 50% 50%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, transparent 40%, black 40%)",
            }}
          />
        );
      case "wave":
        return (
          <div
            className={cn(
              "bg-gradient-to-r",
              getColorClass(),
              blur && "backdrop-blur-md",
              glow && `shadow-lg shadow-${color}-500/30`
            )}
            style={{
              width: size * 1.5,
              height: size / 3,
              borderRadius: "50% / 100%",
              borderTopLeftRadius: "50% 100%",
              borderTopRightRadius: "50% 100%",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
        );
      default: // circle
        return (
          <div
            className={cn(
              "rounded-full bg-gradient-to-br",
              getColorClass(),
              blur && "backdrop-blur-md",
              glow && `shadow-lg shadow-${color}-500/30`
            )}
            style={{ width: size, height: size }}
          />
        );
    }
  };

  return (
    <div ref={shapeRef} className={cn("absolute", className)} style={style}>
      <div ref={innerRef} className="relative">
        {renderShape()}
      </div>
    </div>
  );
}

export default function AbstractShapesBackground() {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden">
      {/* Large Shapes */}
      <AbstractShape
        delay={0.3}
        type="circle"
        size={200}
        rotate={12}
        color="purple"
        opacity={0.15}
        glow
        className="left-[-5%] md:left-[5%] top-[15%] md:top-[20%]"
      />

      <AbstractShape
        delay={0.5}
        type="blob"
        size={180}
        rotate={-15}
        color="rose"
        opacity={0.12}
        glow
        className="right-[-10%] md:right-[5%] top-[65%] md:top-[70%]"
      />

      <AbstractShape
        delay={0.4}
        type="hexagon"
        size={150}
        rotate={-8}
        color="violet"
        opacity={0.15}
        glow
        className="left-[8%] md:left-[15%] bottom-[5%] md:bottom-[10%]"
      />

      <AbstractShape
        delay={0.6}
        type="donut"
        size={120}
        rotate={20}
        color="amber"
        opacity={0.15}
        glow
        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      />

      {/* Medium Shapes */}
      <AbstractShape
        delay={0.7}
        type="square"
        size={100}
        rotate={-25}
        color="cyan"
        opacity={0.15}
        glow
        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      />

      <AbstractShape
        delay={0.8}
        type="triangle"
        size={90}
        rotate={15}
        color="emerald"
        opacity={0.15}
        glow
        className="right-[25%] top-[45%]"
      />

      <AbstractShape
        delay={0.9}
        type="ring"
        size={110}
        rotate={-10}
        color="indigo"
        opacity={0.15}
        glow
        className="left-[10%] top-[60%]"
      />

      <AbstractShape
        delay={1.0}
        type="wave"
        size={130}
        rotate={5}
        color="fuchsia"
        opacity={0.15}
        glow
        className="right-[8%] top-[30%]"
      />

      {/* Small Shapes */}
      <AbstractShape
        delay={1.1}
        type="circle"
        size={40}
        rotate={-8}
        color="purple"
        opacity={0.15}
        glow
        className="left-[30%] bottom-[25%]"
      />

      <AbstractShape
        delay={1.2}
        type="square"
        size={30}
        rotate={22}
        color="cyan"
        opacity={0.15}
        glow
        className="right-[30%] bottom-[15%]"
      />

      <AbstractShape
        delay={1.3}
        type="circle"
        size={25}
        rotate={-12}
        color="rose"
        opacity={0.15}
        glow
        className="left-[40%] top-[30%]"
      />

      <AbstractShape
        delay={1.4}
        type="circle"
        size={20}
        rotate={18}
        color="amber"
        opacity={0.15}
        glow
        className="right-[40%] top-[20%]"
      />

      {/* Tiny Particles */}
      {[...Array(15)].map((_, i) => (
        <AbstractShape
          key={i}
          delay={1.5 + i * 0.1}
          type="circle"
          size={5 + Math.random() * 10}
          rotate={Math.random() * 360}
          color={
            [
              "purple",
              "cyan",
              "violet",
              "amber",
              "rose",
              "emerald",
              "indigo",
              "fuchsia",
            ][Math.floor(Math.random() * 8)]
          }
          opacity={0.15}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
