"use client"

import { useState } from "react"
import { Card, Input, Badge, Button } from "antd"
import { MapPin, User, Search, Calendar, Star, Palette, Camera, Hammer, Sparkles } from "lucide-react"
import Image from "next/image"
import CarteleraModal from "./CarteleraModal"
import ArtistaModal from "./ArtistaModal"

const { Meta } = Card

// Datos de los 43 municipios de Tamaulipas
const municipios = [
  { id: 1, nombre: "Abasolo", artistas: 3, eventos: 5 },
  { id: 2, nombre: "Aldama", artistas: 2, eventos: 3 },
  { id: 3, nombre: "Altamira", artistas: 8, eventos: 12 },
  { id: 4, nombre: "Antiguo Morelos", artistas: 1, eventos: 2 },
  { id: 5, nombre: "Burgos", artistas: 2, eventos: 4 },
  { id: 6, nombre: "Bustamante", artistas: 1, eventos: 2 },
  { id: 7, nombre: "Camargo", artistas: 4, eventos: 6 },
  { id: 8, nombre: "Casas", artistas: 1, eventos: 1 },
  { id: 9, nombre: "Ciudad Madero", artistas: 12, eventos: 18 },
  { id: 10, nombre: "Cruillas", artistas: 2, eventos: 3 },
  { id: 11, nombre: "El Mante", artistas: 6, eventos: 9 },
  { id: 12, nombre: "Gómez Farías", artistas: 3, eventos: 5 },
  { id: 13, nombre: "González", artistas: 2, eventos: 4 },
  { id: 14, nombre: "Güémez", artistas: 2, eventos: 3 },
  { id: 15, nombre: "Guerrero", artistas: 1, eventos: 2 },
  { id: 16, nombre: "Gustavo Díaz Ordaz", artistas: 2, eventos: 3 },
  { id: 17, nombre: "Hidalgo", artistas: 3, eventos: 5 },
  { id: 18, nombre: "Jaumave", artistas: 2, eventos: 4 },
  { id: 19, nombre: "Jiménez", artistas: 1, eventos: 2 },
  { id: 20, nombre: "Llera", artistas: 2, eventos: 3 },
  { id: 21, nombre: "Mainero", artistas: 1, eventos: 1 },
  { id: 22, nombre: "Matamoros", artistas: 15, eventos: 22 },
  { id: 23, nombre: "Méndez", artistas: 1, eventos: 2 },
  { id: 24, nombre: "Mier", artistas: 2, eventos: 3 },
  { id: 25, nombre: "Miguel Alemán", artistas: 3, eventos: 5 },
  { id: 26, nombre: "Miquihuana", artistas: 1, eventos: 2 },
  { id: 27, nombre: "Nuevo Laredo", artistas: 18, eventos: 25 },
  { id: 28, nombre: "Nuevo Morelos", artistas: 1, eventos: 2 },
  { id: 29, nombre: "Ocampo", artistas: 2, eventos: 3 },
  { id: 30, nombre: "Padilla", artistas: 2, eventos: 4 },
  { id: 31, nombre: "Palmillas", artistas: 1, eventos: 1 },
  { id: 32, nombre: "Reynosa", artistas: 20, eventos: 28 },
  { id: 33, nombre: "Río Bravo", artistas: 7, eventos: 10 },
  { id: 34, nombre: "San Carlos", artistas: 1, eventos: 2 },
  { id: 35, nombre: "San Fernando", artistas: 4, eventos: 6 },
  { id: 36, nombre: "San Nicolás", artistas: 1, eventos: 2 },
  { id: 37, nombre: "Soto la Marina", artistas: 2, eventos: 4 },
  { id: 38, nombre: "Tampico", artistas: 25, eventos: 35 },
  { id: 39, nombre: "Tula", artistas: 3, eventos: 5 },
  { id: 40, nombre: "Valle Hermoso", artistas: 5, eventos: 8 },
  { id: 41, nombre: "Victoria", artistas: 22, eventos: 30 },
  { id: 42, nombre: "Villagrán", artistas: 2, eventos: 3 },
  { id: 43, nombre: "Xicoténcatl", artistas: 2, eventos: 4 },
]

