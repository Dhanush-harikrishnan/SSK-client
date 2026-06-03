import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
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
      setScrolled(window.scrollY > 50);

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
      // If we are already on the homepage, prevent default and scroll
      if (location.pathname === "/") {
        e.preventDefault();
        const targetId = href.split("#")[1];
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      // If we are not on the homepage, let the Link navigate to /#id
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          scrolled || location.pathname !== "/"
            ? "bg-deep-navy/[0.92] backdrop-blur-xl shadow-nav h-14"
            : "bg-transparent h-20"
        }`}
        style={{ transitionDuration: "400ms" }}
      >
        <div className="container-main h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img src="/logo.png" alt="SSK TI ANODE" className="h-16 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                className={`relative hover:text-electric-teal transition-colors duration-200 text-[0.95rem] font-medium ${
                  scrolled || location.pathname !== "/" ? "text-white/90" : "text-charcoal/90"
                } ${isActive(link) ? "text-electric-teal" : ""}`}
              >
                {link.label}
                {isActive(link) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-electric-teal" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", true)}
            className="hidden lg:inline-flex btn-primary py-2.5 px-6 text-sm"
          >
            Request Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 ${scrolled || location.pathname !== "/" ? "text-white" : "text-charcoal"}`}
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
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
              className={`text-2xl font-semibold transition-colors ${
                isActive(link) ? "text-electric-teal" : "text-white"
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
