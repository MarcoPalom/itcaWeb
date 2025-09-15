// Data del Festival del Municipio Casas
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Casas
export const casasFestival: FestivalEvent[] = [
  {
    id: "ca-1",
    date: "3",
    day: "viernes",
    title: "De costa a costa",
    artist: "Grupo Folklórico Kauyumarie",
    origin: "Tamaulipas",
    category: "Danza",
    venue: "Plaza Principal Cabecera Municipal",
    time: "16:00 hrs."
  },
  {
    id: "ca-2",
    date: "6",
    day: "lunes",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Escuela Primaria \"Amado Nervo\" en Ej. \"La Lajilla\"",
    time: "10:00 hrs."
  },
  {
    id: "ca-3",
    date: "9",
    day: "jueves",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Ejido \"Lázaro Cárdenas del Río\"",
    time: "10:00 hrs."
  }
];

// Información del Festival del Municipio Casas
export const casasFestivalInfo: FestivalInfo = {
  name: "Casas",
  location: "Casas",
  totalEvents: 3,
  startDate: "3 de octubre de 2025",
  endDate: "9 de octubre de 2025",
  categories: ["Danza", "Teatro"]
};

// Exposiciones del Festival del Municipio Casas
export const casasFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Casas en los datos proporcionados
];
