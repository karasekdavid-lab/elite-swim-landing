import { useState, useEffect } from "react";

// Add your WhatsApp testimonial screenshots here
const testimonialImages: { src: string; alt: string }[] = [
  // { src: importedImage, alt: "WhatsApp testimonial from parent" },
];

const ProofStrip = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonialImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (testimonialImages.length === 0) {
    return (
      <div className="bg-accent px-5 py-8 text-center">
        <p className="text-sm font-semibold text-accent-foreground/60">
          WhatsApp testimonial screenshots coming soon…
        </p>
      </div>
    );
  }

  return (
    <div className="bg-accent px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-2xl">
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

        {testimonialImages.length > 1 && (
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
        )}
      </div>
    </div>
  );
};

export default ProofStrip;
