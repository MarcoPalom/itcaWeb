// Data del Festival del Municipio Bustamante
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio Bustamante
export const bustamanteFestival: FestivalEvent[] = [
  {
    id: "bs-1",
    date: "3",
    day: "Viernes",
    title: "Acusticumbias",
    artist: "Aldebarán Acústico",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bs-2",
    date: "4",
    day: "Sábado",
    title: "Primera Cita",
    artist: "Los Bernal de Linares",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bs-3",
    date: "5",
    day: "Domingo",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bs-4",
    date: "10",
    day: "Viernes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "José Palacios"
  },
  {
    id: "bs-5",
    date: "11",
    day: "Sábado",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bs-6",
    date: "12",
    day: "Domingo",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Bustamante
export const bustamanteFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Bustamante",
  location: "Municipio Bustamante, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro"]
};
