import React from "react";
import ParallaxImage from "../parallax";
import img from "@/../public/why-us/heroImage.jpg";

export default function PartA() {
  return (
    <section
      id="we-are-easy"
      className="lg:h-screen flex items-center justify-center py-6 my-6 lg:my-0 lg:py-0"
    >
      <div className=" flex flex-col-reverse gap-4 lg:gap-12 lg:flex-row-reverse w-full md:px-16 px-8">
        <div className="flex flex-col lg:w-[50%]">
          <h2 className=" lg:text-5xl xl:text-6xl text-[35px] leading-[38px] tracking-tight lg:tracking-normal font-medium">
            Experience Effortless Website Creation.
          </h2>
          <p className=" text-base lg:text-lg mt-2 text-slate-400">
            Our streamlined process makes building a website stress-free,
            affordable, and hassle-free.
          </p>
          <ul className=" space-y-4 mt-6 list-disc lg:pl-4">
            <li>
              <h3 className=" font-medium text-lg text-opacity-90 lg:text-xl ">
                We Speak Your Language
              </h3>
              <p className="lg:text-base text-sm text-neutral-500">
                No confusing tech jargon—just clear, simple communication.
              </p>
            </li>
            <li>
              <h3 className=" font-medium text-lg text-opacity-90 lg:text-xl ">
                No Hidden Fees
              </h3>
              <p className="lg:text-base text-sm text-neutral-500">
                Content, design, mobile optimization, and SEO friendly code.
              </p>
            </li>
            <li>
              <h3 className=" font-medium text-lg text-opacity-90 lg:text-xl ">
                Proven Results
              </h3>
              <p className="lg:text-base text-sm text-neutral-500">
                Trusted by businesses who love our stress-free process.
              </p>
            </li>
          </ul>
        </div>
        <div className=" h-[60vh] w-[80vw] lg:w-[50vw] rounded-xl overflow-hidden">
          <ParallaxImage
            image={img}
            className={
              "lg:left-[-23%] lg:top-[-35%] h-[100vh] top-[8%] lg:h-[calc(100%+112vh)] lg:scale-50"
            }
          />
        </div>
      </div>
    </section>
  );
}

// Section 1: Experience Effortless Website Creation (3 Columns)
// Heading: "Experience Effortless Website Creation"
// Subtext: "Our streamlined process makes building a website stress-free, affordable, and hassle-free."
// Column 1:
// Icon (Heroicons): 🌟
// Heading: "We Speak Your Language"
// Text: "No confusing tech jargon—just clear, simple communication."

// Column 2:
// Icon (Heroicons): 💰
// Heading: "No Hidden Fees"
// Text: "Content, design, mobile optimization, and SEO included."

// Column 3:
// Icon (Heroicons): 🤝
// Heading: "Proven Results"
// Text: "Trusted by businesses who love our stress-free process."
