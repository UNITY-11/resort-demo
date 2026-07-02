"use client";

import { HiArrowRight } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa6";
import { BotanicalSketch2 } from "@/lib/decorative-svgs"; 

// A small flourish SVG for the section headers
const Flourish = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block text-gold ml-2">
    <path d="M 10 50 C 30 20 80 20 90 50 C 90 80 70 90 50 70 C 30 50 10 70 10 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="10" cy="50" r="3" fill="currentColor" />
  </svg>
);

// Large Top/Bottom Flourish for the Heading
const HeadingFlourish = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`inline-block text-gold ${className}`}>
    <path d="M 100 20 C 130 0 160 40 190 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M 100 20 C 70 40 40 0 10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="20" r="2" fill="currentColor" />
    <circle cx="190" cy="20" r="2" fill="currentColor" />
    <path d="M 90 20 C 95 10 105 10 110 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-forest text-ivory font-body overflow-hidden">
      {/* Repeating Scalloped Border at the top */}
      <div 
        className="w-full h-[16px] md:h-[20px] absolute top-0 left-0 z-20 opacity-50"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 C 10 20 30 20 40 0" fill="none" stroke="%23D4AF37" stroke-opacity="1" stroke-width="2"/><circle cx="20" cy="10" r="1.5" fill="%23D4AF37" fill-opacity="1"/></svg>')`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: '40px 20px',
        }}
      />
      
      {/* Background Large Swirls */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row items-center justify-between opacity-5 pointer-events-none overflow-hidden">
        <BotanicalSketch2 className="w-[120%] h-auto md:w-[800px] text-ivory transform -rotate-45 -translate-y-1/4 -translate-x-1/4" />
        <BotanicalSketch2 className="w-[120%] h-auto md:w-[800px] text-ivory transform scale-x-[-1] rotate-45 translate-y-1/4 translate-x-1/4" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-8 relative z-10">
        
        {/* Top Centered Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <HeadingFlourish className="w-32 h-8 mb-4 transform scale-x-[-1]" />
          
          <h2 className="font-heading text-xl md:text-3xl lg:text-4xl tracking-widest uppercase mb-10 leading-relaxed max-w-5xl text-ivory">
            South India's Jewel ,<br/>
            The Majestic Premium Luxury Five Star Resort in Munnar
          </h2>
          
          <button className="flex items-center gap-4 px-10 py-3 bg-gold text-forest hover:bg-ivory hover:text-charcoal transition-colors duration-300 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold shadow-sm">
            Book Now <HiArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* VISIT US */}
          <div className="md:col-span-3">
            <h3 className="font-heading text-base md:text-lg font-semibold uppercase tracking-widest mb-6 flex items-center gap-2">
              Visit Us <Flourish />
            </h3>
            <div className="text-sm leading-loose opacity-80">
              <p>A Unit of GF Hotels and Resorts Pvt Ltd</p>
              <p>The Grand Cliff Resort</p>
              <p>Viripara, Kallar - Mankulam Rd,</p>
              <p>Munnar, Kerala 685565</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-6 lg:ml-12">
            <h3 className="font-heading text-base md:text-lg font-semibold uppercase tracking-widest mb-6 flex items-center gap-2">
              Quick Links <Flourish />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-sm opacity-80">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gold transition-colors">Home</a>
                <a href="#" className="hover:text-gold transition-colors">Facilities</a>
                <a href="#" className="hover:text-gold transition-colors">Rooms & Suites</a>
                <a href="#" className="hover:text-gold transition-colors">Activities</a>
                <a href="#" className="hover:text-gold transition-colors">Offers</a>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gold transition-colors">Mice & Weddings</a>
                <a href="#" className="hover:text-gold transition-colors">Dining</a>
                <a href="#" className="hover:text-gold transition-colors">Gallery</a>
                <a href="#" className="hover:text-gold transition-colors">Reviews</a>
                <a href="#" className="hover:text-gold transition-colors">Contact</a>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gold transition-colors">Munnar</a>
                <a href="#" className="hover:text-gold transition-colors">Blog</a>
                <a href="#" className="hover:text-gold transition-colors">Enquiry</a>
                <a href="#" className="hover:text-gold transition-colors">Book Online</a>
                <a href="#" className="hover:text-gold transition-colors">Terms & Condition</a>
              </div>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-3 flex flex-col justify-end pb-8">
            <div className="space-y-6 text-sm opacity-80">
              <a href="tel:+919249097342" className="flex items-center gap-4 hover:text-gold transition-colors group">
                <FaPhone className="text-[#8b6508] text-lg group-hover:scale-110 transition-transform" />
                +91 9249097342
              </a>
              <a href="mailto:reservations@thegrandcliff.com" className="flex items-center gap-4 hover:text-gold transition-colors group">
                <FaEnvelope className="text-[#8b6508] text-lg group-hover:scale-110 transition-transform" />
                reservations@thegrandcliff.com
              </a>
              
              <div className="flex items-center gap-6 pt-6 text-gold">
                <a href="#" className="hover:text-ivory hover:-translate-y-1 transition-all"><FaFacebookF className="text-xl" /></a>
                <a href="#" className="hover:text-ivory hover:-translate-y-1 transition-all"><FaInstagram className="text-xl" /></a>
                <a href="#" className="hover:text-ivory hover:-translate-y-1 transition-all"><FaXTwitter className="text-xl" /></a>
                <a href="#" className="hover:text-ivory hover:-translate-y-1 transition-all"><FaLinkedinIn className="text-xl" /></a>
                <a href="#" className="hover:text-ivory hover:-translate-y-1 transition-all"><FaYoutube className="text-xl" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-ivory/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase opacity-70">
          <p>© {new Date().getFullYear()} ELARA RESORT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
