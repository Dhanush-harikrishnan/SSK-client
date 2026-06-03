import AnimateOnScroll from "@/components/AnimateOnScroll";

export const WhoWeServe = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <AnimateOnScroll direction="up" className="text-center mb-12">
          <h2 className="text-h2 text-charcoal mb-3">Who Works With Us</h2>
          <p className="text-body text-charcoal-light">
            We serve two types of buyers — both equally welcome.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 overflow-hidden">
          {/* Card A */}
          <AnimateOnScroll direction="right" className="h-full">
            <div className="bg-[#EEF4FF] rounded-2xl p-8 lg:p-10 flex flex-col items-start h-full hover:shadow-[0_8px_30px_rgba(0,112,243,0.1)] transition-shadow duration-300 border border-[#EEF4FF] hover:border-[#0070F3]/20">
              <span className="text-[2rem] mb-6 inline-block transform hover:scale-110 transition-transform duration-300 origin-bottom-left" role="img" aria-label="factory">
                🏭
              </span>
              <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                Industrial Buyers & Plant Operators
              </h3>
              <p className="text-[#333] text-[0.95rem] leading-relaxed mb-6">
                You operate a manufacturing plant, hotel, hospital, housing complex,
                or commercial facility. We supply and install the complete system —
                with commissioning and after-sales support.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0070F3] rounded-full inline-block"></span> Cooling tower & boiler operators</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0070F3] rounded-full inline-block"></span> Hotels, hospitals, housing complexes</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0070F3] rounded-full inline-block"></span> Pharma, textile & industrial plants</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0070F3] rounded-full inline-block"></span> Municipal water utilities</li>
              </ul>
              <a href="#contact" className="px-6 py-3 bg-[#0070F3] text-white font-medium rounded-lg hover:bg-blue-600 hover:shadow-[0_4px_15px_rgba(0,112,243,0.3)] transition-all self-start mt-auto">
                Get a System Quote →
              </a>
            </div>
          </AnimateOnScroll>

          {/* Card B */}
          <AnimateOnScroll direction="left" className="h-full">
            <div className="bg-[#0A1628] rounded-2xl p-8 lg:p-10 flex flex-col items-start h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300 border border-[#0A1628] hover:border-white/10 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0070F3]/10 blur-[50px] rounded-full pointer-events-none"></div>

              <span className="text-[2rem] mb-6 inline-block transform hover:scale-110 transition-transform duration-300 origin-bottom-left" role="img" aria-label="wrench">
                🔧
              </span>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                OEM Manufacturers & System Builders
              </h3>
              <p className="text-[#C0C0C0] text-[0.95rem] leading-relaxed mb-6 relative z-10">
                You build water treatment equipment and need a reliable,
                high-quality MMO titanium anode source. We manufacture to your
                spec — any shape, coating, quantity. Ongoing contracts available.
              </p>
              <ul className="space-y-2 mb-8 flex-1 relative z-10">
                <li className="text-[0.9rem] text-[#E0E0E0] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block"></span> Water treatment equipment companies</li>
                <li className="text-[0.9rem] text-[#E0E0E0] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block"></span> Electrochlorinator system builders</li>
                <li className="text-[0.9rem] text-[#E0E0E0] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block"></span> ETP/STP plant integrators</li>
                <li className="text-[0.9rem] text-[#E0E0E0] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block"></span> Export distributors</li>
              </ul>
              <a href="#contact" className="px-6 py-3 border border-white/50 text-white font-medium rounded-lg hover:bg-white hover:text-[#0A1628] transition-all self-start mt-auto relative z-10">
                Discuss OEM Supply →
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
