"use client";

import { motion } from "framer-motion";

interface WaxSealProps {
  initials?: string;
  color?: "terracotta" | "forest" | "gold" | "charcoal";
  size?: number;
  className?: string;
  rotation?: number;
}

export function WaxSeal({
  initials = "É",
  color = "terracotta",
  size = 64,
  className = "",
  rotation = 0,
}: WaxSealProps) {
  const colors = {
    terracotta: {
      fill: "#C67B5C",
      stroke: "#9e5c3e",
      text: "#ebd2c8",
    },
    forest: {
      fill: "#1A3A2A",
      stroke: "#11261c",
      text: "#c5d1cc",
    },
    gold: {
      fill: "#C9A96E",
      stroke: "#a88950",
      text: "#f5eee4",
    },
    charcoal: {
      fill: "#2C2C2C",
      stroke: "#1f1f1f",
      text: "#cccccc",
    },
  };

  const theme = colors[color];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: rotation - 20 }}
      whileInView={{ scale: 1, opacity: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Irregular outer blob for wax look */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 drop-shadow-md"
      >
        <path
          d="M50 2 C75 0 95 15 98 40 C100 65 85 95 55 98 C25 100 5 80 2 50 C0 20 25 5 50 2Z"
          fill={theme.fill}
        />
        {/* Inner impressed ring */}
        <path
          d="M50 15 C68 15 82 28 85 45 C88 62 75 82 50 85 C25 88 12 72 15 50 C18 28 32 15 50 15Z"
          fill="none"
          stroke={theme.stroke}
          strokeWidth="3"
        />
      </svg>
      <span
        className="relative z-10 font-heading italic text-xl select-none"
        style={{ color: theme.text, fontSize: size * 0.4 }}
      >
        {initials}
      </span>
    </motion.div>
  );
}
