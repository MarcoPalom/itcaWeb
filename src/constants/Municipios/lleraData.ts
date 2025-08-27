// Data del Festival del Municipio Llera
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Llera
export const lleraFestival: FestivalEvent[] = [
  {
    id: "ll-1",
    date: "5",
    day: "Domingo",
    title: "¡Llévame!",
    artist: "Compañía Claunódromo",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro Comedia",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ll-2",
    date: "8",
    day: "Miércoles",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ll-3",
    date: "10",
    day: "Viernes",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ll-4",
    date: "12",
    day: "Domingo",
    title: "Urban revolution",
    artist: "MFOX La Puerta del Talento",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Urbana y Hip Hop",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Llera
export const lleraFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Llera",
  location: "Municipio Llera, Tamaulipas",
  startDate: "5 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 4,
  categories: ["Teatro", "Música", "Danza"]
};
