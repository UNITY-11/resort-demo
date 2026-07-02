"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { GalleryCard } from "../ui/GalleryCard";
import { TornPaper } from "../ui/TornPaper";
import { resortData } from "@/data/resort-data";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const images = resortData.gallery;

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative pt-24 pb-40 md:pt-40 md:pb-64 bg-[url('/munnar.png')] bg-cover bg-center bg-fixed"
      aria-label="Gallery"
    >
      {/* ─── Top Torn Paper Transition ─── */}
      <TornPaper position="top" color="var(--color-ivory)" className="absolute top-0 w-full z-20" />

      <div className="relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 pt-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-32">
          <SectionLabel label="Chapter 05 — Gallery" align="center" className="text-gold" />
          <TextReveal className="mt-8" splitLetters={true}>
            <h2 className="fluid-heading font-heading text-ivory drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              A Visual <span className="italic text-gold">Masterpiece</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2} className="mt-6">
            <p className="text-ivory text-sm md:text-base max-w-2xl mx-auto font-body font-medium drop-shadow-md" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              Explore the raw beauty of our sanctuary. Every frame captures a moment where luxury and wild nature harmoniously blend.
            </p>
          </TextReveal>
        </div>

        {/* ─── Ladder Layout ─── */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-8 md:gap-x-12 md:gap-y-24">
          {images.map((img, i) => {
            // Ladder (staggered) effect using only positive margins to prevent vertical overlapping
            const marginClass =
              i % 3 === 1 ? "md:mt-24 lg:mt-32" :
              i % 3 === 2 ? "md:mt-12 lg:mt-16" : "";

            return (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
                className={`w-full md:w-[45%] lg:w-[30%] xl:w-[28%] ${marginClass}`}
              >
                <GalleryCard
                  src={img.src}
                  alt={img.alt}
                  caption={img.caption}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
