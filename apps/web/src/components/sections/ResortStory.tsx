"use client";

import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TornPaper } from "../ui/TornPaper";
import { OrganicImage } from "../ui/OrganicImage";
import { BotanicalSketch2 } from "@/lib/decorative-svgs";
import { FloatingElement } from "../ui/FloatingElement";
import { EditorialDivider } from "../ui/EditorialDivider";
import { resortData } from "@/data/resort-data";

export function ResortStory() {
  const { story } = resortData;

  return (
    <section
      id="story"
      className="relative bg-linen linen-texture overflow-hidden"
      aria-label="Our Story"
    >
      <TornPaper position="top" color="#F0E9E0" className="relative z-20" />

      <div className="py-24 md:py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <SectionLabel label="Chapter 02 — Our Philosophy" />
            <div className="hidden md:block w-32">
              <EditorialDivider variant="torn" color="var(--color-gold)" />
            </div>
          </div>

          {/* ─── Editorial Split Layout ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
            
            {/* Background Botanical Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 pointer-events-none hidden lg:block">
              <BotanicalSketch2 className="w-96 h-96 text-forest" />
            </div>

            {/* Text Column (Rotated slightly) */}
            <div className="lg:col-span-6 lg:col-start-1 relative z-10 lg:pr-12">
              <div 
                className="bg-ivory/80 backdrop-blur-sm p-8 md:p-12 shadow-2xl border border-ivory/40"
              >
                <TextReveal>
                  <h2 className="fluid-heading font-heading text-charcoal mb-10 leading-[1.1]">
                    {story.heading}
                  </h2>
                </TextReveal>

                {/* Pull Quote */}
                <TextReveal delay={0.15}>
                  <blockquote className="relative mb-10">
                    <span className="absolute -top-4 -left-6 text-6xl text-gold/20 font-heading leading-none select-none">"</span>
                    <p className="font-heading italic text-2xl md:text-3xl lg:text-4xl text-forest/90 leading-snug">
                      {story.quote}
                    </p>
                  </blockquote>
                </TextReveal>

                <TextReveal delay={0.25}>
                  <p className="text-stone text-base md:text-lg leading-relaxed mb-10 font-body font-light">
                    {story.body}
                  </p>
                </TextReveal>

                <TextReveal delay={0.35}>
                  <div className="flex flex-col gap-2">
                    <span className="font-heading italic text-3xl text-charcoal/80">
                      Arjun Nair
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-px bg-gold" />
                      <span className="text-[9px] tracking-[0.25em] uppercase text-stone font-body">
                        Founder, Élara
                      </span>
                    </div>
                  </div>
                </TextReveal>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-6 lg:col-start-7 relative z-10 mt-12 lg:mt-0">
              {/* Main Image with Ripped Left Mask */}
              <OrganicImage
                src={story.image}
                alt="Élara resort philosophy"
                width={800}
                height={1000}
                maskIndex={5} // SLEEK_ANGLE_BOTTOM
                containerClassName="w-full h-[500px] md:h-[750px] ml-0 lg:ml-[-10%]"
                parallaxSpeed={0.1}
                hasShadow={true}
                hasTape={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlapping Floating Modern Card */}
              <FloatingElement
                duration={8}
                distance={15}
                className="absolute -bottom-12 -left-4 md:-left-16 z-20 hidden md:block"
              >
                <div 
                  className="bg-ivory p-6 pb-12 w-72 shadow-2xl border border-gold/10"
                >
                  <div className="relative aspect-square overflow-hidden rounded-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=400&fit=crop&q=80" 
                      alt="Resort detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-heading text-charcoal text-lg mt-6 text-center">
                    Where nature meets refinement
                  </p>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>

      <TornPaper position="bottom" color="#F2EBE3" />
    </section>
  );
}
