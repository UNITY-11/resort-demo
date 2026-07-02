"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  speed?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  containerClassName = "",
  priority = false,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40 * speed, 40 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${containerClassName}`}
    >
      <motion.div style={{ y, scale }} className="w-full h-full">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${className}`}
            sizes={sizes}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            priority={priority}
            className={`object-cover w-full h-full ${className}`}
            sizes={sizes}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
