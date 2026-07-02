"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TornPaper } from "../ui/TornPaper";
import { resortData } from "@/data/resort-data";
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

  // Background images for the sticky section (Idukki tea plantations / nature)
  const bgImages = [
    "https://images.unsplash.com/photo-1593693397690-362bb9a11540?q=80&w=2000&auto=format&fit=crop", // Tea plantation hills
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop", // Winding road
    "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=2000&auto=format&fit=crop", // Infinity pool
  ];

  // Opacity transforms for crossfading backgrounds
  const bg1Opacity = useTransform(scrollYProgress, [0, 0.33, 0.66], [1, 1, 0]);
  const bg2Opacity = useTransform(scrollYProgress, [0.33, 0.66, 0.99], [0, 1, 0]);
  const bg3Opacity = useTransform(scrollYProgress, [0.66, 0.99, 1], [0, 1, 1]);

  return (
    <section
      id="villas"
      ref={containerRef}
      className="relative w-full"
      aria-label="Luxury Villas"
    >
      {/* ─── STICKY BACKGROUNDS ─── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-charcoal">
        {/* Torn paper overlay at the very top for transition */}
        <div className="absolute top-0 left-0 w-full z-20">
          <TornPaper position="top" color="#F0E9E0" variant="jagged" />
        </div>
        
        <motion.div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImages[0]})`, opacity: bg1Opacity }}
        />
        <motion.div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImages[1]})`, opacity: bg2Opacity }}
        />
        <motion.div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImages[2]})`, opacity: bg3Opacity }}
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]" />
      </div>

      {/* ─── SCROLLING CARDS ─── */}
      <div className="relative z-10 w-full -mt-[100vh]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-32">
          
          {/* Section Header */}
          <div className="mb-40 md:mb-64 pt-20">
            <SectionLabel label="Chapter 03 — Accommodations" className="text-gold" />
            <TextReveal className="mt-6">
              <h2 className="fluid-heading font-heading text-ivory max-w-2xl text-shadow-lg">
                Sanctuaries of
                <br />
                <span className="italic text-gold">Space & Light</span>
              </h2>
            </TextReveal>
          </div>

          <div className="space-y-[40vh] md:space-y-[60vh] pb-[20vh]">
            {villas.map((villa, i) => {
              const isReversed = i % 2 !== 0;

              return (
                <div
                  key={villa.name}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
                >
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2 relative group perspective-1000">
                    <div className="w-full aspect-[4/3] rounded-[100px] overflow-hidden shadow-2xl border border-white/20 relative">
                      <img 
                        src={villa.image} 
                        alt={villa.name}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Solid Pill Card Column */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="bg-forest p-10 md:p-14 shadow-2xl w-full max-w-xl rounded-[100px] border border-forest-light relative overflow-hidden">
                      {/* Decorative internal line */}
                      <div className="absolute inset-4 border border-white/10 rounded-[85px] pointer-events-none" />
                      
                      <div className="flex items-center gap-3 mb-6 relative z-10">
                        <span className="font-heading text-4xl md:text-5xl text-gold/80 leading-none mr-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="w-12 h-px bg-gold/50" />
                        <span className="text-[9px] tracking-[0.3em] uppercase text-ivory/80 font-body">
                          Villa Collection
                        </span>
                      </div>

                      <h3 className="font-heading text-3xl md:text-5xl text-ivory mb-6 relative z-10">
                        {villa.name}
                      </h3>

                      <p className="text-ivory/80 text-sm md:text-base leading-relaxed mb-10 font-body font-light relative z-10">
                        {villa.description}
                      </p>

                      {/* Editorial Specs List */}
                      <div className="space-y-4 mb-12 border-l border-gold/30 pl-6 relative z-10">
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
                      <div className="flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
