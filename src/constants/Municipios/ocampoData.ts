// Data del Festival del Municipio Ocampo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Ocampo
export const ocampoFestival: FestivalEvent[] = [
  {
    id: "oc-1",
    date: "3",
    day: "Viernes",
    title: "Marimba Perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Marimba",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "oc-2",
    date: "4",
    day: "Sábado",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "oc-3",
    date: "7",
    day: "Martes",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "oc-4",
    date: "9",
    day: "Jueves",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "oc-5",
    date: "11",
    day: "Sábado",
    title: "Quinteto de Alientos",
    artist: "UAT",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Alientos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "oc-6",
    date: "12",
    day: "Domingo",
    title: "Tributo al príncipe de la canción \"José José\"",
    artist: "Rondalla Magisterial de Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Versátil",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Mtro. Oscar Aguilar del Valle"
  }
];

// Exposiciones del Festival de Ocampo (por ahora vacío, se puede agregar después)
export const ocampoExhibitions: FestivalExhibition[] = [];

// Información general del festival de Ocampo
export const ocampoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Ocampo",
  location: "Municipio Ocampo, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 6,
  categories: ["Música", "Teatro"]
};
