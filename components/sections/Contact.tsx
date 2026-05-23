"use client";

import { FadeIn } from "../ui/Animations";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-background relative overflow-hidden border-t border-neutral-900">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
        
        <div className="md:w-1/2">
          <FadeIn>
            <h3 className="text-cyan-500 font-mono mb-4 tracking-widest uppercase text-sm md:text-base">// GET IN TOUCH</h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
              Let's build <br /> together.
            </h2>
            <p className="text-neutral-400 text-lg mb-12">
              Tem um projeto em mente ou quer bater um papo sobre dados, IA e automação? 
              Fique à vontade para me mandar uma mensagem.
            </p>

            <div className="space-y-6">
              <a href="mailto:jeanrufinolima2004@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Email</div>
                  <div className="font-medium">jeanrufinolima2004@gmail.com</div>
                </div>
              </a>

              <a href="tel:+5511991042140" className="flex items-center gap-4 text-neutral-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Telefone</div>
                  <div className="font-medium">+55 (11) 99104-2140</div>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="md:w-1/2">
          <FadeIn delay={0.2}>
            <form className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Email</label>
                <input type="email" placeholder="seu.email@exemplo.com" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Message</label>
                <textarea rows={5} placeholder="Me conte sobre o seu projeto..." className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none" />
              </div>
              <button type="submit" className="self-start px-8 py-3 rounded-md bg-cyan-500 text-black font-semibold transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
