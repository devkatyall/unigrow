"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Minus,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Star,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

// Sample website projects
const websiteProjects = [
  {
    id: 3,
    title: "Fashion E-commerce",
    url: "shechic.ca",
    description: "E-commerce platform for fashion enthusiasts",
    imageUrl: "https://i.ibb.co/J1fMwfZ/image.png",
    technologies: ["Gatsby", "GraphQL", "Sanity CMS"],
  },
  {
    id: 1,
    title: "Portfolio Website",
    url: "katyal.dev",
    description: "A portfolio website for a developer",
    imageUrl: "https://i.ibb.co/3mXvjkzm/image.png",
    technologies: ["Next.js", "Tailwind CSS", "Shopify"],
  },
  {
    id: 2,
    title: "Air Goddess Maquillage",
    url: "airgoddessmaquillage.ca",
    description: "A makeup brand for women",
    imageUrl: "https://i.ibb.co/VWHRndvV/image.png",
    technologies: ["React", "D3.js", "Firebase"],
  },

  {
    id: 4,
    title: "Car Detailing Website",
    url: "elitecardetailing.ca",
    description: "Web application for tracking fitness and nutrition",
    imageUrl: "https://i.ibb.co/b58RFHFd/image.png",
    technologies: ["Vue.js", "Tailwind CSS", "Supabase"],
  },
];

