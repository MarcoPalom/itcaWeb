// Data del Festival del Municipio Nuevo Morelos
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Nuevo Morelos
export const nuevomorelosFestival: FestivalEvent[] = [
  {
    id: "nu-1",
    date: "3",
    day: "viernes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Cancha del Ejido de Nuevo Morelos (A un costado del Lienzo Charro)",
    time: "18:30 hrs."
  },
  {
    id: "nu-2",
    date: "4",
    day: "sábado",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas-PROFEST",
    category: "Interdisciplinario",
    venue: "Auditorio Municipal (Calle Independencia s/n Col. Centro)",
    time: "18:30 hrs."
  },
  {
    id: "nu-3",
    date: "6",
    day: "lunes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Escuela Miguel Hidalgo (Calle Miguel Negrete s/n, Col. Zona Centro)",
    time: "11:30 hrs."
  },
  {
    id: "nu-4",
    date: "8",
    day: "miércoles",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro",
    venue: "Secundaria General \"Juan Martínez García\" (Carretera Barra de Navidad s/n, Col. Zona Centro)",
    time: "10:00 hrs."
  },
  {
    id: "nu-5",
    date: "12",
    day: "domingo",
    title: "Con las manos entre los pies",
    artist: "Grupo espejos taller de teatro y pantomima",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Explanada Ejidal, Ejido \"Ampliación de la Reforma\"",
    time: "17:30 hrs."
  }
];

// Información del Festival del Municipio Nuevo Morelos
export const nuevoMorelosFestivalInfo: FestivalInfo = {
  name: "Nuevo Morelos",
  location: "Nuevo Morelos",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Teatro", "Interdisciplinario"]
};

// Exposiciones del Festival del Municipio Nuevo Morelos
export const nuevomorelosFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
