// Data del Festival del Municipio Antiguo Morelos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Antiguo Morelos
export const antiguomorelosFestival: FestivalEvent[] = [
  {
    id: "an-1",
    date: "7",
    day: "martes",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "an-2",
    date: "12",
    day: "domingo",
    title: "México y sus canciones",
    artist: "Andrés Gea y su guitarra mexicana",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Horario por definir"
  }
];

// Información del Festival del Municipio Antiguo Morelos
export const antiguoMorelosFestivalInfo: FestivalInfo = {
  name: "Antiguo Morelos",
  location: "Antiguo Morelos",
  totalEvents: 2,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Teatro","Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Antiguo Morelos
export const antiguomorelosFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
