const fs = require('fs');
const path = require('path');

const content = `import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "@/components/Icons";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // Hero load animation
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const badge = hero.querySelector(".hero-badge");
    const h1 = hero.querySelector(".hero-h1");
    const sub = hero.querySelector(".hero-sub");
    const ctas = hero.querySelector(".hero-ctas");
    const trust = hero.querySelector(".hero-trust");
    const wave = hero.querySelector(".hero-wave");

    gsap.set([badge, h1, sub, ctas, trust], { opacity: 0, y: (i) => [20, 30, 20, 15, 10][i] });
    if(wave) gsap.set(wave, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(badge, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" })
      .to(h1, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "-=0.4")
      .to(sub, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, "-=0.6")
      .to(ctas, { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }, "-=0.4")
      .to(trust, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");
      
    if(wave) {
      tl.to(wave, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4");
    }

    return () => { tl.kill(); };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative min-h-[95dvh] flex flex-col items-center justify-center overflow-hidden bg-off-white pt-28" style={{ minHeight: "650px" }}>
      {/* Background Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-electric-teal/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-amber-gold/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern for Enterprise Vibe */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFoLTM4djM4aDM4eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] bg-repeat opacity-[0.04] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[3] container-main flex flex-col items-center text-center mt-12 flex-1 w-full" style={{ maxWidth: "1050px" }}>
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-electric-teal/20 text-electric-teal text-body-sm font-semibold mb-8 shadow-sm">
          <span role="img" aria-label="lightning">⚡</span> Next-Generation Scale Prevention
        </div>

        {/* H1 */}
        <h1 className="hero-h1 font-extrabold text-h1 text-charcoal mb-6 tracking-tight leading-tight">
          India's Most Advanced <br />
          <span className="text-electric-teal">Hard Water Solution</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-sub text-body text-charcoal-light max-w-[700px] mx-auto mb-10 leading-relaxed font-medium">
          AquaRedox permanently eliminates scale buildup using industrial-grade MMO-coated titanium electrodes — no salt, no chemicals, no ion exchange. Pure performance for your enterprise.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
          <a href="#contact" className="btn-primary shadow-lg shadow-electric-teal/20" onClick={(e) => scrollTo(e, "contact")}>
            Get a Free Site Assessment <ArrowRight size={16} />
          </a>
          <a href="#technology" className="btn-secondary bg-white hover:bg-electric-teal" onClick={(e) => scrollTo(e, "technology")}>
            See How It Works <ArrowDown size={16} />
          </a>
          <button 
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-2 font-semibold text-charcoal hover:text-electric-teal transition-colors px-6 py-3 ml-2"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-border-light">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-electric-teal border-b-[6px] border-b-transparent ml-1" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Trust line */}
        <div className="hero-trust mt-16 mb-24 lg:mb-32">
          <p className="text-[0.75rem] font-bold text-charcoal-light/50 tracking-[0.15em] px-4 uppercase flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-charcoal-light/20"></span>
            Trusted by manufacturing plants, hospitality & MSMEs
            <span className="w-12 h-[1px] bg-charcoal-light/20"></span>
          </p>
        </div>
      </div>
      
      {/* Decorative Wave Transition matching Image 2 */}
      <div className="hero-wave absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-[10] text-[#0A2540]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[130px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,116.8,188.1,98.11,234.33,83.05,278.43,70.16,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};
`;

const filePath = path.join(__dirname, 'src/sections/HeroSection.tsx');
fs.writeFileSync(filePath, content);
console.log('HeroSection with elegant wave created successfully!');
