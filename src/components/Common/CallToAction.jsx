import React from "react";

export default function CallToAction({ children }) {
  return (
    <div className="relative overflow-hidden px-[6vw] py-[2vh]">
      <div className="absolute inset-0 h-full w-full -z-10 rotate-180"></div>
      <div className="mx-auto w-[87vw]">{children}</div>
    </div>
  );
}
