import { Link, NavLink } from "react-router-dom";
import { ReactNode } from "react";

const industries = [
  "Enterprise UX",
  "Transportation UX",
  "Last-Mile Delivery Experience",
  "Comms. Platform",
  "Logistics & Supply Chain",
  "Catalog Platforms",
  "Data Platforms",
  "Design Systems",
  "AI-Augmented Workflows",
  "SaaS Platforms",
  "E-commerce",
  "Operations Tooling",
  "Information Architecture",
  "Workflow Automation",
];

const journey = [
  {
    role: "UX Designer III · Walmart Global Tech India",
    services: "Last-Mile Delivery · Driver app · Design Systems",
    date: "Jun 2022–Present",
  },
  {
    role: "UX Designer II · Walmart Global Tech India",
    services: "Enterprise SaaS · Cataloging · Data Platforms",
    date: "Jun 2022–May 2024",
  },
  {
    role: "UI/UX Designer · Wunderman Thompson",
    services: "E-commerce, Web, AI Tools",
    date: "Jul 2021–Sep 2021",
  },
  {
    role: "Design Consultant · DM MultiTech",
    services: "Website, Marketing Assets, Branding",
    date: "Aug 2020–Jun 2021",
  },
  {
    role: "Business Development Associate · BYJU'S",
    services: "B2C, EdTech",
    date: "May 2019–Sep 2019",
  },
  {
    role: "Vehicle Quality Intern · Honda Cars India",
    services: "Operations, Quality Audit",
    date: "Jun 2018–Aug 2018",
  },
];

const recognition = [
  { title: "Bravo Award", org: "Walmart Global Tech", date: "2024" },
  {
    title: "SparkTech Paper Finalist",
    org: "Walmart Global Tech",
    date: "2023, 2024",
  },
  { title: "Google UX Design", org: "Coursera", date: "2021" },
  {
    title: "HCI",
    org: "Interaction Design Foundation",
    date: "2021",
  },
  {
    title: "Mobile UX Design",
    org: "Interaction Design Foundation",
    date: "2022",
  },
  {
    title: "Supply Chain Logistics",
    org: "Rutgers (Coursera)",
    date: "2023",
  },
];

const education = [
  {
    title: "Master of Design (UX/UI)",
    org: "Shiv Nadar University",
    date: "2020–2022",
  },
  { title: "B.Tech", org: "JSS ATE, Noida", date: "2015–2019" },
];

