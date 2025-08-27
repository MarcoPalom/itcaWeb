// Data del Festival del Municipio Nuevo Morelos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Nuevo Morelos
export const nuevoMorelosFestival: FestivalEvent[] = [
  {
    id: "nm-1",
    date: "3",
    day: "Viernes",
    title: "Quinteto de Alientos UAT",
    artist: "UAT",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Alientos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "nm-2",
    date: "4",
    day: "Sábado",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "nm-3",
    date: "6",
    day: "Lunes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas-Coahuila",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "José Palacios"
  },
  {
    id: "nm-4",
    date: "8",
    day: "Miércoles",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "nm-5",
    date: "12",
    day: "Domingo",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Pantomima",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Rafael Perera Tirado"
  }
];

// Exposiciones del Festival de Nuevo Morelos (por ahora vacío, se puede agregar después)
export const nuevoMorelosExhibitions: FestivalExhibition[] = [];

// Información general del festival de Nuevo Morelos
export const nuevoMorelosFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Nuevo Morelos",
  location: "Municipio Nuevo Morelos, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 5,
  categories: ["Música", "Teatro"]
};
