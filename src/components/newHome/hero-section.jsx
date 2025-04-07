"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Indie_Flower } from "next/font/google";
import ShinyText from "../Common/ShinyText";
import BrowserStack from "./card-stack";

const DeliusFont = Indie_Flower({ weight: "400", subsets: ["latin"] });

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

export default function HeroSection({
  className,
  intensity = "strong",
  children,
  performanceMode = "high",
}) {
  const canvasRef = useRef(null);
  const beamsRef = useRef([]);
  const animationFrameRef = useRef(0);
  const MINIMUM_BEAMS = 20;

  // Determine beam count based on performance mode
  const getBeamCount = () => {
    if (performanceMode === "low") return MINIMUM_BEAMS * 0.5;
    if (performanceMode === "high") return MINIMUM_BEAMS * 1.5;

    // Auto mode - detect device capabilities
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowPerfDevice =
      isMobile || window.navigator.hardwareConcurrency <= 4;
    return isLowPerfDevice ? MINIMUM_BEAMS * 0.5 : MINIMUM_BEAMS;
  };

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      const totalBeams = getBeamCount();
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(canvas.width, canvas.height)
      );
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function resetBeam(beam, index, totalBeams) {
      if (!canvas) return beam;

      const column = index % 3;
      const spacing = canvas.width / 3;

      beam.y = canvas.height + 100;
      beam.x =
        column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = 190 + (index * 70) / totalBeams;
      beam.opacity = 0.2 + Math.random() * 0.1;
      return beam;
    }

    function drawBeam(ctx, beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      // Calculate pulsing opacity
      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

      // Enhanced gradient with multiple color stops
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
      );
      gradient.addColorStop(
        0.4,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.6,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;

      // Frame rate control
      const now = performance.now();
      const elapsed = now - (animationFrameRef.current || now);
      animationFrameRef.current = now;

      // Skip frames on slower devices (aim for ~30fps minimum)
      if (performanceMode !== "high" && elapsed > 33.33) {
        // 33.33ms = ~30fps
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = performanceMode === "low" ? "blur(20px)" : "blur(35px)";

      const totalBeams = beamsRef.current.length;
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        // Reset beam when it goes off screen
        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams);
        }

        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        " min-h-screen h-full w-full overflow-hidden bg-neutral-950",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full z-0"
        style={{
          filter: performanceMode === "low" ? "blur(8px)" : "blur(15px)",
          willChange: "transform",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-neutral-950/5"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: "blur(50px)",
        }}
      />

      <div className=" container relative z-0 flex flex-col w-full items-center justify-center">
        <div className="py-1 px-4 ring-[1px] ring-muted rounded-full mt-[1vh] bg-muted/50">
          <ShinyText
            text="#1 Digital Agency in Canada"
            disabled={false}
            speed={3}
            className="text-sm"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:px-4 text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl   max-w-3xl pt-4 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build. Launch. Grow. <br />
            With Unigrow.
          </motion.h1>
          <motion.p
            className={cn(
              "text-base md:text-xl font-normal text-white/70 tracking-wide"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            where we turn{" "}
            <span className={DeliusFont.className}>“ I’ve got an idea...”</span>{" "}
            into{" "}
            <span className={DeliusFont.className}>
              “ Wow, is this my website?”
            </span>
          </motion.p>
        </div>
      </div>
      <div className="container mt-[5vh]">
        <BrowserStack />
      </div>
    </div>
  );
}
