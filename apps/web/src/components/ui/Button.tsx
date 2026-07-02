"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.15;
    const y = (e.clientY - top - height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-body tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

  const variants: Record<string, string> = {
    primary:
      "bg-forest text-ivory hover:bg-charcoal shadow-[0_4px_14px_rgba(26,58,42,0.2)] hover:shadow-[0_6px_20px_rgba(44,44,44,0.3)]",
    secondary:
      "bg-transparent text-charcoal border border-charcoal/20 hover:border-gold hover:text-gold hover:bg-gold/5",
    ghost:
      "bg-transparent text-charcoal border border-transparent hover:text-gold hover:bg-gold/5",
  };

  const sizes: Record<string, string> = {
    sm: "px-6 py-3 text-[9px]",
    md: "px-8 py-4 text-[10px]",
    lg: "px-10 py-5 text-[11px]",
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        // Slight paper cut effect
        clipPath: "polygon(1% 0%, 99% 2%, 100% 98%, 0% 100%)",
      }}
    >
      {/* Paper press shadow simulation inside the button */}
      <span className="absolute inset-0 shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)] pointer-events-none" />
      
      {/* Gold shimmer effect on hover */}
      <span 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" 
        style={{
          transform: isHovered ? "translateX(100%)" : "translateX(-100%)"
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="group inline-block focus:outline-none">
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="group inline-block focus:outline-none"
    >
      {inner}
    </button>
  );
}
