import { cn } from "@/lib/utils";
import React from "react";

export function Sub({ children, className }) {
  return <div className={cn(" w-[87vw] mx-auto", className)}>{children}</div>;
}

export function SubText({ children, className }) {
  return (
    <p className={cn(" text-sm lg:text-lg mt-2 text-slate-400", className)}>
      {children}
    </p>
  );
}

export function SubHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "lg:text-5xl xl:text-6xl text-3xl tracking-tight lg:tracking-normal font-medium",
        className
      )}
    >
      {children}
    </h2>
  );
}
