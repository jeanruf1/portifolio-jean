"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  tags: string[];
}

export default function Projects({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-32 px-6 md:px-24 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Sticky Left Sidebar */}
        <div className="w-full md:w-1/3 relative">
          <div className="sticky top-32">
            <h3 className="text-neutral-500 font-mono mb-6 tracking-widest uppercase text-sm">
              {t("projects.subtitle")}
            </h3>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-12">
              <span className="block text-neutral-400">{t("projects.title1")}</span>
              <span className="block">{t("projects.title2")}</span>
            </h2>
            <a 
              href="https://github.com/jeanruf1" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 border-black font-oswald text-lg font-bold tracking-wider uppercase transition-all hover:bg-black hover:text-white"
            >
              {t("projects.github")}
            </a>
          </div>
        </div>

        {/* Scrollable Right Projects List */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group p-8 md:p-12 border-2 border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors"
            >
              <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 group-hover:underline decoration-4 underline-offset-4">
                {proj.title}
              </h3>
              <p className="text-lg text-neutral-600 mb-10 font-sans font-medium leading-relaxed">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
