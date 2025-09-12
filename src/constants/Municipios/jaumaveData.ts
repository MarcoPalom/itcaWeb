// Data del Festival del Municipio Jaumave
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Jaumave
export const jaumaveFestival: FestivalEvent[] = [
  {
    id: "ja-1",
    date: "4",
    day: "sábado",
    title: "Majestuosa Camada",
    artist: "Majestuosa Camada",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Plaza Hidalgo",
    time: "20:00 hrs."
  },
  {
    id: "ja-2",
    date: "11",
    day: "sábado",
    title: "concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Hidalgo",
    time: "20:00 hrs."
  },
  {
    id: "ja-3",
    date: "6",
    day: "lunes",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Teatro del Pueblo",
    time: "9:00 hrs."
  },
  {
    id: "ja-4",
    date: "9",
    day: "jueves",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Teatro del Pueblo",
    time: "10:00 hrs."
  },
  {
    id: "ja-5",
    date: "12",
    day: "domingo",
    title: "Marimba perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal de Jaumave",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Jaumave
export const jaumaveFestivalInfo: FestivalInfo = {
  name: "Jaumave",
  location: "Jaumave",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Música","Literatura"]
};

// Exposiciones del Festival del Municipio Jaumave
export const jaumaveFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
