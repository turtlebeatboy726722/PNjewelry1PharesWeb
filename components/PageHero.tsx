export default function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      className="relative flex items-end pb-16 pt-40"
      style={{ background: "var(--ink)", minHeight: "340px" }}
    >
      {/* Decorative gold lines */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <p className="section-label mb-4">{label}</p>
        <h1
          className="text-white font-display font-light"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-charcoal-400 mt-4 text-sm tracking-widest max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
