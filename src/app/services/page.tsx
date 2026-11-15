import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Database, Code2, BrainCircuit, GraduationCap, Users, Laptop } from "lucide-react";

export const metadata: Metadata = { title: "Freelance IT & Online Tutoring" };

const services = [
  { icon: Database, title: "Data engineering & SQL", items: ["SQL query writing, debugging and optimisation", "ETL workflow design and troubleshooting", "DataStage, Teradata and data warehousing support", "Data cleaning and Python automation"] },
  { icon: Code2, title: "Software & automation", items: ["Python scripting and workflow automation", "Small web application prototypes", "API integration and data processing", "Technical documentation and code walkthroughs"] },
  { icon: BrainCircuit, title: "AI & data science prototypes", items: ["AI/ML proof-of-concept development", "NLP and text analytics prototypes", "Data analysis and visualisation", "Responsible AI and project architecture discussions"] },
  { icon: GraduationCap, title: "Online tuition", items: ["SQL, DBMS and database fundamentals", "Python programming for beginners and intermediate learners", "Data structures and programming foundations", "Data warehousing, ETL and data engineering concepts"] },
  { icon: Users, title: "Academic mentoring", items: ["UG/PG project topic exploration and planning", "Project architecture, debugging and code explanation", "Research paper reading and technical presentation guidance", "Resume, GitHub and technical interview preparation"] },
  { icon: Laptop, title: "Professional upskilling", items: ["Practical data engineering learning paths", "Hands-on SQL and Python exercises", "Portfolio and GitHub project review", "One-to-one online mentoring sessions"] },
];

export default function ServicesPage() {
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">Independent work · Teaching · Mentoring</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Practical technology help. Clear, supportive teaching.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">I am open to suitable freelance IT assignments, short-term technical engagements, online tuition, and project mentoring. Work can be discussed remotely; scope, timeline, and availability are agreed before starting.</p>
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map(({ icon: Icon, title, items }) => <article key={title} className="surface-card p-6">
        <span className="inline-flex rounded-xl bg-blue-50 p-3 text-accent"><Icon size={23} /></span>
        <h2 className="mt-5 font-display text-xl font-bold text-ink">{title}</h2>
        <ul className="mt-4 space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
      </article>)}
    </div>
    <div className="mt-14 rounded-[2rem] bg-ink p-8 text-white sm:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Work with me</p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">Have a project, learning goal, or technical challenge?</h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-300">Share a short description of what you need. I can review the scope and confirm whether it is a good fit, along with a realistic timeline and engagement format.</p>
      <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink hover:bg-blue-50">Discuss a project or class <ArrowUpRight size={16} /></Link>
    </div>
    <p className="mt-6 text-xs leading-6 text-slate-500">Academic mentoring is guidance and teaching, not completing graded assignments, examinations, dissertations, or research on someone else's behalf. Availability and engagement terms are confirmed individually.</p>
  </section>;
}