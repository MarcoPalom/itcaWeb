"use client"
import { useState } from "react"
import { MapPin, Calendar, Clock, Users, ChevronDown, AlertTriangle } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
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
  const { isDark } = useTheme()
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set())

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

  const getArtistDescription = (artistName: string, origin?: string) => {
    if (!artistName) return null

    const isMunicipalityEvent = origin === "Municipio de Tampico" || 
                               origin === "Municipio de Victoria" || 
                               origin === "FIO y Municipio H. Matamoros" || 
                               origin === "Municipio de Nuevo Laredo" || 
                               origin === "Municipio de Reynosa" ||
                               origin === "Municipio de Río Bravo" ||
                               origin === "Municipio de Miguel Alemán"

    if (isMunicipalityEvent) {
      const municipalityName = origin?.replace("Municipio de ", "").replace("FIO y ", "").replace(" H. Matamoros", " Matamoros") || "el municipio"
      return `Este es un evento coordinado por ${municipalityName}, que forma parte de la programación cultural del Festival Internacional en la Costa del Seno Mexicano. El municipio ha preparado una propuesta artística especial para enriquecer la experiencia cultural de los asistentes.`
    }

    const internationalArtist = getInternationalArtist(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (internationalArtist?.description) {
      return internationalArtist.description
    }

    const nationalArtist = getNationalArtist(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (nationalArtist?.description) {
      return nationalArtist.description
    }

    const tamaulipecoArtist = getTamaulipecoArtistByName(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (tamaulipecoArtist?.description) {
      return tamaulipecoArtist.description
    }

    const allArtists = [...internationalArtists, ...nationalArtists, ...tamaulipecosArtists]
    const foundArtist = allArtists.find(artist => 
      artist.name.toLowerCase().includes(artistName.toLowerCase()) ||
      artistName.toLowerCase().includes(artist.name.toLowerCase())
    )

    return foundArtist?.description || null
  }

  const getArtistWarning = (artistName: string, origin?: string) => {
    if (!artistName) return null

    const isMunicipalityEvent = origin === "Municipio de Tampico" || 
                               origin === "Municipio de Victoria" || 
                               origin === "FIO y Municipio H. Matamoros" || 
                               origin === "Municipio de Nuevo Laredo" || 
                               origin === "Municipio de Reynosa" ||
                               origin === "Municipio de Río Bravo" ||
                               origin === "Municipio de Miguel Alemán"

    if (isMunicipalityEvent) {
      return null
    }

    const internationalArtist = getInternationalArtist(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (internationalArtist?.warning) {
      return internationalArtist.warning
    }

    const nationalArtist = getNationalArtist(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (nationalArtist?.warning) {
      return nationalArtist.warning
    }

    const tamaulipecoArtist = getTamaulipecoArtistByName(artistName.toLowerCase().replace(/\s+/g, '-'))
    if (tamaulipecoArtist?.warning) {
      return tamaulipecoArtist.warning
    }

    const allArtists = [...internationalArtists, ...nationalArtists, ...tamaulipecosArtists]
    const foundArtist = allArtists.find(artist => 
      artist.name.toLowerCase().includes(artistName.toLowerCase()) ||
      artistName.toLowerCase().includes(artist.name.toLowerCase())
    )

    return foundArtist?.warning || null
  }

  return (
    <div className="space-y-4">
      
      {sortedEvents.map((event, index) => {
        const eventImage = (event.origin === "Municipio de Tampico" || event.origin === "Municipio de Victoria" || event.origin === "FIO y Municipio H. Matamoros" || event.origin === "Municipio de Nuevo Laredo" || event.origin === "Municipio de Reynosa" || event.origin === "Municipio de Río Bravo" || event.origin === "Municipio de Miguel Alemán") && municipalityImage 
          ? municipalityImage 
          : event.artistImage || artistImage;
        
        const isExpanded = expandedEvents.has(event.id)
        const artistDescription = getArtistDescription(event.artist || artistName, event.origin)
        const artistWarning = getArtistWarning(event.artist || artistName, event.origin)
        
        console.log('🎭 Event details:', {
          eventArtist: event.artist,
          artistName,
          origin: event.origin,
          artistWarning,
          eventTitle: event.title
        })
        
        return (
        <div 
          key={event.id || index}
          onClick={() => toggleEventExpansion(event.id)}
          className={`rounded-lg p-4 border transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
            isDark 
              ? "bg-gray-900 text-white" 
              : "bg-white text-gray-800"
          } ${
            isExpanded 
              ? 'border-[#864e94] shadow-lg shadow-[#864e94]/20' 
              : isDark
                ? 'border-gray-700 hover:border-[#864e94]'
                : 'border-gray-300 hover:border-[#864e94]'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-24 h-38 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={eventImage}
                alt={event.title || event.municipality}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className={`font-bold text-lg md:text-xl mb-1 ${
                isDark ? "text-white" : "text-gray-800"
              }`}>
                {event.artist || artistName}
              </h3>
              <p className="text-[#864e94] font-medium text-sm md:text-base mb-2">
                {event.title || artistName}
              </p>

              {artistWarning && (
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30">
                    <AlertTriangle className="w-3 h-3" />
                    {artistWarning}
                  </span>
                </div>
              )}
              
              <div className="space-y-2 text-sm md:text-base">
                <div className={`flex items-center gap-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  <MapPin className="w-4 h-4 text-[#864e94]" />
                  <span className="font-medium">{event.municipality}</span>
                </div>
                
                {event.venue && event.venue !== "Por confirmar" && (
                  <div className={isDark ? "text-gray-400" : "text-gray-500"}>
                    {event.venue}
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    <Calendar className="w-4 h-4 text-[#864e94]" />
                    <span>{event.day} {event.date}</span>
                  </div>
                  
                  {event.time && event.time !== "Por confirmar" && (
                    <div className={`flex items-center gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}>
                      <Clock className="w-4 h-4 text-[#864e94]" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
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
          
          {artistDescription && (
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className={`mt-4 pt-4 border-t ${
                isDark ? "border-gray-700" : "border-gray-300"
              }`}>
                <h5 className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}>
                  {event.origin === "Municipio de Tampico" || 
                   event.origin === "Municipio de Victoria" || 
                   event.origin === "FIO y Municipio H. Matamoros" || 
                   event.origin === "Municipio de Nuevo Laredo" || 
                   event.origin === "Municipio de Reynosa" ||
                   event.origin === "Municipio de Río Bravo" ||
                   event.origin === "Municipio de Miguel Alemán"
                    ? "Información del Evento" 
                    : "Descripción del Artista"
                  }
                </h5>
                <p className={`leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>{artistDescription}</p>
              </div>
            </div>
          )}
        </div>
        );
      })}

      {events.length === 0 && (
        <div className="text-center py-8">
          <Users className={`w-16 h-16 mx-auto mb-4 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`} />
          <p className={`text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>No hay eventos programados</p>
        </div>
      )}
    </div>
  )
}
