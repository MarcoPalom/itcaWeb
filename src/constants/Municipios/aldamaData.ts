// Data del Festival del Municipio Aldama
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Aldama
export const aldamaFestival: FestivalEvent[] = [
  {
    id: "al-1",
    date: "5",
    day: "domingo",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  },
  {
    id: "al-2",
    date: "3",
    day: "viernes",
    title: "En tierras Tamaulipecas",
    artist: "Norteños de Río Bravo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "19:00 hrs."
  },
  {
    id: "al-3",
    date: "4",
    day: "sábado",
    title: "Esther Tovar",
    artist: "Esther Tovar",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  }
];

// Información del Festival del Municipio Aldama
export const aldamaFestivalInfo: FestivalInfo = {
  name: "Aldama",
  location: "Aldama",
  totalEvents: 3,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Aldama
export const aldamaFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
