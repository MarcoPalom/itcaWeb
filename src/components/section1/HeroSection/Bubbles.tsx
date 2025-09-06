import React from "react";
import { motion } from "framer-motion";

type BubblesProps = Record<string, never>

const Bubbles: React.FC<BubblesProps> = () => (
  <>
    {/* Burbuja 1 */}
    <motion.div
      className="absolute"
      style={{
        left: '10%',
        top: '22%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.7) 20%, rgba(255,230,180,0.45) 60%, rgba(255,255,255,0.18) 100%)',
        border: '5px solid rgba(255,255,255,0.55)',
        boxShadow: '0 0 80px 20px rgba(255,255,255,0.25), 0 0 0 8px rgba(255,255,255,0.12) inset',
        filter: 'blur(2px) brightness(1.25)',
        opacity: 0.95,
        zIndex: 51
      }}
      animate={{ y: [0, -120, 60, 0], x: [0, 80, -40, 0] }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      <div style={{
        position: 'absolute',
        left: '25%',
        top: '18%',
        width: '38%',
        height: '28%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.05) 100%)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 52
      }} />
    </motion.div>
    {/* Burbuja 2 */}
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '65%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.7) 20%, rgba(255,230,180,0.45) 60%, rgba(255,255,255,0.18) 100%)',
        border: '5px solid rgba(255,255,255,0.55)',
        boxShadow: '0 0 80px 20px rgba(255,255,255,0.25), 0 0 0 8px rgba(255,255,255,0.12) inset',
        filter: 'blur(2px) brightness(1.25)',
        opacity: 0.95,
        zIndex: 51
      }}
      animate={{ y: [0, 140, -80, 0], x: [0, -120, 60, 0] }}
      transition={{ duration: 13, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      <div style={{
        position: 'absolute',
        left: '25%',
        top: '18%',
        width: '38%',
        height: '28%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.05) 100%)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 52
      }} />
    </motion.div>
    {/* Burbuja 3 */}
    <motion.div
      className="absolute"
      style={{
        left: '78%',
        top: '15%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.7) 20%, rgba(255,230,180,0.45) 60%, rgba(255,255,255,0.18) 100%)',
        border: '5px solid rgba(255,255,255,0.55)',
        boxShadow: '0 0 80px 20px rgba(255,255,255,0.25), 0 0 0 8px rgba(255,255,255,0.12) inset',
        filter: 'blur(2px) brightness(1.25)',
        opacity: 0.95,
        zIndex: 51
      }}
      animate={{ y: [0, -160, 100, 0], x: [0, 100, -80, 0] }}
      transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      <div style={{
        position: 'absolute',
        left: '25%',
        top: '18%',
        width: '38%',
        height: '28%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.05) 100%)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 52
      }} />
    </motion.div>
  </>
);

export default Bubbles; 