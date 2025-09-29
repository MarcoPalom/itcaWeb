"use client"
import { useState } from "react"
import { MapPin, Calendar, Clock, Users, ChevronDown } from "lucide-react"
import { internationalArtists, getArtistByName as getInternationalArtist } from "@/constants/internationalArtistData"
import { nationalArtists, getArtistByName as getNationalArtist } from "@/constants/nationalArtistData"
import { tamaulipecosArtists, getTamaulipecoArtistByName } from "@/constants/tamaulipecosArtistData"

interface Event {
  id: string
  title?: string
  date: string
  day: string
  venue?: string
  time?: string
  municipality: string
  artistImage?: string
  artist?: string
  origin?: string
  description?: string
}

interface EventListProps {
  events: Event[]
  artistImage: string
  artistName: string
  municipalityImage?: string
}

export default function EventList({ events, artistImage, artistName, municipalityImage }: EventListProps) {
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set())

  // Ordenar eventos por fecha
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseInt(a.date) || 0
    const dateB = parseInt(b.date) || 0
    return dateA - dateB
  })

  const toggleEventExpansion = (eventId: string) => {
    setExpandedEvents(prev => {
      const newSet = new Set(prev)
      if (newSet.has(eventId)) {
        newSet.delete(eventId)
      } else {
        newSet.add(eventId)
      }
      return newSet
    })
  }

  // Función para obtener la descripción del artista
  const getArtistDescription = (artistName: string, origin?: string) => {
    if (!artistName) return null

    // Verificar si es un evento coordinado por municipio
    const isMunicipalityEvent = origin === "Municipio de Tampico" || 
                               origin === "Municipio de Victoria" || 
                               origin === "FIO y Municipio H. Matamoros" || 
                               origin === "Municipio de Nuevo Laredo" || 
                               origin === "Municipio de Reynosa"

    if (isMunicipalityEvent) {
      const municipalityName = origin?.replace("Municipio de ", "").replace("FIO y ", "").replace(" H. Matamoros", " Matamoros") || "el municipio"
      return `Este es un evento coordinado por ${municipalityName}, que forma parte de la programación cultural del Festival Internacional en la Costa del Seno Mexicano. El municipio ha preparado una propuesta artística especial para enriquecer la experiencia cultural de los asistentes.`
    }

    // Buscar en artistas internacionales
    const internationalArtist = getInternationalArtist(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (internationalArtist?.description) {
      return internationalArtist.description
    }

    // Buscar en artistas nacionales
    const nationalArtist = getNationalArtist(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (nationalArtist?.description) {
      return nationalArtist.description
    }

    // Buscar en artistas tamaulipecos
    const tamaulipecoArtist = getTamaulipecoArtistByName(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (tamaulipecoArtist?.description) {
      return tamaulipecoArtist.description
    }

    // Búsqueda más flexible por nombre parcial
    const allArtists = [...internationalArtists, ...nationalArtists, ...tamaulipecosArtists]
    const foundArtist = allArtists.find(artist => 
      artist.name.toLowerCase().includes(artistName.toLowerCase()) ||
      artistName.toLowerCase().includes(artist.name.toLowerCase())
    )

    return foundArtist?.description || null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-6">
        Próximos Eventos
      </h2>
      
      {sortedEvents.map((event, index) => {
        // Special case for Tampico and Victoria: if origin is "Municipio de Tampico" or "Municipio de Victoria", use municipality image
        const eventImage = (event.origin === "Municipio de Tampico" || event.origin === "Municipio de Victoria" || event.origin === "FIO y Municipio H. Matamoros" || event.origin === "Municipio de Nuevo Laredo" || event.origin === "Municipio de Reynosa") && municipalityImage 
          ? municipalityImage 
          : event.artistImage || artistImage;
        
        const isExpanded = expandedEvents.has(event.id)
        const artistDescription = getArtistDescription(event.artist || artistName, event.origin)
        
        return (
        <div 
          key={event.id || index}
          onClick={() => toggleEventExpansion(event.id)}
          className={`bg-gray-900 rounded-lg p-4 text-white border transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
            isExpanded 
              ? 'border-[#864e94] shadow-lg shadow-[#864e94]/20' 
              : 'border-gray-700 hover:border-[#864e94]'
          }`}
        >
          <div className="flex items-start gap-4">
            {/* Event Image */}
            <div className="w-24 h-38 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={eventImage}
                alt={event.title || event.municipality}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg md:text-xl text-white mb-1">
                {event.artist || artistName}
              </h3>
              <p className="text-[#864e94] font-medium text-sm md:text-base mb-2">
                {event.title || artistName}
              </p>
              
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#864e94]" />
                  <span className="font-medium">{event.municipality}</span>
                </div>
                
                {event.venue && event.venue !== "Por confirmar" && (
                  <div className="text-gray-400">
                    {event.venue}
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-[#864e94]" />
                    <span>{event.day} {event.date}</span>
                  </div>
                  
                  {event.time && event.time !== "Por confirmar" && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-[#864e94]" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Indicador de expansión */}
            {artistDescription && (
              <div className="flex justify-center mt-2">
                <ChevronDown 
                  className={`w-5 h-5 text-[#864e94] transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </div>
            )}
          </div>
          
          {/* Description - Solo se muestra si está expandido y tiene descripción */}
          {artistDescription && (
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <h5 className="text-lg font-semibold text-white mb-2">
                  {event.origin === "Municipio de Tampico" || 
                   event.origin === "Municipio de Victoria" || 
                   event.origin === "FIO y Municipio H. Matamoros" || 
                   event.origin === "Municipio de Nuevo Laredo" || 
                   event.origin === "Municipio de Reynosa" 
                    ? "Información del Evento" 
                    : "Descripción del Artista"
                  }
                </h5>
                <p className="text-gray-300 leading-relaxed">{artistDescription}</p>
              </div>
            </div>
          )}
        </div>
        );
      })}

      {events.length === 0 && (
        <div className="text-center py-8">
          <Users className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No hay eventos programados</p>
        </div>
      )}
    </div>
  )
}
