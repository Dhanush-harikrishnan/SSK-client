export const WhoWeServe = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-charcoal mb-3">Who Works With Us</h2>
          <p className="text-body text-charcoal-light">
            We serve two types of buyers — both equally welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card A */}
          <div className="bg-[#EEF4FF] rounded-2xl p-8 lg:p-10 flex flex-col items-start h-full">
            <span className="text-[2rem] mb-6" role="img" aria-label="factory">
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
              <li className="text-[0.9rem] text-[#444]">• Cooling tower & boiler operators</li>
              <li className="text-[0.9rem] text-[#444]">• Hotels, hospitals, housing complexes</li>
              <li className="text-[0.9rem] text-[#444]">• Pharma, textile & industrial plants</li>
              <li className="text-[0.9rem] text-[#444]">• Municipal water utilities</li>
            </ul>
            <a href="#contact" className="px-6 py-3 bg-[#0070F3] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors self-start mt-auto">
              Get a System Quote →
            </a>
          </div>

          {/* Card B */}
          <div className="bg-[#0A1628] rounded-2xl p-8 lg:p-10 flex flex-col items-start h-full">
            <span className="text-[2rem] mb-6" role="img" aria-label="wrench">
              🔧
            </span>
            <h3 className="text-xl font-bold text-white mb-4">
              OEM Manufacturers & System Builders
            </h3>
            <p className="text-[#C0C0C0] text-[0.95rem] leading-relaxed mb-6">
              You build water treatment equipment and need a reliable,
              high-quality MMO titanium anode source. We manufacture to your
              spec — any shape, coating, quantity. Ongoing contracts available.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              <li className="text-[0.9rem] text-[#E0E0E0]">• Water treatment equipment companies</li>
              <li className="text-[0.9rem] text-[#E0E0E0]">• Electrochlorinator system builders</li>
              <li className="text-[0.9rem] text-[#E0E0E0]">• ETP/STP plant integrators</li>
              <li className="text-[0.9rem] text-[#E0E0E0]">• Export distributors</li>
            </ul>
            <a href="#contact" className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0A1628] transition-colors self-start mt-auto">
              Discuss OEM Supply →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
