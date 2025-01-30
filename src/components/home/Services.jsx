"use client";

import React from "react";
import { corePointers } from "@/data";
import { motion } from "framer-motion";

export default function Services() {
  const bg = ["[#C17777]", "[#528F7C]", "[#CD9B6A]", "[#C87FA7]"];

  return (
    <div className="md:my-6 md:px-16 lg:py-16">
      <div className="my-2 md:my-4 lg:my-6 xl:my-8">
        <h2 className=" text-3xl md:text-6xl text-center font-medium">
          Your One-Stop Shop for All Things Online.
        </h2>
        <p className="text-sm md:text-base text-center mb-4 mt-2 text-stone-400">
          everything you would need for your online business is here at one
          place.
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:auto-rows-fr md:gap-6">
        {corePointers.map((e, i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            key={i}
            className={`h-full w-full drop-shadow-2xl ${
              i === 0 && "col-span-2"
            } ${
              i === 3 && "md:col-span-2"
            }  md:h-[200px] bg-opacity-50 bg-stone-900 flex md:gap-2 flex-col justify-end rounded-xl md:px-6 md:py-6 relative ring-1 ring-stone-800`}
          >
            <span
              className={` bg-${bg[i]} bg-opacity-40 w-fit p-3 rounded-full absolute top-4 right-4 drop-shadow-xl`}
            >
              {e.svg}
            </span>
            <h3 className="md:text-4xl font-light md:leading-[32px]">
              {e.title}
            </h3>
            <div className=" font-extralight md:leading-[17px] tracking-wide">
              {e.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
