import { useEffect, useRef } from 'react';
import { useScrollLock } from './ScrollLockContext';

export default function useJellyScroll() {
  const targetScroll = useRef(0);
  const isAnimating = useRef(false);
  const { lockScroll } = useScrollLock();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (lockScroll) return; // Si está bloqueado, no animar el scroll global
      e.preventDefault();
      const delta = e.deltaY;
      // Limita el delta para evitar saltos grandes
      const limitedDelta = Math.max(-100, Math.min(100, delta));
      targetScroll.current = Math.max(0, Math.min(
        document.body.scrollHeight - window.innerHeight,
        targetScroll.current + limitedDelta
      ));
      if (!isAnimating.current) {
        animateScroll();
      }
    };

    const animateScroll = () => {
      isAnimating.current = true;
      const current = window.scrollY;
      const target = targetScroll.current;
      const distance = target - current;
      // Spring/jelly: velocidad proporcional y rebote sutil
      const velocity = distance * 0.12; // 0.12 = sutil, sube para más rebote
      if (Math.abs(distance) > 0.5) {
        window.scrollTo(0, current + velocity);
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, target);
        isAnimating.current = false;
      }
    };

    // Inicializa el targetScroll en la posición actual
    targetScroll.current = window.scrollY;
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [lockScroll]);
} 