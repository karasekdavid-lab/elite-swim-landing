import yulImg from "@/assets/yul_headshot.png";
import davidImg from "@/assets/david_headshot.png";

const coaches = [
  {
    name: "Yul Münger",
    role: "Head Coach",
    desc: "Gets in the water with every swimmer. Coached alongside Olympic medalists. Turns potential into race-day results.",
    img: yulImg,
  },
  {
    name: "David Karasek",
    role: "Head Coach",
    desc: "Builds bulletproof confidence. If your swimmer trains great but races scared, David fixes that.",
    img: davidImg,
  },
];

const CoachesSection = () => (
  <section className="bg-secondary px-5 py-14 md:px-10 md:py-20">
    <span className="mb-3 inline-block rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
      The Team
    </span>
    <h2 className="mb-3.5 font-heading text-[26px] font-extrabold leading-tight text-secondary-foreground md:text-4xl">
      Meet Your Coaches
    </h2>
    <p className="mb-6 text-sm text-secondary-foreground/40">The people who'll be working with your swimmer</p>

    <div className="grid gap-4 md:grid-cols-2">
      {coaches.map((c, i) => (
        <div key={i} className="flex gap-4 rounded-[14px] border border-secondary-foreground/5 bg-surface-dark p-6">
          <img
            src={c.img}
            alt={c.name}
            className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
          />
          <div>
            <h3 className="font-heading text-base font-bold text-secondary-foreground">{c.name}</h3>
            <div className="mb-2 text-xs font-semibold text-accent">{c.role}</div>
            <p className="text-[13px] leading-relaxed text-secondary-foreground/50">{c.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CoachesSection;
