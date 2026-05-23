import { FadeIn } from "../ui/Animations";

// Subset of projects to highlight in the main view
const projects = [
  {
    title: "Plataforma de Automação de KYC e Onboarding",
    desc: "Solução ponta a ponta com OCR e n8n para preenchimento automático, com módulo de análise estratégica baseado em dados.",
    tags: ["n8n", "OCR", "Python", "Data Analysis"],
    link: "https://github.com/jeanruf1"
  },
  {
    title: "Sistema Gestor de Demandas Corporativas",
    desc: "Plataforma com front-end gerencial e orquestração back-end para gerenciar regras de negócio e rastrear pedidos internos.",
    tags: ["React", "Next.js", "Node.js"],
    link: "https://github.com/jeanruf1"
  },
  {
    title: "Plataforma de IA para o Setor Educacional",
    desc: "Solução B2B RAG para criação automatizada de avaliações, incluindo OCR para materiais antigos e alinhamento pedagógico.",
    tags: ["RAG", "LLMs", "Computer Vision", "Python"],
    link: "https://github.com/jeanruf1"
  },
  {
    title: "Monitoramento de Riscos e Fraudes",
    desc: "Aplicação web focada em prevenção de fraudes. Cruza dados complexos e exibe dashboards dinâmicos para SLAs e análises.",
    tags: ["Web App", "Dashboard", "Data Engineering"],
    link: "https://github.com/jeanruf1"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-cyan-500 font-mono mb-4 tracking-widest uppercase text-sm md:text-base">// SELECTED WORK</h3>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Building experiences <br /> that matter.
              </h2>
            </div>
            <a href="https://github.com/jeanruf1" target="_blank" rel="noreferrer" className="shrink-0 px-6 py-3 rounded-full border border-neutral-700 text-white hover:border-cyan-500 hover:text-cyan-500 transition-colors flex items-center gap-2">
              Ver Todos no GitHub <span className="text-xl">↗</span>
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group block h-full p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)] cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  {proj.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-neutral-800 text-xs text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
