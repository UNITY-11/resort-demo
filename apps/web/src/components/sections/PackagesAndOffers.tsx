"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";
import { ClassicGoldFrame } from "../ui/ClassicGoldFrame";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const packages = [
  {
    title: "Special Offers",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop", // Resort pool relaxation
    link: "#special-offers"
  },
  {
    title: "Romantic Surprise",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2000&auto=format&fit=crop", // Fine dining / romance
    link: "#romantic"
  },
  {
    title: "Stay Experience",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop", // Yoga / wellness
    link: "#stay"
  }
];

export function PackagesAndOffers() {
  return (
    <section className="relative py-24 md:py-32 bg-ivory text-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <TextReveal splitLetters={true} once={true}>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
              Discover Exclusive Stay Packages and Offers at <span className="italic text-gold">Élara Resort</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.2} once={true} className="mt-8">
            <p className="font-body font-light text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-charcoal/80">
              Nestled within the serene grounds of the best resort in Munnar for honeymoon escapes, Élara Resort offers an experience like no other. This elegant sanctuary is the perfect blend of romance and authentic luxury, making it an ideal destination for couples looking to create unforgettable memories.
            </p>
          </TextReveal>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Special Frame Image */}
              <div className="w-full aspect-[3/4] p-2">
                <ClassicGoldFrame 
                  src={pkg.image}
                  alt={pkg.title}
                  containerClassName="w-full h-full"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500 z-30">
                    <h3 className="font-heading text-2xl md:text-3xl text-ivory mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {pkg.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-ivory/80 group-hover:text-ivory transition-colors duration-300 mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <span className="font-body text-sm tracking-[0.2em] uppercase">Learn More</span>
                      <HiOutlineArrowLongRight className="w-5 h-5" />
                    </div>
                  </div>
                </ClassicGoldFrame>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
