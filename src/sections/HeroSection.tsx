import { ArrowRight } from "@/components/Icons";
import { HeroBackground } from "@/components/HeroBackground";
import { ElectrodeMeshIllustration } from "@/components/ElectrodeMeshIllustration";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const isReduced = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  const v = {
    hidden: { opacity: 0, y: isReduced ? 0 : 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="container-main relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 py-12 lg:py-20">
        
        {/* Left Text Content */}
        <div className="flex-1 w-full flex flex-col items-start text-left max-w-2xl">
          <motion.div
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-md"
          >
            🌍 Exporting to 5+ Countries | OEM Supplier approved
          </motion.div>

          <motion.h1
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
          >
            MMO Titanium Anode Manufacturer <br />
            <span className="text-[#0070F3] drop-shadow-[0_0_15px_rgba(0,112,243,0.4)]">
              & Industrial Water Systems
            </span>
          </motion.h1>

          <motion.p
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
          >
            Chemical-free scale removal, electrochlorination, and ETP/STP systems. <strong className="text-white font-bold">OEM titanium anode supply available for manufacturers & integrators worldwide.</strong>
          </motion.p>

          <motion.div
            variants={v} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-4 w-full"
          >
            <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary flex-1 sm:flex-none text-center shadow-[0_4px_20px_rgba(0,112,243,0.3)] text-base py-3.5 px-8">
              Explore Systems
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary flex-1 sm:flex-none text-center group text-white border-white/30 hover:bg-white/10 text-base py-3.5 px-8">
              Request Quote <span className="group-hover:translate-x-1 transition-transform inline-flex ml-1"><ArrowRight size={18} /></span>
            </a>
          </motion.div>
        </div>

        {/* Right Visual Content */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <ElectrodeMeshIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
