import { ReactNode } from "react";

export type CaseStudy = {
  title: string;
  sub?: string;
  tags: string[];
  image?: string;
  visual?: ReactNode;
  className?: string;
  href?: string;
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const visualInner = study.image ? (
    <img
      src={study.image}
      alt={study.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  ) : (
    study.visual
  );

  const visualClasses = `relative w-full rounded-3xl overflow-hidden border border-line bg-surface h-[320px] sm:h-[420px] lg:h-[520px] ${
    study.className ?? ""
  }`;

  return (
    <div className="space-y-4">
      {study.href ? (
        <a
          href={study.href}
          target="_blank"
          rel="noreferrer"
          className={`group block cursor-pointer transition-shadow hover:shadow-md ${visualClasses}`}
        >
          {visualInner}
        </a>
      ) : (
        <div className={visualClasses}>{visualInner}</div>
      )}
      <div className="flex flex-col gap-2 px-1">
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-ink">
          {study.title}
          {study.sub && (
            <span className="text-ink-mute font-normal"> {study.sub}</span>
          )}
        </h3>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <span key={t} className="card-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
