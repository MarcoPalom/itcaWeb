// Data del Festival del Municipio Madero
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Madero
export const maderoFestival: FestivalEvent[] = [
  {
    id: "ma-1",
    date: "5",
    day: "Domingo",
    title: "Poetas y Lugares con Viola Trigo",
    artist: "Viola Trigo",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ma-2",
    date: "3",
    day: "viernes",
    title: "Esther Tovar",
    artist: "Esther Tovar",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  },
  {
    id: "ma-3",
    date: "11",
    day: "sábado",
    title: "ROCK",
    artist: "Punto Exacto",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  },
  {
    id: "ma-4",
    date: "11",
    day: "sábado",
    title: "ROCK",
    artist: "El Cuervo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  },
  {
    id: "ma-5",
    date: "11",
    day: "sábado",
    title: "ROCK",
    artist: "Mr. Trash",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  }
];

// Información del Festival del Municipio Madero
export const maderoFestivalInfo: FestivalInfo = {
  name: "Madero",
  location: "Madero",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Madero
export const maderoFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
