import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Hamburger, CloseX } from "./Icons";

const NAV_LINKS = [
  { label: "Products", href: "/#products", isAnchor: true },
  { label: "Technology", href: "/technology", isAnchor: false },
  { label: "Projects", href: "/#projects", isAnchor: true },
  { label: "FAQ", href: "/#faq", isAnchor: true },
  { label: "Contact", href: "/#contact", isAnchor: true },
];

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Only track scroll spy on homepage
      if (location.pathname === "/") {
        const sections = ["products", "projects", "faq", "contact"];
        const navHeight = 80;
        let current = "";
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= navHeight + 50) {
            current = id;
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
    setMobileOpen(false);

    if (isAnchor) {
      if (location.pathname === "/") {
        e.preventDefault();
        const targetId = href.split("#")[1];
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [location]);

  const isActive = (link: {href: string, isAnchor: boolean}) => {
    if (!link.isAnchor) {
      return location.pathname === link.href;
    }
    return activeSection === link.href.split("#")[1];
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || location.pathname !== "/"
            ? "bg-[#020C1B]/85 backdrop-blur-[16px] border-b border-[#0070F3]/20 shadow-[0_4px_24px_rgba(0,0,0,0.3)] h-14"
            : "bg-transparent h-20 border-b-0 shadow-none"
        }`}
      >
        <div className="container-main h-full flex items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img src="/logo.png" alt="SSK TI ANODE" className="h-16 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                className={`relative h-full flex items-center hover:text-[#0070F3] transition-colors duration-200 text-[0.95rem] font-medium ${
                  scrolled || location.pathname !== "/" ? "text-white/90" : "text-white/90"
                } ${isActive(link) ? "text-[#0070F3]" : ""}`}
              >
                {link.label}
                {isActive(link) && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0070F3]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", true)}
            className="hidden lg:inline-flex btn-primary py-2.5 px-6 text-sm"
          >
            Request Quote
          </Link>

          <button
            className={`lg:hidden p-2 ${scrolled || location.pathname !== "/" ? "text-white" : "text-white"}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Hamburger size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[110] bg-[#0A1628] transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-main h-full flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-5 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseX size={32} />
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
              className={`text-2xl font-semibold transition-colors ${
                isActive(link) ? "text-[#0070F3]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", true)}
            className="btn-primary mt-4"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </>
  );
};
