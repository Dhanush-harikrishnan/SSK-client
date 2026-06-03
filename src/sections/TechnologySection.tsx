import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";
import { CheckSmall, ElectrodeSVG, IonConvertSVG, CleanPipeSVG } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "1", title: "Electrolysis Initiated", desc: "MMO-coated titanium electrodes apply a controlled electrolytic field to incoming water. No chemicals enter the water at any stage. The process begins instantly as water flows through the chamber.", svg: ElectrodeSVG },
  { num: "2", title: "Ion Conversion via REDOX", desc: "The electrochemical REDOX reaction converts hardness-causing divalent ions (Ca\u00B2\u207A, Mg\u00B2\u207A) into monovalent ionic states. These altered ions pass through pipes without bonding to surfaces \u2014 permanently neutralised.", svg: IonConvertSVG },
  { num: "3", title: "Scale-Free Water, Permanently", desc: "Unlike traditional softeners that temporarily exchange ions (and require constant salt), AquaRedox permanently alters mineral behaviour. Your pipes, industrial equipment, and boilers stay clean indefinitely \u2014 guaranteed.", svg: CleanPipeSVG },
];

const tableRows = [
  { feature: "Chemicals required", traditional: "Salt (ongoing)", chemical: "Yes", aquaredox: "None" },
  { feature: "Maintenance", traditional: "Weekly", chemical: "Regular", aquaredox: "Minimal" },
  { feature: "Permanent fix", traditional: "No", chemical: "No", aquaredox: "Yes" },
  { feature: "Eco-friendly", traditional: "Partial", chemical: "No", aquaredox: "Yes" },
  { feature: "Monitoring", traditional: "Manual", chemical: "Manual", aquaredox: "Real-time" },
];

export const TechnologySection = () => {
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
          gsap.to(item, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", delay: i * 0.06 });
        },
        once: true,
      });
      triggers.push(st);
    });

    // Step badge pop
    const badges = section.querySelectorAll(".step-badge");
    badges.forEach((badge) => {
      gsap.set(badge, { scale: 0.8, opacity: 0 });
      const st = ScrollTrigger.create({
        trigger: badge,
        start: "top 85%",
        onEnter: () => {
          gsap.to(badge, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
        },
        once: true,
      });
      triggers.push(st);
    });

    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="technology" className="bg-off-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <div className="reveal-item"><SectionLabel text="THE AQUAREDOX PROCESS" /></div>
          <h2 className="reveal-item text-h2 text-charcoal max-w-[700px] mx-auto mb-4">Engineering that rewrites the chemistry of hard water</h2>
          <p className="reveal-item text-body text-charcoal-light max-w-[700px] mx-auto">
            AquaRedox uses a patented electrolysis process with MMO-coated titanium electrodes to permanently alter hard water minerals at the molecular level — no chemicals, no salt, no waste.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {steps.map((step) => (
            <div key={step.num} className="reveal-item card-standard text-center">
              <div className="step-badge w-12 h-12 rounded-full bg-electric-teal flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="text-h3 text-charcoal font-semibold mb-3">{step.title}</h3>
              <p className="text-body-sm text-charcoal-light mb-5">{step.desc}</p>
              <div className="flex justify-center">
                <step.svg size={120} />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="reveal-item">
          <h3 className="text-h3 text-charcoal font-semibold text-center mb-8">How AquaRedox Compares</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg border border-border-light shadow-card" style={{ minWidth: "600px" }}>
              <thead>
                <tr className="bg-deep-navy text-white">
                  <th className="text-left py-3.5 px-6 text-body-sm font-semibold">Feature</th>
                  <th className="text-left py-3.5 px-6 text-body-sm font-semibold">Traditional Softener</th>
                  <th className="text-left py-3.5 px-6 text-body-sm font-semibold">Chemical Dosing</th>
                  <th className="text-left py-3.5 px-6 text-body-sm font-semibold text-electric-teal">AquaRedox</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? "bg-off-white" : "bg-white"}>
                    <td className="py-3.5 px-6 text-body-sm text-charcoal font-medium">{row.feature}</td>
                    <td className="py-3.5 px-6 text-body-sm text-charcoal-light">{row.traditional}</td>
                    <td className="py-3.5 px-6 text-body-sm text-charcoal-light">{row.chemical}</td>
                    <td className="py-3.5 px-6 text-body-sm text-electric-teal font-semibold">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckSmall size={12} />
                        <span className={row.aquaredox === "None" ? "text-amber-gold font-bold" : ""}>{row.aquaredox}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
