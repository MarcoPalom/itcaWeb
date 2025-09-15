// Data del Festival del Municipio Padilla
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Padilla
export const padillaFestival: FestivalEvent[] = [
  {
    id: "pa-1",
    date: "3",
    day: "viernes",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-2",
    date: "4",
    day: "sábado",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-3",
    date: "5",
    day: "domingo",
    title: "Organillermo",
    artist: "Director: Guillermo Méndez",
    origin: "Jalisco",
    category: "Música",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-4",
    date: "8",
    day: "miércoles",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Escuela Primaria \"Conrado Castillo\"",
    time: "9:00 hrs."
  },
  {
    id: "pa-5",
    date: "9",
    day: "jueves",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Escuela Primaria \"Josefa Ortíz de Dominguez\" Col. Vicente Guerrero",
    time: "9:00 hrs."
  },
  {
    id: "pa-6",
    date: "11",
    day: "sábado",
    title: "Paseando con huapangos y tradición",
    artist: "Tradición Genuina",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-7",
    date: "12",
    day: "domingo",
    title: "El arte de la expresión musical",
    artist: "Bocatoma Jazz",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  }
];

// Información del Festival del Municipio Padilla
export const padillaFestivalInfo: FestivalInfo = {
  name: "Padilla",
  location: "Padilla",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro"]
};

// Exposiciones del Festival del Municipio Padilla
export const padillaFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Padilla en los datos proporcionados
];
