"use client";

import { motion } from "framer-motion";
import { MaskingTape } from "./MaskingTape";

interface HandwrittenNoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
  rotation?: number;
  hasTape?: boolean;
}

export function HandwrittenNote({
  children,
  author,
  className = "",
  rotation = -2,
  hasTape = true,
}: HandwrittenNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className={`relative bg-cream/95 backdrop-blur-sm p-6 md:p-8 max-w-[280px] shadow-paper ${className}`}
      style={{
        clipPath: "polygon(0% 0%, 98% 2%, 100% 100%, 2% 98%)", // slight imperfection
      }}
    >
      {hasTape && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <MaskingTape rotation={-1.5} width="w-16" />
        </div>
      )}

      <div className="font-heading italic text-lg md:text-xl text-charcoal/80 leading-relaxed">
        {children}
      </div>

      {author && (
        <div className="mt-4 flex items-center gap-3">
          <div className="w-8 h-px bg-gold/50" />
          <p className="text-[10px] tracking-[0.2em] text-stone uppercase font-body">
            {author}
          </p>
        </div>
      )}
    </motion.div>
  );
}
