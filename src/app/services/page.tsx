import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Database, Code2, BrainCircuit, GraduationCap, Users, Laptop, BriefcaseBusiness } from "lucide-react";

export const metadata: Metadata = { title: "Freelance IT, Online Tuition & Consulting" };

const freelanceServices = [
  { icon: Database, title: "SQL & ETL development", items: ["SQL query development, debugging and optimisation", "ETL workflow design and troubleshooting", "DataStage, Teradata and data warehousing support"] },
  { icon: Code2, title: "Python automation", items: ["Python scripts for repetitive business tasks", "Data extraction, transformation and validation", "File processing, reporting and workflow automation"] },
  { icon: Laptop, title: "Web application development", items: ["Responsive web application prototypes", "Frontend and backend feature development", "API integration and database-connected applications"] },
  { icon: BrainCircuit, title: "AI/ML prototypes", items: ["AI and machine-learning proof of concepts", "NLP and text analytics prototypes", "Data analysis, model evaluation and responsible AI discussions"] },
  { icon: BriefcaseBusiness, title: "Technical consulting", items: ["Technology and solution discussions", "Data pipeline and application design reviews", "Technical documentation and implementation planning"] },
];

const teachingSubjects = [
  { title: "SQL", detail: "Queries, joins, subqueries, aggregations, window functions and practical database exercises." },
  { title: "Python", detail: "Programming fundamentals, functions, collections, file handling, scripting and practical exercises." },
  { title: "DBMS", detail: "Relational database concepts, ER modelling, normalisation, transactions and SQL foundations." },
  { title: "Data Engineering", detail: "ETL concepts, data warehousing, data pipelines, data quality and practical engineering workflows." },
  { title: "AI/ML", detail: "Foundational AI/ML concepts, data preparation, model training basics, evaluation and applied prototypes." },
];

export default function ServicesPage() {
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">For learners · Teams · Businesses</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Technology services and practical teaching, built around real problems.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">I welcome enquiries from students, early-career professionals, startups, and businesses for suitable freelance IT assignments, technical consulting, online tuition, and mentoring. Each engagement begins with a discussion of goals, scope, timeline, and expectations.</p>

    <div className="mt-16">
      <p className="eyebrow">Freelance IT services</p>
      <h2 className="section-title mt-3 text-3xl sm:text-4xl">Build, automate, improve.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {freelanceServices.map(({ icon: Icon, title, items }) => <article key={title} className="surface-card p-6">
          <span className="inline-flex rounded-xl bg-blue-50 p-3 text-accent"><Icon size={23} /></span>
          <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
          <ul className="mt-4 space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
        </article>)}
      </div>
    </div>

    <div className="mt-16">
      <p className="eyebrow">Online tuition</p>
      <h2 className="section-title mt-3 text-3xl sm:text-4xl">Learn concepts through examples and practice.</h2>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">One-to-one or small-group online sessions for students and professionals. Lessons can be adapted to beginner, intermediate, or practical interview-preparation goals.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teachingSubjects.map(({ title, detail }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
          <GraduationCap className="text-accent" size={22} />
          <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
        </article>)}
      </div>
    </div>

    <div className="mt-16 rounded-[2rem] bg-ink p-8 text-white sm:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Enquiries from students and organisations</p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">Tell me what you want to build or learn.</h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-300">Email and WhatsApp are the preferred enquiry channels. Please include your topic or project brief, expected outcome, preferred schedule, and any relevant technical context.</p>
      <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink hover:bg-blue-50">Enquire about a project or class <ArrowUpRight size={16} /></Link>
    </div>
    <p className="mt-6 text-xs leading-6 text-slate-500">Academic support is limited to teaching, feedback, debugging explanations, and mentoring. I do not complete graded assignments, examinations, dissertations, or research deliverables on another person's behalf. Freelance scope, availability, fees, and delivery dates are agreed before work begins.</p>
  </section>;
}
