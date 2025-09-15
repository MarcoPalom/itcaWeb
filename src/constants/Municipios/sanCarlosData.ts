// Data del Festival del Municipio San Carlos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio San Carlos
export const sanCarlosFestival: FestivalEvent[] = [
  {
    id: "sc-1",
    date: "3",
    day: "viernes",
    title: "De amores, polka y huapango",
    artist: "La Nota Alegre",
    origin: "Tamaulipas-PROFEST",
    category: "Música",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  },
  {
    id: "sc-2",
    date: "4",
    day: "sábado",
    title: "Danzas de fuegos",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  },
  {
    id: "sc-3",
    date: "9",
    day: "jueves",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Escuela Primaria \"Lauro Aguirre\"",
    time: "9:00 hrs."
  },
  {
    id: "sc-4",
    date: "10",
    day: "viernes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  },
  {
    id: "sc-5",
    date: "11",
    day: "sábado",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Juárez, Zona Centro",
    time: "10:00 hrs."
  },
  {
    id: "sc-6",
    date: "12",
    day: "domingo",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio San Carlos
export const sanCarlosFestivalInfo: FestivalInfo = {
  name: "San Carlos",
  location: "San Carlos",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro"]
};

// Exposiciones del Festival del Municipio San Carlos
export const sanCarlosFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para San Carlos en los datos proporcionados
];
