import React from "react";
import { cn } from "@/lib/utils";
import { TextAnimate } from "../magicui/text-animate";

export function Main({ children, className }) {
  return (
    <div
      className={cn(
        " w-[87vw] relative mx-auto flex flex-col items-center justify-center gap-[2vh] lg:gap-[3vh] text-center",
        className
      )}
    >
      <div className=" blob opacity-70 absolute blur-[120px] mx-auto -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] " />
      {children}
    </div>
  );
}

export function MainHeading({ children, className, as = "h2", delay = 0.5 }) {
  return (
    <TextAnimate
      startOnView
      by="word"
      once={true}
      delay={delay}
      animation="fadeIn"
      className={cn(
        " lg:text-5xl xl:text-7xl text-4xl tracking-tight lg:tracking-normal",
        className
      )}
      as={as}
    >
      {children}
    </TextAnimate>
  );
}

export function MainText({ children, className }) {
  return (
    <p
      className={cn(
        "text-base lg:text-lg text-neutral-400 lg:w-[75%]",
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
