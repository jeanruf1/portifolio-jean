"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 md:px-24 bg-white text-black border-t-2 border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
        
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-neutral-500 font-mono mb-6 tracking-widest uppercase text-sm">
              {t("contact.subtitle")}
            </h3>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
              <span className="block text-neutral-400">{t("contact.title1")}</span>
              <span className="block">{t("contact.title2")}</span>
            </h2>
            <p className="text-neutral-600 font-sans text-lg mb-12 leading-relaxed max-w-lg">
              {t("contact.desc")}
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:jeanrufinolima2004@gmail.com" className="flex items-center gap-6 group w-max">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">{t("contact.email")}</div>
                  <div className="font-mono font-medium text-lg group-hover:underline">jeanrufinolima2004@gmail.com</div>
                </div>
              </a>

              <a href="tel:+5511991042140" className="flex items-center gap-6 group w-max">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">{t("contact.phone")}</div>
                  <div className="font-mono font-medium text-lg group-hover:underline">+55 (11) 99104-2140</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-14 bg-neutral-50 border-2 border-black flex flex-col gap-8" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-black mb-3">{t("contact.form.email")}</label>
              <input type="email" placeholder="hello@example.com" className="w-full bg-white border-2 border-black px-6 py-4 text-black focus:outline-none focus:ring-4 focus:ring-black/10 transition-all font-mono" />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-black mb-3">{t("contact.form.msg")}</label>
              <textarea rows={5} placeholder="..." className="w-full bg-white border-2 border-black px-6 py-4 text-black focus:outline-none focus:ring-4 focus:ring-black/10 transition-all resize-none font-mono" />
            </div>
            <button type="submit" className="self-start px-10 py-5 bg-black text-white font-oswald text-xl font-bold tracking-wider uppercase transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 flex items-center gap-4">
              {t("contact.form.btn")}
              <ArrowRight size={24} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
