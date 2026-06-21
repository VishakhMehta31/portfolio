export default function FooterCard() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden h-[360px] sm:h-[460px] lg:h-[520px] border border-line">
      <img
        src="https://by-linh.vercel.app/images/footer%20bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="animate-float-y backdrop-blur-md bg-white/60 border border-white/70 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 max-w-[420px] text-center shadow-lg">
          <p className="text-[18px] sm:text-[20px] font-semibold text-ink leading-snug">
            Designing systems that simplify the complex.
          </p>
          <p className="text-[13.5px] text-ink-dim mt-2">
            Open to new challenges — let's build something useful together.
          </p>
        </div>
      </div>
    </div>
  );
}
