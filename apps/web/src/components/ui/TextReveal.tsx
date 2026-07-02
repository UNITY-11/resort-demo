"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-8%" });

  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <div style={{ perspective: "1000px" }} className={className}>
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          filter: "blur(8px)",
          rotateX: 45,
          y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
          x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
          letterSpacing: "0.1em",
          scale: 0.95,
        }}
        animate={
          isInView
            ? { 
                opacity: 1, 
                filter: "blur(0px)", 
                x: 0, 
                y: 0, 
                rotateX: 0,
                letterSpacing: "0em",
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "bottom center" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
