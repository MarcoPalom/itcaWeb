import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ImageSliderImageProps {
  src: string;
  alt: string;
  imageIndex: number;
  pushDirection: "up" | "down";
  imageVariants: Record<string, any>;
}

const ImageSliderImage: React.FC<ImageSliderImageProps> = ({ src, alt, pushDirection, imageVariants }) => (
  <AnimatePresence initial={false} custom={pushDirection}>
    <motion.img
      key={src}
      src={src}
      alt={alt}
      custom={pushDirection}
      variants={imageVariants[pushDirection]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ y: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 'auto',
        maxHeight: '60vh',
        objectFit: 'cover',
        zIndex: 1,
        borderRadius: '1vw',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        pointerEvents: 'none',
      }}
    />
  </AnimatePresence>
);

export default ImageSliderImage; 