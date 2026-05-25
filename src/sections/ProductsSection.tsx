import { ArrowRight } from "@/components/Icons";

const products = [
  {
    title: "Electrolysis Scale Remover",
    desc: "Chemical-free hard water treatment using MMO titanium electrodes. Converts calcium/magnesium ions permanently. No salt, no chemicals.",
    badge: "Best Seller ⭐",
    options: ["Full System", "Anode Only (OEM Supply)"],
    highlight: true
  },
  {
    title: "Electrochlorinator System",
    desc: "On-site chlorine generation system (scrubber type) with energiser unit. Ideal for swimming pools, cooling towers, and water disinfection.",
    options: ["Full Set with Energiser", "Anode Only (OEM Supply)"],
    highlight: false
  },
  {
    title: "E-STP — Electrolytic Sewage Treatment",
    desc: "Chemical-free electrolytic sewage treatment using titanium electrodes. Compact, low-maintenance, and suitable for residential/commercial complexes.",
    options: ["Full System"],
    highlight: false
  },
  {
    title: "E-ETP — Industrial Effluent Treatment",
    desc: "Electrolytic effluent treatment plants for industrial wastewater. Handles heavy metals, BOD, COD reduction without chemical dosing.",
    options: ["Full System"],
    highlight: false
  },
  {
    title: "Titanium Anode Manufacturing (OEM)",
    desc: "MMO-coated titanium anodes manufactured to specification. Supplied to water treatment companies, system integrators, and plant builders globally.",
    badge: "B2B / OEM",
    options: ["Standard Shapes", "Custom Fabrication"],
    highlight: true
  },
  {
    title: "Automatic Scale Removal Anode",
    desc: "Standalone titanium anode for integration into existing water systems or OEM assemblies. Suitable for boilers, chillers, and cooling towers.",
    options: ["Standalone Anode", "Full System"],
    highlight: false
  }
];

export const ProductsSection = () => {
  return (
    <section id="products" className="bg-off-white section-padding">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-charcoal mb-4">Our Products & Systems</h2>
          <p className="text-body text-charcoal-light max-w-2xl mx-auto">
            Engineered precision for water treatment. From complete turnkey plants to OEM titanium anode components.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className={`card-${p.highlight ? 'highlighted' : 'standard'} flex flex-col h-full bg-white relative`}>
              {p.badge && (
                <span className={`absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-bold text-white ${p.highlight ? 'bg-electric-teal' : 'bg-charcoal'}`}>
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl text-charcoal font-bold mb-3 pr-24">{p.title}</h3>
              <p className="text-sm text-charcoal-light mb-6 flex-1">{p.desc}</p>
              
              <div className="bg-gray-50 border border-border-light rounded-md p-4 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2">Available As:</p>
                <ul className="space-y-1.5">
                  {p.options.map(opt => (
                    <li key={opt} className="text-sm font-semibold text-deep-navy flex items-center gap-2">
                       <span className="text-electric-teal">✔</span> {opt}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="btn-secondary w-full group mt-auto hover:text-white" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Enquire Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform inline" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};