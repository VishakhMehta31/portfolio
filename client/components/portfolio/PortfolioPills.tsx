type Pill = { label: string; top: string; left: string };

const userColor = "#a855f7";
const techColor = "#3b82f6";
const bizColor = "#f97316";

const userPillBg = "#e11d8c";
const techPillBg = "#7c3aed";
const bizPillBg = "#f97316";

const userPills: Pill[] = [
  { label: "User Research", top: "20%", left: "18%" },
  { label: "Information Architecture", top: "27%", left: "20%" },
  { label: "Cognitive Model", top: "34%", left: "23%" },
  { label: "Moderated Studies", top: "41%", left: "23%" },
  { label: "User Testing", top: "48%", left: "22%" },
  { label: "Why?", top: "18%", left: "40%" },
];

const techPills: Pill[] = [
  { label: "AI-Assisted Coding", top: "20%", left: "76%" },
  { label: "Emerging Tech (Spatial UI)", top: "28%", left: "76%" },
  { label: "Builder.io", top: "36%", left: "72%" },
  { label: "Developer Collaboration", top: "44%", left: "78%" },
  { label: "Figma", top: "50%", left: "80%" },
];

const bizPills: Pill[] = [
  { label: "Workflow Automation", top: "62%", left: "36%" },
  { label: "First-Principles Approach", top: "62%", left: "68%" },
  { label: "Product Strategy", top: "71%", left: "36%" },
  { label: "Stakeholder Management", top: "71%", left: "66%" },
  { label: "Market Analysis", top: "80%", left: "38%" },
  { label: "A/B Testing", top: "80%", left: "62%" },
];

function PillTag({
  pill,
  bg,
  index,
}: {
  pill: Pill;
  bg: string;
  index: number;
}) {
  const delay = `${(index % 6) * 0.35}s`;
  const duration = `${5 + (index % 4) * 0.6}s`;
  return (
    <span
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top: pill.top, left: pill.left }}
    >
      <span
        className="inline-block animate-float-y will-change-transform transition-transform duration-200 ease-out hover:scale-110 hover:-translate-y-0.5 cursor-default"
        style={{ animationDelay: delay, animationDuration: duration }}
      >
        <span
          className="block whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-white shadow-sm"
          style={{ backgroundColor: bg }}
        >
          {pill.label}
        </span>
      </span>
    </span>
  );
}

export default function PortfolioPills() {
  return (
    <div className="relative w-full rounded-3xl bg-[#fbf7ee] overflow-hidden px-4 sm:px-6 py-7 sm:py-8">
      <div
        className="relative mx-auto aspect-square w-full max-w-[520px]"
        role="img"
        aria-label="Venn diagram: I work at the intersection of User, Technology, and Business."
      >
        {/* Circles */}
        <div
          className="absolute rounded-full border-[2px]"
          style={{
            top: "0%",
            left: "0%",
            width: "58%",
            height: "58%",
            borderColor: userColor,
          }}
        />
        <div
          className="absolute rounded-full border-[2px]"
          style={{
            top: "0%",
            left: "42%",
            width: "58%",
            height: "58%",
            borderColor: techColor,
          }}
        />
        <div
          className="absolute rounded-full border-[2px]"
          style={{
            top: "36%",
            left: "21%",
            width: "58%",
            height: "58%",
            borderColor: bizColor,
          }}
        />

        {/* Circle labels */}
        <span
          className="absolute -translate-x-1/2 text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-ink"
          style={{ top: "6%", left: "29%" }}
        >
          User
        </span>
        <span
          className="absolute -translate-x-1/2 text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-ink"
          style={{ top: "6%", left: "71%" }}
        >
          Technology
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-full text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-ink"
          style={{ top: "92%", left: "50%" }}
        >
          Business
        </span>

        {/* Pills */}
        {userPills.map((p, i) => (
          <PillTag key={p.label} pill={p} bg={userPillBg} index={i} />
        ))}
        {techPills.map((p, i) => (
          <PillTag key={p.label} pill={p} bg={techPillBg} index={i + 2} />
        ))}
        {bizPills.map((p, i) => (
          <PillTag key={p.label} pill={p} bg={bizPillBg} index={i + 4} />
        ))}

        {/* SVG overlay: dot, arrow, "I'm here" */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <marker
              id="vd-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#111" />
            </marker>
          </defs>
          {/* triple intersection dot */}
          <circle cx="50" cy="41" r="1.2" fill="#111" />
          {/* curved arrow to lower-right */}
          <path
            d="M 50 41 C 62 46, 78 56, 94 58"
            stroke="#111"
            strokeWidth="0.75"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#vd-arrow)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* "I'm here" label (HTML so it scales with font + stays crisp) */}
        <span
          className="absolute italic text-[11px] sm:text-[12px] md:text-[13px] text-ink whitespace-nowrap -translate-y-1/2"
          style={{ top: "58%", left: "96%" }}
        >
          I&rsquo;m here
        </span>
      </div>
    </div>
  );
}
