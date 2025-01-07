import React from "react";
import Canva from "./Canva";
import Image from "next/image";
import team from "@/.././public/teamwork.webp";

export default function ServicesSec() {
  return (
    <div className=" relative  stroke-white lg:h-screen ">
      <div className="lg:col-span-5 lg:hidden flex row-span-4 items-center px-6 lg:py-0 lg:px-8">
        <div className=" flex flex-col gap-6">
          <h2 className="text-6xl font-medium ">
            Easy, Dynamic, and Optimal Workflow
          </h2>
          <p className=" text-slate-600">
            We adhere to the finest, official and uncomplicated operational
            methods to optimize your business expansion.
          </p>
        </div>
      </div>

      <div className="lg:grid py-12 px-6 lg:grid-cols-10 lg:grid-rows-12 lg:px-20 lg;py-20 lg:gap-8 h-full">
        {/* container 1 */}
        <div className="lg:col-span-5 lg:row-span-4 grid grid-cols-6 grid-rows-4 gap-6">
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Designing</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Development</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Live Tracking</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 col-span-3 row-span-2 ring-2 p-4 rounded-lg ring-slate-700">
            <div className="flex items-center justify-center my-2 lg:my-0 p-3 lg:block w-fit  rounded-full lg:p-4 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Research</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex row-span-4 items-center py-10 lg:py-0 lg:px-8">
          <div className="blobm -z-10"></div>
          <div className=" flex flex-col gap-6">
            <h2 className="text-6xl font-medium">
              Easy, Dynamic, and Optimal Workflow
            </h2>
            <p className=" text-slate-500">
              We adhere to the finest, official and uncomplicated operational
              methods to optimize your business expansion.
            </p>
          </div>
        </div>

        {/* container 2 */}
        <div className=" hidden lg:block col-span-10 row-span-8 py-4 mt-8">
          <Image
            src={team}
            className=" h-full object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
