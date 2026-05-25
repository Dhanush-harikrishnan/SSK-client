import { useEffect } from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroSection } from "@/sections/HeroSection";
import { TrustBarSection } from "@/sections/TrustBarSection";
import { ProblemSolutionSection } from "@/sections/ProblemSolutionSection";
import { TechnologySection } from "@/sections/TechnologySection";
import { BenefitsGridSection } from "@/sections/BenefitsGridSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { CaseStudiesSection } from "@/sections/CaseStudiesSection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";
import { OEMBannerSection } from "@/sections/OEMBannerSection";
import { CountriesSection } from "@/sections/CountriesSection";

function App() {
  // Scroll-linked hue shift
  useEffect(() => {
    const handleScroll = () => {
      const vh600 = window.innerHeight * 6;
      const progress = Math.min(window.scrollY / vh600, 1);
      const hue = -5 + progress * 15;
      document.documentElement.style.setProperty("--hue-rotate", `${hue}deg`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-inter" style={{ filter: "hue-rotate(var(--hue-rotate, -5deg))" }}>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[300] focus:bg-electric-teal focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <ScrollProgressBar />
      <NavigationBar />
      <WhatsAppFloat />
      <ScrollToTop />

      <main id="main-content">
        <HeroSection />
        <CountriesSection />
        <TrustBarSection />
        <SectionDivider variant="light-to-dark" />
        <ProblemSolutionSection />
        <SectionDivider variant="dark-to-light" />
        <TechnologySection />
        <SectionDivider variant="light-to-dark" />
        <BenefitsGridSection />
        <SectionDivider variant="dark-to-light" />
        <ProductsSection />
        <OEMBannerSection />
        <SectionDivider variant="dark-to-light" />
        <CaseStudiesSection />
        <SectionDivider variant="dark-to-light" />
        <FAQSection />
        <SectionDivider variant="light-to-dark" />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
