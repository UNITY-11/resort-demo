"use client";

import { TextReveal } from "./TextReveal";

interface SectionLabelProps {
  label: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionLabel({
  label,
  className = "",
  align = "left",
}: SectionLabelProps) {
  return (
    <TextReveal className={className}>
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className="w-8 h-px bg-gold" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone font-body font-medium">
          {label}
        </span>
        <div className="w-8 h-px bg-gold" />
      </div>
    </TextReveal>
  );
}
