"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);
  const c1 = useTransform(scrollYProgress, [0, 0.25], ["#ececec1c", "#fff"]);
  const c2 = useTransform(scrollYProgress, [0.25, 0.5], ["#ececec1c", "#fff"]);
  const c3 = useTransform(scrollYProgress, [0.5, 0.75], ["#ececec1c", "#fff"]);
  const c4 = useTransform(scrollYProgress, [0.75, 1], ["#ececec1c", "#fff"]);

  return (
    <section ref={targetRef} className=" h-[300vh]">
      <div className="sticky top-0 h-screen flex-col content-center text-[#ececec1c]">
        <h3 className="w-full text-6xl mb-10 text-center ">
          <motion.span style={{ color: c1 }}>Real </motion.span>
          <motion.span style={{ color: c2 }}>Businesses. </motion.span>
          <motion.span style={{ color: c3 }}>Real </motion.span>
          <motion.span style={{ color: c4 }}>Results.</motion.span>
        </h3>
        <motion.div className="flex gap-6" style={{ x }}>
          {projects.map((e, i) => (
            <Card key={i} className="w-[30vw] rounded-2xl px-6 py-10 ">
              <CardHeader className="text-4xl tracking-tight text-emerald-500 drop-shadow-lg">
                {e.title}
              </CardHeader>
              <CardContent>{e.description}</CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
