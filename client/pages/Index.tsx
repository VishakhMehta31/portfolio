import PortfolioPills from "@/components/portfolio/PortfolioPills";
import CaseStudyCard, { CaseStudy } from "@/components/portfolio/CaseStudyCard";
import FooterCard from "@/components/portfolio/FooterCard";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

function HeroVisual({
  title,
  subtitle,
  metric,
  fromText,
  pillClass,
}: {
  title: string;
  subtitle?: string;
  metric: string;
  fromText: string;
  pillClass: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-8 max-w-[90%]">
        <div
          className={`text-[40px] sm:text-[64px] font-bold tracking-tight leading-[0.95] ${fromText}`}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className={`text-[15px] sm:text-[18px] font-medium mt-2 opacity-80 ${fromText}`}
          >
            {subtitle}
          </div>
        )}
        <div
          className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold ${pillClass}`}
        >
          {metric}
        </div>
      </div>
    </div>
  );
}

function SmartCommsVisual() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <span className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-ink shadow-md opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <div className="px-6 sm:px-10 pt-7 sm:pt-10 lg:pt-12 text-center">
        <h3 className="text-[28px] sm:text-[40px] lg:text-[36px] font-bold tracking-tight text-white leading-[1.05]">
          Reimagining Communication Creation with AI
        </h3>
        <p className="mx-auto mt-2 sm:mt-3 max-w-[640px] text-[12px] sm:text-[14px] lg:text-[15px] font-semibold leading-snug text-blue-100">
          Helping business teams launch personalized campaigns{" "}
          <span className="font-bold text-white">80% faster</span> through
          AI-generated content, workflow automation, and intelligent channel
          orchestration. (Dollar impact saving{" "}
          <span className="font-bold text-white">$2M+ annually</span>)
        </p>
      </div>
      <div className="relative mt-4 sm:mt-6 flex-1 overflow-hidden flex justify-center px-10">
        <div className="relative mx-auto w-full max-w-[900px] h-full rounded-t-xl overflow-hidden">
          <video
            className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F539b12ee6803454fb3d9b0a36cd339e8?format=webp&width=1600"
          >
            <source
              src="https://cdn.builder.io/o/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F4cd583ab9f074df4a47cef7d0bfa063c?alt=media&token=af505b3f-cbf9-461b-99df-5c85c0b80120&apiKey=02297b1ff48d4a2f8e4d9ed415c47ecf"
              type="video/quicktime"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F539b12ee6803454fb3d9b0a36cd339e8?format=webp&width=1600"
              alt="Smart Comms — Create Communication dashboard"
              className="w-full h-full object-cover object-top"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

const studies: CaseStudy[] = [
  {
    title: "Smart Comms",
    tags: ["Communication Platform", "SMS · Push · Email", "Enterprise"],
    className: "bg-gradient-to-b from-[#2563eb] to-[#1d4ed8]",
    href: "https://www.figma.com/proto/EGpsxhOToZPSNxt9JzSUAp/Prerequisite?page-id=2111%3A92267&node-id=2525-237667&viewport=2540%2C-2217%2C0.28&t=ObhlKdMp9XAD2uA4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2525%3A237667",
    visual: <SmartCommsVisual />,
  },
  {
    title: "Incentives Dashboard",
    tags: ["Automation", "Dashboard", "Web"],
    className: "bg-gradient-to-br from-[#fff7ed] via-[#fde68a] to-[#f97316]",
    visual: (
      <HeroVisual
        title="Incentives"
        subtitle="Driver rewards, automated"
        metric="$20M annual savings · +15% LCA metrics"
        fromText="text-[#9a3412]"
        pillClass="bg-white/80 backdrop-blur text-[#9a3412]"
      />
    ),
  },
  {
    title: "Cosmos Simulation Tools",
    sub: "— WFP, Load Planner, Dispatching",
    tags: ["Simulation", "Forecasting", "Enterprise"],
    className: "bg-gradient-to-br from-[#1e1b4b] via-[#4338ca] to-[#8b5cf6]",
    visual: (
      <HeroVisual
        title="Cosmos"
        subtitle="WFP · Load Planner · Dispatching"
        metric="Completion rate 80% → 90%+"
        fromText="text-white"
        pillClass="bg-white/90 text-[#1e1b4b]"
      />
    ),
  },
  {
    title: "DataPhin",
    tags: ["Data Platform", "Cross-Org", "Web"],
    className: "bg-gradient-to-br from-[#022c22] via-[#047857] to-[#14b8a6]",
    visual: (
      <HeroVisual
        title="DataPhin"
        subtitle="Refining data, across orgs"
        metric="$32M cloud infra savings"
        fromText="text-white"
        pillClass="bg-white/90 text-[#022c22]"
      />
    ),
  },
  {
    title: "WallE — Cataloging Tools",
    tags: ["Internal Tool", "Catalog", "A/B Tested"],
    className: "bg-gradient-to-br from-[#831843] via-[#be185d] to-[#e879f9]",
    visual: (
      <HeroVisual
        title="WallE"
        subtitle="Cataloging at scale"
        metric="60% faster validation · 7% fewer errors"
        fromText="text-white"
        pillClass="bg-white/90 text-[#831843]"
      />
    ),
  },
];

export default function Index() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-8 lg:py-10 space-y-8 lg:space-y-10">
      <PortfolioPills />
      {studies.map((s) => (
        <CaseStudyCard key={s.title} study={s} />
      ))}
      <FooterCard />
      <div className="h-6" />
    </div>
  );
}
