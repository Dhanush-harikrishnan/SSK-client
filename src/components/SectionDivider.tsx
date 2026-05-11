interface SectionDividerProps {
  variant: "dark-to-light" | "light-to-dark";
}

export const SectionDivider = ({ variant }: SectionDividerProps) => {
  const fill = variant === "dark-to-light" ? "#F7F9FC" : "#0A2540";
  return (
    <div className="w-full" style={{ height: "clamp(40px, 6vw, 80px)", marginTop: "-1px" }}>
      <svg
        viewBox="0 0 1920 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
        aria-hidden="true"
      >
        {variant === "dark-to-light" ? (
          <path d="M0,80 C320,0 640,80 960,40 C1280,0 1440,60 1920,80 L1920,0 L0,0 Z" fill={fill} />
        ) : (
          <path d="M0,0 C320,80 640,0 960,40 C1280,80 1440,20 1920,0 L1920,80 L0,80 Z" fill={fill} />
        )}
      </svg>
    </div>
  );
};
