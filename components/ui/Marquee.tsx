"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate items to ensure smooth infinite looping
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-white py-6 border-y border-neutral-200">
      <div className="flex w-max">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-black font-oswald text-4xl md:text-6xl font-bold uppercase whitespace-nowrap"
            >
              {item}
              <span className="mx-8 text-neutral-300">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
