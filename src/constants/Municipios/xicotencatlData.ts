// Data del Festival del Municipio Xicoténcatl
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Xicoténcatl
export const xicotencatlFestival: FestivalEvent[] = [
  {
    id: "xi-1",
    date: "3",
    day: "Viernes",
    title: "Tamaulipas es mi Tierra",
    artist: "Arael & Erihka Peña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Regional",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "xi-2",
    date: "4",
    day: "Sábado",
    title: "¡Llévame!",
    artist: "Compañía Claunódromo",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro Comedia",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "xi-3",
    date: "5",
    day: "Domingo",
    title: "Marimba Perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Marimba",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "xi-4",
    date: "6",
    day: "Lunes",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "xi-5",
    date: "10",
    day: "Viernes",
    title: "Quinteto de Alientos",
    artist: "UAT",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Alientos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "xi-6",
    date: "11",
    day: "Sábado",
    title: "En tierras Tamaulipecas",
    artist: "Norteños de Río Bravo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "xi-7",
    date: "12",
    day: "Domingo",
    title: "Trío Bohemia",
    artist: "UAT",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Trío",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Xicoténcatl (por ahora vacío, se puede agregar después)
export const xicotencatlExhibitions: FestivalExhibition[] = [];

// Información general del festival de Xicoténcatl
export const xicotencatlFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Xicoténcatl",
  location: "Municipio Xicoténcatl, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 7,
  categories: ["Música", "Teatro"]
};
