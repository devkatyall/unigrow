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
          <svg
            id="logo-35"
            width="40"
            height="29"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              className="ccompli1"
              fill="#007AFF"
            ></path>{" "}
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            ></path>{" "}
          </svg>
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
