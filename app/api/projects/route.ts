import { NextResponse } from 'next/server';

const allProjects = [
  {
    title: "Plataforma de Automação de KYC e Onboarding",
    desc: "Solução ponta a ponta com OCR e n8n para preenchimento automático, com módulo de análise estratégica baseado em dados.",
    tags: ["n8n", "OCR", "Python", "Data Analysis"]
  },
  {
    title: "Sistema Gestor de Demandas Corporativas",
    desc: "Plataforma com front-end gerencial e orquestração back-end para gerenciar regras de negócio e rastrear pedidos internos.",
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    title: "Plataforma de IA para o Setor Educacional",
    desc: "Solução B2B RAG para criação automatizada de avaliações, incluindo OCR para materiais antigos e alinhamento pedagógico.",
    tags: ["RAG", "LLMs", "Computer Vision", "Python"]
  },
  {
    title: "Monitoramento de Riscos e Fraudes",
    desc: "Aplicação web focada em prevenção de fraudes. Cruza dados complexos e exibe dashboards dinâmicos para SLAs e análises.",
    tags: ["Web App", "Dashboard", "Data Engineering"]
  },
  {
    title: "Agente Operacional Inteligente",
    desc: "Ferramenta desenvolvida utilizando Python, LangChain e arquitetura RAG para otimizar atendimento interno.",
    tags: ["Python", "LangChain", "RAG"]
  },
  {
    title: "Painéis Inteligentes de Gestão e Compliance (BI e IA)",
    desc: "Ferramentas focadas em visualização de dados com chat de IA que executa consultas em BD e gera gráficos.",
    tags: ["BI", "IA", "SQL"]
  },
  {
    title: "Sistema de Controle de Ponto e Jornada",
    desc: "Aplicação dedicada ao registro, controle e gestão eficiente do ponto e da jornada de trabalho.",
    tags: ["React", "Gestão"]
  },
  {
    title: "Motor de Geração de Conteúdo para Marketing",
    desc: "Solução baseada em IA focada na criação automatizada de artigos e imagens para blogs.",
    tags: ["GenAI", "Marketing"]
  },
  {
    title: "Automação de Prospecção B2B",
    desc: "Fluxos robustos orquestrados no n8n para captação, enriquecimento de dados e prospecção ativa.",
    tags: ["n8n", "B2B", "Automação"]
  },
  {
    title: "Pipelines de Engenharia e Processamento de Dados",
    desc: "Rotinas avançadas e scripts em Python (Pandas, Spark) para extração e análise de grandes volumes de dados.",
    tags: ["Python", "Pandas", "Apache Spark"]
  },
  {
    title: "Plataforma de Gestão de Fornecedores e Contratos",
    desc: "Aplicação estruturada para centralizar o ciclo de vida de contratos e relacionamento com fornecedores.",
    tags: ["Web", "Gestão"]
  },
  {
    title: "Suíte de Soluções Corporativas Integradas",
    desc: "Conjunto de ferramentas menores desenvolvidas para apoiar rotinas operacionais.",
    tags: ["Tools", "Integração"]
  }
];

export async function GET() {
  // Simula um delay de banco de dados
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(allProjects);
}
