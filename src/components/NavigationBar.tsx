import { useEffect, useRef, useState, useCallback } from "react";
import { Hamburger, CloseX } from "./Icons";

const NAV_LINKS = [
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["technology", "products", "projects", "faq", "contact"];
      const navHeight = 80;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= navHeight + 50) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          scrolled
            ? "bg-deep-navy/[0.92] backdrop-blur-xl shadow-nav h-14"
            : "bg-transparent h-20"
        }`}
        style={{ transitionDuration: "400ms" }}
      >
        <div className="container-main h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="SSK TI ANODE" className="h-16 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-white/90 hover:text-electric-teal transition-colors duration-200 text-[0.95rem] font-medium ${
                  activeSection === link.href.slice(1) ? "text-electric-teal" : ""
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-electric-teal" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden lg:inline-flex btn-primary py-2.5 px-6 text-sm"
          >
            Get a Free Quote
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Hamburger size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[110] bg-deep-navy transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ transitionDuration: "300ms" }}
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
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-semibold transition-colors ${
                activeSection === link.href.slice(1) ? "text-electric-teal" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary mt-4"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
};
