"use client";
import React from "react";
import Canva from "./Canva";
import Image from "next/image";
import team from "@/.././public/teamwork.webp";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ServicesSec() {
  // const { scrollY } = useScroll();
  // useMotionValueEvent(scrollY, "change", (v) => console.log(v));

  // const y = useTransform(scrollY, [500, 550], [50, 0]);
  // const x = useTransform(scrollY, [307, 500], [0, 1]);
  // const scale = useTransform(scrollY, [500, 550], [0.2, 1]);
  return (
    <motion.div
      className=" relative  stroke-white lg:h-screen "
      style={{ opacity: x }}
    >
      <div className="lg:col-span-5 lg:hidden flex row-span-4 items-center px-6 lg:py-0 lg:px-8">
        <motion.div
          className=" flex flex-col gap-6"
          style={{ y, opacity: scale }}
        >
          <h2 className="text-6xl font-medium text-[#d1d1d0] ">
            Your Website, Built Better.
          </h2>
          <p className=" text-slate-600">
            We adhere to the finest, official and uncomplicated operational
            methods to optimize your business expansion.
          </p>
        </motion.div>
      </div>

      <div className="lg:grid py-12 px-6 lg:grid-cols-10 lg:grid-rows-12 lg:px-20 lg;py-20 lg:gap-8 h-full">
        {/* container 1 */}
        <motion.div
          className="lg:col-span-5 lg:row-span-4 grid grid-cols-6 grid-rows-4 gap-6"
          style={{ y, opacity: scale }}
        >
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg tracking-tight font-semibold">
                Mobile-Optimized
              </h3>
              <p className="text-sm text-slate-500">
                Looks flawless on any screen, big or small.
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg tracking-tight font-semibold">
                SEO-Friendly Content
              </h3>
              <p className="text-sm text-slate-500">
                We’ll help you rank on Google without breaking a sweat.
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg tracking-tight font-semibold">
                E-commerce Ready
              </h3>
              <p className="text-sm text-slate-500">
                Sell your products or services seamlessly.
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg tracking-tight font-semibold">
                24/7 Support
              </h3>
              <p className="text-sm text-slate-500">
                Because the internet never sleeps (and neither do we)
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-5 hidden lg:flex row-span-4 items-center py-10 lg:py-0 lg:px-8">
          <motion.div
            className=" flex flex-col gap-6"
            style={{ y, opacity: scale }}
          >
            <h2 className="text-6xl font-medium">
              Your Website, Built Better.
            </h2>
            <p className=" text-slate-500">
              We adhere to the finest, official and uncomplicated operational
              methods to optimize your business expansion.
            </p>
          </motion.div>
        </div>

        {/* container 2 */}
        <div className=" hidden lg:flex justify-center col-span-10 row-span-8 py-4 mt-8  ">
          <Image
            src={team}
            className=" h-full object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
