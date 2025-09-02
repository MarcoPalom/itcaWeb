"use client";

import { ArrowLeft, Signal, Wifi, Battery } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FestivalBackground from "../festival/FestivalBackground";

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
  const [isMobile, setIsMobile] = useState(false);

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
      <div className="min-h-screen text-white w-full relative z-10">
        {/* Status Bar - Solo visible en móvil */}
        <div className="flex items-center justify-between px-4 py-2 text-xs md:hidden">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-2">
            <Link href="/festival">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="text-sm font-medium md:text-lg">Carteleras de Municipios</span>
          </div>
          <div className="flex gap-1 md:hidden">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Municipal Billboards Grid */}
        <div className="px-4 pb-6 md:px-6 md:pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {allMunicipalFestivals.map((municipality, index) => (
              <motion.div
                key={index}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/municipio/${municipality.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace("festival-del-municipio-", "")}`}
                  className="block h-full"
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl h-48 md:h-56 relative group">
                    <img
                      src={
                        municipalImages[municipality.name] ||
                        "/images/municipal-festival-placeholder.jpg"
                      }
                      alt={municipality.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Label en la parte inferior */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm p-2">
                      <h3 className="font-semibold text-white text-sm leading-tight">
                        {municipality.name.replace("Festival del Municipio ", "")}
                      </h3>
                      <p className="text-gray-300 text-xs">
                        {municipality.totalEvents} eventos
                      </p>
                      <p className="text-gray-300 text-xs">
                        {municipality.startDate} - {municipality.endDate}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
