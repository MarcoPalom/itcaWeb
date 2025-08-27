"use client"
import { Search, ArrowLeft, Signal, Wifi, Battery, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { internationalArtists } from "@/constants/internationalArtistData"

export default function Fastival() {
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
         <div className="min-h-screen bg-black text-white w-full">
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
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4 md:px-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input
             type="text"
             placeholder="Find band, artist, genre..."
             className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-lg md:text-base w-full px-3 py-2 border rounded-lg"
           />
        </div>
      </div>

      {/* Artists Sections */}
      <div className="px-4 space-y-6 md:px-6 md:space-y-8">
        {/* Artistas Internacionales - Carrusel con Animaciones */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 md:text-xl md:mb-6">Artistas Internacionales</h2>
          
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
                         className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl h-full relative"
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
                         <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm p-1">
                           <h3 className="font-semibold text-white text-sm">{artist.name}</h3>
                           <p className="text-gray-300 text-xs">{artist.category}</p>
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
            <h2 className="text-lg font-semibold text-white md:text-xl">Artistas Nacionales</h2>
            <Link href="/artists/nacional" className="text-yellow-500 text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
            <div className="flex-shrink-0 w-40 md:w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
                <img
                  src="/mexican-national-artist-performing-traditional-mus.png"
                  alt="Artist"
                  className="w-full h-32 object-cover md:h-40"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm mb-1 text-white md:text-base">lorem ipsum</h3>
                  <p className="text-xs text-gray-400 md:text-sm">Parc del Fòrum, Barcelona</p>
                  <p className="text-xs text-gray-400 md:text-sm">22/09/2022</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40 md:w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
                <img
                  src="/mexican-folk-dancers-performing-in-colorful-costum.png"
                  alt="Artist"
                  className="w-full h-32 object-cover md:h-40"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm mb-1 text-white md:text-base">lorem ipsum</h3>
                  <p className="text-xs text-gray-400 md:text-sm">Palau Sant Jordi, Barcelona...</p>
                  <p className="text-xs text-gray-400 md:text-sm">03/10/2022</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40 md:w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
                <img
                  src="/tamaulipas-regional-artist-performing-traditional-.png"
                  alt="Artist"
                  className="w-full h-32 object-cover md:h-40"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm mb-1 text-white md:text-base">lorem ip</h3>
                  <p className="text-xs text-gray-400 md:text-sm">Palau San</p>
                  <p className="text-xs text-gray-400 md:text-sm">02/02/20</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artistas Tamaulipecos */}
        <section className="pb-6 md:pb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg font-semibold text-white md:text-xl">Artistas Tamaulipecos</h2>
            <Link href="/artists/tamaulipecos" className="text-yellow-500 text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
              <img
                src="/tamaulipas-regional-artist-performing-traditional-.png"
                alt="Artist"
                className="w-full h-24 object-cover md:h-32"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-medium text-sm mb-1 text-white md:text-base">Lorem Ipsum</h3>
                <p className="text-xs text-gray-400 md:text-sm">Parc del Fòrum, Barcelona</p>
                <p className="text-xs text-gray-400 md:text-sm">22/09/2022</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
              <img
                src="/tamaulipas-traditional-music-group-with-regional-i.png"
                alt="Artist"
                className="w-full h-24 object-cover md:h-32"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-medium text-sm mb-1 text-white md:text-base">Lorem Ipsum</h3>
                <p className="text-xs text-gray-400 md:text-sm">Palau Sant Jordi, Barcelona</p>
                <p className="text-xs text-gray-400 md:text-sm">03/09/2022</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
