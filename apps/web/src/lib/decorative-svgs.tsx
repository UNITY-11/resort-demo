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

export function KathakaliHalo({ className = "", opacity = 0.15 }: { className?: string; opacity?: number }) {
  // The circular Prabhavalayam (halo) behind the Kathakali head — rotates on scroll
  const flowers = [];
  const flowerCount = 16;
  for (let i = 0; i < flowerCount; i++) {
    const angle = (i * 360) / flowerCount;
    const rad = (angle * Math.PI) / 180;
    const cx = 200 + 155 * Math.cos(rad);
    const cy = 200 + 155 * Math.sin(rad);
    flowers.push(
      <g key={`flower-${i}`} transform={`translate(${cx},${cy})`}>
        {/* 6-petal flower */}
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} rx="4" ry="9" transform={`rotate(${r})`} stroke="currentColor" strokeWidth="1" fill="none" />
        ))}
        <circle r="3" fill="currentColor" />
      </g>
    );
  }

  // Inner ring of smaller flowers
  const innerFlowers = [];
  const innerCount = 12;
  for (let i = 0; i < innerCount; i++) {
    const angle = (i * 360) / innerCount + 15;
    const rad = (angle * Math.PI) / 180;
    const cx = 200 + 120 * Math.cos(rad);
    const cy = 200 + 120 * Math.sin(rad);
    innerFlowers.push(
      <g key={`iflower-${i}`} transform={`translate(${cx},${cy})`}>
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} rx="3" ry="6" transform={`rotate(${r})`} stroke="currentColor" strokeWidth="0.8" fill="none" />
        ))}
        <circle r="2" fill="currentColor" />
      </g>
    );
  }

  // Dots ring
  const dots = [];
  const dotCount = 36;
  for (let i = 0; i < dotCount; i++) {
    const angle = (i * 360) / dotCount;
    const rad = (angle * Math.PI) / 180;
    const cx = 200 + 180 * Math.cos(rad);
    const cy = 200 + 180 * Math.sin(rad);
    dots.push(<circle key={`dot-${i}`} cx={cx} cy={cy} r="2.5" fill="currentColor" />);
  }

  // Scalloped arch pattern ring
  const scallops = [];
  const scallopCount = 24;
  for (let i = 0; i < scallopCount; i++) {
    const a1 = (i * 360) / scallopCount;
    const a2 = ((i + 1) * 360) / scallopCount;
    const mid = (a1 + a2) / 2;
    const r1 = (a1 * Math.PI) / 180;
    const r2 = (a2 * Math.PI) / 180;
    const rm = (mid * Math.PI) / 180;
    const R = 138;
    const Ri = 130;
    scallops.push(
      <path
        key={`scallop-${i}`}
        d={`M ${200 + R * Math.cos(r1)},${200 + R * Math.sin(r1)} Q ${200 + Ri * Math.cos(rm)},${200 + Ri * Math.sin(rm)} ${200 + R * Math.cos(r2)},${200 + R * Math.sin(r2)}`}
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    );
  }

  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      {/* Outermost border ring */}
      <circle cx="200" cy="200" r="198" stroke="currentColor" strokeWidth="2" />
      <circle cx="200" cy="200" r="194" stroke="currentColor" strokeWidth="1" />
      
      {/* Dot ring */}
      {dots}
      
      {/* Outer solid ring */}
      <circle cx="200" cy="200" r="175" stroke="currentColor" strokeWidth="2" />
      
      {/* Thick scalloped/tab pattern ring */}
      <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" strokeDasharray="12 4" />
      
      {/* Flower rings */}
      {flowers}
      {innerFlowers}
      
      {/* Scalloped arches */}
      {scallops}
      
      {/* Inner concentric circles */}
      <circle cx="200" cy="200" r="108" stroke="currentColor" strokeWidth="2" />
      <circle cx="200" cy="200" r="104" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="200" cy="200" r="98" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function KathakaliHead({ className = "", opacity = 0.15 }: { className?: string; opacity?: number }) {
  // The crown (Mudi), face, ear ornaments, and neck — stays static
  return (
    <svg
      width="400"
      height="580"
      viewBox="0 0 400 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* ═══ WHITE BACKGROUND MASK — at FULL opacity to block halo ═══ */}
      <g stroke="none" fill="white">
        {/* Crown finial area */}
        <rect x="175" y="0" width="50" height="85" />
        {/* Crown dome */}
        <ellipse cx="200" cy="130" rx="60" ry="75" />
        {/* Crown base bands */}
        <rect x="105" y="155" width="190" height="90" />
        {/* Forehead band */}
        <rect x="98" y="233" width="204" height="28" />
        {/* Face area — large ellipse */}
        <ellipse cx="200" cy="345" rx="110" ry="105" />
        {/* Left ear ornament */}
        <circle cx="72" cy="310" r="42" />
        {/* Right ear ornament */}
        <circle cx="328" cy="310" r="42" />
        {/* Neck / collar */}
        <ellipse cx="200" cy="475" rx="105" ry="55" />
        <rect x="95" y="435" width="210" height="50" />
      </g>

      {/* ═══ ARTWORK — with reduced opacity ═══ */}
      <g stroke="currentColor" fill="none" opacity={opacity}>

        {/* ═══ CROWN TOP FINIAL ═══ */}
        <rect x="192" y="8" width="16" height="20" rx="3" strokeWidth="1.5" />
        <path d="M 188 28 L 212 28 L 215 38 L 185 38 Z" strokeWidth="1.5" />
        <line x1="188" y1="33" x2="212" y2="33" strokeWidth="1" />
        
        {/* Finial knob */}
        <path d="M 185 38 C 175 50, 175 70, 200 80 C 225 70, 225 50, 215 38" strokeWidth="1.5" />
        <path d="M 187 45 C 180 55, 180 68, 200 75 C 220 68, 220 55, 213 45" strokeWidth="0.8" strokeDasharray="2 3" />
        <line x1="200" y1="40" x2="200" y2="75" strokeWidth="0.8" />
        
        {/* ═══ CROWN (MUDI) — UPPER DOME ═══ */}
        <path d="M 155 160 C 155 85, 245 85, 245 160" strokeWidth="2" />
        <path d="M 160 155 C 160 95, 240 95, 240 155" strokeWidth="1.5" />
        
        {/* Dome horizontal bands */}
        <line x1="163" y1="115" x2="237" y2="115" strokeWidth="1" />
        <line x1="160" y1="125" x2="240" y2="125" strokeWidth="1" />
        <line x1="158" y1="135" x2="242" y2="135" strokeWidth="1" />
        <line x1="156" y1="145" x2="244" y2="145" strokeWidth="1" />
        
        {/* Vertical lines on dome */}
        <line x1="185" y1="95" x2="180" y2="155" strokeWidth="0.6" />
        <line x1="200" y1="88" x2="200" y2="155" strokeWidth="0.6" />
        <line x1="215" y1="95" x2="220" y2="155" strokeWidth="0.6" />
        
        {/* Crown neck connecting to dome */}
        <path d="M 185 80 L 155 160" strokeWidth="1.5" />
        <path d="M 215 80 L 245 160" strokeWidth="1.5" />
        
        {/* ═══ CROWN BASE — DECORATED BANDS ═══ */}
        <rect x="135" y="160" width="130" height="16" rx="2" strokeWidth="1.5" />
        {/* Dots inside top band */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <circle key={`tb-${i}`} cx={145 + i * 12} cy={168} r="3" fill="currentColor" />
        ))}
        
        <rect x="130" y="178" width="140" height="14" rx="2" strokeWidth="1.5" />
        {/* Small circles pattern */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <circle key={`mb-${i}`} cx={138 + i * 10.5} cy={185} r="2.5" strokeWidth="0.8" />
        ))}
        
        <rect x="125" y="194" width="150" height="12" rx="2" strokeWidth="1.5" />
        <line x1="128" y1="200" x2="272" y2="200" strokeWidth="0.6" strokeDasharray="4 3" />
        
        <rect x="120" y="208" width="160" height="16" rx="2" strokeWidth="1.5" />
        {/* Elongated tabs */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <rect key={`bb-${i}`} x={125 + i * 11} y={211} width="7" height="10" rx="2" strokeWidth="0.8" />
        ))}
        
        {/* Bottom-most crown band */}
        <rect x="115" y="226" width="170" height="10" rx="2" strokeWidth="1.5" />
        {/* Tiny dots */}
        {Array.from({ length: 28 }).map((_, i) => (
          <circle key={`bd-${i}`} cx={120 + i * 6} cy={231} r="1.2" fill="currentColor" />
        ))}
        
        {/* ═══ FOREHEAD BAND (NETTIPADD) ═══ */}
        <path d="M 108 238 L 292 238 L 295 255 L 105 255 Z" strokeWidth="1.5" />
        <line x1="110" y1="246" x2="290" y2="246" strokeWidth="0.8" />
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={`fbd-${i}`} cx={115 + i * 9.2} cy={250} r="2" fill="currentColor" />
        ))}
        
        {/* ═══ FACE AREA ═══ */}
        {/* Forehead tilak / gopi */}
        <path d="M 190 258 L 210 258 L 200 278 Z" fill="currentColor" />
        <ellipse cx="200" cy="265" rx="3" ry="5" stroke="currentColor" strokeWidth="0.8" fill="none" />
        
        {/* Eyebrows — thick dramatic arches */}
        <path d="M 140 292 C 155 272, 175 270, 195 288" strokeWidth="5" strokeLinecap="round" />
        <path d="M 205 288 C 225 270, 245 272, 260 292" strokeWidth="5" strokeLinecap="round" />
        
        {/* Eyes — almond-shaped Kathakali eyes */}
        <path d="M 145 305 Q 168 290, 192 305 Q 168 312, 145 305" strokeWidth="2" />
        <circle cx="168" cy="303" r="4" fill="currentColor" />
        <circle cx="168" cy="303" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        
        <path d="M 208 305 Q 232 290, 255 305 Q 232 312, 208 305" strokeWidth="2" />
        <circle cx="232" cy="303" r="4" fill="currentColor" />
        <circle cx="232" cy="303" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Eye extensions (Kathakali-style outward lines) */}
        <path d="M 140 302 L 125 295" strokeWidth="2" strokeLinecap="round" />
        <path d="M 260 302 L 275 295" strokeWidth="2" strokeLinecap="round" />
        
        {/* Nose */}
        <path d="M 195 308 L 192 345 C 196 352, 204 352, 208 345 L 205 308" strokeWidth="1.5" />
        <path d="M 188 342 C 182 348, 182 355, 190 358" strokeWidth="1.5" />
        <path d="M 212 342 C 218 348, 218 355, 210 358" strokeWidth="1.5" />
        
        {/* Chutti — the thick white jawline frame */}
        <path d="M 105 258 C 85 350, 85 420, 200 440 C 315 420, 315 350, 295 258" strokeWidth="8" />
        <path d="M 110 262 C 92 348, 92 415, 200 433 C 308 415, 308 348, 290 262" strokeWidth="2" />
        
        {/* Mouth — slight smile */}
        <path d="M 165 385 Q 182 395, 200 392 Q 218 395, 235 385" strokeWidth="2" />
        <path d="M 175 390 Q 200 402, 225 390" strokeWidth="1.5" />
        <circle cx="165" cy="385" r="2.5" fill="currentColor" />
        <circle cx="235" cy="385" r="2.5" fill="currentColor" />
        
        {/* Chin mark */}
        <path d="M 190 415 Q 200 425, 210 415" strokeWidth="1.5" />
        
        {/* ═══ EAR ORNAMENTS (KUNDALAS) ═══ */}
        {/* Left earring — large wheel */}
        <circle cx="72" cy="310" r="35" strokeWidth="4" />
        <circle cx="72" cy="310" r="28" strokeWidth="1.5" />
        <circle cx="72" cy="310" r="20" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="72" cy="310" r="12" strokeWidth="1.5" />
        <circle cx="72" cy="310" r="5" fill="currentColor" />
        {/* Spokes */}
        {[0, 45, 90, 135].map((a) => {
          const rad = (a * Math.PI) / 180;
          return (
            <line key={`ls-${a}`} x1={72 + 12 * Math.cos(rad)} y1={310 + 12 * Math.sin(rad)} x2={72 + 28 * Math.cos(rad)} y2={310 + 28 * Math.sin(rad)} strokeWidth="0.8" />
          );
        })}
        
        {/* Right earring — large wheel */}
        <circle cx="328" cy="310" r="35" strokeWidth="4" />
        <circle cx="328" cy="310" r="28" strokeWidth="1.5" />
        <circle cx="328" cy="310" r="20" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="328" cy="310" r="12" strokeWidth="1.5" />
        <circle cx="328" cy="310" r="5" fill="currentColor" />
        {[0, 45, 90, 135].map((a) => {
          const rad = (a * Math.PI) / 180;
          return (
            <line key={`rs-${a}`} x1={328 + 12 * Math.cos(rad)} y1={310 + 12 * Math.sin(rad)} x2={328 + 28 * Math.cos(rad)} y2={310 + 28 * Math.sin(rad)} strokeWidth="0.8" />
          );
        })}
        
        {/* ═══ NECK / COLLAR ═══ */}
        <path d="M 130 440 C 130 480, 270 480, 270 440" strokeWidth="6" />
        <path d="M 125 450 C 125 495, 275 495, 275 450" strokeWidth="3" />
        <path d="M 120 460 C 120 510, 280 510, 280 460" strokeWidth="2" />
        
        {/* Shoulder drape lines */}
        <path d="M 100 470 C 80 530, 120 560, 160 540" strokeWidth="2" />
        <path d="M 300 470 C 320 530, 280 560, 240 540" strokeWidth="2" />
        <path d="M 160 540 Q 200 560, 240 540" strokeWidth="2" />
      </g>
    </svg>
  );
}
