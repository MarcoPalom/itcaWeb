// Data del Festival del Municipio Tula
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Done
export const tulaFestival: FestivalEvent[] = [
  {
    id: "tu-2",
    date: "3",
    day: "viernes",
    title: "Concierto musical \"Un atardecer con la Internacional Orquesta Tampico de Claudio Rosas\"",
    artist: "Internacional Orquesta de Tampico",
    origin: "Tamaulipas",
    category: "Música | Versátil",
    venue: "Kiosco de la Plaza",
    time: "19:00 hrs."
  },
  {
    id: "tu-3",
    date: "4",
    day: "sábado",
    title: "Marimba Perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Música | Marimba",
    venue: "Explanada de la Presidencia Municipal",
    time: "18:30 hrs."
  },
  {
    id: "tu-4",
    date: "5",
    day: "domingo",
    title: "Primera Cita",
    artist: "Los Bernal de Linares",
    origin: "Nuevo León",
    category: "Música | Norteño",
    venue: "Explanada de la Presidencia Municipal",
    time: "18:30 hrs."
  },
  {
    id: "tu-5",
    date: "6",
    day: "lunes",
    title: "Me importas tú, boleros para abrazar",
    artist: "CIA. A la Deriva Teatro",
    origin: "Jalisco",
    category: "Teatro | Teatro para primera infancia",
    venue: "Jardín de Niños \"Teresita\"",
    time: "10:30 hrs."
  },
  {
    id: "tu-6",
    date: "7",
    day: "martes",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Escuela Miguel Hidalgo Centro",
    time: "10:30 hrs."
  },
  {
    id: "tu-7",
    date: "8",
    day: "miércoles",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Cuba",
    category: "Música | Boleros",
    venue: "Escuela Miguel Hidalgo Centro",
    time: "17:00 hrs."
  },
  {
    id: "tu-7b",
    date: "9",
    day: "jueves",
    title: "Kali Bafa",
    artist: "Ballet Folklórico de Apizaco",
    origin: "Tlaxcala",
    category: "Danza | Folklórico",
    venue: "Por definir",
    time: "18:00 hrs."
  },
  {
    id: "tu-8",
    date: "11",
    day: "sábado",
    title: "Trío UATsteco",
    artist: "Trío UATsteco",
    origin: "Tamaulipas",
    category: "UAT | Música",
    venue: "Explanada de la Presidencia Municipal",
    time: "18:30 hrs."
  },
  {
    id: "tu-9",
    date: "12",
    day: "domingo",
    title: "En tierras Tamaulipecas",
    artist: "Norteños de Río Bravo",
    origin: "Tamaulipas",
    category: "Música | Norteña",
    venue: "Explanada de la Presidencia Municipal",
    time: "18:30 hrs."
  }
];

// Información del Festival del Municipio Tula
export const tulaFestivalInfo: FestivalInfo = {
  name: "Tula",
  location: "Tula",
  totalEvents: 10,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Danza", "Música", "Teatro", "Tradicional del Estado de Tlaxcala", "Versátil", "Marimba", "Norteño", "Teatro para primera infancia", "Boleros", "UAT", "Norteña", "Folklórico"]
};

// Exposiciones del Festival del Municipio Tula
export const tulaFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
