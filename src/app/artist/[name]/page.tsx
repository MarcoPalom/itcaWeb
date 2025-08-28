"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Signal, Wifi, Battery } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { internationalArtists } from "@/constants/internationalArtistData"
import { nationalArtists } from "@/constants/nationalArtistData"

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
    "Centro de Producción de Danza Contemporánea (CEPRODAC)": "/images/national_artists/grupo_tayer.jpg",
    "Patricia Guerrero": "/images/national_artists/la_percha.jpg",
    "Grupo La Trenza": "/images/national_artists/latrenza.jpg",
    "Grupo Tayer": "/images/national_artists/grupo_tayer.jpg"
  }

  const artistImage = artistImages[artist.name] || "/elegant-female-opera-singer-performing-on-stage.png"
  
  // Obtener municipios únicos
  const municipalities = [...new Set(artist.events.map((event: any) => event.municipality))]

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
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 border-opacity-50">
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
            <div className="text-white mb-2">
              {municipalities.join(", ")}
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
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-6">
              Eventos
            </h2>
            {artist.events.map((event: any, index: number) => (
              <div 
                key={event.id || index}
                className="bg-green-400 rounded-lg p-4 text-black"
              >
                <h3 className="font-bold text-lg mb-2">{event.municipality}</h3>
                <div className="text-sm">
                  <p><strong>Fecha:</strong> {event.day} {event.date}</p>
                  {event.venue && event.venue !== "Por confirmar" && (
                    <p><strong>Lugar:</strong> {event.venue}</p>
                  )}
                  {event.time && event.time !== "Por confirmar" && (
                    <p><strong>Hora:</strong> {event.time}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
