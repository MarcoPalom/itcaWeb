"use client"
import { useState, useEffect, useMemo } from "react"
import { ArrowLeft} from "lucide-react"
import { useParams, useRouter } from "next/navigation"
// Usando img nativo de HTML en lugar de Image de Next.js
import { FestivalEvent, FestivalInfo } from "@/constants/types"
import FestivalLoading from "@/components/FestivalLoading"
import { useFestivalLoading } from "@/hooks/useFestivalLoading"
import EventList from "@/components/artist/EventList"
import { victoriaFestivalInfo, victoriaFestival } from "@/constants/Municipios/victoriaData"
import { matamorosFestivalInfo, matamorosFestival } from "@/constants/Municipios/matamorosData"
import { tampicoFestivalInfo, tampicoFestival } from "@/constants/Municipios/tampicoData"
import { reynosaFestivalInfo, reynosaFestival } from "@/constants/Municipios/reynosaData"
import { nvFestivalInfo, nuevolaredoFestival } from "@/constants/Municipios/nvData"
import { altamiraFestivalInfo, altamiraFestival } from "@/constants/Municipios/altamiraData"
import { camargoFestivalInfo, camargoFestival } from "@/constants/Municipios/camargoData"
import { manteFestivalInfo, manteFestival } from "@/constants/Municipios/manteData"
import { sanFernandoFestivalInfo, sanFernandoFestival } from "@/constants/Municipios/sanFernandoData"
import { valleHermosoFestivalInfo, vallehermosoFestival } from "@/constants/Municipios/valleHermosoData"
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
import { nuevoMorelosFestivalInfo, nuevomorelosFestival } from "@/constants/Municipios/nuevoMorelosData"
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
import { cruillasFestivalInfo, cruillasFestival } from "@/constants/Municipios/cruillasData"
import { getArtistImageUniversal } from "@/constants/artistImages"
import { municipalImages } from "@/constants/municipalImages"

export default function MunicipalityPage() {
  const params = useParams()
  const router = useRouter()
  const [municipality, setMunicipality] = useState<FestivalInfo | null>(null)
  const [municipalityEvents, setMunicipalityEvents] = useState<FestivalEvent[]>([])

  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2000,
  })

  // Mapeo de todos los municipios
  const municipalitiesData = useMemo(() => ({
    "victoria": { info: victoriaFestivalInfo, events: victoriaFestival },
    "matamoros": { info: matamorosFestivalInfo, events: matamorosFestival },
    "tampico": { info: tampicoFestivalInfo, events: tampicoFestival },
    "reynosa": { info: reynosaFestivalInfo, events: reynosaFestival },
    "nuevo-laredo": { info: nvFestivalInfo, events: nuevolaredoFestival },
    "altamira": { info: altamiraFestivalInfo, events: altamiraFestival },
    "camargo": { info: camargoFestivalInfo, events: camargoFestival },
    "mante": { info: manteFestivalInfo, events: manteFestival },
    "san-fernando": { info: sanFernandoFestivalInfo, events: sanFernandoFestival },
    "valle-hermoso": { info: valleHermosoFestivalInfo, events: vallehermosoFestival },
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
    "nuevo-morelos": { info: nuevoMorelosFestivalInfo, events: nuevomorelosFestival },
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
    "gustavo-diaz-ordaz": { info: gustavoDiazOrdazFestivalInfo, events: gustavoDiazOrdazFestival },
    "cruillas": { info: cruillasFestivalInfo, events: cruillasFestival }
  }), [])


  useEffect(() => {
    if (params.name) {
      const municipalitySlug = params.name as string
      const municipalityData = municipalitiesData[municipalitySlug as keyof typeof municipalitiesData]
      
      if (municipalityData) {
        setMunicipality(municipalityData.info)
        setMunicipalityEvents(municipalityData.events)
      }
    }
  }, [params.name, municipalitiesData])

  if (isLoading) {
    return (
      <FestivalLoading 
        message={message}
        showProgress={true}
        progress={progress}
      />
    )
  }

  if (!municipality) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Municipio no encontrado</div>
          <button 
            onClick={() => router.back()}
            className="text-[#864e94] hover:underline"
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

  // Función para obtener imagen del artista
  const getEventImage = (event: FestivalEvent) => {
    return getArtistImageUniversal(event.artist)
  }

  // Transformar eventos de municipio al formato que espera EventList
  const transformedEvents = municipalityEvents.map((event: FestivalEvent) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    day: event.day,
    venue: event.venue,
    time: event.time,
    municipality: municipality.name,
    artistImage: getEventImage(event)
  }))

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Status Bar - Solo visible en móvil */}


      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={municipalityImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter grayscale blur-sm opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white hover:text-[#864e94] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium md:text-lg">Volver</span>
          </button>
        </div>

        {/* Municipality Info */}
        <div className="px-4 md:px-6 pb-6">
          {/* Municipality Image */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#864e94] border-opacity-50 shadow-2xl relative">
              <img
                src={municipalityImage}
                alt={municipality.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Municipality Details */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{municipality.name}</h1>
            <div className="text-[#864e94] mb-2 font-medium">
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
          <EventList 
            events={transformedEvents}
            artistImage={municipalityImage}
            artistName={municipality.name}
          />

          {/* Categories Summary */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Categorías Presentes
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#864e94] text-white text-sm font-medium rounded-full"
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

