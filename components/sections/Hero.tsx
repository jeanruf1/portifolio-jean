import { SplitText, FadeIn } from "../ui/Animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <FadeIn>
            <h3 className="text-cyan-500 font-mono mb-4 tracking-widest uppercase text-sm md:text-base">// Engenharia de Dados & IA</h3>
          </FadeIn>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            <SplitText text="HI, I AM JEAN PEREIRA." />
          </h1>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8">
              Especialista em orquestração de workflows, arquiteturas RAG e pipelines escaláveis. 
              Foco no design e implementação de soluções automatizadas para embasar decisões corporativas de ponta a ponta.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 rounded-md bg-cyan-500 text-black font-semibold transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                Ver Projetos
              </a>
              <a href="#contact" className="px-6 py-3 rounded-md border border-neutral-700 text-white font-semibold transition-all hover:border-cyan-500 hover:text-cyan-500">
                Contato
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Profile Image Area */}
        <FadeIn delay={0.5} className="relative hidden md:flex justify-center items-center">
          <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm group">
            {/* The user will place their image at /profile.png later */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="/profile.png" 
              alt="Jean Pereira" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback Se a imagem ainda não estiver na pasta public
                e.currentTarget.src = "https://via.placeholder.com/400x500/111/333?text=Profile+Image";
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
