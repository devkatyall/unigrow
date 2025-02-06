"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ParallaxImage({ image, children, className }) {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-full overflow-hidden "
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        zIndex: 0,
      }}
    >
      <div
        className={cn(
          "fixed top-[-20vh] left-0 h-[calc(100%+20vh)] w-full ",
          className
        )}
      >
        <motion.div
          style={{ y }}
          className="relative w-full h-full saturate-50"
        >
          <Image
            src={image}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
            className=""
          />
        </motion.div>
      </div>
      {children}
    </div>
  );
}
