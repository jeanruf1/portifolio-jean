"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-24 py-6 bg-black/80 backdrop-blur-md border-b border-neutral-900"
    >
      <div className="text-white font-oswald text-xl font-bold tracking-widest uppercase">
        Jean Rufino
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider text-neutral-400">
          <a href="#projects" className="hover:text-white transition-colors">{t("nav.work")}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t("nav.about")}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t("nav.contact")}</a>
        </div>
        
        <button 
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-bold text-white hover:bg-white hover:text-black transition-all uppercase"
        >
          {language === "pt" ? "EN" : "PT-BR"}
        </button>
      </div>
    </motion.nav>
  );
}
