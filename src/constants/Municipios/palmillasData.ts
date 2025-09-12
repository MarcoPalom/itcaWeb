// Data del Festival del Municipio Palmillas
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Palmillas
export const palmillasFestival: FestivalEvent[] = [
  {
    id: "pa-1",
    date: "10",
    day: "viernes",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "pa-2",
    date: "8",
    day: "miércoles",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Escuela Primaria Lauro Aguirre",
    time: "9:00 hrs."
  },
  {
    id: "pa-3",
    date: "11",
    day: "sábado",
    title: "Marimba perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal de Palmillas",
    time: "19:00 hrs."
  },
  {
    id: "pa-4",
    date: "3",
    day: "viernes",
    title: "Tributo al príncipe de la canción",
    artist: "Rondalla Magisterial de Tamaulipas",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal de Palmillas",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Palmillas
export const palmillasFestivalInfo: FestivalInfo = {
  name: "Palmillas",
  location: "Palmillas",
  totalEvents: 4,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Teatro","Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Palmillas
export const palmillasFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
