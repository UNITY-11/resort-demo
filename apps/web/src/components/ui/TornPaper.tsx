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

  // A hand-crafted, highly irregular bezier curve for a natural macro-tear
  const pathData = "M0,45 C35,30 65,65 100,50 C140,35 180,65 220,45 C260,25 300,55 350,45 C400,35 440,60 480,45 C520,30 560,65 600,50 C640,35 680,65 730,45 C780,25 820,55 870,45 C920,35 960,60 1000,45 C1040,30 1080,65 1130,50 C1170,35 1200,50 1200,50 L1200,120 L0,120 Z";

  // Inverted path for the top position
  const pathDataTop = "M0,75 C35,90 65,55 100,70 C140,85 180,55 220,75 C260,95 300,65 350,75 C400,85 440,60 480,75 C520,90 560,55 600,70 C640,85 680,55 730,75 C780,95 820,65 870,75 C920,85 960,60 1000,75 C1040,90 1080,55 1130,70 C1170,85 1200,70 1200,70 L1200,0 L0,0 Z";

  return (
    <div
      className={`w-full overflow-hidden leading-none ${position === "top" ? "-mb-[1px]" : "-mt-[1px]"
        } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-16 lg:h-20 ${position === "bottom"
          ? "drop-shadow-[0_-5px_10px_rgba(0,0,0,0.15)]"
          : "drop-shadow-[0_5px_10px_rgba(0,0,0,0.15)]"
          }`}
      >
        <defs>
          {/* Gentle displacement map to add fibrous roughness to the macro-curve */}
          <filter id="fibrous-edge" x="-10%" y="-30%" width="120%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {position === "bottom" ? (
          <g>
            {/* position=bottom means paper is filling the bottom half, tearing UPWARDS. */}
            {/* White fibrous torn edge peeking out from the TOP of the colored paper */}
            <path
              d={pathData}
              fill="#FFFFFF"
              filter="url(#fibrous-edge)"
              transform="translate(0, -4)"
            />
            {/* Colored top paper layer casting a shadow UPWARDS onto the white edge */}
            <path
              d={pathData}
              fill={color}
              style={{ filter: "url(#fibrous-edge) drop-shadow(0px -3px 3px rgba(0,0,0,0.15))" }}
              transform="translate(0, 20)"
            />
          </g>
        ) : (
          <g>
            {/* position=top means paper is filling the top half, tearing DOWNWARDS. */}
            {/* White fibrous torn edge peeking out from the BOTTOM of the colored paper */}
            <path
              d={pathDataTop}
              fill="#FFFFFF"
              filter="url(#fibrous-edge)"
              transform="translate(0, 6)"
            />
            {/* Colored top paper layer casting a shadow DOWNWARDS onto the white edge */}
            <path
              d={pathDataTop}
              fill={color}
              style={{ filter: "url(#fibrous-edge) drop-shadow(0px 3px 3px rgba(0,0,0,0.15))" }}
              transform="translate(0, -24)"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
