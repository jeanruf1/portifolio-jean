import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-neutral-500 border-t border-neutral-900 bg-background text-sm">
        <p>© 2026 Jean Pereira Rufino de Lima. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/jeanruf1" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/jeanrufino/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
