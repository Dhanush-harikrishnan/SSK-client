export const OEMBannerSection = () => {
  return (
    <section className="bg-deep-navy text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFoLTM4djM4aDM4eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-5" />
      <div className="container-main relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-electric-teal/20 text-electric-teal text-sm font-semibold mb-6 border border-electric-teal/30">
          GLOBAL OEM & COMPONENT SUPPLY
        </span>
        <h2 className="text-h2 font-bold mb-6">Supplying Anodes to Manufacturers Worldwide</h2>
        <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
          Are you a water treatment company, system integrator, or plant operator? We supply precision MMO-coated titanium anodes as core components for your own systems — backed by deep manufacturing expertise and custom fabrication capabilities.
        </p>
        <a href="#contact" className="btn-primary hover:scale-105 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}}>
          Discuss OEM Supply Requirements
        </a>
      </div>
    </section>
  );
};