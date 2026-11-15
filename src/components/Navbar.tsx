"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/about"], ["Experience", "/experience"], ["Education", "/education"],
  ["Projects", "/projects"], ["Research", "/research"], ["Credentials", "/certifications"],
  ["Teaching", "/teaching"], ["Services", "/services"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">THAMIZ<span className="text-accent">.</span></Link>
        <div className="hidden items-center gap-5 xl:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-ink">{label}</Link>)}
          <Link href="/contact" className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Contact <ArrowUpRight size={15} /></Link>
        </div>
        <button type="button" className="rounded-lg p-2 text-ink xl:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <div className="border-t border-slate-200 bg-white px-5 py-4 xl:hidden"><div className="container-shell flex flex-col gap-4">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">{label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="text-sm font-semibold text-accent">Contact</Link>
      </div></div>}
    </header>
  );
}