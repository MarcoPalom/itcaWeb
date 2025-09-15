// Data del Festival del Municipio Madero
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Madero
export const maderoFestival: FestivalEvent[] = [
  {
    id: "ma-1",
    date: "3",
    day: "viernes",
    title: "Esther Tovar \"La dama del bolero Jazz\"",
    artist: "Esther Tovar",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza \"Isauro Alfaro Otero\"",
    time: "19:00 hrs."
  },
  {
    id: "ma-2",
    date: "4",
    day: "sábado",
    title: "Cumbia por el Mundo",
    artist: "Ronda Machetera (Ronda Bogotá + Pato Machete)",
    origin: "Nuevo León",
    category: "Música",
    venue: "Plaza \"Isauro Alfaro Otero\"",
    time: "19:00 hrs."
  },
  {
    id: "ma-3",
    date: "5",
    day: "domingo",
    title: "Poetas y lugares",
    artist: "Viola Trigo",
    origin: "CDMX",
    category: "Interdisciplinario",
    venue: "Plaza \"Isauro Alfaro Otero\"",
    time: "19:00 hrs."
  },
  {
    id: "ma-4",
    date: "7",
    day: "martes",
    title: "Seguiré mi viaje",
    artist: "Las Hermanas García",
    origin: "Guerrero",
    category: "Música",
    venue: "Centro Cultural Bicentenario",
    time: "19:00 hrs."
  },
  {
    id: "ma-5",
    date: "10",
    day: "viernes",
    title: "Música de banda del planeta tierra",
    artist: "Brassas Mexican Beat",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza de Arte, Escolleras",
    time: "19:00 hrs."
  },
  {
    id: "ma-6",
    date: "11",
    day: "sábado",
    title: "ROCK",
    artist: "Punto Exacto, El cuervo y Mr. Trash",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza de Arte, Escolleras",
    time: "19:00 hrs."
  },
  {
    id: "ma-7",
    date: "12",
    day: "domingo",
    title: "Noches Adictiva5",
    artist: "Adicto5",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza de Arte, Escolleras",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Madero
export const maderoFestivalInfo: FestivalInfo = {
  name: "Madero",
  location: "Madero",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Música", "Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Madero
export const maderoFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
