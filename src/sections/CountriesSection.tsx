import AnimateOnScroll from "@/components/AnimateOnScroll";

export const CountriesSection = () => {
  const flags = [
    { name: "India", flag: "🇮🇳" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
  ];

  return (
    <section className="relative bg-white border-y border-gray-100 py-12 overflow-hidden">
      {/* Background World Map SVG */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1000 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-5xl text-[#0070F3]">
          {/* Simple stylized world map paths */}
          <path d="M260,120 Q280,100 300,120 T340,150 T320,200 T280,250 T220,350 T200,320 T240,200 T220,150 Z" />
          <path d="M480,80 Q520,60 550,100 T530,160 T560,200 T580,250 T540,300 T500,260 T460,200 T440,120 Z" />
          <path d="M600,120 Q640,100 680,120 T750,180 T780,250 T820,300 T780,350 T700,300 T650,250 T620,180 Z" />
          <path d="M850,250 Q880,230 900,260 T880,320 T830,350 T800,300 Z" />
        </svg>
      </div>

      <div className="container-main relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <AnimateOnScroll direction="right" delay={0.1}>
          <h3 className="text-[#0A1628] font-bold text-xl mb-2 text-center md:text-left">Trusted Across Borders</h3>
          <p className="text-[#666] text-sm font-semibold uppercase tracking-widest text-center md:text-left">Our systems & anodes operate in:</p>
        </AnimateOnScroll>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {flags.map((f, i) => (
            <AnimateOnScroll key={f.name} delay={0.2 + i * 0.1} direction="up" className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 cursor-default hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,112,243,0.1)] transition-all duration-300">
              <div className="relative">
                <span className="text-3xl leading-none block relative z-10">{f.flag}</span>
                <span className="absolute inset-0 rounded-full border-2 border-[#0070F3] opacity-0 animate-pulse-ring z-0" style={{ animationDelay: `${i * 0.5}s` }}></span>
              </div>
              <span className="text-[#0A1628] font-bold text-sm">{f.name}</span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
      `}</style>
    </section>
  );
};
