
interface SectionDividerProps {
  color: string;
  direction?: "left" | "right";
  className?: string;
}

export const SectionDivider = ({ color, direction = "right", className = "" }: SectionDividerProps) => {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: "clamp(40px, 6vw, 80px)", marginTop: "-1px" }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-full block"
        aria-hidden="true"
      >
        {direction === "right" ? (
          <polygon points="0,0 1440,60 1440,0" fill={color} />
        ) : (
          <polygon points="0,60 1440,0 1440,60" fill={color} />
        )}
      </svg>
    </div>
  );
};
