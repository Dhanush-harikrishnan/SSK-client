import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "@/components/NavigationBar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FooterSection } from "@/sections/FooterSection";
import { PageLoader } from "@/components/PageLoader";

import Home from "@/pages/Home";
import TechnologyPage from "@/pages/TechnologyPage";

function App() {
  // Removed scroll-linked hue shift to prevent unthrottled global repaints

  return (
    <BrowserRouter>
      <PageLoader />
      <div className="font-inter">
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>

        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
