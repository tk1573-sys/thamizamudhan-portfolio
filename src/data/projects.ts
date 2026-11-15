export type Project = {
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  repository: string;
  liveUrl?: string;
  deployment: string;
  status: "Live" | "Desktop MVP" | "Deployment setup" | "Repository";
};

export const projects: Project[] = [
  {
    name: "Thamizh's Life Command Centre",
    category: "Personal productivity · PWA · Full-stack web",
    summary: "A mobile-first command centre for career planning, learning, certifications, PhD research, projects, and personal progress. Includes optional encrypted cross-device sync.",
    highlights: ["18 functional areas across career, learning, PhD, certifications and planning", "Progress model designed to retain continuity between sessions", "Optional encrypted sync using a private Vercel Blob store", "Progressive Web App experience"],
    repository: "https://github.com/tk1573-sys/thamizh-app",
    liveUrl: "https://thamizh-app.vercel.app",
    deployment: "Live Vercel PWA URL is documented in the project README.",
    status: "Live",
  },
  {
    name: "AI Emotional Wellness Buddy",
    category: "Applied AI · NLP · Healthcare analytics",
    summary: "An emotional wellness support system exploring longitudinal emotion analysis, distress-risk scoring, pattern tracking, forecasting, explainability, and safety-aware routing.",
    highlights: ["Multi-emotion text analysis and longitudinal tracking", "Risk scoring, trend analysis and forecasting experiments", "Explainability and configurable support/guardian workflows", "Repository includes a Streamlit prototype and a newer FastAPI/Next.js architecture"],
    repository: "https://github.com/tk1573-sys/AI-wellness-Buddy",
    deployment: "Deployment architecture and guides exist for Render (backend) and Vercel (frontend). Public production URLs are not yet verified; do not present placeholder URLs as live deployments.",
    status: "Deployment setup",
  },
  {
    name: "Thamizh Life Coach",
    category: "Windows desktop · Python · AI assistant",
    summary: "A standalone Windows reminder and personal-coach companion with an animated character, spoken reminders, recurring schedules, and optional AI chat.",
    highlights: ["System-tray desktop companion", "One-time, daily, weekly and monthly reminders", "Snooze, complete and talk-to-coach actions", "Local encrypted profile and secure credential storage"],
    repository: "https://github.com/tk1573-sys/thamizh-life-coach",
    deployment: "Windows desktop MVP. The repository documents how to build a portable executable folder; this is not a hosted web application.",
    status: "Desktop MVP",
  },
  {
    name: "Thamizh App",
    category: "Web application · React · PWA",
    summary: "The Life Command Centre web application, maintained as a separate repository and deployed as a Progressive Web App.",
    highlights: ["Mobile-first interface", "Career, learning and research planning", "PWA installation support"],
    repository: "https://github.com/tk1573-sys/thamizh-app",
    liveUrl: "https://thamizh-app.vercel.app",
    deployment: "Live deployment documented by the project repository.",
    status: "Live",
  },
];

export const additionalWork = [
  "UG final-year engineering project – project title, contribution and evidence to be added",
  "M.Tech Data Science project – AI Emotional Wellness Buddy; final project details and report to be added",
  "Mini projects and technical experiments – curated from GitHub repositories",
];