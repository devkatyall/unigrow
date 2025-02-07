// components/YouTubePlayer.js
import React from "react";

const YouTubePlayer = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Optionally, use Tailwind’s aspect ratio plugin to maintain a 16:9 video */}
      <div className="relative pb-[56.25%] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/8QPjRSLDBiA?modestbranding=1&rel=0&controls=1&iv_load_policy=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
