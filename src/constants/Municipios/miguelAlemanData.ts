// Data del Festival del Municipio Miguel Alemán
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Miguel Alemán
export const miguelalemanFestival: FestivalEvent[] = [
  {
    id: "mi-1",
    date: "5",
    day: "domingo",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Foro Eleazar García",
    time: "19:25 hrs."
  },
  {
    id: "mi-2",
    date: "3",
    day: "viernes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Foro Eleazar García",
    time: "19:25 hrs."
  },
  {
    id: "mi-3",
    date: "4",
    day: "sábado",
    title: "Warislov Concierto Rockteño",
    artist: "Warislov",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de Miguel Alemán",
    time: "20:00 hrs."
  },
  {
    id: "mi-4",
    date: "4",
    day: "sábado",
    title: "Noches Adictiva5",
    artist: "Adicto5",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Foro Eleazar García",
    time: "19:20 hrs."
  }
];

// Información del Festival del Municipio Miguel Alemán
export const miguelAlemanFestivalInfo: FestivalInfo = {
  name: "Miguel Alemán",
  location: "Miguel Alemán",
  totalEvents: 4,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Música"]
};

// Exposiciones del Festival del Municipio Miguel Alemán
export const miguelalemanFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
