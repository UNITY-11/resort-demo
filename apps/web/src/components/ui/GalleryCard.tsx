"use client";

import React from "react";
import Image from "next/image";
import { TornPaper } from "./TornPaper";

interface GalleryCardProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export function GalleryCard({ 
  src, 
  alt, 
  caption, 
  className = "" 
}: GalleryCardProps) {
  return (
    <div className={`relative w-full drop-shadow-xl ${className}`}>
      
      {/* Tape with pin (Brand Colors) */}
      <div className="absolute -top-3 left-8 z-30 w-20 h-8 bg-forest shadow-md transform -rotate-3 flex items-center justify-end pr-3">
        <div className="w-3 h-3 rounded-full bg-gold shadow-inner" />
      </div>

      {/* Main Card */}
      <div className="relative bg-ivory w-full pt-12 pb-6 px-6 md:px-8 flex flex-col items-center text-center">
        
        {/* Caption Text (Brand Colors) */}
        <div className="w-full mb-6">
          <h3 className="font-heading text-xl md:text-2xl uppercase tracking-widest text-charcoal font-semibold leading-tight">
            {caption}
          </h3>
          <p className="text-gold font-body text-xs mt-3 uppercase tracking-widest font-semibold">
            {alt}
          </p>
        </div>

        {/* Image Area */}
        <div className="relative w-full aspect-[3/2] overflow-hidden mb-2">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      </div>

      {/* Realistic Torn Paper Bottom Edge */}
      <TornPaper 
        position="top" 
        color="var(--color-ivory)" 
        className="absolute top-full left-0 w-full z-20 drop-shadow-md" 
      />
    </div>
  );
}
