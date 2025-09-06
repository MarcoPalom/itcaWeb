// Data del Festival del Municipio Río Bravo
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Río Bravo
export const rioBravoFestival: FestivalEvent[] = [
  {
    id: "rb-1",
    date: "3",
    day: "Viernes",
    title: "Popteño, 'Que no muera la música norteña'",
    artist: "El Contrato",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "rb-2",
    date: "4",
    day: "Sábado",
    title: "Del Vali & Wero Hernández",
    artist: "Del Vali & Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "rb-3",
    date: "5",
    day: "Domingo",
    title: "Concierto Fara Fara",
    artist: "Las Jaras",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Tradicional, polka, chotis",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "rb-4",
    date: "6",
    day: "Lunes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "rb-5",
    date: "8",
    day: "Miércoles",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Artes de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "rb-6",
    date: "10",
    day: "Viernes",
    title: "Llamando a base",
    artist: "Teatro de Bolsillo",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Infantil",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Armando Mancilla",
    description: "Dirección y Dramaturgia: Armando Mancilla"
  },
  {
    id: "rb-7",
    date: "11",
    day: "Sábado",
    title: "Mosaico Musical",
    artist: "Banda Sinfónica Municipal de Reynosa 'Mtro. Elías Valenzuela'",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Sinfónica",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "rb-8",
    date: "12",
    day: "Domingo",
    title: "De amores, polka y huapango",
    artist: "La Nota Alegre",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Río Bravo
export const rioBravoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Río Bravo",
  location: "Municipio Río Bravo, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 8,
  categories: ["Música", "Teatro", "Artes de la representación"]
};
