"use client";

import { motion } from "framer-motion";
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { resortData } from "@/config/resort-data";

// Helper to calculate the relative offset for infinite wrapping
const getOffset = (idx: number, currentIndex: number, total: number) => {
  const normalizedCurrent = ((currentIndex % total) + total) % total;
  let offset = (idx - normalizedCurrent) % total;
  if (offset < 0) offset += total;
  if (offset > Math.floor(total / 2)) {
    offset -= total;
  }
  return offset;
};

export const StaggerTestimonials = forwardRef((props, ref) => {
  const testimonials = resortData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMove = (direction: number) => {
    setCurrentIndex((prev) => prev + direction);
  };

  useImperativeHandle(ref, () => ({
    handleMove
  }));

  const CARD_WIDTH = isMobile ? 320 : 350;
  const GAP = isMobile ? 20 : 40;

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden py-12 md:py-24">
      {/* Hidden SVG to define the fibrous edge filter used on the cards */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="card-fibrous-edge" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="relative flex items-center justify-center w-full h-full">
        {testimonials.map((t, idx) => {
          const offset = getOffset(idx, currentIndex, testimonials.length);
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= (isMobile ? 0 : 1);
          
          return (
            <motion.div
              key={idx}
              onClick={() => {
                // If they click a side card, slide it to the center
                if (offset === -1) handleMove(-1);
                if (offset === 1) handleMove(1);
              }}
              className={`absolute flex-shrink-0 w-[85vw] md:w-[350px] p-2 drop-shadow-xl ${
                !isCenter ? "cursor-pointer" : ""
              }`}
              animate={{
                x: offset * (CARD_WIDTH + GAP),
                y: isCenter ? 0 : 40,
                scale: isCenter ? 1 : 0.9,
                opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                zIndex: isCenter ? 20 : 10 - Math.abs(offset),
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <div style={{ rotate: `${t.rotation}deg` }} className="w-full h-full relative">
                {/* White fibrous torn edge peeking out from behind (all 4 sides) */}
                <div 
                  className="absolute inset-0 bg-white"
                  style={{ filter: "url(#card-fibrous-edge)" }}
                />

                {/* Colored top paper background with its own rough edge */}
                <div
                  className="absolute inset-1 bg-linen transition-colors duration-500"
                  style={{ filter: "url(#card-fibrous-edge)" }}
                >
                  {/* Textures inside the colored layer */}
                  <div className="absolute inset-0 paper-texture opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 linen-texture opacity-30 pointer-events-none" />
                  
                  {/* Hover overlay for side cards to indicate clickability */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-forest/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-sm z-20" />
                  )}
                </div>

                {/* Content Layer - No Filter Applied */}
                <div className="relative z-10 text-charcoal p-6 md:p-8 text-left min-h-[380px] flex flex-col items-center text-center m-1">
                    
                    {/* Author Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold mb-4 shadow-md flex-shrink-0">
                       <Image
                          src={t.image}
                          alt={t.author}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                    </div>
                    
                    <div className="flex items-center justify-center gap-1 text-gold mb-4 flex-shrink-0">
                      {[...Array(5)].map((_, j) => (
                        <FaStar key={j} size={12} />
                      ))}
                    </div>

                    <p className="font-heading text-lg md:text-xl leading-relaxed mb-6 italic text-forest flex-grow flex items-center justify-center">
                      "{t.quote}"
                    </p>

                    <div className="mt-auto flex-shrink-0">
                      <p className="font-bold font-body text-charcoal tracking-wide uppercase text-xs">
                        {t.author}
                      </p>
                      <p className="text-stone text-[10px] tracking-wider uppercase mt-1">
                        {t.location}
                      </p>
                    </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

StaggerTestimonials.displayName = "StaggerTestimonials";
