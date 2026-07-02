import React from "react";

export function BotanicalSketch1({ className = "", opacity = 0.15 }: { className?: string; opacity?: number }) {
  // Replacing with a Tea Leaf / Cardamom branch sketch typical of Idukki
  return (
    <svg
      width="100"
      height="180"
      viewBox="0 0 100 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      {/* Tea Leaf branch */}
      <path d="M50 10 Q 40 50 50 160" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M50 40 Q 70 30 75 45 Q 60 60 50 55" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 70 Q 20 60 15 80 Q 30 95 50 85" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 100 Q 80 90 85 110 Q 70 125 50 115" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 130 Q 25 120 20 140 Q 35 155 50 145" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

export function BotanicalSketch2({ className = "", opacity = 0.15 }: { className?: string; opacity?: number }) {
  // Abstract minimalist Idukki Arch Dam sketch
  return (
    <svg
      width="250"
      height="150"
      viewBox="0 0 250 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      {/* Arch dam lines */}
      <path d="M 20 20 Q 125 80 230 20" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M 30 40 Q 125 95 220 40" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M 40 60 Q 125 110 210 60" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M 50 80 Q 125 125 200 80" stroke="currentColor" strokeWidth="0.6" fill="none" />
      {/* Water reflection lines */}
      <line x1="90" y1="130" x2="160" y2="130" stroke="currentColor" strokeWidth="0.4" />
      <line x1="110" y1="140" x2="140" y2="140" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  );
}

export function CompassRose({ className = "", opacity = 0.2 }: { className?: string; opacity?: number }) {
  // Minimalist, modern luxury compass
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 3" />
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" strokeWidth="0.3" />
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" strokeWidth="0.3" />
      <path d="M57 25 L60 15 L63 25 Z" fill="currentColor" />
      <text x="60" y="8" textAnchor="middle" fontSize="5" fontFamily="sans-serif" letterSpacing="0.2em" fill="currentColor">N</text>
    </svg>
  );
}

export function BlueprintSketch({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) {
  // Modern bungalow floor plan sketch
  return (
    <svg
      width="200"
      height="150"
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <rect x="20" y="20" width="160" height="110" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <rect x="25" y="25" width="100" height="60" stroke="currentColor" strokeWidth="0.4" fill="none" />
      <rect x="135" y="25" width="40" height="60" stroke="currentColor" strokeWidth="0.4" fill="none" />
      <rect x="25" y="95" width="60" height="30" stroke="currentColor" strokeWidth="0.4" fill="none" />
      <line x1="20" y1="90" x2="180" y2="90" stroke="currentColor" strokeWidth="0.4" />
      <text x="30" y="40" fontSize="5" fontFamily="sans-serif" fill="currentColor" letterSpacing="0.1em">LIVING AREA</text>
      <text x="140" y="40" fontSize="5" fontFamily="sans-serif" fill="currentColor" letterSpacing="0.1em">POOL</text>
    </svg>
  );
}

export function HandwrittenArrow({ className = "", opacity = 0.5, direction = "right" }: { className?: string; opacity?: number; direction?: "right" | "left" | "down" | "up" }) {
  // Sleek, minimal arrow instead of messy handwritten
  const rotation = direction === "right" ? 0 : direction === "down" ? 90 : direction === "left" ? 180 : 270;
  return (
    <svg
      width="60"
      height="20"
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity, transform: `rotate(${rotation}deg)` }}
    >
      <line x1="0" y1="10" x2="55" y2="10" stroke="currentColor" strokeWidth="0.6" />
      <path d="M 45 5 L 55 10 L 45 15" stroke="currentColor" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

export function KeralaMandala({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="-100 -100 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ opacity }}>
      <path d="M 0 0 C 39.2 -7.9, 39.2 7.9, 80.0 0.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 39.2 7.9, 39.2 -7.9, 80.0 0.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 39.3 7.7, 33.2 22.3, 73.9 30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 33.2 22.3, 39.3 7.7, 73.9 30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 33.3 22.1, 22.1 33.3, 56.6 56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 22.1 33.3, 33.3 22.1, 56.6 56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 22.3 33.2, 7.7 39.3, 30.6 73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 7.7 39.3, 22.3 33.2, 30.6 73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 7.9 39.2, -7.9 39.2, 0.0 80.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -7.9 39.2, 7.9 39.2, 0.0 80.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -7.7 39.3, -22.3 33.2, -30.6 73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -22.3 33.2, -7.7 39.3, -30.6 73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -22.1 33.3, -33.3 22.1, -56.6 56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -33.3 22.1, -22.1 33.3, -56.6 56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -33.2 22.3, -39.3 7.7, -73.9 30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -39.3 7.7, -33.2 22.3, -73.9 30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -39.2 7.9, -39.2 -7.9, -80.0 0.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -39.2 -7.9, -39.2 7.9, -80.0 0.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -39.3 -7.7, -33.2 -22.3, -73.9 -30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -33.2 -22.3, -39.3 -7.7, -73.9 -30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -33.3 -22.1, -22.1 -33.3, -56.6 -56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -22.1 -33.3, -33.3 -22.1, -56.6 -56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -22.3 -33.2, -7.7 -39.3, -30.6 -73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -7.7 -39.3, -22.3 -33.2, -30.6 -73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C -7.9 -39.2, 7.9 -39.2, -0.0 -80.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 7.9 -39.2, -7.9 -39.2, -0.0 -80.0" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 7.7 -39.3, 22.3 -33.2, 30.6 -73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 22.3 -33.2, 7.7 -39.3, 30.6 -73.9" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 22.1 -33.3, 33.3 -22.1, 56.6 -56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 33.3 -22.1, 22.1 -33.3, 56.6 -56.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 33.2 -22.3, 39.3 -7.7, 73.9 -30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 0 0 C 39.3 -7.7, 33.2 -22.3, 73.9 -30.6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M 20.0 0.0 Q 57.3 -17.7 100.0 0.0 Q 57.3 17.7 20.0 0.0" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M 14.1 14.1 Q 53.1 28.0 70.7 70.7 Q 28.0 53.1 14.1 14.1" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M 0.0 20.0 Q 17.7 57.3 0.0 100.0 Q -17.7 57.3 0.0 20.0" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M -14.1 14.1 Q -28.0 53.1 -70.7 70.7 Q -53.1 28.0 -14.1 14.1" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M -20.0 0.0 Q -57.3 17.7 -100.0 0.0 Q -57.3 -17.7 -20.0 0.0" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M -14.1 -14.1 Q -53.1 -28.0 -70.7 -70.7 Q -28.0 -53.1 -14.1 -14.1" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M -0.0 -20.0 Q -17.7 -57.3 -0.0 -100.0 Q 17.7 -57.3 -0.0 -20.0" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M 14.1 -14.1 Q 28.0 -53.1 70.7 -70.7 Q 53.1 -28.0 14.1 -14.1" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="0" cy="0" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="0" cy="0" r="45" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 6" />
    </svg>
  );
}
