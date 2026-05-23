"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const experiences = {
  pt: [
    {
      role: "Analista Júnior – Soluções de IA e Engenharia de Dados",
      company: "Travelex Bank",
      date: "09/2025 – Atual",
      desc: "Estruturação de bancos relacionais e vetoriais, arquiteturas RAG integradas a APIs de LLMs, construção de microsserviços em Python e automações escaláveis no n8n.",
      tech: ["Python", "LangChain", "OpenAI", "n8n", "RAG", "Kubernetes", "Spark", "RabbitMQ", "SFTP", "Grafana"]
    },
    {
      role: "Estagiário em Análise de Dados e RPA",
      company: "Travelex Bank",
      date: "07/2024 – 09/2025",
      desc: "Desenvolvimento de dashboards com PowerBI, rotinas ETL em Python com Pandas, modelagem de BDs e desenvolvimento de microsserviços Flask em ambientes Windows Server/Linux.",
      tech: ["Python", "Pandas", "ApexCharts", "SQL Server", "Flask", "PowerBI", "Power automate"]
    },
    {
      role: "Auxiliar de Faturamento de Dados (Aprendiz)",
      company: "Hospital de Caieiras (AMIL)",
      date: "02/2023 – 03/2024",
      desc: "Tratamento de dados e automações para higienização de grandes volumes de registros operacionais.",
      tech: ["Excel Avançado", "VBA", "openpyxl"]
    }
  ],
  en: [
    {
      role: "Junior Data Engineer & AI Solutions Analyst",
      company: "Travelex Bank",
      date: "09/2025 – Present",
      desc: "Structuring relational and vector databases, RAG architectures integrated with LLM APIs, building Python microservices, and scalable n8n automations.",
      tech: ["Python", "LangChain", "OpenAI", "n8n", "RAG", "Kubernetes", "Spark", "RabbitMQ", "SFTP", "Grafana"]
    },
    {
      role: "Data Analytics & RPA Intern",
      company: "Travelex Bank",
      date: "07/2024 – 09/2025",
      desc: "Development of dashboards with ApexCharts, Python ETL routines with Pandas, DB modeling, and deployment of Flask microservices in Windows Server/Linux environments.",
      tech: ["Python", "Pandas", "ApexCharts", "SQL Server", "Flask", "PowerBI", "Power automate"]
    },
    {
      role: "Data Billing Assistant (Apprentice)",
      company: "Hospital de Caieiras (AMIL)",
      date: "02/2023 – 03/2024",
      desc: "Data processing and automation for cleaning large volumes of operational records.",
      tech: ["Excel Avançado", "VBA", "openpyxl"]
    }
  ]
};

export default function Experience() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6 md:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
          <h3 className="text-neutral-500 font-mono mb-6 tracking-widest uppercase text-sm">
            {t("exp.subtitle")}
          </h3>
          <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
            <span className="block text-neutral-400">{t("exp.title1")}</span>
            <span className="block">{t("exp.title2")}</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-0 space-y-16 pb-8">
          {experiences[language].map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-3 w-4 h-4 rounded-full bg-white border-[4px] border-black transition-transform group-hover:scale-150" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h4 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-tight">{exp.role}</h4>
                <span className="mt-2 md:mt-0 font-mono text-sm text-neutral-500">{exp.date}</span>
              </div>
              
              <div className="text-neutral-300 font-bold uppercase tracking-widest mb-6">
                {exp.company}
              </div>
              
              <p className="text-neutral-400 font-sans text-lg leading-relaxed mb-8 max-w-3xl">
                {exp.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-300">
                    {tech}
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
