// Data del Festival del Municipio Bustamante
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Bustamante
export const bustamanteFestival: FestivalEvent[] = [
  {
    id: "bu-1",
    date: "4",
    day: "sábado",
    title: "Primera Cita",
    artist: "Los Bernal de Linares",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "20:00 hrs."
  },
  {
    id: "bu-2",
    date: "11",
    day: "sábado",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "bu-3",
    date: "12",
    day: "domingo",
    title: "concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza",
    time: "20:00 hrs."
  },
  {
    id: "bu-4",
    date: "5",
    day: "domingo",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Plaza",
    time: "17:00 hrs."
  },
  {
    id: "bu-5",
    date: "10",
    day: "viernes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "17:00 hrs."
  },
  {
    id: "bu-6",
    date: "3",
    day: "viernes",
    title: "Acusticumbias",
    artist: "Aldebarán Acústico",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal de Bustamante",
    time: "20:00 hrs."
  }
];

// Información del Festival del Municipio Bustamante
export const bustamanteFestivalInfo: FestivalInfo = {
  name: "Bustamante",
  location: "Bustamante",
  totalEvents: 6,
  startDate: "3 de enero de 2025",
  endDate: "12 de enero de 2025",
  categories: ["Interdisciplinario","Teatro","Música","Literatura"]
};

// Exposiciones del Festival del Municipio Bustamante
export const bustamanteFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
