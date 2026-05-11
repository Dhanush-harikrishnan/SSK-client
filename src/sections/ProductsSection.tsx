import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const scaleRemoverFeatures = [
  "MMO titanium electrodes",
  "Chemical-free treatment",
  "Self-cleaning design",
  "Advanced monitoring dashboard",
  "Easy installation",
  "Prevents scale permanently",
];

const etpFeatures = [
  "Primary & secondary treatment",
  "Pressure Sand Filter (PSF)",
  "Activated Carbon Filter (ACF)",
  "Reverse Osmosis (RO) & Ultra Filtration (UF)",
  "DM/MB plants for zero discharge",
  "Custom engineering for your site",
];

const otherFeatures = [
  "Electro-Chlorinator systems for safe water disinfection",
  "Custom titanium fabrication — pumps, blowers, impellers",
  "Industrial components built to specification",
  "On-site installation & commissioning",
  "Annual maintenance contracts available",
];

export const ProductsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const text3dRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const items = section.querySelectorAll(".reveal-item");
    gsap.set(items, { opacity: 0, y: 40 });
    const triggers: ScrollTrigger[] = [];
    items.forEach((item, i) => {
      const st = ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        onEnter: () => {
          gsap.to(item, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", delay: i * 0.15 });
        },
        once: true,
      });
      triggers.push(st);
    });
    return () => triggers.forEach(t => t.kill());
  }, []);

  // 3D Text
  useEffect(() => {
    const container = text3dRef.current;
    if (!container || window.innerWidth < 768) return;

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let textMesh: THREE.Mesh;
    let animId: number;

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 300;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const loader = new FontLoader();
      loader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
        const geo = new TextGeometry("AQUAREDOX", {
          font,
          size: 40,
          depth: 30,
          bevelEnabled: true,
          bevelThickness: 4,
          bevelSize: 3,
          bevelSegments: 3,
        });
        geo.computeBoundingBox();
        if (geo.boundingBox) {
          geo.translate(-geo.boundingBox.max.x / 2, -geo.boundingBox.max.y / 2, 0);
        }
        const mat = new THREE.MeshBasicMaterial({
          color: 0x00C2A8,
          transparent: true,
          opacity: 0.15,
        });
        textMesh = new THREE.Mesh(geo, mat);
        scene.add(textMesh);
      });

      let scrollRotX = 0;
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          scrollRotX = (self.progress - 0.5) * 0.6;
        },
      });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        if (textMesh) {
          textMesh.rotation.y += 0.002;
          textMesh.rotation.x = scrollRotX;
        }
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", handleResize);

      return { st, handleResize };
    };

    const cleanup = initScene();

    return () => {
      cancelAnimationFrame(animId);
      if (cleanup) {
        cleanup.st.kill();
        window.removeEventListener("resize", cleanup.handleResize);
      }
      if (container.contains(renderer?.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="products" className="bg-off-white section-padding relative overflow-hidden">
      {/* 3D Text Background */}
      <div ref={text3dRef} className="absolute inset-0 z-0 hidden md:block pointer-events-none" />

      <div className="container-main relative z-[1]">
        <div className="text-center mb-12">
          <div className="reveal-item"><SectionLabel text="SOLUTIONS ENGINEERED FOR EVERY SCALE" /></div>
          <h2 className="reveal-item text-h2 text-charcoal mb-4">Solutions engineered for every scale</h2>
          <p className="reveal-item text-body text-charcoal-light">
            From a single household to a 10,000-litre-per-day industrial plant — we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Highlighted */}
          <div className="reveal-item card-highlighted flex flex-col">
            <span className="inline-block self-start px-3 py-1 bg-electric-teal text-white text-[0.7rem] font-semibold rounded-full mb-3">
              FLAGSHIP PRODUCT
            </span>
            <h3 className="text-h2 text-charcoal font-bold mb-2">SSK Scale Remover</h3>
            <div className="text-amber-gold font-bold text-2xl mb-4">Custom Pricing</div>
            <p className="text-body-sm text-charcoal-light mb-5">
              The flagship AquaRedox unit for homes, apartments, offices & factories.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {scaleRemoverFeatures.map((f) => (
                <li key={f} className="text-body-sm text-charcoal flex items-start gap-2">
                  <span className="text-electric-teal mt-1">●</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={(e) => handleCTAClick(e, "contact")} className="btn-primary w-full">
              Request a Quote <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2 - ETP/STP */}
          <div className="reveal-item card-standard flex flex-col">
            <h3 className="text-h3 text-charcoal font-semibold mb-2">Sewage & Effluent Treatment</h3>
            <div className="text-amber-gold font-semibold text-2xl mb-4">Custom Pricing</div>
            <p className="text-body-sm text-charcoal-light mb-5">
              Complete industrial wastewater solutions — PSF, ACF, Iron Remover, RO, UF, DM/MB plants. Custom-designed for your discharge norms and compliance requirements.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {etpFeatures.map((f) => (
                <li key={f} className="text-body-sm text-charcoal flex items-start gap-2">
                  <span className="text-electric-teal mt-1">●</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={(e) => handleCTAClick(e, "contact")} className="btn-secondary w-full">
              Discuss Your Requirements <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 3 - Other Services */}
          <div className="reveal-item card-standard flex flex-col">
            <h3 className="text-h3 text-charcoal font-semibold mb-2">Other Engineering Services</h3>
            <div className="text-amber-gold font-semibold text-2xl mb-4">Custom Pricing</div>
            <p className="text-body-sm text-charcoal-light mb-5">
              Specialised electrochemical and titanium fabrication services for industrial water treatment infrastructure.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {otherFeatures.map((f) => (
                <li key={f} className="text-body-sm text-charcoal flex items-start gap-2">
                  <span className="text-electric-teal mt-1">●</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={(e) => handleCTAClick(e, "contact")} className="btn-secondary w-full">
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
