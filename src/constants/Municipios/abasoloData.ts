// Data del Festival del Municipio Abasolo
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Abasolo
export const abasoloFestival: FestivalEvent[] = [
  {
    id: "ab-1",
    date: "3",
    day: "Viernes",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ab-2",
    date: "4",
    day: "Sábado",
    title: "Urban revolution",
    artist: "MFOX La Puerta del Talento",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Urbana y Hip Hop",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ab-3",
    date: "5",
    day: "Domingo",
    title: "La Percha Teatro",
    artist: "La Percha Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ab-4",
    date: "6",
    day: "Lunes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ab-5",
    date: "7",
    day: "Martes",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ab-6",
    date: "11",
    day: "Sábado",
    title: "Sones de mi México",
    artist: "Grupo de danza Anacahuitas",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Danza folclórica",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ab-7",
    date: "12",
    day: "Domingo",
    title: "Llamando a base",
    artist: "Teatro de bolsillo",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Infantil",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "Armando Mancilla"
  }
];

// Información general del festival de Abasolo
export const abasoloFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Abasolo",
  location: "Municipio Abasolo, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 7,
  categories: ["Música", "Danza", "Teatro", "Arte de la representación"]
};
