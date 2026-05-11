import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    location: "Chennai, Tamil Nadu",
    title: "Chennai MSME — Scale & Salt Removal",
    challenge: "Hard water with elevated salinity causing rapid equipment degradation and frequent breakdowns across the manufacturing floor.",
    solution: "SSK Scale Remover with customised salt-removal configuration installed on the main water supply line.",
    result: "Zero chemical usage since installation. Equipment maintenance costs reduced significantly. Production uptime improved.",
  },
  {
    location: "Chennai, Tamil Nadu",
    title: "Poultry Farming Facility — Large-Scale Deployment",
    challenge: "High water consumption with severe scaling in feed lines and drinkers, affecting bird health and operational efficiency.",
    solution: "Industrial-grade AquaRedox system with real-time monitoring dashboard, handling 5,000+ litres per day.",
    result: "Consistent soft water supply across all lines. Reduced pipe blockages by 80%. Lower operating costs within 6 months.",
  },
  {
    location: "Periyapalam, Tamil Nadu",
    title: "ACB Technologies — Boiler Protection",
    challenge: "Boiler scaling causing efficiency loss and unplanned shutdowns, disrupting production schedules and increasing fuel costs.",
    solution: "SSK Scale Remover installed inline before boiler feed, with automated monitoring alerts.",
    result: "Boiler efficiency improved by 15%. Maintenance intervals extended from monthly to quarterly. Zero scale incidents post-installation.",
  },
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
    <section ref={sectionRef} id="projects" className="bg-deep-navy section-padding">
      <div className="container-main">
        <div className="reveal-item"><SectionLabel text="PROJECT PORTFOLIO" /></div>
        <h2 className="reveal-item text-h2 text-white mb-12">Proven results across Tamil Nadu</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((c) => (
            <article key={c.title} className="reveal-item card-dark">
              <div className="w-10 h-0.5 bg-electric-teal mb-4" />
              <p className="text-electric-teal text-body-sm font-medium mb-3">📍 {c.location}</p>
              <h3 className="text-h3 text-white font-semibold mb-4">{c.title}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-body-sm text-white/50 font-semibold">Challenge</span>
                  <p className="text-body-sm text-white/70 mt-0.5">{c.challenge}</p>
                </div>
                <div>
                  <span className="text-body-sm text-white/50 font-semibold">Solution</span>
                  <p className="text-body-sm text-white/70 mt-0.5">{c.solution}</p>
                </div>
                <div>
                  <span className="text-body-sm text-white/50 font-semibold">Result</span>
                  <p className="text-body-sm text-electric-teal mt-0.5">{c.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-item text-center">
          <p className="text-h3 text-white/80 mb-5">Have a similar challenge? Let's solve it.</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
