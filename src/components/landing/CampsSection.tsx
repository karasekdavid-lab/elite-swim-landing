const camps = [
  {
    date: "AUG 4-14, 2026",
    title: "Summer Camp 1",
    location: "Tenerife, Spain",
    imgLabel: "Photo: Pool / Tenerife",
    imgHint: "Training facility or resort view",
  },
  {
    date: "AUG 17-27, 2026",
    title: "Summer Camp 2",
    location: "Tenerife, Spain",
    imgLabel: "Photo: Camp Action Shot",
    imgHint: "Swimmers in action or group photo",
  },
];

const CampsSection = () => (
  <section className="bg-muted px-5 py-14 md:px-10 md:py-20">
    <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
      Upcoming Camps
    </span>
    <h2 className="mb-6 font-heading text-[26px] font-extrabold leading-tight text-foreground md:text-4xl">
      Next Available Camps
    </h2>

    <div className="grid gap-4 md:grid-cols-2">
      {camps.map((c, i) => (
        <div key={i} className="overflow-hidden rounded-[14px] border border-border bg-background">
          <div className="flex aspect-video flex-col items-center justify-center border-b border-border bg-gradient-to-br from-primary/10 to-primary/20">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-primary/55">{c.imgLabel}</span>
            <span className="mt-1 text-[10px] text-primary/35">{c.imgHint}</span>
          </div>
          <div className="p-5">
            <span className="mb-2 inline-block rounded bg-accent px-2.5 py-0.5 text-[11px] font-bold text-accent-foreground">
              {c.date}
            </span>
            <h3 className="mb-1 font-heading text-[17px] font-bold text-foreground">{c.title}</h3>
            <p className="mb-3 text-[13px] text-muted-foreground">{c.location}</p>
            <p className="mb-3.5 text-xs font-semibold text-destructive">🔥 Almost Full</p>
            <a
              href="#form"
              className="block w-full rounded-lg bg-secondary py-3 text-center font-heading text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-90"
            >
              LEARN MORE →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CampsSection;
