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
    <nav
      style={{}}
      className={`z-20 w-full top-0 ${
        visible
          ? "sticky bg-black shadow-lg header border-b-[2px]"
          : "bg-transparent"
      } `}
    >
      <div className="py-5 lg:py-[18px] px-5 lg:px-16 flex justify-between items-center md:grid md:grid-cols-3 z-50">
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
          className="hidden relative md:flex md:items-center gap-6 drop-shadow-md text-md place-self-center self-center"
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
            href={"/clients"}
            setPresent={setPresent}
          >
            Success Stories
          </Tab>

          <Line style={props} />
        </div>
        <div className="flex items-center gap-6 place-self-end self-center">
          <div className="flex items-center gap-4">
            {/* <ThemeSwitch
              checked={user.dark ? true : false}
              onChange={updateTheme}
            /> */}
            <ShinyButton>Get Started</ShinyButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Tab = ({ children, href, setProps, setPresent, pathname }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (href === pathname) {
      const { width } = ref.current.getBoundingClientRect();

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
      className="transition-all ease-in-out duration-200 relative z-10"
      href={href}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setProps({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
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
      animate={{ ...style, width: style.width + 12, left: style.left - 6 }}
      className=" absolute z-0 -top-1 h-[35px] rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    />
  );
};
