"use client";

// animations.js
import { animate } from "framer-motion";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    [bannerOne, bannerTwo, bannerThree, bannerFour].forEach(
      (banner) => (banner.style.transform = "translateY(0%)")
    );

    animate(0, 100, {
      duration: 0.3,
      onUpdate: (latest) => {
        bannerOne.style.transform = `translateY(${latest}%)`;
      },
    });

    animate(0, 100, {
      duration: 0.3,
      delay: 0.2,
      onUpdate: (latest) => {
        bannerTwo.style.transform = `translateY(${latest}%)`;
      },
    });

    animate(0, 100, {
      duration: 0.3,
      delay: 0.4,
      onUpdate: (latest) => {
        bannerThree.style.transform = `translateY(${latest}%)`;
      },
    });

    animate(0, 100, {
      duration: 0.3,
      delay: 0.6,
      onUpdate: (latest) => {
        bannerFour.style.transform = `translateY(${latest}%)`;
      },
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    [bannerOne, bannerTwo, bannerThree, bannerFour].forEach(
      (banner) => (banner.style.transform = "translateY(-100%)")
    );

    animate(-100, 0, {
      duration: 0.5,
      onUpdate: (latest) => {
        bannerOne.style.transform = `translateY(${latest}%)`;
      },
    });

    animate(-100, 0, {
      duration: 0.5,
      delay: 0.2,
      onUpdate: (latest) => {
        bannerTwo.style.transform = `translateY(${latest}%)`;
      },
    });

    animate(-100, 0, {
      duration: 0.5,
      delay: 0.4,
      onUpdate: (latest) => {
        bannerThree.style.transform = `translateY(${latest}%)`;
      },
    });

    animate(-100, 0, {
      duration: 0.5,
      delay: 0.6,
      onUpdate: (latest) => {
        bannerFour.style.transform = `translateY(${latest}%)`;
      },

      onComplete: () => {
        router.push(href);
      },
    });
  }
};
