"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { OrganicImage } from "../ui/OrganicImage";
import { TornPaper } from "../ui/TornPaper";
import { resortData } from "@/data/resort-data";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = resortData.gallery;

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-24 md:py-40 bg-ivory paper-texture overflow-hidden"
      aria-label="Gallery"
    >
      <TornPaper position="top" color="#FEFDF5" className="relative z-20" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-32">
          <SectionLabel label="Chapter 06 — Gallery" align="center" />
          <TextReveal className="mt-8">
            <h2 className="fluid-heading font-heading text-charcoal">
              A Visual <span className="italic text-forest">Masterpiece</span>
            </h2>
          </TextReveal>
        </div>

        {/* ─── Editorial Scrapbook Collage ─── */}
        {/* Not a standard grid, but a carefully staggered flex layout to feel organic */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-8 md:gap-x-12 md:gap-y-24">
          {images.map((img, i) => {
            // Elegant sizes without rotation
            const rotate = 0;
            const maskIdx = i % 12; // Cycle through all 12 masks
            
            // Varied sizing classes
            const sizeClass = 
              i % 4 === 0 ? "w-full md:w-[45%] lg:w-[40%] xl:w-[35%]" : // Large
              i % 3 === 0 ? "w-full md:w-[35%] lg:w-[30%] xl:w-[25%]" : // Medium
              "w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"; // Standard
              
            // Margin offsets to break grid
            const marginClass = 
              i % 4 === 1 ? "md:mt-24 lg:mt-32" : 
              i % 3 === 2 ? "md:-mt-12 lg:-mt-24" : "";

            return (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1 * (i % 3),
                  type: "spring",
                  stiffness: 70,
                  damping: 15
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group ${sizeClass} ${marginClass} flex flex-col`}
                style={{ zIndex: hoveredIndex === i ? 40 : 10 }}
              >
                {/* Main Image */}
                <OrganicImage
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={i % 2 === 0 ? 900 : 600}
                  maskIndex={maskIdx}
                  containerClassName="w-full aspect-[4/5] md:aspect-auto md:min-h-[450px] cursor-pointer"
                  imageClassName={`transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${hoveredIndex === i ? 'scale-105' : 'scale-100'}`}
                  hasShadow={true}
                  hasTape={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <motion.div 
                  className={`absolute ${
                    i % 2 === 0 ? "-bottom-6 -right-4 text-right" : "-bottom-8 left-4 text-left"
                  } z-20 pointer-events-none`}
                  animate={{ opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3 }}
                >
                  <p className="font-heading italic text-xl md:text-2xl text-charcoal/90 bg-cream/90 backdrop-blur-sm px-6 py-3 border border-gold/20 shadow-lg">
                    {img.caption}
                  </p>
                  <div className={`mt-2 flex items-center gap-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className="w-4 h-px bg-gold" />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-stone font-body font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
