"use client";

// animations.js
import { animate } from "framer-motion";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    bannerOne.style.transform = "translateY(0%)";
    bannerOne.style.borderRadius = "0";

    animate(0, 100, {
      duration: 0.5,
      onUpdate: (latest) => {
        bannerOne.style.transform = `translateY(${latest}%)`;
        bannerOne.style.borderRadius = `${latest}%`;
      },
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    bannerOne.style.transform = "translateY(-100%)";
    bannerOne.style.borderRadius = "100%";

    animate(-100, 0, {
      duration: 0.5,
      onUpdate: (latest) => {
        bannerOne.style.transform = `translateY(${latest}%)`;
        bannerOne.style.borderRadius = `${-latest}%`;
      },

      onComplete: () => {
        router.push(href);
      },
    });
  }
};
