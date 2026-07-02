"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TornPaper } from "../ui/TornPaper";
import { resortData } from "@/data/resort-data";
import { KeralaMandala } from "@/lib/decorative-svgs";
import { FloatingElement } from "../ui/FloatingElement";
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbPool, TbRulerMeasure } from "react-icons/tb";

export function LuxuryVillas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const villas = resortData.villas;

  return (
    <section
      id="villas"
      ref={containerRef}
      className="relative w-full bg-white"
      aria-label="Luxury Villas"
    >
      <div className="absolute top-0 left-0 w-full z-20">
        <TornPaper position="top" color="var(--color-linen)" />
      </div>

      {/* ─── STICKY BACKGROUNDS ─── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-white">
        {/* Animated Botanical Elements in the background */}
        <FloatingElement duration={20} distance={15} className="absolute -top-20 -left-20 opacity-15 text-gold">
          <KeralaMandala className="w-[40rem] h-auto animate-[spin_60s_linear_infinite]" opacity={1} />
        </FloatingElement>
        <FloatingElement duration={25} distance={10} delay={2} className="absolute -bottom-40 -right-20 opacity-10 text-gold">
          <KeralaMandala className="w-[50rem] h-auto animate-[spin_80s_linear_infinite_reverse]" opacity={1} />
        </FloatingElement>
        <FloatingElement duration={30} distance={20} delay={1} className="absolute top-1/4 left-1/3 opacity-5 text-gold">
          <KeralaMandala className="w-[60rem] h-auto animate-[spin_120s_linear_infinite]" opacity={1} />
        </FloatingElement>
      </div>

      {/* ─── SCROLLING CARDS ─── */}
      <div className="relative z-10 w-full -mt-[100vh]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-32">

          {/* Section Header */}
          <div className="mb-40 md:mb-64 pt-20 flex flex-col items-center text-center">
            <SectionLabel label="Chapter 03 — Accommodations" className="text-gold" align="center" />
            <TextReveal className="mt-6" splitLetters={true}>
              <h2 className="fluid-heading font-heading text-charcoal max-w-2xl text-shadow-sm mx-auto">
                Sanctuaries of
                <br />
                <span className="italic text-gold">Space & Light</span>
              </h2>
            </TextReveal>
          </div>

          <div className="flex flex-col gap-[30vh] md:gap-[50vh] pb-[20vh] max-w-7xl mx-auto">
            {villas.map((villa, i) => {
              return (
                <motion.div
                  key={villa.name}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col lg:flex-row items-stretch mask-deckled shadow-2xl overflow-hidden bg-forest sticky"
                  style={{ top: `calc(5vh + ${i * 30}px)`, zIndex: 10 + i }}
                >
                  {/* Image Column */}
                  <div className="w-full lg:w-[55%] relative group perspective-1000 lg:order-1">
                    <div className="w-full h-full overflow-hidden relative min-h-[30vh]">
                      <img
                        src={villa.image}
                        alt={villa.name}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                      />
                      {/* Vignette overlay to darken only around the edges of the image */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_150%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div 
                    className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center relative bg-forest z-10 lg:order-2 lg:-ml-[10%] mask-ripped-left"
                  >
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <span className="font-heading text-3xl md:text-4xl text-gold/80 leading-none mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-12 h-px bg-gold/50" />
                      <span className="text-[9px] tracking-[0.3em] uppercase text-ivory/80 font-body">
                        Villa Collection
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl md:text-4xl text-ivory mb-4 relative z-10">
                      {villa.name}
                    </h3>

                    <p className="text-ivory/80 text-sm md:text-base leading-relaxed mb-6 font-body font-light relative z-10">
                      {villa.description}
                    </p>

                    {/* Editorial Specs List */}
                    <div className="space-y-3 mb-8 border-l border-gold/30 pl-6 relative z-10">
                      <div className="flex items-center gap-4 text-ivory/90">
                        <TbRulerMeasure size={16} className="text-gold" />
                        <span className="text-sm font-body tracking-wider">{villa.area}</span>
                      </div>
                      <div className="flex items-center gap-4 text-ivory/90">
                        <HiOutlineUsers size={16} className="text-gold" />
                        <span className="text-sm font-body tracking-wider">{villa.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-4 text-ivory/90">
                        <IoBedOutline size={16} className="text-gold" />
                        <span className="text-sm font-body tracking-wider">{villa.bedrooms} Bedrooms</span>
                      </div>
                      {villa.pool && (
                        <div className="flex items-center gap-4 text-ivory/90">
                          <TbPool size={16} className="text-gold" />
                          <span className="text-sm font-body tracking-wider">Private Infinity Pool</span>
                        </div>
                      )}
                    </div>

                    {/* Booking Tag */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
                      <div>
                        <p className="text-[9px] tracking-[0.2em] uppercase text-ivory/60 font-body mb-1">
                          From
                        </p>
                        <p className="font-heading text-3xl text-ivory">
                          ${villa.price.toLocaleString()}
                          <span className="text-sm text-ivory/70 ml-1 font-body">
                            / night
                          </span>
                        </p>
                      </div>

                      <a href="#booking" className="group flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 hover:bg-gold transition-all duration-300">
                        <span className="text-gold group-hover:text-forest transition-colors duration-300">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── MOUNTAIN IMAGE TRANSITION ─── */}
      <div className="relative w-full h-[60vh] md:h-[100vh]">
        <img
          src="/mountain.png"
          alt="Mountain Landscape"
          className="w-full h-full object-cover"
        />

        {/* Content overlay on the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
          <h2 className="fluid-heading font-heading text-ivory drop-shadow-xl max-w-4xl leading-tight">
            Where the Earth <br />
            <span className="italic text-gold">Meets the Sky</span>
          </h2>
          <p className="mt-6 text-ivory/90 font-body text-lg md:text-xl max-w-2xl drop-shadow-md font-light">
            Discover the untamed beauty of the High Ranges, where every morning is painted in mist and gold.
          </p>
        </div>

        {/* Torn paper covering the straight bottom cut of the image, tearing upwards. Color matches Chapter 4 (ivory). */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <TornPaper position="bottom" color="var(--color-ivory)" />
        </div>
      </div>
    </section>
  );
}
