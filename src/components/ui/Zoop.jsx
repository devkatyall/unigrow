"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function Zoop({ main, change, bg }) {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (val) => console.log(val));

  const scale = useTransform(scrollY, [231, 461], [5, 1]);

  return (
    <section
      className={` inline-block  text-center text-5xl lg:text-8xl px-2 py-2 overflow-hidden tracking-tighter`}
      style={{}}
    >
      <Flickers scale={scale} replace={change}>
        {main}
      </Flickers>
    </section>
  );
}

const Flickers = ({ children, replace, scale }) => (
  <motion.div
    initial="initial"
    // whileHover="initial"
    whileInView="hover"
    viewport={{ amount: 1 }}
    className="relative whitespace-nowrap overflow-hidden w-full"
    style={{ lineHeight: 0.8, scale }}
  >
    <div>
      {children.split("").map((e, i) => (
        <motion.span
          variants={{
            initial: { y: 0 },
            hover: {
              y: `-100%`,
            },
          }}
          transition={{
            duration: 2,
            delay: 0.025 * i,
            ease: "easeInOut",
          }}
          key={i}
          className=" inline-block font-normal tracking-wider"
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
              y: 0,
            },
          }}
          transition={{
            duration: 2,
            delay: 0.025 * i,
            ease: "easeInOut",
          }}
          key={i}
          className=" inline-block font-normal tracking-wider"
        >
          {e}
        </motion.span>
      ))}
    </div>
  </motion.div>
);
