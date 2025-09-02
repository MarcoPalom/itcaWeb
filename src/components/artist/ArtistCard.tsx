"use client"
import { MapPin } from "lucide-react"
import Image from "next/image"

interface ArtistCardProps {
  artist: {
    id: string
    name: string
    origin: string
    category: string
    subcategory?: string
    events: any[]
  }
  imageSrc: string
  showEvents?: boolean
  compact?: boolean
}

export default function ArtistCard({ artist, imageSrc, showEvents = false, compact = false }: ArtistCardProps) {
  const navigateToArtist = () => {
    const slug = artist.name.toLowerCase().replace(/\s+/g, '-')
    window.location.href = `/artist/${slug}`
  }

  if (compact) {
    return (
      <div
        onClick={navigateToArtist}
        className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-[#864e94]"
      >
        {/* Artist Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={imageSrc}
            alt={artist.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Artist Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl text-white mb-2 line-clamp-2">
            {artist.name}
          </h3>
          <div className="text-gray-300 text-sm mb-2">
            <span className="text-[#864e94] font-medium">{artist.origin}</span>
          </div>
          <div className="text-gray-400 text-sm mb-3">
            {artist.category}
            {artist.subcategory && (
              <span className="block text-xs mt-1">{artist.subcategory}</span>
            )}
          </div>
          
          {/* Events Count */}
          <div className="flex items-center justify-between">
            <span className="text-[#864e94] text-sm font-medium">
              {artist.events.length} evento{artist.events.length !== 1 ? 's' : ''}
            </span>
            <div className="text-xs text-gray-500">
              {artist.events.length > 0 && (
                <span>
                  {artist.events[0].municipality}
                  {artist.events.length > 1 && ` +${artist.events.length - 1} más`}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Diseño vertical como en la imagen - imagen a la izquierda, datos a la derecha
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-[#864e94] transition-all duration-300">
      <div className="flex">
        {/* Artist Image - Lado izquierdo */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative">
          <Image
            src={imageSrc}
            alt={artist.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Artist Info - Lado derecho */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">
              {artist.name}
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#864e94]" />
                <span className="font-medium">{artist.origin}</span>
              </div>
              
              <div className="text-gray-400">
                {artist.category}
                {artist.subcategory && (
                  <span className="block text-xs mt-1 text-gray-500">{artist.subcategory}</span>
                )}
              </div>
            </div>
          </div>

          {/* Events Summary */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <span className="text-[#864e94] text-sm font-medium">
                {artist.events.length} evento{artist.events.length !== 1 ? 's' : ''}
              </span>
              <div className="text-xs text-gray-500">
                {artist.events.length > 0 && (
                  <span>
                    {artist.events[0].municipality}
                    {artist.events.length > 1 && ` +${artist.events.length - 1} más`}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={navigateToArtist}
            className="mt-3 w-full bg-[#864e94] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#7a457a] transition-colors duration-200 text-sm"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  )
}
