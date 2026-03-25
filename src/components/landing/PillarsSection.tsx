import { useState, useEffect } from "react";
import flume1 from "@/assets/flume1.png";
import flume2 from "@/assets/flume2.png";
import flume3 from "@/assets/flume3.png";
import flume4 from "@/assets/flume4.png";
import mental1 from "@/assets/mental1.png";
import mental2 from "@/assets/mental2.png";
import mental3 from "@/assets/mental3.png";

const AutoCarousel = ({ images, interval = 3500 }: { images: { src: string; alt: string }[]; interval?: number }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative mb-3.5 aspect-[3/2] overflow-hidden rounded-lg">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} className="h-full w-full shrink-0 object-cover" />
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-primary" : "w-1.5 bg-foreground/30"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type PillarImages = { src: string; alt: string }[];

const ImagePlaceholder = ({ label, hint }: { label: string; hint: string }) => (
  <div className="mb-3.5 flex aspect-[3/2] flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/15 bg-gradient-to-br from-primary/5 to-primary/10">
    <span className="text-[11px] font-semibold uppercase tracking-wide text-primary/60">{label}</span>
    <span className="mt-1 text-[10px] text-primary/40">{hint}</span>
  </div>
);

interface Pillar {
  icon: string;
  title: string;
  desc: string;
  images?: PillarImages;
  imgLabel?: string;
  imgHint?: string;
}

const pillars: Pillar[] = [
  {
    icon: "🎥",
    title: "Flume Channel Video Analysis",
    desc: "Your swimmer gets filmed in a hydrodynamic flume channel with 1:1 coaching. They see exactly what's costing them time and get a personalized technical plan.",
    images: [
      { src: flume1, alt: "Swimmer in the flume channel" },
      { src: flume2, alt: "Swimmer at Tenerife Top Training flume" },
      { src: flume3, alt: "Underwater video analysis in the flume" },
      { src: flume4, alt: "Tenerife Top Training flume facility" },
    ],
  },
  {
    icon: "🧠",
    title: "Daily Mental Performance Training",
    desc: "Race anxiety, choking under pressure, inconsistent meets - these aren't character flaws. They're skills that can be trained. Same frameworks behind Olympic medalists.",
    images: [
      { src: mental1, alt: "Mental performance session with swimmers" },
      { src: mental2, alt: "Gym and strength training session" },
      { src: mental3, alt: "Coach briefing swimmers poolside" },
    ],
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
          {p.images ? (
            <AutoCarousel images={p.images} />
          ) : (
            <ImagePlaceholder label={p.imgLabel!} hint={p.imgHint!} />
          )}
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
