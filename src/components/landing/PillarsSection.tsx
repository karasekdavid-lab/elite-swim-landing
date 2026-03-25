const pillars = [
  {
    icon: "🎥",
    title: "Flume Channel Video Analysis",
    desc: "Your swimmer gets filmed in a hydrodynamic flume channel with 1:1 coaching. They see exactly what's costing them time and get a personalized technical plan.",
    imgLabel: "Photo: Flume Channel",
    imgHint: "Swimmer in the flume with coach analyzing",
  },
  {
    icon: "🧠",
    title: "Daily Mental Performance Training",
    desc: "Race anxiety, choking under pressure, inconsistent meets - these aren't character flaws. They're skills that can be trained. Same frameworks behind Olympic medalists.",
    imgLabel: "Photo: Mental Training",
    imgHint: "David leading a mental performance session",
  },
  {
    icon: "🏊",
    title: "Olympic-Level Coaching",
    desc: "Head coach Yul doesn't watch from the deck. He gets in the water. He's coached alongside world record holder Milorad Cavic and treats every swimmer like they're headed to Olympic trials.",
    imgLabel: "Photo: Yul In The Water",
    imgHint: "Yul coaching swimmers in the pool",
  },
];

const PillarsSection = () => (
  <section className="bg-muted px-5 py-14 md:px-10 md:py-20">
    <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
      Why SwimPros
    </span>
    <h2 className="mb-3.5 font-heading text-[26px] font-extrabold leading-tight text-foreground md:text-4xl">
      This Is <span className="text-primary">Not</span> a Regular Swim Camp
    </h2>
    <p className="mb-7 text-[15px] leading-relaxed text-muted-foreground">
      Most swim camps give your kid more laps. We give them a system built on three pillars that 99% of clubs never touch.
    </p>

    <div className="grid gap-4 md:grid-cols-3">
      {pillars.map((p, i) => (
        <div key={i} className="rounded-[14px] border border-border bg-background p-5">
          <div className="mb-3.5 flex aspect-[3/2] flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/15 bg-gradient-to-br from-primary/5 to-primary/10">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-primary/60">{p.imgLabel}</span>
            <span className="mt-1 text-[10px] text-primary/40">{p.imgHint}</span>
          </div>
          <div className="mb-2.5 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[22px]">
              {p.icon}
            </div>
            <h3 className="font-heading text-base font-bold text-foreground">{p.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PillarsSection;
