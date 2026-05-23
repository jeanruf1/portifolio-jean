import { FadeIn } from "../ui/Animations";

const experiences = [
  {
    role: "Analista Júnior – Soluções de IA e Dados",
    company: "Travelex Bank",
    date: "09/2025 – Atual",
    desc: "Estruturação de bancos relacionais e vetoriais, arquiteturas RAG integradas a APIs de LLMs, construção de microsserviços em Python e automações escaláveis no n8n.",
    tech: ["Python", "RAG", "LLMs", "n8n", "GitFlow"]
  },
  {
    role: "Estagiário em Análise de Dados e RPA",
    company: "Travelex Bank",
    date: "07/2024 – 09/2025",
    desc: "Desenvolvimento de dashboards no Power BI, rotinas ETL em Python, modelagem de BDs e deploy de microsserviços Flask em ambientes Windows Server/Linux.",
    tech: ["Power BI", "Python", "SQL Server", "Flask", "Docker"]
  },
  {
    role: "Auxiliar de Faturamento de Dados (Aprendiz)",
    company: "Hospital de Caieiras (AMIL)",
    date: "02/2023 – 03/2024",
    desc: "Tratamento de dados e criação de lógicas avançadas em planilhas para higienização de grandes volumes de registros operacionais.",
    tech: ["Excel Avançado", "Tratamento de Dados", "Lógica"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-24 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h3 className="text-cyan-500 font-mono mb-4 tracking-widest uppercase text-sm md:text-base">// EXPERIENCE</h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-16">
            Professional journey.
          </h2>
        </FadeIn>

        <div className="relative border-l border-neutral-800 ml-3 md:ml-0 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                
                {/* Card */}
                <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-cyan-500/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-neutral-800/80 rounded-full text-xs font-mono text-neutral-400 border border-neutral-700">{exp.date}</span>
                  </div>
                  
                  <div className="text-cyan-500 mb-6 flex items-center gap-2 font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {exp.company}
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                    {exp.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-transparent text-sm text-cyan-400 border border-cyan-900/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
