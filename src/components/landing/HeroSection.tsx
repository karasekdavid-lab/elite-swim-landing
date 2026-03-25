import { useState, useEffect } from "react";
import heroImg from "@/assets/hero.png";
import heroImg2 from "@/assets/hero2.png";
import heroImg3 from "@/assets/hero3.png";

const heroImages = [
  { src: heroImg, alt: "Swimpros coaching team at the pool in Tenerife" },
  { src: heroImg2, alt: "Tenerife Top Training swimming facility at sunset" },
  { src: heroImg3, alt: "Swimpros group photo with all swimmers" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-hero-bg via-hero-mid to-hero-deep px-5 py-12 text-center md:px-10 md:py-20">
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
          Elite coaching, flume channel analysis, and daily confidence training to help competitive swimmers break through plateaus.
        </p>

        {/* Hero image carousel */}
        <div className="relative mx-auto mb-7 max-w-2xl overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {heroImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-auto w-full shrink-0 object-cover"
              />
            ))}
          </div>
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
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
