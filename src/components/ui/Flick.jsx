"use client";

import { motion } from "framer-motion";

export const Flickers = ({ children, replace }) => (
  <motion.div
    initial="initial"
    // whileHover="initial"
    animate="hover"
    className="relative text-blue-500 dark:text-black whitespace-nowrap overflow-hidden w-full"
    style={{ lineHeight: 0.8 }}
  >
    <div>
      {children.split("").map((e, i) => (
        <motion.span
          variants={{
            initial: { y: 0 },
            hover: {
              y: [0, `-100%`],
            },
          }}
          transition={{
            duration: 3.5,
            delay: 0.025 * i,
            ease: "easeInOut",
          }}
          key={i}
          className=" inline-block font-bold"
        >
          {e}
        </motion.span>
      ))}
    </div>
    <div className=" absolute inset-0">
      {replace.split("").map((e, i) => (
        <motion.span
          variants={{
            initial: { y: "100%" },
            hover: {
              y: ["100%", 0, "-120%"],
            },
          }}
          transition={{
            duration: 4.5,
            delay: 0.025 * i,
            ease: "easeInOut",
          }}
          key={i}
          className=" inline-block font-bold"
        >
          {e}
        </motion.span>
      ))}
    </div>
    <div className=" absolute inset-0">
      {replace.split("").map((e, i) => (
        <motion.span
          variants={{
            initial: { y: "200%" },
            hover: {
              y: ["200%", "100%", "0"],
            },
          }}
          transition={{
            duration: 5,
            delay: 0.035 * i,
            ease: "easeInOut",
          }}
          key={i}
          className=" inline-block font-bold"
        >
          {e}
        </motion.span>
      ))}
    </div>
  </motion.div>
);
