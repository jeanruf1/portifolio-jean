"use client";
import React from "react";
import { FadeIn } from "./Animations";

export const PillBadge = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <FadeIn delay={delay}>
      <span className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-300 backdrop-blur-md transition-all hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] cursor-default">
        {children}
      </span>
    </FadeIn>
  );
};
