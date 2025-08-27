// Data del Festival del Municipio San Carlos
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio San Carlos
export const sanCarlosFestival: FestivalEvent[] = [
  {
    id: "sc-1",
    date: "3",
    day: "Viernes",
    title: "De amores, polka y huapango",
    artist: "La Nota Alegre",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sc-2",
    date: "4",
    day: "Sábado",
    title: "Danzas de fuego",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sc-3",
    date: "9",
    day: "Jueves",
    title: "La Percha Teatro",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sc-4",
    date: "10",
    day: "Viernes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sc-5",
    date: "11",
    day: "Sábado",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sc-6",
    date: "12",
    day: "Domingo",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de San Carlos
export const sanCarlosFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio San Carlos",
  location: "Municipio San Carlos, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro", "Arte de la representación"]
};
