// Data del Festival del Municipio Nuevo Morelos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Nuevo Morelos
export const nuevomorelosFestival: FestivalEvent[] = [
  {
    id: "nu-1",
    date: "12",
    day: "domingo",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Explanada Ejidal, Ejido",
    time: "17:30 hrs."
  },
  {
    id: "nu-2",
    date: "3",
    day: "viernes",
    title: "Concierto Quinteto de Alientos UAT",
    artist: "Quinteto de Alientos UAT",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "nu-3",
    date: "6",
    day: "lunes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Escuela Miguel Hidalgo",
    time: "11:30 hrs."
  },
  {
    id: "nu-4",
    date: "12",
    day: "domingo",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Explanada Ejidal, Ejido",
    time: "17:30 hrs."
  }
];

// Información del Festival del Municipio Nuevo Morelos
export const nuevoMorelosFestivalInfo: FestivalInfo = {
  name: "Nuevo Morelos",
  location: "Nuevo Morelos",
  totalEvents: 4,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Música"]
};

// Exposiciones del Festival del Municipio Nuevo Morelos
export const nuevomorelosFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
