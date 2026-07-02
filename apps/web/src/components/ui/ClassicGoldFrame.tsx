import React from 'react';
import Image from 'next/image';

interface ClassicGoldFrameProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  children?: React.ReactNode;
}

// Intricate Calligraphy Corner SVG to mimic the vintage gold frame
const OrnateCorner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Corner Shape */}
    <path d="M 0 0 L 100 0 C 100 0 90 10 70 10 C 40 10 30 40 30 70 C 30 90 40 100 40 100 L 0 100 L 0 0 Z" fill="currentColor" fillOpacity="0.1"/>
    
    {/* Outer Stroke */}
    <path d="M 5 5 L 90 5 C 90 5 80 15 60 15 C 30 15 15 30 15 60 C 15 80 5 90 5 90 L 5 5 Z" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Main Filigree Swirls */}
    <path d="M 25 25 C 50 25 65 45 45 65 C 30 80 15 60 30 45 C 40 35 55 40 50 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 15 35 C 35 30 50 40 40 55 C 35 65 25 65 20 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Additional flourish loops */}
    <path d="M 60 15 C 65 30 75 35 85 25 C 90 15 95 10 95 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M 15 60 C 30 65 35 75 25 85 C 15 90 10 95 10 95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Dots and Accents */}
    <circle cx="70" cy="30" r="3" fill="currentColor" />
    <circle cx="30" cy="70" r="3" fill="currentColor" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
    <path d="M 80 10 C 85 20 95 15 100 5 C 90 0 80 5 80 10 Z" fill="currentColor" />
    <path d="M 10 80 C 20 85 15 95 5 100 C 0 90 5 80 10 80 Z" fill="currentColor" />
  </svg>
);

export function ClassicGoldFrame({ src, alt, className = '', containerClassName = '', sizes, children }: ClassicGoldFrameProps) {
  return (
    <div className={`relative p-6 md:p-8 bg-ivory shadow-xl ${containerClassName}`}>
      {/* Ivory Matting Background */}
      <div className="absolute inset-0 z-0 bg-[#FAF9F6]" />
      
      {/* Outer Thin Border */}
      <div className="absolute inset-2 border border-gold/40 z-20 pointer-events-none" />
      
      {/* Inner Chain/Geometric Double Border */}
      <div className="absolute inset-[16px] md:inset-[20px] border-[4px] border-double border-gold/60 z-20 pointer-events-none mix-blend-multiply" />
      
      {/* Decorative Ornate Corners */}
      <OrnateCorner className="absolute top-2 left-2 w-12 h-12 md:w-16 md:h-16 text-[#c5a059] z-30 pointer-events-none drop-shadow-md" />
      <OrnateCorner className="absolute top-2 right-2 w-12 h-12 md:w-16 md:h-16 text-[#c5a059] z-30 pointer-events-none drop-shadow-md rotate-90" />
      <OrnateCorner className="absolute bottom-2 right-2 w-12 h-12 md:w-16 md:h-16 text-[#c5a059] z-30 pointer-events-none drop-shadow-md rotate-180" />
      <OrnateCorner className="absolute bottom-2 left-2 w-12 h-12 md:w-16 md:h-16 text-[#c5a059] z-30 pointer-events-none drop-shadow-md -rotate-90" />
      
      {/* Inner Image Container */}
      <div className="relative w-full h-full overflow-hidden ring-1 ring-gold/30">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes={sizes}
        />
        {/* Subtle vintage overlay on the image */}
        <div className="absolute inset-0 bg-gold/5 mix-blend-overlay pointer-events-none" />
        
        {/* Content overlay */}
        {children}
      </div>
    </div>
  );
}
