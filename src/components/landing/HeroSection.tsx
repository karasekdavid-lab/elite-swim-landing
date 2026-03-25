import heroImg from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-hero-bg via-hero-mid to-hero-deep px-5 py-12 text-center md:px-10 md:py-20">
      {/* Decorative glow */}
      <div className="absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,hsl(264_100%_50%/0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-8 font-heading text-lg font-extrabold uppercase tracking-[2px] text-primary-foreground">
          SWIM<span className="text-primary">PROS</span>
        </div>

        <h1 className="mb-4 font-heading text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
          Your Swimmer Is Training Hard.
          <br />
          <span className="text-accent">Are They Training Smart?</span>
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
          Elite coaching, flume channel analysis, and daily mental training to help competitive swimmers aged 10-18 break through plateaus.
        </p>

        {/* Hero image placeholder */}
        <div className="mx-auto mb-7 flex aspect-[16/10] max-w-2xl flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary-foreground/20 bg-gradient-to-br from-surface-dark to-hero-deep">
          <span className="rounded-md bg-secondary/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
            Photo: Hero Image
          </span>
          <span className="mt-1.5 text-[11px] text-primary-foreground/30">
            Swimmers training in the pool / Yul coaching in the water
          </span>
        </div>

        <a
          href="#form"
          className="inline-block w-full rounded-lg bg-primary px-6 py-4 font-heading text-[15px] font-bold text-primary-foreground shadow-[0_4px_20px_hsl(264_100%_50%/0.27)] transition-transform hover:scale-[1.02] md:w-auto md:px-10 md:text-[17px]"
        >
          GET YOUR FREE PERFORMANCE ASSESSMENT →
        </a>
        <p className="mt-2.5 text-xs text-primary-foreground/30">
          Free 15-min call with our head coach - no strings attached
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
