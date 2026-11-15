import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Database, Code2, BrainCircuit, GraduationCap, BriefcaseBusiness } from "lucide-react";

export const metadata: Metadata = { title: "Freelance IT & Online Tuition" };

const teaching = [
  { title: "SQL", detail: "Queries, joins, subqueries, aggregations, optimisation foundations, and practical database exercises." },
  { title: "Python", detail: "Programming fundamentals, functions, collections, file handling, scripting, and practical automation." },
  { title: "DBMS", detail: "Relational modelling, keys, normalisation, transactions, indexing, and database concepts." },
  { title: "Data Engineering", detail: "ETL concepts, data warehousing, batch workflows, DataStage fundamentals, and data pipeline design." },
  { title: "AI / ML", detail: "Foundational machine learning, data preparation, model evaluation, NLP concepts, and responsible AI." },
];

const services = [
  { icon: Database, title: "SQL & ETL development", text: "SQL development, query debugging, ETL workflow support, data transformation, and data warehousing assistance." },
  { icon: Code2, title: "Python automation", text: "Small scripts and utilities for repetitive tasks, file processing, data handling, and workflow automation." },
  { icon: BriefcaseBusiness, title: "Web application development", text: "Scoped web application prototypes, frontend/backend integration, API-connected features, and technical implementation." },
  { icon: BrainCircuit, title: "AI / ML prototypes", text: "Proof-of-concept applications, NLP experiments, data science workflows, and responsible AI demonstrations." },
  { icon: GraduationCap, title: "Technical consulting", text: "Technology selection, solution architecture discussions, debugging support, documentation, and project reviews." },
];

export default function ServicesPage() {
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">Freelance · Consulting · Online tuition</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Technology services for learners, teams, and businesses.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">I welcome enquiries from both individual learners and organisations for online tuition, freelance IT assignments, and technical consulting. Every engagement begins with a discussion of the requirement, scope, timeline, and expected deliverables.</p>
    <div className="mt-14"><p className="eyebrow">Online teaching</p><h2 className="section-title mt-3 text-3xl">Subjects I teach</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{teaching.map((item) => <article key={item.title} className="surface-card p-6"><GraduationCap className="text-accent" size={23}/><h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p></article>)}</div>
    </div>
    <div className="mt-16"><p className="eyebrow">Independent technical work</p><h2 className="section-title mt-3 text-3xl">Freelance services</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{services.map(({icon:Icon,title,text})=><article key={title} className="surface-card p-6"><Icon className="text-accent" size={23}/><h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
    </div>
    <div className="mt-14 rounded-[2rem] bg-ink p-8 text-white sm:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Students · Professionals · Organisations</p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">Let's define the right scope for your requirement.</h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-300">Tell me about the subject you want to learn or the technical problem you want to solve. I will review the requirement and confirm fit, availability, and next steps.</p>
      <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink hover:bg-blue-50">Enquire by email or WhatsApp <ArrowUpRight size={16}/></Link>
    </div>
    <p className="mt-6 text-xs leading-6 text-slate-500">Academic support is limited to teaching, explanation, feedback, and ethical mentoring. I do not complete graded assignments, examinations, dissertations, or research on another person's behalf. Availability is confirmed individually, including alongside academic and university responsibilities.</p>
  </section>;
}