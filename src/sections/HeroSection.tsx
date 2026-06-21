import { ArrowRight } from "@/components/Icons";
import { HeroBackground } from "@/components/HeroBackground";
import { ElectrodeMeshIllustration } from "@/components/ElectrodeMeshIllustration";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const isReduced = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  const fadeUp = {
    hidden: { opacity: 0, y: isReduced ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      <HeroBackground />
      
      <div className="container px-6 md:px-8 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full">
        
        {/* Left Text Content */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="visible" 
          className="flex-1 w-full flex flex-col items-start text-left max-w-3xl z-10"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
              MMO Titanium Anode Manufacturer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            India's Premier <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Titanium Anode
            </span> Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed font-medium"
          >
            Electrolysis Scale Removers, Electrochlorinators & E-STP/E-ETP Systems. High-performance OEM anode supply for manufacturers worldwide.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all select-none"
            >
              Request a Quote
            </a>
            <a 
              href="#products" 
              onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800 transition-all select-none group"
            >
              OEM Anode Supply 
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-zinc-500 font-medium"
          >
            <span className="flex h-6 items-center">🌍</span>
            <span>Exporting across India, Sri Lanka, Kenya, Nigeria & Saudi Arabia</span>
          </motion.div>
        </motion.div>

        {/* Right Visual Content */}
        <div className="w-full md:w-3/4 lg:w-[45%] flex justify-center lg:justify-end z-10 pointer-events-none origin-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="relative w-full max-w-lg aspect-square lg:aspect-auto"
          >
            {/* Subtle glow behind the illustration */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen" />
            <ElectrodeMeshIllustration />
          </motion.div>
        </div>
      </div>

      {/* Modern gradient fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
};
