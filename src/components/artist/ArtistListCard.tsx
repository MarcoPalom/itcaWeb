"use client"
import { MapPin, Calendar } from "lucide-react"

interface ArtistListCardProps {
  artist: {
    id: string
    name: string
    origin: string
    category: string
    subcategory?: string
    events: any[]
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
          <img
            src={imageSrc}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>

                  {/* Artist Info - Lado derecho */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h3 className="font-bold text-lg md:text-xl text-white mb-3 truncate">
              {artist.name}
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">{artist.origin}</span>
              </div>
              
              <div className="text-gray-400">
                {artist.category}
                {artist.subcategory && (
                  <span className="block text-xs mt-1 text-gray-500">{artist.subcategory}</span>
                )}
              </div>

              {/* Events Summary */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-yellow-500 text-sm font-medium">
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
      </div>

      {/* Separator - Solo si no es el último */}
      {!isLast && (
        <div className="w-full h-px bg-blue-400 opacity-60 mx-6"></div>
      )}
    </div>
  )
}
