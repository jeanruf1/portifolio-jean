import { NextResponse } from 'next/server';
import { allProjects } from '@/data/projects';

export async function GET() {
  // Simula um delay de banco de dados
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Como os projetos são privados, não adicionamos links do GitHub neles
  return NextResponse.json(allProjects);
}