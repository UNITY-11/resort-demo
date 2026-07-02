import React from 'react';
import Image from 'next/image';

interface CalligraphyFrameProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  rotation?: number;
  variant?: 'arch' | 'oval' | 'shield';
  children?: React.ReactNode;
}

export function CalligraphyFrame({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '', 
  sizes, 
  rotation = 0, 
  variant = 'arch', 
  children 
}: CalligraphyFrameProps) {
  
  // Define SVG masks for the different non-square shapes
  const getClipPath = () => {
    switch(variant) {
      case 'arch':
        // A classic window arch
        return 'polygon(0% 40%, 0% 100%, 100% 100%, 100% 40%, 50% 0%)'; // We'll use CSS border-radius instead for a true arch
      case 'oval':
        return 'ellipse(50% 50% at 50% 50%)';
      case 'shield':
        return 'polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%)';
      default:
        return 'none';
    }
  };

  // True arch uses a combination of border-radius and overflow
  const shapeStyles = {
    arch: { borderRadius: '50% 50% 0 0 / 20% 20% 0 0' },
    oval: { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
    shield: { clipPath: 'polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%)' }
  };

  return (
    <div 
      className={`relative group flex items-center justify-center p-8 md:p-12 ${containerClassName}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Background container to hold the calligraphy SVG frame */}
      <div className="absolute inset-0 z-20 pointer-events-none drop-shadow-xl flex items-center justify-center text-gold">
        
        {variant === 'arch' && (
          <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="none">
            {/* Arch Calligraphy Frame */}
            <path d="M20,60 Q100,0 180,60 L180,280 Q100,300 20,280 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15,55 Q100,-10 185,55 L185,285 Q100,310 15,285 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            
            {/* Top Flourish */}
            <path d="M80,30 Q100,10 120,30 Q130,40 100,50 Q70,40 80,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="20" r="2" fill="currentColor" />
            
            {/* Bottom Corners */}
            <path d="M20,280 Q10,290 30,295 Q40,290 20,280" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M180,280 Q190,290 170,295 Q160,290 180,280" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}

        {variant === 'oval' && (
          <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="none">
            {/* Oval Calligraphy Frame */}
            <ellipse cx="100" cy="150" rx="80" ry="130" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="100" cy="150" rx="90" ry="140" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            
            {/* Top/Bottom Calligraphy Swirls */}
            <path d="M70,10 Q100,-10 130,10 Q140,20 100,30 Q60,20 70,10 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M70,290 Q100,310 130,290 Q140,280 100,270 Q60,280 70,290 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Side Flourishes */}
            <path d="M10,130 Q-10,150 10,170 Q20,160 30,150 Q20,140 10,130 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M190,130 Q210,150 190,170 Q180,160 170,150 Q180,140 190,130 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}

        {variant === 'shield' && (
          <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="none">
            {/* Shield Calligraphy Frame */}
            <path d="M100,20 L180,40 L180,180 Q100,280 100,280 Q100,280 20,180 L20,40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M100,10 L190,35 L190,185 Q100,295 100,295 Q100,295 10,185 L10,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            
            {/* Calligraphy Accents */}
            <circle cx="100" cy="20" r="3" fill="currentColor" />
            <circle cx="20" cy="40" r="2" fill="currentColor" />
            <circle cx="180" cy="40" r="2" fill="currentColor" />
            <path d="M90,260 Q100,270 110,260" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>

      {/* The Masked Image */}
      <div 
        className="relative w-full h-full overflow-hidden bg-forest/20 transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        style={shapeStyles[variant]}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes={sizes}
        />
        {/* Subtle vintage overlay */}
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none" />
        
        {/* Text Overlay area */}
        {children}
      </div>
    </div>
  );
}
