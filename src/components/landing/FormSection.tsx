import { useState, useRef } from "react";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/6FMzWKJETHi9LlgCsxFy/webhook-trigger/c1e1b5a6-812f-43a3-a71c-f3b7f3877861";

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
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const hasSentPartial = useRef(false);

  const sendPartial = async (name: string, emailVal: string) => {
    if (hasSentPartial.current) return;
    if (!name.trim() || !isValidEmail(emailVal)) return;
    hasSentPartial.current = true;
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ parentName: name, email: emailVal, partial: true }),
      });
    } catch (err) {
      console.error("Partial webhook error:", err);
    }
  };

  const handleEmailBlur = () => {
    sendPartial(parentName, email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !isValidEmail(email)) return;
    setSubmitting(true);
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ parentName, email, partial: false }),
      });
      sessionStorage.setItem("sp_lead", JSON.stringify({ parentName, email }));
      window.location.href = "/successful";
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

        <div className="rounded-2xl border-2 border-primary/15 bg-background p-7 shadow-[0_4px_30px_hsl(264_100%_50%/0.07),0_1px_3px_hsl(0_0%_0%/0.04)]">
          <h3 className="mb-6 font-heading text-lg font-bold text-foreground text-center">
            Get Your Free Swimmer Assessment
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-foreground/80">Your full name</label>
              <input
                type="text"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="e.g. Sarah Johnson"
                className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-foreground/80">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                placeholder="your@email.com"
                className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting || !parentName.trim() || !isValidEmail(email)}
              className="mt-1 w-full rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {submitting ? "SENDING..." : "GET MY FREE ASSESSMENT →"}
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              No spam. No pressure. Just a coaching conversation about your swimmer.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
