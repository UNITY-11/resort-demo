import math
import random

def generate_tear_component():
    width = 1200
    segments = 400
    
    random.seed(42) # fixed seed for consistency
    
    # Generate base noise values
    noise_vals = []
    for i in range(segments + 1):
        x = (i / segments) * width
        
        val = 0
        amp = 1
        freq = 1
        for _ in range(5):
            val += math.sin(x * freq * 0.005) * amp * 10
            val += (random.random() * 2 - 1) * amp * 5
            amp *= 0.4
            freq *= 2.2
        noise_vals.append((x, val))

    # White path (underneath, more jagged)
    white_points = ["M 0,50"]
    for x, val in noise_vals:
        y = 50 + val
        white_points.append(f"L {x:.1f},{y:.1f}")
    white_path = " ".join(white_points) + " L 1200,200 L 0,200 Z"

    # Color path (top layer, slightly shifted down)
    color_points = ["M 0,55"]
    for x, val in noise_vals:
        # Shift down by 6px, and smooth it slightly by reducing noise amplitude 
        # so it doesn't cover the white peaks perfectly
        y = 58 + val * 0.95
        color_points.append(f"L {x:.1f},{y:.1f}")
    color_path = " ".join(color_points) + " L 1200,200 L 0,200 Z"
    
    # Inverted versions for position="top"
    white_points_top = ["M 0,50"]
    for x, val in noise_vals:
        y = 50 - val
        white_points_top.append(f"L {x:.1f},{y:.1f}")
    white_path_top = " ".join(white_points_top) + " L 1200,-100 L 0,-100 Z"
    
    color_points_top = ["M 0,45"]
    for x, val in noise_vals:
        y = 42 - val * 0.95
        color_points_top.append(f"L {x:.1f},{y:.1f}")
    color_path_top = " ".join(color_points_top) + " L 1200,-100 L 0,-100 Z"

    component = f"""\"use client\";

interface TornPaperProps {{
  position?: "top" | "bottom";
  color?: string;
  className?: string;
  variant?: "smooth" | "rough" | "jagged";
}}

export function TornPaper({{
  position = "bottom",
  color = "#FEFDF5",
  className = "",
  variant = "rough",
}}: TornPaperProps) {{
  return (
    <div
      className={{`w-full overflow-hidden leading-none ${{
        position === "top" ? "-mb-[1px]" : "-mt-[1px]"
      }} ${{className}}`}}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 lg:h-32 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
      >
        <defs>
          <filter id="paper-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" in="noise" result="coloredNoise" />
            <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply" />
          </filter>
        </defs>

        {{position === "bottom" ? (
          <g>
            <path 
              d="{white_path}" 
              fill="#FFFFFF"
            />
            <path 
              d="{color_path}" 
              fill={{color}}
              filter="url(#paper-texture)"
            />
          </g>
        ) : (
          <g>
            <path 
              d="{white_path_top}" 
              fill="#FFFFFF"
            />
            <path 
              d="{color_path_top}" 
              fill={{color}}
              filter="url(#paper-texture)"
            />
          </g>
        )}}
      </svg>
    </div>
  );
}}
"""
    with open("apps/web/src/components/ui/TornPaper.tsx", "w") as f:
        f.write(component)

if __name__ == "__main__":
    generate_tear_component()
    print("Generated realistic TornPaper component.")
