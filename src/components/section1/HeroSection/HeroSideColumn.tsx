import React from "react";
import { motion, AnimationControls } from "framer-motion";

interface HeroSideColumnProps {
  side: "left" | "right";
  controls: AnimationControls;
  IMAGE: string;
  pan: { x: number; y: number };
  leftRightY: number;
}

const HeroSideColumn: React.FC<HeroSideColumnProps> = ({ side, controls, IMAGE, pan, leftRightY }) => {
  const initial = {
    borderRadius: "0rem",
    opacity: 1,
    marginTop: 0,
    marginBottom: 0,
    ...(side === "left" ? { marginLeft: 0 } : { marginRight: 0 })
  };
  const animate =
    side === "left"
      ? { borderRadius: "1.25rem", opacity: 1, marginTop: "1rem", marginBottom: "1rem", marginLeft: "0.5rem" }
      : { borderRadius: "1.25rem", opacity: 1, marginTop: "1rem", marginBottom: "1rem", marginRight: "0.5rem" };

  return (
    <motion.div
      className="flex-1 rounded-3xl shadow-2xl overflow-hidden"
      style={{
        backgroundImage: `url('${IMAGE}')`,
        backgroundSize: "300% 100%",
        backgroundPosition:
          side === "left"
            ? `${0 + pan.x * 0.08}% ${50 + pan.y * 0.18}%`
            : `${100 + pan.x * 0.08}% ${50 + pan.y * 0.18}%`,
        backgroundRepeat: "no-repeat",
        y: leftRightY,
        filter: "brightness(0.98)",
      }}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.7, type: "spring", stiffness: 40, damping: 18 }}
    />
  );
};

export default HeroSideColumn; 