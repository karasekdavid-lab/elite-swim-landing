import { useState, useEffect } from "react";

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

const Successful = () => {
  const [lead, setLead] = useState<{ parentName: string; email: string } | null>(null);
  const [countryCode, setCountryCode] = useState("+44");
  const [whatsapp, setWhatsapp] = useState("");
  const [swimmerAge, setSwimmerAge] = useState("");
  const [goal, setGoal] = useState("");
  const [struggle, setStruggle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("sp_lead");
    if (stored) {
      setLead(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp.trim()) return;
    setSubmitting(true);
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(lead || {}),
          whatsapp: `${countryCode}${whatsapp}`,
          swimmerAge,
          goal,
          struggle,
          partial: false,
        }),
      });
      sessionStorage.removeItem("sp_lead");
      window.top ? window.top.location.href = "https://www.swimpros.com/successful" : window.location.href = "https://www.swimpros.com/successful";
    } catch (err) {
      console.error("Webhook error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background px-5 py-16 md:px-10">
      <div className="mx-auto max-w-lg">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 text-5xl">✅</div>
          <h1 className="mb-2 font-heading text-2xl font-extrabold text-foreground md:text-3xl">
            {lead?.parentName ? `You're in, ${lead.parentName.split(" ")[0]}!` : "You're in!"}
          </h1>
          <p className="text-[15px] text-muted-foreground">
            We've got your details. Now tell us about your swimmer so Yul can review their profile before reaching out.
          </p>
        </div>

        {done ? (
          <div className="rounded-2xl border-2 border-primary/15 bg-background p-8 text-center shadow-[0_4px_30px_hsl(264_100%_50%/0.07)]">
            <div className="mb-4 text-5xl">🎉</div>
            <h2 className="mb-2 font-heading text-xl font-bold text-foreground">Profile received!</h2>
            <p className="text-sm text-muted-foreground">
              Yul's team will reach out on WhatsApp within 5 minutes. Keep an eye on your phone!
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-primary/15 bg-background p-7 shadow-[0_4px_30px_hsl(264_100%_50%/0.07),0_1px_3px_hsl(0_0%_0%/0.04)]">
            <h2 className="mb-6 font-heading text-lg font-bold text-foreground text-center">
              One last step — tell us about your swimmer
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* WhatsApp */}
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
                    className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                  />
                </div>
              </div>

              {/* Swimmer age */}
              <div>
                <label className="mb-1 block text-[13px] font-semibold text-foreground/80">
                  Your swimmer's age
                </label>
                <input
                  type="number"
                  value={swimmerAge}
                  onChange={(e) => setSwimmerAge(e.target.value)}
                  placeholder="e.g. 14"
                  className="w-full rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                />
              </div>

              {/* Goal */}
              <div>
                <label className="mb-1 block text-[13px] font-semibold text-foreground/80">
                  What's their #1 goal right now?
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
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

              {/* Struggle */}
              <div>
                <label className="mb-1 block text-[13px] font-semibold text-foreground/80">
                  What's their biggest struggle?{" "}
                  <span className="font-normal text-muted-foreground">(1-2 sentences)</span>
                </label>
                <textarea
                  value={struggle}
                  onChange={(e) => setStruggle(e.target.value)}
                  placeholder="e.g. She trains great but freezes up at meets..."
                  className="min-h-[80px] w-full resize-y rounded-lg border-2 border-border bg-muted px-3.5 py-3 font-body text-base text-foreground focus:border-primary focus:bg-background focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || !whatsapp.trim()}
                className="w-full rounded-lg bg-primary py-4 font-heading text-base font-bold text-primary-foreground shadow-[0_4px_16px_hsl(264_100%_50%/0.2)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? "SENDING..." : "SEND MY SWIMMER'S PROFILE TO YUL →"}
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                No spam. No pressure. Just a coaching conversation about your swimmer.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Successful;
