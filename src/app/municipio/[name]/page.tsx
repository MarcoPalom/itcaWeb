"use client"
import { useState, useEffect, useMemo } from "react"
import { ArrowLeft, Signal, Wifi, Battery, MapPin, Calendar, Clock } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { FestivalEvent, FestivalInfo } from "@/constants/types"
import { victoriaFestivalInfo, victoriaFestival } from "@/constants/Municipios/victoriaData"
import { matamorosFestivalInfo, matamorosFestival } from "@/constants/Municipios/matamorosData"
import { tampicoFestivalInfo, tampicoFestival } from "@/constants/Municipios/tampicoData"
import { reynosaFestivalInfo, reynosaFestival } from "@/constants/Municipios/reynosaData"
import { nuevoLaredoFestivalInfo, nuevoLaredoFestival } from "@/constants/Municipios/nvData"
import { altamiraFestivalInfo, altamiraFestival } from "@/constants/Municipios/altamiraData"
import { camargoFestivalInfo, camargoFestival } from "@/constants/Municipios/camargoData"
import { manteFestivalInfo, manteFestival } from "@/constants/Municipios/manteData"
import { sanFernandoFestivalInfo, sanFernandoFestival } from "@/constants/Municipios/sanFernandoData"
import { valleHermosoFestivalInfo, valleHermosoFestival } from "@/constants/Municipios/valleHermosoData"
import { rioBravoFestivalInfo, rioBravoFestival } from "@/constants/Municipios/rioBravoData"
import { miguelAlemanFestivalInfo, miguelAlemanFestival } from "@/constants/Municipios/miguelAlemanData"
import { gonzalezFestivalInfo, gonzalezFestival } from "@/constants/Municipios/gonzalezData"
import { xicotencatlFestivalInfo, xicotencatlFestival } from "@/constants/Municipios/xicotencatlData"
import { lleraFestivalInfo, lleraFestival } from "@/constants/Municipios/lleraData"
import { jaumaveFestivalInfo, jaumaveFestival } from "@/constants/Municipios/jaumaveData"
import { palmillasFestivalInfo, palmillasFestival } from "@/constants/Municipios/palmillasData"
import { maineroFestivalInfo, maineroFestival } from "@/constants/Municipios/maineroData"
import { villagranFestivalInfo, villagranFestival } from "@/constants/Municipios/villagranData"
import { bustamanteFestivalInfo, bustamanteFestival } from "@/constants/Municipios/bustamanteData"
import { miquihuanaFestivalInfo, miquihuanaFestival } from "@/constants/Municipios/miquihuanaData"
import { tulaFestivalInfo, tulaFestival } from "@/constants/Municipios/tulaData"
import { ocampoFestivalInfo, ocampoFestival } from "@/constants/Municipios/ocampoData"
import { nuevoMorelosFestivalInfo, nuevoMorelosFestival } from "@/constants/Municipios/nuevoMorelosData"
import { antiguoMorelosFestivalInfo, antiguoMorelosFestival } from "@/constants/Municipios/antiguoMorelosData"
import { casasFestivalInfo, casasFestival } from "@/constants/Municipios/casasData"
import { gomezFariasFestivalInfo, gomezFariasFestival } from "@/constants/Municipios/gomezFariasData"
import { guerreroFestivalInfo, guerreroFestival } from "@/constants/Municipios/guerreroData"
import { guemezFestivalInfo, guemezFestival } from "@/constants/Municipios/guemezData"
import { hidalgoFestivalInfo, hidalgoFestival } from "@/constants/Municipios/hidalgoData"
import { jimenezFestivalInfo, jimenezFestival } from "@/constants/Municipios/jimenezData"
import { maderoFestivalInfo, maderoFestival } from "@/constants/Municipios/maderoData"
import { mendezFestivalInfo, mendezFestival } from "@/constants/Municipios/mendezData"
import { mierFestivalInfo, mierFestival } from "@/constants/Municipios/mierData"
import { padillaFestivalInfo, padillaFestival } from "@/constants/Municipios/padillaData"
import { sanCarlosFestivalInfo, sanCarlosFestival } from "@/constants/Municipios/sanCarlosData"
import { sanNicolasFestivalInfo, sanNicolasFestival } from "@/constants/Municipios/sanNicolasData"
import { sotoLaMarinaFestivalInfo, sotoLaMarinaFestival } from "@/constants/Municipios/sotoLaMarinaData"
import { abasoloFestivalInfo, abasoloFestival } from "@/constants/Municipios/abasoloData"
import { aldamaFestivalInfo, aldamaFestival } from "@/constants/Municipios/aldamaData"
import { burgosFestivalInfo, burgosFestival } from "@/constants/Municipios/burgosData"
import { gustavoDiazOrdazFestivalInfo, gustavoDiazOrdazFestival } from "@/constants/Municipios/gustavoDiazOrdazData"

