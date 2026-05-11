import { WhatsAppIcon } from "@/components/Icons";

const quickLinks = [
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const facts = [
  { label: "Founded", value: "Chennai, Tamil Nadu" },
  { label: "Technology", value: "AquaRedox electrolysis-based REDOX process" },
  { label: "Electrode material", value: "MMO-coated titanium (Dimensionally Stable Anode — DSA)" },
  { label: "Products", value: "Scale Remover, ETP, STP, Electro-Chlorinator, Titanium Fabrication" },
  { label: "Service area", value: "Tamil Nadu and South India" },
  { label: "Contact", value: "+91 63696 58869 | ssktianode@gmail.com" },
];

export const FooterSection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footer-dark border-t border-white/[0.06]">
      {/* Quick Facts Panel */}
      <div className="container-main pt-6">
        <div className="bg-electric-teal/[0.05] border border-electric-teal/[0.15] rounded-lg px-6 sm:px-8 py-5 mb-6">
          <p className="text-body-sm text-electric-teal font-semibold mb-3">Quick Facts</p>
          <div className="space-y-1.5">
            {facts.map((f) => (
              <p key={f.label} className="text-body-sm text-white/65">
                <span className="text-electric-teal mr-1">•</span>
                <span className="text-white/50">{f.label}:</span> {f.value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <a href="#" onClick={(e) => handleClick(e, "#")} className="flex items-center">
              <img src="/logo.png" alt="SSK TI ANODE" className="h-12 w-auto" />
            </a>
            <p className="text-body-sm text-white/50 mt-3 max-w-[280px]">
              Transforming hard water into pure, soft water. Chennai's leading chemical-free water treatment engineering company.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-body-sm text-white/50 font-semibold mb-3">Quick Links</p>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block text-body-sm text-white/70 hover:text-electric-teal hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-body-sm text-white/50 font-semibold mb-3">Get in Touch</p>
            <div className="space-y-2.5">
              <a href="tel:+916369658869" className="block text-body-sm text-white/70 hover:text-electric-teal transition-colors">
                +91 63696 58869
              </a>
              <a href="mailto:ssktianode@gmail.com" className="block text-body-sm text-white/70 hover:text-electric-teal transition-colors">
                ssktianode@gmail.com
              </a>
              <a
                href="https://wa.me/916369658869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-white/70 hover:text-electric-teal transition-colors"
              >
                <WhatsAppIcon size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-body-sm text-white/40">© 2025 SSK TI ANODE ENGINEERING. All rights reserved.</p>
          <p className="text-body-sm text-white/40">Chennai, Tamil Nadu | Designed for performance.</p>
        </div>
      </div>
    </footer>
  );
};
