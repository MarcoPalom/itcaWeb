"use client"
import { MapPin, AlertTriangle } from "lucide-react"
import Image from "next/image"

interface ArtistListCardProps {
  artist: {
    id: string
    name: string
    origin: string
    category: string
    subcategory?: string
    warning?: string
    events: Array<{
      id: string
      title: string
      date: string
      day: string
      venue: string
      time: string
      municipality: string
    }>
  }
  imageSrc: string
  isLast?: boolean
}

export default function ArtistListCard({ artist, imageSrc, isLast = false }: ArtistListCardProps) {
  const navigateToArtist = () => {
    const slug = artist.name.toLowerCase().replace(/\s+/g, '-')
    window.location.href = `/artist/${slug}`
  }

  return (
    <div className="w-full">
      {/* Artist Card */}
              <div 
          onClick={navigateToArtist}
          className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-800 transition-all duration-300 rounded-lg min-h-[120px] md:min-h-[150px]"
        >
          {/* Artist Image - Lado izquierdo */}
          <div className="w-20 h-28 md:w-24 md:h-36 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={artist.name}
            fill
            className="object-cover"
          />
        </div>

                  {/* Artist Info - Lado derecho */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h3 className="font-bold text-lg md:text-xl text-white mb-3 truncate">
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

              {/* Warning Tag */}
              {artist.warning && (
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30">
                    <AlertTriangle className="w-3 h-3" />
                    {artist.warning}
                  </span>
                </div>
              )}

            </div>
          </div>
      </div>

      {/* Separator - Solo si no es el último */}
      {!isLast && (
        <div className="w-full h-px bg-blue-400 opacity-60 mx-6"></div>
      )}
    </div>
  )
}
