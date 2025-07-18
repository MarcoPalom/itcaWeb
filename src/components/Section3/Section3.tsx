"use client"
import Panel from "./Panel"
import PanelInverted from "./Panel-inverted"
import Image from "next/image"
import { panels, cerroImages } from "@/constants"
import { useEffect, useState, useRef } from "react"

export default function Section3MaskEffectSyncedScroll() {
  const [imgIdx, setImgIdx] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [sectionOffset, setSectionOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const invertedSectionRef = useRef<HTMLDivElement>(null)
  const [selectedItems, setSelectedItems] = useState<(number | null)[]>(Array(panels.length).fill(null));
  const [hoveredItems, setHoveredItems] = useState<(number | null)[]>(Array(panels.length).fill(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % cerroImages.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  // Calcular offset de la sección dinámicamente
  useEffect(() => {
    const calculateOffset = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const currentOffset = window.scrollY + rect.top
        setSectionOffset(currentOffset)
      }
    }

    calculateOffset()
    window.addEventListener("resize", calculateOffset)
    const timeout = setTimeout(calculateOffset, 100)

    return () => {
      window.removeEventListener("resize", calculateOffset)
      clearTimeout(timeout)
    }
  }, [])

  // Sincronizar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full min-h-screen">
      {/* Video fijo, centrado y con z-[1000] */}
      <div
        className="fixed top-1/2 left-1/2 z-[1000] pointer-events-none"
        style={{
          width: "82vmin",
          height: "82vmin",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/*<VideoTrap sectionRef={invertedSectionRef as React.RefObject<HTMLElement>} src="/logoanim.mp4" />*/}
      </div>

      <div ref={sectionRef} className="min-h-screen bg-[#F5F1E8] text-black relative">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-8">
            <div className="flex space-x-2">
              <span className="text-lg">♦</span>
              <span className="text-lg">♦</span>
              <span className="text-lg">♦</span>
            </div>
            <span className="text-sm font-medium tracking-wider">ITCA</span>
          </div>

          <div className="flex items-center space-x-8">
            <span className="text-lg">♦</span>
            <span className="text-lg">♦</span>
            <span className="text-lg">♦</span>
            <span className="text-sm font-medium tracking-wider">ITCA-CULTURA</span>
            <div className="flex space-x-2">
              <span className="text-lg">♦</span>
              <span className="text-lg">♦</span>
              <span className="text-lg">♦</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-8 py-16">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-[120px] font-black leading-none tracking-tight mb-8">
                EJES DE
                <br />
                ACCION
              </h1>

              <div className="relative w-100 h-52 mb-8 overflow-hidden">
                <Image
                  src={cerroImages[imgIdx] || "/placeholder.svg"}
                  alt={`Cerro pixel ${imgIdx + 1}`}
                  fill
                  className="object-cover rounded"
                  priority
                />
                <button className="absolute top-2 left-2 w-6 h-6 bg-white/80 rounded flex items-center justify-center text-xs">
                  ⏸
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 text-right space-y-2 mt-16">
              <div className="flex items-center justify-end space-x-4">
                <span className="text-sm font-medium">DESARROLLO Y DIFUSIÓN CULTURAL</span>
                <span className="text-sm text-gray-600">01</span>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <span className="text-sm font-medium">EDUCACIÓM Y DESARROLLO ARTISTICO</span>
                <span className="text-sm text-gray-600">02</span>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <span className="text-sm font-medium">PATRIMONIO CULTURAL E HISTORICO</span>
                <span className="text-sm text-gray-600">03</span>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <span className="text-sm font-medium">PUBLICACIONES Y FOMENTO LITERARIO</span>
                <span className="text-sm text-gray-600">04</span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed">
              <span className="font-medium">
                Acciones que construyen y proyectan la identidad artística y patrimonial del estado
              </span>
              <span className="text-gray-600"> Fundamentos para el desarrollo cultural de Tamaulipas</span>
            </p>
          </div>
        </main>

        {panels.map((panel, idx) => (
          <Panel
            key={idx}
            {...panel}
            panelIndex={idx}
            selected={selectedItems[idx]}
            setSelected={val => {
              setSelectedItems(items => {
                const copy = [...items];
                copy[idx] = val;
                return copy;
              });
            }}
            hovered={hoveredItems[idx]}
            setHovered={val => {
              setHoveredItems(items => {
                const copy = [...items];
                copy[idx] = val;
                return copy;
              });
            }}
          />
        ))}
      </div>

      {/* Capa superior - Contenido invertido FIJO con scroll sincronizado */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          clipPath: "circle(40vmin at 50% 50%)",
        }}
      >
        <div
          ref={invertedSectionRef}
          className=" bg-black text-white pointer-events-none relative"
          style={{
            width: "100vw",
            minHeight: "100vh",
            transform: `translateY(${sectionOffset - scrollY}px)`,
          }}
        >

          <header className="flex items-center justify-between px-8 py-6 relative z-[2000]">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-2">
                <span className="text-lg">♦</span>
                <span className="text-lg">♦</span>
                <span className="text-lg">♦</span>
              </div>
              <span className="text-sm font-medium tracking-wider">ITCA</span>
            </div>

            <div className="flex items-center space-x-8">
              <span className="text-lg">♦</span>
              <span className="text-lg">♦</span>
              <span className="text-lg">♦</span>
              <span className="text-sm font-medium tracking-wider">ITCA-CULTURA</span>
              <div className="flex space-x-2">
                <span className="text-lg">♦</span>
                <span className="text-lg">♦</span>
                <span className="text-lg">♦</span>
              </div>
            </div>
          </header>

          <main className="px-8 py-16 relative z-[2000]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-[120px] font-black leading-none tracking-tight mb-8">
                  EJES DE
                  <br />
                  ACCION
                </h1>

                <div className="relative w-100 h-52 mb-8 overflow-hidden">
                <Image
                  src={cerroImages[imgIdx] || "/placeholder.svg"}
                  alt={`Cerro pixel ${imgIdx + 1}`}
                  fill
                  className="object-cover rounded"
                  priority
                />
                <button className="absolute top-2 left-2 w-6 h-6 bg-white/80 rounded flex items-center justify-center text-xs">
                  ⏸
                </button>
              </div>
              </div>

              <div className="flex-shrink-0 text-right space-y-2 mt-16">
                <div className="flex items-center justify-end space-x-4">
                  <span className="text-sm font-medium">DESARROLLO Y DIFUSIÓN CULTURAL</span>
                  <span className="text-sm text-gray-400">01</span>
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <span className="text-sm font-medium">EDUCACIÓM Y DESARROLLO ARTISTICO</span>
                  <span className="text-sm text-gray-400">02</span>
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <span className="text-sm font-medium">PATRIMONIO CULTURAL E HISTORICO</span>
                  <span className="text-sm text-gray-400">03</span>
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <span className="text-sm font-medium">PUBLICACIONES Y FOMENTO LITERARIO</span>
                  <span className="text-sm text-gray-400">04</span>
                </div>
              </div>
            </div>


            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed">
                <span className="font-medium">
                  Acciones que construyen y proyectan la identidad artística y patrimonial del estado
                </span>
                <span className="text-gray-400"> Fundamentos para el desarrollo cultural de Tamaulipas</span>
              </p>
            </div>
          </main>

          <div className="relative z-[2000]">
            {panels.map((panel, idx) => (
              <PanelInverted
                key={idx}
                {...panel}
                panelIndex={idx}
                selected={selectedItems[idx]}
                setSelected={val => {
                  setSelectedItems(items => {
                    const copy = [...items];
                    copy[idx] = val;
                    return copy;
                  });
                }}
                hovered={hoveredItems[idx]}
                setHovered={val => {
                  setHoveredItems(items => {
                    const copy = [...items];
                    copy[idx] = val;
                    return copy;
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
