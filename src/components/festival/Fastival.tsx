"use client"
import { ArrowLeft, Signal, Wifi, Battery, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { internationalArtists } from "@/constants/internationalArtistData"
import { nationalArtists } from "@/constants/nationalArtistData"
import { tamaulipecosArtists } from "@/constants/tamaulipecosArtistData"
import FestivalBackground from "./FestivalBackground"
import ThemeToggle from "../ThemeToggle"
import { useTheme } from "@/contexts/ThemeContext"
import { victoriaFestivalInfo } from "@/constants/Municipios/victoriaData"
import { matamorosFestivalInfo } from "@/constants/Municipios/matamorosData"
import { tampicoFestivalInfo } from "@/constants/Municipios/tampicoData"
import { reynosaFestivalInfo } from "@/constants/Municipios/reynosaData"
import { nuevoLaredoFestivalInfo } from "@/constants/Municipios/nvData"

export default function Fastival() {
  const { isDark } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Mapeo de imágenes para cada artista
  const artistImages: { [key: string]: string } = {
    "Bianca Marroquín": "/images/bianca_marroquin.jpg",
    "Argelia Fragoso": "/images/argelia_fragoso.jpg",
    "Hands Percussion of Malaysia": "/images/hand_percusion.jpg",
    "Charlotte Pescayre": "/images/charlotte.jpeg",
    "Sabor Life is Rhythm": "/images/sabor_life.jpg", 
    "Ballet Nepantla": "/images/ballet_nepantla.jpg",
    "Matías Aguayo": "/images/matias_aguayo.jpg",
    "Del Vali": "/images/del_vali.png",
    "Wero Hernández": "/images/el_wero.jpg"
  }

  // Mapeo de imágenes para artistas nacionales
  const nationalArtistImages: { [key: string]: string } = {
    "María Katzarava": "/images/national_artists/maria_katza.jpg", // Usando imagen similar
    "Centro de Producción de Danza Contemporánea (CEPRODAC)": "/images/national_artists/grupo_tayer.jpg", // Imagen genérica para teatro
    "La Percha Teatro": "/images/national_artists/la_percha.jpg", // Imagen genérica para danza
    "Grupo La Trenza": "/images/national_artists/latrenza.jpg", // Imagen genérica para teatro
    "Grupo Tayer": "/images/national_artists/grupo_tayer.jpg" // Imagen genérica para teatro
  }

  // Mapeo de imágenes para artistas tamaulipecos
  const tamaulipecoArtistImages: { [key: string]: string } = {
    "Polvo Enamorado": "/images/estatal_artists/polvo.jpg",
    "Afrodescendencia Matamoros": "/images/estatal_artists/afro.jpg",
    "DOSCE La Compañía": "/images/estatal_artists/dosce.jpg",
    "En Boca Ensamble": "/images/estatal_artists/ensamble.JPG",
    "Colectivo teatro de bolsillo": "/images/estatal_artists/bolsillo.JPG",
    "Warislov": "/images/estatal_artists/warislov.jpg",
    "Los Valdés Ska": "/images/estatal_artists/valdes.jpg",
    "Kani Ensamble Coral": "/images/estatal_artists/camereta.jpg",
    "Ensamble de Mujeres \"María Bonita\"": "/images/estatal_artists/ensamble.JPG"
  }

  // Seleccionar 5 artistas nacionales al azar
  const selectedNationalArtists = [
    nationalArtists[0],  // María Katzarava
    nationalArtists[1],  // CEPRODAC
    nationalArtists[9],  // la percha teatro
    nationalArtists[3],  // Grupo La Trenza
    nationalArtists[4]   // Grupo Tayer
  ]

  // Seleccionar 5 artistas tamaulipecos específicos
  const selectedTamaulipecoArtists = [
    tamaulipecosArtists.find(a => a.name === "Polvo Enamorado")!,
    tamaulipecosArtists.find(a => a.name === "Afrodescendencia Matamoros")!,
    tamaulipecosArtists.find(a => a.name === "DOSCE La Compañía")!,
    tamaulipecosArtists.find(a => a.name === "En Boca Ensamble")!,
    tamaulipecosArtists.find(a => a.name === "Colectivo teatro de bolsillo")!
  ]

  // Mapeo de información de municipios (4 elementos para que quepa "Ver Todas")
  const municipalFestivals = [
    victoriaFestivalInfo,
    matamorosFestivalInfo,
    tampicoFestivalInfo,
    reynosaFestivalInfo
  ]

  // Mapeo de imágenes para municipios
  const municipalImages: { [key: string]: string } = {
    "Festival del Municipio Victoria": "/images/municipios/victoria.jpeg",
    "Festival del Municipio Matamoros": "/images/municipios/matamoros.jpg", 
    "Festival del Municipio Tampico": "/images/municipios/tampico.jpeg",
    "Festival del Municipio Reynosa": "/images/municipios/reynosa.jpg",
    "Festival del Municipio Nuevo Laredo": "/images/municipios/nuevo-laredo.jpg"
  }

  // Detectar el tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % internationalArtists.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? internationalArtists.length - 1 : prev - 1
    )
  }

  // Cambio automático del carrusel cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <FestivalBackground />
      <div className={`min-h-screen w-full relative z-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>
      {/* Status Bar - Solo visible en móvil */}
      <div className="flex items-center justify-between px-4 py-2 text-xs md:hidden">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium md:text-lg">Bienvenido al FICSM</span>
        </div>
        <div className="flex gap-1 md:hidden">
          <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white' : 'bg-gray-600'}`}></div>
          <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white' : 'bg-gray-600'}`}></div>
          <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white' : 'bg-gray-600'}`}></div>
        </div>
      </div>

      {/* Artists Sections */}
      <div className="px-4 space-y-6 md:px-6 md:space-y-8">
        {/* Artistas Internacionales - Carrusel con Animaciones */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 md:text-xl md:mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>Artistas Internacionales</h2>
          
          {/* Carrusel Container */}
          <div className="relative overflow-hidden">
            {/* Contenido del carrusel con animaciones */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <motion.div
                className="flex gap-4 h-full"
                animate={{ 
                  x: -currentSlide * (isMobile ? 104 : 34.30) + "%"
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut"
                }}
              >
                {/* Duplicar los artistas para crear el efecto infinito */}
                {[...internationalArtists, ...internationalArtists].map((artist, index) => (
                  <motion.div
                    key={`${artist.id}-${index}`}
                    className="flex-shrink-0 w-full md:w-1/3"
                  >
                     <Link href={`/artist/${artist.name.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                       <motion.div 
                         className={`rounded-lg overflow-hidden md:rounded-xl h-full relative ${isDark ? 'bg-gray-800' : 'bg-white/90'}`}
                         whileHover={{ 
                           scale: 1.02,
                           transition: { duration: 0.2 }
                         }}
                       >
                         <img
                           src={artistImages[artist.name] || "/elegant-female-opera-singer-performing-on-stage.png"}
                           alt={artist.name}
                           className="w-full h-full object-cover"
                         />
                         
                         {/* Label en la parte inferior */}
                         <div className={`absolute bottom-0 left-0 right-0 z-10 backdrop-blur-sm p-1 ${isDark ? 'bg-black/70' : 'bg-white/80'}`}>
                           <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{artist.name}</h3>
                           <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{artist.category}</p>
                         </div>
                       </motion.div>
                     </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Artistas Nacionales */}
        <section>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className={`text-lg font-semibold md:text-xl ${isDark ? 'text-white' : 'text-gray-800'}`}>Artistas Nacionales</h2>
            <Link href="/national-artists" className="text-[#864e94] text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-4 md:overflow-visible">
            {selectedNationalArtists.map((artist, index) => (
              <div key={index} className="flex-shrink-0 w-40 md:w-full">
                <Link href={`/artist/${artist.name.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                  <div className={`rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 relative ${isDark ? 'bg-gray-800' : 'bg-white/90'}`}>
                    <img
                      src={nationalArtistImages[artist.name] || "/elegant-female-opera-singer-performing-on-stage.png"}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Label en la parte inferior */}
                    <div className={`absolute bottom-0 left-0 right-0 z-10 backdrop-blur-sm p-1 ${isDark ? 'bg-black/70' : 'bg-white/90'}`}>
                      <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{artist.name}</h3>
                      <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{artist.category}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0 w-40 md:w-full">
              <Link href="/national-artists" className="block h-full">
                <div className="rounded-lg overflow-hidden md:rounded-xl h-full flex flex-col items-center justify-center p-4" style={{ background: 'linear-gradient(to bottom, #864e94, #6a3d7a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #7a457a, #5d3568)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #864e94, #6a3d7a)'}>
                  <div className="text-white text-center">
                    <div className="mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide">Ver Todos</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Artistas Tamaulipecos */}
        <section className="pb-6 md:pb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className={`text-lg font-semibold md:text-xl ${isDark ? 'text-white' : 'text-gray-800'}`}>Artistas Tamaulipecos</h2>
            <Link href="/artists-tamaulipecos" className="text-[#864e94] text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-4 md:overflow-visible">
            {selectedTamaulipecoArtists.map((artist, index) => (
              <div key={index} className="flex-shrink-0 w-40 md:w-full">
                <Link href={`/artist/${artist.name.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                  <div className={`rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 relative ${isDark ? 'bg-gray-800' : 'bg-white/90'}`}>
                    <img
                      src={tamaulipecoArtistImages[artist.name] || "/images/img_0.png"}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Label en la parte inferior */}
                    <div className={`absolute bottom-0 left-0 right-0 z-10 backdrop-blur-sm p-1 ${isDark ? 'bg-black/70' : 'bg-white/90'}`}>
                      <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{artist.name}</h3>
                      <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{artist.category}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0 w-40 md:w-full">
              <Link href="/artists-tamaulipecos" className="block h-full">
                <div className="rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 flex flex-col items-center justify-center p-" style={{ background: 'linear-gradient(to bottom, #864e94, #6a3d7a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #7a457a, #5d3568)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #864e94, #6a3d7a)'}>
                  <div className="text-white text-center">
                    <div className="mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide">Ver Todos</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Carteleras de Municipios */}
        <section className="pb-6 md:pb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className={`text-lg font-semibold md:text-xl ${isDark ? 'text-white' : 'text-gray-800'}`}>Carteleras de Municipios</h2>
            <Link href="/municipal-billboards" className="text-[#864e94] text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
            {municipalFestivals.map((municipality, index) => (
              <div key={index} className="flex-shrink-0 w-40 md:w-full">
                <Link href={`/municipio/${municipality.name.toLowerCase().replace(/\s+/g, '-').replace('festival-del-municipio-', '')}`} className="block h-full">
                  <div className={`rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 relative ${isDark ? 'bg-gray-800' : 'bg-white/90'}`}>
                    <img
                      src={municipalImages[municipality.name] || "/images/municipal-festival-placeholder.jpg"}
                      alt={municipality.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Label en la parte inferior */}
                    <div className={`absolute bottom-0 left-0 right-0 z-10 backdrop-blur-sm p-2 ${isDark ? 'bg-black/70' : 'bg-white/90'}`}>
                      <h3 className={`font-semibold text-sm leading-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>{municipality.name.replace('Festival del Municipio ', '')}</h3>
                      <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{municipality.totalEvents} eventos</p>
                      <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{municipality.startDate} - {municipality.endDate}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0 w-40 md:w-full">
              <Link href="/municipal-billboards" className="block h-full">
                <div className="rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 flex flex-col items-center justify-center p-4" style={{ background: 'linear-gradient(to bottom, #864e94, #6a3d7a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #7a457a, #5d3568)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #864e94, #6a3d7a)'}>
                  <div className="text-white text-center">
                    <div className="mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide">Ver Todas</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      </div>
      
      {/* Theme Toggle Button */}
      <ThemeToggle />
    </>
  )
}
