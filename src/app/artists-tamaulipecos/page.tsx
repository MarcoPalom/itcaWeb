"use client"
import { useState } from "react"
import { ArrowLeft, Signal, Wifi, Battery, Search, ChevronDown, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { tamaulipecosArtists } from "@/constants/tamaulipecosArtistData"
import FestivalBackground from "@/components/festival/FestivalBackground"
import FestivalLoading from "@/components/FestivalLoading"
import { useFestivalLoading } from "@/hooks/useFestivalLoading"
import { useTheme } from "@/contexts/ThemeContext"
import { Listbox, Transition } from "@headlessui/react"

export default function ArtistsTamaulipecosPage() {
  const { isDark } = useTheme()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("name") // "name" o "shows"
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Festival Loading
  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2000,
    onComplete: () => {
      console.log("Artistas Tamaulipecos cargados")
    }
  })

  // Opciones de ordenamiento
  const sortOptions = [
    { id: "name", name: "Ordenar A-Z" },
    { id: "shows", name: "Más espectáculos" }
  ]

  // Obtener categorías únicas
  const categories = [...new Set(tamaulipecosArtists.map(artist => artist.category))]
  
  // Opciones de categorías para el dropdown
  const categoryOptions = [
    { id: "", name: "Todas las categorías" },
    ...categories.map(category => ({ id: category, name: category }))
  ]

  // Filtrar y ordenar artistas
  const filteredArtists = tamaulipecosArtists
    .filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artist.origin.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || artist.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
      } else if (sortBy === "shows") {
        return (b.events?.length || 0) - (a.events?.length || 0)
      }
      return 0
    })

  // Calcular paginación
  const totalPages = Math.ceil(filteredArtists.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentArtists = filteredArtists.slice(startIndex, endIndex)

  // Resetear página cuando cambien los filtros
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setCurrentPage(1)
  }

  // Obtener la opción seleccionada para el sort
  const selectedSortOption = sortOptions.find(option => option.id === sortBy) || sortOptions[0]
  
  // Obtener la opción seleccionada para la categoría
  const selectedCategoryOption = categoryOptions.find(option => option.id === selectedCategory) || categoryOptions[0]

  // Mapeo de imágenes para artistas tamaulipecos
  const artistImages: { [key: string]: string } = {
    // Agregar imágenes específicas para artistas tamaulipecos cuando estén disponibles
    "Polvo Enamorado": "/images/estatal_artists/polvo.jpg",
    "Camerata del Colegio \"San Juan Siglo XXI\"": "/images/estatal_artists/camereta.jpg",
    "Afrodescendencia Matamoros": "/images/estatal_artists/afro.jpg",
    "DOSCE La Compañía": "/images/estatal_artists/dosce.jpg",
    "Raíces Huastecas": "/images/img_0.png",
    "En Boca Ensamble": "/images/estatal_artists/ensamble.jpg",
    "Soraima y sus Huastecos": "/images/img_1.png",
    "Colectivo teatro de bolsillo": "/images/estatal_artists/bolsillo.jpg",
    "Warislov": "/images/estatal_artists/warislov.jpg",
    "Aglaé Salinas": "/images/img_2.png",
    "Cirko Frontera": "/images/estatal_artists/cirko.jpg",
    "Los Valdés Ska": "/images/estatal_artists/valdes.jpg",
    "El Contrato": "/images/estatal_artists/contrato.jpg",
    "Banda Sinfónica Municipal de Reynosa \"Mtro. Elías Valenzuela\"": "/images/estatal_artists/sinfonica.jpg",
    "La Nota Alegre": "/images/estatal_artists/nota.jpg",
    "Los del Pueblo": "/images/estatal_artists/delpueblo.jpg",
    "Amenaza Norteña": "/images/estatal_artists/amenaza.jpg",
    "Kani Ensamble Coral": "/images/img_0.png",
    "Son Kndla": "/images/img_1.png",
    "Cirque erös": "/images/img_2.png",
    "Grupo espejos taller de teatro y pantomima": "/images/img_0.png",
    "Tradición Genuina": "/images/img_1.png",
    "Roberto Cuentacuentos": "/images/img_2.png",
    "Grupo Pendiente": "/images/img_0.png",
    "Érase una vez dos veces": "/images/img_1.png",
    "Trío UATsteco": "/images/img_2.png",
    "Quinteto de Alientos UAT": "/images/img_0.png",
    "Trío Bohemia UAT": "/images/img_1.png",
    "Teatro Guarapo": "/images/img_2.png",
    "José Palacios": "/images/img_0.png",
    "MFOX La Puerta del Talento": "/images/img_1.png",
    "Rockpango": "/images/img_2.png",
    "Norteños de Río Bravo": "/images/img_0.png",
    "Grupo de danza Anacahuitas": "/images/img_1.png",
    "Grupo Relativo": "/images/img_2.png",
    "Bocatoma Jazz": "/images/img_0.png",
    "Grupo Folklórico Kauyumarie": "/images/img_1.png",
    "Brassas Mexican Beat": "/images/img_2.png",
    "Selección del Sistema Tamaulipeco de Agrupaciones Musicales Comunitarias": "/images/img_0.png",
    "Apapacho Teatro, arte y diversidad": "/images/img_1.png",
    "Colectivo Trueque": "/images/img_2.png",
    "Percutam Dúo": "/images/img_0.png",
    "Rondalla Magisterial de Tamaulipas": "/images/img_1.png",
    "Arael & Erihka Peña": "/images/img_2.png",
    "La Espuma de Mar": "/images/img_0.png",
    "Elgar, Diseño Musical": "/images/img_1.png",
    "Teatro ingenio – Creación": "/images/img_2.png",
    "Gato Negro": "/images/img_0.png",
    "Teatromorfosis": "/images/img_1.png",
    "Melissa Castellanos": "/images/img_2.png",
    "Esther Tovar": "/images/img_0.png",
    "Punto Exacto, El cuervo y Mr. Trash": "/images/img_1.png",
    "Adicto5": "/images/img_2.png",
    "Hijk & Alex del Ángel": "/images/img_0.png",
    "Serendipia Teatro": "/images/img_1.png",
    "Feminoflexia": "/images/img_2.png",
    "Jimmy Yunes": "/images/img_0.png",
    "Marching Band COBAT 15": "/images/img_1.png",
    "Orquesta Sinfónica Comunitaria de Tampico": "/images/img_2.png",
    "Ensamble de Mujeres \"María Bonita\"": "/images/img_0.png",
    "Lobos teatro": "/images/img_1.png",
    "Paquidermo Artes Escénicas": "/images/img_2.png",
    "Festival de Huapango": "/images/img_0.png",
    "Internacional Orquesta de Tampico": "/images/img_1.png",
    "Aldebarán Acústico": "/images/img_2.png",
    "Grupo Honda Nor-T": "/images/img_0.png"
  }

  const getArtistImage = (artistName: string) => {
    return artistImages[artistName] || "/images/img_0.png"
  }

  // Show loading screen
  if (isLoading) {
    return (
      <FestivalLoading 
        message={message}
        showProgress={true}
        progress={progress}
      />
    )
  }

  return (
    <>
      <FestivalBackground />
      <div className={`min-h-screen w-full relative z-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {/* Status Bar - Solo visible en móvil */}
        <div className="flex items-center justify-between px-4 py-2 text-xs md:hidden">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <button 
            onClick={() => router.back()}
            className={`flex items-center gap-2 transition-colors ${isDark ? 'text-white hover:text-[#864e94]' : 'text-gray-800 hover:text-[#864e94]'}`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium md:text-lg">Volver</span>
          </button>
        </div>

        {/* Title */}
        <div className="px-4 md:px-6 mb-6">
          <h1 className={`text-3xl md:text-5xl font-bold text-center mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Artistas Tamaulipecos
          </h1>
          <p className={`text-center text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Descubre el talento tamaulipeco en el Festival
          </p>
        </div>

        {/* Search and Filters */}
        <div className="px-4 md:px-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Buscar artista..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white/90 border-gray-300 text-gray-800 placeholder-gray-500'}`}
              />
            </div>

            {/* Category Filter */}
            <Listbox value={selectedCategory} onChange={handleCategoryChange}>
              <div className="relative min-w-[200px] md:min-w-[220px]">
                <Listbox.Button className={`relative w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] text-left ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white/90 border-gray-300 text-gray-800'}`}>
                  <span className="block truncate">{selectedCategoryOption.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as="div"
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  className={`absolute z-10 mt-1 w-full border rounded-lg shadow-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}
                >
                  <Listbox.Options className="max-h-60 overflow-auto rounded-lg py-1 dropdown-scrollbar">
                    {categoryOptions.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        value={option.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-[#864e94] text-white' : (isDark ? 'text-gray-300' : 'text-gray-700')
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {option.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#864e94]">
                                <Check className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            {/* Sort Filter */}
            <Listbox value={sortBy} onChange={handleSortChange}>
              <div className="relative min-w-[180px] md:min-w-[200px]">
                <Listbox.Button className={`relative w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] text-left ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white/90 border-gray-300 text-gray-800'}`}>
                  <span className="block truncate">{selectedSortOption.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as="div"
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  className={`absolute z-10 mt-1 w-full border rounded-lg shadow-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}
                >
                  <Listbox.Options className="max-h-60 overflow-auto rounded-lg py-1 dropdown-scrollbar">
                    {sortOptions.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        value={option.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-[#864e94] text-white' : (isDark ? 'text-gray-300' : 'text-gray-700')
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {option.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#864e94]">
                                <Check className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        {/* Artists List */}
        <div className="px-4 md:px-6 pb-6">
          <div className={`backdrop-blur-sm rounded-lg mx-2 overflow-hidden ${isDark ? 'bg-gray-900/80' : 'bg-white/90'}`}>
            {currentArtists.map((artist, index) => (
              <div key={artist.id} className="w-full">
                <Link
                  href={`/artist/${artist.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block h-full"
                >
                  <div className={`flex items-center gap-4 p-4 min-h-[120px] md:min-h-[150px] transition-colors ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50'}`}>
                  {/* Artist Image - Lado izquierdo */}
                  <div className="w-20 h-28 md:w-24 md:h-36 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={getArtistImage(artist.name)}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Artist Info - Lado derecho */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className={`font-bold text-lg md:text-xl mb-3 truncate ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {artist.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="text-[#864e94] font-medium">{artist.origin}</span>
                      </div>
                      
                      <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {artist.category}
                        {artist.subcategory && (
                          <span className={`block text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{artist.subcategory}</span>
                        )}
                      </div>

                      {/* Events Summary */}
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[#864e94] text-sm font-medium">
                          {artist.events.length} evento{artist.events.length !== 1 ? 's' : ''}
                        </span>
                        <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
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
                </Link>
                {/* Separador entre artistas */}
                {index < currentArtists.length - 1 && (
                  <div className={`w-full h-px mx-4 ${isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'}`}></div>
                )}
              </div>
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-12">
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No se encontraron artistas</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                  setSortBy("name")
                  setCurrentPage(1)
                }}
                className="text-[#864e94] hover:underline mt-2"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-[#864e94] text-white'
                        : (isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white/90 text-gray-700 hover:bg-gray-100')
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Información de paginación */}
          {filteredArtists.length > 0 && (
            <div className={`text-center mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Mostrando {startIndex + 1}-{Math.min(endIndex, filteredArtists.length)} de {filteredArtists.length} artistas
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  )
}
