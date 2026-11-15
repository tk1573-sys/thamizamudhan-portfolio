import type { Metadata } from "next";
import { Mail, MessageCircle, BriefcaseBusiness, GraduationCap, ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Contact & Enquiries" };

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "");

export default function ContactPage() {
  const message = encodeURIComponent("Hello, I visited your professional portfolio and would like to discuss a freelance project / online tuition enquiry.");
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">Contact · Collaboration · Learning</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Let's discuss your project or learning goals.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">I welcome enquiries from students, professionals, startups, and organisations for freelance IT work, technical consulting, and online tuition. Choose email for a detailed brief or WhatsApp for an initial conversation.</p>
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      <article className="surface-card p-7"><Mail className="text-accent" size={26}/><h2 className="mt-5 font-display text-2xl font-bold text-ink">Email enquiries</h2><p className="mt-3 text-sm leading-7 text-slate-600">For project briefs, collaboration proposals, tuition enquiries, and formal communication.</p>
        {email ? <a href={`mailto:${email}?subject=Portfolio%20enquiry`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">Email me <ExternalLink size={15}/></a> : <span className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-800">Email address needs configuration</span>}
      </article>
      <article className="surface-card p-7"><MessageCircle className="text-accent" size={26}/><h2 className="mt-5 font-display text-2xl font-bold text-ink">WhatsApp enquiries</h2><p className="mt-3 text-sm leading-7 text-slate-600">For a quick initial discussion about class schedules, project requirements, and availability.</p>
        {whatsapp ? <a href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white">Message on WhatsApp <ExternalLink size={15}/></a> : <span className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-800">WhatsApp number needs configuration</span>}
      </article>
    </div>
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7"><h2 className="font-display text-xl font-bold text-ink">What to include in your enquiry</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div><BriefcaseBusiness className="text-accent" size={20}/><h3 className="mt-2 font-semibold text-ink">Freelance / consulting</h3><p className="mt-1 text-sm leading-6 text-slate-600">Problem summary, expected deliverables, technology stack, timeline, and whether this is a one-time or ongoing engagement.</p></div>
        <div><GraduationCap className="text-accent" size={20}/><h3 className="mt-2 font-semibold text-ink">Tuition / mentoring</h3><p className="mt-1 text-sm leading-6 text-slate-600">Subject, current level, learning objective, preferred days and times, and individual or group preference.</p></div>
      </div>
    </div>
  </section>;
}