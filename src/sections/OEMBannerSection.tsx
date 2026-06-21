export const OEMBannerSection = () => {
  return (
    <section className="bg-deep-navy text-white section-padding relative overflow-hidden">
      {/* Existing Background Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFoLTM4djM4aDM4eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-5 z-0" />

      {/* Animated OEM Particle Grid */}
      <div className="absolute top-0 bottom-0 right-[-10%] w-[60%] z-[1] opacity-40 pointer-events-none hidden md:block">
        <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <style>
              {`
                @keyframes pulseGrid {
                  0%, 100% { opacity: 0.1; transform: scale(0.8); }
                  50% { opacity: 0.6; transform: scale(1.2); }
                }
              `}
            </style>
          </defs>
          <g>
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => {
                const delay = (row + col) * 0.15;
                return (
                  <circle
                    key={`${row}-${col}`}
                    cx={100 + col * 60}
                    cy={100 + row * 60}
                    r="6"
                    fill="none"
                    stroke="#0070F3"
                    strokeWidth="2"
                    style={{
                      transformOrigin: `${100 + col * 60}px ${100 + row * 60}px`,
                      animation: `pulseGrid 3s infinite ease-in-out`,
                      animationDelay: `${delay}s`
                    }}
                  />
                );
              })
            )}
          </g>
        </svg>
      </div>

      <div className="container-main relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0070F3]/20 text-[#0070F3] text-sm font-bold mb-6 border border-[#0070F3]/30 tracking-wide">
          GLOBAL OEM & COMPONENT SUPPLY
        </span>
        <h2 className="text-h2 font-extrabold mb-6 drop-shadow-md">Supplying Anodes to Manufacturers Worldwide</h2>
        <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
          Are you a water treatment company, system integrator, or plant operator? We supply precision MMO-coated titanium anodes as core components for your own systems — backed by deep manufacturing expertise and custom fabrication capabilities.
        </p>
        <a href="#contact" className="btn-primary shadow-[0_4px_20px_rgba(0,112,243,0.3)]">
          Discuss OEM Supply Requirements
        </a>
      </div>
    </section>
  );
};
