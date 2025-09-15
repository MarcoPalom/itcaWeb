// Data del Festival del Municipio Ocampo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Ocampo
export const ocampoFestival: FestivalEvent[] = [
  {
    id: "oc-1",
    date: "3",
    day: "viernes",
    title: "Marimba perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Presidencia Municipal",
    time: "19:00 hrs."
  },
  {
    id: "oc-2",
    date: "4",
    day: "sábado",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Ejidal del Ejido \"El Pensil\"",
    time: "20:00 hrs."
  },
  {
    id: "oc-3",
    date: "7",
    day: "martes",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas-PROFEST",
    category: "Interdisciplinario",
    venue: "Techumbre de Plaza del Poblado Adolfo López Mateos (Chamal Nuevo)",
    time: "18:00 hrs."
  },
  {
    id: "oc-4",
    date: "9",
    day: "jueves",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    venue: "Techumbre de Plaza del Poblado Adolfo López Mateos (Chamal Nuevo)",
    time: "18:00 hrs."
  },
  {
    id: "oc-5",
    date: "11",
    day: "sábado",
    title: "Quinteto de Alientos UAT",
    artist: "Quinteto de Alientos UAT",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Presidencia Municipal",
    time: "19:00 hrs."
  },
  {
    id: "oc-6",
    date: "12",
    day: "domingo",
    title: "Tributo al príncipe de la canción \"José José\"",
    artist: "Rondalla Magisterial de Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Presidencia Municipal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Ocampo
export const ocampoFestivalInfo: FestivalInfo = {
  name: "Ocampo",
  location: "Ocampo",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro"]
};

// Exposiciones del Festival del Municipio Ocampo
export const ocampoFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