function LeftPanel() {
  return (
    <aside className="lg:w-[36%] lg:max-w-[520px] lg:h-screen lg:sticky lg:top-0 lg:overflow-hidden no-scrollbar border-b lg:border-b-0 lg:border-r border-line bg-white">
      <div className="flex flex-col h-full">
        <div className="flex-1 lg:min-h-0 lg:overflow-y-auto no-scrollbar px-6 py-8 sm:px-8 lg:px-10 lg:py-10 space-y-8">
          {/* Name row */}
          <div className="group relative flex items-center gap-3">
            <div className="relative inline-block w-10 h-10 shrink-0 z-20">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb89f616b68e949bd8496bdfbabe17b41?format=webp&width=200"
                alt="Vishakh Mehta"
                className="w-10 h-10 rounded-full object-cover shadow-sm"
                style={{ objectPosition: "center 22%" }}
              />
              <span
                aria-label="Available for work"
                className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 ring-2 ring-white"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[52px] top-1/2 -translate-y-1/2 z-10 origin-left scale-95 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
            >
              <div className="relative whitespace-nowrap rounded-2xl rounded-bl-sm bg-green-500 text-white font-semibold px-4 py-2 shadow-md text-[14px]">
                <span className="absolute -left-1 bottom-1 w-3 h-3 bg-green-500 rotate-45 rounded-[2px]" />
                Hi, nice to meet you!
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-[17px] font-semibold tracking-tight text-ink">
                Vishakh Mehta
              </h1>
              <span className="text-[12px] text-ink-mute mt-0.5">
                UX Designer III · Walmart Global Tech
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p className="text-[19px] leading-snug font-semibold text-ink">
              Hi, I'm Vishakh — a UX designer who simplifies complexity and
              turns messy enterprise problems into systems people enjoy using.
            </p>
            <p className="text-[14.5px] leading-[1.65] text-ink-dim">
              User Experience Designer with 5+ years at Walmart, specializing
              in enterprise UX, scalable systems, and AI-augmented workflows.
              I'm a first-principles thinker focused on simplifying complexity
              and aligning user and business needs. Recognized for design
              leadership and known for collaborative, system-driven impact.
            </p>
            <a
              href="https://www.youtube.com/@mindgrindbyvishakhmehta8882"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[14px] font-medium text-ink underline underline-offset-4 decoration-ink-mute hover:decoration-ink"
            >
              Educating & Mentoring 1,000+ Aspiring Designers on YouTube →
            </a>
          </div>

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecfdf5] border border-[#bbf7d0] text-[13px] font-medium text-[#16a34a]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-available animate-pulse-dot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-available" />
            </span>
            Available for new challenges
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/drive/folders/17saBqrqy5Cema4IsSL3y-Q22nJ5fWMPu?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-ink shadow-sm hover:shadow-md hover:bg-black transition"
            >
              My Resume
            </a>
            <a
              href="https://www.linkedin.com/in/vishakh-mehta/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-semibold text-ink border border-ink/80 hover:bg-neutral-200 hover:text-ink transition"
            >
              Chat on LinkedIn
            </a>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-ink-mute">
              Domains I've worked in
            </p>
            <div className="relative overflow-hidden">
              <div className="flex gap-2 w-max animate-marquee">
                {[...industries, ...industries].map((t, i) => (
                  <span key={i} className="pill-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
            </div>
          </div>

          {/* Journey */}
          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-ink-mute mb-3">
              My Journey
            </p>
            <div className="divide-y divide-line border-t border-line">
              {journey.map((j) => (
                <div
                  key={j.role}
                  className="flex items-start justify-between gap-4 py-3"
                >
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-ink">
                      {j.role}
                    </span>
                    <span className="text-[12.5px] text-ink-dim mt-0.5">
                      {j.services}
                    </span>
                  </div>
                  <span className="text-[12.5px] text-ink-mute whitespace-nowrap pt-0.5">
                    {j.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-ink-mute mb-3">
              Education
            </p>
            <div className="divide-y divide-line border-t border-line">
              {education.map((r) => (
                <div
                  key={r.title}
                  className="flex items-start justify-between gap-4 py-3"
                >
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-ink">
                      {r.title}
                    </span>
                    <span className="text-[12.5px] text-ink-dim mt-0.5">
                      {r.org}
                    </span>
                  </div>
                  <span className="text-[12.5px] text-ink-mute whitespace-nowrap pt-0.5">
                    {r.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Certifications */}
          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-ink-mute mb-3">
              Recognition & Certifications
            </p>
            <div className="divide-y divide-line border-t border-line">
              {recognition.map((r) => (
                <div
                  key={r.title}
                  className="flex items-start justify-between gap-4 py-3"
                >
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-ink">
                      {r.title}
                    </span>
                    <span className="text-[12.5px] text-ink-dim mt-0.5">
                      {r.org}
                    </span>
                  </div>
                  <span className="text-[12.5px] text-ink-mute whitespace-nowrap pt-0.5">
                    {r.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-ink-mute">
              Contact
            </p>
            <div className="flex flex-col gap-1">
              <a
                href="mailto:vishakhmehta.work@gmail.com"
                className="text-[14.5px] font-medium text-ink underline underline-offset-4 decoration-ink-mute hover:decoration-ink"
              >
                vishakhmehta.work@gmail.com
              </a>
              <a
                href="tel:+919911905900"
                className="text-[14.5px] font-medium text-ink underline underline-offset-4 decoration-ink-mute hover:decoration-ink"
              >
                +91 9911905900
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 lg:px-10 py-5 border-t border-line bg-white">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[12.5px] text-ink-mute">
              © 2026 Vishakh Mehta
            </span>
            <nav className="flex items-center gap-4 text-[13px] font-medium">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "text-ink" : "text-ink-mute hover:text-ink"
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/inside-the-box"
                className={({ isActive }) =>
                  isActive ? "text-ink" : "text-ink-mute hover:text-ink"
                }
              >
                Playground
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftPanel />
        <main className="flex-1 lg:h-screen lg:overflow-y-auto no-scrollbar bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
