import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jean Pereira Rufino de Lima | Software Engineer",
  description: "Portfolio de Engenharia de Dados, Automação (RPA) e Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
