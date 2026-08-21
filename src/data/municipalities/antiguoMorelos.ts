// Data del Festival del Municipio Antiguo Morelos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '@/types';

// pending
export const antiguoMorelosFestival: FestivalEvent[] = [
  {
    id: "am-1",
    date: "3",
    day: "viernes",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Escuela Primaria Niños Héroes, Congregación Fortines",
    time: "11:00 hrs."
  },
  {
    id: "am-2",
    date: "7",
    day: "martes",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    venue: "Escuela Primaria José María Morelos y Pavón",
    time: "11:00 hrs."
  }
];

// Información del Festival del Municipio Antiguo Morelos
export const antiguoMorelosFestivalInfo: FestivalInfo = {
  name: "Antiguo Morelos",
  location: "Antiguo Morelos",
  totalEvents: 2,
  startDate: "3 de octubre de 2025",
  endDate: "7 de octubre de 2025",
  categories: ["Interdisciplinario", "Teatro"]
};

// Exposiciones del Festival del Municipio Antiguo Morelos
export const antiguoMorelosFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];