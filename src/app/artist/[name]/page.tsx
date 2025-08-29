"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Signal, Wifi, Battery, MapPin, Calendar, Clock } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { internationalArtists } from "@/constants/internationalArtistData"
import { nationalArtists } from "@/constants/nationalArtistData"
import EventList from "@/components/artist/EventList"

export default function ArtistPage() {
  const params = useParams()
  const router = useRouter()
  const [artist, setArtist] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.name) {
      const artistName = decodeURIComponent(params.name as string)
      
      // Buscar en artistas internacionales
      let foundArtist = internationalArtists.find(a => 
        a.name.toLowerCase().replace(/\s+/g, '-') === artistName
      )
      
      // Si no se encuentra, buscar en artistas nacionales
      if (!foundArtist) {
        foundArtist = nationalArtists.find(a => 
          a.name.toLowerCase().replace(/\s+/g, '-') === artistName
        )
      }
      
      if (foundArtist) {
        setArtist(foundArtist)
      }
      setLoading(false)
    }
  }, [params.name])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    )
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Artista no encontrado</div>
          <button 
            onClick={() => router.back()}
            className="text-yellow-500 hover:underline"
          >
            Volver atrás
          </button>
        </div>
      </div>
    )
  }

  // Mapeo de imágenes para artistas
  const artistImages: { [key: string]: string } = {
    "Bianca Marroquín": "/images/bianca_marroquin.jpg",
    "Argelia Fragoso": "/images/argelia_fragoso.jpg",
    "Hands Percussion of Malaysia": "/images/hand_percusion.jpg",
    "Charlotte Pescayre": "/images/charlotte.jpeg",
    "Sabor Life is Rhythm": "/images/sabor_life.jpg", 
    "Ballet Nepantla": "/images/ballet_nepantla.jpg",
    "Matías Aguayo": "/images/matias_aguayo.jpg",
    "Del Vali": "/images/del_vali.png",
    "Wero Hernández": "/images/el_wero.jpg",
    "María Katzarava": "/images/national_artists/maria_katza.jpg",
    "Centro de Producción de Danza Contemporánea (CEPRODAC)": "/images/national_artists/ceprodac1.jpg",
    "Patricia Guerrero": "/images/national_artists/la_percha.jpg",
    "Grupo La Trenza": "/images/national_artists/latrenza.jpg",
    "Grupo Tayer": "/images/national_artists/grupo_tayer.jpg",
    "La Percha Teatro": "/images/national_artists/la_percha.jpg"
  }

  const artistImage = artistImages[artist.name] || "/images/img_0.png"
  
  // Obtener municipios únicos
  const municipalities = [...new Set(artist.events.map((event: any) => event.municipality))]

  // Ordenar eventos por fecha
  const sortedEvents = [...artist.events].sort((a: any, b: any) => {
    const dateA = parseInt(a.date) || 0
    const dateB = parseInt(b.date) || 0
    return dateA - dateB
  })

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Status Bar - Solo visible en móvil */}
      <div className="flex items-center justify-between px-4 py-2 text-xs md:hidden">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={artistImage}
          alt="Background"
          className="w-full h-full object-cover filter grayscale blur-sm opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium md:text-lg">Volver</span>
          </button>
        </div>

        {/* Artist Info */}
        <div className="px-4 md:px-6 pb-6">
          {/* Artist Image */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 border-opacity-50 shadow-2xl">
              <img
                src={artistImage}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Artist Details */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{artist.name}</h1>
            <div className="text-yellow-400 mb-2 font-medium">
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

          {/* Events */}
          <EventList 
            events={artist.events}
            artistImage={artistImage}
            artistName={artist.name}
          />

          {/* Municipalities Summary */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Municipios Visitados
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {municipalities.map((municipality, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full"
                >
                  {municipality}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
