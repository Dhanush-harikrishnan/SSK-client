import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const stats = [
  { value: 500, suffix: "+", label: "Systems Installed" },
  { value: 5, suffix: "", label: "Countries Served" },
  { value: 15, suffix: "+", label: "Industry Sectors" },
  { value: 100, suffix: "%", label: "In-House Manufactured" },
  { value: 10, suffix: "+", label: "Years Manufacturing Anodes" }
];

export const TrustBarSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-deep-navy to-[#0a2540] py-12 lg:py-16 overflow-hidden">
      {/* Scan line effect */}
      {hasAnimated && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,112,243,0.15), transparent)",
            width: "30%",
            height: "100%",
            animation: "scanLine 1.5s ease-in-out forwards"
          }}
        />
      )}
      <style>{`
        @keyframes scanLine {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(400%); opacity: 0; }
        }
      `}</style>

      <div className="container-main relative z-10">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-center">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={0.1 + i * 0.1} direction="up" className="flex-1 min-w-[140px]">
              <div className="text-4xl lg:text-5xl text-[#0070F3] font-bold tracking-tight">
                {hasAnimated ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy={false}
                  />
                ) : (
                  "0" + stat.suffix
                )}
              </div>
              <div className="text-xs lg:text-sm text-white/90 mt-3 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
