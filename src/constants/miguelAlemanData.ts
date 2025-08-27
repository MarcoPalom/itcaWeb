// Data del Festival del Municipio Miguel Alemán
import { FestivalEvent, FestivalExhibition, FestivalInfo } from './types';

// Data del Festival del Municipio Miguel Alemán
export const miguelAlemanFestival: FestivalEvent[] = [
  {
    id: "ma-1",
    date: "3",
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
    id: "ma-2",
    date: "4",
    day: "Sábado",
    title: "Concierto Rockteño",
    artist: "Warislov",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ma-3",
    date: "5",
    day: "Domingo",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Música Folklórica Latinoamericana",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Miguel Alemán
export const miguelAlemanFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Miguel Alemán",
  location: "Municipio Miguel Alemán, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "5 de Octubre, 2025",
  totalEvents: 3,
  categories: ["Música"]
};
