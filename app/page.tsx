import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Github, Linkedin } from "lucide-react";
import { allProjects } from "@/data/projects";

const techStack = [
  "Python", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind", "Docker",
  "Kubernetes", "AWS", "Azure", "PostgreSQL", "MongoDB", "SQL Server", "SQL",
  "TypeScript", "Apache Spark", "Elasticsearch", "Grafana", "RabbitMQ", "Hadoop",
  "Terraform", "Pandas", "Flask", "Django", "n8n", "LangChain", "OpenAI", "Claude",
  "Apache Flink", "Airflow", "dbt", "Snowflake", "Databricks", "BigQuery", "Redshift",
  "Power BI", "Excel", "Power Apps", "Power Automate", "Framer Motion", "Robot Framework", "Selenium", "RAG", "Kanban"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <Hero />
      
      <Marquee items={techStack} />

      <SkillsGrid />

      <Projects projects={allProjects} />
      
      <Experience />
      
      <Contact />
      
      <footer className="py-12 text-center text-neutral-500 border-t border-neutral-900 bg-black text-xs uppercase tracking-widest font-mono">
        <p className="mb-6">© 2026 Jean Rufino. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/jeanruf1" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Github size={18} /> GITHUB
          </a>
          <a href="https://linkedin.com/in/jeanrufino/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Linkedin size={18} /> LINKEDIN
          </a>
        </div>
      </footer>
    </main>
  );
}