// Datos de artistas
const artistas = [
  {
    id: 1,
    nombre: "María González",
    municipio: "Tampico",
    especialidad: "Pintura",
    obras: 12,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Artista especializada en paisajes urbanos y retratos contemporáneos con técnicas mixtas",
    rating: 4.8,
  },
  {
    id: 2,
    nombre: "Carlos Hernández",
    municipio: "Victoria",
    especialidad: "Escultura",
    obras: 8,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Escultor que trabaja con materiales reciclados y arte sustentable innovador",
    rating: 4.6,
  },
  {
    id: 3,
    nombre: "Ana Rodríguez",
    municipio: "Reynosa",
    especialidad: "Arte Digital",
    obras: 15,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Pionera en arte digital y realidad aumentada en la región fronteriza",
    rating: 4.9,
  },
  {
    id: 4,
    nombre: "Luis Martínez",
    municipio: "Matamoros",
    especialidad: "Fotografía",
    obras: 20,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Fotógrafo documental enfocado en la cultura fronteriza y tradiciones",
    rating: 4.7,
  },
  {
    id: 5,
    nombre: "Elena Vásquez",
    municipio: "Nuevo Laredo",
    especialidad: "Cerámica",
    obras: 10,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Ceramista que fusiona técnicas tradicionales con diseños modernos únicos",
    rating: 4.5,
  },
  {
    id: 6,
    nombre: "Roberto Silva",
    municipio: "Ciudad Madero",
    especialidad: "Muralismo",
    obras: 6,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Muralista que retrata la historia industrial de Tamaulipas con gran detalle",
    rating: 4.8,
  },
]

const getSpecialtyIcon = (specialty: string) => {
  switch (specialty.toLowerCase()) {
    case "pintura":
      return <Palette className="w-4 h-4" />
    case "fotografía":
      return <Camera className="w-4 h-4" />
    case "escultura":
      return <Hammer className="w-4 h-4" />
    default:
      return <Sparkles className="w-4 h-4" />
  }
}

// Mock de eventos por municipio
const eventosPorMunicipio: Record<string, any[]> = {
  "Abasolo": [
    { fecha: "SÁBADO", dia: "26", titulo: "Regina Orozco (Soprano)", artista: "Ricardo Rodríguez (Tenor)", categoria: "Música", hora: "19:00 hrs", sede: "Teatro Municipal" },
    { fecha: "DOMINGO", dia: "27", titulo: "Ballet de Monterrey", artista: "Romeo y Julieta", categoria: "Danza", hora: "20:00 hrs", sede: "Teatro Municipal" },
  ],
  "Aldama": [
    { fecha: "LUNES", dia: "28", titulo: "Mateo Hurtado", artista: "Concierto a piano", categoria: "Música", hora: "19:00 hrs", sede: "Casa de la Cultura" },
  ],
  // ...otros municipios
}

// Mock de cartelera de eventos por artista
const eventosPorArtista: Record<string, any[]> = {
  "María González": [
    { fecha: "VIERNES", dia: "27", titulo: "Exposición Paisajes Urbanos", categoria: "Pintura", hora: "18:00 hrs", sede: "Galería Central" },
    { fecha: "DOMINGO", dia: "29", titulo: "Taller de Técnicas Mixtas", categoria: "Taller", hora: "12:00 hrs", sede: "Casa de la Cultura" },
  ],
  "Carlos Hernández": [
    { fecha: "SÁBADO", dia: "28", titulo: "Escultura Sustentable", categoria: "Escultura", hora: "17:00 hrs", sede: "Parque Escultórico" },
  ],
  // ...otros artistas
}

const fotosMock = [
  "/public/cerro.jpg",
  "/public/casa.jpg",
  "/public/cerro1.jpg",
  "/public/Flor-de-Cempasuchil.png",
]

