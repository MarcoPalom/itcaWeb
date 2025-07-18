import { useRef, useState, useEffect, RefObject } from "react";

interface HeroScroll {
  mainRef: RefObject<HTMLDivElement | null>;
  split: boolean;
  setSplit: (v: boolean) => void;
  expanded: boolean;
  setExpanded: (v: boolean) => void;
  fixedCenter: boolean;
  setFixedCenter: (v: boolean) => void;
  scrollProgress: number;
  setScrollProgress: (v: number) => void;
}

const useHeroScroll = (): HeroScroll => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [split, setSplit] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [fixedCenter, setFixedCenter] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = mainRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const start = sectionTop;
      const end = sectionTop + sectionHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
      setScrollProgress(progress);
      if (scrollY >= end && !fixedCenter) {
        setFixedCenter(true);
      } else if (scrollY < start && fixedCenter) {
        setFixedCenter(false);
      }
      if (scrollY > 10 && !split) {
        setSplit(true);
      } else if (scrollY <= 10 && split) {
        setSplit(false);
        setExpanded(false);
      }
      if (scrollY > 200 && split && !expanded) {
        setExpanded(true);
      } else if (scrollY <= 200 && expanded) {
        setExpanded(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [split, expanded, fixedCenter]);

  return {
    mainRef,
    split,
    setSplit,
    expanded,
    setExpanded,
    fixedCenter,
    setFixedCenter,
    scrollProgress,
    setScrollProgress,
  };
};

export default useHeroScroll; 