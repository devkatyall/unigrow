"use client";
import React from "react";
import { addOns, pricingPackages } from "@/data";
import Card from "./Cards";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import CustomCard from "./CustomCard";

export default function Packs() {
  const { scrollY } = useScroll();
  const path = useTransform(scrollY, [3510.5, 3680], [0, 1]);
  useMotionValueEvent(scrollY, "change", (v) => console.log(v));

  return (
    <section
      className="md:my-6 md:px-16 lg:py-16 px-8 py-3 my-6 relative"
      id="pricing"
    >
      <div className=" absolute left-0 -top-[45vh] lg:-top-[50vh] xl:-top-[50vh] flex justify-center w-full overflow-x-hidden">
        <svg
          width="283"
          height="509"
          viewBox="0 0 253 809"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" overflow-x-hidden"
        >
          <motion.path
            style={{ pathLength: path }}
            d="M252.922 1C369.3 391.091 26.0002 366.013 26 466.671C25.9998 567.328 159.536 586.833 159.536 648.133C159.536 709.432 43.143 808 43.143 808"
            stroke="white"
            strokeWidth="6"
          />
        </svg>
      </div>
      <div className=" grid md:grid-cols-3 gap-8 md:gap-4">
        {pricingPackages.map((e, i) => (
          <Card plan={e} key={i} i={i} />
        ))}
        <div className=" md:col-span-3">
          <CustomCard />
        </div>
      </div>
    </section>
  );
}
