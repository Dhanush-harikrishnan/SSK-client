const fs = require('fs');
const path = require('path');

// 1. Update index.html for SEO
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf-8');
html = html.replace(/<title>.*<\/title>/, '<title>SSK TI ANODE ENGINEERING | MMO Titanium Anode Manufacturer | Scale Remover | Electrochlorinator Chennai</title>');
if (!html.includes('meta name="description"')) {
    html = html.replace('</title>', '</title>\n    <meta name="description" content="SSK TI ANODE ENGINEERING — MMO coated titanium anode manufacturer in Chennai. Electrolysis scale removers, electrochlorinators, E-STP, E-ETP. OEM anode supply for manufacturers in India, Sri Lanka, Kenya, Nigeria, Saudi Arabia." />\n    <meta name="keywords" content="titanium anode manufacturer India, MMO anode, scale remover system, electrochlorinator, electrolysis water treatment, ETP STP Chennai, OEM anode supply, titanium electrode manufacturer" />');
}
fs.writeFileSync(indexFile, html);

// 2. Update HeroSection.tsx texts
const heroFile = path.join(__dirname, 'src/sections/HeroSection.tsx');
let hero = fs.readFileSync(heroFile, 'utf-8');
hero = hero.replace('<span role="img" aria-label="lightning">⚡</span> Next-Generation Scale Prevention', '🌍 Exporting to 5+ Countries | OEM Supplier approved');
hero = hero.replace(/India's Most Advanced <br \/>\s*<span className="text-electric-teal">Hard Water Solution<\/span>/, 'MMO Titanium Anode Manufacturer <br /> <span className="text-electric-teal">& Industrial Water Systems</span>');
hero = hero.replace('AquaRedox completely eliminates scale buildup using industrial-grade MMO-coated titanium electrodes. <strong className="text-charcoal font-bold">Zero salt. Zero chemicals. Zero maintenance.</strong> Ultimate performance engineered for your enterprise.', 'Chemical-free scale removal, electrochlorination, and ETP/STP systems. <strong className="text-charcoal font-bold">OEM titanium anode supply available for manufacturers & integrators worldwide.</strong>');
hero = hero.replace('Get a Free Site Assessment', 'Request a Quote');
// Remove "Watch Demo" logic if we want, or keep it. Let's keep it.
fs.writeFileSync(heroFile, hero);

// 3. New Component: OEMBannerSection.tsx
const oemCode = `export const OEMBannerSection = () => {
  return (
    <section className="bg-deep-navy text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFoLTM4djM4aDM4eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-5" />
      <div className="container-main relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-electric-teal/20 text-electric-teal text-sm font-semibold mb-6 border border-electric-teal/30">
          GLOBAL OEM & COMPONENT SUPPLY
        </span>
        <h2 className="text-h2 font-bold mb-6">Supplying Anodes to Manufacturers Worldwide</h2>
        <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
          Are you a water treatment company, system integrator, or plant operator? We supply precision MMO-coated titanium anodes as core components for your own systems — backed by deep manufacturing expertise and custom fabrication capabilities.
        </p>
        <a href="#contact" className="btn-primary hover:scale-105 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}}>
          Discuss OEM Supply Requirements
        </a>
      </div>
    </section>
  );
};`;
fs.writeFileSync(path.join(__dirname, 'src/sections/OEMBannerSection.tsx'), oemCode);

// 4. New Component: CountriesSection.tsx
const countCode = `export const CountriesSection = () => {
  const flags = [
    { name: "India", flag: "🇮🇳" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
  ];

  return (
    <section className="bg-white border-y border-border-light py-10">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-charcoal font-bold text-lg mb-1 hidden md:block">Trusted Across Borders</h3>
          <p className="text-charcoal-light/70 text-sm font-semibold uppercase tracking-widest">Our systems & anodes operate in:</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {flags.map(f => (
            <div key={f.name} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-default">
              <span className="text-3xl shadow-sm drop-shadow-sm leading-none">{f.flag}</span>
              <span className="text-charcoal font-semibold text-sm">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};`;
fs.writeFileSync(path.join(__dirname, 'src/sections/CountriesSection.tsx'), countCode);

// 5. Build full Product Section replacement
const prodCode = `import { ArrowRight } from "@/components/Icons";

const products = [
  {
    title: "Electrolysis Scale Remover",
    desc: "Chemical-free hard water treatment using MMO titanium electrodes. Converts calcium/magnesium ions permanently. No salt, no chemicals.",
    badge: "Best Seller ⭐",
    options: ["Full System", "Anode Only (OEM Supply)"],
    highlight: true
  },
  {
    title: "Electrochlorinator System",
    desc: "On-site chlorine generation system (scrubber type) with energiser unit. Ideal for swimming pools, cooling towers, and water disinfection.",
    options: ["Full Set with Energiser", "Anode Only (OEM Supply)"],
    highlight: false
  },
  {
    title: "E-STP — Electrolytic Sewage Treatment",
    desc: "Chemical-free electrolytic sewage treatment using titanium electrodes. Compact, low-maintenance, and suitable for residential/commercial complexes.",
    options: ["Full System"],
    highlight: false
  },
  {
    title: "E-ETP — Industrial Effluent Treatment",
    desc: "Electrolytic effluent treatment plants for industrial wastewater. Handles heavy metals, BOD, COD reduction without chemical dosing.",
    options: ["Full System"],
    highlight: false
  },
  {
    title: "Titanium Anode Manufacturing (OEM)",
    desc: "MMO-coated titanium anodes manufactured to specification. Supplied to water treatment companies, system integrators, and plant builders globally.",
    badge: "B2B / OEM",
    options: ["Standard Shapes", "Custom Fabrication"],
    highlight: true
  },
  {
    title: "Automatic Scale Removal Anode",
    desc: "Standalone titanium anode for integration into existing water systems or OEM assemblies. Suitable for boilers, chillers, and cooling towers.",
    options: ["Standalone Anode", "Full System"],
    highlight: false
  }
];

export const ProductsSection = () => {
  return (
    <section id="products" className="bg-off-white section-padding">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-charcoal mb-4">Our Products & Systems</h2>
          <p className="text-body text-charcoal-light max-w-2xl mx-auto">
            Engineered precision for water treatment. From complete turnkey plants to OEM titanium anode components.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className={\`card-\${p.highlight ? 'highlighted' : 'standard'} flex flex-col h-full bg-white relative\`}>
              {p.badge && (
                <span className={\`absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-bold text-white \${p.highlight ? 'bg-electric-teal' : 'bg-charcoal'}\`}>
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl text-charcoal font-bold mb-3 pr-24">{p.title}</h3>
              <p className="text-sm text-charcoal-light mb-6 flex-1">{p.desc}</p>
              
              <div className="bg-gray-50 border border-border-light rounded-md p-4 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2">Available As:</p>
                <ul className="space-y-1.5">
                  {p.options.map(opt => (
                    <li key={opt} className="text-sm font-semibold text-deep-navy flex items-center gap-2">
                       <span className="text-electric-teal">✔</span> {opt}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="btn-secondary w-full group mt-auto hover:text-white" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Enquire Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform inline" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};`;
fs.writeFileSync(path.join(__dirname, 'src/sections/ProductsSection.tsx'), prodCode);

// 6. Integrate everything into App.tsx
let appStr = fs.readFileSync(path.join(__dirname, 'src/App.tsx'), 'utf-8');
if (!appStr.includes('OEMBannerSection')) {
   appStr = appStr.replace('import { FooterSection } from "@/sections/FooterSection";', 'import { FooterSection } from "@/sections/FooterSection";\nimport { OEMBannerSection } from "@/sections/OEMBannerSection";\nimport { CountriesSection } from "@/sections/CountriesSection";');
   
   appStr = appStr.replace('<HeroSection />\n        <TrustBarSection />', '<HeroSection />\n        <CountriesSection />\n        <TrustBarSection />');
   
   appStr = appStr.replace('<ProductsSection />\n        <SectionDivider variant="light-to-dark" />', '<ProductsSection />\n        <OEMBannerSection />\n        <SectionDivider variant="dark-to-light" />');
}
fs.writeFileSync(path.join(__dirname, 'src/App.tsx'), appStr);

console.log("B2B Transformation Applied via Script!");
