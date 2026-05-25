export const CountriesSection = () => {
  const flags = [
    { name: "India", flag: "🇮🇳" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
  ];

  return (
    <section className="bg-white border-y border-border-light py-10">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-charcoal font-bold text-lg mb-1 hidden md:block">Trusted Across Borders</h3>
          <p className="text-charcoal-light/70 text-sm font-semibold uppercase tracking-widest">Our systems & anodes operate in:</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {flags.map(f => (
            <div key={f.name} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-default">
              <span className="text-3xl shadow-sm drop-shadow-sm leading-none">{f.flag}</span>
              <span className="text-charcoal font-semibold text-sm">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};