import React from "react";
import Faq from "../Common/Faq";
import { questions } from "@/data";

export default function Comparison() {
  return (
    <div className="w-[87vw] mx-auto">
      <div className="mb-4">
        <h2 className="lg:text-5xl xl:text-6xl text-3xl tracking-tight lg:tracking-normal font-medium mb-2">
          What Others Charge Extra Is Free With Us
        </h2>
        <p className="text-sm lg:text-lg text-slate-400">
          Don&apos;t fall into the trap of agencies that nickel-and-dime you.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-neutral-900 text-neutral-600 text-left">
              <th className="p-4 text-xl lg:text-3xl  font-bold">Services</th>
              <th className="p-4 text-xl lg:text-3xl text-center lg:text-start font-normal">
                Others
              </th>
              <th className="p-4 text-xl lg:text-3xl text-center lg:text-start font-normal">
                Us
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { service: "Content creation", others: "$200 +", us: "Included" },
              {
                service: "Modern, Mobile responsiveness",
                others: "$500 +",
                us: "Included",
              },
              {
                service: "SEO Opptimization",
                others: "$300 +",
                us: "Included",
              },
              {
                service: "Hosting Setup",
                others: "$150 +",
                us: "Included",
              },
              { service: "Revisions", others: "Paid", us: "Up to 3 Free" },
            ].map((row, index) => (
              <tr key={index} className="border-t border-neutral-800">
                <td className="p-4 font-medium">{row.service}</td>
                <td className="p-4 text-red-500 gap-2 font-light">
                  <div className="flex lg:flex-row flex-col items-center gap-2">
                    {row.others}
                  </div>
                </td>
                <td className="p-4 text-green-500 font-light  gap-2">
                  <div className="flex lg:flex-row flex-col items-center gap-2 text-center md:text-start">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg> */}
                    {row.us}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Left Column: Competitors (Table/List Style)

// Content creation: Extra
// Mobile responsiveness: Extra
// SEO features: Extra
// Revisions: Limited
// Right Column: Unigrow (Table/List Style)

// Content creation: Included
// Mobile responsiveness: Included
// SEO features: Included
// Revisions: 5 free
