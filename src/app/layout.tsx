import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Thamiz Amudhan | Data Engineer, Educator & AI Researcher", template: "%s | Thamiz Amudhan" },
  description: "Professional portfolio covering data engineering, academic teaching, software projects, certifications, and AI research.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Navbar /><main>{children}</main><Footer /></body>
    </html>
  );
}