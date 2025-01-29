"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { corePointers } from "@/data";

// Word Component
function Word({ text, index, totalWords, scrollYProgress }) {
  const interval = 0.4 / totalWords;
  const start = index * interval;
  const end = start + interval;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#ffffff60", "#FBFBFB"]
  );

  return (
    <motion.span
      style={{ color }}
      className="text-[27px] lg:text-5xl font-normal tracking-tight"
    >
      {text}
    </motion.span>
  );
}

// Card Component
function Card({ title, description, index, totalCards, scrollYProgress, svg }) {
  const interval = 0.3 / totalCards;
  const start = index * interval + 0.4;
  const end = start + interval;

  const y = useTransform(scrollYProgress, [start, end], [70, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="py-6 px-6 flex flex-col gap-4 rounded-xl bg-[#2ee4e3] bg-opacity-15 max-w-[200px] md:max-w-[350px]"
    >
      <div className=" size-12 mb-2 self-center stroke-[#2ee4e3] drop-shadow-md">
        {svg}
      </div>
      <h3 className="text-[20px] md:text-2xl leading-[1em] tracking-tight font-light text-[#2ee4e3]">
        {title}
      </h3>
      <p className=" text-sm md:text-base font-light">{description}</p>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollY, [310, 390], [0, 1]);
  const bottom = useTransform(scrollYProgress, [0.3, 1], [100, -400]);
  const top = useTransform(scrollYProgress, [0.3, 1], [300, -500]);

  useMotionValueEvent(scrollY, "change", (val) => console.log(val));

  const words = "Your One-Stop Shop for All Things Online.".split(" ");

  return (
    <section ref={ref} className="h-[200vh]">
      <motion.div
        className="h-[100vh] sticky top-0 px-[6%] lg:px-[10%] overflow-hidden"
        style={{ opacity: scale }}
      >
        <motion.div
          style={{ top: bottom, right: top }}
          className="blob absolute -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] "
        />

        <motion.div
          style={{ bottom: bottom, left: top }}
          className="blob absolute -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] "
        />

        <div className="h-full flex flex-col gap-4 items-center justify-center">
          {/* Heading */}
          <div className="lg:px-[10%] lg:pb-[1%] flex flex-col items-center">
            <span className="rounded-full py-1 px-4 border-[1px] w-fit my-4 dark:text-[#000] font-semibold bg-[#2ee4e3] border-black flex gap-1 items-center">
              Why us?
            </span>
            <h1 className="text-[27px] md:text-7xl font-normal text-center tracking-tight flex flex-wrap gap-2 lg:gap-3 gap-y-[0px] capitalize justify-center">
              {words.map((word, index) => (
                <Word
                  key={index}
                  text={word}
                  index={index}
                  totalWords={words.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </h1>
            <p></p>
          </div>

          {/* Pointers */}
          <div className="flex md:flex-wrap gap-6 items-center justify-center">
            {corePointers.map((pointer, index) => (
              <Card
                key={index}
                title={pointer.title}
                description={pointer.description}
                index={index}
                totalCards={corePointers.length}
                scrollYProgress={scrollYProgress}
                svg={pointer.svg}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
