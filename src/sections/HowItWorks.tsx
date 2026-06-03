import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  {
    num: 1,
    icon: "📋",
    title: "Share Your Requirement",
    desc: "Tell us your application — cooling tower, pool, ETP, or OEM anode spec. We respond within 24 hours.",
  },
  {
    num: 2,
    icon: "⚙️",
    title: "We Design the Solution",
    desc: "Our team configures the right electrode type, system size, and power specification for your exact water quality and flow rate.",
  },
  {
    num: 3,
    icon: "🏭",
    title: "Manufactured In Chennai",
    desc: "Every anode and system is built in-house at our Gowrivakkam facility. No third-party components. Full quality control.",
  },
  {
    num: 4,
    icon: "🚚",
    title: "Delivered & Commissioned",
    desc: "Systems are shipped to site. Installation support provided. Export orders handled with full documentation.",
  },
];

export const HowItWorks = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-24">
      <div className="container-main">
        <AnimateOnScroll direction="up" className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628] mb-3">From Enquiry to Running System</h2>
          <p className="text-[#555] text-lg font-medium">Simple process. Direct from manufacturer.</p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[32px] left-0 right-0 h-1 bg-[#E2E8F0] hidden lg:block rounded-full overflow-hidden z-0">
            {inView && (
              <motion.div
                className="h-full bg-[#0070F3]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            )}
          </div>

          <div className="absolute top-0 bottom-0 left-[32px] w-1 bg-[#E2E8F0] block lg:hidden rounded-full overflow-hidden z-0">
            {inView && (
              <motion.div
                className="w-full bg-[#0070F3]"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative">
                <motion.div
                  initial={{ backgroundColor: "#ffffff", borderColor: "#E2E8F0", color: "#64748b" }}
                  animate={inView ? { backgroundColor: "#0A1628", borderColor: "#0A1628", color: "#ffffff" } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.3 }}
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold flex-shrink-0 z-10 shadow-sm"
                >
                  {step.num}
                </motion.div>

                <AnimateOnScroll direction="up" delay={0.4 + index * 0.15} className="mt-0 lg:mt-8 ml-6 lg:ml-0 flex-1">
                  <div className="text-3xl mb-4 leading-none">{step.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">{step.title}</h3>
                  <p className="text-[#555] text-[0.95rem] leading-relaxed">{step.desc}</p>
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
