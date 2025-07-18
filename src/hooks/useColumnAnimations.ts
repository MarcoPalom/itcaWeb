import { useAnimation, AnimationControls } from "framer-motion";
import { useEffect } from "react";

const useColumnAnimations = (split: boolean, expanded: boolean) => {
  const leftControls = useAnimation();
  const centerControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (split && !expanded) {
      leftControls.start({ x: "-120%", transition: { type: "spring", stiffness: 60, damping: 16 } });
      centerControls.start({ left: "33.3333%", width: "33.3333%", opacity: 1, transition: { type: "spring", stiffness: 60, damping: 16 } });
      rightControls.start({ x: "120%", transition: { type: "spring", stiffness: 60, damping: 16 } });
    }
    if (split && expanded) {
      leftControls.start({ x: "-200%", transition: { type: "spring", stiffness: 60, damping: 16 } });
      rightControls.start({ x: "200%", transition: { type: "spring", stiffness: 60, damping: 16 } });
      centerControls.start({ left: "33.3333%", width: "33.3333%", opacity: 1, transition: { type: "spring", stiffness: 60, damping: 16 } });
    }
    if (!split) {
      leftControls.start({ x: 0, transition: { type: "spring", stiffness: 60, damping: 16 } });
      rightControls.start({ x: 0, transition: { type: "spring", stiffness: 60, damping: 16 } });
      centerControls.start({ left: "33.3333%", width: "33.3333%", opacity: 1, transition: { type: "spring", stiffness: 60, damping: 16 } });
    }
  }, [split, expanded, leftControls, centerControls, rightControls]);

  return { leftControls, centerControls, rightControls };
};

export default useColumnAnimations; 