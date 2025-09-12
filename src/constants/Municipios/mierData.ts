// Data del Festival del Municipio Mier
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Mier
export const mierFestival: FestivalEvent[] = [
  {
    id: "mi-1",
    date: "3",
    day: "viernes",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Internacional",
    category: "Interdisciplinario",
    venue: "Atrio de la Parroquia",
    time: "19:30 hrs."
  },
  {
    id: "mi-2",
    date: "4",
    day: "sábado",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:30 hrs."
  },
  {
    id: "mi-3",
    date: "10",
    day: "viernes",
    title: "Tamaulipas galante",
    artist: "Camerata del Colegio",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:30 hrs."
  },
  {
    id: "mi-4",
    date: "12",
    day: "domingo",
    title: "MIJKAILJUITL",
    artist: "Raíces Huastecas",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:30 hrs."
  },
  {
    id: "mi-5",
    date: "11",
    day: "sábado",
    title: "De chile, mole y pozole",
    artist: "En Boca Ensamble",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:30 hrs."
  },
  {
    id: "mi-6",
    date: "5",
    day: "domingo",
    title: "Huasteca viva:",
    artist: "Soraima y sus Huastecos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:30 hrs."
  },
  {
    id: "mi-7",
    date: "7",
    day: "martes",
    title: "Llamando a base",
    artist: "Colectivo teatro de bolsillo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Casino Argüelles",
    time: "11:00 hrs."
  }
];

// Información del Festival del Municipio Mier
export const mierFestivalInfo: FestivalInfo = {
  name: "Mier",
  location: "Mier",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Teatro"]
};

// Exposiciones del Festival del Municipio Mier
export const mierFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
