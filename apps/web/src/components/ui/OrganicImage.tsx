"use client";

import Image, { ImageProps } from "next/image";
import { ALL_CLIP_PATHS } from "@/lib/clip-paths";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskingTape } from "./MaskingTape";

interface OrganicImageProps extends Omit<ImageProps, "className"> {
  maskIndex?: number;
  containerClassName?: string;
  imageClassName?: string;
  rotation?: number;
  hasShadow?: boolean;
  hasTape?: boolean;
  tapePosition?: "top" | "bottom" | "top-left" | "top-right";
  tapeRotation?: number;
  parallaxSpeed?: number;
}

export function OrganicImage({
  maskIndex = 0,
  containerClassName = "",
  imageClassName = "",
  rotation = 0,
  hasShadow = true,
  hasTape = false, 
  tapePosition = "top",
  tapeRotation = -2,
  parallaxSpeed = 0,
  ...imageProps
}: OrganicImageProps) {
  const ref = useRef(null);
  const clipPath = ALL_CLIP_PATHS[maskIndex % ALL_CLIP_PATHS.length];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { useSpring } = require("framer-motion");
  const rawY = useTransform(scrollYProgress, [0, 1], [-20 * parallaxSpeed, 20 * parallaxSpeed]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      ref={ref}
      style={{ rotate: rotation }}
      className={`relative inline-block ${containerClassName} group`}
    >
      {/* 
        Scrapbook shadow (rough edges)
      */}
      {hasShadow && (
        <div 
          className="absolute inset-2 z-0 opacity-40 mix-blend-multiply filter blur-md transition-all duration-700"
          style={{
            clipPath,
            WebkitClipPath: clipPath,
            backgroundColor: "#2C2C2C",
          }}
        />
      )}

      {/* Image Container with Mask */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          clipPath,
          WebkitClipPath: clipPath,
        }}
      >
        <motion.div style={{ y, width: "100%", height: "100%" }}>
          <Image
            {...imageProps}
            className={`object-cover w-full h-full ${imageClassName}`}
          />
        </motion.div>
        
        {/* Subtle interior glow for depth */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.1), inset 0 0 2px rgba(255,255,255,0.2)",
          }}
        />
      </div>

      {/* Masking Tape */}
      {hasTape && (
        <MaskingTape position={tapePosition} rotation={tapeRotation} />
      )}

    </motion.div>
  );
}
