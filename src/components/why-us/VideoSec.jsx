"use client";
import React, { useRef } from "react";
import HeroVideoDialog from "../hero-video-dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoSec() {
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [100, 400], ["70vw", "85vw"]);

  return (
    <section
      ref={ref}
      className="h-auto mt-[22vh] flex flex-col items-center justify-center"
    >
      <div className=" flex flex-col items-center justify-center mb-[2%]">
        <div className=" text-center flex flex-col items-center gap-3 lg:gap-6 mx-auto w-[87vw]">
          <h1 className=" px-4 py-1 rounded-full ring-2 w-fit text-cyan-600">
            Choose us! but why?
          </h1>
          <h2 className="text-5xl lg:tracking-tighter lg:text-[80px] lg:w-[60%]">
            Because Getting a Website Should Be Easy.
          </h2>
          <p className=" text-base lg:text-lg text-neutral-400 lg:w-[70%]">
            You have a business to run—you shouldn’t have to chase multiple
            people for content, design, and development. Discover why Unigrow is
            your best bet for your digital goals.
          </p>
        </div>
        <div className="flex gap-2 my-6 lg:my-6">
          <Button className=" py-6  md:w-fit scale-95 hover:scale-100 hover:shadow-sm transition-all duration-150">
            <Link href={"/book-free-consultation"}>Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            className=" py-6  md:w-fit scale-95 hover:scale-100 hover:shadow-sm transition-all duration-150"
          >
            <Link href={"#we-are-easy"}>Learn More</Link>
          </Button>
        </div>
      </div>
      <motion.div
        style={{ width }}
        className=" w-[90vw] drop-shadow-[0px_0px_20px_#b8b8b859]"
      >
        <HeroVideoDialog
          className={" w-full"}
          animationStyle="from-center"
          imgClass="border-2 border-cyan-600"
          videoSrc={
            "https://www.youtube.com/embed/8QPjRSLDBiA?modestbranding=1&rel=0&controls=1&iv_load_policy=3"
          }
          thumbnailSrc={"https://i.ibb.co/RTGfcgS7/thumbnail.png"}
          thumbnailAlt="Video thumbnail with a calll talking about why you should chose unigrow"
        />
      </motion.div>
    </section>
  );
}
