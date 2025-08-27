// Data del Festival del Municipio Padilla
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio Padilla
export const padillaFestival: FestivalEvent[] = [
  {
    id: "pd-1",
    date: "3",
    day: "Viernes",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pd-2",
    date: "4",
    day: "Sábado",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pd-3",
    date: "5",
    day: "Domingo",
    title: "Organillermo",
    artist: "Organillermo",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "Guillermo Méndez"
  },
  {
    id: "pd-4",
    date: "8",
    day: "Miércoles",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pd-5",
    date: "10",
    day: "Jueves",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pd-6",
    date: "11",
    day: "Sábado",
    title: "Paseando con huapangos y tradición",
    artist: "Tradición Genuina",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Huasteca",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pd-7",
    date: "12",
    day: "Domingo",
    title: "El arte de la expresión musical",
    artist: "Bocatoma Jazz",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Padilla
export const padillaFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Padilla",
  location: "Municipio Padilla, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 7,
  categories: ["Música", "Teatro"]
};
