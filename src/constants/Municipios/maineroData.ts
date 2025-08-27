// Data del Festival del Municipio Mainero
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Mainero
export const maineroFestival: FestivalEvent[] = [
  {
    id: "mn-1",
    date: "3",
    day: "Viernes",
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
    id: "mn-2",
    date: "8",
    day: "Miércoles",
    title: "La Percha Teatro",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "mn-3",
    date: "12",
    day: "Domingo",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos teatralizado",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Alberto Dávila y Josué Castillo"
  }
];

// Información general del festival de Mainero
export const maineroFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Mainero",
  location: "Municipio Mainero, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 3,
  categories: ["Teatro"]
};
