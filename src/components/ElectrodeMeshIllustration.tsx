export const ElectrodeMeshIllustration = () => {
  return (
    <div className="relative w-full max-w-[300px] mx-auto animate-float">
      <svg
        viewBox="0 0 300 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_15px_rgba(0,112,243,0.3)]"
      >
        {/* Frame */}
        <rect x="10" y="10" width="280" height="360" rx="8" stroke="#C0C9D5" strokeWidth="6" fill="rgba(192, 201, 213, 0.05)" />
        <rect x="18" y="18" width="264" height="344" rx="4" stroke="#0070F3" strokeWidth="1" strokeOpacity="0.5" />

        {/* Mesh Pattern */}
        <defs>
          <pattern id="hexMesh" x="0" y="0" width="40" height="69.28" patternUnits="userSpaceOnUse">
            <path d="M40 17.32L20 5.77L0 17.32V40.41L20 51.96L40 40.41V17.32Z" stroke="#C0C9D5" strokeWidth="2" strokeOpacity="0.4" fill="none"/>
            <path d="M0 51.96L20 63.51L40 51.96" stroke="#C0C9D5" strokeWidth="2" strokeOpacity="0.4" fill="none"/>
          </pattern>
        </defs>
        <rect x="24" y="24" width="252" height="332" fill="url(#hexMesh)" />

        {/* Glow Effects */}
        <rect x="24" y="24" width="252" height="332" fill="url(#gradientGlow)" opacity="0.4" />
        <defs>
          <radialGradient id="gradientGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#0070F3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0070F3" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
