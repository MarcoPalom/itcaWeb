import React, { RefObject } from "react";
import { motion } from "framer-motion";
import Player from "lottie-react";
import butterflyData from "@/animations/butterfly.json";

interface ButterfliesProps {
  butterflyRef1: RefObject<any>;
  butterflyRef2: RefObject<any>;
  butterflyRef3: RefObject<any>;
}

const Butterflies: React.FC<ButterfliesProps> = ({ butterflyRef1, butterflyRef2, butterflyRef3 }) => (
  <>
    <motion.div
      className="absolute"
      style={{ left: '20%', top: '60%', width: 90, height: 90, zIndex: 53, pointerEvents: 'none' }}
      animate={{ x: [0, 80, 40, 0], y: [0, -60, 30, 0] }}
      transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      <Player autoplay loop animationData={butterflyData} lottieRef={butterflyRef1} style={{ width: '100%', height: '100%' }} />
    </motion.div>
    <motion.div
      className="absolute"
      style={{ left: '65%', top: '30%', width: 70, height: 70, zIndex: 53, pointerEvents: 'none', transform: 'scaleX(-1)' }}
      animate={{ x: [0, -100, 60, 0], y: [0, 80, -40, 0] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      <Player autoplay loop animationData={butterflyData} lottieRef={butterflyRef2} style={{ width: '100%', height: '100%' }} />
    </motion.div>
    <motion.div
      className="absolute"
      style={{ left: '40%', top: '10%', width: 80, height: 80, zIndex: 53, pointerEvents: 'none' }}
      animate={{ x: [0, 60, -80, 0], y: [0, 100, -60, 0] }}
      transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      <Player autoplay loop animationData={butterflyData} lottieRef={butterflyRef3} style={{ width: '100%', height: '100%' }} />
    </motion.div>
  </>
);

export default Butterflies; 