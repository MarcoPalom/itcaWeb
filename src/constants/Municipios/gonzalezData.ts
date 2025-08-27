// Data del Festival del Municipio González
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio González
export const gonzalezFestival: FestivalEvent[] = [
  {
    id: "gz-1",
    date: "3",
    day: "Viernes",
    title: "Primera Cita",
    artist: "Los Bernal de Linares",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gz-2",
    date: "4",
    day: "Sábado",
    title: "Quinteto de Alientos",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Alientos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gz-3",
    date: "5",
    day: "Domingo",
    title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gz-4",
    date: "9",
    day: "Jueves",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gz-5",
    date: "10",
    day: "Viernes",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gz-6",
    date: "11",
    day: "Sábado",
    title: "Solata - Un concierto sobre duelo, distancia y raíz",
    artist: "Melisa Castellanos",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gz-7",
    date: "12",
    day: "Domingo",
    title: "Tamaulipas es mi Tierra",
    artist: "Arael y Erihka Peña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Regional",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de González (por ahora vacío, se puede agregar después)
export const gonzalezExhibitions: FestivalExhibition[] = [];

// Información general del festival de González
export const gonzalezFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio González",
  location: "Municipio González, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 7,
  categories: ["Música", "Teatro"]
};
