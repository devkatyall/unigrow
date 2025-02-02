"use client";

import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "../ui/button";

export default function Top() {
  const COLOR = ["#6366F1", "#0EA5E9", "#10B981"];
  const { scrollY } = useScroll();
  const color = useMotionValue(COLOR[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;

  const y = useTransform(scrollY, [200, 530], [0, 300]);
  const scale = useTransform(scrollY, [100, 427], [1, 0]);

  useEffect(() => {
    animate(color, COLOR, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div className="">
      <motion.div
        className="xl:px-20 px-6 h-[calc(100vh-100px)] flex items-center justify-center text-center w-full"
        style={{
          opacity: scale,
          // backgroundImage,
          zIndex: 0,
        }}
      >
        <motion.div
          className="blob hidden md:block absolute -z-10 dark:opacity-100 opacity-50 blur-[130px]"
          initial={{ width: 400, height: 400 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="blob absolute block md:hidden -z-10 dark:opacity-100 opacity-50 blur-[130px]"
          initial={{ width: 120, height: 120 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <div className=" h-fit flex flex-col items-center ">
          <motion.span
            className=" rounded-full py-1 px-4 border-[1px] w-fit my-4 dark:border-gray-200 border-black font-medium flex gap-1 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <motion.span className="  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
              1K+ Businesses
            </motion.span>
            trust Unigrow
          </motion.span>
          <h1 className="lg:text-6xl xl:text-7xl text-[35px] leading-[38px] tracking-tight lg:tracking-tight font-normal">
            Your Business Online{" "}
            <span className=" md:hidden font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text ">
              Smart, Simple & Stunning
            </span>
          </h1>
          <div className=" hidden md:block w-full">
            <motion.span className="pb-2 overflow-visible flex flex-wrap gap-2 z-50 lg:gap-4 justify-center text-6xl drop-shadow-xl font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text lg:text-6xl xl:text-7xl lg:whitespace-nowrap tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
              >
                Smart,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
              >
                Simple
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
              >
                & Stunning
              </motion.span>
            </motion.span>
          </div>
          <p className="xl:text-lg lg:text-lg lg:w-[70%] xl:w-[60%] py-4 ">
            We create websites that work as hard as you do. From content to
            design to development—we handle it all, so you can focus on growing
            your business.
          </p>
          <div className="flex gap-2 my-4 w-full  lg:items-center justify-center">
            <Button className=" py-6 text-base lg:text-lg">
              Get Started Today
            </Button>
            <Button variant="outline" className=" py-6 text-base lg:text-lg">
              See Our Work
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
