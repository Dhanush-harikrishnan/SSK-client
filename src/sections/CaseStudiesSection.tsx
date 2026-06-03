import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    tag: "Cooling Tower Scale",
    country: "🇮🇳 India",
    problem: "Calcium scale buildup choking chiller loops every 3 months",
    solution: "Electrolysis Scale Remover — Anode Unit integrated into existing system",
    result: "Zero scale reported in 14 months. Chemical dosing cost eliminated.",
    sector: "🏭",
    sectorName: "Pharma Plant, Tamil Nadu"
  },
  {
    tag: "Electrochlorination",
    country: "🇱🇰 Sri Lanka",
    problem: "Inconsistent chlorine dosing causing failed water quality compliance",
    solution: "Electrochlorinator Full Set (scrubber type) with energiser",
    result: "Stable 0.5 ppm output. On-site generation. No chemical procurement.",
    sector: "🏊",
    sectorName: "Water Park, Colombo"
  },
  {
    tag: "OEM Anode Supply",
    country: "🇳🇬 Nigeria",
    problem: "Water treatment company needed reliable MMO anode source for their product line",
    solution: "Custom MMO titanium anodes — mesh type, RuO₂-IrO₂ coating, bulk supply",
    result: "Ongoing supply contract. 3 product batches delivered on spec.",
    sector: "🔧",
    sectorName: "OEM Manufacturer"
  },
  {
    tag: "Effluent Treatment",
    country: "🇮🇳 India",
    problem: "Textile unit facing TNPCB violations for heavy metal effluent discharge",
    solution: "E-ETP (Electrolytic Effluent Treatment Plant) — full system",
    result: "TNPCB discharge norms achieved within 60 days of commissioning.",
    sector: "🏗️",
    sectorName: "Textile Unit, Tirupur"
  }
];

export const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const items = section.querySelectorAll(".reveal-item");
    gsap.set(items, { opacity: 0, y: 40 });
    const triggers: ScrollTrigger[] = [];
    items.forEach((item, i) => {
      const st = ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        onEnter: () => {
          gsap.to(item, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", delay: i * 0.15 });
        },
        once: true,
      });
      triggers.push(st);
    });
    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="bg-off-white section-padding">
      <div className="container-main">
        <div className="reveal-item text-center">
          <SectionLabel text="Projects & Industry Applications" />
          <p className="text-body text-charcoal-light max-w-2xl mx-auto mt-4 mb-12">
            Real installations. Real results. Across industries and geographies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          {caseStudies.map((c, idx) => (
            <article
              key={idx}
              className="reveal-item bg-white border-l-4 border-[#0070F3] rounded-lg p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 rounded-full border border-[#0070F3] text-[#0070F3] text-[0.7rem] font-semibold">
                  {c.tag}
                </span>
                <span className="text-[0.85rem] font-medium text-charcoal">{c.country}</span>
              </div>

              <p className="font-bold text-[#0A1628] text-[0.85rem] mb-2 mt-3">
                ❌ {c.problem}
              </p>

              <p className="text-[#555] text-[0.8rem] my-1">
                ✅ <strong className="text-charcoal font-semibold">Solution:</strong> {c.solution}
              </p>

              <p className="text-[#555] text-[0.8rem] my-1">
                📊 <strong className="text-charcoal font-semibold">Result:</strong> {c.result}
              </p>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 text-[#888] text-[0.78rem] font-medium">
                <span>{c.sector}</span>
                <span>{c.sectorName}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-item text-center">
          <p className="text-[#666] text-[0.85rem] mt-6 mb-4">
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
        </div>
      </div>
    </section>
  );
};
