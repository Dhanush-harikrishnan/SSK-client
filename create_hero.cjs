const fs = require('fs');
const path = require('path');

const content = `import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "@/components/Icons";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation for text
      gsap.from(".hero-text-elem", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });

      // Animate the CSS ions (bubbles) inside the chamber
      gsap.to(".ion-particle", {
        y: -350,
        opacity: 0,
        duration: "random(2, 4)",
        stagger: {
          each: 0.2,
          repeat: -1
        },
        ease: "none"
      });

      // Float the glass badges for an interactive 3D feel
      gsap.to(".glass-badge-1", {
        y: -15,
        rotation: -2,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(".glass-badge-2", {
        y: 15,
        rotation: 2,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.5
      });
      
      // Floating the entire chamber slightly 
      gsap.to(".chamber-wrapper", {
        y: -10,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#FAFCFF] pt-28 pb-32">
      
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-teal/15 via-amber-gold/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-deep-navy/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Grid Noise Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] pointer-events-none opacity-40 mix-blend-multiply" />

      <div className="container-main relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center h-full">
        
        {/* Left Content - The Pitch */}
        <div className="flex flex-col items-start text-left pt-6 lg:pt-0">
          <div className="hero-text-elem inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-light shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-teal"></span>
            </span>
            <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest text-charcoal group-hover:text-electric-teal transition-colors">
              Advanced Redox Technology
            </span>
          </div>

          <h1 className="hero-text-elem font-extrabold text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[1.05] tracking-tighter text-charcoal mb-6">
            Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal directly to-[#018a78] relative inline-block">
              Scale Prevention
              <svg className="absolute w-full h-3 -bottom-1 sm:-bottom-2 left-0 text-electric-teal/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="hero-text-elem text-lg sm:text-xl text-charcoal-light max-w-[550px] mb-10 leading-relaxed font-medium">
            AquaRedox completely eliminates scale buildup using industrial-grade MMO-coated titanium electrodes. <strong className="text-charcoal font-bold">Zero salt. Zero chemicals. Zero maintenance.</strong> Ultimate performance engineered for your enterprise.
          </p>

          <div className="hero-text-elem flex flex-col sm:flex-row items-center gap-4 w-full h-full sm:w-auto relative z-20">
            <a href="#contact" className="group w-full sm:w-auto relative inline-flex justify-center items-center gap-2 px-8 py-4 bg-charcoal text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(10,37,64,0.3)]" onClick={(e) => scrollTo(e, "contact")}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              className="group w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-4 bg-white text-charcoal font-bold rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:border-electric-teal/30"
            >
              <div className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-electric-teal/10 transition-colors">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-charcoal group-hover:border-l-electric-teal border-b-[5px] border-b-transparent ml-0.5 transition-colors" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Content - Visual Innovation (CSS Art Dashboard) */}
        <div className="hero-text-elem relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
           
           {/* Glow behind the chamber */}
           <div className="absolute w-[60%] h-[60%] rounded-full bg-electric-teal/20 blur-[80px] animate-pulse-slow" />

           <div className="chamber-wrapper relative z-10 w-[140px] md:w-[180px] h-[350px] md:h-[450px] rounded-full bg-gradient-to-tr from-white to-gray-50 shadow-[0_20px_60px_rgba(0,0,0,0.1),inset_0_-10px_20px_rgba(0,0,0,0.05)] border-4 border-white flex justify-center p-2 isolate">
              
              {/* Glass Reaction Chamber */}
              <div className="w-full h-full rounded-full bg-[#0A2540] overflow-hidden relative shadow-[inset_0_10px_30px_rgba(0,0,0,0.8)]">
                 
                 {/* Titanium Anode (Center Rod) */}
                 <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[16px] md:w-[24px] bg-gradient-to-r from-gray-400 via-white to-gray-500 rounded-full shadow-[0_0_20px_#00C2A8]" />
                 
                 {/* MMO Aura Glow */}
                 <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[30px] md:w-[40px] bg-electric-teal/50 blur-[15px] rounded-full" />

                 {/* Moving Ions (Generated via Array for CSS animation) */}
                 {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="ion-particle absolute bottom-[-20px] w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-white/90 blur-[1px] shadow-[0_0_5px_white]" style={{ left: \`\${15 + Math.random() * 70}%\` }} />
                 ))}
                 
                 {/* Water gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-electric-teal/30 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Glass Badge 1 (Left) */}
              <div className="glass-badge-1 absolute top-[25%] -left-[110px] md:-left-[150px] bg-white/70 backdrop-blur-xl border border-white/50 p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 w-max">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-deep-navy/5 text-deep-navy border border-gray-100 flex items-center justify-center font-bold text-xs md:text-sm shadow-inner">
                    Ca²⁺
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[0.65rem] md:text-xs font-bold text-charcoal/60 uppercase tracking-wider">Status</span>
                    <span className="text-xs md:text-sm font-extrabold text-charcoal">Neutralized</span>
                 </div>
              </div>

              {/* Floating Glass Badge 2 (Right) */}
              <div className="glass-badge-2 absolute bottom-[25%] -right-[110px] md:-right-[160px] bg-white/70 backdrop-blur-xl border border-white/50 p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 w-max">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-electric-teal/10 flex items-center justify-center text-electric-teal shadow-inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[0.65rem] md:text-xs font-bold text-charcoal/60 uppercase tracking-wider">System</span>
                    <span className="text-xs md:text-sm font-extrabold text-charcoal">100% Efficient</span>
                 </div>
              </div>

           </div>
        </div>
      </div>
      
      {/* 3-Layer 3D Depth Wave Divider transitioning into deep-navy TrustBarSection */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-[10] text-deep-navy">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] lg:h-[140px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.8V120H0Z" fill="currentColor" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};
`;

const filePath = path.join(__dirname, 'src/sections/HeroSection.tsx');
fs.writeFileSync(filePath, content);
console.log('Innovative Split-Layout Hero created successfully!');
