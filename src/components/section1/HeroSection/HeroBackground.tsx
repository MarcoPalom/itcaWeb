import React from "react";
import { motion, AnimationControls } from "framer-motion";

interface HeroBackgroundProps {
  IMAGE: string;
  controls: AnimationControls;
  ZOOM: number;
  pan: { x: number; y: number };
  split: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ IMAGE, controls, ZOOM, pan, split }) => (
  !split ? (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url('${IMAGE}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      animate={controls}
      initial={{ scale: ZOOM, x: 0, y: 0 }}
    />
  ) : null
);

export default HeroBackground; 