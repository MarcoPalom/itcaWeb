// Data del Festival del Municipio Villagrán
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Villagrán
export const villagranFestival: FestivalEvent[] = [
  {
    id: "vg-1",
    date: "3",
    day: "Viernes",
    title: "Danzas de fuegos",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vg-2",
    date: "4",
    day: "Sábado",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Pantomima",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vg-3",
    date: "7",
    day: "Martes",
    title: "La Percha Teatro",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vg-4",
    date: "11",
    day: "Sábado",
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

// Información general del festival de Villagrán
export const villagranFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Villagrán",
  location: "Municipio Villagrán, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "11 de Octubre, 2025",
  totalEvents: 4,
  categories: ["Teatro", "Arte de la representación"]
};
