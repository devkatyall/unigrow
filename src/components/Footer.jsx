import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-base-300 py-5 lg:py-[18px] px-6 lg:px-16 flex items-center justify-center">
      <div className=" lg:flex-row flex-col flex lg:items-center lg:justify-between w-full gap-y-2">
        <div className=" flex gap-x-4 gap-y-2 flex-wrap">
          <Link href={"/privacy-policy"}>
            <p className=" text-xs lg:text-sm border-r-2 border- pr-4 text-neutral-500 font-medium">
              Privacy Policy
            </p>
          </Link>
          <Link href={"/cookies"}>
            <p className=" text-xs lg:text-sm border-r-2 border- pr-4 text-neutral-500 font-medium">
              Use of Cookies
            </p>
          </Link>
          <Link href={"/terms"}>
            <p className=" text-xs lg:text-sm border-r-2 border- pr-4 text-neutral-500 font-medium">
              Terms of Use
            </p>
          </Link>
          <Link href={"/legal"}>
            <p className=" text-xs lg:text-sm border-r-2 border- pr-4 text-neutral-500 font-medium">
              Legal
            </p>
          </Link>
          <Link href={"/sitemap"}>
            <p className=" text-xs lg:text-sm pr-4 text-neutral-500 font-medium">
              Site Map
            </p>
          </Link>
        </div>

        <p className=" text-neutral-500 selection:bg-cyan-500 selection:text-black text-xs lg:text-sm">
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
