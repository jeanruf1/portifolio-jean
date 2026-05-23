'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono uppercase tracking-widest text-center px-4">
      <h1 className="text-6xl font-bold mb-4">Erro / Error</h1>
      <p className="text-sm text-neutral-500 mb-8">Ocorreu um erro inesperado / An unexpected error occurred</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors text-xs font-bold"
      >
        TENTAR NOVAMENTE / TRY AGAIN
      </button>
    </div>
  );
}
