import { useState, useEffect } from "react";
import wa1 from "@/assets/whatsapp1.png";
import wa2 from "@/assets/whatsapp2.png";
import wa3 from "@/assets/whatsapp3.png";
import wa4 from "@/assets/whatsapp4.png";

const testimonialImages = [
  { src: wa1, alt: "WhatsApp testimonial from a parent thanking the coaching team" },
  { src: wa2, alt: "WhatsApp testimonial thanking the camp for great training" },
  { src: wa3, alt: "WhatsApp testimonial praising the top camp experience" },
  { src: wa4, alt: "WhatsApp testimonial from parents grateful for the camp" },
];

const ProofStrip = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-accent px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-md text-center">
        <span className="mb-4 block text-sm font-bold uppercase tracking-[2px] text-accent-foreground/60 md:text-base">
          What Swim Parents Say About The Camps
        </span>
        <h2 className="mb-2 font-heading text-[26px] font-extrabold leading-tight text-accent-foreground md:text-4xl">
          You Can't Trust Everything You See on The Internet.
        </h2>
        <p className="mb-5 text-base text-accent-foreground/70 md:text-lg">
          But you can trust{" "}
          <a
            href="https://g.page/r/CX-ypm1QP-n2EAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
          >
            51x five-star ratings including reviews & pictures on Google ⭐
          </a>
        </p>
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonialImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full shrink-0 rounded-xl object-contain"
              />
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center gap-2">
          {testimonialImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                i === current ? "w-8 bg-slider-dot" : "w-3 bg-accent-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofStrip;
