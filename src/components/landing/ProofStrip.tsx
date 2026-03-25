const proofs = [
  { quote: '"Dropped 3 seconds in the 200 free after one camp"', origin: "UK" },
  { quote: '"Hadn\'t PB\'d in 2 years. 3 months later: National Record"', origin: "Romania" },
  { quote: '"She finally races the way she trains"', origin: "Germany" },
];

const ProofStrip = () => (
  <div className="flex flex-col gap-3 bg-accent px-5 py-4 text-center md:flex-row md:items-center md:justify-center md:gap-10 md:px-10 md:py-5">
    {proofs.map((p, i) => (
      <div
        key={i}
        className={`text-[13px] font-semibold text-accent-foreground ${
          i < proofs.length - 1 ? "border-b border-accent-foreground/80 pb-3 md:border-b-0 md:pb-0" : ""
        }`}
      >
        {p.quote} <span className="font-normal opacity-50">- {p.origin}</span>
      </div>
    ))}
  </div>
);

export default ProofStrip;
