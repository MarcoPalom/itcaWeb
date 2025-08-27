// Data del Festival del Municipio San Nicolás
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio San Nicolás
export const sanNicolasFestival: FestivalEvent[] = [
  {
    id: "sn-1",
    date: "3",
    day: "Viernes",
    title: "Trío UATsteco",
    artist: "Trío UATsteco",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sn-2",
    date: "4",
    day: "Sábado",
    title: "Grupo El Zar",
    artist: "Grupo El Zar",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sn-3",
    date: "6",
    day: "Lunes",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sn-4",
    date: "9",
    day: "Jueves",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Pantomima",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Rafael Perera"
  },
  {
    id: "sn-5",
    date: "10",
    day: "Viernes",
    title: "La Percha Teatro",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sn-6",
    date: "12",
    day: "Domingo",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de San Nicolás
export const sanNicolasFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio San Nicolás",
  location: "Municipio San Nicolás, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro", "Arte de la representación"]
};
