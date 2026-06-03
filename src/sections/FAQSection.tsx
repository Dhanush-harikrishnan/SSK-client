import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";
import { ChevronDown } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is AquaRedox water softening technology?",
    a: "AquaRedox is an electrolysis-based REDOX water treatment process developed by SSK TI ANODE ENGINEERING. It uses MMO-coated titanium electrodes to permanently convert hard water minerals (calcium and magnesium ions) into a non-scaling form \u2014 without any chemicals, salt, or traditional ion exchange. The process is continuous, self-cleaning, and requires no ongoing chemical purchases.",
  },
  {
    q: "Is AquaRedox completely chemical-free?",
    a: "<strong>Yes.</strong> The AquaRedox process uses only electricity and titanium electrodes. No salt, no softening chemicals, no additives of any kind enter your water supply at any point. This makes it one of the most environmentally friendly water treatment technologies available in India today.",
  },
  {
    q: "How is AquaRedox different from a traditional water softener?",
    a: "Traditional ion-exchange softeners require regular salt top-ups and produce brine waste that harms the environment. AquaRedox permanently alters the ionic structure of hard water minerals through electrochemical REDOX, so <strong>no salt or chemicals are ever needed</strong>, and there is no harmful discharge. It is a true one-time install with minimal ongoing maintenance.",
  },
  {
    q: "What is the price of an SSK Scale Remover?",
    a: "The SSK Scale Remover starts at <strong>\u20B925,000</strong> for residential and small commercial units. Industrial and custom systems are priced based on water volume, hardness level, and specific application requirements. Contact us for a <strong>Technical Consultation and personalised quote</strong>.",
  },
  {
    q: "Does AquaRedox work for industrial and commercial applications?",
    a: "Yes. SSK TI ANODE ENGINEERING has successfully installed AquaRedox systems in poultry farms, MSMEs, boiler plants, hotels, and factories across Tamil Nadu. We also offer complete ETP and STP solutions for industrial wastewater treatment. Our systems handle volumes from 500 litres/day (residential) to 50,000+ litres/day (industrial).",
  },
  {
    q: "Where is SSK TI ANODE ENGINEERING located?",
    a: "We are based in <strong>Gowrivakkam, Chennai, Tamil Nadu</strong> (PIN 600073) and serve clients across Tamil Nadu and South India. Our engineers conduct on-site assessments, installation, and ongoing support throughout the region.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const items = section.querySelectorAll(".reveal-item");
    gsap.set(items, { opacity: 0, y: 30 });
    const triggers: ScrollTrigger[] = [];
    items.forEach((item, i) => {
      const st = ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        onEnter: () => {
          gsap.to(item, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay: i * 0.08 });
        },
        once: true,
      });
      triggers.push(st);
    });
    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="bg-off-white section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="reveal-item"><SectionLabel text="FREQUENTLY ASKED QUESTIONS" /></div>
          <h2 className="reveal-item text-h2 text-charcoal">Frequently asked questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="reveal-item bg-white border border-border-light rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-off-white transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-body text-charcoal font-semibold leading-relaxed">{faq.q}</span>
                  <ChevronDown size={20} className={`flex-shrink-0 text-charcoal-light transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? "0 24px 20px" : "0 24px",
                  }}
                >
                  <p
                    className="text-body text-charcoal-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
