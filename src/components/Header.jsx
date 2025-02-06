"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "./../../public/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAppContext } from "@/Context";
import { Switch } from "./ui/switch";
import ThemeSwitch from "./ui/ThemeSwitch";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import ShinyButton from "./ui/ShinyButton";
import { PulsatingButton } from "./ui/pulsating-button";
import { ScrollProgress } from "./ui/scroll-progress";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { services } from "@/data";

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
    if (window.scrollY > 200) {
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
        zIndex: 100,
      }}
      className={` w-full top-0 transition-all ease-in-out duration-100 bg-black backdrop-blur-sm ${
        visible
          ? "fixed shadow-lg header bg-opacity-80"
          : "absolute bg-opacity-55"
      } `}
    >
      <div className="py-5 lg:py-[18px] px-5 lg:px-16 flex justify-between items-center md:grid md:grid-cols-3">
        <div className="md:flex md:items-center md:gap-2">
          <Image
            src={logo}
            alt="logo of Unigrow.ca which is a web development agency"
            width={50}
            height={50}
          />
          <span className="md:block hidden md:text-xl md:font-semibold">
            Unigrow
          </span>
        </div>
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
          <motion.div className=" absolute hidden top-6 peer-hover:block hover:block w-[calc(40vw)] z-10 transition-opacity duration-200">
            <div className="grid grid-cols-2 grid-rows-3 gap-1 mt-6 p-2 bg-black bg-opacity-90 backdrop-blur-sm rounded-2xl drop-shadow-lg ring-1">
              {services.map((e, i) => (
                <div
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
                </div>
              ))}
            </div>
          </motion.div>
          <Line style={props} />
        </div>
        <div className="flex items-center gap-6 place-self-end self-center">
          <div className="flex items-center gap-4">
            {/* <ThemeSwitch
              checked={user.dark ? true : false}
              onChange={updateTheme}
            /> */}
            <PulsatingButton>
              <Link href="/book-free-consultation">Talk To Expert</Link>
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
    if (href === pathname) {
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
    <Link
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
    </Link>
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
      className=" absolute z-0 -bottom-1 mix-blend-difference h-[3px] rounded-xl bg-cyan-300"
    />
  );
};
