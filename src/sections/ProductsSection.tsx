import { ArrowRight } from "@/components/Icons";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ScaleRemoverIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 transition-colors duration-300">
    <path d="M22 6C22 6 12 18.5 12 26C12 31.5228 16.4772 36 22 36C27.5228 36 32 31.5228 32 26C32 18.5 22 6 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 20L26 28M26 20L18 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ElectrochlorinatorIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 transition-colors duration-300">
    <path d="M22 6C22 6 12 18.5 12 26C12 31.5228 16.4772 36 22 36C27.5228 36 32 31.5228 32 26C32 18.5 22 6 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 16L18 24H26L20 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ESTPIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 transition-colors duration-300">
    <path d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 38V22M22 22C22 22 14 20 14 12C14 12 22 14 22 22ZM22 22C22 22 30 20 30 12C30 12 22 14 22 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EETPIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 transition-colors duration-300">
    <path d="M6 34V14L16 20V14L26 20V14L38 20V34H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 34V26M34 34V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14V6M16 14V8M22 14V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const OEMAnodeIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 transition-colors duration-300">
    <path d="M22 6L36 14V30L22 38L8 30V14L22 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6V22M36 14L22 22M8 14L22 22M22 38V22M36 30L22 22M8 30L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AutoScaleIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 transition-colors duration-300">
    <path d="M16 10H28M16 16H28M16 22H28M16 28H28M16 34H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C12 7.79086 13.7909 6 16 6H28C30.2091 6 32 7.79086 32 10V34C32 36.2091 30.2091 38 28 38H16C13.7909 38 12 36.2091 12 34V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const products = [
  {
    title: "Electrolysis Scale Remover",
    desc: "Chemical-free hard water treatment using MMO titanium electrodes. Converts calcium/magnesium ions permanently. No salt, no chemicals.",
    badge: "Best Seller",
    options: ["Full System", "Anode Only (OEM Supply)"],
    Icon: ScaleRemoverIcon
  },
  {
    title: "Electrochlorinator System",
    desc: "On-site chlorine generation system (scrubber type) with energiser unit. Ideal for swimming pools, cooling towers, and water disinfection.",
    options: ["Full Set with Energiser", "Anode Only (OEM Supply)"],
    Icon: ElectrochlorinatorIcon
  },
  {
    title: "E-STP — Electrolytic Sewage Treatment",
    desc: "Chemical-free electrolytic sewage treatment using titanium electrodes. Compact, low-maintenance, and suitable for residential/commercial complexes.",
    options: ["Full System"],
    Icon: ESTPIcon
  },
  {
    title: "E-ETP — Industrial Effluent Treatment",
    desc: "Electrolytic effluent treatment plants for industrial wastewater. Handles heavy metals, BOD, COD reduction without chemical dosing.",
    options: ["Full System"],
    Icon: EETPIcon
  },
  {
    title: "Titanium Anode Manufacturing (OEM)",
    desc: "MMO-coated titanium anodes manufactured to specification. Supplied to water treatment companies, system integrators, and plant builders globally.",
    badge: "B2B / OEM",
    options: ["Standard Shapes", "Custom Fabrication"],
    Icon: OEMAnodeIcon
  },
  {
    title: "Automatic Scale Removal Anode",
    desc: "Standalone titanium anode for integration into existing water systems or OEM assemblies. Suitable for boilers, chillers, and cooling towers.",
    options: ["Standalone Anode", "Full System"],
    Icon: AutoScaleIcon
  }
];

export const ProductsSection = () => {
  return (
    <section id="products" className="bg-[#f8fafc] section-padding">
      <div className="container-main">
        <AnimateOnScroll direction="up" className="text-center mb-16 lg:mb-20">
          <h2 className="text-h2 text-charcoal mb-4">Our Products & Systems</h2>
          <p className="text-body text-charcoal-light max-w-2xl mx-auto">
            Engineered precision for water treatment. From complete turnkey plants to OEM titanium anode components.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} direction="up" className="h-full">
              <div className="group flex flex-col h-full bg-white rounded-xl p-6 lg:p-8 relative border-t-[3px] border-transparent transform translateY-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,112,243,0.15)] hover:border-[#0070F3]">

                {p.badge && (
                  <span className="absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-bold text-white bg-[#0A1628]">
                    {p.badge}
                  </span>
                )}

                <div className="w-16 h-16 rounded-full bg-[#f1f5f9] text-[#0070F3] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#0070F3] group-hover:text-white mx-auto lg:mx-0">
                  <p.Icon />
                </div>

                <h3 className="text-xl text-[#0A1628] font-bold mb-3 text-center lg:text-left">{p.title}</h3>
                <p className="text-[0.95rem] text-[#555] mb-6 flex-1 text-center lg:text-left">{p.desc}</p>

                <div className="bg-[#f8fafc] border border-gray-100 rounded-md p-4 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#666] mb-2">Available As:</p>
                  <ul className="space-y-1.5">
                    {p.options.map(opt => (
                      <li key={opt} className="text-[0.85rem] font-semibold text-[#0A1628] flex items-center gap-2">
                         <span className="text-[#0070F3] font-bold">✔</span> {opt}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="w-full py-3.5 px-6 rounded-lg font-semibold text-center transition-colors border-2 border-[#E2E8F0] text-[#0A1628] hover:border-[#0070F3] hover:bg-[#0070F3] hover:text-white mt-auto flex justify-center items-center gap-2">
                  Enquire Now <ArrowRight size={16} />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
