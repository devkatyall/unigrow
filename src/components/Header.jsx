"use client";

import Image from "next/image";
import React from "react";
import logo from "./../../public/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAppContext } from "@/Context";
import { Switch } from "./ui/switch";
import ThemeSwitch from "./ui/ThemeSwitch";

export default function Header() {
  const { user, setUser } = useAppContext();

  const updateTheme = () => {
    setUser((prev) => ({
      ...prev,
      dark: !prev.dark,
    }));
  };

  return (
    <nav className="z-20 w-full h-[100px]">
      <div className="py-5 lg:py-[32px] px-5 lg:px-20 flex justify-between items-center z-50">
        <div className="">
          <Image
            src={logo}
            alt="logo of Unigrow.ca which is a web development agency"
            width={60}
            height={60}
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex gap-6 drop-shadow-md text-md">
            <Link
              className="hover:font-bold transition-all ease-in-out duration-200"
              href=""
            >
              Services
            </Link>
            <Link
              className="hover:font-bold transition-all ease-in-out duration-200"
              href=""
            >
              Customer Stories
            </Link>
            <Link
              className="hover:font-bold transition-all ease-in-out duration-200"
              href=""
            >
              Pricing
            </Link>
            <Link
              className="hover:font-bold transition-all ease-in-out duration-200"
              href=""
            >
              About us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitch
              checked={user.dark ? true : false}
              onChange={updateTheme}
            />
            <Button className="font-medium drop-shadow-md hover:drop-shadow-lg py-2 px-6 rounded-full hover:scale-105 transition-all easy ease-in-out">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
