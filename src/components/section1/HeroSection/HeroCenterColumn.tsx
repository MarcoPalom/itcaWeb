import React from "react";
import { motion } from "framer-motion";

interface HeroCenterColumnProps {
  centerWidth: number;
  centerHeight: number;
  scrollProgress: number;
  windowSize: { width: number; height: number };
  pan: { x: number; y: number };
  IMAGE: string;
  circleProgress: number;
  initialCenterWidth: number;
  initialCenterHeight: number;
}

const HeroCenterColumn: React.FC<HeroCenterColumnProps> = ({
  centerWidth,
  centerHeight,
  scrollProgress,
  windowSize,
  pan,
  IMAGE,
  circleProgress,
  initialCenterWidth,
  initialCenterHeight
}) => (
  scrollProgress < 1 && (
    <motion.div
      className="rounded-3xl shadow-2xl overflow-hidden z-20"
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        width: `${centerWidth}px`,
        height: `${centerHeight}px`,
        transform: `translate(-50%, -50%)`,
        background: circleProgress >= 1 ? "#fbf7ee" : undefined,
        backgroundImage: circleProgress < 1 ? `url('${IMAGE}')` : undefined,
        backgroundSize: circleProgress < 1 ? "300% 100%" : undefined,
        backgroundPosition: circleProgress < 1 ? `${50 + pan.x * 0.08}% ${50 + pan.y * 0.18}%` : undefined,
        backgroundRepeat: circleProgress < 1 ? "no-repeat" : undefined,
        marginTop: 0,
        marginBottom: 0,
        pointerEvents: "none",
      }}
      initial={{ borderRadius: 0, opacity: 1, width: initialCenterWidth, height: initialCenterHeight }}
      animate={{
        borderRadius: circleProgress >= 1 ? 0 : 20,
        opacity: 1,
        width: circleProgress >= 1 ? windowSize.width : initialCenterWidth,
        height: circleProgress >= 1 ? windowSize.height : initialCenterHeight
      }}
      transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
    >
      {/* Circulo blanco que crece con el scroll */}
      {circleProgress < 1 && (
        <motion.div
          style={{
            position: "absolute",
            left: "65%",
            top: "35%",
            width: `${20 + circleProgress * 280}%`,
            aspectRatio: "1/1",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "#fbf7ee",
            pointerEvents: "none",
          }}
        />
      )}
    </motion.div>
  )
);

export default HeroCenterColumn; 