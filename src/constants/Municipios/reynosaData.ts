// Data del Festival del Municipio Reynosa
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Reynosa
export const reynosaFestival: FestivalEvent[] = [
  // Viernes 3 de octubre
  {
    id: "re-1",
    date: "3",
    day: "viernes",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  // Sábado 4 de octubre
  {
    id: "re-2",
    date: "4",
    day: "sábado",
    title: "Sabor Life is Rhythm",
    artist: "España, Inglaterra, Francia, Italia y México",
    origin: "Internacional",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-2b",
    date: "4",
    day: "sábado",
    title: "Matías Aguayo",
    artist: "Matías Aguayo",
    origin: "Chile-Alemania",
    category: "Música",
    venue: "Explanada del Parque Cultural Reynosa",
    time: "20:00 hrs."
  },
  // Domingo 5 de octubre
  {
    id: "re-3",
    date: "5",
    day: "domingo",
    title: "Broadway Baby",
    artist: "Bianca Marroquín",
    origin: "Estados Unidos | México",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "17:00 hrs."
  },
  {
    id: "re-3b",
    date: "5",
    day: "domingo",
    title: "Domingo de Danzón",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza \"Treviño Zapata\" Col. Longoria",
    time: "19:00 hrs."
  },
  // Lunes 6 de octubre
  {
    id: "re-4",
    date: "6",
    day: "lunes",
    title: "Orinoco",
    artist: "DOSCE La Compañía",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-4b",
    date: "6",
    day: "lunes",
    title: "Del Vali y Wero Hernández",
    artist: "Del Vali y Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Del Río, Plaza Comercial",
    time: "17:00 hrs."
  },
  // Martes 7 de octubre
  {
    id: "re-5",
    date: "7",
    day: "martes",
    title: "Polvo Enamorado",
    artist: "Producción Escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-5b",
    date: "7",
    day: "martes",
    title: "Programa didáctico de Literatura",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Educativo",
    venue: "Escuela Telesecundaria \"Felipe Carrillo Puerto\", Ejido los Cavazos",
    time: "10:00 hrs."
  },
  // Miércoles 8 de octubre
  {
    id: "re-6",
    date: "8",
    day: "miércoles",
    title: "Piaf de bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-6b",
    date: "8",
    day: "miércoles",
    title: "Programa didáctico de Escultura",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Educativo",
    venue: "Escuela Primaria \"Miguel Hidalgo\", Zona Centro",
    time: "9:00 hrs."
  },
  {
    id: "re-6c",
    date: "8",
    day: "miércoles",
    title: "Homenaje a la Música Norteña-Conjunto Norteño del IRCA y agrupaciones invitadas",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Calle Quintana Roo, Col. Zona Centro (Plaza Cornelio Reyna)",
    time: "18:00 hrs."
  },
  // Jueves 9 de octubre
  {
    id: "re-7",
    date: "9",
    day: "jueves",
    title: "Se nos quedaron ellos",
    artist: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
    origin: "Tamaulipas-CDMX",
    category: "Danza",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-7b",
    date: "9",
    day: "jueves",
    title: "Xolo",
    artist: "Mardonio Carballo y Juan Pablo Villa",
    origin: "Veracruz-CDMX",
    category: "Interdisciplinario",
    venue: "Instalaciones de la Universidad Tecnológica de Tamaulipas Norte",
    time: "17:00 hrs."
  },
  {
    id: "re-7c",
    date: "9",
    day: "jueves",
    title: "Programa didáctico y presentación de Danza Folklórica",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Educativo",
    venue: "CONALEP, Col. Cañada",
    time: "11:00 hrs."
  },
  // Viernes 10 de octubre
  {
    id: "re-8",
    date: "10",
    day: "viernes",
    title: "Mística",
    artist: "Ballet Nepantla",
    origin: "Estados Unidos",
    category: "Danza",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-8b",
    date: "10",
    day: "viernes",
    title: "Programa didáctico de Música y Ensamble de Alientos de la Banda Sinfónica Municipal \"Mtro. Elías Valenzuela\"",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Educativo",
    venue: "Secundaria General No. 8 \"Rosario Castellanos\", Col. Del Prado",
    time: "10:00 hrs."
  },
  // Sábado 11 de octubre
  {
    id: "re-9",
    date: "11",
    day: "sábado",
    title: "Nación SKA",
    artist: "Los Valdés Ska",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Explanada del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-9b",
    date: "11",
    day: "sábado",
    title: "Madame Saxi",
    artist: "Charlotte Pescayre",
    origin: "Francia",
    category: "Música",
    venue: "Plaza \"Treviño Zapata\", Col. Longoria",
    time: "18:00 hrs."
  },
  // Domingo 12 de octubre
  {
    id: "re-10",
    date: "12",
    day: "domingo",
    title: "#porquelollevamosenlasangre",
    artist: "Afrodescendencia Matamoros",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "19:00 hrs."
  },
  {
    id: "re-10b",
    date: "12",
    day: "domingo",
    title: "Recorrido de la Raza",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Recorrido del Museo del Ferrocarril, por la peatonal Hidalgo, hasta la Plaza Principal \"Miguel Hidalgo\", Zona Centro",
    time: "17:00 hrs."
  },
  {
    id: "re-10c",
    date: "12",
    day: "domingo",
    title: "Domingo de Danzón",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza \"Treviño Zapata\" Col. Longoria",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Reynosa
export const reynosaFestivalInfo: FestivalInfo = {
  name: "Reynosa",
  location: "Reynosa",
  totalEvents: 22,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Danza", "Música", "Educativo"]
};

// Exposiciones del Festival del Municipio Reynosa
export const reynosaFestivalExhibitions: FestivalExhibition[] = [
  {
    id: "re-expo-1",
    title: "Art Deco",
    artist: "Hugo Castillo",
    origin: "Tamaulipas",
    category: "Exposición",
    venue: "Centro Comercial \"Plaza Real\"",
    startDate: "3 de octubre de 2025",
    endDate: "12 de octubre de 2025",
    description: "Artes Plásticas - Colección del Artista"
  },
  {
    id: "re-expo-2",
    title: "Retratos de familia",
    artist: "Municipio de Reynosa",
    origin: "Tamaulipas",
    category: "Exposición",
    venue: "Centro Comercial \"Puerta Grande\"",
    startDate: "3 de octubre de 2025",
    endDate: "12 de octubre de 2025",
    description: "Fotografía"
  },
  {
    id: "re-expo-3",
    title: "ZIGZAG Líneas en el Tiempo",
    artist: "Marycarmen Aguirre",
    origin: "Tamaulipas",
    category: "Exposición",
    venue: "Galería Artemio Guerra, Parque Cultural Reynosa",
    startDate: "4 de octubre de 2025",
    endDate: "11 de enero de 2026",
    description: "Pintura, Grabado, Cuadro objeto - Colección del Artista"
  }
];
