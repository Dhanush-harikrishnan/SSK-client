import { SectionLabel } from "@/components/SectionLabel";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const caseStudies = [
  {
    tag: "Cooling Tower Scale",
    country: "🇮🇳 India",
    topGradient: "linear-gradient(to right, #FF9933, #ffffff)",
    hoverColor: "#FF9933",
    problem: "Calcium scale buildup choking chiller loops every 3 months",
    solution: "Electrolysis Scale Remover — Anode Unit integrated into existing system",
    result: "Zero scale reported in 14 months. Chemical dosing cost eliminated.",
    sector: "🏭",
    sectorName: "Pharma Plant, Tamil Nadu"
  },
  {
    tag: "Electrochlorination",
    country: "🇱🇰 Sri Lanka",
    topGradient: "linear-gradient(to right, #FFD700, #ffffff)",
    hoverColor: "#FFD700",
    problem: "Inconsistent chlorine dosing causing failed water quality compliance",
    solution: "Electrochlorinator Full Set (scrubber type) with energiser",
    result: "Stable 0.5 ppm output. On-site generation. No chemical procurement.",
    sector: "🏊",
    sectorName: "Water Park, Colombo"
  },
  {
    tag: "OEM Anode Supply",
    country: "🇳🇬 Nigeria",
    topGradient: "linear-gradient(to right, #008751, #ffffff)",
    hoverColor: "#008751",
    problem: "Water treatment company needed reliable MMO anode source for their product line",
    solution: "Custom MMO titanium anodes — mesh type, RuO₂-IrO₂ coating, bulk supply",
    result: "Ongoing supply contract. 3 product batches delivered on spec.",
    sector: "🔧",
    sectorName: "OEM Manufacturer"
  },
  {
    tag: "Effluent Treatment",
    country: "🇮🇳 India",
    topGradient: "linear-gradient(to right, #FF9933, #ffffff)",
    hoverColor: "#FF9933",
    problem: "Textile unit facing TNPCB violations for heavy metal effluent discharge",
    solution: "E-ETP (Electrolytic Effluent Treatment Plant) — full system",
    result: "TNPCB discharge norms achieved within 60 days of commissioning.",
    sector: "🏗️",
    sectorName: "Textile Unit, Tirupur"
  }
];

export const CaseStudiesSection = () => {
  return (
    <section id="projects" className="bg-[#F8F9FA] section-padding relative">
      {/* Background texture via SVG */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%23000000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container-main relative z-10">
        <AnimateOnScroll direction="up" className="text-center">
          <SectionLabel text="Projects & Industry Applications" />
          <p className="text-[#555] text-[1.1rem] max-w-2xl mx-auto mt-4 mb-12 font-medium">
            Real installations. Real results. Across industries and geographies.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {caseStudies.map((c, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.1} direction="up" className="h-full">
              <article
                className="group relative bg-white border-l-4 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col overflow-hidden"
                style={{ borderColor: "#0070F3" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.hoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#0070F3")}
              >
                {/* Colored Top Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                  style={{ background: c.topGradient }}
                />

                <div className="p-6 lg:p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-3 py-1 rounded-full border border-gray-200 text-[#0A1628] text-[0.75rem] font-bold tracking-wide uppercase shadow-sm">
                      {c.tag}
                    </span>
                    <span className="text-[0.9rem] font-bold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md">{c.country}</span>
                  </div>

                  <p className="font-bold text-[#0A1628] text-[0.95rem] mb-3 leading-snug">
                    ❌ <span className="ml-1">{c.problem}</span>
                  </p>

                  <p className="text-[#555] text-[0.9rem] mb-2 leading-relaxed">
                    ✅ <strong className="text-[#0A1628] font-bold ml-1">Solution:</strong> {c.solution}
                  </p>

                  <p className="text-[#555] text-[0.9rem] mb-5 leading-relaxed">
                    📊 <strong className="text-[#0A1628] font-bold ml-1">Result:</strong> {c.result}
                  </p>

                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100 text-[#666] text-[0.85rem] font-semibold">
                    <span className="text-lg">{c.sector}</span>
                    <span>{c.sectorName}</span>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up" delay={0.4} className="text-center">
          <p className="text-[#666] text-[0.9rem] mt-6 mb-6 font-medium">
            These are representative project types. Each installation is customised.
          </p>
          <div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary"
            >
              Discuss Your Requirement →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
