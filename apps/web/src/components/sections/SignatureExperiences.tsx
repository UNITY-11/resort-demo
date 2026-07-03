"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import Image from "next/image";
import { resortData } from "@/data/resort-data";
import { TornPaper } from "../ui/TornPaper";

// Simple animated flapping bird component
const FlappingBird = ({ x, y, scale = 1, speed = 0.8, delay = 0 }: { x: number, y: number, scale?: number, speed?: number, delay?: number }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <path fill="currentColor">
      <animate
        attributeName="d"
        values="M 0,5 Q 5,-5 10,5 Q 15,-5 20,5 Q 15,2 10,7 Q 5,2 0,5 Z; M 0,5 Q 5,12 10,5 Q 15,12 20,5 Q 15,7 10,7 Q 5,7 0,5 Z; M 0,5 Q 5,-5 10,5 Q 15,-5 20,5 Q 15,2 10,7 Q 5,2 0,5 Z"
        dur={`${speed}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </path>
  </g>
);

// Simple cloud component
const Cloud = ({ x, y, scale = 1, opacity = 1 }: { x: number, y: number, scale?: number, opacity?: number }) => (
  <path 
    transform={`translate(${x}, ${y}) scale(${scale})`}
    opacity={opacity}
    d="M 0,20 a 20,20 0 0,1 20,-20 a 30,30 0 0,1 50,0 a 20,20 0 0,1 20,20 z" 
  />
);

export function SignatureExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax motion values for a 3-column grid:
  // Center column moves UP strongly, Side columns move DOWN
  // Using raw scrollYProgress to lock movement directly to scroll (no physics lag)
  const yParallaxCenter = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yParallaxSide = useTransform(scrollYProgress, [0, 1], [0, 250]);

  const experiences = resortData.experiences;

  const collageItems = [
    { gridClass: "col-span-12 md:col-span-6 lg:col-span-4", delay: 0 },
    { gridClass: "col-span-12 md:col-span-6 lg:col-span-4 md:mt-12 lg:mt-40", delay: 0.1 },
    { gridClass: "col-span-12 md:col-span-6 lg:col-span-4 md:mt-6 lg:mt-16", delay: 0.2 },
  ];

  const svgContent = (
    <>
      {/* === Sky Elements (Clouds and Birds) === */}
      <g fill="var(--color-charcoal)" opacity="0.05">
        {/* Lots of Clouds */}
        <Cloud x={100} y={250} scale={1.2} />
        <Cloud x={300} y={150} scale={0.8} opacity={0.7} />
        <Cloud x={450} y={280} scale={1.5} />
        <Cloud x={500} y={120} scale={1.1} opacity={0.6} />
        <Cloud x={650} y={200} scale={1} />
        <Cloud x={800} y={120} scale={0.6} opacity={0.5} />
        <Cloud x={850} y={300} scale={1.1} />
        <Cloud x={150} y={100} scale={0.9} />
        <Cloud x={550} y={100} scale={1.3} opacity={0.8} />
        <Cloud x={20} y={320} scale={0.7} />
        <Cloud x={920} y={220} scale={1.4} />

        {/* Flying Birds Flock 1 (Fast & Low) */}
        <g fill="currentColor">
          <animateTransform attributeName="transform" type="translate" from="1100 200" to="-200 200" dur="20s" repeatCount="indefinite" />
          <FlappingBird x={0} y={0} scale={1.5} speed={0.8} delay={0} />
          <FlappingBird x={30} y={-10} scale={1.3} speed={0.9} delay={0.2} />
          <FlappingBird x={15} y={15} scale={1.4} speed={0.85} delay={0.4} />
          <FlappingBird x={50} y={5} scale={1.2} speed={0.95} delay={0.1} />
          <FlappingBird x={40} y={25} scale={1.3} speed={0.8} delay={0.6} />
          <FlappingBird x={70} y={-5} scale={1.1} speed={1.0} delay={0.3} />
        </g>
        
        {/* Flying Birds Flock 2 (Slower, higher up) */}
        <g fill="currentColor">
          <animateTransform attributeName="transform" type="translate" from="1200 100" to="-300 100" dur="35s" repeatCount="indefinite" />
          <g opacity="0.6">
            <FlappingBird x={0} y={0} scale={1.2} speed={1.2} delay={0} />
            <FlappingBird x={25} y={-15} scale={1.1} speed={1.3} delay={0.3} />
            <FlappingBird x={10} y={15} scale={1.0} speed={1.1} delay={0.1} />
            <FlappingBird x={40} y={5} scale={1.1} speed={1.25} delay={0.4} />
            <FlappingBird x={50} y={-10} scale={0.9} speed={1.4} delay={0.2} />
          </g>
        </g>

        {/* Flying Birds Flock 3 (Distant, Very Slow) */}
        <g fill="currentColor">
          <animateTransform attributeName="transform" type="translate" from="1300 150" to="-200 150" dur="50s" repeatCount="indefinite" />
          <g opacity="0.4">
            <FlappingBird x={0} y={0} scale={0.7} speed={1.5} delay={0} />
            <FlappingBird x={20} y={-10} scale={0.6} speed={1.6} delay={0.5} />
            <FlappingBird x={15} y={10} scale={0.7} speed={1.4} delay={0.2} />
          </g>
        </g>
      </g>

      {/* === Majestic Mountains Background === */}
      <g fill="var(--color-charcoal)" opacity="0.05">
        <circle cx="800" cy="400" r="150" fill="var(--color-gold)" opacity="0.2" />
        <path d="M -100,1000 L 200,550 L 500,1000 Z" />
        <path d="M 300,1000 L 650,400 L 1100,1000 Z" />
        <path d="M 750,1000 L 950,650 L 1250,1000 Z" />
        <path d="M -150,1000 L 100,700 L 350,1000 Z" opacity="0.8" />
        <path d="M 150,1000 L 450,600 L 800,1000 Z" opacity="0.8" />
        <path d="M 550,1000 L 850,500 L 1150,1000 Z" opacity="0.8" />
      </g>

      {/* === The Journey Track === */}
      <path
        className="drop-shadow-sm text-gold"
        d="M -10,250 C 250,250 250,450 500,450 C 750,450 750,250 900,250 C 980,250 980,650 900,650 C 750,650 750,850 500,850 C 250,850 250,650 -10,650"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 8"
        vectorEffect="non-scaling-stroke"
      />

      <g fill="var(--color-gold)" stroke="none" opacity="0.8">
        <circle cx="166" cy="280" r="6" />
        <circle cx="500" cy="450" r="8" />
        <circle cx="833" cy="280" r="6" />
        <path d="M 940 445 L 945 450 L 940 455 L 935 450 Z" />
        <circle cx="833" cy="620" r="6" />
        <circle cx="500" cy="850" r="8" />
        <circle cx="166" cy="680" r="6" />
      </g>
    </>
  );

  return (
    <section
      id="experiences"
      ref={ref}
      className="relative pt-24 pb-32 md:pb-64 overflow-hidden"
      aria-label="Signature Experiences"
    >
      {/* Background SVG Track & Nature Elements - Placed at section level to cover padding */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50 md:opacity-60">
        
        {/* Desktop SVG - Pinned to bottom to maintain mountains */}
        <svg
          className="w-full h-full hidden md:block absolute inset-0"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMax slice"
        >
          {svgContent}
        </svg>

        {/* Mobile SVG - Sticky to keep elements perfectly in view without extreme scaling */}
        <div className="md:hidden sticky top-0 w-full h-screen">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            {svgContent}
          </svg>
        </div>

      </div>
      
      {/* Fade out the SVG mountains at the very bottom into pure ivory to seamlessly match the TornPaper component in the Gallery section below */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-ivory to-transparent z-[1] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <SectionLabel label="Activities" className="text-gold" align="center" />
          <TextReveal className="mt-6" splitLetters={true}>
            <h2 className="fluid-heading font-heading text-charcoal max-w-2xl mx-auto text-shadow-sm">
              Immersive
              <br />
              <span className="italic text-gold">Encounters</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2} className="mt-6">
            <p className="text-stone text-sm md:text-base max-w-md mx-auto font-body font-light">
              We curate moments that linger long after you depart. Discover our handcrafted collection of signature experiences.
            </p>
          </TextReveal>
        </div>

        {/* ─── Structured Grid ─── */}
        <div className="relative mt-12 md:mt-24">
          <div className="grid grid-cols-12 gap-x-8 gap-y-24 md:gap-x-12 md:gap-y-32 auto-rows-auto relative z-10">
            {experiences.map((exp: any, i: number) => {
              const config = collageItems[i % collageItems.length];
              
              // 3-column grid: index 1, 4, 7... are the center column
              const isCenter = i % 3 === 1;
              const parallax = isCenter ? yParallaxCenter : yParallaxSide;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: 0.8,
                    delay: (i % 3) * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className={`group relative ${config.gridClass}`}
                >
                  {/* Outer container to reduce width/height, wrapped with parallax motion */}
                  <motion.div 
                    style={isDesktop ? { y: parallax, willChange: "transform" } : {}}
                    className="relative group drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.02] w-[85%] md:w-[90%] max-w-[340px] mx-auto"
                  >

                    {/* The Image container with identical smooth torn CSS cutting on all four sides */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden z-10 bg-[#e0dcd0] mask-rough-edge">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover transition-all duration-[1.5s] group-hover:scale-110 filter grayscale group-hover:grayscale-0 contrast-[1.1]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      {/* Gradients for vignette and text legibility */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)] z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />

                      {/* Editorial Overlay (Text) */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-heading text-lg text-gold italic drop-shadow-md">No.</span>
                            <span className="font-heading text-xl text-ivory drop-shadow-md">0{i + 1}</span>
                          </div>
                          <h3 className="font-heading text-lg md:text-xl text-ivory mb-2 drop-shadow-md">
                            {exp.title}
                          </h3>
                          <p className="font-body font-light text-xs md:text-sm text-ivory/90 leading-relaxed drop-shadow-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
