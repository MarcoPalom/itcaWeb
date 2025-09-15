// Data del Festival del Municipio San Fernando
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio San Fernando
export const sanFernandoFestival: FestivalEvent[] = [
  {
    id: "sf-1",
    date: "3",
    day: "viernes",
    title: "Concierto Fara Fara",
    artist: "Las Jaras",
    origin: "Guerrero",
    category: "Música",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  },
  {
    id: "sf-2",
    date: "4",
    day: "sábado",
    title: "Popteño, \"Que no muera la música norteña\"",
    artist: "El Contrato",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  },
  {
    id: "sf-3",
    date: "5",
    day: "domingo",
    title: "Danzas de fuegos",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  },
  {
    id: "sf-4",
    date: "8",
    day: "miércoles",
    title: "Cazando Estrellas en Bicicleta",
    artist: "Las Plastiqué Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Escuela Primaria \"Juana de Asbaje y Ramírez\"",
    time: "10:00 hrs."
  },
  {
    id: "sf-5",
    date: "9",
    day: "jueves",
    title: "Del Vali & Wero Hernández",
    artist: "Estados Unidos",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  },
  {
    id: "sf-6",
    date: "11",
    day: "sábado",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  },
  {
    id: "sf-7",
    date: "12",
    day: "domingo",
    title: "Mosaico Musical",
    artist: "Banda Sinfónica Municipal de Reynosa \"Mtro. Elías Valenzuela\"",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  }
];

// Información del Festival del Municipio San Fernando
export const sanFernandoFestivalInfo: FestivalInfo = {
  name: "San Fernando",
  location: "San Fernando",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro"]
};

// Exposiciones del Festival del Municipio San Fernando
export const sanFernandoFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para San Fernando en los datos proporcionados
];
