"use client";

import { TextReveal } from "./TextReveal";

interface EditorialDividerProps {
  variant?: "line" | "torn" | "botanical" | "dots";
  className?: string;
  color?: string;
}

export function EditorialDivider({
  variant = "line",
  className = "",
  color = "var(--color-gold)",
}: EditorialDividerProps) {
  return (
    <TextReveal>
      <div className={`flex justify-center items-center ${className}`}>
        {variant === "line" && (
          <div className="w-16 h-px" style={{ backgroundColor: color }} />
        )}
        
        {variant === "dots" && (
          <div className="flex gap-3">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
            <div className="w-1 h-1 rounded-full opacity-60" style={{ backgroundColor: color }} />
            <div className="w-1 h-1 rounded-full opacity-30" style={{ backgroundColor: color }} />
          </div>
        )}

        {variant === "torn" && (
          <svg width="60" height="4" viewBox="0 0 60 4" fill="none">
            <path d="M0 2 Q 10 0 20 2 T 40 2 T 60 2" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        )}

        {variant === "botanical" && (
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path d="M0 6 L 15 6" stroke={color} strokeWidth="0.5" />
            <path d="M25 6 L 40 6" stroke={color} strokeWidth="0.5" />
            <path d="M20 2 C 18 2 17 6 20 6 C 23 6 22 2 20 2 Z" fill={color} />
            <path d="M20 10 C 18 10 17 6 20 6 C 23 6 22 10 20 10 Z" fill={color} fillOpacity="0.5" />
          </svg>
        )}
      </div>
    </TextReveal>
  );
}
