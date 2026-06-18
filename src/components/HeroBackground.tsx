export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Base Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #020C1B 0%, #0A1628 50%, #031525 100%)" }}
      />

      {/* Layer 2: Pure CSS Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#0070F3]"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-20px`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: 0,
              animation: `float-particle ${Math.random() * 4 + 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

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
        @keyframes float-particle {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 0.4; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-120vh) translateX(10px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
