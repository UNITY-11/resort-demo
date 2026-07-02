"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { OrganicImage } from "../ui/OrganicImage";
import { TornPaper } from "../ui/TornPaper";
import { resortData } from "@/data/resort-data";
import { FaStar } from "react-icons/fa";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const testimonials = resortData.testimonials;

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 bg-forest text-ivory overflow-visible"
      aria-label="Guest Journal"
    >
      {/* ─── Top Torn Paper Border ─── */}
      <TornPaper 
        position="bottom" 
        color="var(--color-forest)" 
        className="absolute bottom-full w-full z-30" 
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <div className="flex flex-col items-center text-center mb-20">
          <SectionLabel label="What Guests Say About Us" className="text-gold mb-8" align="center" />
          
          <TextReveal splitLetters={true}>
            <h2 className="fluid-heading font-heading text-ivory">
              The Élara <span className="italic text-gold">Experience</span>
            </h2>
          </TextReveal>
        </div>

        <div className="flex flex-col gap-24">
          {testimonials.slice(0, 2).map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-12"
            >
              {/* Organic Portrait */}
              <div className={`w-48 h-48 md:w-64 md:h-64 flex-shrink-0 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <OrganicImage
                  src={t.image}
                  alt={t.author}
                  width={300}
                  height={300}
                  maskIndex={3} // BLOB
                  containerClassName="w-full h-full"
                  hasTape={false}
                  hasShadow={true}
                />
              </div>

              {/* Torn Paper Text Card */}
              <div 
                className={`relative bg-linen text-charcoal p-10 md:p-14 max-w-2xl text-left ${i % 2 === 1 ? 'md:order-1' : ''}`}
                style={{ clipPath: 'var(--mask-deckled)' }}
              >
                {/* Apply the mask via class */}
                <div className="absolute inset-0 bg-linen mask-deckled shadow-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 text-gold mb-6">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} size={14} />
                    ))}
                  </div>
                  
                  <p className="font-heading text-xl md:text-3xl leading-relaxed mb-6 italic text-forest">
                    "{t.quote}"
                  </p>
                  
                  <div>
                    <p className="font-bold font-body text-charcoal tracking-wide uppercase text-sm">
                      {t.author}
                    </p>
                    <p className="text-stone text-xs tracking-wider uppercase mt-1">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 w-full z-20">
        <TornPaper position="bottom" color="var(--color-cream)" variant="jagged" />
      </div>
    </section>
  );
}
