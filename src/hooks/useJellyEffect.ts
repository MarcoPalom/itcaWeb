import { useEffect } from "react";
import { AnimationControls } from "framer-motion";

const useJellyEffect = (mainRef: React.RefObject<HTMLDivElement | null>, jellyControls: AnimationControls) => {
  useEffect(() => {
    const section = mainRef.current;
    if (!section) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const start = sectionTop;
          const end = sectionTop + sectionHeight - window.innerHeight;
          // Over-scroll arriba
          if (scrollY < start) {
            jellyControls.start({
              scaleY: 1.08,
              transition: { type: "spring", stiffness: 200, damping: 18 }
            }).then(() => {
              jellyControls.start({
                scaleY: 1,
                transition: { type: "spring", stiffness: 200, damping: 18 }
              });
            });
          }
          // Over-scroll abajo
          else if (scrollY > end) {
            jellyControls.start({
              scaleY: 0.92,
              transition: { type: "spring", stiffness: 200, damping: 18 }
            }).then(() => {
              jellyControls.start({
                scaleY: 1,
                transition: { type: "spring", stiffness: 200, damping: 18 }
              });
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mainRef, jellyControls]);
};

export default useJellyEffect; 