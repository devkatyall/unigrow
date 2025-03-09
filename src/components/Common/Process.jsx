"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../magicui/animated-beam";
import { icons } from "lucide-react";
import { Sub, SubFlag, SubHeading } from "../services/Sub";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import ShinyButton from "../ui/ShinyButton";
import AnimatedLink from "../AnimatedLink";
import { PulsatingButton } from "../ui/pulsating-button";
import StepperButton from "@/global/stepper-form";

// A reusable Circle component that displays a title and description.
const Circle = ({
  className,
  title,
  description,
  icon,
  length,
  scrollY,
  index,
}) => {
  const interval = 1 / (length - 1);
  const start = index * interval;
  const end = start + interval;

  const Bginterval = 1 / length;
  const Bgstart = index * Bginterval;
  const Bgend = Bgstart + interval;

  const color = useTransform(scrollY, [start, end], ["#3C3B3A", "#36BBF1"]);
  const bgcolor = useTransform(
    scrollY,
    [Bgstart, Bgend],
    ["#3C3B3A", "#36BBF1"]
  );

  return (
    <>
      <div
        className={cn(
          "z-10 flex lg:flex-col items-center gap-[2vh]",
          className
        )}
      >
        <motion.div
          style={{ backgroundColor: bgcolor }}
          className={cn(
            "z-10 flex flex-col items-center justify-center rounded-full border-2 bg-white/20 p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          )}
        >
          {icon}
        </motion.div>
        <div className=" flex flex-col items-start lg:items-center gap-2">
          <h3 className=" text-base lg:text-lg text-start lg:text-center leading-tight font-bold">
            {title}
          </h3>
          <p className="text-xs text-start lg:text-center">{description}</p>
        </div>
      </div>
      {length - index > 1 && (
        <motion.div
          style={{ backgroundColor: color }}
          className="h-[5vh] w-[1vw] md:hidden lg:block lg:h-[1vh] lg:w-[5vh] rounded-full"
        />
      )}
    </>
  );
};

Circle.displayName = "Circle";

export function ProcessSteps({ process, ad }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className=" h-auto py-[6vh] lg:p-0 lg:h-[120vh] flex  justify-center"
    >
      <Sub className="sticky h-auto lg:h-screen top-0 flex flex-col lg:items-center justify-center">
        <SubFlag>{process.title}</SubFlag>
        <SubHeading className={" lg:text-center text-3xl lg:text-5xl"}>
          {process.subtitle}
        </SubHeading>
        <div className=" flex items-center justify-center flex-wrap gap-[2vh] px-[4vw] mt-[5vh] lg:mt-[6vh]">
          {process.cards.map((step, index) => (
            <Circle
              key={index}
              title={step.heading}
              description={step.description}
              icon={step.icon}
              className={" lg:w-1/6"}
              length={process.cards.length}
              scrollY={scrollYProgress}
              index={index}
            />
          ))}
        </div>
        {ad ? (
          <StepperButton
            className={" mt-[4vh] lg:mt-[10vh] py-5 bg-white text-black"}
          >
            {process.cta}
          </StepperButton>
        ) : (
          <PulsatingButton className=" mt-[4vh] lg:mt-[10vh]">
            <AnimatedLink href={"/book-free-consultation"}>
              {process.cta}
            </AnimatedLink>
          </PulsatingButton>
        )}
      </Sub>
    </section>
  );
}
