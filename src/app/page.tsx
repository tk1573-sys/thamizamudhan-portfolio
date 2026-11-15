import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, GraduationCap, Microscope, Database, BookOpen, Award } from "lucide-react";
import { profile } from "@/data/profile";

const pathways = [
  { icon: Database, title: "Data Engineering", text: "ETL development, data warehousing, SQL, and enterprise data systems.", href: "/experience", tag: "Industry" },
  { icon: BrainCircuit, title: "AI & Software", text: "Applied AI, Generative AI, and practical software projects.", href: "/projects", tag: "Innovation" },
  { icon: GraduationCap, title: "Academia & Teaching", text: "Academic learning, teaching, mentoring, and curriculum interests.", href: "/teaching", tag: "Education" },
  { icon: Microscope, title: "Research", text: "Multimodal AI, wearable computing, and human-centered intelligent systems.", href: "/research", tag: "Research" },
];
const highlights = [
  { icon: BriefcaseBusiness, label: "Industry", value: "TCS · Data Engineering" },
  { icon: GraduationCap, label: "Academic appointment", value: "Assistant Professor · DSU" },
  { icon: BookOpen, label: "Education", value: "M.Tech · Data Science" },
  { icon: Award, label: "Learning", value: "Certifications & achievements" },
];

export default function HomePage() {
  return <>
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="container-shell relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
        <div>
          <p className="eyebrow !text-blue-200">A professional portfolio</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Engineering data. <span className="text-blue-200">Exploring intelligence.</span> Advancing research.</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">I am {profile.name}, working across data engineering, software development, artificial intelligence, and academic research. This is a growing record of the work I build, the knowledge I gain, and the ideas I explore.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5">Explore my work <ArrowUpRight size={16} /></Link>
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">About me <ArrowDownRight size={16} /></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"><span>Data Engineering</span><span>Artificial Intelligence</span><span>Education</span><span>Research</span></div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-[#F1F5F9] p-6 text-ink sm:p-8">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Upcoming appointment</span><span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">Incoming</span></div>
              <div className="mt-8"><p className="text-sm font-semibold text-accent">{profile.appointment.institution}</p><h2 className="mt-2 font-display text-3xl font-bold leading-tight">{profile.appointment.role}</h2><p className="mt-3 text-sm text-slate-600">{profile.appointment.location}</p><div className="mt-6 rounded-xl border border-slate-200 bg-white p-4"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Academic transition</p><p className="mt-1 font-semibold text-ink">{profile.appointment.timing}</p></div></div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5"><span className="text-xs text-slate-500">Industry · Academia · Research</span><GraduationCap className="text-accent" size={24} /></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur sm:block"><p className="text-xs text-slate-300">Research interests</p><p className="mt-1 text-sm font-semibold">Multimodal & Generative AI</p></div>
        </div>
      </div>
    </section>
    <section className="container-shell py-20">
      <div className="max-w-2xl"><p className="eyebrow">One profile, three dimensions</p><h2 className="section-title mt-4">A journey across industry, education, and innovation.</h2><p className="mt-4 leading-7 text-slate-600">Explore the areas that shape my professional work and academic interests.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">{pathways.map(({ icon: Icon, title, text, href, tag }) => <Link key={title} href={href} className="surface-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300"><div className="flex items-center justify-between"><span className="rounded-xl bg-blue-50 p-3 text-accent"><Icon size={24} /></span><span className="text-xs font-bold uppercase tracking-wider text-slate-400">{tag}</span></div><h3 className="mt-7 font-display text-xl font-bold text-ink">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">Explore section <ArrowUpRight size={15} /></span></Link>)}</div>
    </section>
    <section className="bg-white py-20"><div className="container-shell"><div className="max-w-2xl"><p className="eyebrow">Professional snapshot</p><h2 className="section-title mt-4">The experience behind the work.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{highlights.map(({ icon: Icon, label, value }) => <div key={label} className="rounded-2xl border border-slate-200 bg-paper p-6"><Icon className="text-accent" size={23} /><p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-2 font-semibold leading-6 text-ink">{value}</p></div>)}</div></div></section>
    <section className="container-shell py-20"><div className="rounded-[2rem] bg-[#DCEAFE] p-8 sm:p-12"><p className="eyebrow">Explore and connect</p><div className="mt-4 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Good work grows through collaboration.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-700">Explore my projects, academic journey, and research interests—or get in touch to discuss an opportunity or collaboration.</p></div><div className="flex flex-wrap gap-3"><Link href="/services" className="button-primary whitespace-nowrap">Freelance & tuition <ArrowUpRight size={16} /></Link><Link href="/contact" className="button-secondary whitespace-nowrap">Contact me</Link></div></div></div></section>
  </>;
}