export default function MunicipalityPage() {
  const params = useParams()
  const router = useRouter()
  const [municipality, setMunicipality] = useState<FestivalInfo | null>(null)
  const [municipalityEvents, setMunicipalityEvents] = useState<FestivalEvent[]>([])
  const [loading, setLoading] = useState(true)

  // Mapeo de todos los municipios
  const municipalitiesData = useMemo(() => ({
    "victoria": { info: victoriaFestivalInfo, events: victoriaFestival },
    "matamoros": { info: matamorosFestivalInfo, events: matamorosFestival },
    "tampico": { info: tampicoFestivalInfo, events: tampicoFestival },
    "reynosa": { info: reynosaFestivalInfo, events: reynosaFestival },
    "nuevo-laredo": { info: nuevoLaredoFestivalInfo, events: nuevoLaredoFestival },
    "altamira": { info: altamiraFestivalInfo, events: altamiraFestival },
    "camargo": { info: camargoFestivalInfo, events: camargoFestival },
    "mante": { info: manteFestivalInfo, events: manteFestival },
    "san-fernando": { info: sanFernandoFestivalInfo, events: sanFernandoFestival },
    "valle-hermoso": { info: valleHermosoFestivalInfo, events: valleHermosoFestival },
    "rio-bravo": { info: rioBravoFestivalInfo, events: rioBravoFestival },
    "miguel-aleman": { info: miguelAlemanFestivalInfo, events: miguelAlemanFestival },
    "gonzalez": { info: gonzalezFestivalInfo, events: gonzalezFestival },
    "xicotencatl": { info: xicotencatlFestivalInfo, events: xicotencatlFestival },
    "llera": { info: lleraFestivalInfo, events: lleraFestival },
    "jaumave": { info: jaumaveFestivalInfo, events: jaumaveFestival },
    "palmillas": { info: palmillasFestivalInfo, events: palmillasFestival },
    "mainero": { info: maineroFestivalInfo, events: maineroFestival },
    "villagran": { info: villagranFestivalInfo, events: villagranFestival },
    "bustamante": { info: bustamanteFestivalInfo, events: bustamanteFestival },
    "miquihuana": { info: miquihuanaFestivalInfo, events: miquihuanaFestival },
    "tula": { info: tulaFestivalInfo, events: tulaFestival },
    "ocampo": { info: ocampoFestivalInfo, events: ocampoFestival },
    "nuevo-morelos": { info: nuevoMorelosFestivalInfo, events: nuevoMorelosFestival },
    "antiguo-morelos": { info: antiguoMorelosFestivalInfo, events: antiguoMorelosFestival },
    "casas": { info: casasFestivalInfo, events: casasFestival },
    "gomez-farias": { info: gomezFariasFestivalInfo, events: gomezFariasFestival },
    "guerrero": { info: guerreroFestivalInfo, events: guerreroFestival },
    "guemez": { info: guemezFestivalInfo, events: guemezFestival },
    "hidalgo": { info: hidalgoFestivalInfo, events: hidalgoFestival },
    "jimenez": { info: jimenezFestivalInfo, events: jimenezFestival },
    "madero": { info: maderoFestivalInfo, events: maderoFestival },
    "mendez": { info: mendezFestivalInfo, events: mendezFestival },
    "mier": { info: mierFestivalInfo, events: mierFestival },
    "padilla": { info: padillaFestivalInfo, events: padillaFestival },
    "san-carlos": { info: sanCarlosFestivalInfo, events: sanCarlosFestival },
    "san-nicolas": { info: sanNicolasFestivalInfo, events: sanNicolasFestival },
    "soto-la-marina": { info: sotoLaMarinaFestivalInfo, events: sotoLaMarinaFestival },
    "abasolo": { info: abasoloFestivalInfo, events: abasoloFestival },
    "aldama": { info: aldamaFestivalInfo, events: aldamaFestival },
    "burgos": { info: burgosFestivalInfo, events: burgosFestival },
    "gustavo-diaz-ordaz": { info: gustavoDiazOrdazFestivalInfo, events: gustavoDiazOrdazFestival }
  }), [])

  // Mapeo de imágenes para municipios
  const municipalImages: { [key: string]: string } = {
    "Victoria": "/images/victoria-festival.jpg",
    "Matamoros": "/images/matamoros-festival.jpg",
    "Tampico": "/images/tampico-festival.jpg",
    "Reynosa": "/images/reynosa-festival.jpg",
    "Nuevo Laredo": "/images/nuevo-laredo-festival.jpg",
    "Altamira": "/images/altamira-festival.jpg",
    "Camargo": "/images/camargo-festival.jpg",
    "Mante": "/images/mante-festival.jpg",
    "San Fernando": "/images/san-fernando-festival.jpg",
    "Valle Hermoso": "/images/valle-hermoso-festival.jpg",
    "Río Bravo": "/images/rio-bravo-festival.jpg",
    "Miguel Alemán": "/images/miguel-aleman-festival.jpg",
    "González": "/images/gonzalez-festival.jpg",
    "Xicoténcatl": "/images/xicotencatl-festival.jpg",
    "Llera": "/images/llera-festival.jpg",
    "Jaumave": "/images/jaumave-festival.jpg",
    "Palmillas": "/images/palmillas-festival.jpg",
    "Mainero": "/images/mainero-festival.jpg",
    "Villagrán": "/images/villagran-festival.jpg",
    "Bustamante": "/images/bustamante-festival.jpg",
    "Miquihuana": "/images/miquihuana-festival.jpg",
    "Tula": "/images/tula-festival.jpg",
    "Ocampo": "/images/ocampo-festival.jpg",
    "Nuevo Morelos": "/images/nuevo-morelos-festival.jpg",
    "Antiguo Morelos": "/images/antiguo-morelos-festival.jpg",
    "Casas": "/images/casas-festival.jpg",
    "Gómez Farías": "/images/gomez-farias-festival.jpg",
    "Guerrero": "/images/guerrero-festival.jpg",
    "Güémez": "/images/guemez-festival.jpg",
    "Hidalgo": "/images/hidalgo-festival.jpg",
    "Jiménez": "/images/jimenez-festival.jpg",
    "Madero": "/images/madero-festival.jpg",
    "Méndez": "/images/mendez-festival.jpg",
    "Mier": "/images/mier-festival.jpg",
    "Padilla": "/images/padilla-festival.jpg",
    "San Carlos": "/images/san-carlos-festival.jpg",
    "San Nicolás": "/images/san-nicolas-festival.jpg",
    "Soto la Marina": "/images/soto-la-marina-festival.jpg",
    "Abasolo": "/images/abasolo-festival.jpg",
    "Aldama": "/images/aldama-festival.jpg",
    "Burgos": "/images/burgos-festival.jpg",
    "Gustavo Díaz Ordaz": "/images/gustavo-diaz-ordaz-festival.jpg"
  }

  useEffect(() => {
    if (params.name) {
      const municipalitySlug = params.name as string
      const municipalityData = municipalitiesData[municipalitySlug as keyof typeof municipalitiesData]
      
      if (municipalityData) {
        setMunicipality(municipalityData.info)
        setMunicipalityEvents(municipalityData.events)
      }
      setLoading(false)
    }
  }, [params.name, municipalitiesData])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    )
  }

  if (!municipality) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Municipio no encontrado</div>
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

  const municipalityImage = municipalImages[municipality.name] || "/images/municipal-festival-placeholder.jpg"
  
  // Obtener categorías únicas
  const categories = [...new Set(municipalityEvents.map((event: FestivalEvent) => event.category))]

  const sortedEvents = [...municipalityEvents].sort((a: FestivalEvent, b: FestivalEvent) => {
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
        <Image
          src={municipalityImage}
          alt="Background"
          fill
          className="object-cover filter grayscale blur-sm opacity-30"
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

        {/* Municipality Info */}
        <div className="px-4 md:px-6 pb-6">
          {/* Municipality Image */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 border-opacity-50 shadow-2xl relative">
              <Image
                src={municipalityImage}
                alt={municipality.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Municipality Details */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{municipality.name}</h1>
            <div className="text-yellow-400 mb-2 font-medium">
              {municipality.location}
            </div>
            <div className="text-gray-300 mb-2">
              Festival Municipal
            </div>
            <div className="text-white text-sm mb-4">
              {municipality.totalEvents} evento{municipality.totalEvents !== 1 ? 's' : ''} programado{municipality.totalEvents !== 1 ? 's' : ''}
            </div>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Del {municipality.startDate} al {municipality.endDate}
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
              Programación de Eventos
            </h2>
            
            {sortedEvents.map((event: FestivalEvent) => (
              <div key={event.id} className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Event Image */}
                  <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden relative">
                    <Image
                      src={municipalityImage}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Event Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <div className="text-yellow-400 font-medium mb-2">{event.artist}</div>
                    <div className="text-gray-300 text-sm mb-2">
                      {event.category}
                      {event.subcategory && (
                        <span className="block text-xs mt-1 text-gray-400">{event.subcategory}</span>
                      )}
                    </div>
                    
                    {/* Event Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.day} {event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    {/* Additional Info */}
                    {event.artisticDirection && (
                      <div className="text-xs text-gray-500 mt-2">
                        Dirección artística: {event.artisticDirection}
                      </div>
                    )}
                    {event.choreography && (
                      <div className="text-xs text-gray-500">
                        Coreografía: {event.choreography}
                      </div>
                    )}
                    {event.description && (
                      <div className="text-xs text-gray-500 mt-2">
                        {event.description}
                      </div>
                    )}
                    {event.cast && (
                      <div className="text-xs text-gray-500 mt-2">
                        <div className="font-medium">Elenco:</div>
                        <div>{event.cast.join(", ")}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Summary */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Categorías Presentes
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

