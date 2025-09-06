"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Signal, Wifi, Battery } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
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
      <div className="flex items-center justify-between px-4 py-2 text-xs md:hidden">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src={artistImage}
          alt="Background"
          className="w-full h-full object-cover filter grayscale blur-sm opacity-30"
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
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#864e94] border-opacity-50 shadow-2xl">
              <img
                src={artistImage}
                alt={artist.name}
                className="w-full h-full object-cover"
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
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                {artist.description}
              </p>
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