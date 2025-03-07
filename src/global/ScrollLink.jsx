import React from "react";
import { useLenis } from "@studio-freight/react-lenis";

const ScrollLink = ({ targetId, children }) => {
  const lenis = useLenis();

  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Use Lenis to perform smooth scrolling to the target element
      lenis.scrollTo(targetElement);
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
