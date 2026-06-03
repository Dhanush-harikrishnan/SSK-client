import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "@/components/Icons";

const specs = [
  ["Base Material", "Grade 1 / Grade 2 Titanium (ASTM B265)"],
  ["Coating", "Mixed Metal Oxide (MMO)"],
  ["Coating Compositions", "RuO₂-IrO₂ · IrO₂-Ta₂O₅ · Custom blends"],
  ["Application per Coating", "Chlorination · Scale Removal · Oxygen Evolution"],
  ["Available Forms", "Mesh · Plate · Rod · Tube · Expanded Metal"],
  ["Operating Temperature", "Up to 80°C"],
  ["pH Range", "2 – 12"],
  ["Coating Thickness", "8–20 microns (customisable)"],
  ["Expected Service Life", "5–10 years (application-dependent)"],
  ["Current Density", "100–2,000 A/m²"]
];

const faqs = [
  {
    q: "What coating do I need for cooling tower scale removal?",
    a: "IrO₂-Ta₂O₅ coating is preferred for oxygen evolution reactions used in scale prevention. We can confirm the right spec after reviewing your water quality report."
  },
  {
    q: "Can you supply anodes to fit our existing electrode holders?",
    a: "Yes. Provide us with dimensions, hole pattern, and current density requirement and we manufacture to spec."
  },
  {
    q: "What is the expected anode life in a chlorination system?",
    a: "Typically 5–8 years at recommended current densities in seawater/brine applications."
  },
  {
    q: "Do you provide test reports or coating certifications?",
    a: "Yes. Coating composition reports and dimensional inspection certificates are available on request."
  },
  {
    q: "Do you export electrodes?",
    a: "Yes. We currently supply to India, Sri Lanka, Kenya, Nigeria, and Saudi Arabia. Enquiries from other countries are welcome."
  },
  {
    q: "What is the minimum order quantity for custom anodes?",
    a: "Depends on the specification. Contact us to discuss — we accommodate both small project quantities and bulk OEM orders."
  }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("scale");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main id="main-content" className="pt-20">
      {/* 1. SLIM HERO */}
      <section className="bg-[#0A1628] h-[220px] flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">The Technology Behind Our Electrodes</h1>
          <p className="text-[#C0C0C0] text-[1.1rem]">
            For engineers, procurement teams, and OEM integrators.
          </p>
        </div>
      </section>

      {/* 2. MMO ELECTRODE EXPLAINER */}
      <section className="py-16 bg-white">
        <div className="container-main mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-[60%]">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-6">
                MMO Coating — The Core of Every Product We Make
              </h2>
              <div className="space-y-4 text-[#444] leading-relaxed">
                <p>
                  Titanium is the substrate: Grade 1/2, corrosion-resistant, dimensionally stable anode (DSA).
                </p>
                <p>
                  MMO coating is applied via thermal decomposition of precursor solutions.
                </p>
                <p>
                  Coating types: RuO₂-IrO₂ (for chlorine evolution), IrO₂-Ta₂O₅ (for oxygen evolution / scale removal).
                </p>
                <p>
                  Electrochemical reaction in water: divalent Ca²⁺/Mg²⁺ ions converted to non-scaling monovalent form when current passes through MMO anode.
                </p>
              </div>
            </div>
            <div className="lg:w-[40%] flex justify-center bg-[#F8F9FA] p-8 rounded-xl border border-gray-100">
              {/* Simple Schematic SVG */}
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80" y="40" width="40" height="120" rx="4" fill="#0A1628" opacity="0.1"/>
                <rect x="80" y="40" width="40" height="120" rx="4" stroke="#0A1628" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M20 100 L70 100" stroke="#0070F3" strokeWidth="3" markerEnd="url(#arrow)"/>
                <path d="M130 100 L180 100" stroke="#0070F3" strokeWidth="3" markerEnd="url(#arrow)"/>
                <circle cx="100" cy="100" r="12" fill="#0070F3"/>
                <text x="100" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">e-</text>
                <text x="45" y="90" textAnchor="middle" fill="#0A1628" fontSize="12">Water In</text>
                <text x="155" y="90" textAnchor="middle" fill="#0A1628" fontSize="12">Treated</text>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0070F3" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIFICATIONS TABLE */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-main mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-8 text-center">
            Standard Electrode Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <tbody>
                {specs.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#F8F9FA]" : "bg-white"}>
                    <td className="py-4 px-6 text-[#0A1628] font-bold border-b border-gray-200 w-1/3">
                      {row[0]}
                    </td>
                    <td className="py-4 px-6 text-[#555] border-b border-gray-200">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT TECHNICAL TABS */}
      <section className="py-16 bg-white">
        <div className="container-main mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-8 text-center">
            Product-Wise Technical Summary
          </h2>

          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
            {[
              { id: "scale", label: "Scale Remover" },
              { id: "chlorinator", label: "Electrochlorinator" },
              { id: "etp", label: "E-STP / E-ETP" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold text-sm lg:text-base border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#0070F3] text-[#0070F3]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded-lg border border-gray-100 min-h-[250px]">
            {activeTab === "scale" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">Scale Remover</h3>
                <ul className="space-y-3 text-[#444]">
                  <li><strong>Electrode type:</strong> IrO₂-Ta₂O₅ MMO on titanium mesh</li>
                  <li><strong>Configuration:</strong> Anode + cathode pair in flow-through cell</li>
                  <li><strong>Power:</strong> Low DC voltage, typically 6–24V depending on system size</li>
                  <li><strong>Flow rate:</strong> Designed per LPH / GPM requirement</li>
                  <li><strong>Hardness reduction:</strong> Converts divalent to monovalent — no precipitation in pipes</li>
                </ul>
              </div>
            )}

            {activeTab === "chlorinator" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">Electrochlorinator</h3>
                <ul className="space-y-3 text-[#444]">
                  <li><strong>Electrode type:</strong> RuO₂-IrO₂ MMO on titanium mesh/plate</li>
                  <li><strong>Chlorine output:</strong> 0.2–2.0 ppm depending on design</li>
                  <li><strong>Input:</strong> NaCl brine or direct seawater/saline feed</li>
                  <li><strong>Energiser:</strong> DC power supply unit included in full-set supply</li>
                  <li><strong>Applications:</strong> Pool disinfection, cooling tower biocide, municipal dosing</li>
                </ul>
              </div>
            )}

            {activeTab === "etp" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">E-STP / E-ETP</h3>
                <ul className="space-y-3 text-[#444]">
                  <li><strong>Mechanism:</strong> Electrocoagulation + electro-oxidation</li>
                  <li><strong>Contaminants addressed:</strong> BOD, COD, heavy metals, coliform, suspended solids</li>
                  <li><strong>Chemical input:</strong> None (electrical energy only)</li>
                  <li><strong>Sludge:</strong> Minimal — electrolytic sludge settles compactly</li>
                  <li><strong>Compliance:</strong> Designed to meet TNPCB/CPCB discharge norms</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-main mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-8 text-center">
            FAQ For Engineers
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#0A1628] pr-4">{faq.q}</span>
                  <ChevronDown size={20} className={`flex-shrink-0 text-gray-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-2 text-[#555] animate-in slide-in-from-top-2 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container-main mx-auto px-4">
          <p className="text-xl font-medium text-[#444] mb-8">
            Need a technical datasheet or a custom anode specification?
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 bg-[#0070F3] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
          >
            Send Technical Enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}
