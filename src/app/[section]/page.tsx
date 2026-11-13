import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const sections: Record<string, { title: string; eyebrow: string; description: string; items: string[] }> = {
  about: { title: "About me", eyebrow: "Profile", description: "A professional introduction connecting industry experience, academic learning, technology, and research interests.", items: ["Professional biography and career direction", "Technical strengths and areas of interest", "Professional links and downloadable profile"] },
  experience: { title: "Professional experience", eyebrow: "Industry", description: "My data engineering experience at Tata Consultancy Services, including ETL development, data warehousing, SQL, and enterprise delivery.", items: ["DataStage ETL development", "Teradata and SQL", "Data warehousing and production support", "Technical learning and team contributions"] },
  education: { title: "Academic journey", eyebrow: "Education", description: "My academic journey from Electronics and Communication Engineering to Data Science and doctoral research.", items: ["B.E. – Electronics and Communication Engineering", "M.Tech – Data Science, SRM Institute of Science and Technology", "PhD – Computer Science and Engineering, Shiv Nadar University Chennai"] },
  projects: { title: "Projects & engineering work", eyebrow: "Portfolio", description: "A curated collection of academic projects, independent applications, experiments, and open-source work.", items: ["UG final-year project – details to be added", "PG project – AI-Based Emotional Wellness Buddy", "Independent GitHub applications", "Mini projects and technical experiments"] },
  research: { title: "Research & innovation", eyebrow: "Research", description: "Research interests around Generative AI, multimodal intelligence, wearable sensing, healthcare analytics, and human-centered AI.", items: ["Research interests and problem areas", "Proposed methodology and research milestones", "Research outputs and publications as they become available"] },
  certifications: { title: "Certifications & credentials", eyebrow: "Continuous learning", description: "A verified record of professional certifications, technical credentials, and structured learning.", items: ["GitHub Copilot certification", "TCS internal learning and credentials", "Cloud, data engineering, and AI certifications – verified status to be added"] },
  achievements: { title: "Achievements & recognition", eyebrow: "Milestones", description: "Professional recognition, learning milestones, contributions, and achievements.", items: ["TCS awards and recognitions – evidence to be added", "Technical contributions and mentoring", "Academic and project milestones"] },
  teaching: { title: "Teaching & mentoring", eyebrow: "Academia", description: "My developing academic profile as an Assistant Professor in the CS Cluster at Dayananda Sagar University, Bengaluru, from January 2027.", items: ["Teaching interests across computer science and data", "SQL, Python, databases, and data engineering", "Student projects, mentoring, and research guidance"] },
  publications: { title: "Publications & scholarly work", eyebrow: "Academic outputs", description: "A transparent record of published, accepted, submitted, and in-progress scholarly work.", items: ["Published work – to be added when available", "Conference presentations and posters", "Manuscripts and research in progress, clearly labelled"] },
  contact: { title: "Let's connect", eyebrow: "Contact", description: "For academic collaboration, teaching and research discussions, technical opportunities, or project conversations.", items: ["GitHub: tk1573-sys", "LinkedIn: profile link to be added", "Professional email: to be added"] },
};

export function generateStaticParams() { return Object.keys(sections).map((section) => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  return { title: sections[section]?.title ?? "Page not found" };
}
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = sections[section];
  if (!content) notFound();
  return <section className="container-shell min-h-[65vh] py-20 sm:py-28">
    <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-ink"><ArrowLeft size={16} /> Back home</Link>
    <div className="mt-12 max-w-3xl"><p className="eyebrow">{content.eyebrow}</p><h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">{content.title}</h1><p className="mt-6 text-lg leading-8 text-slate-600">{content.description}</p></div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2">{content.items.map((item, index) => <div key={item} className="surface-card flex gap-4 p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-accent">0{index + 1}</span><p className="pt-1 text-sm font-medium leading-6 text-slate-700">{item}</p></div>)}</div>
    <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6"><p className="font-semibold text-ink">Content build in progress</p><p className="mt-2 text-sm leading-6 text-slate-500">This section is scaffolded. Verified details, supporting evidence, project media, and links will be added in the next development iterations.</p><Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent">Connect <ArrowUpRight size={15} /></Link></div>
  </section>;
}