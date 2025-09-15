// Data del Festival del Municipio González
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio González
export const gonzalezFestival: FestivalEvent[] = [
  {
    id: "go-1",
    date: "3",
    day: "viernes",
    title: "Primera Cita",
    artist: "Los Bernal de Linares",
    origin: "Nuevo León",
    category: "Música",
    venue: "Plaza Principal de González",
    time: "19:00 hrs."
  },
  {
    id: "go-2",
    date: "4",
    day: "sábado",
    title: "Quinteto de Alientos UAT",
    artist: "Quinteto de Alientos UAT",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de González",
    time: "19:00 hrs."
  },
  {
    id: "go-3",
    date: "5",
    day: "domingo",
    title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
    artist: "La Espuma de Mar",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de González",
    time: "20:00 hrs."
  },
  {
    id: "go-4",
    date: "9",
    day: "jueves",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas-PROFEST",
    category: "Interdisciplinario",
    venue: "Plaza Principal de Estación Manuel",
    time: "19:00 hrs."
  },
  {
    id: "go-5",
    date: "10",
    day: "viernes",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de Estación Manuel",
    time: "19:00 hrs."
  },
  {
    id: "go-6",
    date: "11",
    day: "sábado",
    title: "Solata - Un concierto sobre duelo, distancia y raíz",
    artist: "Melissa Castellanos",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de Estación Manuel",
    time: "19:00 hrs."
  },
  {
    id: "go-7",
    date: "12",
    day: "domingo",
    title: "Tamaulipas es mi Tierra",
    artist: "Arael & Erihka Peña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de González",
    time: "20:00 hrs."
  }
];

// Información del Festival del Municipio González
export const gonzalezFestivalInfo: FestivalInfo = {
  name: "González",
  location: "González",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Música", "Interdisciplinario"]
};

// Exposiciones del Festival del Municipio González
export const gonzalezFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
