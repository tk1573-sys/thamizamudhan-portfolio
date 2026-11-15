import type { Metadata } from "next";
import { BrainCircuit, HeartPulse, Eye, Activity, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = { title: "Research" };

const modalities = [
  { icon: Activity, title: "Wearable and physiological signals", detail: "Potential inputs include ECG, PPG, heart rate, temperature, and movement/activity signals from wearable or sensing devices." },
  { icon: Eye, title: "Visual and behavioural cues", detail: "Computer-vision signals such as facial expression, gestures, body pose, and observable behaviour." },
  { icon: BrainCircuit, title: "Audio and communication cues", detail: "Speech, vocalisation, and other audio cues that may help interpret distress when verbal communication is limited." },
  { icon: ShieldCheck, title: "Explainable and privacy-aware AI", detail: "Human-centred explanations, careful handling of sensitive data, and outputs designed to support—not replace—caregiver and clinical judgement." },
];

const aims = [
  "Explore multimodal signals for identifying possible distress and changes in behavioural state.",
  "Study personalised models that account for individual baselines and communication differences.",
  "Investigate early warning and prediction methods rather than relying only on a single observation.",
  "Design understandable outputs and decision-support pathways for parents, caregivers, and relevant professionals.",
  "Evaluate the feasibility, limitations, privacy, and safety of an assistive AI framework.",
];

export default function ResearchPage() {
  return <section className="container-shell py-16 sm:py-24">
    <p className="eyebrow">Doctoral research · Human-centred AI</p>
    <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Explainable multimodal AI for early healthcare support in children with special needs.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">My part-time PhD journey in Computer Science and Engineering at Shiv Nadar University Chennai explores personalised distress detection and intervention for children who may have limited verbal communication.</p>
    <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Research direction</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-ink">Human-Centered Explainable AI for Early Healthcare in Children with Special Needs</h2>
      <p className="mt-3 text-sm leading-7 text-slate-700">The broader problem is how to support earlier recognition of distress when a child cannot reliably communicate discomfort through speech. The research direction brings together wearable sensing, visual behaviour, audio cues, multimodal learning, explainability, and caregiver interaction.</p>
    </div>
    <div className="mt-14"><p className="eyebrow">Proposed system inputs</p><h2 className="section-title mt-3 text-3xl">A multimodal research approach</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{modalities.map(({icon:Icon,title,detail})=><article key={title} className="surface-card p-6"><Icon className="text-accent" size={24}/><h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{detail}</p></article>)}</div>
    </div>
    <div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="eyebrow">Potential beneficiaries</p><h2 className="section-title mt-3 text-3xl">Designed around people and care contexts.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Potential use contexts discussed in the research direction include autistic and non-verbal children, children with intellectual or communication disabilities, families, caregivers, rehabilitation settings, and special schools.</p><Users className="mt-6 text-accent" size={30}/></div>
      <div className="surface-card p-7"><p className="eyebrow">Research objectives under exploration</p><ul className="mt-5 space-y-4">{aims.map((aim,i)=><li key={aim} className="flex gap-4 text-sm leading-7 text-slate-700"><span className="font-display text-xl font-bold text-accent">0{i+1}</span><span>{aim}</span></li>)}</ul></div>
    </div>
    <div className="mt-14 rounded-2xl border border-slate-200 p-6 sm:p-8"><div className="flex items-center gap-3"><HeartPulse className="text-accent" size={25}/><h2 className="font-display text-xl font-bold text-ink">Research status and responsible claims</h2></div><p className="mt-3 text-sm leading-7 text-slate-600">This page describes a developing doctoral research direction and proposed framework, not a clinically validated product or completed experimental result. Specific datasets, protocols, ethics approvals, model performance, and clinical partnerships will be added only when established and approved for public disclosure.</p></div>
  </section>;
}