export default function BrowserStack() {
  const [websites, setWebsites] = useState(websiteProjects);
  const [selectedWebsites, setSelectedWebsites] = useState([]);

  const handleWebsiteAction = (id, action) => {
    const websiteToHandle = websites.find((website) => website.id === id);

    if (action === "interested" && websiteToHandle) {
      setSelectedWebsites((prev) => [...prev, websiteToHandle]);
    }

    // Remove website from stack
    setWebsites((prevWebsites) => {
      const newWebsites = prevWebsites.filter((website) => website.id !== id);

      // If we're running out of websites, reset the stack
      if (newWebsites.length < 1) {
        return [...websiteProjects];
      }

      return newWebsites;
    });
  };

  return (
    <div className="relative md:h-[400px] max-w-4xl mx-auto scale-[0.9]">
      {/* {selectedWebsites.length > 0 && (
        <div className="absolute -top-12 right-0 z-10 flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-white">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm font-medium">
            {selectedWebsites.length} saved
          </span>
        </div>
      )} */}
      <AnimatePresence mode="popLayout">
        {websites.slice(0, 3).map((website, index) => (
          <BrowserWindow
            key={website.id}
            website={website}
            index={index}
            handleWebsiteAction={handleWebsiteAction}
            totalWebsites={Math.min(websites.length, 3)}
          />
        ))}
      </AnimatePresence>
      {websites.length === 0 && (
        <div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-slate-200 p-8 text-center">
          <div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              No more websites
            </h3>
            <p className="mb-4 text-slate-600">
              You&apos;ve viewed all our featured projects
            </p>
            <button
              onClick={() => setWebsites(websiteProjects)}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              Reset Projects
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BrowserWindow({ website, index, handleWebsiteAction, totalWebsites }) {
  const zIndex = totalWebsites - index;
  const [offsets, setOffsets] = useState({ xOffset: 0, yOffset: 0 });

  const calculateOffsets = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Adjust the multiplier based on the screen size
    const xMultiplier = width < 600 ? 10 : width < 1024 ? 15 : 30;
    const yMultiplier = height < 600 ? 15 : height < 1024 ? 20 : 30;

    setOffsets({
      xOffset: index * xMultiplier,
      yOffset: index * yMultiplier,
    });
  };

  useEffect(() => {
    calculateOffsets(); // Initial calculation
    window.addEventListener("resize", calculateOffsets);

    return () => {
      window.removeEventListener("resize", calculateOffsets);
    };
  }, [index]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, x: offsets.xOffset }}
      animate={{
        opacity: 1,
        y: offsets.yOffset,
        x: offsets.xOffset,
        scale: 1 - index * 0.02,
        rotateZ: index * -1, // Slight rotation for stacked effect
      }}
      exit={{
        opacity: 0,
        y: -100,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      style={{
        zIndex,
        boxShadow: `0 ${4 + index * 2}px ${
          12 + index * 4
        }px rgba(0, 0, 0, 0.1)`,
      }}
      className="absolute left-0 top-0 h-fit p-1 w-full cursor-grab overflow-hidden rounded-lg bg-slate-800 drop-shadow-[0_4px_12px_black]  active:cursor-grabbing"
      drag={index === 0} // Allow drag only for the top window
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.3}
      onDragEnd={(_, info) => {
        if (index === 0) {
          const threshold = 80;
          if (info.offset.x > threshold) {
            // Swiped right - interested
            handleWebsiteAction(website.id, "interested");
          } else if (info.offset.x < -threshold) {
            // Swiped left - skip
            handleWebsiteAction(website.id, "skip");
          }
        }
      }}
      whileDrag={{
        scale: 1.02,
      }}
    >
      <div className="flex h-fit flex-col overflow-hidden rounded-lg">
        {/* Browser Chrome/Toolbar */}
        <div className="flex h-10 items-center justify-between bg-slate-800 px-3">
          {/* Window Controls */}
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button className="rounded-md p-1 hover:bg-slate-200">
              <ChevronLeft className="h-4 w-4 text-slate-500" />
            </button>
            <button className="rounded-md p-1 hover:bg-slate-200">
              <ChevronRight className="h-4 w-4 text-slate-500" />
            </button>
            <button className="rounded-md p-1 hover:bg-slate-200">
              <RotateCw className="h-4 w-4 text-slate-500" />
            </button>
          </div>

          {/* URL Bar */}
          <div className="mx-2 flex flex-1 items-center rounded-md bg-white px-3 py-1">
            <span className="truncate text-xs text-slate-500">
              https://www.{website.url}
            </span>
          </div>

          {/* Additional Controls */}
          <div className="flex items-center gap-2">
            <button className="rounded-md p-1 hover:bg-slate-200">
              <Star className="h-4 w-4 text-slate-500" />
            </button>
            <button className="rounded-md p-1 hover:bg-slate-200">
              <Minus className="h-4 w-4 text-slate-500" />
            </button>
            <button className="rounded-md p-1 hover:bg-slate-200">
              <Maximize2 className="h-4 w-4 text-slate-500" />
            </button>
            <button className="rounded-md p-1 hover:bg-slate-200">
              <X className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Browser Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Website Screenshot */}
          {/* <div
            className="h-[50vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${website.imageUrl})` }}
          /> */}
          <div className="relative h-[25vh] md:h-[55vh] w-full overflow-hidden">
            <div className="absolute inset-0  z-[100]"></div>
            <Image
              src={website.imageUrl}
              fill
              alt={website.title}
              className="object-cover"
            />
          </div>

          {/* Website Info */}
          {/* <div className="flex flex-1 flex-col p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {website.title}
              </h2>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900"
              >
                <span>Visit</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-2 text-sm text-slate-600">{website.description}</p>

            <div className="mt-4">
              <h3 className="mb-2 text-sm font-medium text-slate-700">
                Built with:
              </h3>
              <div className="flex flex-wrap gap-2">
                {website.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div> */}
        </div>

        {/* Swipe hints - only for top window */}
        {/* {index === 0 && (
          <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-between px-6 text-xs font-medium">
            <div className="rounded-full bg-white/90 px-3 py-1 text-slate-700 shadow-sm">
              Skip
            </div>
            <div className="rounded-full bg-white/90 px-3 py-1 text-slate-700 shadow-sm">
              Save
            </div>
          </div>
        )} */}
      </div>
    </motion.div>
  );
}
