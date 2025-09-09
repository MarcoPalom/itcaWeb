"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import OptimizedImage from "@/components/ui/OptimizedImage"
import { internationalArtists, InternationalArtist } from "@/constants/internationalArtistData"
import { nationalArtists, NationalArtist } from "@/constants/nationalArtistData"
import { tamaulipecosArtists, TamaulipecoArtist } from "@/constants/tamaulipecosArtistData"
import { getArtistImageUniversal } from "@/constants/artistImages"
import EventList from "@/components/artist/EventList"
import FestivalLoading from "@/components/FestivalLoading"
import { useFestivalLoading } from "@/hooks/useFestivalLoading"

type Artist = InternationalArtist | NationalArtist | TamaulipecoArtist
type ArtistEvent = InternationalArtist['events'][0] | NationalArtist['events'][0] | TamaulipecoArtist['events'][0]

export default function ArtistPage() {
  const params = useParams()
  const router = useRouter()
  const [artist, setArtist] = useState<Artist | null>(null)
  const [showDescription, setShowDescription] = useState(false)



  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2000,
  })

  useEffect(() => {
    if (params.name) {
      const artistName = decodeURIComponent(params.name as string)
      
      let foundArtist = internationalArtists.find(a => 
        a.name.toLowerCase().replace(/\s+/g, '-') === artistName
      )
      
      if (!foundArtist) {
        foundArtist = nationalArtists.find(a => 
          a.name.toLowerCase().replace(/\s+/g, '-') === artistName
        )
      }
      
      if (!foundArtist) {
        foundArtist = tamaulipecosArtists.find(a => 
          a.name.toLowerCase().replace(/\s+/g, '-') === artistName
        )
      }
      
      if (foundArtist) {
        setArtist(foundArtist)
      }
    }
  }, [params.name])

  if (isLoading) {
    return (
      <FestivalLoading 
        message={message}
        showProgress={true}
        progress={progress}
      />
    )
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Artista no encontrado</div>
          <button 
            onClick={() => router.back()}
            className="text-[#864e94] hover:underline"
          >
            Volver atrás
          </button>
        </div>
      </div>
    )
  }

  const artistImage = getArtistImageUniversal(artist.name)
  const municipalities = [...new Set(artist.events.map((event: ArtistEvent) => event.municipality))]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">


      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={artistImage}
          alt="Background"
          fill
          className="object-cover filter grayscale blur-sm opacity-30"
          priority={true}
          sizes="100vw"
          quality={60}
          placeholder="blur"
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between p-4 md:p-6">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white hover:text-[#864e94] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium md:text-lg">Volver</span>
          </button>
        </div>

        <div className="px-4 md:px-6 pb-6">
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#864e94] border-opacity-50 shadow-2xl relative">
              <OptimizedImage
                src={artistImage}
                alt={artist.name}
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 192px, 256px"
                quality={90}
                placeholder="blur"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{artist.name}</h1>
            <div className="text-[#864e94] mb-2 font-medium">
              {artist.origin}
            </div>
            <div className="text-gray-300 mb-2">
              {artist.category}
              {artist.subcategory && (
                <span className="block text-sm mt-1 text-gray-400">{artist.subcategory}</span>
              )}
            </div>
            <div className="text-white text-sm mb-4">
              Se presentará en {municipalities.length} municipio{municipalities.length !== 1 ? 's' : ''}
            </div>
            {artist.description && (
              <div className="max-w-2xl mx-auto flex flex-col items-center">
                <motion.button
                  onClick={() => setShowDescription(!showDescription)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#864e94] hover:bg-[#a05bb8] text-white rounded-lg transition-all duration-200 mb-4 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm font-medium">
                    {showDescription ? 'Ocultar descripción' : 'Ver descripción'}
                  </span>
                  <motion.div
                    animate={{ rotate: showDescription ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {showDescription && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                      >
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {artist.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          <EventList 
            events={artist.events}
            artistImage={artistImage}
            artistName={artist.name}
          />

          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Municipios Visitados
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {municipalities.map((municipality, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#864e94] text-white text-sm font-medium rounded-full"
                >
                  {municipality as string}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}