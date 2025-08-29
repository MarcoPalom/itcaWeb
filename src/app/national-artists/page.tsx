"use client"
import { useState } from "react"
import { ArrowLeft, Signal, Wifi, Battery, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { nationalArtists } from "@/constants/nationalArtistData"
import ArtistListCard from "@/components/artist/ArtistListCard"

export default function NationalArtistsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  // Obtener categorías únicas
  const categories = [...new Set(nationalArtists.map(artist => artist.category))]

  // Filtrar artistas
  const filteredArtists = nationalArtists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.origin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || artist.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Mapeo de imágenes para artistas nacionales
  const artistImages: { [key: string]: string } = {
    "María Katzarava": "/images/national_artists/maria_katza.jpg",
    "Centro de Producción de Danza Contemporánea (CEPRODAC)": "/images/national_artists/ceprodac1.jpg",
    "Grupo La Trenza": "/images/national_artists/latrenza.jpg",
    "Grupo Tayer": "/images/national_artists/grupo_tayer.jpg",
    "La Percha Teatro": "/images/national_artists/la_percha.jpg"
  }

  const getArtistImage = (artistName: string) => {
    return artistImages[artistName] || "/images/img_0.png"
  }

  const navigateToArtist = (artistName: string) => {
    const slug = artistName.toLowerCase().replace(/\s+/g, '-')
    router.push(`/artist/${slug}`)
  }

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
        <img
          src="/fondo-hero-fest.jpg"
          alt="Background"
          className="w-full h-full object-cover filter grayscale blur-sm opacity-20"
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

        {/* Title */}
        <div className="px-4 md:px-6 mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-2">
            Artistas Nacionales
          </h1>
          <p className="text-gray-300 text-center text-sm md:text-base">
            Descubre el talento mexicano en el Festival
          </p>
        </div>

        {/* Search and Filters */}
        <div className="px-4 md:px-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar artista..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Artists List */}
        <div className="px-4 md:px-6 pb-6">
          <div className="space-y-0">
            {filteredArtists.map((artist, index) => (
              <ArtistListCard
                key={artist.id}
                artist={artist}
                imageSrc={getArtistImage(artist.name)}
                isLast={index === filteredArtists.length - 1}
              />
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No se encontraron artistas</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                }}
                className="text-yellow-500 hover:underline mt-2"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
