"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { TextReveal } from "../ui/TextReveal";
import { TornPaper } from "../ui/TornPaper";
import { SectionLabel } from "../ui/SectionLabel";

export function Hero() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65; // Slow down the video slightly
    }
  }, []);

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] md:min-h-[120vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* ─── Fullscreen Nature Background ─── */}
      <motion.div
        style={{
          y: bgY,
        }}
        className="absolute inset-[-100px] z-0"
      >
        <video 
          ref={videoRef}
          autoPlay 
          loop
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient overlay to ensure text legibility but keep it vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none" />
      </motion.div>



      {/* ─── Main Composition ─── */}
      <div className="h-[100vh] w-full flex flex-col items-center justify-center relative z-20">
        <motion.div
          style={{ y: textY }}
          className="w-full px-6 flex flex-col items-center text-center mt-12"
        >
        <TextReveal delay={0}>
          <SectionLabel label="The Sanctuary" className="text-gold mb-4" align="center" />
        </TextReveal>

        {/* Massive Script/Serif Title in Gold */}
        <TextReveal delay={0.1}>
          <h1
            className="font-heading italic text-gold text-7xl sm:text-[15vw] md:text-[12vw] leading-[0.8] tracking-tight drop-shadow-2xl mb-8"
            style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.4)' }}
          >
            Élara Sanctuary
          </h1>
        </TextReveal>

        {/* Small Center Text */}
        <TextReveal delay={0.3}>
          <p className="text-ivory/90 text-xs sm:text-[10px] md:text-xs tracking-[0.2em] font-body uppercase max-w-sm mx-auto mb-6 leading-relaxed text-shadow-sm">
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
            className="bg-gold hover:bg-gold-light text-charcoal border-none px-10 py-5 text-xs font-body uppercase tracking-wider font-semibold transition-transform hover:scale-105"
          >
            Reserve Your Stay
          </Button>
        </TextReveal>
      </motion.div>
      </div>

      {/* ─── Torn Paper Transition at Bottom ─── */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <TornPaper position="bottom" color="var(--color-linen)" variant="jagged" className="scale-y-125 origin-bottom" />
      </div>

    </section>
  );
}
