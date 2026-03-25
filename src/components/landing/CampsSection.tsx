const camps = [
  { name: "Summer Camp 1", dates: "Aug 4 – 14", year: "2026", tag: "FILLING FAST", tagColor: "destructive" as const },
  { name: "Summer Camp 2", dates: "Aug 17 – 27", year: "2026", tag: "FILLING FAST", tagColor: "destructive" as const },
  { name: "October Camp", dates: "Oct 24 – Nov 1", year: "2026", tag: "NEW", tagColor: "primary" as const },
  { name: "New Year's Camp", dates: "Dec 26 – Jan 4", year: "2026/27", tag: "NEW", tagColor: "primary" as const },
];

const CampsSection = () => (
  <section className="bg-gradient-to-b from-hero-bg via-hero-mid to-hero-deep px-5 py-14 md:px-10 md:py-20">
    <div className="mx-auto max-w-3xl text-center">
      <span className="mb-3 inline-block rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-bold uppercase tracking-[2px] text-primary">
        Upcoming Camps
      </span>
      <h2 className="mb-2 font-heading text-[26px] font-extrabold leading-tight text-primary-foreground md:text-4xl">
        Train in <span className="text-accent">Tenerife</span>, Spain
      </h2>
      <p className="mb-10 text-sm text-primary-foreground/40">
        World-class facilities. Year-round sunshine. All camps at Tenerife Top Training.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {camps.map((c, i) => (
          <a
            key={i}
            href="#form"
            className="group relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-surface-dark p-6 text-left transition-all hover:border-primary/40 hover:shadow-[0_0_30px_hsl(264_100%_50%/0.15)]"
          >
            {/* Tag */}
            <span
              className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                c.tagColor === "destructive"
                  ? "bg-destructive/20 text-destructive"
                  : "bg-primary/20 text-primary"
              }`}
            >
              {c.tag}
            </span>

            <h3 className="mb-1 font-heading text-lg font-bold text-primary-foreground group-hover:text-accent transition-colors">
              {c.name}
            </h3>

            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-2xl font-heading font-extrabold text-primary-foreground/90">{c.dates}</span>
              <span className="text-sm font-semibold text-primary-foreground/30">{c.year}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-primary/80 group-hover:text-primary transition-colors">
              <span>Reserve your spot</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>

            {/* Decorative corner glow */}
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />
          </a>
        ))}
      </div>

      <p className="mt-6 text-xs text-primary-foreground/25">
        🌴 10 days of elite training per camp · Limited to 30 swimmers
      </p>
    </div>
  </section>
);

export default CampsSection;
