// Data del Festival del Municipio Miquihuana
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Miquihuana
export const miquihuanaFestival: FestivalEvent[] = [
  {
    id: "mi-1",
    date: "3",
    day: "viernes",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "mi-2",
    date: "6",
    day: "lunes",
    title: "¡Llévame!",
    artist: "Compañía Claunodromo",
    origin: "Jalisco",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "mi-3",
    date: "12",
    day: "domingo",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    venue: "Lugar por definir",
    time: "Horario por definir"
  }
];

// Información del Festival del Municipio Miquihuana
export const miquihuanaFestivalInfo: FestivalInfo = {
  name: "Miquihuana",
  location: "Miquihuana",
  totalEvents: 3,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Literatura", "Interdisciplinario", "Teatro"]
};

// Exposiciones del Festival del Municipio Miquihuana
export const miquihuanaFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
