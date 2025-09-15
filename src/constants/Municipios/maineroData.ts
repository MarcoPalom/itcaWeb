// Data del Festival del Municipio Mainero
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Mainero
export const maineroFestival: FestivalEvent[] = [
  {
    id: "ma-1",
    date: "3",
    day: "viernes",
    title: "Con las manos entre los pies",
    artist: "Grupo espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Salón \"Praxedis Balboa\" de la Cabecera Municipal",
    time: "18:30 hrs."
  },
  {
    id: "ma-2",
    date: "8",
    day: "miércoles",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Salón \"Praxedis Balboa\" de la Cabecera Municipal",
    time: "18:00 hrs."
  },
  {
    id: "ma-3",
    date: "12",
    day: "domingo",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Salón \"Praxedis Balboa\" de la Cabecera Municipal",
    time: "18:00 hrs."
  }
];

// Información del Festival del Municipio Mainero
export const maineroFestivalInfo: FestivalInfo = {
  name: "Mainero",
  location: "Mainero",
  totalEvents: 3,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Teatro"]
};

// Exposiciones del Festival del Municipio Mainero
export const maineroFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
