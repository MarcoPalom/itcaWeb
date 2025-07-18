"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

export interface PanelProps {
  orientation?: "left" | "right"
  image: string
  badge: string
  items: string[]
  descriptions: string[]
  title?: string
  panelIndex?: number
  defaultDescription?: string
  selected?: number | null
  setSelected?: (idx: number | null) => void
  hovered?: number | null
  setHovered?: (idx: number | null) => void
}

const panelTitles = [
  "Desarrollo y Difusión Cultural",
  "Educación y Desarrollo Artístico",
  "Patrimonio Cultural e Histórico",
  "Publicaciones y Fomento Literario",
]

const ANIMATION_DURATION = 600 

// Componente de estrellas de fondo
const BackgroundStars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const PanelInverted: React.FC<PanelProps> = ({
  orientation = "left",
  image,
  badge,
  items,
  descriptions,
  title,
  panelIndex = 0,
  defaultDescription,
  selected,
  setSelected,
  hovered,
  setHovered,
}) => {
  const isLeft = orientation === "left"
  const { ref, inView, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0, 0.01, ..., 1
    triggerOnce: false,
  })
  const [showTitle, setShowTitle] = useState(inView)
  const [visibility, setVisibility] = useState(1)

  useEffect(() => {
    if (entry) {
      setVisibility(entry.intersectionRatio)
    }
  }, [entry])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (inView) {
      setShowTitle(true)
    } else {
      timeout = setTimeout(() => setShowTitle(false), ANIMATION_DURATION)
    }
    return () => clearTimeout(timeout)
  }, [inView])

  // Efecto glitch para el título
  const glitchVariants = {
    initial: {
      opacity: 0,
      x: isLeft ? -100 : 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }

  const glitchLayer1 = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: [0, -2, 2, -1, 1, 0],
      opacity: [0, 0.8, 0.6, 0.9, 0.7, 0.8],
      transition: {
        delay: 0.3,
        duration: 0.4,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ease: "easeInOut",
      },
    },
    exit: {
      x: [0, -3, 4, -2, 0],
      opacity: [0.8, 0.4, 0.7, 0.2, 0],
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const glitchLayer2 = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: [0, 3, -2, 1, -3, 0],
      opacity: [0, 0.6, 0.8, 0.5, 0.7, 0.6],
      transition: {
        delay: 0.4,
        duration: 0.5,
        times: [0, 0.15, 0.35, 0.55, 0.75, 1],
        ease: "easeInOut",
      },
    },
    exit: {
      x: [0, 2, -4, 1, 0],
      opacity: [0.6, 0.3, 0.6, 0.1, 0],
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
  }

  const glitchLayer3 = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: [0, -1, 4, -2, 1, 0],
      opacity: [0, 0.7, 0.4, 0.8, 0.5, 0.7],
      transition: {
        delay: 0.5,
        duration: 0.3,
        times: [0, 0.25, 0.45, 0.65, 0.85, 1],
        ease: "easeInOut",
      },
    },
    exit: {
      x: [0, -2, 3, -1, 0],
      opacity: [0.7, 0.2, 0.5, 0.1, 0],
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  }

  // Animaciones glitch para los puntos
  const dotMainVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      y: 20,
    },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      y: [20, -8, 0],
      transition: {
        delay: 0.8 + i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    exit: (i: number) => ({
      scale: 0,
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  }

  const dotGlitchLayer1 = {
    initial: {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
    },
    animate: (i: number) => ({
      scale: [0, 1.2, 0.9, 1],
      opacity: [0, 0.7, 0.5, 0.6],
      x: [0, -1, 2, -1, 0],
      y: [0, -2, 1, 0],
      transition: {
        delay: 0.9 + i * 0.12,
        duration: 0.5,
        times: [0, 0.3, 0.7, 1],
        ease: "easeInOut",
      },
    }),
    exit: (i: number) => ({
      scale: 0,
      opacity: 0,
      x: [0, -2, 1, 0],
      y: [0, 1, -1, 0],
      transition: {
        delay: i * 0.06,
        duration: 0.25,
        ease: "easeIn",
      },
    }),
  }

  const dotGlitchLayer2 = {
    initial: {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
    },
    animate: (i: number) => ({
      scale: [0, 0.8, 1.1, 1],
      opacity: [0, 0.5, 0.8, 0.4],
      x: [0, 2, -1, 1, 0],
      y: [0, 1, -2, 0],
      transition: {
        delay: 1.0 + i * 0.12,
        duration: 0.4,
        times: [0, 0.25, 0.6, 1],
        ease: "easeInOut",
      },
    }),
    exit: (i: number) => ({
      scale: 0,
      opacity: 0,
      x: [0, 1, -2, 0],
      y: [0, -1, 2, 0],
      transition: {
        delay: i * 0.04,
        duration: 0.2,
        ease: "easeIn",
      },
    }),
  }

  // Animación de título
  const titleVariants = {
    initial: { x: isLeft ? -80 : 80, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 12 } },
    exit: { x: isLeft ? -80 : 80, opacity: 0, transition: { type: "spring", stiffness: 60, damping: 12 } },
  }

  // Mapea la visibilidad a opacidad de la imagen
  const imageOpacity = visibility > 0.5 ? 1 : Math.max(0, (visibility - 0.2) / 0.3)

  return (
    <div ref={ref} className="w-full min-h-screen bg-black text-white flex flex-col justify-between relative">
      {/* Estrellas de fondo */}
      <BackgroundStars />
      
      {/* Título con efecto glitch - INVERTIDO */}
      <div
        className={`flex items-center justify-${isLeft ? "start" : "end"} w-full px-8 pt-8 mb-2 relative z-10`}
        style={{
          minHeight: "3.5rem",
          visibility: showTitle ? "visible" : "hidden",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      >
        <div className="relative mr-4">
          {/* Capa principal del título */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight relative text-white z-20"
            variants={glitchVariants}
            initial="initial"
            animate={inView ? "animate" : "exit"}
            key={`main-${panelIndex}`}
          >
            {panelTitles[panelIndex]}
          </motion.h2>

          {/* Capas de glitch del título */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight absolute top-0 left-0 text-red-400 mix-blend-screen z-20"
            variants={glitchLayer1}
            initial="initial"
            animate={inView ? "animate" : "exit"}
            key={`glitch1-${panelIndex}`}
          >
            {panelTitles[panelIndex]}
          </motion.h2>

          <motion.h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight absolute top-0 left-0 text-blue-400 mix-blend-screen z-20"
            variants={glitchLayer2}
            initial="initial"
            animate={inView ? "animate" : "exit"}
            key={`glitch2-${panelIndex}`}
          >
            {panelTitles[panelIndex]}
          </motion.h2>

          <motion.h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight absolute top-0 left-0 text-green-400 mix-blend-screen z-20"
            variants={glitchLayer3}
            initial="initial"
            animate={inView ? "animate" : "exit"}
            key={`glitch3-${panelIndex}`}
          >
            {panelTitles[panelIndex]}
          </motion.h2>
        </div>

        {/* Puntos con efecto glitch - INVERTIDOS */}
        <div className="flex space-x-2 relative">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative">
              {/* Punto principal */}
              <motion.span
                className="inline-block w-3 h-3 rounded-full bg-white relative z-20"
                variants={dotMainVariants}
                initial="initial"
                animate={inView ? "animate" : "exit"}
                custom={i}
              />

              {/* Capas de glitch para los puntos */}
              <motion.span
                className="inline-block w-3 h-3 rounded-full bg-red-400 absolute top-0 left-0 mix-blend-screen z-20"
                variants={dotGlitchLayer1}
                initial="initial"
                animate={inView ? "animate" : "exit"}
                custom={i}
              />

              <motion.span
                className="inline-block w-3 h-3 rounded-full bg-blue-400 absolute top-0 left-0 mix-blend-screen z-20"
                variants={dotGlitchLayer2}
                initial="initial"
                animate={inView ? "animate" : "exit"}
                custom={i}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top bar - INVERTIDO */}
      <div className="flex items-start justify-between px-8 pt-6 relative z-10">
        {isLeft ? (
          <span className="bg-white text-black text-xs px-2 py-1 rounded font-mono z-20">ITCA</span>
        ) : (
          <div className="flex space-x-1 text-3xl font-black text-white z-20">
            <span className="inline-block z-20">&#x25A0;</span>
            <span className="inline-block z-20">&#x25A0;</span>
            <span className="inline-block z-20">&#x25A0;</span>
          </div>
        )}
        {isLeft ? (
          <div className="flex space-x-1 text-3xl font-black text-white z-20">
            <span className="inline-block z-20">&#x25A0;</span>
            <span className="inline-block z-20">&#x25A0;</span>
            <span className="inline-block z-20">&#x25A0;</span>
          </div>
        ) : (
          <span className="bg-white text-black text-xs px-2 py-1 rounded font-mono z-20">ITCA</span>
        )}
      </div>

      <div className={`flex flex-1 items-start justify-between px-8 pb-8 ${isLeft ? "" : "flex-row-reverse"} relative z-10`}>
        {/* Imagen pixel art */}
        <div className={`flex flex-col ${isLeft ? "items-start" : "items-end"}`}>
          <motion.div
            className="relative w-72 h-[420px] rounded-lg overflow-hidden mb-4"
            style={{ opacity: imageOpacity, transition: "opacity 0.3s" }}
          >
            <Image src={image || "/placeholder.svg"} alt="Pixel art cerro" fill className="object-cover" priority />
          </motion.div>
          <span className="text-xs font-mono border border-white text-white rounded-full px-2 py-1 mt-2 flex items-center gap-1 z-20">
            {badge}
          </span>
        </div>

        {/* Contenido principal - INVERTIDO */}
        <div className={`flex flex-col items-start justify-center flex-1 ${isLeft ? "ml-16" : "mr-16"} mt-8`}>
          <h2 className="text-m font-medium mb-42 min-h-[4em] text-white z-20">{selected === null || selected === undefined ? (defaultDescription || "Selecciona un programa para ver la descripción.") : descriptions[selected]}</h2>
          <div className="bg-yellow-300 text-black text-base font-mono font-medium px-1 py-1 rounded mb-8 mt-8 transition-all border border-white z-20">
            PROGRAMAS
          </div>
          <ul className="text-2xl font-medium space-y-2 text-white z-20 select-text">
            {items.map((item, idx) => {
              return (
                <motion.li
                  key={item}
                  className="flex items-center z-20"
                  whileHover={{
                    x: 24,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 400, damping: 12 },
                  }}
                >
                  <span className="inline-block mr-2" style={{ width: "1em" }}>
                    <AnimatePresence mode="wait">
                      {hovered === idx && (
                        <motion.span
                          key={`diamond-${idx}`}
                          initial={{ opacity: 0, y: 10, scale: 0.7 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.7 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="z-20 text-orange-400"
                          style={{ display: "inline-block" }}
                        >
                          ♦
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  <motion.span
                    className={`z-20 select-text ${hovered === idx ? 'text-orange-400' : 'text-white'}`}
                    animate={hovered === idx ? { x: "2.5rem", scale: 1.04 } : { x: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Línea divisoria fina y redondeada - INVERTIDA */}
      <div className="w-11/12 mx-auto my-4 h-1 rounded-full bg-neutral-600 relative z-10" />
    </div>
  )
}

export default PanelInverted
