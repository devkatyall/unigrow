"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "./../../public/logo.png";
import Link from "next/link";
import { useAppContext } from "@/Context";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PulsatingButton } from "./ui/pulsating-button";
import { ScrollProgress } from "./ui/scroll-progress";
import { cn } from "@/lib/utils";
import { services } from "@/data";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import AnimatedLink from "./AnimatedLink";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const { user, setUser } = useAppContext();
  const [visible, setVisible] = useState();
  const [prevScroll, setPrevScroll] = useState();

  const updateTheme = () => {
    setUser((prev) => ({
      ...prev,
      dark: !prev.dark,
    }));
  };

  const updateNav = () => {
    if (window.scrollY > 200 && prevScroll > window.scrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setPrevScroll(window.scrollY);
  };

  useEffect(() => window.addEventListener("scroll", updateNav), [prevScroll]);

  const ref = useRef(null);

  const [props, setProps] = useState({
    opacity: 0,
    width: 0,
    left: 0,
  });

  const [present, setPresent] = useState({
    opacity: 0,
    width: 0,
    left: 0,
  });

  const pathname = usePathname();

  return (
    <motion.nav
      style={{
        zIndex: 50,
      }}
      className={` w-full top-0 transition-all ease-in-out duration-100 bg-black backdrop-blur-sm ${
        visible
          ? "fixed shadow-lg header bg-opacity-80"
          : "absolute bg-opacity-55"
      } `}
    >
      <div className="w-full p-2 bg-gray-900 flex justify-center items-center">
        <AnimatedShinyText
          className="w-full max-w-full text-center"
          shimmerWidth={300}
        >
          <span className="lg:text-nowrap">
            Hold up! We're leveling up with a slick new makeover. Our site is
            getting an epic upgrade.
          </span>
        </AnimatedShinyText>
      </div>
      <div className="py-2 lg:py-[18px] px-5 lg:px-16 flex justify-between items-center md:grid md:grid-cols-3">
        <AnimatedLink href={"/"} className="md:flex md:items-center md:gap-2">
          <Image
            src={logo}
            alt="logo of Unigrow.ca which is a web development agency"
            width={50}
            height={50}
          />
          <span className="md:block hidden md:text-xl md:font-semibold">
            Unigrow
          </span>
        </AnimatedLink>
        <div
          onMouseLeave={() => {
            setProps(present);
          }}
          ref={ref}
          className="hidden relative md:flex md:items-center gap-8 drop-shadow-md text-md place-self-center self-center"
        >
          <Tab
            setProps={setProps}
            pathname={pathname}
            href={"/"}
            setPresent={setPresent}
          >
            Home
          </Tab>
          <Tab
            setProps={setProps}
            pathname={pathname}
            href={"/services"}
            setPresent={setPresent}
          >
            Our Services
          </Tab>
          <Tab
            setProps={setProps}
            pathname={pathname}
            href={"/pricing"}
            setPresent={setPresent}
          >
            Pricing
          </Tab>

          <Tab
            setProps={setProps}
            pathname={pathname}
            href={"/why-unigrow"}
            setPresent={setPresent}
          >
            Why Unigrow?
          </Tab>
          <motion.div className=" absolute hidden top-6 peer-hover:block hover:block w-[calc(20vw)] z-10 transition-opacity duration-200">
            <div className="grid grid-cols-1 grid-rows-3 gap-1 mt-6 p-2 bg-black bg-opacity-90 backdrop-blur-sm rounded-2xl drop-shadow-lg ring-1">
              {services.map((e, i) => (
                <AnimatedLink
                  href={e.ref}
                  key={i}
                  className="flex gap-3 items-center hover:bg-blue-950 hover:bg-opacity-40 transition-all ease-in duration-100 rounded-xl p-2 cursor-pointer"
                >
                  <div className=" size-10 bg-blue-950 p-2 flex items-center justify-center rounded-xl">
                    {e.icon}
                  </div>
                  <div className=" flex flex-col">
                    <p className=" text-base">{e.name}</p>
                    <span className=" text-xs leading-tight text-cyan-700">
                      {e.description}
                    </span>
                  </div>
                </AnimatedLink>
              ))}
            </div>
          </motion.div>
          <Line style={props} />
        </div>
        <div className="flex items-center gap-6 place-self-end self-center">
          <div className="flex items-center gap-4">
            <Drawer />
            <PulsatingButton className=" hidden md:block">
              <AnimatedLink href="/book-free-consultation">
                Talk To Expert
              </AnimatedLink>
            </PulsatingButton>
          </div>
        </div>
      </div>
      <ScrollProgress className={` ${!visible && "hidden"}`} />
    </motion.nav>
  );
}

