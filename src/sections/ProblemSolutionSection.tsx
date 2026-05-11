import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";
import { AlertTriangle, FlameIcon, BrokenWrench, SkinIcon, InfinityCost, CheckCircle } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  { icon: AlertTriangle, title: "Scale clogs pipes and reduces water flow by up to 70%", desc: "Mineral deposits accumulate in plumbing, choking water pressure and forcing expensive pipe replacements." },
  { icon: FlameIcon, title: "Heating elements lose efficiency — energy bills rise 20–30%", desc: "Every millimetre of scale on your boiler or geyser forces it to work harder, burning extra electricity or fuel every single day." },
  { icon: BrokenWrench, title: "Water heaters, geysers & boilers fail 3× faster", desc: "Scale-induced corrosion and overheating cut equipment lifespan dramatically. Replacement costs pile up year after year." },
  { icon: SkinIcon, title: "Skin becomes dry; fabrics lose softness in laundry", desc: "Hard water strips natural oils from skin and leaves mineral residue on clothes, making them rough and faded." },
  { icon: InfinityCost, title: "Chemical softeners add ongoing cost — forever", desc: "Salt-based softeners demand weekly refills, regular maintenance, and never-ending chemical purchases. The expense never stops." },
];

const solutions = [
  "MMO-coated titanium electrodes trigger a precise REDOX reaction",
  "Ca\u00B2\u207A and Mg\u00B2\u207A ions are permanently converted \u2014 they cannot form scale",
  "Self-cleaning design \u2014 no backwash, no salt refills, no service visits",
  "Real-time monitoring dashboard included",
  "Typical ROI within 18\u201324 months",
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
        <div className="reveal-item"><SectionLabel text="THE HARD WATER CRISIS" /></div>
        <h2 className="reveal-item text-h2 text-white mb-12">Hard water is silently destroying your equipment</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem Column */}
          <div>
            {painPoints.map((pp, i) => (
              <div key={i} className={`reveal-item flex gap-4 py-4 ${i < painPoints.length - 1 ? "border-b border-white/[0.08]" : ""}`}>
                <div className="flex-shrink-0 mt-1"><pp.icon size={24} /></div>
                <div>
                  <h3 className="text-h3 text-white font-semibold">{pp.title}</h3>
                  <p className="text-body-sm text-white/60 mt-1">{pp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Column */}
          <div>
            <h3 className="reveal-item text-h3 text-electric-teal font-bold mb-8">
              One system. Zero chemicals. Permanent results.
            </h3>
            {solutions.map((sol, i) => (
              <div key={i} className={`reveal-item flex gap-4 py-4 ${i < solutions.length - 1 ? "border-b border-white/[0.08]" : ""}`}>
                <div className="flex-shrink-0 mt-0.5"><CheckCircle size={24} /></div>
                <p className={`text-h3 text-white font-semibold ${i === solutions.length - 1 ? "text-amber-gold" : ""}`}>
                  {sol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
