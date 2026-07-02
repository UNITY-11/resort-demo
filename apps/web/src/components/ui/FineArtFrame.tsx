import React from 'react';
import Image from 'next/image';

interface FineArtFrameProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  rotation?: number;
  children?: React.ReactNode;
}

export function FineArtFrame({ src, alt, className = '', containerClassName = '', sizes, rotation = 0, children }: FineArtFrameProps) {
  return (
    <div 
      className={`relative p-4 md:p-6 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] ${containerClassName}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Outer Thin Border */}
      <div className="absolute inset-1 border-[0.5px] border-charcoal/20 z-20 pointer-events-none" />
      
      {/* Inner Gold Border (Matting inner edge) */}
      <div className="absolute inset-[16px] md:inset-[24px] border-[2px] border-gold z-20 pointer-events-none mix-blend-multiply" />
      
      {/* The Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes={sizes}
        />
        {/* Subtle warming filter */}
        <div className="absolute inset-0 bg-[#c5a059]/10 mix-blend-color pointer-events-none" />
        
        {/* Content overlay */}
        {children}
      </div>
    </div>
  );
}
