"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/Button";

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b border-transparent ${
          isScrolled && !isOpen
            ? "py-3 md:py-4 bg-ivory/90 backdrop-blur-md shadow-sm border-b-gold/10"
            : "py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* Empty div to keep flex justify-between balanced if needed, or just let logo be absolute */}
          <div className="hidden lg:block"></div>

          {/* Logo (Centered) */}
          <div 
            className="cursor-pointer group flex items-center absolute left-1/2 -translate-x-1/2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-heading italic text-3xl md:text-4xl text-gold transition-colors duration-300">
              Élara
            </span>
            <span className={`hidden md:inline-block text-[9px] tracking-[0.3em] uppercase ml-4 mt-2 font-body font-bold ${isOpen ? 'text-ivory/70' : 'text-stone'}`}>
              Wilderness Reserve
            </span>
          </div>

          {/* Spacer for mobile to push toggle to right since logo is absolute */}
          <div className="lg:hidden w-10"></div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="group relative overflow-hidden"
              >
                <span className={`text-[10px] tracking-[0.2em] uppercase font-body font-bold transition-colors duration-300 group-hover:text-gold ${isOpen ? 'text-ivory' : 'text-charcoal'}`}>
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            
            <Button size="sm" onClick={() => scrollTo("#booking")}>
              Reserve
            </Button>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-forest paper-texture flex flex-col justify-center px-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
            
            <div className="flex flex-col gap-6 items-center text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory italic hover:text-gold transition-colors duration-300"
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
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ivory/10 pointer-events-none">
              <span className="font-heading italic text-5xl md:text-6xl">É</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
