"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { internationalArtists } from "@/constants/internationalArtistData"
import { nationalArtists } from "@/constants/nationalArtistData"
import { tamaulipecosArtists } from "@/constants/tamaulipecosArtistData"
import FestivalBackground from "./FestivalBackground"
import FestivalHeroCard from "./FestivalHeroCard"
import { useTheme } from "@/contexts/ThemeContext"
import { victoriaFestivalInfo } from "@/constants/Municipios/victoriaData"
import { matamorosFestivalInfo } from "@/constants/Municipios/matamorosData"
import { tampicoFestivalInfo } from "@/constants/Municipios/tampicoData"
import { reynosaFestivalInfo } from "@/constants/Municipios/reynosaData"
import { getMunicipalImage } from "@/constants/municipalImages"
import { 
  internationalArtistImages, 
  nationalArtistImages, 
  tamaulipecosArtistImages 
} from "@/constants/artistImages"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Fastival() {
  const { isDark } = useTheme()

  const selectedNationalArtists = [
    nationalArtists[0],
    nationalArtists[1],
    nationalArtists[9],
    nationalArtists[3],
    nationalArtists[4]
  ]

  const selectedTamaulipecoArtists = [
    tamaulipecosArtists.find(a => a.name === "Polvo Enamorado")!,
    tamaulipecosArtists.find(a => a.name === "Afrodescendencia Matamoros")!,
    tamaulipecosArtists.find(a => a.name === "DOSCE La Compañía")!,
    tamaulipecosArtists.find(a => a.name === "En Boca Ensamble")!,
    tamaulipecosArtists.find(a => a.name === "Colectivo teatro de bolsillo")!
  ]

  const municipalFestivals = [
    victoriaFestivalInfo,
    matamorosFestivalInfo,
    tampicoFestivalInfo,
    reynosaFestivalInfo
  ]




  return (
    <>
      <FestivalBackground />
      <div className={`min-h-screen w-full relative z-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>

      <div className="p-4 space-y-6 md:px-6 md:space-y-8">
        <FestivalHeroCard />

        <section>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className={`text-lg font-semibold md:text-xl ${isDark ? 'text-white' : 'text-gray-800'}`}>Artistas Internacionales</h2>
            <Link href="/international-artists" className="text-[#864e94] text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {internationalArtists.map((artist) => (
                <CarouselItem key={artist.id} className="pl-2 md:pl-4 md:basis-1/3">
                  <Link href={`/artist/${artist.name.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                    <motion.div 
                      className={`rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 relative ${isDark ? 'bg-gray-800' : 'bg-white/90'}`}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <img
                        src={internationalArtistImages[artist.name] || "/elegant-female-opera-singer-performing-on-stage.png"}
                        alt={artist.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      <div className={`absolute bottom-0 left-0 right-0 z-10 backdrop-blur-sm p-1 ${isDark ? 'bg-black/70' : 'bg-white/80'}`}>
                        <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{artist.name}</h3>
                        <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{artist.category}</p>
                      </div>
                    </motion.div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

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
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
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
                      src={tamaulipecosArtistImages[artist.name] || "/images/img_0.png"}
                      alt={artist.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
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
                      src={getMunicipalImage(municipality.name.replace('Festival del Municipio ', ''))}
                      alt={municipality.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
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
    </>
  )
}
