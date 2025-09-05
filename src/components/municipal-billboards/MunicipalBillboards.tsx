"use client";

import { ArrowLeft, Signal, Wifi, Battery, Search, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FestivalBackground from "../festival/FestivalBackground";
import { useTheme } from "@/contexts/ThemeContext";
import { Listbox, Transition } from "@headlessui/react";

// Importar todos los datos de municipios
import { victoriaFestivalInfo } from "@/constants/Municipios/victoriaData";
import { matamorosFestivalInfo } from "@/constants/Municipios/matamorosData";
import { tampicoFestivalInfo } from "@/constants/Municipios/tampicoData";
import { reynosaFestivalInfo } from "@/constants/Municipios/reynosaData";
import { nuevoLaredoFestivalInfo } from "@/constants/Municipios/nvData";
import { altamiraFestivalInfo } from "@/constants/Municipios/altamiraData";
import { camargoFestivalInfo } from "@/constants/Municipios/camargoData";
import { manteFestivalInfo } from "@/constants/Municipios/manteData";
import { sanFernandoFestivalInfo } from "@/constants/Municipios/sanFernandoData";
import { valleHermosoFestivalInfo } from "@/constants/Municipios/valleHermosoData";
import { rioBravoFestivalInfo } from "@/constants/Municipios/rioBravoData";
import { miguelAlemanFestivalInfo } from "@/constants/Municipios/miguelAlemanData";
import { gonzalezFestivalInfo } from "@/constants/Municipios/gonzalezData";
import { xicotencatlFestivalInfo } from "@/constants/Municipios/xicotencatlData";
import { lleraFestivalInfo } from "@/constants/Municipios/lleraData";
import { jaumaveFestivalInfo } from "@/constants/Municipios/jaumaveData";
import { palmillasFestivalInfo } from "@/constants/Municipios/palmillasData";
import { maineroFestivalInfo } from "@/constants/Municipios/maineroData";
import { villagranFestivalInfo } from "@/constants/Municipios/villagranData";
import { bustamanteFestivalInfo } from "@/constants/Municipios/bustamanteData";
import { miquihuanaFestivalInfo } from "@/constants/Municipios/miquihuanaData";
import { tulaFestivalInfo } from "@/constants/Municipios/tulaData";
import { ocampoFestivalInfo } from "@/constants/Municipios/ocampoData";
import { nuevoMorelosFestivalInfo } from "@/constants/Municipios/nuevoMorelosData";
import { antiguoMorelosFestivalInfo } from "@/constants/Municipios/antiguoMorelosData";
import { casasFestivalInfo } from "@/constants/Municipios/casasData";
import { gomezFariasFestivalInfo } from "@/constants/Municipios/gomezFariasData";
import { guerreroFestivalInfo } from "@/constants/Municipios/guerreroData";
import { guemezFestivalInfo } from "@/constants/Municipios/guemezData";
import { hidalgoFestivalInfo } from "@/constants/Municipios/hidalgoData";
import { jimenezFestivalInfo } from "@/constants/Municipios/jimenezData";
import { maderoFestivalInfo } from "@/constants/Municipios/maderoData";
import { mendezFestivalInfo } from "@/constants/Municipios/mendezData";
import { mierFestivalInfo } from "@/constants/Municipios/mierData";
import { padillaFestivalInfo } from "@/constants/Municipios/padillaData";
import { sanCarlosFestivalInfo } from "@/constants/Municipios/sanCarlosData";
import { sanNicolasFestivalInfo } from "@/constants/Municipios/sanNicolasData";
import { sotoLaMarinaFestivalInfo } from "@/constants/Municipios/sotoLaMarinaData";
import { abasoloFestivalInfo } from "@/constants/Municipios/abasoloData";
import { aldamaFestivalInfo } from "@/constants/Municipios/aldamaData";
import { burgosFestivalInfo } from "@/constants/Municipios/burgosData";
import { gustavoDiazOrdazFestivalInfo } from "@/constants/Municipios/gustavoDiazOrdazData";

export default function MunicipalBillboards() {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [sortBy, setSortBy] = useState("name"); // "name" o "events"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Todos los municipios disponibles
  const allMunicipalFestivals = [
    victoriaFestivalInfo,
    matamorosFestivalInfo,
    tampicoFestivalInfo,
    reynosaFestivalInfo,
    nuevoLaredoFestivalInfo,
    altamiraFestivalInfo,
    camargoFestivalInfo,
    manteFestivalInfo,
    sanFernandoFestivalInfo,
    valleHermosoFestivalInfo,
    rioBravoFestivalInfo,
    miguelAlemanFestivalInfo,
    gonzalezFestivalInfo,
    xicotencatlFestivalInfo,
    lleraFestivalInfo,
    jaumaveFestivalInfo,
    palmillasFestivalInfo,
    maineroFestivalInfo,
    villagranFestivalInfo,
    bustamanteFestivalInfo,
    miquihuanaFestivalInfo,
    tulaFestivalInfo,
    ocampoFestivalInfo,
    nuevoMorelosFestivalInfo,
    antiguoMorelosFestivalInfo,
    casasFestivalInfo,
    gomezFariasFestivalInfo,
    guerreroFestivalInfo,
    guemezFestivalInfo,
    hidalgoFestivalInfo,
    jimenezFestivalInfo,
    maderoFestivalInfo,
    mendezFestivalInfo,
    mierFestivalInfo,
    padillaFestivalInfo,
    sanCarlosFestivalInfo,
    sanNicolasFestivalInfo,
    sotoLaMarinaFestivalInfo,
    abasoloFestivalInfo,
    aldamaFestivalInfo,
    burgosFestivalInfo,
    gustavoDiazOrdazFestivalInfo
  ];

  // Mapeo de imágenes para municipios
  const municipalImages: { [key: string]: string } = {
    "Festival del Municipio Victoria": "/images/victoria-festival.jpg",
    "Festival del Municipio Matamoros": "/images/matamoros-festival.jpg",
    "Festival del Municipio Tampico": "/images/tampico-festival.jpg",
    "Festival del Municipio Reynosa": "/images/reynosa-festival.jpg",
    "Festival del Municipio Nuevo Laredo": "/images/nuevo-laredo-festival.jpg",
    "Festival del Municipio Altamira": "/images/altamira-festival.jpg",
    "Festival del Municipio Camargo": "/images/camargo-festival.jpg",
    "Festival del Municipio Mante": "/images/mante-festival.jpg",
    "Festival del Municipio San Fernando": "/images/san-fernando-festival.jpg",
    "Festival del Municipio Valle Hermoso": "/images/valle-hermoso-festival.jpg",
    "Festival del Municipio Río Bravo": "/images/rio-bravo-festival.jpg",
    "Festival del Municipio Miguel Alemán": "/images/miguel-aleman-festival.jpg",
    "Festival del Municipio González": "/images/gonzalez-festival.jpg",
    "Festival del Municipio Xicoténcatl": "/images/xicotencatl-festival.jpg",
    "Festival del Municipio Llera": "/images/llera-festival.jpg",
    "Festival del Municipio Jaumave": "/images/jaumave-festival.jpg",
    "Festival del Municipio Palmillas": "/images/palmillas-festival.jpg",
    "Festival del Municipio Mainero": "/images/mainero-festival.jpg",
    "Festival del Municipio Villagrán": "/images/villagran-festival.jpg",
    "Festival del Municipio Bustamante": "/images/bustamante-festival.jpg",
    "Festival del Municipio Miquihuana": "/images/miquihuana-festival.jpg",
    "Festival del Municipio Tula": "/images/tula-festival.jpg",
    "Festival del Municipio Ocampo": "/images/ocampo-festival.jpg",
    "Festival del Municipio Nuevo Morelos": "/images/nuevo-morelos-festival.jpg",
    "Festival del Municipio Antiguo Morelos": "/images/antiguo-morelos-festival.jpg",
    "Festival del Municipio Casas": "/images/casas-festival.jpg",
    "Festival del Municipio Gómez Farías": "/images/gomez-farias-festival.jpg",
    "Festival del Municipio Guerrero": "/images/guerrero-festival.jpg",
    "Festival del Municipio Güémez": "/images/guemez-festival.jpg",
    "Festival del Municipio Hidalgo": "/images/hidalgo-festival.jpg",
    "Festival del Municipio Jiménez": "/images/jimenez-festival.jpg",
    "Festival del Municipio Madero": "/images/madero-festival.jpg",
    "Festival del Municipio Méndez": "/images/mendez-festival.jpg",
    "Festival del Municipio Mier": "/images/mier-festival.jpg",
    "Festival del Municipio Padilla": "/images/padilla-festival.jpg",
    "Festival del Municipio San Carlos": "/images/san-carlos-festival.jpg",
    "Festival del Municipio San Nicolás": "/images/san-nicolas-festival.jpg",
    "Festival del Municipio Soto la Marina": "/images/soto-la-marina-festival.jpg",
    "Festival del Municipio Abasolo": "/images/abasolo-festival.jpg",
    "Festival del Municipio Aldama": "/images/aldama-festival.jpg",
    "Festival del Municipio Burgos": "/images/burgos-festival.jpg",
    "Festival del Municipio Gustavo Díaz Ordaz": "/images/gustavo-diaz-ordaz-festival.jpg"
  };

  // Opciones de ordenamiento
  const sortOptions = [
    { id: "name", name: "Ordenar A-Z" },
    { id: "events", name: "Más eventos" }
  ];

  // Obtener regiones únicas (simplificado para Tamaulipas)
  const regions = ["Norte", "Centro", "Sur", "Frontera"];
  
  // Opciones de regiones para el dropdown
  const regionOptions = [
    { id: "", name: "Todas las regiones" },
    ...regions.map(region => ({ id: region, name: region }))
  ];

  // Funciones de manejo
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  // Filtrar y ordenar municipios
  const filteredMunicipalities = allMunicipalFestivals
    .filter(municipality => {
      const municipalityName = municipality.name.replace("Festival del Municipio ", "");
      const matchesSearch = municipalityName.toLowerCase().includes(searchTerm.toLowerCase());
      // Por ahora, todos los municipios están en Tamaulipas, pero podríamos expandir esto
      const matchesRegion = !selectedRegion || true; // Simplificado
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        const nameA = a.name.replace("Festival del Municipio ", "");
        const nameB = b.name.replace("Festival del Municipio ", "");
        return nameA.localeCompare(nameB);
      } else if (sortBy === "events") {
        return (b.totalEvents || 0) - (a.totalEvents || 0);
      }
      return 0;
    });

  // Calcular paginación
  const totalPages = Math.ceil(filteredMunicipalities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMunicipalities = filteredMunicipalities.slice(startIndex, endIndex);

  // Obtener opciones seleccionadas
  const selectedRegionOption = regionOptions.find(option => option.id === selectedRegion) || regionOptions[0];
  const selectedSortOption = sortOptions.find(option => option.id === sortBy) || sortOptions[0];

  // Detectar el tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
          <Link 
            href="/festival"
            className={`flex items-center gap-2 transition-colors ${isDark ? 'text-white hover:text-[#864e94]' : 'text-gray-800 hover:text-[#864e94]'}`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium md:text-lg">Volver</span>
          </Link>
        </div>

        {/* Title */}
        <div className="px-4 md:px-6 mb-6">
          <h1 className={`text-3xl md:text-5xl font-bold text-center mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Carteleras de Municipios
          </h1>
          <p className={`text-center text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Descubre los festivales municipales de Tamaulipas
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
                placeholder="Buscar municipio..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white/90 border-gray-300 text-gray-800 placeholder-gray-500'}`}
              />
            </div>

            {/* Region Filter */}
            <Listbox value={selectedRegion} onChange={handleRegionChange}>
              <div className="relative min-w-[200px] md:min-w-[220px]">
                <Listbox.Button className={`relative w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] text-left ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white/90 border-gray-300 text-gray-800'}`}>
                  <span className="block truncate">{selectedRegionOption.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as="div"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <Listbox.Options
                    className={`absolute z-10 mt-1 w-full border rounded-lg shadow-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}
                  >
                    {regionOptions.map((option) => (
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
              <div className="relative min-w-[200px] md:min-w-[220px]">
                <Listbox.Button className={`relative w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#864e94] text-left ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white/90 border-gray-300 text-gray-800'}`}>
                  <span className="block truncate">{selectedSortOption.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as="div"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <Listbox.Options
                    className={`absolute z-10 mt-1 w-full border rounded-lg shadow-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}
                  >
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

        {/* Municipal Billboards List */}
        <div className="px-4 md:px-6 pb-6">
          <div className={`backdrop-blur-sm rounded-lg mx-2 overflow-hidden ${isDark ? 'bg-gray-900/80' : 'bg-white/90'}`}>
            {currentMunicipalities.map((municipality, index) => (
              <div key={municipality.name} className="w-full">
                <Link
                  href={`/municipio/${municipality.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace("festival-del-municipio-", "")}`}
                  className="block h-full"
                >
                  <div className={`flex items-center gap-4 p-4 min-h-[120px] md:min-h-[150px] transition-colors ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50'}`}>
                    {/* Municipality Image - Lado izquierdo */}
                    <div className="w-20 h-28 md:w-24 md:h-36 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={
                          municipalImages[municipality.name] ||
                          "/images/municipal-festival-placeholder.jpg"
                        }
                        alt={municipality.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Municipality Info - Lado derecho */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className={`font-bold text-lg md:text-xl mb-3 truncate ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {municipality.name.replace("Festival del Municipio ", "")}
                      </h3>
                      
                      <div className="space-y-2 text-sm">
                        <div className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="text-[#864e94] font-medium">Tamaulipas</span>
                        </div>
                        
                        <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          Festival Municipal
                        </div>

                        {/* Events Summary */}
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#864e94] text-sm font-medium">
                            {municipality.totalEvents} evento{municipality.totalEvents !== 1 ? 's' : ''}
                          </span>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            <span>
                              {municipality.startDate} - {municipality.endDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* Separador entre municipios */}
                {index < currentMunicipalities.length - 1 && (
                  <div className={`w-full h-px mx-4 ${isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'}`}></div>
                )}
              </div>
            ))}
          </div>

          {filteredMunicipalities.length === 0 && (
            <div className="text-center py-12">
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No se encontraron municipios</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedRegion("");
                  setSortBy("name");
                  setCurrentPage(1);
                }}
                className="mt-4 px-4 py-2 bg-[#864e94] text-white rounded-lg hover:bg-[#6d3d7a] transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : (isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white/90 text-gray-700 hover:bg-gray-100')
                }`}
              >
                Anterior
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'opacity-50 cursor-not-allowed'
                    : (isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white/90 text-gray-700 hover:bg-gray-100')
                }`}
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Información de paginación */}
          {filteredMunicipalities.length > 0 && (
            <div className={`text-center mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Mostrando {startIndex + 1}-{Math.min(endIndex, filteredMunicipalities.length)} de {filteredMunicipalities.length} municipios
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
}
