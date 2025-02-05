"use client";

// components/CalendlyButton.js
import Script from "next/script";
import { PulsatingButton } from "./ui/pulsating-button";

const CalendlyButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/team-unigrow/30min?background_color=1a1a1a&text_color=ffffff&primary_color=5ba1ff",
      });
    } else {
      console.error("Calendly widget not loaded yet.");
    }
  };

  return (
    <>
      {/* Include Calendly widget CSS and JS */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <PulsatingButton
        onClick={handleClick}
        className="px-4 py-2  rounded hover:bg-blue-700 hover:text-white transition-colors"
      >
        Talk to Expert
      </PulsatingButton>
    </>
  );
};

export default CalendlyButton;
