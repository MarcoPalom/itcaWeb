// Data del Festival del Municipio San Carlos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio San Carlos
export const sancarlosFestival: FestivalEvent[] = [
  {
    id: "sa-1",
    date: "10",
    day: "viernes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  },
  {
    id: "sa-2",
    date: "9",
    day: "jueves",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Escuela Primaria",
    time: "9:00 hrs."
  },
  {
    id: "sa-3",
    date: "4",
    day: "sábado",
    title: "Danzas de fuegos",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Danza",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  },
  {
    id: "sa-4",
    date: "11",
    day: "sábado",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Plaza Juárez, Zona Centro",
    time: "10:00 hrs."
  },
  {
    id: "sa-5",
    date: "12",
    day: "domingo",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio San Carlos
export const sanCarlosFestivalInfo: FestivalInfo = {
  name: "San Carlos",
  location: "San Carlos",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Teatro","Danza","Literatura"]
};

// Exposiciones del Festival del Municipio San Carlos
export const sancarlosFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
