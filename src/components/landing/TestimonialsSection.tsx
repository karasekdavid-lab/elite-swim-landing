const testimonials = [
  { quote: '"My daughter came back a completely different swimmer. The mental training changed everything."', name: "Helen - Parent, UK" },
  { quote: '"He was stuck at the same times for 2 years. After one camp with Yul, he dropped 3 seconds."', name: "Alice - Parent, Romania" },
  { quote: '"The flume channel was incredible. I could actually SEE what I was doing wrong."', name: "Gabriel - Swimmer, 15" },
  { quote: '"Best 10 days of my swimming career. I wish I\'d found SwimPros sooner."', name: "Oli - Swimmer, 17" },
];

const TestimonialsSection = () => (
  <section className="bg-background px-5 py-14 md:px-10 md:py-20">
    <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
      Results
    </span>
    <h2 className="mb-3.5 font-heading text-[26px] font-extrabold leading-tight text-foreground md:text-4xl">
      Don't Take Our Word For It
    </h2>
    <p className="mb-6 text-sm text-muted-foreground">Real parents. Real swimmers. Real results.</p>

    <div className="grid gap-4 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[14px] bg-secondary"
        >
          <div className="absolute left-3 right-3 top-3 z-10 text-xs italic leading-relaxed text-primary-foreground/65">
            {t.quote}
          </div>
          {/* Play button */}
          <div className="z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary/80">
            <div className="ml-0.5 h-0 w-0 border-b-[11px] border-l-[18px] border-t-[11px] border-b-transparent border-l-primary-foreground border-t-transparent" />
          </div>
          <div className="absolute bottom-3 left-3 rounded-md bg-secondary/70 px-3 py-1.5 text-[13px] font-semibold text-primary-foreground">
            {t.name}
          </div>
          <span className="absolute bottom-10 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground/25">
            Replace with video embed
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
