// Data del Festival del Municipio Matamoros
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Matamoros
export const matamorosFestival: FestivalEvent[] = [
  {
    id: "mt-1",
    date: "3",
    day: "Viernes",
    title: "Del Vali & Wero Hernández",
    artist: "Del Vali & Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "mt-2",
    date: "4",
    day: "Sábado",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    subcategory: "Música, danza",
    venue: "Teatro de la Reforma",
    time: "Por confirmar"
  },
  {
    id: "mt-3",
    date: "5",
    day: "Domingo",
    title: "Sabor Life is Rhythm",
    artist: "Sabor Life is Rhythm",
    origin: "España, Inglaterra, Francia, Italia y México",
    category: "Interdisciplinario",
    subcategory: "Música, tap, jazz",
    venue: "Teatro de la Reforma",
    time: "Por confirmar",
    artisticDirection: "Ivan Bouchain y Gaëtan Farnier"
  },
  {
    id: "mt-4",
    date: "5",
    day: "Domingo",
    title: "Matías Aguayo",
    artist: "Matías Aguayo",
    origin: "Chile",
    category: "Música",
    subcategory: "DJ",
    venue: "Por confirmar",
    time: "Por confirmar (diferente horario a Life is Rhythm)"
  },
  {
    id: "mt-5",
    date: "6",
    day: "Lunes",
    title: "Polvo Enamorado",
    artist: "Producción escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    subcategory: "Teatro y música homenaje a compositores tamaulipecos",
    venue: "Teatro de la Reforma",
    time: "Por confirmar",
    cast: [
      "Pepe Navarrete",
      "Polo Rojas",
      "Cynthia Sánchez",
      "Héctor Gamaliel",
      "Júpiter Bautista",
      "Isabelle Govea",
      "Carmen Sarahí"
    ]
  },
  {
    id: "mt-6",
    date: "7",
    day: "Martes",
    title: "Broadway Baby",
    artist: "Bianca Marroquí",
    origin: "Tamaulipas-México-Estados Unidos",
    category: "Teatro",
    subcategory: "Teatro Musical",
    venue: "Teatro de la Reforma",
    time: "Por confirmar"
  },
  {
    id: "mt-7",
    date: "9",
    day: "Jueves",
    title: "Piaf de Bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Música",
    subcategory: "Cabaret, jazz",
    venue: "Teatro de la Reforma",
    time: "Por confirmar"
  },
  {
    id: "mt-8",
    date: "10",
    day: "Viernes",
    title: "Xolo",
    artist: "Mardonio Carballo y Juan Pablo Villa",
    origin: "Veracruz-CDMX",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "mt-9",
    date: "11",
    day: "Sábado",
    title: "Escrito en el cuerpo de la noche",
    artist: "PROTEAC",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Teatro de la Reforma",
    time: "Por confirmar",
    artisticDirection: "Luis Martín",
    description: "En el marco del Centenario del nacimiento de Emilio Carballido (1925-2008)"
  }
];

// Exposición del Festival de Matamoros
export const matamorosExhibition: FestivalExhibition = {
  id: "mt-expo-1",
  title: "Allá donde el sueño llama. Memorias, trayectos y vínculos en territorios migrantes",
  artist: "Olivia Vivanco, Jorge Santiago y Álvaro G. Díaz-Rodríguez",
  origin: "CDMX",
  category: "Exposición",
  subcategory: "Fotografía Documental, Instalación Sonora Inmersiva y Vídeos",
  venue: "Museo de Arte Contemporáneo de Tamaulipas (MACT)",
  startDate: "9 de octubre del 2025",
  endDate: "8 de febrero 2026",
  description: "Coordinación con Dirección General de Formación y Gestión Cultural IMBAL"
};

// Información general del festival de Matamoros
export const matamorosFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Matamoros",
  location: "Municipio Matamoros, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "11 de Octubre, 2025",
  mainVenue: "Teatro de la Reforma",
  totalEvents: 9,
  categories: ["Teatro", "Música", "Interdisciplinario", "Exposición"]
};
