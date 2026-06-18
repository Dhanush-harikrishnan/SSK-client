import { ArrowRight } from "@/components/Icons";
import { HeroBackground } from "@/components/HeroBackground";
import { ElectrodeMeshIllustration } from "@/components/ElectrodeMeshIllustration";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const isReduced = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  const v = {
    hidden: { opacity: 0, y: isReduced ? 0 : 24 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-[100vh] min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="container-main relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 py-12 lg:py-20 w-full">
        
        {/* Left Text Content */}
        <div className="flex-1 w-full flex flex-col items-start text-left max-w-2xl z-10">
          <motion.div
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-[#0070F3] text-[0.75rem] tracking-[0.05em] font-semibold mb-6 border border-[#0070F3] backdrop-blur-sm shadow-sm"
          >
            MMO Titanium Anode Manufacturer · Chennai, India
          </motion.div>

          <motion.h1
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[3rem] lg:text-[4rem] font-bold text-white leading-[1.15] mb-6 drop-shadow-md"
          >
            India's Premier MMO Titanium Anode Manufacturer
          </motion.h1>

          <motion.p
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[1.1rem] text-[#C0C9D5] mb-10 max-w-[480px] leading-[1.6]"
          >
            Electrolysis Scale Removers · Electrochlorinators · E-STP/E-ETP Systems. OEM anode supply for manufacturers worldwide.
          </motion.p>

          <motion.div
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 w-full mb-6"
          >
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary flex-1 sm:flex-none text-center bg-[#0070F3] hover:bg-blue-600 shadow-md text-base py-3 px-8 text-white rounded-lg transition-colors font-medium">
              Request a Quote
            </a>
            <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary flex-1 sm:flex-none text-center text-[#0070F3] border border-[#0070F3] hover:bg-[#0070F3]/10 text-base py-3 px-8 rounded-lg transition-colors font-medium flex items-center justify-center gap-1">
              OEM Anode Supply <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[0.8rem] text-white/50"
          >
            🌍 Exporting to India · Sri Lanka · Kenya · Nigeria · Saudi Arabia
          </motion.div>
        </div>

        {/* Right Visual Content */}
        <div className="hidden lg:flex w-full lg:w-[45%] justify-center lg:justify-end z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <ElectrodeMeshIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
