import React from "react";
import HeroSection from "./HeroSection";
import HeroRight from "./HeroRight";
import ServicesSec from "./ServicesSec";
import Accord from "./Accord";
import MeetTeam from "./MeetTeam";

export default function Hero() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-6 lg:h-[calc(100vh-100px)] py-40 lg:py-0">
        <div className=" col-span-3">
          <div className="blob1 block absolute lg:-top-[60%] -top-[40%] -z-30"></div>
          <HeroSection />
        </div>
        <div className="col-span-3 hidden lg:block">
          <HeroRight />
        </div>
      </div>
      <ServicesSec />
      <Accord />
      <MeetTeam />
    </div>
  );
}
