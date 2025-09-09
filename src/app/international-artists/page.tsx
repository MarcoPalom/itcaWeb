"use client"
import { useState } from "react"
import { ArrowLeft, Search, ChevronDown, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { internationalArtists } from "@/constants/internationalArtistData"
import { getArtistImage } from "@/constants/artistImages"
import FestivalBackground from "@/components/festival/FestivalBackground"
import FestivalLoading from "@/components/FestivalLoading"
import { useFestivalLoading } from "@/hooks/useFestivalLoading"
import { useMobileScrollFix } from "@/hooks/useMobileScrollFix"
import { useTheme } from "@/contexts/ThemeContext"
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from "@headlessui/react"
import Pagination from "@/components/Pagination"

export default function InternationalArtistsPage() {
  const { isDark } = useTheme()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2000
  })

  useMobileScrollFix()

  const sortOptions = [
    { id: "name", name: "Ordenar A-Z" },
    { id: "shows", name: "Más espectáculos" }
  ]

  const categories = [...new Set(internationalArtists.map(artist => artist.category))]

  const categoryOptions = [
    { id: "", name: "Todas las categorías" },
    ...categories.map(category => ({ id: category, name: category }))
  ]

  const filteredArtists = internationalArtists
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

  const totalPages = Math.ceil(filteredArtists.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentArtists = filteredArtists.slice(startIndex, endIndex)

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

  const selectedSortOption = sortOptions.find(option => option.id === sortBy) || sortOptions[0]
  const selectedCategoryOption = categoryOptions.find(option => option.id === selectedCategory) || categoryOptions[0]

  const getArtistImageForInternational = (artistName: string) => {
    return getArtistImage(artistName, 'international')
  }

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
      <div className={`min-h-screen w-full relative z-10 overflow-x-hidden ${isDark ? 'text-white' : 'text-gray-800'}`} style={{ WebkitOverflowScrolling: 'touch' }}>
 

        <div className="relative z-10" style={{ minHeight: '100vh', overflowY: 'auto' }}>
          <div className="flex items-center justify-between p-4 md:p-6">
            <button 
              onClick={() => router.back()}
              className={`flex items-center gap-2 transition-colors ${isDark ? 'text-white hover:text-[#864e94]' : 'text-gray-800 hover:text-[#864e94]'}`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium md:text-lg">Volver</span>
            </button>
          </div>

          <div className="px-4 md:px-6 mb-6">
            <h1 className={`text-3xl md:text-5xl font-bold text-center mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Artistas Internacionales
            </h1>
            <p className={`text-center text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Descubre el talento mundial en el Festival
            </p>
          </div>

          <div className="px-4 md:px-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
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

              <Listbox value={selectedCategory} onChange={handleCategoryChange}>
                <div className="relative min-w-[200px] md:min-w-[220px]">
                  <ListboxButton className={`relative w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] text-left ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white/90 border-gray-300 text-gray-800'}`}>
                    <span className="block truncate">{selectedCategoryOption.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" />
                    </span>
                  </ListboxButton>
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
                    <ListboxOptions className="max-h-60 overflow-auto rounded-lg py-1 dropdown-scrollbar">
                      {categoryOptions.map((option) => (
                        <ListboxOption
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
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>
              </Listbox>

              <Listbox value={sortBy} onChange={handleSortChange}>
                <div className="relative min-w-[180px] md:min-w-[200px]">
                  <ListboxButton className={`relative w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] text-left ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white/90 border-gray-300 text-gray-800'}`}>
                    <span className="block truncate">{selectedSortOption.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" />
                    </span>
                  </ListboxButton>
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
                    <ListboxOptions className="max-h-60 overflow-auto rounded-lg py-1 dropdown-scrollbar">
                      {sortOptions.map((option) => (
                        <ListboxOption
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
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div className="px-4 md:px-6 pb-6">
            <div className={`backdrop-blur-sm rounded-lg mx-2 overflow-hidden ${isDark ? 'bg-gray-900/80' : 'bg-white/90'}`}>
              {currentArtists.map((artist, index) => (
                <div key={artist.id} className="w-full">
                  <Link
                    href={`/artist/${artist.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block h-full"
                  >
                    <div className={`flex items-center gap-4 p-4 min-h-[120px] md:min-h-[150px] transition-colors ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50'}`}>
                      <div className="w-20 h-28 md:w-24 md:h-36 flex-shrink-0 rounded-lg overflow-hidden relative">
                        <Image
                          src={getArtistImageForInternational(artist.name)}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>

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

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

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
