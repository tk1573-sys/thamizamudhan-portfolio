import type { Metadata } from "next";
import { ArrowUpRight, Github, ExternalLink, Laptop, Cloud, Code2 } from "lucide-react";
import { projects, additionalWork } from "@/data/projects";

export const metadata: Metadata = { title: "Projects & Deployments" };

const statusStyle: Record<string, string> = {
  Live: "bg-emerald-50 text-emerald-700",
  "Desktop MVP": "bg-violet-50 text-violet-700",
  "Deployment setup": "bg-amber-50 text-amber-800",
  Repository: "bg-slate-100 text-slate-700",
};

export default function ProjectsPage() {
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">Selected work · GitHub · Deployments</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Projects built to solve practical problems.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">A selection of independent applications, academic work, and experiments across AI, data, productivity, and software engineering. Deployment labels distinguish verified live links from projects that are still being prepared.</p>
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {projects.map((project) => <article key={project.name} className="surface-card flex flex-col p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">{project.category}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[project.status]}`}>{project.status}</span>
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-ink">{project.name}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
        <ul className="mt-5 flex-1 space-y-2">{project.highlights.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
        <div className="mt-6 rounded-xl bg-paper p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Cloud size={14} /> Deployment</div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{project.deployment}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.repository} target="_blank" rel="noreferrer" className="button-secondary"><Github size={16} /> Source code <ArrowUpRight size={15} /></a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary"><ExternalLink size={16} /> Open live app</a>}
        </div>
      </article>)}
    </div>
    <div className="mt-16">
      <p className="eyebrow">Academic & mini projects</p>
      <h2 className="section-title mt-3 text-3xl">More work to document</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-3">{additionalWork.map((item) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600"><Code2 className="mb-3 text-accent" size={20} />{item}</div>)}</div>
    </div>
    <p className="mt-10 text-xs leading-6 text-slate-500">Deployment status is based on repository documentation available during this update. A link is labelled live only where a concrete production URL is documented; service health and uptime should be checked separately.</p>
  </section>;
}