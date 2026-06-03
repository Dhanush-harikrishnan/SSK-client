import { SectionDivider } from "@/components/SectionDivider";
import { HeroSection } from "@/sections/HeroSection";
import { TrustBarSection } from "@/sections/TrustBarSection";
import { ProblemSolutionSection } from "@/sections/ProblemSolutionSection";
import { BenefitsGridSection } from "@/sections/BenefitsGridSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { CaseStudiesSection } from "@/sections/CaseStudiesSection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSection } from "@/sections/ContactSection";
import { OEMBannerSection } from "@/sections/OEMBannerSection";
import { CountriesSection } from "@/sections/CountriesSection";
import { TechnologyTeaser } from "@/sections/TechnologyTeaser";
import { WhoWeServe } from "@/sections/WhoWeServe";
import { HowItWorks } from "@/sections/HowItWorks";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <SectionDivider color="#0A2540" direction="right" />
      <TrustBarSection />

      <SectionDivider color="#0A1628" direction="right" />
      <ProblemSolutionSection />

      <SectionDivider color="#0A1628" direction="left" />
      <TechnologyTeaser />

      <SectionDivider color="#F8F9FA" direction="right" />
      <BenefitsGridSection />

      <SectionDivider color="#f8fafc" direction="left" />
      <ProductsSection />

      <SectionDivider color="#ffffff" direction="right" />
      <HowItWorks />

      <SectionDivider color="#ffffff" direction="left" />
      <CountriesSection />

      <SectionDivider color="#0f172a" direction="right" />
      <OEMBannerSection />

      <SectionDivider color="#F8F9FA" direction="left" />
      <CaseStudiesSection />

      <SectionDivider color="#ffffff" direction="right" />
      <WhoWeServe />

      <SectionDivider color="#F8F9FA" direction="left" />
      <FAQSection />

      <SectionDivider color="#020C1B" direction="right" />
      <ContactSection />
    </main>
  );
}
