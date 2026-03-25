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
      <div className="mx-auto max-w-sm">
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
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-2 bg-accent-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofStrip;
