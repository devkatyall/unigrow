"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Particles } from "../ui/particles";
import { Meteors } from "../ui/meteors";
import LetterGlitch from "../ui/LetterGlitch";
import GradientText from "../ui/GradText";

function Word({ text, index, totalWords, scrollYProgress, time }) {
  const interval = time / totalWords;
  const start = index * interval;
  const end = start + interval;

  const color = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-50, 0]);

  return (
    <motion.span
      style={{ opacity: color, y }}
      className={`${text === "Painful" && "text-red-600"}`}
    >
      {text}{" "}
    </motion.span>
  );
}

export default function Pricing() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const o = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const d = useTransform(scrollYProgress, [0.59, 0.6], ["block", "none"]);
  const y = useTransform(scrollYProgress, [0.5, 0.6], [0, 50]);
  const yo = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  const d2 = useTransform(scrollYProgress, [0.6, 0.62], ["none", "block"]);
  const y2 = useTransform(scrollYProgress, [0.6, 0.7], [-50, 0]);
  const yo2 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  const heading = "Web Design Doesn’t Have to Be Painful".split(" ");

  return (
    <section
      ref={ref}
      className="md:my-6 md:px-16 lg:py-16 px-8 py-3 my-6 h-[300vh] "
    >
      <div className=" sticky top-0 h-screen flex flex-col items-center justify-center">
        <LetterGlitch scroll={scrollYProgress} />
        <motion.div style={{ display: d, opacity: yo, x: y }}>
          <h2 className="text-3xl md:text-6xl xl:text-7xl text-center font-medium">
            {heading.map((e, i) => (
              <Word
                text={e}
                key={i}
                index={i}
                totalWords={heading.length}
                scrollYProgress={scrollYProgress}
                time={0.3}
              />
            ))}
          </h2>
          <motion.p
            style={{
              opacity: o,
            }}
            className=" text-sm md:text-base xl:text-2xl text-center mb-4 mt-2 lg:px-[10%] text-white"
          >
            Most agencies make you go through content writing, design, and
            development separately—costing you time and money.
          </motion.p>
        </motion.div>
        <motion.div style={{ display: d2, opacity: yo2, x: y2 }}>
          <div>
            <h2 className="text-3xl md:text-6xl xl:text-7xl text-center font-medium flex justify-center items-center gap-2 lg:gap-4">
              We keep it{" "}
              <span>
                <GradientText colors={["#6366F1", "#0EA5E9", "#10B981"]}>
                  simple.
                </GradientText>
              </span>
            </h2>
            <p className=" text-sm md:text-base xl:text-2xl lg:px-[10%] text-center mb-4 mt-2 text-white">
              With Unigrow, you get an all-in-one solution at a fraction of the
              price. We ask for your vision and bring it to life. Simple, right?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
