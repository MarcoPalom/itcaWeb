// Data del Festival del Municipio Palmillas
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Palmillas
export const palmillasFestival: FestivalEvent[] = [
  {
    id: "pl-1",
    date: "3",
    day: "Viernes",
    title: "Tributo al príncipe de la canción \"José José\"",
    artist: "Rondalla Magisterial de Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Versátil",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "Mtro. Oscar Aguilar del Valle"
  },
  {
    id: "pl-2",
    date: "4",
    day: "Sábado",
    title: "Cuentos para el mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pl-3",
    date: "8",
    day: "Miércoles",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "José Palacios"
  },
  {
    id: "pl-4",
    date: "10",
    day: "Viernes",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pl-5",
    date: "11",
    day: "Sábado",
    title: "Marimba perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Marimba",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "pl-6",
    date: "12",
    day: "Domingo",
    title: "Trío UATsteco",
    artist: "Trío UATsteco",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Palmillas
export const palmillasFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Palmillas",
  location: "Municipio Palmillas, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro"]
};
