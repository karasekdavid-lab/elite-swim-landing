import { useState } from "react";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/6FMzWKJETHi9LlgCsxFy/webhook-trigger/c1e1b5a6-812f-43a3-a71c-f3b7f3877861";

const COUNTRY_CODES = [
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+1", flag: "🇺🇸", name: "US" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+420", flag: "🇨🇿", name: "Czechia" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
];

const steps = [
  {
    num: 1,
    text: (
      <>
        <strong>You'll hear from us on WhatsApp</strong> within 5 minutes
      </>
    ),
  },
  {
    num: 2,
    text: (
      <>
        <strong>Quick follow-up questions</strong> about your swimmer's training
      </>
    ),
  },
  {
    num: 3,
    text: (
      <>
        <strong>Yul reviews your swimmer's profile</strong> before the call
      </>
    ),
  },
  {
    num: 4,
    text: (
      <>
        <strong>15-min call with Yul</strong> - personalized game plan for your swimmer
      </>
    ),
  },
];

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const FormSection = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !isValidEmail(email)) return;
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp.trim()) return;
    setSubmitting(true);
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          whatsapp: `${countryCode}${whatsapp}`,
          partial: false,
        }),
      });
      const params = new URLSearchParams({ name: `${firstName} ${lastName}`.trim(), email });
      const url = `https://www.swimpros.com/successful?${params}`;
      if (window.top) {
        window.top.location.href = url;
      } else {
        window.location.href = url;
      }
    } catch (err) {
      console.error("Webhook error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="form" className="bg-gradient-to-b from-primary/5 to-background px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-start">
        {/* Left side */}
        <div>
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Free Assessment
          </span>
          <h2 className="mb-3.5 font-heading text-2xl font-extrabold leading-tight text-foreground md:text-[32px]">
            Get Camp Dates, Custom Pricing & Available Spots <span className="text-primary">on WhatsApp</span>
          </h2>
          <p className="mb-7 text-[15px] leading-relaxed text-muted-foreground">
            Tell us about your swimmer and our head coach Yul will personally review their profile. Then we'll set up a
            quick 15-minute call where he'll share specific advice on how to unlock their next level —{" "}
            <strong className="text-foreground">whether that involves a camp or not.</strong>
          </p>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.num}
                </div>
                <div className="text-sm leading-snug text-muted-foreground [&_strong]:text-foreground">{s.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border-2 border-primary/15 bg-background p-7 shadow-[0_4px_30px_hsl(264_100%_50%/0.07),0_1px_3px_hsl(0_0%_0%/0.04)]">

          {/* Step indicator */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step === 1 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>1</div>
            <div className={`h-px w-10 ${step === 2 ? "bg-primary" : "bg-border"}`} />
            <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>2</div>
          </div>

          {step === 1 ? (
            <>
              <h3 className="mb-6 font-heading text-lg font-bold text-foreground text-center">
                Get Your Free Swimmer Assessment & Camp Details
              </h3>
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="mb-1 block text-[13px] font-semibold text-foreground/80">First name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Sarah"
                      className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-[13px] font-semibold text-foreground/80">Last name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Johnson"
                      className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-foreground/80">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!firstName.trim() || !isValidEmail(email)}
                  className="mt-1 w-full rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  NEXT →
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  No spam. No pressure. Just a coaching conversation about your swimmer.
                </p>
              </form>
            </>
          ) : (
            <>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground text-center">
                One last thing, {firstName}
              </h3>
              <p className="mb-5 text-center text-[13px] text-muted-foreground">
                What's the best WhatsApp number for Yul's team to reach you?
              </p>
              <form onSubmit={handleStep2Submit} className="space-y-4">
                <div>
                  <label className="mb-1 flex items-center gap-1.5 text-[13px] font-semibold text-foreground/80">
                    <span>💬</span> WhatsApp number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-[110px] shrink-0 rounded-lg border-2 border-border bg-muted px-2 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code + c.name} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="7700 900123"
                      autoFocus
                      className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting || !whatsapp.trim()}
                  className="w-full rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? "SENDING..." : "SEND MY DETAILS TO YUL →"}
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  No spam. No pressure. Just a coaching conversation about your swimmer.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
