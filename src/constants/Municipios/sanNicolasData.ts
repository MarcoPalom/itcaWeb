// Data del Festival del Municipio San Nicolás
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio San Nicolás
export const sannicolasFestival: FestivalEvent[] = [
  {
    id: "sa-1",
    date: "4",
    day: "sábado",
    title: "El Zar de Monterrey",
    artist: "Grupo El Zar",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Plaza Principal de la Cabecera Municipal",
    time: "19:00 hrs."
  },
  {
    id: "sa-2",
    date: "10",
    day: "viernes",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Ejido",
    time: "15:00 hrs."
  },
  {
    id: "sa-3",
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
    id: "sa-4",
    date: "9",
    day: "jueves",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Ejido",
    time: "15:00 hrs."
  },
  {
    id: "sa-5",
    date: "12",
    day: "domingo",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Auditorio Rodolfo Torre Cantú",
    time: "14:00 hrs."
  },
  {
    id: "sa-6",
    date: "3",
    day: "viernes",
    title: "Concierto Trío UATsteco",
    artist: "Trío UATsteco",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Auditorio Rodolfo Torre Cantú",
    time: "16:00 hrs."
  }
];

// Información del Festival del Municipio San Nicolás
export const sanNicolasFestivalInfo: FestivalInfo = {
  name: "San Nicolás",
  location: "San Nicolás",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Teatro","Literatura","Música"]
};

// Exposiciones del Festival del Municipio San Nicolás
export const sannicolasFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
