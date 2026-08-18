"use client"
import Image from "next/image";
import { useState } from "react"
import { MapPin, Calendar, Clock, Users, ChevronDown, AlertTriangle } from "lucide-react"
import { internationalArtists, getArtistByName as getInternationalArtist } from "@/data/internationalArtists"
import { nationalArtists, getArtistByName as getNationalArtist } from "@/data/nationalArtists"
import { tamaulipecosArtists, getTamaulipecoArtistByName } from "@/data/tamaulipecanArtists"

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
          className={`rounded-xl border bg-surface p-4 text-ink transition-colors duration-200 ${
            isExpanded ? "border-brand" : "border-line hover:border-line-strong"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-24 h-38 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={eventImage}
                alt={event.title || event.municipality}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="mb-1 text-lg font-bold text-ink md:text-xl">
                {event.artist || artistName}
              </h3>
              <p className="mb-2 text-sm font-medium text-brand md:text-base">
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
                <div className="flex items-center gap-2 text-ink-muted">
                  <MapPin aria-hidden="true" className="h-4 w-4 text-brand" />
                  <span className="font-medium">{event.municipality}</span>
                </div>
                
                {event.venue && event.venue !== "Por confirmar" && (
                  <div className="text-ink-faint">
                    {event.venue}
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-ink-muted">
                    <Calendar aria-hidden="true" className="h-4 w-4 text-brand" />
                    <span>{event.day} {event.date}</span>
                  </div>
                  
                  {event.time && event.time !== "Por confirmar" && (
                    <div className="flex items-center gap-2 text-ink-muted">
                      <Clock aria-hidden="true" className="h-4 w-4 text-brand" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {artistDescription && (
              <button
                type="button"
                onClick={() => toggleEventExpansion(event.id)}
                aria-expanded={isExpanded}
                className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-brand transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <span className="sr-only">
                  {isExpanded ? "Ocultar detalle" : "Ver detalle"}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>
          
          {artistDescription && (
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="mt-4 border-t border-line pt-4">
                <h5 className="mb-2 text-base font-semibold text-ink">
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
                <p className="leading-relaxed text-ink-muted">
                  {artistDescription}
                </p>
              </div>
            </div>
          )}
        </div>
        );
      })}

      {events.length === 0 && (
        <div className="text-center py-8">
          <Users aria-hidden="true" className="mx-auto mb-4 h-12 w-12 text-ink-faint" />
          <p className="text-lg text-ink-muted">No hay funciones programadas</p>
        </div>
      )}
    </div>
  )
}
