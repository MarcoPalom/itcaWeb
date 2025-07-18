import React from "react";
import { motion } from "framer-motion";

interface HeroTextLeftProps {
  scrollProgress: number;
}

const HeroTextLeft: React.FC<HeroTextLeftProps> = ({ scrollProgress }) => (
  <motion.div
    className="fixed left-0 bottom-0 z-30 p-8 flex flex-col items-start pointer-events-none w-1/2 max-w-[40vw]"
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: scrollProgress >= 0.5 ? -450 : 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#fbf7ee] drop-shadow-lg mb-2">INSTITUTO TAMAULIPECO</h1>
    <p className="text-lg md:text-2xl text-[#fbf7ee] drop-shadow">Para la cultura y las artes</p>
  </motion.div>
);

export default HeroTextLeft; 