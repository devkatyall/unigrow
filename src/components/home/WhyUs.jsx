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
  const interval = 0.5 / totalWords;
  const start = index * interval;
  const end = start + interval;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#fff", "#4FB477"]
  );

  return (
    <motion.span
      style={{ color }}
      className="text-4xl lg:text-7xl font-normal tracking-tight"
    >
      {text}
    </motion.span>
  );
}

// Card Component
function Card({ title, description, index, totalCards, scrollYProgress }) {
  const interval = 0.5 / totalCards;
  const start = index * interval + 0.5;
  const end = start + interval;

  const y = useTransform(scrollYProgress, [start, end], [70, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="py-6 px-8 flex flex-col gap-2 bg-emerald-700 rounded-2xl"
    >
      <h3 className="text-3xl leading-[1em] tracking-tight font-medium text-[#DCFFFD]">
        {title}
      </h3>
      <p className="font-light">{description}</p>
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
  const y = useTransform(scrollY, [425, 535], [-100, 0]);

  useMotionValueEvent(scrollY, "change", (val) => console.log(val));

  const words = "why we’re your best bet for going online?".split(" ");

  return (
    <section ref={ref} className="h-[200vh]">
      <motion.div
        className="h-[100vh] sticky top-0 flex items-center justify-center"
        style={{ opacity: scale, y }}
      >
        <div>
          {/* Heading */}
          <div className="lg:px-[10%] lg:pb-[2%]">
            <h1 className="text-4xl lg:text-7xl font-normal text-center tracking-tight flex flex-wrap gap-3 justify-center">
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
          </div>

          {/* Pointers */}
          <div className="flex gap-12 py-8 lg:px-[10%]">
            {corePointers.map((pointer, index) => (
              <Card
                key={index}
                title={pointer.title}
                description={pointer.description}
                index={index}
                totalCards={corePointers.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
