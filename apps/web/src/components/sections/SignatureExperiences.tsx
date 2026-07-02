"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { OrganicImage } from "../ui/OrganicImage";
import { resortData } from "@/data/resort-data";

export function SignatureExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const experiences = resortData.experiences;

  // Collage grid configurations (Organic scrapbook)
  const collageItems = [
    { gridClass: "col-span-12 md:col-span-6 md:row-span-2 mt-0 md:mt-12", mask: 3, tapePos: "top" as const, rot: -2 }, // BLOB
    { gridClass: "col-span-6 md:col-span-6 mt-8", mask: 1, tapePos: "top-right" as const, rot: 3 }, // DECKLED
    { gridClass: "col-span-6 md:col-span-6 mt-4 md:-mt-8", mask: 4, tapePos: "top-left" as const, rot: -4 }, // RIPPED_LEFT
    { gridClass: "col-span-12 md:col-span-12 mt-12", mask: 10, tapePos: "bottom" as const, rot: 1 }, // LEAF
    { gridClass: "col-span-6 md:col-span-6", mask: 8, tapePos: "top" as const, rot: -1 }, // ROUGH_DIAMOND
    { gridClass: "col-span-6 md:col-span-6 mt-16", mask: 2, tapePos: "top-left" as const, rot: 4 }, // HAND_CUT
  ];

  return (
    <section
      id="experiences"
      ref={ref}
      className="relative py-24 md:py-40 bg-ivory paper-texture overflow-hidden"
      aria-label="Signature Experiences"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionLabel label="Chapter 04 — Activities" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <TextReveal className="mt-6">
            <h2 className="fluid-heading font-heading text-charcoal max-w-2xl">
              Immersive
              <br />
              <span className="italic text-forest">Encounters</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <p className="text-stone text-sm md:text-base max-w-xs font-body font-light">
              We curate moments that linger long after you depart. Discover our handcrafted collection of signature experiences.
            </p>
          </TextReveal>
        </div>

        {/* ─── Structured Grid ─── */}
        <div className="relative">

          <div className="grid grid-cols-12 gap-8 md:gap-12 auto-rows-auto relative z-10">
            {experiences.map((exp, i) => {
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
                  <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
                    <OrganicImage
                      src={exp.image}
                      alt={exp.title}
                      fill
                      maskIndex={config.mask}
                      rotation={config.rot}
                      containerClassName="w-full h-full cursor-crosshair transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:z-30"
                      hasShadow={true}
                      hasTape={true}
                      tapePosition={config.tapePos}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Editorial Overlay on Hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-6 md:p-8">
                      {/* Dark gradient for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" style={{ clipPath: 'inherit' }} />
                      
                      <div className="relative z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-heading text-xl text-gold/80 italic">No.</span>
                          <span className="font-heading text-2xl text-ivory">0{i + 1}</span>
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl text-ivory mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-ivory/80 text-sm font-body font-light leading-relaxed">
                          {exp.description}
                        </p>
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
