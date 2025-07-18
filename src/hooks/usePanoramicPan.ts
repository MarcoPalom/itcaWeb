import { useState } from "react";
import { AnimationControls } from "framer-motion";

interface Pan {
  x: number;
  y: number;
}

const usePanoramicPan = (
  controls: AnimationControls,
  split: boolean,
  ZOOM: number,
  PAN_RANGE: number,
  mainRef: React.RefObject<HTMLDivElement | null>
) => {
  const [pan, setPan] = useState<Pan>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = mainRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    const normX = (x / w) * 2 - 1;
    const normY = (y / h) * 2 - 1;
    const translateX = -normX * PAN_RANGE;
    const translateY = -normY * PAN_RANGE;
    setPan({ x: translateX, y: translateY });
    if (!split) {
      controls.start({
        scale: ZOOM,
        x: translateX,
        y: translateY,
        transition: { type: "spring", stiffness: 80, damping: 18 }
      });
    }
  };

  const handleMouseLeave = () => {
    setPan({ x: 0, y: 0 });
    if (!split) {
      controls.start({ scale: ZOOM, x: 0, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } });
    }
  };

  return { pan, handleMouseMove, handleMouseLeave };
};

export default usePanoramicPan; 