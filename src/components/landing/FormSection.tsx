import { useState } from "react";

const steps = [
  { num: 1, text: <><strong>You'll hear from us on WhatsApp</strong> within 10 minutes</> },
  { num: 2, text: <><strong>Quick follow-up questions</strong> about your swimmer's training</> },
  { num: 3, text: <><strong>Yul reviews your swimmer's profile</strong> before the call</> },
  { num: 4, text: <><strong>15-min call with Yul</strong> - personalized game plan for your swimmer</> },
];

const FormSection = () => {
  const [formData, setFormData] = useState({
    parentName: "", swimmerName: "", swimmerAge: "", goal: "", struggle: "", whatsapp: "", email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            Get Your Swimmer's Free <span className="text-primary">Performance Assessment</span>
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
          <div className="mb-6 text-center">
            <h3 className="font-heading text-lg font-bold text-foreground">Tell Us About Your Swimmer</h3>
            <p className="mt-1 text-xs text-muted-foreground">Takes 60 seconds. Yul reviews every one personally.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Your first name" name="parentName" type="text" placeholder="e.g. Sarah" value={formData.parentName} onChange={handleChange} />
            <Field label="Your swimmer's first name" name="swimmerName" type="text" placeholder="e.g. Emma" value={formData.swimmerName} onChange={handleChange} />
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

            <div>
              <label className="mb-1 flex flex-wrap items-center gap-1.5 text-[13px] font-semibold text-foreground/80">
                <span>💬</span> WhatsApp number <span className="font-normal text-muted-foreground">- this is how Yul's team will reach you</span>
              </label>
              <input
                type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                placeholder="+44 7700 900123"
                className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
              />
            </div>

            <Field label="Email address" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} />

            <button
              type="submit"
              className="mt-1 w-full rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02]"
            >
              SEND MY SWIMMER'S PROFILE TO YUL →
            </button>
            <p className="text-center text-[11px] text-muted-foreground">No spam. No pressure. Just a coaching conversation about your swimmer.</p>
          </form>
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
