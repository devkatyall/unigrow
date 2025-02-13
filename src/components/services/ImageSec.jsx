"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ImageSec({ image, children, className }) {
  return (
    <motion.section
      initial={{
        width: "87vw",
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      whileInView={{
        width: "100vw",
      }}
      className="relative min-h-screen h-auto mx-auto overflow-hidden rounded-2xl flex flex-col items-center justify-center"
    >
      <Image
        src={image}
        fill
        alt="student graduting and looking for job"
        className={cn("object-cover opacity-30", className)}
      />
      {children}
    </motion.section>
  );
}
