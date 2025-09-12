// Data del Festival del Municipio Güémez
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Güémez
export const guemezFestival: FestivalEvent[] = [
  {
    id: "gü-1",
    date: "8",
    day: "miércoles",
    title: "Organillermo",
    artist: "Guillermo Méndez",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "gü-2",
    date: "10",
    day: "viernes",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Literatura",
    venue: "Foro de la Escuela Secundaria Técnica #43",
    time: "11:00 hrs."
  },
  {
    id: "gü-3",
    date: "5",
    day: "domingo",
    title: "Concierto Trío UATsteco",
    artist: "Trío UATsteco",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "gü-4",
    date: "10",
    day: "viernes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Foro de la Escuela Secundaria Técnica #43",
    time: "11:00 hrs."
  },
  {
    id: "gü-5",
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
    id: "gü-6",
    date: "12",
    day: "domingo",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Plaza Principal de la Cabecera Municipal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Güémez
export const guemezFestivalInfo: FestivalInfo = {
  name: "Güémez",
  location: "Güémez",
  totalEvents: 0,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario","Literatura","Música","Teatro","Danza"]
};

// Exposiciones del Festival del Municipio Güémez
export const guemezFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
