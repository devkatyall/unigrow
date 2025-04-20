"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallToAction from "./Common/CallToAction";
import { Button } from "./ui/button";
import AnimatedLink from "./AnimatedLink";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="">
      <div className="footer h-12 w-full" />
      <CallToAction>
        {pathname !== "/book-free-consultation" && (
          <div
            className=" flex flex-col
        gap-2  py-[5vh]"
          >
            <h2 className=" text-3xl md:text-5xl font-medium drop-shadow-lg">
              Ready to Build a Website Without the Headaches?
            </h2>
            <p className=" text-sm lg:text-lg text-slate-400">
              Unigrow takes care of everything so you can focus on growing your
              business. All-inclusive pricing. No hidden fees. Stress-free,
              fully managed process
            </p>

            <div className="mt-4">
              <Button className=" hover:scale-105">
                <AnimatedLink href="/book-free-consultation">
                  Book a Free Call
                </AnimatedLink>
              </Button>
            </div>
          </div>
        )}
        <div className=" drop-shadow-lg lg:flex-row flex-col flex lg:items-center lg:justify-between w-full gap-y-2">
          <div className=" flex gap-x-4 gap-y-2 flex-wrap">
            <AnimatedLink href={"/"}>
              <p className=" text-xs hover:font-bold lg:text-sm border-r-2 border-white pr-4 text-white font-medium">
                Home
              </p>
            </AnimatedLink>

            <AnimatedLink href={"/services"}>
              <p className=" text-xs hover:font-bold lg:text-sm border-r-2 border-white pr-4 text-white font-medium">
                Services
              </p>
            </AnimatedLink>
            <AnimatedLink href={"/pricing"}>
              <p className=" text-xs hover:font-bold lg:text-sm border-r-2 border-white pr-4 text-white font-medium">
                Pricing
              </p>
            </AnimatedLink>
            <AnimatedLink href={"/cookies"}>
              <p className=" text-xs hover:font-bold lg:text-sm border-r-2 border-white pr-4 text-white font-medium">
                Use of Cookies
              </p>
            </AnimatedLink>
            <AnimatedLink href={"/sitemap.xml"}>
              <p className=" text-xs hover:font-bold lg:text-sm pr-4 border-r-2 border-white text-white font-medium">
                Site Map
              </p>
            </AnimatedLink>
            <Link href="tel:+14376635954">
              <p className=" text-xs hover:font-bold lg:text-sm pr-4 text-white font-medium">
                +14376635954
              </p>
            </Link>
          </div>

          <p className=" text-white selection:bg-cyan-500 selection:text-black text-xs lg:text-sm">
            Copyright © 2025 - All right reserved by
            <span className=" drop-shadow-[0px_0px_10px_#b8b8b859] md:drop-shadow-[0px_0px_20px_#b8b8b859]">
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
      </CallToAction>
    </footer>
  );
}
