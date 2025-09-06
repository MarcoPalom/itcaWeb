"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Bubbles, Butterflies, HeroTextLeft, HeroTextRight, HeroBackground, HeroCenterColumn, HeroColumnsLayout } from './section1/HeroSection';
import useWindowSize from '../hooks/useWindowSize';
import useHeroScroll from '../hooks/useHeroScroll';
import useJellyEffect from '../hooks/useJellyEffect';
import usePanoramicPan from '../hooks/usePanoramicPan';
import useColumnAnimations from '../hooks/useColumnAnimations';
import useButterflySpeed from '../hooks/useButterflySpeed';
import {
  getInitialCenterWidth,
  getInitialCenterHeight,
  getCenterWidth,
  getCenterHeight,
  getLeftRightY,
  getCircleProgress
} from '../utils/layout';
import { ZOOM, PAN_RANGE, IMAGE } from './section1/HeroSection/heroConfig';
import { Section2 } from './Section2';
import Section3 from './Section3/Section3';
import FestivalInspiration from "./Section4/FestivalInspiration"


type MainPageProps = Record<string, never>

const MainPage: React.FC<MainPageProps> = () => {
  // Hero scroll y refs principales
  const {
    mainRef,
    split,
    expanded,
    scrollProgress,
  } = useHeroScroll();

  // Tamaño de ventana y layout
  const windowSize = useWindowSize();
  const initialCenterWidth = getInitialCenterWidth(windowSize.width);
  const initialCenterHeight = getInitialCenterHeight(windowSize.height);
  const centerWidth = getCenterWidth(scrollProgress, initialCenterWidth, windowSize.width);
  const centerHeight = getCenterHeight(scrollProgress, initialCenterHeight, windowSize.height);

  // Animaciones de columnas
  const { leftControls, rightControls } = useColumnAnimations(split, expanded);

  // Panorámico interactivo
  const controls = useAnimation();
  const { pan, handleMouseMove, handleMouseLeave } = usePanoramicPan(controls, split, ZOOM, PAN_RANGE, mainRef);

  // Jelly effect
  const jellyControls = useAnimation();
  useJellyEffect(mainRef, jellyControls);

  // Refs y velocidad de mariposas
  const butterflyRef1 = useRef<HTMLDivElement>(null);
  const butterflyRef2 = useRef<HTMLDivElement>(null);
  const butterflyRef3 = useRef<HTMLDivElement>(null);
  useButterflySpeed(butterflyRef1, butterflyRef2, butterflyRef3);

  // Otros cálculos
  const [maxY, setMaxY] = useState(0);
  useEffect(() => {
    const updateMaxY = () => {
      setMaxY(window.innerHeight);
    };
    updateMaxY();
    window.addEventListener("resize", updateMaxY);
    return () => window.removeEventListener("resize", updateMaxY);
  }, []);
  const leftRightY = getLeftRightY(scrollProgress, maxY);
  const circleProgress = getCircleProgress(scrollProgress);

  // Añadir estado para controlar la visibilidad del TopNav

  // Efecto para controlar la visibilidad del TopNav

  // Render de la landing con 5 secciones
  return (
    <div className="w-full">

      {/* Sección 1: Hero animado completo */}
      <section
        ref={mainRef}
        className="relative w-full min-h-[200vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ 
          scrollSnapAlign: "start",
          background: circleProgress >= 1 ? '#fbf7ee' : undefined
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Esferas flotantes y mariposas animadas */}
        <motion.div className="pointer-events-none absolute inset-0" style={{ zIndex: 50 }}>
          <Bubbles />
          <Butterflies butterflyRef1={butterflyRef1} butterflyRef2={butterflyRef2} butterflyRef3={butterflyRef3} />
        </motion.div>
        <div className="w-full h-screen flex items-center justify-center mx-auto relative">
          <motion.div
            className="absolute inset-0"
            animate={jellyControls}
            initial={{ scaleY: 1 }}
            style={{ originY: 0.5, width: "100%", height: "100%", zIndex: 0 }}
          />
          {/* Fondo panorámico interactivo (antes del split) */}
          <HeroBackground IMAGE={IMAGE} controls={controls} ZOOM={ZOOM} pan={pan} split={split} />
          {/* Fondo dividido en 3 columnas al hacer scroll (sin animación de salida) */}
          {split && (
            <>
              {/* Columna central fija y centrada */}
              <HeroCenterColumn
                centerWidth={centerWidth}
                centerHeight={centerHeight}
                scrollProgress={scrollProgress}
                windowSize={windowSize}
                pan={pan}
                IMAGE={IMAGE}
                circleProgress={circleProgress}
                initialCenterWidth={initialCenterWidth}
                initialCenterHeight={initialCenterHeight}
              />
              <HeroColumnsLayout
                leftControls={leftControls}
                rightControls={rightControls}
                IMAGE={IMAGE}
                pan={pan}
                leftRightY={leftRightY}
              />
            </>
          )}
          {/* Texto fijo en la esquina inferior izquierda (titulo y subtitulo) */}
          <HeroTextLeft scrollProgress={scrollProgress} />
          {/* Texto y botón fijo en la esquina inferior derecha */}
          <HeroTextRight scrollProgress={scrollProgress} />
        </div>
        {/* Div adicional para completar los 200vh */}
        <div 
          className="w-full h-screen flex items-center justify-center"
          style={{ background: (centerWidth >= windowSize.width && centerHeight >= windowSize.height) ? '#fbf7ee' : '#171717' }}
        ></div>
      </section>
      {/* Sección 2 */}
      <Section2 />
      {/* Sección 3: Ejes de acción */}
      <div style={{position: 'relative'}}>
      <Section3 />
      </div>
      {/* Sección 4 */}
      <section className="min-h-screen w-full p-0 m-0" style={{ scrollSnapAlign: "start" }}>
        <FestivalInspiration />
      </section>
      {/* Sección 5 */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-900 text-white text-3xl" style={{ scrollSnapAlign: "start" }}>
        <div>Sección 5 (contenido futuro)</div>
      </section>
    </div>
  );
};

export default MainPage; 