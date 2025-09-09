// Data del Festival del Municipio Llera
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Llera
export const lleraFestival: FestivalEvent[] = [
  {
    id: "ll-1",
    date: "5",
    day: "domingo",
    title: "¡Llévame!",
    artist: "Compañía Claunodromo",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Explanada de la Presidencia Municipal",
    time: "18:00 hrs."
  },
  {
    id: "ll-2",
    date: "10",
    day: "viernes",
    title: "concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal",
    time: "20:00 hrs."
  },
  {
    id: "ll-3",
    date: "12",
    day: "domingo",
    title: "Urban revolution",
    artist: "MFOX La Puerta del Talento",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Explanada de la Presidencia Municipal",
    time: "19:00 hrs."
  },
  {
    id: "ll-4",
    date: "8",
    day: "miércoles",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Primaria",
    time: "11:00 hrs."
  },
  {
    id: "ll-5",
    date: "3",
    day: "viernes",
    title: "Se realiza inauguración del Festival con su Festival de Huapango",
    artist: "Festival de Huapango",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal de Llera",
    time: "20:00 hrs."
  }
];

// Información del Festival del Municipio Llera
export const lleraFestivalInfo: FestivalInfo = {
  name: "Llera",
  location: "Llera",
  totalEvents: 5,
  startDate: "3 de enero de 2025",
  endDate: "12 de enero de 2025",
  categories: ["Interdisciplinario","Música"]
};

// Exposiciones del Festival del Municipio Llera
export const lleraFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
