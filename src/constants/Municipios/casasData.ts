// Data del Festival del Municipio Casas
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Casas
export const casasFestival: FestivalEvent[] = [
  {
    id: "ca-1",
    date: "6",
    day: "lunes",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Escuela Primaria",
    time: "10:00 hrs."
  },
  {
    id: "ca-2",
    date: "9",
    day: "jueves",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Ejido",
    time: "10:00 hrs."
  },
  {
    id: "ca-3",
    date: "3",
    day: "viernes",
    title: "De costa a costa",
    artist: "Grupo Folclórico Kauyumarie",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal Cabecera Municipal",
    time: "16:00 hrs."
  }
];

// Información del Festival del Municipio Casas
export const casasFestivalInfo: FestivalInfo = {
  name: "Casas",
  location: "Casas",
  totalEvents: 3,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Teatro","Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Casas
export const casasFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
