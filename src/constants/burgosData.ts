// Data del Festival del Municipio Burgos
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio Burgos
export const burgosFestival: FestivalEvent[] = [
  {
    id: "bg-1",
    date: "3",
    day: "Viernes",
    title: "Paseando con huapangos y tradición",
    artist: "Tradición Genuina",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Huasteca",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bg-2",
    date: "4",
    day: "Sábado",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bg-3",
    date: "5",
    day: "Domingo",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bg-4",
    date: "7",
    day: "Martes",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Pantomima",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bg-5",
    date: "8",
    day: "Miércoles",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "bg-6",
    date: "12",
    day: "Domingo",
    title: "Orgullo Norteño",
    artist: "UAT",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Burgos
export const burgosFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Burgos",
  location: "Municipio Burgos, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro", "Arte de la representación"]
};
