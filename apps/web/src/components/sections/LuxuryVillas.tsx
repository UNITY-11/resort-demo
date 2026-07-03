"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { KathakaliHalo } from "@/lib/decorative-svgs";
import { AnimatedKathakaliHead } from "../ui/AnimatedKathakaliHead";
import { SectionLabel } from "../ui/SectionLabel";
import { TornPaper } from "../ui/TornPaper";
import { resortData } from "@/data/resort-data";
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbPool, TbRulerMeasure } from "react-icons/tb";
import { VelocityMarquee } from "../ui/VelocityMarquee";

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
      className="relative w-full bg-white overflow-visible"
      aria-label="Luxury Villas"
    >
      <div className="absolute top-0 left-0 w-full z-20">
        <TornPaper position="top" color="var(--color-linen)" />
      </div>

      {/* ─── STICKY BACKGROUNDS ─── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-white">
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.7, 0.85], [1, 0]) }}>
        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gold">
          <div className="relative w-[360px] h-[360px]">
            <motion.div
              className="absolute top-0 left-0"
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
            >
              <KathakaliHalo opacity={0.12} className="w-[300px] h-[300px]" />
            </motion.div>
            <div className="absolute top-[10px] left-0">
              <AnimatedKathakaliHead opacity={0.12} className="w-[300px] h-[430px]" scrollProgress={scrollYProgress} />
            </div>
          </div>
        </div>

        {/* Kathakali #2 — right side, stays centered */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-forest">
          <div className="relative w-[360px] h-[360px]">
            <motion.div
              className="absolute top-0 left-0"
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
            >
              <KathakaliHalo opacity={0.06} className="w-[300px] h-[300px]" />
            </motion.div>
            <div className="absolute top-[10px] left-0">
              <AnimatedKathakaliHead opacity={0.06} className="w-[300px] h-[430px]" scrollProgress={scrollYProgress} expressionShift={2} />
            </div>
          </div>
        </div>
        </motion.div>
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

          <div className="flex flex-col gap-32 md:gap-56 pb-[20vh] max-w-7xl mx-auto items-center px-4">
            {villas.map((villa, i) => {
              return (
                <motion.div
                  key={villa.name}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch gap-8 lg:gap-16 max-w-[1000px] w-full`}
                >
                  {/* Image Column */}
                  <div className="flex-1 w-full relative group mask-deckled shadow-2xl overflow-hidden bg-forest min-h-[250px] md:min-h-[350px]">
                    <div className="w-full h-full absolute inset-0">
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
                    className="flex-1 w-full p-6 md:p-8 flex flex-col justify-center relative bg-forest z-10 mask-deckled shadow-2xl overflow-hidden"
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

      {/* ─── VELOCITY MARQUEE & MOUNTAIN TRANSITION ─── */}
      {/* We use a wrapper with its own scroll mapping for the parallax effect */}
      <div className="relative w-full h-[80vh] md:h-[120vh] -mt-[10vh] overflow-visible" style={{ zIndex: 0 }}>
        
        {/* The Marquee Layer (Scrolls down slower, going behind mountain) */}
        <motion.div 
          className="absolute -top-[5%] md:-top-[10%] w-full z-0"
          style={{ 
            y: useTransform(scrollYProgress, [0.8, 1], [0, 300]) 
          }}
        >
          <VelocityMarquee baseVelocity={-0.2} className="text-gold/30 font-heading text-[8rem] md:text-[15rem] leading-none uppercase tracking-tighter opacity-100">
            Sanctuaries of Space & Light — 
          </VelocityMarquee>
        </motion.div>

        {/* The Mountain Image (Sits on top with z-10) */}
        <div className="absolute bottom-0 w-full h-[60vh] md:h-[100vh] z-10 pointer-events-none">
          <img
            src="/mountain.png"
            alt="Mountain Landscape"
            className="w-full h-full object-cover object-top"
          />

          {/* Content overlay on the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center pt-32">
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
      </div>
    </section>
  );
}
