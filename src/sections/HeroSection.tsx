import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "@/components/Icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  uniform float u_foldFrequency;
  uniform float u_dissolveSpeed;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      val += amp * noise(p * freq);
      freq *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  float pattern(vec2 p) {
    vec2 q = vec2(fbm(p), fbm(p + vec2(5.2, 1.3)));
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2)), fbm(p + 4.0 * q + vec2(8.3, 2.8)));
    return fbm(p + 4.0 * r);
  }

  float dissolve(vec2 uv) {
    return smoothstep(0.0, 0.1, pattern(uv * u_foldFrequency - u_time * u_dissolveSpeed * 0.5));
  }

  vec2 refract(vec2 uv, vec2 mouse) {
    vec2 delta = uv - mouse;
    float dist = length(delta);
    float strength = exp(-dist * dist * 12.0) * 0.06;
    return uv + normalize(delta + 0.001) * strength;
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= u_resolution.x / u_resolution.y;
    uv = abs(uv);
    uv = refract(uv, u_mouse);
    float ink = dissolve(uv);
    vec3 shadowColor = vec3(0.02, 0.06, 0.1);
    vec3 highlightColor = vec3(0.0, 0.76, 0.66);
    vec3 color = mix(shadowColor, highlightColor, ink);
    float vignette = 1.0 - length(vUv - 0.5) * 0.6;
    color *= vignette;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const HeroSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseTarget = useRef({ x: 0.5, y: 0.5 });
  const [videoOpen, setVideoOpen] = useState(false);
  const text3dRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      u_foldFrequency: { value: 0.65 },
      u_dissolveSpeed: { value: isMobile ? 0.15 : 0.25 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      uniforms.u_time.value = clock.getElapsedTime();
      mouseRef.current.x += (mouseTarget.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseTarget.current.y - mouseRef.current.y) * 0.08;
      uniforms.u_mouse.value.set(mouseRef.current.x, mouseRef.current.y);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      uniforms.u_resolution.value.set(container.clientWidth, container.clientHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.current.x = e.clientX / window.innerWidth;
      mouseTarget.current.y = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Hero load animation
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const badge = hero.querySelector(".hero-badge");
    const h1 = hero.querySelector(".hero-h1");
    const sub = hero.querySelector(".hero-sub");
    const ctas = hero.querySelector(".hero-ctas");
    const trust = hero.querySelector(".hero-trust");

    gsap.set([badge, h1, sub, ctas, trust], { opacity: 0, y: (i) => [20, 30, 20, 15, 10][i] });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(badge, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" })
      .to(h1, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "+=0.2")
      .to(sub, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, "+=0.1")
      .to(ctas, { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }, "+=0.1")
      .to(trust, { opacity: 1, duration: 0.5, ease: "power2.out" }, "+=0.1");

    return () => { tl.kill(); };
  }, []);

  // 3D Floating Text Animation
  useEffect(() => {
    const container = text3dRef.current;
    if (!container || window.innerWidth < 768) return;

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let textMesh: THREE.Mesh;
    let animId: number;

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 350;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const loader = new FontLoader();
      loader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
        const geo = new TextGeometry("AQUAREDOX", {
          font,
          size: 50,
          depth: 35,
          bevelEnabled: true,
          bevelThickness: 5,
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
          opacity: 0.08,
        });
        textMesh = new THREE.Mesh(geo, mat);
        scene.add(textMesh);
      });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        if (textMesh) {
          textMesh.rotation.y += 0.003;
          textMesh.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
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

      return { handleResize };
    };

    const cleanup = initScene();

    return () => {
      cancelAnimationFrame(animId);
      if (cleanup) {
        window.removeEventListener("resize", cleanup.handleResize);
      }
      if (container.contains(renderer?.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pb-16" style={{ minHeight: "600px" }}>
      {/* WebGL Canvas */}
      <div ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* 3D Text Background */}
      <div ref={text3dRef} className="absolute inset-0 z-[1] hidden md:block pointer-events-none" />

      {/* Dark scrim overlay - increased opacity for better text visibility */}
      <div className="absolute inset-0 z-[2] bg-deep-navy/60 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-[3] container-main flex flex-col items-center text-center pt-20" style={{ maxWidth: "900px" }}>
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-electric-teal/15 border border-electric-teal/30 text-electric-teal text-body-sm font-medium mb-6">
          <span role="img" aria-label="lightning">⚡</span> Chemical-Free Water Softening Technology
        </div>

        {/* H1 - Changed to bold sans-serif font */}
        <h1 className="hero-h1 font-bold text-h1 text-white mb-5" style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 40px rgba(10, 37, 64, 0.6)", fontFamily: "Inter, system-ui, sans-serif" }}>
          India's Most Advanced
          <br />
          Hard Water Solution
        </h1>

        {/* Subheadline */}
        <p className="hero-sub text-body text-white/85 max-w-[680px] mx-auto mb-8">
          AquaRedox permanently eliminates scale buildup using MMO-coated titanium electrodes — no salt, no chemicals, no ion exchange. Just pure, soft water. Forever.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => setVideoOpen(true)}
            className="btn-secondary-white"
          >
            Watch Demo Video <ArrowRight size={16} />
          </button>
          <a href="#technology" className="btn-secondary-white" onClick={(e) => { e.preventDefault(); document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" }); }}>
            See How It Works <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn-primary relative overflow-hidden" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get a Free Site Assessment <ArrowRight size={16} />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2 h-full animate-shimmer" />
          </a>
        </div>

        {/* Trust line - Fixed visibility with better contrast and padding */}
        <div className="hero-trust mt-12 mb-8">
          <div className="w-16 h-[2px] bg-electric-teal/40 mx-auto mb-4" />
          <p className="text-body text-white font-medium px-4" style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}>
            Trusted by factories, poultry farms, hotels & MSMEs across Tamil Nadu
          </p>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-deep-navy border-electric-teal/30">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-white text-xl">Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            {videoOpen && (
              <video
                className="w-full h-full"
                controls
                autoPlay
                src="/demo.mp4"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
