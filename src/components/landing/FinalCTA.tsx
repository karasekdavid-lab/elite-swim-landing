import { scrollToForm } from "@/lib/scrollToForm";

const FinalCTA = () => (
  <section className="bg-gradient-to-br from-primary to-primary/70 px-5 py-14 text-center md:px-10 md:py-20">
    <h2 className="mb-3 font-heading text-2xl font-extrabold text-primary-foreground md:text-[34px]">
      Ready to Unlock Your Swimmer's Next Level?
    </h2>
    <p className="mx-auto mb-6 max-w-lg text-[15px] leading-relaxed text-primary-foreground/70">
      Tell us about your swimmer. Yul will personally review their profile and give you a game plan - free.
    </p>
    <a
      href="#form"
      onClick={scrollToForm}
      className="inline-block w-full rounded-lg bg-accent px-6 py-4 font-heading text-[15px] font-extrabold text-accent-foreground transition-transform hover:scale-[1.02] md:w-auto md:px-12"
    >
      GET THE FREE PERFORMANCE ASSESSMENT ↑
    </a>
  </section>
);

export default FinalCTA;
