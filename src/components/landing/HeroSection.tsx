import { useState, useEffect } from "react";
import heroImg from "@/assets/hero.png";
import heroImg2 from "@/assets/hero2.png";
import heroImg3 from "@/assets/hero3.png";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/6FMzWKJETHi9LlgCsxFy/webhook-trigger/2e41dec7-eac2-4369-bfe6-493b1aeb708a";

const COUNTRY_CODES = [
  { code: "+44", flag: "🇬🇧", label: "GB" },
  { code: "+1", flag: "🇺🇸", label: "US" },
  { code: "+49", flag: "🇩🇪", label: "DE" },
  { code: "+33", flag: "🇫🇷", label: "FR" },
  { code: "+34", flag: "🇪🇸", label: "ES" },
  { code: "+39", flag: "🇮🇹", label: "IT" },
  { code: "+31", flag: "🇳🇱", label: "NL" },
  { code: "+41", flag: "🇨🇭", label: "CH" },
  { code: "+43", flag: "🇦🇹", label: "AT" },
  { code: "+46", flag: "🇸🇪", label: "SE" },
  { code: "+47", flag: "🇳🇴", label: "NO" },
  { code: "+45", flag: "🇩🇰", label: "DK" },
  { code: "+61", flag: "🇦🇺", label: "AU" },
  { code: "+27", flag: "🇿🇦", label: "ZA" },
  { code: "+91", flag: "🇮🇳", label: "IN" },
  { code: "+81", flag: "🇯🇵", label: "JP" },
  { code: "+55", flag: "🇧🇷", label: "BR" },
  { code: "+971", flag: "🇦🇪", label: "AE" },
];

const heroImages = [
  { src: heroImg, alt: "Swimpros coaching team at the pool in Tenerife" },
  { src: heroImg2, alt: "Tenerife Top Training swimming facility at sunset" },
  { src: heroImg3, alt: "Swimpros group photo with all swimmers" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: name,
          whatsapp: `${countryCode}${phone}`,
        }),
      });
      (window.top || window).location.href = "https://www.swimpros.com/successful";
    } catch (err) {
      console.error("Webhook error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-hero-bg via-hero-mid to-hero-deep px-5 py-12 text-center md:px-10 md:py-20">
      <div className="absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,hsl(264_100%_50%/0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl">

        <h1 className="mb-4 font-heading text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
          Get Camp <span className="text-accent">Dates, Pricing</span> & Available Spots
          <br />
          on WhatsApp
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
          We'll send you everything on WhatsApp — usually within 5 minutes. No forms, no back-and-forth. Just the info you need.
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
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2.5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all ${
                  i === current ? "w-8 bg-slider-dot" : "w-3 bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="mb-7 text-sm font-semibold text-primary-foreground/80 md:text-base">
          <span className="text-[#25D366]">✓</span> 200+ families from 15+ countries
        </p>

        {/* Quick WhatsApp form */}
        <div className="mx-auto max-w-md rounded-2xl bg-background p-6 shadow-[0_4px_30px_hsl(0_0%_0%/0.15)]">
          <h3 className="mb-1 font-heading text-lg font-bold text-foreground">Get the Details Instantly</h3>
          <p className="mb-5 text-sm text-muted-foreground">
            We'll message you on <span className="font-semibold text-primary">WhatsApp</span> to ask a few qualifying questions about your swimmer and share dates, pricing & logistics with you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="mb-1 block text-center text-[13px] font-semibold text-foreground/80">Your name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Johnson"
                required
                className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 text-center font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-center text-[13px] font-semibold text-foreground/80">WhatsApp number</label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-[110px] shrink-0 rounded-lg border-2 border-border bg-muted px-2 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code + c.label} value={c.code}>
                      {c.label} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="7700 900123"
                  required
                  className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 w-full rounded-lg bg-[#25D366] py-4 font-heading text-base font-bold text-white shadow-md transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {submitting ? "SENDING..." : (
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  SEND ME THE DETAILS →
                </span>
              )}
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              No spam. We'll text you the camp info and you decide from there.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
