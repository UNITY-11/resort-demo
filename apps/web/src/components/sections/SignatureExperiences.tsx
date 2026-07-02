"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import Image from "next/image";
import { resortData } from "@/data/resort-data";
import { TornPaper } from "../ui/TornPaper";

export function SignatureExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const experiences = resortData.experiences;

  const collageItems = [
    { gridClass: "col-span-12 md:col-span-6 lg:col-span-4", delay: 0 },
    { gridClass: "col-span-12 md:col-span-6 lg:col-span-4 md:mt-12 lg:mt-24", delay: 0.1 },
    { gridClass: "col-span-12 md:col-span-6 lg:col-span-4", delay: 0.2 },
  ];

  return (
    <section
      id="experiences"
      ref={ref}
      className="relative py-24 overflow-hidden"
      aria-label="Signature Experiences"
    >
      {/* Background SVG Track & Nature Elements (Visible on large screens) - Placed at section level to cover padding */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-hidden opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* === Sky Elements (Clouds and Birds) === */}
          <g fill="var(--color-charcoal)" opacity="0.05">
            {/* Cloud 1 - Moved down to prevent cutoff */}
            <path d="M 150,280 a 20,20 0 0,1 20,-20 a 30,30 0 0,1 50,0 a 20,20 0 0,1 20,20 z" />
            {/* Cloud 2 */}
            <path d="M 750,250 a 25,25 0 0,1 25,-25 a 40,40 0 0,1 65,0 a 25,25 0 0,1 25,25 z" />
            {/* Cloud 3 */}
            <path d="M 400,320 a 15,15 0 0,1 15,-15 a 25,25 0 0,1 40,0 a 15,15 0 0,1 15,15 z" />

            {/* Birds */}
            <g transform="translate(600, 300) scale(1.5)">
              <path d="M 0,10 Q 10,-5 20,10 Q 10,0 0,10" fill="currentColor" />
              <path d="M 25,0 Q 35,-15 45,0 Q 35,-10 25,0" fill="currentColor" />
              <path d="M -10,15 Q 0,5 10,15 Q 0,10 -10,15" fill="currentColor" />
            </g>
          </g>

          {/* === Majestic Mountains Background === */}
          <g fill="var(--color-charcoal)" opacity="0.05">
            {/* Sun / Moon */}
            <circle cx="800" cy="400" r="150" fill="var(--color-gold)" opacity="0.2" />

            {/* Distant Mountains */}
            <path d="M -100,1000 L 200,550 L 500,1000 Z" />
            <path d="M 300,1000 L 650,400 L 1100,1000 Z" />
            <path d="M 750,1000 L 950,650 L 1250,1000 Z" />

            {/* Foreground Mountains */}
            <path d="M -150,1000 L 100,700 L 350,1000 Z" opacity="0.8" />
            <path d="M 150,1000 L 450,600 L 800,1000 Z" opacity="0.8" />
            <path d="M 550,1000 L 850,500 L 1150,1000 Z" opacity="0.8" />
          </g>

          {/* === The Journey Track === */}
          <path
            className="drop-shadow-sm text-gold"
            d="M -10,250 C 250,250 250,450 500,450 C 750,450 750,250 900,250 C 980,250 980,650 900,650 C 750,650 750,850 500,850 C 250,850 250,650 -10,650"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            vectorEffect="non-scaling-stroke"
          />

          {/* Decorative Track Waypoints */}
          <g fill="var(--color-gold)" stroke="none" opacity="0.8">
            {/* Point 1 (Near Card 1) */}
            <circle cx="166" cy="280" r="6" />
            {/* Point 2 (Near Card 2) */}
            <circle cx="500" cy="450" r="8" />
            {/* Point 3 (Near Card 3) */}
            <circle cx="833" cy="280" r="6" />
            {/* Turning Point (Right Edge) */}
            <path d="M 940 445 L 945 450 L 940 455 L 935 450 Z" />
            {/* Point 6 (Near Card 6) */}
            <circle cx="833" cy="620" r="6" />
            {/* Point 5 (Near Card 5) */}
            <circle cx="500" cy="850" r="8" />
            {/* Point 4 (Near Card 4) */}
            <circle cx="166" cy="680" r="6" />
          </g>
        </svg>
      </div>
      
      {/* Fade out the SVG mountains at the very bottom into pure ivory to seamlessly match the TornPaper component in the Gallery section below */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-ivory to-transparent z-[1] pointer-events-none hidden lg:block" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <SectionLabel label="Chapter 04 — Activities" className="text-gold" align="center" />
          <TextReveal className="mt-6" splitLetters={true}>
            <h2 className="fluid-heading font-heading text-charcoal max-w-2xl mx-auto text-shadow-sm">
              Immersive
              <br />
              <span className="italic text-gold">Encounters</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2} className="mt-6">
            <p className="text-stone text-sm md:text-base max-w-md mx-auto font-body font-light">
              We curate moments that linger long after you depart. Discover our handcrafted collection of signature experiences.
            </p>
          </TextReveal>
        </div>

        {/* ─── Structured Grid ─── */}
        <div className="relative mt-12 md:mt-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 auto-rows-auto relative z-10">
            {experiences.map((exp: any, i: number) => {
              const config = collageItems[i % collageItems.length];

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className={`group relative ${config.gridClass}`}
                >
                  {/* Outer container to reduce width/height */}
                  <div className="relative group drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.02] w-[85%] md:w-[90%] max-w-[340px] mx-auto">

                    {/* The Image container with identical smooth torn CSS cutting on all four sides */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden z-10 bg-[#e0dcd0] mask-rough-edge">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover transition-all duration-[1.5s] group-hover:scale-110 filter grayscale group-hover:grayscale-0 contrast-[1.1]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      {/* Gradients for vignette and text legibility */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)] z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />

                      {/* Editorial Overlay (Text) */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-heading text-lg text-gold italic drop-shadow-md">No.</span>
                            <span className="font-heading text-xl text-ivory drop-shadow-md">0{i + 1}</span>
                          </div>
                          <h3 className="font-heading text-lg md:text-xl text-ivory mb-2 drop-shadow-md">
                            {exp.title}
                          </h3>
                          <p className="font-body font-light text-xs md:text-sm text-ivory/90 leading-relaxed drop-shadow-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
