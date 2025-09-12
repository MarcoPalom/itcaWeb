// Data del Festival del Municipio Abasolo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Abasolo
export const abasoloFestival: FestivalEvent[] = [
  {
    id: "ab-1",
    date: "5",
    day: "domingo",
    title: "El Lobo",
    artist: "La Percha Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Plaza",
    time: "18:00 hrs."
  },
  {
    id: "ab-2",
    date: "12",
    day: "domingo",
    title: "Llamando a base",
    artist: "Colectivo teatro de bolsillo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Plaza",
    time: "18:00 hrs."
  },
  {
    id: "ab-3",
    date: "7",
    day: "martes",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "18:00 hrs."
  },
  {
    id: "ab-4",
    date: "3",
    day: "viernes",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "18:00 hrs."
  },
  {
    id: "ab-5",
    date: "6",
    day: "lunes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Plaza",
    time: "18:00 hrs."
  },
  {
    id: "ab-6",
    date: "4",
    day: "sábado",
    title: "Urban revolution",
    artist: "MFOX La Puerta del Talento",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "18:00 hrs."
  },
  {
    id: "ab-7",
    date: "11",
    day: "sábado",
    title: "Sones de mi México",
    artist: "Grupo de danza Anacahuitas",
    origin: "Tamaulipas",
    category: "Danza",
    venue: "Plaza",
    time: "18:00 hrs."
  }
];

// Información del Festival del Municipio Abasolo
export const abasoloFestivalInfo: FestivalInfo = {
  name: "Abasolo",
  location: "Abasolo",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Teatro","Interdisciplinario","Danza"]
};

// Exposiciones del Festival del Municipio Abasolo
export const abasoloFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
