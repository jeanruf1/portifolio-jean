"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-24 pb-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Typography */}
        <div className="z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-500 font-mono mb-6 tracking-widest uppercase text-sm"
          >
            {t("hero.subtitle")}
          </motion.h3>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-6xl md:text-[7rem] leading-[0.9] font-bold uppercase text-white mb-8 tracking-tighter"
          >
            <span className="block text-neutral-400">{t("hero.title1")}</span>
            <span className="block">{t("hero.title2")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed mb-12 font-sans font-medium"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-oswald text-lg font-bold tracking-wider uppercase transition-transform hover:scale-105 active:scale-95">
              {t("hero.btn.projects")}
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-neutral-700 text-white font-oswald text-lg font-bold tracking-wider uppercase transition-colors hover:bg-neutral-900 active:scale-95">
              {t("hero.btn.contact")}
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image with solid rounded container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-[4/5] md:aspect-square max-w-lg mx-auto bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800"
        >
          <img 
            src="/profile.png" 
            alt="Jean Rufino" 
            className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-105 hover:grayscale-0"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/600x600/111111/ffffff?text=PROFILE";
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
