"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { OrganicImage } from "../ui/OrganicImage";
import { BotanicalSketch1 } from "@/lib/decorative-svgs"; 
import { resortData } from "@/data/resort-data";

export function TheResort() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="resort"
      ref={ref}
      className="relative bg-linen text-charcoal paper-texture overflow-hidden"
      aria-label="The Resort"
    >
      <div className="py-24 md:py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* ─── Organic Natural Layout ─── */}
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Left side: Editorial text (narrow) */}
            <div className="lg:w-[35%] relative z-20 pt-10">
              <SectionLabel label="Chapter 05 — The Grounds" className="text-forest" />
              
              <TextReveal className="mt-12 mb-10">
                <h2 className="fluid-heading font-heading text-forest leading-[1.1]">
                  Where the Land
                  <br />
                  <span className="italic text-bronze mr-4">Embraces</span>
                  the Water
                </h2>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="text-charcoal/80 text-base md:text-lg leading-relaxed font-body font-light mb-12">
                  Hidden between ancient spice forests and the expansive waters of the Idukki reservoir, our sanctuary spans 50 acres of untouched Western Ghats wilderness. Every pathway is a discovery, every vista a living masterpiece painted by nature.
                </p>
              </TextReveal>

              {/* Natural Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 border-l-2 border-forest/20 pl-6"
              >
                <div>
                  <span className="block text-[9px] tracking-[0.3em] uppercase text-forest font-body mb-1">Coordinates</span>
                  <span className="font-heading italic text-xl text-charcoal/90">09° 50' N, 76° 58' E</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-[0.3em] uppercase text-forest font-body mb-1">Elevation</span>
                  <span className="font-heading italic text-xl text-charcoal/90">Reservoir Level to 1,200m</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-[0.3em] uppercase text-forest font-body mb-1">Ecosystem</span>
                  <span className="font-heading italic text-xl text-charcoal/90">Western Ghats Rainforest & Tea Gardens</span>
                </div>
              </motion.div>

              {/* Botanical Decoration */}
              <div className="mt-20 text-forest/20 hidden md:block">
                <BotanicalSketch1 className="w-32 h-32" />
              </div>
            </div>

            {/* Right side: Huge overlapping images */}
            <div className="lg:w-[65%] relative">
              {/* Main Aerial Image */}
              <OrganicImage
                src={resortData.hero.image}
                alt="Resort aerial view"
                width={1200}
                height={800}
                maskIndex={3} // BLOB mask
                containerClassName="w-full h-[50vh] md:h-[80vh] min-h-[500px]"
                imageClassName="opacity-90"
                parallaxSpeed={0.15}
                hasShadow={true}
                hasTape={true}
                tapePosition="top"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />

              {/* Smaller overlapping details */}
              <div className="absolute top-[10%] -left-[15%] md:-left-[10%] z-20 hidden md:block">
                <OrganicImage
                  src={resortData.villas[1].image}
                  alt="Resort detail"
                  width={400}
                  height={300}
                  maskIndex={10} // LEAF mask
                  containerClassName="w-[250px] lg:w-[350px] h-[200px] lg:h-[280px]"
                  rotation={-8}
                  hasShadow={true}
                  hasTape={false}
                  sizes="350px"
                />
              </div>

              <div className="absolute bottom-[5%] right-[5%] z-20 hidden md:block">
                <OrganicImage
                  src={resortData.villas[0].imageAlt!}
                  alt="Resort detail"
                  width={300}
                  height={400}
                  maskIndex={1} // DECKLED mask
                  containerClassName="w-[200px] lg:w-[280px] h-[250px] lg:h-[350px]"
                  rotation={12}
                  hasShadow={true}
                  hasTape={true}
                  tapePosition="top-right"
                  sizes="280px"
                />
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
