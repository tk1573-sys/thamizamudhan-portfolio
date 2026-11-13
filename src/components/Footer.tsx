import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return <footer className="mt-24 border-t border-slate-200 bg-white">
    <div className="container-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="font-display text-lg font-bold text-ink">{profile.name}</p><p className="mt-1 text-sm text-slate-500">Engineering · Education · Research</p></div>
      <div className="flex items-center gap-5 text-sm text-slate-600">
        <Link href="/contact" className="inline-flex items-center gap-1 hover:text-ink">Contact <ArrowUpRight size={14} /></Link>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink"><Github size={19} /></a>
      </div>
      <p className="text-xs text-slate-400">© {new Date().getFullYear()} {profile.name}</p>
    </div>
  </footer>;
}