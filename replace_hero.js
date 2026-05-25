const fs = require('fs');

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

    gsap.set([badge, h1, sub, ctas, trust], { opacity: 0, y: (i) => [20, 30, 20, 15, 10][i] });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(badge, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" })
      .to(h1, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "-=0.4")
      .to(sub, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, "-=0.6")
      .to(ctas, { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }, "-=0.4")
      .to(trust, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");

    return () => { tl.kill(); };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden bg-off-white pb-16 pt-24" style={{ minHeight: "600px" }}>
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-electric-teal/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-amber-gold/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern for Enterprise Vibe */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFoLTM4djM4aDM4eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] bg-repeat opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[3] container-main flex flex-col items-center text-center mt-12" style={{ maxWidth: "1050px" }}>
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-electric-teal/10 border border-electric-teal/20 text-electric-teal text-body-sm font-semibold mb-8 shadow-sm">
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
        <div className="hero-ctas flex flex-col sm:flex-row items-center gap-5">
          <a href="#contact" className="btn-primary" onClick={(e) => scrollTo(e, "contact")}>
            Get a Free Site Assessment <ArrowRight size={16} />
          </a>
          <a href="#technology" className="btn-secondary" onClick={(e) => scrollTo(e, "technology")}>
            See How It Works <ArrowDown size={16} />
          </a>
          <button 
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-2 font-semibold text-charcoal hover:text-electric-teal transition-colors px-6 py-3"
          >
            <div className="w-10 h-10 rounded-full bg-electric-teal/10 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-electric-teal border-b-[6px] border-b-transparent ml-1" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Trust line */}
        <div className="hero-trust mt-16 mb-4">
          <div className="w-16 h-[2px] bg-border-light mx-auto mb-5" />
          <p className="text-[0.75rem] font-bold text-charcoal-light/60 tracking-[0.15em] px-4 uppercase">
            Trusted by manufacturing plants, hospitality & MSMEs across India
          </p>
        </div>
      </div>
    </section>
  );
};
\`

fs.writeFileSync('src/sections/HeroSection.tsx', content);
console.log('Done!');
