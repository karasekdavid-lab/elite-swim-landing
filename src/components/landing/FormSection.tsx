import { useState } from "react";
import { Progress } from "@/components/ui/progress";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/6FMzWKJETHi9LlgCsxFy/webhook-trigger/96cffe3f-f410-4c8a-8e4a-9c35f1de9b4e";

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
  { num: 1, text: <><strong>You'll hear from us on WhatsApp</strong> within 5 minutes</> },
  { num: 2, text: <><strong>Quick follow-up questions</strong> about your swimmer's training</> },
  { num: 3, text: <><strong>Yul reviews your swimmer's profile</strong> before the call</> },
  { num: 4, text: <><strong>15-min call with Yul</strong> - personalized game plan for your swimmer</> },
];

const STEP_LABELS = ["Your Details", "Your Swimmer"];

const FormSection = () => {
  const [formData, setFormData] = useState({
    parentName: "", email: "", swimmerAge: "", goal: "", struggle: "", whatsapp: "",
  });
  const [countryCode, setCountryCode] = useState("+44");
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendPartial = async () => {
    const payload = JSON.stringify({
      ...formData,
      whatsapp: formData.whatsapp ? `${countryCode}${formData.whatsapp}` : "",
      partial: true,
    });
    console.log("Sending partial to GHL:", payload);
    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        keepalive: true,
        body: payload,
      });
      console.log("Partial webhook response:", res.status);
    } catch (err) {
      console.error("Partial webhook error:", err);
    }
  };

  const nextStep = async () => {
    await sendPartial();
    setStep(2);
  };
  const prevStep = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = JSON.stringify({
        ...formData,
        whatsapp: `${countryCode}${formData.whatsapp}`,
      });
      console.log("Sending final to GHL:", payload);
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: payload,
      });
      console.log("Final webhook response:", res.status);
      (window.top || window).location.href = "https://www.swimpros.com/successful";
    } catch (err) {
      console.error("Webhook error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const progressValue = (step / 2) * 100;

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
            Tell us about your swimmer and our head coach Yul will personally review their profile. Then we'll set up a quick 15-minute call where he'll share specific advice on how to unlock their next level - <strong className="text-foreground">whether that involves a camp or not.</strong>
          </p>

          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.num}
                </div>
                <div className="text-sm leading-snug text-muted-foreground [&_strong]:text-foreground">
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border-2 border-primary/15 bg-background p-7 shadow-[0_4px_30px_hsl(264_100%_50%/0.07),0_1px_3px_hsl(0_0%_0%/0.04)]">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mb-4 text-5xl">🎉</div>
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">You're In!</h3>
              <p className="text-sm text-muted-foreground">
                Yul's team will reach out on WhatsApp within 5 minutes. Keep an eye on your phone!
              </p>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {STEP_LABELS.map((label, i) => (
                    <span key={label} className={i + 1 <= step ? "text-primary" : ""}>{label}</span>
                  ))}
                </div>
                <Progress value={progressValue} className="h-1.5" />
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Step {step} of 2 {step === 1 && "— Takes 60 seconds. Yul reviews every one personally."}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Name, Email & WhatsApp */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-bold text-foreground text-center">Let's Get Started</h3>
                    <Field label="Your full name" name="parentName" type="text" placeholder="e.g. Sarah Johnson" value={formData.parentName} onChange={handleChange} />
                    <Field label="Email address" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                    <div>
                      <label className="mb-1 flex flex-wrap items-center gap-1.5 text-[13px] font-semibold text-foreground/80">
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
                          type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                          placeholder="7700 900123"
                          className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.parentName.trim() || !formData.email.trim() || !formData.whatsapp.trim()}
                      className="mt-1 w-full rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                    >
                      NEXT — TELL US ABOUT YOUR SWIMMER →
                    </button>
                  </div>
                )}

                {/* Step 2: Swimmer details & submit */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-bold text-foreground text-center">About Your Swimmer</h3>
                    <Field label="Your swimmer's age" name="swimmerAge" type="number" placeholder="e.g. 14" value={formData.swimmerAge} onChange={handleChange} />
                    <div>
                      <label className="mb-1 block text-[13px] font-semibold text-foreground/80">What's their #1 goal right now?</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                      >
                        <option value="" disabled>Choose one...</option>
                        <option>Drop time / Get faster</option>
                        <option>Improve technique</option>
                        <option>Build race-day confidence</option>
                        <option>Qualify for a big meet</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-[13px] font-semibold text-foreground/80">
                        What's their biggest struggle? <span className="font-normal text-muted-foreground">(1-2 sentences)</span>
                      </label>
                      <textarea
                        name="struggle"
                        value={formData.struggle}
                        onChange={handleChange}
                        placeholder="e.g. She trains great but freezes up at meets..."
                        className="min-h-[80px] w-full resize-y rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="rounded-lg border-2 border-border px-5 py-4 font-heading text-sm font-bold text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                      >
                        ← BACK
                      </button>
                      <button
                        type="submit"
                        disabled={submitting || !formData.swimmerAge.trim()}
                        className="flex-1 rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                      >
                        {submitting ? "SENDING..." : "SEND MY SWIMMER'S PROFILE TO YUL →"}
                      </button>
                    </div>
                    <p className="text-center text-[11px] text-muted-foreground">No spam. No pressure. Just a coaching conversation about your swimmer.</p>
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type, placeholder, value, onChange }: {
  label: string; name: string; type: string; placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="mb-1 block text-[13px] font-semibold text-foreground/80">{label}</label>
    <input
      type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
      className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
    />
  </div>
);

export default FormSection;
