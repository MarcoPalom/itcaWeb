"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface BrokenScreenEffectProps {
  width?: number
  height?: number
  sectionRef: React.RefObject<HTMLElement>
  trapOffset?: number
}

export default function BrokenScreenEffect({
  width = 260,
  height = 260,
  sectionRef,
  trapOffset = 250,
}: BrokenScreenEffectProps) {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])
  const [isTrapped, setIsTrapped] = useState<null | "top" | "bottom">(null)

  useEffect(() => {
    // Generar estrellas aleatorias
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 80; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.9 + 0.1,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight

      if (rect.top >= trapOffset) {
        setIsTrapped("top")
      } else if (rect.bottom <= vh - trapOffset) {
        setIsTrapped("bottom")
      } else {
        setIsTrapped(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [sectionRef, trapOffset])

  // Determinar el estilo basado en el estado de trap
  let containerStyle: React.CSSProperties
  if (isTrapped === "top") {
    containerStyle = {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
      pointerEvents: "none",
    }
  } else if (isTrapped === "bottom") {
    containerStyle = {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
      pointerEvents: "none",
    }
  } else {
    containerStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      pointerEvents: "none",
    }
  }

  return (
    <div style={containerStyle}>
      {/* Fondo negro estrellado */}
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: "#000000",
        }}
      >
        {/* Estrellas */}
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Luna pequeña */}
        <div
          className="absolute bg-gray-100 rounded-full opacity-90"
          style={{
            width: "20px",
            height: "20px",
            top: "25%",
            right: "30%",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)",
          }}
        />

      
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
