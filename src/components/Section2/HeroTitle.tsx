import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface HeroTitleProps {
  title: string;
  imageIndex: number;
  pushDirection: "up" | "down";
  imageVariants: any;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, imageIndex, pushDirection, imageVariants }) => (
  <AnimatePresence initial={false} custom={pushDirection}>
    <motion.h2
      key={imageIndex}
      custom={pushDirection}
      variants={imageVariants[pushDirection]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ y: { type: "spring", stiffness: 400, damping: 35 }, opacity: { duration: 0.15 } }}
      className="text-6xl md:text-7xl font-extrabold text-neutral-900 tracking-tight z-1"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        textAlign: "left",
        whiteSpace: "normal",
        wordBreak: "break-word",
        lineHeight: 1.1,
        opacity: 0.9,
        transition: 'opacity 0.2s ease-out'
      }}
    >
      {title}
    </motion.h2>
  </AnimatePresence>
);

export default HeroTitle; 