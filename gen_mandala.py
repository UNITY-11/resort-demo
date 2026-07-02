import math

def generate_mandala():
    # We will generate a beautiful React component with a complex SVG mandala.
    svg_content = []
    svg_content.append('import React from "react";\n')
    svg_content.append('export function KeralaMandala({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {\n')
    svg_content.append('  return (\n')
    svg_content.append('    <svg viewBox="-100 -100 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ opacity }}>\n')
    
    # Generate 16 petals
    petals = 16
    for i in range(petals):
        angle = (i * 360 / petals) * (math.pi / 180)
        # Petal 1
        x1 = 0
        y1 = 0
        x2 = math.cos(angle - 0.2) * 40
        y2 = math.sin(angle - 0.2) * 40
        x3 = math.cos(angle) * 80
        y3 = math.sin(angle) * 80
        x4 = math.cos(angle + 0.2) * 40
        y4 = math.sin(angle + 0.2) * 40
        svg_content.append(f'      <path d="M 0 0 C {x2:.1f} {y2:.1f}, {x4:.1f} {y4:.1f}, {x3:.1f} {y3:.1f}" stroke="currentColor" strokeWidth="0.5" fill="none" />\n')
        svg_content.append(f'      <path d="M 0 0 C {x4:.1f} {y4:.1f}, {x2:.1f} {y2:.1f}, {x3:.1f} {y3:.1f}" stroke="currentColor" strokeWidth="0.5" fill="none" />\n')

    # Generate 8 large outer petals
    outer_petals = 8
    for i in range(outer_petals):
        angle = (i * 360 / outer_petals) * (math.pi / 180)
        x2 = math.cos(angle - 0.3) * 60
        y2 = math.sin(angle - 0.3) * 60
        x3 = math.cos(angle) * 100
        y3 = math.sin(angle) * 100
        x4 = math.cos(angle + 0.3) * 60
        y4 = math.sin(angle + 0.3) * 60
        x1 = math.cos(angle) * 20
        y1 = math.sin(angle) * 20
        svg_content.append(f'      <path d="M {x1:.1f} {y1:.1f} Q {x2:.1f} {y2:.1f} {x3:.1f} {y3:.1f} Q {x4:.1f} {y4:.1f} {x1:.1f} {y1:.1f}" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />\n')

    # Concentric circles
    svg_content.append('      <circle cx="0" cy="0" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />\n')
    svg_content.append('      <circle cx="0" cy="0" r="45" stroke="currentColor" strokeWidth="0.5" />\n')
    svg_content.append('      <circle cx="0" cy="0" r="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 6" />\n')
    
    svg_content.append('    </svg>\n')
    svg_content.append('  );\n')
    svg_content.append('}\n')
    
    # Save to a new file so we can view/append it
    with open("mandala.txt", "w") as f:
        f.writelines(svg_content)

generate_mandala()
