"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";
import { Button } from "../ui/Button";
import { OrganicImage } from "../ui/OrganicImage";
import { BotanicalSketch1 } from "@/lib/decorative-svgs";
import { resortData } from "@/data/resort-data";

export function BookingCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const { booking } = resortData;

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-32 md:py-48 bg-ivory overflow-hidden"
      aria-label="Booking"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Emotional Imagery */}
          <div className="lg:col-span-7 relative h-[50vh] md:h-[80vh] min-h-[500px]">
            {/* Background Texture Element */}
            <div className="absolute inset-0 bg-sand watercolor-wash organic-corners-lg transform -rotate-2 opacity-50" style={{ clipPath: 'polygon(2% 0, 100% 4%, 96% 100%, 0 98%)' }} />
            
            <OrganicImage
              src={booking.image}
              alt="Luxury resort exterior"
              fill
              maskIndex={2} // HAND_CUT
              containerClassName="absolute inset-4 z-10"
              parallaxSpeed={0.1}
              hasShadow={true}
              hasTape={true}
              tapePosition="top-left"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute -left-12 bottom-1/4 z-0 text-forest opacity-20 hidden md:block">
              <BotanicalSketch1 className="w-64 h-96 transform -rotate-12" />
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <motion.div style={{ y: textY }} className="lg:col-span-5 relative z-20">
            
            <div className="mb-12">
              <TextReveal>
                <h2 className="fluid-heading font-heading text-charcoal mb-6 leading-none">
                  {booking.heading}
                </h2>
              </TextReveal>
              <TextReveal delay={0.1}>
                <p className="text-stone text-base md:text-lg leading-relaxed font-body font-light">
                  {booking.subheading}
                </p>
              </TextReveal>
            </div>

            <TextReveal delay={0.2}>
              <div 
                className="bg-linen p-8 md:p-10 shadow-2xl relative organic-corners-lg border border-stone/10"
                style={{ clipPath: 'var(--mask-irregular-rect)' }}
              >
                <div className="absolute inset-0 mask-irregular-rect bg-linen shadow-inner" />
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-6 border-b border-stone/20 pb-8">
                    <div>
                      <label htmlFor="checkin" className="block text-[9px] tracking-[0.25em] uppercase text-stone mb-3 font-body">Arrival</label>
                      <input
                        id="checkin"
                        type="date"
                        className="w-full bg-transparent border-none p-0 text-charcoal font-heading text-xl md:text-2xl italic focus:outline-none focus:ring-0 cursor-text"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="block text-[9px] tracking-[0.25em] uppercase text-stone mb-3 font-body">Departure</label>
                      <input
                        id="checkout"
                        type="date"
                        className="w-full bg-transparent border-none p-0 text-charcoal font-heading text-xl md:text-2xl italic focus:outline-none focus:ring-0 cursor-text"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-6 pb-8">
                    <div>
                      <label htmlFor="guests" className="block text-[9px] tracking-[0.25em] uppercase text-stone mb-3 font-body">Guests</label>
                      <select id="guests" className="w-full bg-transparent border-none p-0 text-charcoal font-heading text-xl italic focus:outline-none focus:ring-0 appearance-none cursor-pointer">
                        <option value="2">2 Adults</option>
                        <option value="1">1 Adult</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="family">Family (4+)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="villa" className="block text-[9px] tracking-[0.25em] uppercase text-stone mb-3 font-body">Villa Choice</label>
                      <select id="villa" className="w-full bg-transparent border-none p-0 text-charcoal font-heading text-xl italic focus:outline-none focus:ring-0 appearance-none cursor-pointer">
                        <option value="reservoir">The Reservoir Pavilion</option>
                        <option value="cardamom">The Cardamom Suite</option>
                        <option value="estate">The Idukki Estate</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <Button variant="primary" size="lg" className="w-full rounded-full !bg-forest hover:!bg-forest-light border-none text-ivory">
                      Begin Journey
                    </Button>
                  </div>
                </form>
              </div>
            </TextReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
