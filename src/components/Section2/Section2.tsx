import type React from "react"
import { HeroTitle, HeroImage } from "./"
import { stockImages, stockTitles, imageVariants } from "@/constants"
import useAnimatedImageCarousel from "@/hooks/useAnimatedImageCarousel"
import { useRouter } from "next/navigation"

const Section2: React.FC = () => {
  const {
    sectionRef: section2Ref,
    imageIndex,
    pushDirection,
  } = useAnimatedImageCarousel({ imagesLength: stockImages.length })
  const router = useRouter()

  return (
    <div className="relative" style={{ height: `${stockImages.length * 100}vh` }}>
      <section
        ref={section2Ref}
        className="w-full h-screen flex flex-col justify-between sticky top-0 overflow-hidden"
        style={{
          scrollSnapAlign: "start",
          background: "linear-gradient(135deg, #fbf7ee 0%, #f5f1e8 100%)",
          transition: "all 0.6s ease-out",
          zIndex: 2,
        }}
      >
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-amber-200 blur-3xl"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-orange-200 blur-2xl"></div>
        </div>

        {/* Contenedor de imagen con indicadores */}
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "55vw",
            height: "65vh",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {/* Fondo animado */}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <HeroImage
              src={stockImages[imageIndex]}
              alt={`Cultural fondo ${imageIndex + 1}`}
              imageIndex={imageIndex}
              pushDirection={pushDirection}
              imageVariants={imageVariants}
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/20"></div>
          </div>

          {/* Indicadores de navegación verticales al lado derecho de la imagen */}
          <div
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex flex-col gap-3"
            style={{ pointerEvents: "auto" }}
          >
            {stockImages.map((_, idx) => (
              <div
                key={idx}
                className="relative w-1 h-12 rounded-full overflow-hidden bg-neutral-300 cursor-pointer hover:bg-neutral-400 transition-colors duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
                  style={{
                    height: idx === imageIndex ? "100%" : "0%",
                    opacity: idx === imageIndex ? 1 : 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Header mejorado */}
        <header className="w-full flex justify-between items-start px-12 pt-8 relative z-10">
          <div className="flex flex-col gap-2 text-left leading-tight">
            <span className="text-xs font-medium tracking-[0.25em] text-neutral-500 uppercase">AGENDA</span>
            <span
              className="text-3xl font-black text-neutral-900 tracking-tight"
              style={{
                position: "relative",
                zIndex: 2,
                background: "transparent",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              CULTURAL
            </span>
            <span className="text-xs font-normal tracking-wide text-neutral-400 uppercase">EVENTOS</span>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-6">
            <span
              className="text-7xl font-black tracking-[0.3em] text-neutral-900 select-none drop-shadow-sm"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.25em",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              ITCA
            </span>
          </div>
        </header>

        {/* Contenido central mejorado */}
        <div className="flex-1 flex flex-col justify-center items-start px-12 relative z-10 max-w-[50%]">
          <div
            style={{
              position: "relative",
              minHeight: "14rem",
              height: "auto",
              marginBottom: "2rem",
              width: "100%",
              overflow: "clip",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <HeroTitle
              title={stockTitles[imageIndex]}
              imageIndex={imageIndex}
              pushDirection={pushDirection}
              imageVariants={imageVariants}
            />
          </div>

          {/* CTA mejorado */}
          <div className="flex gap-8 mb-12 relative">
            <button
              className="group flex items-center gap-3 text-xl font-bold text-neutral-800 uppercase tracking-wide hover:text-neutral-900 transition-all duration-300 border-b-2 border-transparent hover:border-neutral-900 pb-2"
              onClick={() => router.push('/agenda')}
            >
              <span className="relative">
                [ VER TODO ]
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded"></span>
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer simplificado sin la N */}
        <footer className="w-full flex justify-between items-end px-12 pb-8 text-neutral-600 relative z-10">
          <span className="text-xl font-bold">
            {`${String(new Date().getDate()).padStart(2, "0")}/${String(new Date().getMonth() + 1).padStart(2, "0")}`}
          </span>
          <span className="text-lg tracking-[0.2em] font-medium opacity-80">ITCA</span>
        </footer>
      </section>
    </div>
  )
}

export default Section2
