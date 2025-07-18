import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseAnimatedImageCarouselProps {
  imagesLength: number;
}

export default function useAnimatedImageCarousel({ imagesLength }: UseAnimatedImageCarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [pushDirection, setPushDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const sectionStartY = useRef(0);
  const isTransitioning = useRef(false);

  const { ref: sectionRef, inView, entry } = useInView({
    threshold: 0.5,
    rootMargin: '-1px 0px -1px 0px',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!entry?.target) return;

      const currentScrollY = window.scrollY;
      const sectionRect = entry.target.getBoundingClientRect();
      
      if (inView && sectionStartY.current === 0) {
        sectionStartY.current = currentScrollY + sectionRect.top;
      }

      let scrollPosition;
      if (inView) {
        scrollPosition = currentScrollY - sectionStartY.current;
      } else {
        scrollPosition = currentScrollY - (sectionRect.top + window.scrollY);
      }

      const sectionHeight = entry.target.clientHeight;
      const firstThird = sectionHeight / 3;
      const secondThird = (sectionHeight * 2) / 3;

      let newIndex = 0;
      if (scrollPosition > secondThird) {
        newIndex = 2;
      } else if (scrollPosition > firstThird) {
        newIndex = 1;
      }

      if (newIndex !== imageIndex) {
        const newDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
        setPushDirection(newDirection);
        setImageIndex(newIndex);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageIndex, imagesLength, inView, entry]);

  return {
    sectionRef,
    imageIndex,
    pushDirection,
    isInView: inView
  };
} 