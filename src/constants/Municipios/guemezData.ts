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
    venue: "Escuela Normal Rural de Tamaulipas, Kilómetro 16 Carretera Nacional",
    time: "18:30 hrs."
  },
  {
    id: "gu-2",
    date: "8",
    day: "miércoles",
    title: "Organillermo",
    artist: "Guillermo Méndez",
    origin: "Jalisco",
    category: "Música",
    venue: "Esc. Primaria \"Benito Juárez\", Ejido San José de las Flores, Kilómetro 18 Carretera Nacional",
    time: "11:00 hrs."
  },
  {
    id: "gu-3",
    date: "9",
    day: "jueves",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Esc. Primaria \"Asención Gómez\", Cabecera Municipal, Kilómetro 26 Carretera Matamoros",
    time: "11:00 hrs."
  },
  {
    id: "gu-4",
    date: "10",
    day: "viernes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Foro de la Escuela Secundaria Técnica #43 en la Cabecera Municipal, Kilómetro 26 Carretera Matamoros",
    time: "11:00 hrs."
  },
  {
    id: "gu-5",
    date: "12",
    day: "domingo",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Escuela Normal Rural de Tamaulipas, Kilómetro 16 Carretera Nacional",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Güémez
export const guemezFestivalInfo: FestivalInfo = {
  name: "Güémez",
  location: "Güémez",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro", "Danza"]
};

// Exposiciones del Festival del Municipio Güémez
export const guemezFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Güémez en los datos proporcionados
];
