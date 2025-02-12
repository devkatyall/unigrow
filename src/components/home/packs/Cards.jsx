import GradientText from "@/components/ui/GradText";
import { ArrowBigRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Card = ({ plan, className, i }) => {
  const { name, price, suitableFor, description, features } = plan;
  return (
    <Link
      href="/pricing"
      className={` bg-neutral-900 rounded-2xl shadow-lg p-6 border-[2px] hover:scale-105 transition-all ease-in-out duration-150 relative ${className}`}
    >
      {i === 1 && (
        <span className="absolute left-0 right-0 -top-4 w-full flex justify-center">
          <span className=" px-4 py-2 rounded-full bg-black drop-shadow-[0px_0px_10px_#b8b8b859] md:drop-shadow-[0px_0px_20px_#b8b8b859]">
            <GradientText colors={["#6366F1", "#0EA5E9", "#10B981"]}>
              Most Popular
            </GradientText>
          </span>
        </span>
      )}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
      </div>
      <div className="mb-4">
        <span className="text-4xl font-extrabold text-sky-500 tracking-tight">
          CAD {price}
        </span>
      </div>
      <p className="text-gray-200 mb-4">{description}</p>
      <p className=" flex items-center gap-2 text-gray-200 mb-3 font-bold drop-shadow-[0px_0px_10px_#b8b8b859]">
        Learn more
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-bold">Best For : </span>
        {suitableFor}
      </p>
    </Link>
  );
};

export default Card;
