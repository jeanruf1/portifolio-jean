import { FadeIn } from "../ui/Animations";
import { PillBadge } from "../ui/PillBadge";

const skills = [
  "Python", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Next.js", "React", "TypeScript", "n8n", "Power BI", "SQL Server", "Flask", "RAG Systems"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h3 className="text-cyan-500 font-mono mb-4 tracking-widest uppercase text-sm md:text-base">// TECH STACK</h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-12">
            Tools that power <br /> innovation.
          </h2>
        </FadeIn>

        <div className="flex flex-wrap gap-4 mb-16">
          {skills.map((skill, index) => (
            <PillBadge key={skill} delay={index * 0.05}>{skill}</PillBadge>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 text-neutral-300 text-lg leading-relaxed">
            I'm constantly expanding my toolkit and staying current with emerging technologies. My focus is on choosing the right tool for each challenge, leveraging AI, data engineering, and automation to build scalable and innovative solutions.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
