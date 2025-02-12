"use client";

import React from "react";
import { animatePageIn } from "@/lib/animations";

export default function Template({ children }) {
  React.useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-black z-[100] fixed top-0 left-0 w-1/4 "
      />
      <div
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
      />
      {children}
    </div>
  );
}
