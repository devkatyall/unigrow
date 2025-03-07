"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShinyButton from "../ui/ShinyButton";
import Link from "next/link";
import AnimatedLink from "../AnimatedLink";
import KokonutBackground from "./NextPage";

export default function Top() {
  // const COLOR = ["#6366F1", "#0EA5E9", "#10B981"];
  const { scrollY } = useScroll();
  // const color = useMotionValue(COLOR[0]);
  // const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;

  const y = useTransform(scrollY, [200, 530], [0, 300]);
  const scale = useTransform(scrollY, [100, 427], [1, 0]);

  // useEffect(() => {
  //   animate(color, COLOR, {
  //     ease: "easeInOut",
  //     duration: 10,
  //     repeat: Infinity,
  //     repeatType: "mirror",
  //   });
  // }, []);

  return (
    <div className="">
      <motion.div
        className="xl:px-20 px-6 h-[calc(100vh-22vh)] flex justify-center text-center w-full"
        style={{
          opacity: scale,
          // backgroundImage,
          zIndex: 0,
        }}
      >
        <KokonutBackground />
        <div className="relative h-fit flex flex-col gap-2 items-center justify-center lg:py-24 ">
          <motion.span
            className=" rounded-full py-1 px-4 border-[1px] w-fit my-6 dark:border-gray-200 border-black font-medium flex gap-1 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <motion.span className="  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text font-bold">
              #1
            </motion.span>
            Web Agency in Canada
          </motion.span>
          <h1 className="lg:text-5xl xl:text-6xl text-[35px] leading-[38px] tracking-tight lg:tracking-normal font-medium lg:px-[10%]">
            Your Business Deserves a Website That Works{" "}
            <motion.span className="lg:text-5xl xl:text-6xl font-light text-[40px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text tracking-tight">
              Without the Overpriced Drama.
            </motion.span>
          </h1>
          <p className="xl:text-lg lg:text-lg lg:w-[60%] xl:w-[70%] py-4 ">
            At Unigrow, we handle everything: content, design, development, SEO,
            and even the tech setup. No hassle. No hidden fees. Just a modern,
            high-performing website that works.
          </p>
          <div className="flex lg:flex-row flex-col-reverse gap-2 my-4 w-full items-center justify-center ">
            <span className=" w-[60%] lg:w-[20%] text-xs lg:text-sm opacity-50 italic capitalize">
              Get free 15 mins consultation to kickstart your online business
            </span>
            <ShinyButton
              color="cyan"
              className=" cursor-pointer hover:scale-110 scale-105 transition-all ease-in drop-shadow-[0px_0px_40px_#b8b8b859] hover:font-bold"
            >
              <AnimatedLink href={"/book-free-consultation"}>
                Get Started
              </AnimatedLink>
            </ShinyButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
