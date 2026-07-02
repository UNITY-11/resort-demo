"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { TextReveal } from "../ui/TextReveal";
import { TornPaper } from "../ui/TornPaper";
import { FogOverlay } from "../ui/FogOverlay";

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
      className="relative min-h-[120vh] overflow-hidden flex flex-col items-center justify-center"
      aria-label="Hero"
    >
      {/* ─── Fullscreen Nature Background ─── */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url("/banner.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-[-100px] z-0"
      >
        {/* Subtle gradient overlay to ensure text legibility but keep it vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </motion.div>

      {/* ─── Fog Overlay ─── */}
      <FogOverlay />

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
            className="font-heading italic text-gold text-[15vw] md:text-[12vw] leading-[0.8] tracking-tight drop-shadow-2xl mb-8"
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
            className="rounded-full bg-gold hover:bg-gold-light text-charcoal border-none px-10 py-5 text-xs font-body uppercase tracking-wider font-semibold transition-transform hover:scale-105"
          >
            Reserve Your Stay
          </Button>
        </TextReveal>
      </motion.div>

      {/* ─── Torn Paper Transition at Bottom ─── */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <TornPaper position="bottom" color="var(--color-linen)" variant="jagged" className="scale-y-125 origin-bottom" />
      </div>

    </section>
  );
}
