// Data del Festival del Municipio Camargo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Camargo
export const camargoFestival: FestivalEvent[] = [
  {
    id: "c-1",
    date: "3",
    day: "Viernes",
    title: "De chile, mole y pozole",
    artist: "En Boca Ensamble",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Mexicana y latinoamericana",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "Tenor Nils Gustavo Becerra"
  },
  {
    id: "c-2",
    date: "4",
    day: "Sábado",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "c-3",
    date: "6",
    day: "Lunes",
    title: "Concierto Fara Fara",
    artist: "Las Jaras",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Tradicional, polka, chotis",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "c-4",
    date: "9",
    day: "Jueves",
    title: "Madame Saxi",
    artist: "Charlotte Pescayre",
    origin: "Francia",
    category: "Interdisciplinario",
    subcategory: "Artes Circenses, pieza de danza en cuerda tensa para una maromera y su saxofón",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "c-5",
    date: "11",
    day: "Sábado",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Música Folklórica Latinoamericana",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "c-6",
    date: "12",
    day: "Domingo",
    title: "México en mi alma",
    artist: "Aglaé Salinas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Tradicional mexicana",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Camargo
export const camargoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Camargo",
  location: "Municipio Camargo, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Interdisciplinario"]
};
