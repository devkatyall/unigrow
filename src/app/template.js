"use client";

import React from "react";
import { animatePageIn } from "@/lib/animations";
import Hamester from "@/components/Hamster";

export default function Template({ children }) {
  React.useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-[#35BCF1] z-[100] fixed top-0 left-0 min-w-full flex flex-col items-center justify-center"
      >
        {/* <Hamester />
        <h2 className="text-2xl md:text-4xl text-white mt-2">
          Hamester is leading the way...
        </h2> */}
      </div>
      {/* <div
        id="banner-2"
        className="min-h-screen bg-black z-[100] fixed top-0 w-1/4 left-1/4 "
      />
      <div
        id="banner-3"
        className="min-h-screen bg-black z-[100] fixed top-0 w-1/4 left-2/4 "
      />
      <div
        id="banner-4"
        className="min-h-screen bg-black z-[100] fixed top-0 w-1/4 left-3/4 "
      /> */}
      {children}
    </div>
  );
}
