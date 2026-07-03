"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { StaggerTestimonials } from "../ui/StaggerTestimonials";
import { TornPaper } from "../ui/TornPaper";
import { SectionLabel } from "../ui/SectionLabel";
import { TextReveal } from "../ui/TextReveal";

export function Testimonials() {
    const testimonialsRef = useRef<{ handleMove: (direction: number) => void } | null>(null);

    return (
        <div id="testimonials" className="w-full flex justify-center bg-ivory">
            <section
                className="relative w-full text-ivory py-16 md:py-24 lg:py-32 overflow-visible bg-forest"
            >
                {/* ─── Top Torn Paper Border ─── */}
                <TornPaper 
                  position="bottom" 
                  color="var(--color-forest)" 
                  className="absolute bottom-full w-full z-30" 
                />

                <div className="container mx-auto px-2 sm:px-4 lg:px-4 max-w-7xl pt-12 relative z-10">
                    <div className="flex flex-col items-center text-center mb-10 md:mb-16">
                        <SectionLabel label="Guest Journal" className="text-gold mb-6" align="center" />
                        <TextReveal splitLetters={true}>
                          <h2 className="fluid-heading font-heading text-ivory">
                              What <span className="italic text-gold">People Say</span>
                          </h2>
                        </TextReveal>
                        <p className="text-stone-light max-w-2xl mx-auto mt-6 text-center leading-relaxed font-body">
                            Hear from our guests who trusted Élara to bring their digital <br className="hidden md:block" />
                            visions to life with scalable, future-ready software solutions.
                        </p>
                    </div>
                </div>

                <div className="w-full relative z-10 md:my-12">
                    <StaggerTestimonials ref={testimonialsRef} />
                </div>

                <div className="mt-10 right-0 flex justify-center relative z-20 w-full overflow-hidden px-4">
                    <div className="flex justify-center items-center gap-8 md:gap-16">
                        <button
                            onClick={() => testimonialsRef.current?.handleMove(-1)}
                            className="group flex items-center gap-4 text-ivory/70 hover:text-gold transition-colors duration-500 font-body uppercase tracking-[0.2em] text-[10px] sm:text-xs"
                            aria-label="Previous testimonials"
                        >
                            <span className="w-12 md:w-20 h-[1px] bg-ivory/30 group-hover:bg-gold transition-colors duration-500"></span>
                            Previous
                        </button>

                        <button
                            onClick={() => testimonialsRef.current?.handleMove(1)}
                            className="group flex items-center gap-4 text-ivory/70 hover:text-gold transition-colors duration-500 font-body uppercase tracking-[0.2em] text-[10px] sm:text-xs"
                            aria-label="Next testimonials"
                        >
                            Next
                            <span className="w-12 md:w-20 h-[1px] bg-ivory/30 group-hover:bg-gold transition-colors duration-500"></span>
                        </button>
                    </div>
                </div>

                {/* ─── Bottom Torn Paper Border ─── */}
                <div className="absolute bottom-0 w-full z-20">
                    <TornPaper position="bottom" color="var(--color-cream)" variant="jagged" />
                </div>
            </section>
        </div>
    );
}
