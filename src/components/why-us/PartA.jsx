import React from "react";
import ParallaxImage from "../parallax";
import img from "@/../public/why-us/heroImage.jpg";

export default function PartA() {
  return (
    <section
      id="we-are-easy"
      className="lg:h-screen flex items-center justify-center py-6 my-6 lg:my-0 lg:py-0 overflow-hidden"
    >
      <div className=" flex flex-col-reverse gap-4 lg:gap-12 lg:flex-row-reverse lg:justify-between w-full md:px-16 px-8">
        <div className="flex flex-col lg:w-[50%]">
          <h2 className=" lg:text-5xl xl:text-6xl text-[35px] leading-[38px] tracking-tight lg:tracking-normal font-medium">
            Experience Effortless Website Creation.
          </h2>
          <p className=" text-base lg:text-lg mt-2 text-slate-400">
            Our streamlined process makes building a website stress-free,
            affordable, and hassle-free.
          </p>
          <ul className=" space-y-6 mt-6">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className=" stroke-cyan-600 size-9 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <h3 className=" font-medium text-lg text-opacity-90 lg:text-xl ">
                We Speak Your Language
              </h3>
              <p className="lg:text-base text-sm text-neutral-500">
                No confusing tech jargon—just clear, simple communication.
              </p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className=" stroke-cyan-600 size-9 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h3 className=" font-medium text-lg text-opacity-90 lg:text-xl ">
                No Hidden Fees
              </h3>
              <p className="lg:text-base text-sm text-neutral-500">
                Content, design, mobile optimization, and SEO friendly code.
              </p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className=" stroke-cyan-600 size-9 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>

              <h3 className=" font-medium text-lg text-opacity-90 lg:text-xl ">
                Proven Results
              </h3>
              <p className="lg:text-base text-sm text-neutral-500">
                Trusted by businesses who love our stress-free process.
              </p>
            </li>
          </ul>
        </div>
        <div className=" h-[60vh]  lg:h-[70vh] w-[80vw] lg:w-[50vw] rounded-xl overflow-hidden">
          <ParallaxImage
            image={img}
            className={
              "lg:left-[-23%] lg:top-[-48%] h-[140vh] scale-90  lg:h-[calc(100%+142vh)] lg:scale-50"
            }
          />
        </div>
      </div>
    </section>
  );
}
