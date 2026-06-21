export default function InsideTheBox() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-12 lg:py-16">
      <div className="max-w-2xl space-y-10">
        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-mute">
            About
          </p>
          <h1 className="mt-3 text-[32px] sm:text-[40px] font-semibold tracking-tight text-ink leading-tight">
            Inside the box
          </h1>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-dim">
            A peek behind the work — how I think, the tools I lean on, and
            what I'm learning along the way.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-[18px] font-semibold text-ink">How I work</h2>
          <ul className="list-disc pl-5 text-[14.5px] leading-[1.7] text-ink-dim space-y-2">
            <li>
              <span className="text-ink font-medium">First-principles framing.</span>{" "}
              I strip problems back to the people, the constraints, and the
              outcome — then design forward from there.
            </li>
            <li>
              <span className="text-ink font-medium">System-driven impact.</span>{" "}
              I look for the reusable pattern behind each flow so a fix in one
              place pays off across the org.
            </li>
            <li>
              <span className="text-ink font-medium">AI-augmented workflows.</span>{" "}
              I use AI as a teammate — for research synthesis, exploration, and
              accelerating the boring parts so design judgment gets the
              spotlight.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-[18px] font-semibold text-ink">Tools I use</h2>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Adobe Creative Suite", "ProtoPie", "Notion", "Loveable.ai"].map(
              (t) => (
                <span key={t} className="pill-tag">
                  {t}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-[18px] font-semibold text-ink">What's next</h2>
          <p className="text-[14.5px] leading-[1.7] text-ink-dim">
            This corner of the site will keep growing — more on process,
            writing, and small experiments. If something here sparks a
            conversation, reach out via the email in the side panel.
          </p>
        </section>
      </div>
    </div>
  );
}
