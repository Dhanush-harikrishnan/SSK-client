import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Systems Installed" },
  { value: 5, suffix: "", label: "Countries Served" },
  { value: 15, suffix: "+", label: "Industry Sectors" },
  { value: 100, suffix: "%", label: "In-House Manufactured" },
  { value: 10, suffix: "+", label: "Years Manufacturing Anodes" }
];

export const TrustBarSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach((stat, i) => {
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
    <section ref={sectionRef} className="bg-gradient-to-b from-deep-navy to-[#0a2540] py-12 lg:py-16">
      <div className="container-main">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex-1 min-w-[140px] transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl text-[#0070F3] font-bold tracking-tight">
                {counts[i]}{stat.suffix}
              </div>
              <div className="text-xs lg:text-sm text-white/90 mt-3 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
