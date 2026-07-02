"use client";

import { motion } from "framer-motion";

interface StampMarkProps {
  location?: string;
  date?: string;
  className?: string;
  rotation?: number;
  opacity?: number;
  color?: string;
}

export function StampMark({
  location = "ÉLARA RESORT",
  date = "EST 2025",
  className = "",
  rotation = -15,
  opacity = 0.4,
  color = "#2C2C2C", // charcoal by default
}: StampMarkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5, rotate: rotation + 10 }}
      whileInView={{ opacity, scale: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{
        color,
        // Using a slight blur and mix-blend-mode to make it look stamped on paper
        mixBlendMode: "multiply",
        filter: "blur(0.5px)",
      }}
    >
      <div className="border-4 rounded-full p-2 w-32 h-32 flex flex-col items-center justify-center border-current">
        <div className="border-2 rounded-full w-full h-full flex flex-col items-center justify-center border-current relative">
          {/* Curved text approximation (SVG would be better for true curved text, but this works for a rough stamp) */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '40s' }}>
            <path id="curve" d="M 15 50 A 35 35 0 1 1 85 50 A 35 35 0 1 1 15 50" fill="transparent" />
            <text className="text-[11px] tracking-[0.2em] font-body font-bold" fill="currentColor">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                {location} • {date} •
              </textPath>
            </text>
          </svg>
          <div className="relative flex flex-col items-center z-10 bg-ivory/50 px-2">
            <span className="font-heading italic text-2xl leading-none">É</span>
          </div>
        </div>
      </div>
      
      {/* Some distressed lines to make it look like a worn stamp */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjk5IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] opacity-50 mix-blend-screen" />
    </motion.div>
  );
}
