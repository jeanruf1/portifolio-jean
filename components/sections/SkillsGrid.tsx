"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

import { 
  SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiMysql, SiN8N, 
  SiLangchain, SiOpenai, SiAnthropic, SiApacheflink, SiApacheairflow, 
  SiDbt, SiSnowflake, SiDatabricks, SiGooglebigquery, SiFramer, 
  SiRobotframework, SiSelenium, SiNextdotjs
} from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const skillsMap = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "Tailwind", Icon: SiTailwindcss },
  
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", Icon: FaAws },
  { name: "Azure", Icon: TbBrandAzure },
  
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
  { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
  { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  
  { name: "n8n", Icon: SiN8N },
  { name: "LangChain", Icon: SiLangchain },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Claude", Icon: SiAnthropic },
  { name: "Databricks", Icon: SiDatabricks },
  { name: "BigQuery", Icon: SiGooglebigquery },
  { name: "Power BI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg" },
  { name: "Excel", Icon: PiMicrosoftExcelLogo },
  { name: "Power Apps", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerapps.svg" },
  { name: "Power Automate", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerautomate.svg" },
  { name: "Robot Framework", Icon: SiRobotframework },
  { name: "Selenium", Icon: SiSelenium },
  { name: "RAG", textLogo: "RAG" },
  { name: "Kanban", textLogo: "KANBAN" },
];

export default function SkillsGrid() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 px-6 md:px-24 bg-neutral-50 text-black border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h3 className="text-neutral-500 font-mono mb-6 tracking-widest uppercase text-sm">
            {t("skills.subtitle")}
          </h3>
          <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
            <span className="block text-neutral-400">{t("skills.title1")}</span>
            <span className="block">{t("skills.title2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsMap.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.1 }}
              className="group aspect-square flex flex-col items-center justify-center p-6 border-2 border-neutral-200 bg-white hover:border-black transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                {skill.Icon ? (
                  <skill.Icon className="w-full h-full text-neutral-400 group-hover:text-black transition-colors" />
                ) : skill.icon ? (
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="font-oswald font-bold text-xl text-neutral-400 group-hover:text-black transition-colors">
                    {skill.textLogo}
                  </span>
                )}
              </div>
              <span className="font-mono text-xs font-bold text-center uppercase text-neutral-600 group-hover:text-black">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
