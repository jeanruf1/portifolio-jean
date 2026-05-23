"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Simple dictionary
const translations = {
  pt: {
    "nav.work": "TRABALHOS",
    "nav.about": "SOBRE MIM",
    "nav.contact": "CONTATO",
    "hero.subtitle": "// ENGENHARIA DE DADOS & IA",
    "hero.title1": "OLÁ, EU SOU",
    "hero.title2": "JEAN RUFINO.",
    "hero.desc": "Profissional em engenharia de dados, orquestração de workflows, arquiteturas RAG e pipelines escaláveis. Foco no design e implementação de soluções automatizadas para embasar decisões corporativas de ponta a ponta e desenvolvimento de ferramentas web.",
    "hero.btn.projects": "VER PROJETOS",
    "hero.btn.contact": "FALAR COMIGO",
    "projects.subtitle": "// TRABALHOS SELECIONADOS",
    "projects.title1": "Construindo experiências",
    "projects.title2": "que importam.",
    "projects.github": "Ver Todos no GitHub ↗",
    "tech.subtitle": "// TECH STACK",
    "tech.title1": "Ferramentas que impulsionam",
    "tech.title2": "a inovação.",
    "skills.subtitle": "// TECH STACK & SKILLS",
    "skills.title1": "Visão geral das",
    "skills.title2": "ferramentas.",
    "exp.subtitle": "// EXPERIÊNCIA",
    "exp.title1": "Jornada",
    "exp.title2": "profissional.",
    "contact.subtitle": "// VAMOS CONVERSAR",
    "contact.title1": "Vamos construir",
    "contact.title2": "juntos.",
    "contact.desc": "Tem um projeto em mente ou quer bater um papo sobre dados, IA e automação? Fique à vontade para me mandar uma mensagem.",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.form.email": "Email",
    "contact.form.msg": "Mensagem",
    "contact.form.btn": "ENVIAR MENSAGEM",
    "contact.form.success": "Mensagem enviada com sucesso!",
    "contact.form.error": "Erro ao enviar a mensagem. Tente novamente.",
    "footer.rights": "Todos os direitos reservados."
  },
  en: {
    "nav.work": "WORK",
    "nav.about": "ABOUT ME",
    "nav.contact": "CONTACT",
    "hero.subtitle": "// DATA ENGINEERING & AI",
    "hero.title1": "HI, I AM",
    "hero.title2": "JEAN RUFINO.",
    "hero.desc": "Data Engineer and expert in workflow orchestration, RAG architectures, and scalable pipelines. Focused on designing and implementing end-to-end automated solutions to drive corporate decision-making and developing robust web applications.",
    "hero.btn.projects": "VIEW PROJECTS",
    "hero.btn.contact": "LET'S TALK",
    "projects.subtitle": "// SELECTED WORK",
    "projects.title1": "Building experiences",
    "projects.title2": "that matter.",
    "projects.github": "View All on GitHub ↗",
    "tech.subtitle": "// TECH STACK",
    "tech.title1": "Tools that power",
    "tech.title2": "innovation.",
    "skills.subtitle": "// TECH STACK & SKILLS",
    "skills.title1": "Toolkit",
    "skills.title2": "Overview.",
    "exp.subtitle": "// EXPERIENCE",
    "exp.title1": "Professional",
    "exp.title2": "journey.",
    "contact.subtitle": "// GET IN TOUCH",
    "contact.title1": "Let's build",
    "contact.title2": "together.",
    "contact.desc": "Have a project in mind or want to chat about data, AI, and automation? Feel free to send me a message.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.form.email": "Email",
    "contact.form.msg": "Message",
    "contact.form.btn": "SEND MESSAGE",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "Error sending the message. Please try again.",
    "footer.rights": "All rights reserved."
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["pt"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};