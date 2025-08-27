// Data del Festival del Municipio Antiguo Morelos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from './types';

// Data del Festival del Municipio Antiguo Morelos
export const antiguoMorelosFestival: FestivalEvent[] = [
  {
    id: "am-1",
    date: "3",
    day: "Viernes",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "am-2",
    date: "7",
    day: "Martes",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "am-3",
    date: "12",
    day: "Domingo",
    title: "Quinteto de Alientos",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Alientos",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Antiguo Morelos (por ahora vacío, se puede agregar después)
export const antiguoMorelosExhibitions: FestivalExhibition[] = [];

// Información general del festival de Antiguo Morelos
export const antiguoMorelosFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Antiguo Morelos",
  location: "Municipio Antiguo Morelos, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 3,
  categories: ["Música", "Teatro"]
};
