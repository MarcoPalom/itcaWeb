// Data del Festival del Municipio Güémez
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Güémez
export const guemezFestival: FestivalEvent[] = [
  {
    id: "gu-1",
    date: "3",
    day: "viernes",
    title: "Sones de mi México",
    artist: "Grupo de danza Anacahuitas",
    origin: "Tamaulipas",
    category: "Danza",
    venue: "Auditorio del Ayuntamiento en la Cabecera Municipal",
    time: "19:00 hrs."
  },
  {
    id: "gu-2",
    date: "5",
    day: "domingo",
    title: "Trío UATsteco",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "gu-3",
    date: "8",
    day: "miércoles",
    title: "Organillermo",
    artist: "Director: Guillermo Méndez",
    origin: "Jalisco",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "gu-4",
    date: "9",
    day: "jueves",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "gu-5",
    date: "10",
    day: "viernes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Foro de la Escuela Secundaria Técnica #43 en la Cabecera Municipal",
    time: "11:00 hrs."
  },
  {
    id: "gu-6",
    date: "12",
    day: "domingo",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de la Cabecera Municipal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Güémez
export const guemezFestivalInfo: FestivalInfo = {
  name: "Güémez",
  location: "Güémez",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro", "Danza"]
};

// Exposiciones del Festival del Municipio Güémez
export const guemezFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Güémez en los datos proporcionados
];
