import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, FlaskNo, DashboardIcon, EnergyIcon, WaterHeart, LeafEco } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: ShieldCheck, title: "Extends Equipment Life", desc: "Prevents scale in boilers, heaters, RO membranes & plumbing. Equipment lasts 2\u20133\u00D7 longer with continuous AquaRedox treatment." },
  { icon: FlaskNo, title: "Zero Chemical Cost", desc: "No salt, no softening chemicals, no additives. Eliminate recurring treatment costs entirely and redirect that budget to growth." },
  { icon: DashboardIcon, title: "Real-Time Monitoring", desc: "IoT-enabled water quality dashboard. Know your water performance 24/7 with alerts, analytics, and remote diagnostics." },
  { icon: EnergyIcon, title: "Energy Savings", desc: "Scale-free heating elements consume up to 30% less electricity. Significant savings on industrial power bills from month one." },
  { icon: WaterHeart, title: "Gentler on Skin & Fabric", desc: "Soft water means healthier skin, softer laundry, and less soap usage. A noticeable quality-of-life upgrade for homes and hospitality." },
  { icon: LeafEco, title: "Eco-Certified Process", desc: "No brine discharge, no harmful byproducts. AquaRedox is a genuinely sustainable water solution that meets environmental compliance." },
];

export const BenefitsGridSection = () => {
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
          gsap.to(item, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", delay: i * 0.1 });
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
        <h2 className="reveal-item text-h2 text-white text-center mb-12">Why leading industries choose AquaRedox</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="reveal-item card-dark hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-electric-teal/[0.12] flex items-center justify-center mb-4">
                <b.icon size={24} />
              </div>
              <h3 className="text-h3 text-white font-semibold mb-2">{b.title}</h3>
              <p className="text-body-sm text-white/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
