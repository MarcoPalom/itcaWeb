import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  imageIndex: number;
  pushDirection: "up" | "down";
  imageVariants: any;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, imageIndex, pushDirection, imageVariants }) => (
  <AnimatePresence mode="wait" initial={false} custom={pushDirection}>
    <motion.div
      key={src}
      custom={pushDirection}
      variants={imageVariants[pushDirection]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96], // Ease out cubic
        scale: { duration: 0.5 },
        filter: { duration: 0.3 }
      }}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '1vw',
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        layoutId={`carousel-image-${imageIndex}`}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  </AnimatePresence>
);

export default HeroImage; 