export default function FestivalArte() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMunicipio, setSelectedMunicipio] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'municipios' | 'artistas'>('municipios')
  const [selectedArtista, setSelectedArtista] = useState<any | null>(null)

  const filteredMunicipios = municipios.filter((municipio) =>
    municipio.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredArtistas = artistas.filter(
    (artista) =>
      artista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artista.municipio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artista.especialidad.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #a8ff78 0%, #faffd1 50%, #ffe066 100%)",
      }}
    >
      {/* Header moderno con glassmorphism */}
      <header
        className="sticky top-0 z-50 shadow-lg"
        style={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.3)",
        }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc)",
                  }}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  }}
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1
                  className="text-3xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Festival Internacional
                </h1>
                <p className="text-lg font-medium text-gray-600">Costa del Seno Mexicano</p>
                <p className="text-sm text-gray-500">43 municipios de Tamaulipas</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 rounded-full px-4 py-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
              }}
            >
              <Calendar className="w-5 h-5 text-purple-600" />
              <span className="text-lg font-bold text-gray-800">2024</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Toggle y buscador compactos en una sola fila */}
        <div className="flex items-center justify-between mb-6 gap-2 w-full">
          {/* Toggle manual */}
          <div className="flex space-x-2 bg-white/70 rounded-xl p-1 border border-green-100">
            <button
              className={`px-4 py-1 rounded-lg font-medium transition-colors ${activeTab === 'municipios' ? 'bg-green-400 text-white shadow' : 'text-green-700 hover:bg-green-100'}`}
              onClick={() => setActiveTab('municipios')}
            >
              Municipios
            </button>
            <button
              className={`px-4 py-1 rounded-lg font-medium transition-colors ${activeTab === 'artistas' ? 'bg-green-400 text-white shadow' : 'text-green-700 hover:bg-green-100'}`}
              onClick={() => setActiveTab('artistas')}
            >
              Artistas
            </button>
          </div>
          <div className="relative" style={{ minWidth: 220, maxWidth: 320, width: '100%' }}>
            <Input
              size="small"
              placeholder="Buscar..."
              prefix={<Search className="text-gray-400 w-4 h-4" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                border: "1px solid #d9f99d",
                fontSize: "15px",
                padding: "6px 12px 6px 32px",
                borderRadius: 12,
              }}
              className="shadow-sm"
            />
          </div>
        </div>

        {/* Grids controlados manualmente por tab */}
        {activeTab === 'municipios' && (
          <>
            <div style={{ maxHeight: 'calc(100vh - 104px - 64px - 24px)', overflowY: 'auto', paddingRight: 8, paddingBottom: 24 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMunicipios.map((municipio) => (
                  <Card
                    key={municipio.id}
                    hoverable
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{
                      height: "192px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                    }}
                    bodyStyle={{
                      padding: "16px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onClick={() => setSelectedMunicipio(municipio.nombre)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {municipio.nombre}
                        </h3>
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: "linear-gradient(135deg, #a855f7, #8b5cf6)",
                          }}
                        ></div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="p-1.5 bg-purple-100 rounded-lg">
                            <User className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{municipio.artistas} artistas</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="p-1.5 bg-fuchsia-100 rounded-lg">
                            <Calendar className="w-4 h-4 text-fuchsia-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{municipio.eventos} eventos</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Participación</span>
                        <span>{Math.min((municipio.artistas / 25) * 100, 100).toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-purple-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full transition-all duration-700 ease-out"
                          style={{
                            background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                            width: `${Math.min((municipio.artistas / 25) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <CarteleraModal
              municipio={selectedMunicipio}
              eventos={selectedMunicipio ? (eventosPorMunicipio[selectedMunicipio] || []) : []}
              onClose={() => setSelectedMunicipio(null)}
            />
          </>
        )}
        {activeTab === 'artistas' && (
          <>
            <div style={{ maxHeight: 'calc(100vh - 104px - 64px - 24px)', overflowY: 'auto', paddingRight: 8, paddingBottom: 24 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtistas.map((artista) => (
                  <Card
                    key={artista.id}
                    hoverable
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{
                      height: "320px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                    }}
                    bodyStyle={{ padding: 0 }}
                    cover={
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={artista.imagen || "/placeholder.svg"}
                          alt={artista.nombre}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                          }}
                        ></div>
                        <div className="absolute top-3 right-3">
                          <Badge
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.9)",
                              color: "#7c3aed",
                              border: "none",
                              fontWeight: 500,
                            }}
                          >
                            <div className="flex items-center space-x-1">
                              {getSpecialtyIcon(artista.especialidad)}
                              <span>{artista.especialidad}</span>
                            </div>
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(artista.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-white text-xs font-medium ml-1">{artista.rating}</span>
                        </div>
                      </div>
                    }
                    onClick={() => setSelectedArtista(artista)}
                  >
                    <div style={{ padding: "16px" }}>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                        {artista.nombre}
                      </h3>
                      <div className="flex items-center space-x-2 text-purple-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{artista.municipio}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">{artista.descripcion}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="p-1.5 bg-yellow-100 rounded-lg">
                            <Star className="w-4 h-4 text-yellow-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{artista.obras} obras</span>
                        </div>
                        <Button
                          type="primary"
                          size="small"
                          className="rounded-xl font-medium"
                          style={{
                            background: "linear-gradient(135deg, #a855f7, #c084fc)",
                            border: "none",
                          }}
                        >
                          Ver Obras
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <ArtistaModal
              artista={selectedArtista}
              eventos={selectedArtista ? (eventosPorArtista[selectedArtista.nombre] || []) : []}
              onClose={() => setSelectedArtista(null)}
            />
          </>
        )}
      </div>
    </div>
  )
}
