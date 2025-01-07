"use client";
import React, { useRef, useEffect } from "react";
import { Noise } from "noisejs"; // ensure you've installed noisejs: npm install noisejs

export default function Canva() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    // Variables
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let field;
    let w, h;
    let size = 20;
    let columns;
    let rows;
    let zoom;

    const noise = new Noise(Math.random()); // Create a new Noise instance

    function initField() {
      field = new Array(columns);
      for (let x = 0; x < columns; x++) {
        field[x] = new Array(rows);
        for (let y = 0; y < rows; y++) {
          field[x][y] = 0;
        }
      }
    }

    function calculateField(now) {
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle =
            noise.simplex3(x / zoom, y / zoom, now / 10000) * Math.PI * 2;
          field[x][y] = angle;
        }
      }
    }

    function reset() {
      zoom = Math.random() * 90 + 20;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.strokeStyle = "black";
      noise.seed(Math.random());
      columns = Math.floor(w / size) + 2;
      rows = Math.floor(h / size) + 2;
      initField();
    }

    function clear() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
    }

    function drawField() {
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle = field[x][y];
          ctx.beginPath();
          let x1 = x * size;
          let y1 = y * size;
          ctx.moveTo(x1, y1);
          ctx.lineTo(
            x1 + Math.cos(angle) * size * 1.5,
            y1 + Math.sin(angle) * size * 1.5
          );
          ctx.stroke();
        }
      }
    }

    function draw(now) {
      requestAnimationFrame(draw);
      calculateField(now);
      clear();
      drawField();
    }

    // Setup once on mount
    function setup() {
      reset();
      draw(1);
    }

    setup();

    window.addEventListener("resize", reset);
    return () => {
      window.removeEventListener("resize", reset);
    };
  }, []);

  return (
    <div>
      {/* Background */}
      <canvas
        ref={canvasRef}
        className="block absolute top-0 -z-30 w-full h-full "
      ></canvas>
      <div className="bg-white opacity-70 absolute top-0 z-50 w-full h-full blur-3xl"></div>
    </div>
  );
}
