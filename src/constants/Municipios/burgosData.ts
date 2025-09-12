// Data del Festival del Municipio Burgos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Burgos
export const burgosFestival: FestivalEvent[] = [
  {
    id: "bu-1",
    date: "8",
    day: "miércoles",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "18:00 hrs."
  },
  {
    id: "bu-2",
    date: "5",
    day: "domingo",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "18:00 hrs."
  },
  {
    id: "bu-3",
    date: "4",
    day: "sábado",
    title: "concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal",
    time: "18:00 hrs."
  },
  {
    id: "bu-4",
    date: "7",
    day: "martes",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Escuela Primaria",
    time: "11:00 hrs."
  },
  {
    id: "bu-5",
    date: "3",
    day: "viernes",
    title: "Paseando con huapangos y tradición",
    artist: "Tradición Genuina",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "18:00 hrs."
  }
];

// Información del Festival del Municipio Burgos
export const burgosFestivalInfo: FestivalInfo = {
  name: "Burgos",
  location: "Burgos",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Música"]
};

// Exposiciones del Festival del Municipio Burgos
export const burgosFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
