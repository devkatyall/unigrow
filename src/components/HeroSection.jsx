import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className=" flex h-full items-center justify-center lg:mt-[12%]">
      {/* <div className='blobm block md:hidden absolute mt-10 -z-30'></div> */}

      {/* hero-text */}
      <div className=" lg:pl-16 flex flex-col  gap-5 lg:gap-8 h-full">
        <span className="text-5xl font-semibold lg:text-[5.6em] 2xl:text-8xl text-center px-6 lg:p-0 lg:text-left capitalize lg:normal-case">
          Building{" "}
          <span className="dark:text-purple-400 text-purple-700 ">
            The Digital Front
          </span>{" "}
          for Your Business
        </span>
        <p className=" text-md xl:text-[1.2em] 2xl:text-[1.4em] lg:text-left text-center px-6 lg:p-0 ">
          Your business deserves more than just a website—it deserves a digital
          solution that works. We combine smart strategy, intuitive design, and
          powerful development to make it happen.
        </p>
        <div className="flex gap-4 items-center justify-center lg:justify-start">
          <Button className="peer flex flex-nowrap items-center gap-3 px-6 py-6 dark:bg-white dark:text-black dark:stroke-black dark:hover:bg-purple-400 ring-2 rounded-full hover:drop-shadow-lg hover:ring-2 stroke-white hover:stroke-black hover:ring-black hover:bg-white hover:text-black hover:scale-105 transition-all duration-150 ease-in-out ring-white text-white font-semibold text-md bg-black">
            Lets Talk Business
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
          <Button
            variant="outline"
            className="text-md px-6 py-6 rounded-full ring-2"
          >
            Our Service
          </Button>
        </div>
      </div>
    </div>
  );
}
