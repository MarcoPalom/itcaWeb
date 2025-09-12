// Data del Festival del Municipio Villagrán
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Villagrán
export const villagranFestival: FestivalEvent[] = [
  {
    id: "vi-1",
    date: "7",
    day: "martes",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Plaza Juárez",
    time: "19:00 hrs."
  },
  {
    id: "vi-2",
    date: "3",
    day: "viernes",
    title: "Danzas de fuegos",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Danza",
    venue: "Plaza Juárez",
    time: "19:00 hrs."
  },
  {
    id: "vi-3",
    date: "11",
    day: "sábado",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Juárez",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Villagrán
export const villagranFestivalInfo: FestivalInfo = {
  name: "Villagrán",
  location: "Villagrán",
  totalEvents: 3,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Teatro","Danza","Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Villagrán
export const villagranFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
