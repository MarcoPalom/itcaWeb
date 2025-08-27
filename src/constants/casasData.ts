// Data del Festival del Municipio Casas
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio Casas
export const casasFestival: FestivalEvent[] = [
  {
    id: "cs-1",
    date: "3",
    day: "Viernes",
    title: "De costa a costa",
    artist: "Grupo Folclórico Kauyumarie",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Danza folclórica",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "cs-2",
    date: "6",
    day: "Lunes",
    title: "La Percha Teatro",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "cs-3",
    date: "9",
    day: "Jueves",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Casas
export const casasFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Casas",
  location: "Municipio Casas, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "9 de Octubre, 2025",
  totalEvents: 3,
  categories: ["Danza", "Teatro"]
};
