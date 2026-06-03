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

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <CountriesSection />
      <TrustBarSection />
      <SectionDivider variant="light-to-dark" />
      <ProblemSolutionSection />
      <SectionDivider variant="dark-to-light" />
      <TechnologyTeaser />
      <SectionDivider variant="light-to-dark" />
      <BenefitsGridSection />
      <SectionDivider variant="dark-to-light" />
      <ProductsSection />
      <OEMBannerSection />
      <SectionDivider variant="dark-to-light" />
      <CaseStudiesSection />
      <SectionDivider variant="dark-to-light" />
      <WhoWeServe />
      <FAQSection />
      <SectionDivider variant="light-to-dark" />
      <ContactSection />
    </main>
  );
}
