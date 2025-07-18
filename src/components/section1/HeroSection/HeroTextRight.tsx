import React from "react";
import { motion } from "framer-motion";

interface HeroTextRightProps {
  scrollProgress: number;
}

const HeroTextRight: React.FC<HeroTextRightProps> = ({ scrollProgress }) => (
  <motion.div
    className="fixed right-0 bottom-0 z-30 p-8 flex flex-col items-end pointer-events-auto w-1/2 max-w-[40vw]"
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: scrollProgress >= 0.5 ? 450 : 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-right text-sm text-[#fbf7ee] drop-shadow mb-3">Si quieres ver una version mas simplificada <br/>de la web haz click en el boton</p>
    <button className="px-6 py-3 rounded-full bg-[#fbf7ee] text-black font-bold shadow-lg hover:bg-gray-300 transition">Simplificar</button>
  </motion.div>
);

export default HeroTextRight; 