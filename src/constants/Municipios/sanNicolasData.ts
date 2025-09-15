// Data del Festival del Municipio San Nicolás
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio San Nicolás
export const sanNicolasFestival: FestivalEvent[] = [
  {
    id: "sn-1",
    date: "3",
    day: "viernes",
    title: "Trío UATsteco",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Auditorio Rodolfo Torre Cantú",
    time: "16:00 hrs."
  },
  {
    id: "sn-2",
    date: "4",
    day: "sábado",
    title: "El Zar de Monterrey",
    artist: "Nuevo León",
    origin: "Nuevo León",
    category: "Música",
    venue: "Plaza Principal de la Cabecera Municipal",
    time: "19:00 hrs."
  },
  {
    id: "sn-3",
    date: "6",
    day: "lunes",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Techumbre del Ejido las Vírgenes",
    time: "16:00 hrs."
  },
  {
    id: "sn-4",
    date: "9",
    day: "jueves",
    title: "Con las manos entre los pies",
    artist: "Grupo espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Ejido \"El Palmar\"",
    time: "15:00 hrs."
  },
  {
    id: "sn-5",
    date: "10",
    day: "viernes",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Ejido \"Flechadores\"",
    time: "15:00 hrs."
  },
  {
    id: "sn-6",
    date: "12",
    day: "domingo",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Auditorio Rodolfo Torre Cantú",
    time: "14:00 hrs."
  }
];

// Información del Festival del Municipio San Nicolás
export const sanNicolasFestivalInfo: FestivalInfo = {
  name: "San Nicolás",
  location: "San Nicolás",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro"]
};

// Exposiciones del Festival del Municipio San Nicolás
export const sanNicolasFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para San Nicolás en los datos proporcionados
];
