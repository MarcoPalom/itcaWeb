// Data del Festival del Municipio Miquihuana
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Miquihuana
export const miquihuanaFestival: FestivalEvent[] = [
  {
    id: "mq-1",
    date: "3",
    day: "Viernes",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Roberto Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "mq-2",
    date: "6",
    day: "Lunes",
    title: "¡Llévame!",
    artist: "Compañía Claunodromo",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro Comedia",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "mq-3",
    date: "12",
    day: "Domingo",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Miquihuana
export const miquihuanaFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Miquihuana",
  location: "Municipio Miquihuana, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 3,
  categories: ["Teatro"]
};
