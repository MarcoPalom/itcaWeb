"use client"
import { MapPin, Calendar, Clock, Users } from "lucide-react"

interface Event {
  id: string
  title?: string
  date: string
  day: string
  venue?: string
  time?: string
  municipality: string
}

interface EventListProps {
  events: Event[]
  artistImage: string
  artistName: string
}

export default function EventList({ events, artistImage, artistName }: EventListProps) {
  // Ordenar eventos por fecha
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseInt(a.date) || 0
    const dateB = parseInt(b.date) || 0
    return dateA - dateB
  })

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-6">
        Próximos Eventos
      </h2>
      
      {sortedEvents.map((event, index) => (
        <div 
          key={event.id || index}
          className="bg-gray-900 rounded-lg p-4 text-white border border-gray-700 hover:border-yellow-500 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            {/* Event Image */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={artistImage}
                alt={event.title || event.municipality}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                {event.title || artistName}
              </h3>
              
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">{event.municipality}</span>
                </div>
                
                {event.venue && event.venue !== "Por confirmar" && (
                  <div className="text-gray-400">
                    {event.venue}
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-yellow-500" />
                    <span>{event.day} {event.date}</span>
                  </div>
                  
                  {event.time && event.time !== "Por confirmar" && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {events.length === 0 && (
        <div className="text-center py-8">
          <Users className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No hay eventos programados</p>
        </div>
      )}
    </div>
  )
}
