export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono uppercase tracking-widest text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-sm text-neutral-500 mb-8">Página não encontrada / Page not found</p>
      <a href="/" className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors text-xs font-bold">
        VOLTAR AO INÍCIO / BACK HOME
      </a>
    </div>
  );
}
