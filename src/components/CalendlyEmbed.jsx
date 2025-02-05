"use client";

import React, { useEffect } from "react";
import { Particles } from "./ui/particles";

const CalendlyEmbed = ({
  url = "https://calendly.com/team-unigrow/30min?background_color=1a1a1a&text_color=ffffff&primary_color=5ba1ff",
}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget overflow-y-visible mt-6 lg:-mt-8 py-0 mb-0 lg:h-[90vh] h-[120vh] no-scrollbar "
      data-url={url}
      style={{ width: "100%" }}
    ></div>
  );
};

export default CalendlyEmbed;
