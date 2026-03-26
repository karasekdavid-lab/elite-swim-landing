const camps = [
  { name: "Summer Camp 1", dates: "Aug 4 – 14", year: "2026", tag: "FILLING FAST", tagColor: "destructive" as const, highlight: "🐬 Includes Junior Camp for 8–12 year old swimmers", emoji: "☀️", season: "summer", vibe: "Golden sunshine & long pool days" },
  { name: "Summer Camp 2", dates: "Aug 17 – 27", year: "2026", tag: "FILLING FAST", tagColor: "destructive" as const, highlight: "⭐ Guest coaches: WR holders Peter Mankoč & Milorad Čavić — all 10 days", emoji: "🌊", season: "summer", vibe: "Best SCM Season Start EVER" },
  { name: "October Camp", dates: "Oct 24 – Nov 1", year: "2026", tag: "NEW", tagColor: "primary" as const, highlight: "", emoji: "🍂", season: "fall", vibe: "Crisp autumn focus" },
  { name: "New Year's Camp", dates: "Dec 26 – Jan 4", year: "2026/27", tag: "NEW", tagColor: "primary" as const, highlight: "", emoji: "🎄", season: "winter", vibe: "Change in the new year FAST" },
];

const seasonStyles: Record<string, { gradient: string; accent: string; glow: string }> = {
  summer: {
    gradient: "from-amber-500/10 via-orange-400/5 to-yellow-300/10",
    accent: "bg-amber-400/15 text-amber-300",
    glow: "bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  fall: {
    gradient: "from-orange-600/10 via-red-500/5 to-amber-600/10",
    accent: "bg-orange-400/15 text-orange-300",
    glow: "bg-orange-400/10 group-hover:bg-orange-400/20",
  },
  winter: {
    gradient: "from-emerald-500/10 via-red-500/5 to-emerald-400/10",
    accent: "bg-emerald-400/15 text-emerald-300",
    glow: "bg-red-400/10 group-hover:bg-emerald-400/20",
  },
};

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
        {camps.map((c, i) => {
          const style = seasonStyles[c.season];
          return (
            <a
              key={i}
              href="#form"
              className={`group relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-gradient-to-br ${style.gradient} bg-surface-dark p-6 text-left transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(264_100%_50%/0.25)] hover:scale-[1.03] hover:-translate-y-1`}
            >
              {/* Season emoji */}
              <span className="absolute top-4 right-4 text-3xl opacity-30 group-hover:opacity-60 transition-opacity">
                {c.emoji}
              </span>

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

              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-2xl font-heading font-extrabold text-primary-foreground/90">{c.dates}</span>
                <span className="text-sm font-semibold text-primary-foreground/30">{c.year}</span>
              </div>

              <p className={`mb-4 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${style.accent}`}>
                {c.vibe}
              </p>

              {c.highlight && (
                <p className="mb-4 rounded-lg bg-accent/10 px-3 py-2 text-[12px] font-semibold leading-snug text-accent">
                  {c.highlight}
                </p>
              )}

              <div className="flex items-center gap-2 text-xs font-bold text-accent group-hover:text-accent transition-colors">
                <span>Find out more</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>

              {/* Decorative corner glow */}
              <div className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full transition-all ${style.glow}`} />
            </a>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-primary-foreground/25">
        🌴 10 days of elite training per camp · Limited to 30 swimmers
      </p>
    </div>
  </section>
);

export default CampsSection;
