"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, isValidElement, cloneElement, Children } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  splitLetters?: boolean;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = false,
  splitLetters = false,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-8%" });

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      }
    }
  };

  const letterVariant = {
    hidden: { 
      opacity: 0,
      filter: "blur(12px)",
      rotateX: 80,
      rotateZ: direction === "up" ? 15 : direction === "down" ? -15 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      rotateZ: 0,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Recursively wrap text nodes in motion.span
  const splitTextToLetters = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.split("").map((char, index) => {
        if (char === " ") {
          return <span key={`space-${index}`}> </span>;
        }
        return (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariant}
            style={{ display: "inline-block", transformOrigin: "bottom center" }}
          >
            {char}
          </motion.span>
        );
      });
    }

    if (isValidElement(node)) {
      return cloneElement(
        node as React.ReactElement<any>,
        { ...node.props },
        node.props.children ? Children.map(node.props.children, splitTextToLetters) : undefined
      );
    }

    if (Array.isArray(node)) {
      return Children.map(node, splitTextToLetters);
    }

    return node;
  };

  return (
    <div style={{ perspective: "1000px" }} className={className}>
      {splitLetters ? (
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {splitTextToLetters(children)}
        </motion.div>
      ) : (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {
              opacity: 0,
              y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
              x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
              filter: "blur(4px)",
              transition: { duration: 0.4 }
            },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
