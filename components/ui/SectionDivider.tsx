import React from "react";

interface SectionDividerProps {
  /** flip: next section is slightly darker, so wave fills down */
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}

/**
 * A gentle SVG wave that transitions between two section background colours.
 * Place it at the bottom of a section with `relative overflow-visible`.
 */
const SectionDivider: React.FC<SectionDividerProps> = ({
  flip = false,
  fromColor = "#ffffff",
  toColor = "oklch(0.975 0.005 280)",
}) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden="true">
    <svg
      viewBox="0 0 1440 56"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="block w-full"
      style={{ height: "56px" }}
    >
      <path
        d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
        fill={toColor}
      />
    </svg>
  </div>
);

export default SectionDivider;
