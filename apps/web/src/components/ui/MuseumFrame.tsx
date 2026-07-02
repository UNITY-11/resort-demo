import React from 'react';
import Image from 'next/image';

interface MuseumFrameProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  rotation?: number;
  children?: React.ReactNode;
}

export function MuseumFrame({ src, alt, className = '', containerClassName = '', sizes, rotation = 0, children }: MuseumFrameProps) {
  return (
    <div 
      className={`relative group ${containerClassName}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Outer Ornate Gold Frame using CSS ridge */}
      <div 
        className="w-full h-full relative"
        style={{
          boxSizing: 'border-box',
          backgroundColor: '#222', // Behind the matting
          borderStyle: 'ridge',
          borderWidth: 'clamp(12px, 2vw, 24px)',
          borderColor: '#d4af37 #c5a059 #8b6508 #b8860b', // Gold shades
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 15px 35px rgba(0,0,0,0.4)',
          padding: 'clamp(8px, 1.5vw, 16px)'
        }}
      >
        {/* Matting (Ivory Passe-partout) */}
        <div 
          className="w-full h-full relative bg-ivory"
          style={{
            padding: 'clamp(16px, 3vw, 40px)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2), 0 0 15px rgba(0,0,0,0.6)'
          }}
        >
          {/* Inner gold fillet around the art */}
          <div 
            className="w-full h-full relative overflow-hidden"
            style={{
              border: '3px solid #8b6508',
              boxShadow: '0 0 8px rgba(0,0,0,0.5)'
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover ${className}`}
              sizes={sizes}
            />
            {/* Dark gradient for text legibility over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            {/* Content overlay (like the Editorial Overlay) */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
