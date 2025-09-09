// Data del Festival del Municipio Cruillas
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Cruillas
export const cruillasFestival: FestivalEvent[] = [
  {
    id: "cr-1",
    date: "9",
    day: "jueves",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Centro Cívico Municipal",
    time: "11:00 hrs."
  },
  {
    id: "cr-2",
    date: "12",
    day: "domingo",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  },
  {
    id: "cr-3",
    date: "3",
    day: "viernes",
    title: "Espectáculo musical",
    artist: "Son Kndla",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  },
  {
    id: "cr-4",
    date: "6",
    day: "lunes",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Centro Cívico Municipal",
    time: "11:00 hrs."
  },
  {
    id: "cr-5",
    date: "8",
    day: "miércoles",
    title: "Con las manos entre los pies",
    artist: "Grupo Espejos",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Centro Cívico Municipal",
    time: "11:00 hrs."
  },
  {
    id: "cr-6",
    date: "4",
    day: "sábado",
    title: "Paseando con huapangos y tradición",
    artist: "Tradición Genuina",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Cruillas
export const cruillasFestivalInfo: FestivalInfo = {
  name: "Cruillas",
  location: "Cruillas",
  totalEvents: 6,
  startDate: "3 de enero de 2025",
  endDate: "12 de enero de 2025",
  categories: ["Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Cruillas
export const cruillasFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
