"use client";

import React from "react";

interface MaskingTapeProps {
  rotation?: number;
  width?: string;
  className?: string;
  opacity?: number;
  position?: "top" | "bottom" | "top-left" | "top-right";
}

export function MaskingTape({
  rotation = -2,
  width = "w-20",
  className = "",
  opacity = 0.85,
  position = "top",
}: MaskingTapeProps) {
  const positionClasses = {
    "top": "absolute top-[-10px] left-1/2 -translate-x-1/2",
    "bottom": "absolute bottom-[-10px] left-1/2 -translate-x-1/2",
    "top-left": "absolute top-[-10px] left-[-20px]",
    "top-right": "absolute top-[-10px] right-[-20px]",
  };

  return (
    <div
      className={`h-7 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)] z-20 ${positionClasses[position]} ${width} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity,
        background:
          "linear-gradient(135deg, rgba(235, 230, 225, 0.9) 0%, rgba(225, 220, 210, 0.7) 100%)",
        // Torn edges on the sides of the tape
        clipPath: "polygon(0% 10%, 2% 0%, 98% 5%, 100% 15%, 99% 85%, 97% 100%, 3% 95%, 0% 85%)",
      }}
    >
      {/* Subtle texture for the tape */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
