import Image from "next/image";
import React from "react";
import img from "@/./../public/hero.png";

export default function HeroRight() {
  return (
    <div className=" absolute top-[15%]">
      <Image src={img} width={"100%"} alt="Image by upklyak on Freepik" />
    </div>
  );
}
