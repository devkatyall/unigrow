import React from "react";
import { cn } from "@/lib/utils";

export function Main({ children, className }) {
  return (
    <div
      className={cn(
        " w-[87vw] mx-auto flex flex-col items-center justify-center gap-[3vh] text-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export function MainHeading({ children, className }) {
  return (
    <h2
      className={cn(
        " lg:text-5xl xl:text-7xl text-3xl tracking-tight lg:tracking-normal font-medium",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function MainText({ children, className }) {
  return (
    <p
      className={cn(
        "text-base lg:text-lg text-neutral-400 lg:w-[70%]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function MainFlag({ children, className }) {
  return (
    <h1
      className={cn(
        " px-4 py-1 rounded-full ring-2 w-fit text-cyan-600",
        className
      )}
    >
      {children}
    </h1>
  );
}
