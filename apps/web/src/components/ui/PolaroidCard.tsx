"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PolaroidCardProps {
  src: string;
  alt: string;
  caption: string;
  author?: string;
  rotation?: number;
  className?: string;
  hasTape?: boolean; // Deprecated
  hasStamp?: boolean; // Deprecated
  hasWaxSeal?: boolean; // Deprecated
}

export function PolaroidCard({
  src,
  alt,
  caption,
  author,
  rotation = 0,
  className = "",
}: PolaroidCardProps) {
  return (
    <motion.div
      initial={{ rotate: rotation, opacity: 0, y: 30 }}
      whileInView={{ rotate: rotation, opacity: 1, y: 0 }}
      whileHover={{ rotate: 0, scale: 1.03, y: -10, zIndex: 30 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`relative bg-ivory p-4 md:p-6 pb-12 md:pb-16 w-full max-w-[320px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-stone/10 hover:shadow-[0_20px_40px_rgba(201,169,110,0.15)] hover:border-gold/30 transition-all duration-500 ${className}`}
    >
      {/* Sleek Photo Frame */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          sizes="320px"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Caption area - Modern Typography */}
      <div className="absolute bottom-5 md:bottom-6 left-6 md:left-8 right-6 md:right-8">
        <p className="font-heading text-base md:text-lg text-charcoal/90 leading-snug">
          {caption}
        </p>
        
        {author && (
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[9px] tracking-[0.25em] text-gold uppercase font-body">
              {author}
            </p>
          </div>
        )}
      </div>
      
      {/* Modern architectural line detail at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gold/50" />
    </motion.div>
  );
}
