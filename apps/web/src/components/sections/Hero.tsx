"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { TextReveal } from "../ui/TextReveal";
import { TornPaper } from "../ui/TornPaper";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
      aria-label="Hero"
    >
      {/* ─── Fullscreen Nature Background ─── */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-[-100px] z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1593693397690-362bb9a11540?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury nature resort"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay to ensure text legibility but keep it vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </motion.div>

      {/* ─── Top Navigation Overlay ─── */}
      <div className="absolute top-0 w-full px-8 py-6 z-30 flex justify-between items-center text-ivory/90 text-xs font-body tracking-wider uppercase">
        <div className="flex gap-8">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#villas" className="hover:text-gold transition-colors">Accommodations</a>
          <a href="#experiences" className="hover:text-gold transition-colors">Experiences</a>
        </div>
        
        <div className="font-heading text-xl italic text-gold hidden md:block">
          ~ Élara Sanctuary ~
        </div>

        <div className="flex gap-8">
          <a href="#resort" className="hover:text-gold transition-colors">The Grounds</a>
          <a href="#journal" className="hover:text-gold transition-colors">Journal</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </div>

      {/* ─── Main Composition ─── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 w-full px-6 flex flex-col items-center text-center mt-12"
      >
        {/* Massive Script/Serif Title in Gold */}
        <TextReveal delay={0.1}>
          <h1 
            className="font-heading italic text-[#E5C158] text-[15vw] md:text-[12vw] leading-[0.8] tracking-tight drop-shadow-2xl mb-8"
            style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.4)' }}
          >
            Élara Sanctuary
          </h1>
        </TextReveal>

        {/* Small Center Text */}
        <TextReveal delay={0.3}>
          <p className="text-ivory/90 text-[10px] md:text-xs tracking-[0.2em] font-body uppercase max-w-sm mx-auto mb-6 leading-relaxed text-shadow-sm">
            Curated with love, assembled with warmth, delivered to your soul.
            <br />
            — With Care
          </p>
        </TextReveal>

        {/* Centered Gold Pill Button */}
        <TextReveal delay={0.5}>
          <Button 
            variant="primary" 
            size="lg" 
            href="#booking" 
            className="rounded-full bg-[#E5C158] hover:bg-[#D4AF37] text-charcoal border-none px-10 py-5 text-xs font-body uppercase tracking-wider font-semibold transition-transform hover:scale-105"
          >
            Reserve Your Stay
          </Button>
        </TextReveal>
      </motion.div>

      {/* ─── Massive Torn Paper Transition at Bottom ─── */}
      {/* Assuming the next section (TheResort) has a background of #F0E9E0 (linen) */}
      <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1">
        {/* We use scale-y to make the tear much more dramatic/huge */}
        <div className="scale-y-150 origin-bottom">
          <TornPaper position="bottom" color="#F0E9E0" variant="jagged" />
        </div>
      </div>

    </section>
  );
}
