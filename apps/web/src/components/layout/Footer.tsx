"use client";

import { BotanicalSketch2 } from "@/lib/decorative-svgs";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-ivory py-24 md:py-32 canvas-texture overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="font-heading italic text-5xl md:text-6xl text-gold mb-6">Élara</h2>
            <p className="text-ivory/60 text-sm font-body font-light max-w-sm mb-10 leading-relaxed">
              A hidden sanctuary where wild nature meets refined luxury. Every moment crafted for those who seek the extraordinary.
            </p>
            
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-body">Coordinates</p>
              <p className="font-heading italic text-xl text-ivory/80">04° 17' N, 73° 32' E</p>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-gold font-body mb-8">Discover</h3>
            <ul className="space-y-4">
              {['The Story', 'Villas', 'Experiences', 'Gallery', 'Journal'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body text-sm tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-gold font-body mb-8">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:concierge@elara.resort" className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body text-sm tracking-wide">
                  concierge@elara.resort
                </a>
              </li>
              <li>
                <a href="tel:+12345678900" className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body text-sm tracking-wide">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body text-sm tracking-wide">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-gold font-body mb-8">The Dispatch</h3>
            <p className="text-ivory/60 text-sm font-body font-light mb-6">
              Subscribe to receive exclusive editorial content and invitations to seasonal experiences.
            </p>
            
            <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-ivory/20 pb-2 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold font-body text-sm transition-colors duration-300"
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-2 text-[10px] tracking-[0.2em] uppercase text-gold font-body hover:text-ivory transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-ivory/40 font-body">
          <p>© {new Date().getFullYear()} Élara Resort. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>

      {/* Decorative Botanical */}
      <div className="absolute top-0 right-0 z-0 text-gold opacity-10 pointer-events-none transform -scale-x-100">
        <BotanicalSketch2 className="w-[600px] h-[600px]" />
      </div>
    </footer>
  );
}
