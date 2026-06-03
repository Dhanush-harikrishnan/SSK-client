import { useEffect, useRef } from "react";

export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; radius: number; speed: number; oscillation: number; offset: number }[] = [];

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 2,
          speed: Math.random() * 1 + 0.5,
          oscillation: Math.random() * 2 + 1,
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 112, 243, 0.2)"; // 20% opacity electric blue

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(p.offset + p.y * 0.05) * p.oscillation * 0.2;

        // Reset if off top
        if (p.y < -p.radius) {
          p.y = canvas.height + p.radius;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Base Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #020C1B 0%, #0A1628 50%, #031525 100%)" }}
      />

      {/* Layer 2: Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* Layer 3: Glowing electrode grid lines */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, #0070F3 25%, #0070F3 26%, transparent 27%, transparent 74%, #0070F3 75%, #0070F3 76%, transparent 77%, transparent)",
          backgroundSize: "100% 50px",
          animation: "scrollGridUp 20s linear infinite"
        }}
      />
      <style>{`
        @keyframes scrollGridUp {
          from { background-position: 0 0; }
          to { background-position: 0 -1000px; }
        }
      `}</style>
    </div>
  );
};
