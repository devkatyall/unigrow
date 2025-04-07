"use client";

import React, { useEffect } from "react";
import { animatePageIn } from "@/lib/animations";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Transition() {
  const pathname = usePathname();

  useEffect(() => {
    animatePageIn();
  }, [pathname]);

  return (
    <motion.div
      id="banner-1"
      className="min-h-screen bg-[#35BCF1] z-[100] fixed top-0 left-0 min-w-full flex flex-col items-center justify-center"
    >
      {/* <h2 className="text-2xl md:text-4xl text-white mt-2">
          Hamester is leading the way...
        </h2> */}
    </motion.div>
  );
}
