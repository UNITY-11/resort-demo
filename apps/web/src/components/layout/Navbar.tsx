"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/Button";
import { TornPaper } from "../ui/TornPaper";

const navLinks = [
  { name: "The Story", href: "#story" },
  { name: "Villas", href: "#villas" },
  { name: "Experiences", href: "#experiences" },
  { name: "The Resort", href: "#resort" },
  { name: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    const previous = scrollY.getPrevious() || 0;
    
    setIsScrollingDown(latest > previous);

    // Hide when scrolling down past 150px, show when scrolling up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else if (latest < previous) {
      setIsHidden(false);
    }
  });

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Small delay to let menu closing animation start
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const showBackground = isScrolled && !isOpen && !isScrollingDown;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-500 pt-3 pb-0 md:pt-5 ${isHidden ? "-translate-y-[150%]" : "translate-y-0"}`}
      >
        {/* Animated Sliding Background */}
        <div 
          className={`absolute top-0 left-0 w-full h-full bg-[#FEFDF5] -z-10 transition-all duration-500 ${
            showBackground ? "translate-y-0 opacity-100" : "-translate-y-[200%] opacity-0"
          }`}
        >
          {/* Torn Paper Bottom Edge */}
          <div className="absolute top-[99%] left-0 w-full [&>div>svg]:!h-6 [&>div>svg]:md:!h-8 [&>div>svg]:lg:!h-10 pointer-events-none">
            <TornPaper position="top" color="#FEFDF5" className="[&_svg]:!drop-shadow-sm" />
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative pb-0 md:pb-0">
          
          {/* Desktop Left Links */}
          <div className="hidden lg:flex items-center gap-8 text-gold text-xs font-body tracking-wider uppercase z-10 transition-colors duration-300">
            <button onClick={() => scrollTo('#story')} className="hover:text-charcoal transition-colors">ABOUT</button>
            <button onClick={() => scrollTo('#villas')} className="hover:text-charcoal transition-colors">ACCOMMODATIONS</button>
            <button onClick={() => scrollTo('#experiences')} className="hover:text-charcoal transition-colors">EXPERIENCES</button>
          </div>

          {/* Logo (Centered) */}
          <div 
            className="cursor-pointer group flex items-center absolute left-1/2 -translate-x-1/2 z-10" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-heading italic text-3xl md:text-4xl text-gold transition-colors duration-300">
              Élara
            </span>
          </div>

          {/* Spacer for mobile to push toggle to right since logo is absolute and left links are hidden */}
          <div className="lg:hidden w-10"></div>

          {/* Desktop Right Links */}
          <div className="hidden lg:flex items-center gap-8 text-gold text-xs font-body tracking-[0.2em] font-medium z-10 w-[300px] justify-end">
            <button onClick={() => scrollTo('#gallery')} className="hover:text-charcoal transition-colors uppercase">Gallery</button>
            <button onClick={() => scrollTo('#testimonials')} className="hover:text-charcoal transition-colors uppercase">Reviews</button>
            <button onClick={() => scrollTo('#contact')} className="hover:text-charcoal transition-colors uppercase">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px bg-gold transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-gold transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>


      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-[#FEFDF5] paper-texture flex flex-col justify-center px-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
            
            <div className="flex flex-col gap-6 items-center text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal italic hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1, duration: 0.5 }}
                className="mt-8"
              >
                <Button variant="primary" onClick={() => scrollTo("#booking")}>
                  Reserve Your Stay
                </Button>
              </motion.div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-charcoal/10 pointer-events-none">
              <span className="font-heading italic text-5xl md:text-6xl">É</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
