const testimonials = [
  { quote: '"My daughter came back a completely different swimmer. The mental training changed everything."', name: "Helen - Parent, UK", youtubeId: "pAOtwK8oVUo" },
  { quote: '"He was stuck at the same times for 2 years. After one camp with Yul, he dropped 3 seconds."', name: "Alice - Parent, Romania", youtubeId: "YMiY_lN8u2E" },
  { quote: '"The flume channel was incredible. I could actually SEE what I was doing wrong."', name: "Gabriel - Swimmer, 15", youtubeId: "bHD0YTtrT2k" },
  { quote: '"Best 10 days of my swimming career. I wish I\'d found Swimpros sooner."', name: "Oli - Swimmer, 17", youtubeId: "BjT-ufBF2mI" },
];

const VideoPlaceholder = ({ quote, name }: { quote: string; name: string }) => (
  <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[14px] bg-secondary">
    <div className="absolute left-3 right-3 top-3 z-10 text-xs italic leading-relaxed text-primary-foreground/65">
      {quote}
    </div>
    <div className="z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary/80">
      <div className="ml-0.5 h-0 w-0 border-b-[11px] border-l-[18px] border-t-[11px] border-b-transparent border-l-primary-foreground border-t-transparent" />
    </div>
    <div className="absolute bottom-3 left-3 rounded-md bg-secondary/70 px-3 py-1.5 text-[13px] font-semibold text-primary-foreground">
      {name}
    </div>
    <span className="absolute bottom-10 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground/25">
      Video coming soon
    </span>
  </div>
);

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
      {testimonials.map((t, i) =>
        t.youtubeId ? (
          <div key={i} className="overflow-hidden rounded-[14px]">
            <iframe
              src={`https://www.youtube.com/embed/${t.youtubeId}`}
              title={t.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <VideoPlaceholder key={i} quote={t.quote} name={t.name} />
        )
      )}
    </div>

    <p className="mt-8 text-center text-base font-semibold leading-relaxed text-foreground md:text-lg">
      In 2026 you can't trust everything you see on the internet.{" "}
      <br className="hidden md:inline" />
      But you can trust{" "}
      <a
        href="https://www.google.com/maps/place/SwimPros/@0,0,0z/data=!4m8!3m7!1s0x0:0x0!8m2!3d0!4d0!9m1!1b1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        50 five-star ratings on Google ⭐
      </a>
    </p>
  </section>
);

export default TestimonialsSection;
