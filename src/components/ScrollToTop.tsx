import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[88px] right-6 z-[85] w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-border-light shadow-scroll-top flex items-center justify-center text-charcoal hover:bg-electric-teal hover:text-white transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
