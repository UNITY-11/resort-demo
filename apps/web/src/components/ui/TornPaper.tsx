"use client";

interface TornPaperProps {
  position?: "top" | "bottom";
  color?: string;
  className?: string;
  variant?: "smooth" | "rough" | "jagged";
}

export function TornPaper({
  position = "bottom",
  color = "#FEFDF5",
  className = "",
  variant = "rough",
}: TornPaperProps) {
  // SVG paths for torn paper effects
  
  const pathSmoothBottom = "M0,0 L0,10 Q250,50 500,20 Q750,-10 1000,30 L1000,0 Z";
  const pathSmoothTop = "M0,50 L0,30 Q250,-10 500,20 Q750,50 1000,10 L1000,50 Z";

  const pathRoughBottom = "M0,0 L0,20 L30,40 L60,10 L90,50 L120,20 L150,45 L180,15 L210,35 L240,5 L270,30 L300,10 L330,40 L360,20 L390,45 L420,15 L450,50 L480,20 L510,40 L540,10 L570,35 L600,15 L630,45 L660,20 L690,50 L720,25 L750,45 L780,15 L810,40 L840,20 L870,45 L900,15 L930,50 L960,20 L1000,40 L1000,0 Z";
  const pathRoughTop = "M0,50 L0,30 L30,10 L60,40 L90,0 L120,30 L150,5 L180,35 L210,15 L240,45 L270,20 L300,40 L330,10 L360,30 L390,5 L420,35 L450,0 L480,30 L510,10 L540,40 L570,15 L600,35 L630,5 L660,30 L690,0 L720,25 L750,5 L780,35 L810,10 L840,30 L870,5 L900,35 L930,0 L960,30 L1000,10 L1000,50 Z";
  
  const pathJaggedBottom = "M0,0 L0,20 L25,45 L50,15 L75,50 L100,20 L125,40 L150,5 L175,35 L200,10 L225,45 L250,20 L275,50 L300,15 L325,40 L350,5 L375,45 L400,20 L425,50 L450,10 L475,40 L500,15 L525,45 L550,20 L575,50 L600,10 L625,40 L650,5 L675,45 L700,20 L725,50 L750,15 L775,40 L800,5 L825,45 L850,20 L875,50 L900,10 L925,40 L950,15 L975,45 L1000,20 L1000,0 Z";
  const pathJaggedTop = "M0,50 L0,30 L25,5 L50,35 L75,0 L100,30 L125,10 L150,45 L175,15 L200,40 L225,5 L250,30 L275,0 L300,35 L325,10 L350,45 L375,5 L400,30 L425,0 L450,40 L475,10 L500,35 L525,5 L550,30 L575,0 L600,40 L625,10 L650,45 L675,5 L700,30 L725,0 L750,35 L775,10 L800,45 L825,5 L850,30 L875,0 L900,40 L925,10 L950,35 L975,5 L1000,30 L1000,50 Z";


  const getPath = () => {
    if (position === "bottom") {
      if (variant === "smooth") return pathSmoothBottom;
      if (variant === "rough") return pathRoughBottom;
      return pathJaggedBottom;
    } else {
      if (variant === "smooth") return pathSmoothTop;
      if (variant === "rough") return pathRoughTop;
      return pathJaggedTop;
    }
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${
        position === "top" ? "-mb-[1px]" : "-mt-[1px]"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 50"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12" // Taller for more prominent jagged effect
        fill={color}
      >
        <path d={getPath()} />
      </svg>
    </div>
  );
}
