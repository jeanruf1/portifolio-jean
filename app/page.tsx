import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export const revalidate = 0; // Disable static rendering for API fetch

async function getProjects() {
  const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

const techStack = [
  "Python", "React", "Next.js", "Docker", "Kubernetes", "AWS", "n8n", "PostgreSQL", 
  "MongoDB", "TypeScript", "LangChain", "RAG", "SQL Server", "Power BI", "Flask", 
  "Apache Spark", "Excel Avançado", "OpenAI API", "TailwindCSS", "Framer Motion"
];

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <Hero />
      
      <Marquee items={techStack} />

      <Projects projects={projects} />
      
      <Experience />
      
      <Contact />
      
      <footer className="py-8 text-center text-neutral-500 border-t border-neutral-900 bg-black text-xs uppercase tracking-widest font-mono">
        <p>© 2026 Jean Pereira. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/jeanruf1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/jeanrufino/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
