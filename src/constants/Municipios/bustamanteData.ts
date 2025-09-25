// Data del Festival del Municipio Bustamante
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Done
export const bustamanteFestival: FestivalEvent[] = [
  {
    id: "bu-1",
    date: "3",
    day: "viernes",
    title: "Acusticumbias",
    artist: "Aldebarán Acústico",
    origin: "Tamaulipas",
    category: "Música | Fusión",
    venue: "Plaza \"20 de Noviembre\"",
    time: "17:00 hrs."
  },
  {
    id: "bu-2",
    date: "4",
    day: "sábado",
    title: "Primera Cita",
    artist: "Los Bernal de Linares",
    origin: "Nuevo León",
    category: "Música | Norteño",
    venue: "Plaza \"20 de Noviembre\"",
    time: "20:00 hrs."
  },
  {
    id: "bu-3",
    date: "5",
    day: "domingo",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro | Cuentacuentos",
    venue: "Plaza \"20 de Noviembre\"",
    time: "17:00 hrs."
  },
  {
    id: "bu-4",
    date: "10",
    day: "viernes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Plaza \"20 de Noviembre\"",
    time: "17:00 hrs."
  },
  {
    id: "bu-5",
    date: "11",
    day: "sábado",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro | Teatro de calle",
    venue: "Plaza \"20 de Noviembre\"",
    time: "17:00 hrs."
  },
  {
    id: "bu-6",
    date: "12",
    day: "domingo",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música | Norteño",
    venue: "Plaza \"20 de Noviembre\"",
    time: "20:00 hrs."
  }
];

// Información del Festival del Municipio Bustamante
export const bustamanteFestivalInfo: FestivalInfo = {
  name: "Bustamante",
  location: "Bustamante",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Música", "Teatro", "Fusión", "Norteño", "Cuentacuentos", "Teatro de calle"]
};

// Exposiciones del Festival del Municipio Bustamante
export const bustamanteFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