const Tab = ({ children, href, setProps, setPresent, pathname }) => {
  const ref = useRef(null);

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    if (href === pathname || pathname.startsWith(`${href}/`)) {
      setPresent({
        opacity: 1,
        width,
        left: ref.current.offsetLeft,
      });

      setProps({
        opacity: 1,
        width,
        left: ref.current.offsetLeft,
      });
    }
  }, [href, pathname, setPresent]);

  return (
    <AnimatedLink
      ref={ref}
      className={cn(
        " transition-all ease-in-out duration-200 relative z-10 text-white font-medium",
        href === "/services" && "peer"
      )}
      href={href}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width, right } = ref.current.getBoundingClientRect();

        setProps({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
          right: right,
          href: href,
        });
      }}
    >
      {children}
    </AnimatedLink>
  );
};

const Line = ({ style }) => {
  return (
    <motion.div
      animate={{
        width: style?.width,
        left: style?.left,
        right: 0,
      }}
      className=" absolute z-0 -bottom-1 mix-blend-difference h-[3px] rounded-xl bg-cyan-300 cursor-pointer"
    />
  );
};

const Drawer = () => {
  const dropdownVariants = {
    open: {
      height: "auto",
      opacity: 1,
      marginTop: 8,
      marginBottom: 8,
      transition: { duration: 0.3 },
    },
    closed: {
      height: 0,
      opacity: 0,
      marginTop: 0,
      marginBottom: 0,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    open: { rotate: 90, transition: { duration: 0.3 } },
    closed: { rotate: 0, transition: { duration: 0.3 } },
  };

  const [open, setOpen] = useState(false);

  return (
    <Sheet className="block md:hidden ">
      <SheetTrigger className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="w-screen h-screen bg-black/30 backdrop-blur-sm flex flex-col justify-center z-[100]">
        <SheetTitle className="text-5xl">Menu</SheetTitle>
        <div className="flex flex-col gap-[2vh] my-[2vh] ml-[2vw] transition-all ease-in duration-300 cursor-pointer">
          <AnimatedLink href={"/"} className="text-3xl tracking-wide">
            <SheetClose>Home</SheetClose>
          </AnimatedLink>

          <div className="cursor-pointer">
            <div
              className="text-3xl tracking-wide flex gap-2 items-center"
              onClick={() => setOpen((prev) => !prev)}
            >
              Services
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
                variants={arrowVariants}
                animate={open ? "open" : "closed"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </motion.svg>
            </div>
            <motion.div
              variants={dropdownVariants}
              initial="closed"
              animate={open ? "open" : "closed"}
              className="flex flex-col gap-2 ml-[4vw] overflow-hidden"
            >
              {services.map((e, i) => (
                <AnimatedLink
                  key={i}
                  href={e.ref}
                  className="text-xl text-white/55 tracking-wide"
                >
                  <SheetClose>{e.name}</SheetClose>
                </AnimatedLink>
              ))}
            </motion.div>
          </div>

          <AnimatedLink href={"/pricing"} className="text-3xl tracking-wide">
            <SheetClose>Pricing</SheetClose>
          </AnimatedLink>

          <AnimatedLink
            href={"/why-unigrow"}
            className="text-3xl tracking-wide"
          >
            <SheetClose>Why us..?</SheetClose>
          </AnimatedLink>
        </div>
        <div className=" self-baseline py-[2vh] w-full flex items-center justify-center px-[4vw]">
          <AnimatedLink
            href="/book-free-consultation"
            className="bg-white py-3 px-6 rounded-full w-full flex items-center justify-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <SheetClose className="text-2xl font-medium text-black text-center">
              Talk To Expert
            </SheetClose>
          </AnimatedLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};
