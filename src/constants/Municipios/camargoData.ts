// Data del Festival del Municipio Camargo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Camargo
export const camargoFestival: FestivalEvent[] = [
  {
    id: "ca-1",
    date: "3",
    day: "viernes",
    title: "De chile, mole y pozole",
    artist: "En Boca Ensamble",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "MAHM Camargo Museo y Archivo Histórico (Patio)",
    time: "18:30 hrs."
  },
  {
    id: "ca-2",
    date: "4",
    day: "sábado",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    venue: "Kiosko Plaza Principal \"Miguel Hidalgo\"",
    time: "18:30 hrs."
  },
  {
    id: "ca-3",
    date: "6",
    day: "lunes",
    title: "Concierto Fara Fara",
    artist: "Las Jaras",
    origin: "Guerrero",
    category: "Música",
    venue: "Foro de Casa de la Cultura",
    time: "18:30 hrs."
  },
  {
    id: "ca-4",
    date: "9",
    day: "jueves",
    title: "Madame Saxi",
    artist: "Charlotte Pescayre",
    origin: "Francia",
    category: "Interdisciplinario",
    venue: "Kiosko Plaza Principal \"Miguel Hidalgo\"",
    time: "18:30 hrs."
  },
  {
    id: "ca-5",
    date: "11",
    day: "sábado",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nuevo León",
    category: "Interdisciplinario",
    venue: "Foro Plaza Principal \"Miguel Hidalgo\"",
    time: "18:30 hrs."
  },
  {
    id: "ca-6",
    date: "12",
    day: "domingo",
    title: "México en mi alma",
    artist: "Aglaé Salinas",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Foro Plaza Principal \"Miguel Hidalgo\"",
    time: "18:30 hrs."
  }
];

// Información del Festival del Municipio Camargo
export const camargoFestivalInfo: FestivalInfo = {
  name: "Camargo",
  location: "Camargo",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música"]
};

// Exposiciones del Festival del Municipio Camargo
export const camargoFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Camargo en los datos proporcionados
];
