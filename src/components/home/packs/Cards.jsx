import GradientText from "@/components/ui/GradText";
import { Check } from "lucide-react";
import React from "react";

const Card = ({ plan, className, i }) => {
  const { name, price, suitableFor, description, features } = plan;
  return (
    <div
      className={` bg-neutral-900 rounded-2xl shadow-lg p-6 border-[2px] relative ${className}`}
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
      <ul className=" mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-cyan-500 flex items-start gap-3">
            <Check className="h-full min-w-6" /> {feature}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500">
        <span className="font-bold">Best For : </span>
        {suitableFor}
      </p>
    </div>
  );
};

export default Card;
