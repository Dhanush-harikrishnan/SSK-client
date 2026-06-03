import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    problem: "Scale deposits blocking heat exchangers in cooling towers",
    solution: "MMO titanium anode-based electrolysis system — no chemicals, no salt",
    businessImpact: "Reduced heat exchanger maintenance frequency. Lower OPEX. Eliminates chemical storage compliance cost."
  },
  {
    problem: "Heating elements lose efficiency — energy bills rise 20–30%",
    solution: "Ca²⁺ and Mg²⁺ ions are permanently converted — they cannot form scale",
    businessImpact: "Restores thermal transfer efficiency. Lowers fuel and electricity consumption."
  },
  {
    problem: "Water heaters, geysers & boilers fail 3× faster",
    solution: "Self-cleaning REDOX design — no backwash, no salt refills, no service visits",
    businessImpact: "Extends equipment lifespan. Dramatically reduces replacement CapEx."
  },
  {
    problem: "Sourcing consistent MMO anodes from unreliable suppliers causes delays and quality failures",
    solution: "Direct anode supply from in-house manufacturer — custom spec, repeat orders, technical support",
    businessImpact: "Reliable supply chain. Reduced rejection rate. Single-source accountability."
  },
  {
    problem: "Industrial effluent failing TNPCB/CPCB norms, risking shutdown notices",
    solution: "Electrolytic ETP (E-ETP) — chemical-free, compact, low-maintenance",
    businessImpact: "Achieves discharge compliance. Avoids penalty and operational interruption."
  }
];

export const ProblemSolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.innerWidth < 768) return;

    const items = section.querySelectorAll(".reveal-item");
    gsap.set(items, { opacity: 0, y: 40 });

    const triggers: ScrollTrigger[] = [];
    items.forEach((item, i) => {
      const st = ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        onEnter: () => {
          gsap.to(item, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", delay: i * 0.08 });
        },
        once: true,
      });
      triggers.push(st);
    });

    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="bg-deep-navy section-padding">
      <div className="container-main">
        <div className="reveal-item text-center">
          <SectionLabel text="THE HARD WATER CRISIS" />
          <h2 className="text-h2 text-white mb-12 mt-4">Hard water is silently destroying your equipment</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, i) => (
            <div key={i} className="reveal-item bg-[#F8F9FA] border-l-4 border-[#0070F3] rounded-lg p-5 flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="inline-block self-start px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700">❌ Problem</span>
                <p className="text-[#0A1628] text-sm font-semibold">{item.problem}</p>
              </div>
              <div className="flex flex-col gap-1.5 border-t border-gray-200 pt-3">
                <span className="inline-block self-start px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-[#0070F3]">✅ Solution</span>
                <p className="text-[#555] text-sm">{item.solution}</p>
              </div>
              <div className="flex flex-col gap-1.5 border-t border-gray-200 pt-3">
                <span className="inline-block self-start px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700">📊 Business Impact</span>
                <p className="text-green-800 text-sm font-medium">{item.businessImpact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
