import { useEffect, useRef, useState } from "react";
import { FactoryIcon, PoultryIcon, GearIcon, HotelIcon } from "@/components/Icons";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "States Served" },
  { value: 10, suffix: "+", label: "Years Engineering Expertise" },
  { value: 0, suffix: "", label: "Chemicals Used", prefix: "₹" },
];

const sectors = [
  { icon: FactoryIcon, label: "MSME" },
  { icon: PoultryIcon, label: "Poultry" },
  { icon: GearIcon, label: "Industrial" },
  { icon: HotelIcon, label: "Hotel" },
];

export const TrustBarSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach((stat, i) => {
            if (stat.prefix) return; // ₹0 just displays
            const duration = 2000;
            const startTime = performance.now();
            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCounts(prev => {
                const next = [...prev];
                next[i] = Math.round(stat.value * eased);
                return next;
              });
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-deep-navy to-[#0a2540]" style={{ padding: "clamp(3rem, 5vw, 4rem) 0" }}>
      <div className="container-main">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className={`text-stat text-amber-gold font-bold ${stat.prefix ? "animate-glow-flash" : ""}`} style={{ textShadow: "0 0 20px rgba(255, 193, 7, 0.3)" }}>
                {stat.prefix || ""}{stat.prefix ? stat.value : counts[i]}{stat.suffix}
              </div>
              <div className="text-body-sm text-white/80 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industry icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8 pt-6 border-t border-white/10">
          {sectors.map((sector, i) => (
            <div key={sector.label} className="flex items-center gap-2 hover:text-electric-teal transition-colors duration-300">
              {i > 0 && <span className="text-white/20 mr-4 hidden sm:inline">|</span>}
              <sector.icon size={24} />
              <span className="text-body-sm text-white/70 font-medium">{sector.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
