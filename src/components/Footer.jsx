import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-base-300 py-5 lg:py-[18px] px-5 lg:px-16 flex items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <Link href={"/privacy-policy"}>
          <p className=" text-neutral-500 font-medium">Privacy Policy</p>
        </Link>
        <p className=" text-neutral-500 selection:bg-cyan-500 selection:text-black">
          Copyright © 2025 - All right reserved by
          <span className="font-bold drop-shadow-[0px_0px_10px_#b8b8b859] md:drop-shadow-[0px_0px_20px_#b8b8b859]">
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              className="mx-2 self-center inline-block"
            />
            Unigrow
          </span>
        </p>
      </div>
    </footer>
  );
}
