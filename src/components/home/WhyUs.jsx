"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { corePointers } from "@/data";

export default function WhyUs() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollY, [310, 390], [0, 1]);
  const y = useTransform(scrollY, [425, 535], [-100, 0]);

  useMotionValueEvent(scrollY, "change", (val) => console.log(val));

  const word = "why we’re your best bet for going online?".split(" ");

  function generateScroll(index, number, scroll) {
    if (number <= 0 || index < 0) {
      throw new Error("Index and number must be positive");
    }

    const interval = scroll / number;
    const start = index * interval;
    const end = start + interval;

    return useTransform(
      scrollYProgress,
      [parseFloat(start.toFixed(6)), parseFloat(end.toFixed(6))],
      ["#fff", "#4FB477"]
    );
  }

  function generateCardScroll(index, number, scroll) {
    if (number <= 0 || index < 0) {
      throw new Error("Index and number must be positive");
    }

    const interval = scroll / number;
    const start = index * interval + 0.5;
    const end = start + interval;

    return useTransform(
      scrollYProgress,
      [parseFloat(start.toFixed(6)), parseFloat(end.toFixed(6))],
      [70, 0]
    );
  }

  function generateCardOpacity(index, number, scroll) {
    if (number <= 0 || index < 0) {
      throw new Error("Index and number must be positive");
    }

    const interval = scroll / number;
    const start = index * interval + 0.5;
    const end = start + interval;

    return useTransform(
      scrollYProgress,
      [parseFloat(start.toFixed(6)), parseFloat(end.toFixed(6))],
      [0, 1]
    );
  }

  return (
    <section ref={ref} className="h-[200vh]">
      <motion.div
        className="h-[100vh] sticky top-0 flex items-center justify-center"
        style={{ opacity: scale, y }}
      >
        <div>
          {/* heading */}
          <div className="lg:px-[10%] lg:pb-[2%]">
            <h1 className="text-4xl lg:text-7xl font-normal text-center tracking-tight flex flex-wrap gap-3 justify-center">
              {word.map((e, i) => (
                <motion.span
                  key={i}
                  style={{ color: generateScroll(i, word.length, 0.5) }}
                >
                  {e}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* pointers */}
          <div className=" flex gap-12 py-8 lg:px-[10%]">
            {corePointers.map((e, i) => (
              <motion.div
                style={{
                  y: generateCardScroll(i, corePointers.length, 0.5),
                  opacity: generateCardOpacity(i, corePointers.length, 0.5),
                }}
                key={i}
                className=" py-6 px-8 flex flex-col gap-2 bg-emerald-700 rounded-2xl"
              >
                <h3 className="text-3xl leading-[1em] tracking-tight font-medium text-[#DCFFFD]">
                  {e.title}
                </h3>
                <p className=" font-light">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
