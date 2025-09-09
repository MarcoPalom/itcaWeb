// Data del Festival del Municipio Padilla
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Padilla
export const padillaFestival: FestivalEvent[] = [
  {
    id: "pa-1",
    date: "5",
    day: "domingo",
    title: "Organillermo",
    artist: "Guillermo Méndez",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-2",
    date: "4",
    day: "sábado",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los Del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-3",
    date: "11",
    day: "sábado",
    title: "Paseando con huapangos y tradición",
    artist: "Tradición Genuina",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  },
  {
    id: "pa-4",
    date: "9",
    day: "jueves",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Escuela Primaria",
    time: "9:00 hrs."
  },
  {
    id: "pa-5",
    date: "8",
    day: "miércoles",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Escuela Primaria",
    time: "9:00 hrs."
  },
  {
    id: "pa-6",
    date: "3",
    day: "viernes",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
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
    category: "Interdisciplinario",
    venue: "Teatro del Pueblo",
    time: "17:30 hrs."
  }
];

// Información del Festival del Municipio Padilla
export const padillaFestivalInfo: FestivalInfo = {
  name: "Padilla",
  location: "Padilla",
  totalEvents: 7,
  startDate: "3 de enero de 2025",
  endDate: "12 de enero de 2025",
  categories: ["Interdisciplinario","Música","Literatura","Teatro"]
};

// Exposiciones del Festival del Municipio Padilla
export const padillaFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
