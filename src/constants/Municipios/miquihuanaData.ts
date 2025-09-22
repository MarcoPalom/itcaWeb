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
    venue: "Plaza Principal \"Miguel Hidalgo\"",
    time: "18:00 hrs."
  },
  {
    id: "mi-2",
    date: "6",
    day: "lunes",
    title: "¡Llévame!",
    artist: "Compañía Claunodromo",
    origin: "Jalisco",
    category: "Interdisciplinario",
    venue: "Esc. Sec. Tec. #26 \"Gral. Alberto Carrera Torres\"",
    time: "11:00 hrs."
  },
  {
    id: "mi-3",
    date: "12",
    day: "domingo",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    venue: "Plaza Principal \"Miguel Hidalgo\"",
    time: "18:00 hrs."
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
