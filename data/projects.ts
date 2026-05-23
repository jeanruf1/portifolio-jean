export interface Project {
  title: string;
  desc: string;
  tags: string[];
}

export interface BilingualProjects {
  pt: Project[];
  en: Project[];
}

export const ptProjects: Project[] = [
  {
    title: "Plataforma de Automação de KYC e Onboarding",
    desc: "Solução ponta a ponta com OCR e n8n para preenchimento automático, com módulo de análise estratégica baseado em dados.",
    tags: ["Python", "Flask", "n8n", "OCR", "SQL"]
  },
  {
    title: "Sistema Gestor de Demandas Corporativas",
    desc: "Plataforma com front-end gerencial e orquestração back-end para gerenciar regras de negócio e rastrear pedidos internos.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "SQL", "Kanban"]
  },
  {
    title: "Plataforma de IA para o Setor Educacional",
    desc: "Solução B2B RAG para criação automatizada de avaliações, incluindo OCR para materiais antigos e alinhamento pedagógico.",
    tags: ["Python", "LangChain", "OpenAI", "RAG", "OCR", "PostgreSQL", "Docker"]
  },
  {
    title: "Monitoramento Web",
    desc: "Aplicação web focada em monitoramento. Cruza dados complexos e exibe dashboards dinâmicos para SLAs e análises.",
    tags: ["Python", "Django", "SQL", "Elasticsearch", "Grafana", "Docker"]
  },
  {
    title: "Agente Operacional Inteligente",
    desc: "Ferramenta desenvolvida utilizando Python, LangChain e arquitetura RAG para otimizar atendimento interno.",
    tags: ["Python", "LangChain", "LangGraph", "Claude", "RAG", "Banco de Dados Vetorial"]
  },
  {
    title: "Painéis Inteligentes de Gestão e Compliance (BI e IA)",
    desc: "Ferramentas focadas em visualização de dados com chat de IA que executa consultas em BD e gera gráficos.",
    tags: ["Python", "SQL", "LangChain", "OpenAI", "RAG", "ApexCharts"]
  },
  {
    title: "Sistema de Controle de Ponto e Jornada",
    desc: "Aplicação dedicada ao registro, controle e gestão eficiente do ponto e da jornada de trabalho.",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "Django", "PostgreSQL", "Docker", "Azure"]
  },
  {
    title: "Motor de Geração de Conteúdo para Marketing",
    desc: "Solução baseada em IA focada na criação automatizada de artigos e imagens para blogs.",
    tags: ["Python", "OpenAI", "Perplexity", "n8n"]
  },
  {
    title: "Automação de Prospecção B2B",
    desc: "Fluxos robustos orquestrados no n8n para captação, enriquecimento de dados e prospecção activa.",
    tags: ["n8n", "Python", "Perplexity"]
  },
  {
    title: "Pipelines de Engenharia e Processamento de Dados",
    desc: "Rotinas avançadas e scripts em Python (Pandas, Spark) para extração e análise de grandes volumes de dados.",
    tags: ["Pandas", "Apache Spark", "Databricks", "Airflow", "Robot Framework", "Excel"]
  },
  {
    title: "Plataforma de Gestão de Fornecedores e Contratos",
    desc: "Aplicação estruturada para centralizar o ciclo de vida de contratos e relacionamento com fornecedores.",
    tags: ["Python", "Django", "SQL", "n8n"]
  },
  {
    title: "Suíte de Soluções Corporativas Integradas",
    desc: "Conjunto de ferramentas menores desenvolvidas para apoiar rotinas operacionais.",
    tags: ["Python", "Robot Framework", "Selenium", "Excel"]
  }
];

export const enProjects: Project[] = [
  {
    title: "KYC and Onboarding Automation Platform",
    desc: "End-to-end solution with OCR and n8n for automated filling, with a strategic data-based analysis module.",
    tags: ["Python", "Flask", "n8n", "OCR", "SQL"]
  },
  {
    title: "Corporate Demand Management System",
    desc: "Platform with managerial front-end and back-end orchestration to manage business rules and track internal requests.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "SQL", "Kanban"]
  },
  {
    title: "AI Platform for the Educational Sector",
    desc: "B2B RAG solution for automated creation of assessments, including OCR for legacy materials and pedagogical alignment.",
    tags: ["Python", "LangChain", "OpenAI", "RAG", "OCR", "PostgreSQL", "Docker"]
  },
  {
    title: "Monitoring Web",
    desc: "Web application focused on monitoring. Cross-references complex data and displays dynamic dashboards for SLAs and analyses.",
    tags: ["Python", "Django", "SQL", "Elasticsearch", "Grafana", "Docker"]
  },
  {
    title: "Intelligent Operational Agent",
    desc: "Tool developed using Python, LangChain, and RAG architecture to optimize internal customer service.",
    tags: ["Python", "LangChain", "LangGraph", "Claude", "RAG", "Vector Database"]
  },
  {
    title: "Intelligent Management and Compliance Dashboards (BI & AI)",
    desc: "Tools focused on data visualization with an AI chat that executes DB queries and generates charts.",
    tags: ["Python", "SQL", "LangChain", "OpenAI", "RAG", "ApexCharts"]
  },
  {
    title: "Time and Attendance Tracking System",
    desc: "Dedicated application for the recording, control, and efficient management of time and attendance.",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "Django", "PostgreSQL", "Docker", "Azure"]
  },
  {
    title: "Content Generation Engine for Marketing",
    desc: "AI-based solution focused on the automated creation of articles and images for blogs.",
    tags: ["Python", "OpenAI", "Perplexity", "n8n"]
  },
  {
    title: "B2B Prospecting Automation",
    desc: "Robust workflows orchestrated in n8n for capture, data enrichment, and active prospecting.",
    tags: ["n8n", "Python", "Perplexity"]
  },
  {
    title: "Data Engineering and Processing Pipelines",
    desc: "Advanced routines and Python scripts (Pandas, Spark) for extracting and analyzing large volumes of data.",
    tags: ["Pandas", "Apache Spark", "Databricks", "Airflow", "Robot Framework", "Excel"]
  },
  {
    title: "Supplier and Contract Management Platform",
    desc: "Structured application to centralize the contract lifecycle and supplier relationships.",
    tags: ["Python", "Django", "SQL", "n8n"]
  },
  {
    title: "Integrated Corporate Solutions Suite",
    desc: "Set of smaller tools developed to support operational routines.",
    tags: ["Python", "Robot Framework", "Selenium", "Excel"]
  }
];

export const allProjects: BilingualProjects = {
  pt: ptProjects,
  en: enProjects
};
