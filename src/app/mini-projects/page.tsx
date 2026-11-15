import type { Metadata } from "next";
import { ArrowUpRight, Github, BarChart3, FileSearch, Code2 } from "lucide-react";

export const metadata: Metadata = { title: "Mini Projects & Technical Work" };

const items = [
  { name: "Personal Analytics Platform", area: "Python · Data analytics · Excel · Power BI", summary: "A modular analytics platform that turns personal tracking data into Excel dashboards and Power BI reports, with finance, habits, health, food, journal, and resolution analytics.", highlights: ["Python and pandas data processing", "Multi-sheet Excel dashboard generation", "Power BI assets including DAX measures and theme guidance", "FastAPI backend foundation and tests"], url: "https://github.com/tk1573-sys/tracker", icon: BarChart3 },
  { name: "PolicyX – Evidence-Grounded Policy Intelligence", area: "Document AI · OCR · Retrieval · FastAPI", summary: "A locally deployable proof of concept for government-finance policy documents, supporting evidence-grounded Q&A, document lineage, policy change comparison, structured extraction, and auditability.", highlights: ["PDF extraction with OCR fallback and page-aware chunks", "TF-IDF evidence retrieval and source/page context", "Current versus superseded policy lineage", "Deterministic policy comparison and human-reviewed policy-note drafts", "Repository README reports 26 passing tests and retrieval evaluation of 6/6; evaluation scope and limitations are documented"], url: "https://github.com/tk1573-sys/policyx-global", icon: FileSearch },
  { name: "Thamizh Life Coach", area: "Python · Windows desktop · AI assistant", summary: "A personal desktop reminder companion with recurring reminders, spoken prompts, a character that appears when reminders are due, and optional AI chat.", highlights: ["System tray workflow and reminder actions", "Daily, weekly and monthly recurrence", "Local encrypted profile and secure credential handling"], url: "https://github.com/tk1573-sys/thamizh-life-coach", icon: Code2 },
];

export default function MiniProjectsPage() {
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">Experiments · Independent builds · GitHub</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Smaller builds that demonstrate practical engineering.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">A curated selection of technical prototypes and supporting projects. Each entry links to its source repository; deployment is not implied unless a live URL is explicitly provided.</p>
    <div className="mt-12 space-y-5">{items.map(({name,area,summary,highlights,url,icon:Icon})=><article key={name} className="surface-card p-7 sm:p-8">
      <div className="flex flex-wrap items-center gap-3"><span className="rounded-xl bg-blue-50 p-3 text-accent"><Icon size={24}/></span><span className="text-xs font-bold uppercase tracking-wider text-accent">{area}</span></div>
      <h2 className="mt-5 font-display text-2xl font-bold text-ink">{name}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{summary}</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">{highlights.map(x=><li key={x} className="flex gap-2 text-sm leading-6 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/>{x}</li>)}</ul>
      <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent" href={url} target="_blank" rel="noreferrer"><Github size={16}/> View source repository <ArrowUpRight size={15}/></a>
    </article>)}</div>
    <p className="mt-10 text-sm leading-7 text-slate-500">The exact UG capstone title and any additional mini-project titles will be added when their source records are available. This avoids publishing guessed project names or unverified claims.</p>
  </section>;
}