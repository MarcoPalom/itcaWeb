"use client"
import { useState, useEffect, useMemo } from "react"
import { ArrowLeft, Search, X } from "lucide-react"
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
import Pagination from "@/components/Pagination"
import { useTheme } from "@/contexts/ThemeContext"

export default function MunicipalityPage() {
  const params = useParams()
  const router = useRouter()
  const { isDark } = useTheme()
  const [municipality, setMunicipality] = useState<FestivalInfo | null>(null)
  const [municipalityEvents, setMunicipalityEvents] = useState<FestivalEvent[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

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

  // Filtrar eventos basado en el término de búsqueda
  const filteredEvents = useMemo(() => {
    if (!searchTerm.trim()) return municipalityEvents

    return municipalityEvents.filter((event: FestivalEvent) =>
      event.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.venue && event.venue.toLowerCase().includes(searchTerm.toLowerCase())) ||
      event.day.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [municipalityEvents, searchTerm])

  // Paginación
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex)

  // Función para manejar cambios en la búsqueda
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1) // Reset a la primera página cuando se busca
  }

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
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-black text-white" : "bg-yellow-300 text-gray-800"
      }`}>
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

  // Municipios que necesitan la funcionalidad especial para eventos con "Municipio de [nombre]"
  const specialMunicipalities = ["Victoria", "Matamoros", "Nuevo Laredo", "Reynosa", "Tampico", "Río Bravo", "Miguel Alemán"]
  const needsSpecialImage = specialMunicipalities.includes(municipality.name)

  // Obtener categorías únicas
  const categories = [...new Set(municipalityEvents.map((event: FestivalEvent) => event.category))]

  // Función para obtener imagen del artista
  const getEventImage = (event: FestivalEvent) => {
    return getArtistImageUniversal(event.artist)
  }

  // Transformar eventos de municipio al formato que espera EventList
  const transformedEvents = paginatedEvents.map((event: FestivalEvent) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    day: event.day,
    venue: event.venue,
    time: event.time,
    municipality: municipality.name,
    artistImage: getEventImage(event),
    artist: event.artist,
    origin: event.origin
  }))

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDark ? "bg-black text-white" : "bg-yellow-100 text-gray-800"
    }`}>
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
            className={`flex items-center gap-2 transition-colors ${
              isDark 
                ? "text-white hover:text-[#864e94]" 
                : "text-gray-800 hover:text-[#864e94]"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium md:text-lg">Volver</span>
          </button>
        </div>

        {/* Search Bar */}


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
            <h1 className={`text-2xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>{municipality.name}</h1>
            <div className="text-[#864e94] mb-2 font-medium">
              {municipality.location}
            </div>
            <div className={`mb-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              Festival Municipal
            </div>
            <div className={`text-sm mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              {searchTerm ? filteredEvents.length : municipality.totalEvents} evento{(searchTerm ? filteredEvents.length : municipality.totalEvents) !== 1 ? 's' : ''} programado{(searchTerm ? filteredEvents.length : municipality.totalEvents) !== 1 ? 's' : ''}
            </div>
            <div className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              Del {municipality.startDate} al {municipality.endDate}
            </div>
          </div>

          
          <h2 className={`text-xl md:text-2xl font-semibold text-center mb-6 ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            Próximos Eventos
          </h2>
          
          <div className="w-full mb-6">
            <div className="relative max-w-md mx-auto">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`} />
                <input
                  type="text"
                  placeholder="Buscar eventos, artistas, categorías..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] focus:ring-1 focus:ring-[#864e94] transition-colors ${
                    isDark 
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                />
                {searchTerm && (
                  <button
                    onClick={() => handleSearchChange("")}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors ${
                      isDark 
                        ? "text-gray-400 hover:text-white" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              {searchTerm && (
                <div className={`mt-2 text-sm text-center ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {filteredEvents.length} evento{filteredEvents.length !== 1 ? 's' : ''} encontrado{filteredEvents.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          </div>

          {/* Events List */}
          <EventList
            events={transformedEvents}
            artistImage={municipalityImage}
            artistName={municipality.name}
            municipalityImage={needsSpecialImage ? municipalityImage : undefined}
          />

          {/* Pagination - Solo mostrar si hay más de 10 eventos */}
          {filteredEvents.length > 10 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}

          {/* Categories Summary */}
          <div className={`mt-8 p-4 rounded-lg border ${
            isDark 
              ? "bg-gray-900 border-gray-700" 
              : "bg-gray-100 border-gray-300"
          }`}>
            <h3 className={`text-lg font-semibold mb-3 text-center ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
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

