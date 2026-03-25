const AftermovieSection = () => (
  <section className="bg-gradient-to-b from-hero-bg via-hero-mid to-hero-deep px-5 py-12 text-center md:px-10 md:py-16">
    <span className="mb-3 block text-xs font-bold uppercase tracking-[2px] text-primary">
      See It In Action
    </span>
    <h2 className="mb-2 font-heading text-2xl font-extrabold text-primary-foreground md:text-[32px]">
      What <span className="text-primary">10 Days</span> at Swimpros Looks Like
    </h2>
    <p className="mb-6 text-[15px] text-primary-foreground/65">
      28 competitive swimmers. 9 countries. 1 island. Hit play.
    </p>

    <div className="relative mx-auto w-full overflow-hidden rounded-xl shadow-[0_8px_32px_hsl(264_100%_50%/0.2)] md:max-w-[720px]">
      <video
        src="https://assets.cdn.filesafe.space/6FMzWKJETHi9LlgCsxFy/media/68e30d14ee1a8948e8fb1674.mp4"
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full"
        title="Swimpros Camp Aftermovie"
      />
    </div>

    <p className="mt-4 text-[13px] italic text-primary-foreground/30">
      Tenerife, 2025 — Summer Performance Camp
    </p>
  </section>
);

export default AftermovieSection;
