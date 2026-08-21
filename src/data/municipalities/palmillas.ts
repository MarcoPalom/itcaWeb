// Data del Festival del Municipio Palmillas
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '@/types';

// Dane
export const palmillasFestival: FestivalEvent[] = [
  {
    id: "pa-1",
    date: "3",
    day: "viernes",
    title: "Tributo al príncipe de la canción \"José José\"",
    artist: "Rondalla Magisterial de Tamaulipas",
    origin: "Tamaulipas",
    category: "Música | Versátil",
    venue: "Parque de Bienestar \"Plazuela\"",
    time: "18:00 hrs"
  },
  {
    id: "pa-2",
    date: "4",
    day: "sábado",
    title: "Cuentos para el mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro | Cuentacuentos",
    venue: "Parque de Bienestar \"Plazuela\"",
    time: "18:00 hrs."
  },
  {
    id: "pa-3",
    date: "8",
    day: "miércoles",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Escuela Primaria Lauro Aguirre",
    time: "9:00 hrs"
  },
  {
    id: "pa-4",
    date: "10",
    day: "viernes",
    title: "Las futbolistas",
    artist: "Ráfaga Teatro",
    origin: "CDMX-Estado de México",
    category: "Teatro | Teatro de calle",
    venue: "Escuela Telesecundaria \"Miguel Hidalgo\"",
    time: "9:00 hrs."
  },
  {
    id: "pa-5",
    date: "11",
    day: "sábado",
    title: "Marimba perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Música | Marimba",
    venue: "Parque de Bienestar \"Plazuela\"",
    time: "18:00 hrs."
  }
];

// Información del Festival del Municipio Palmillas
export const palmillasFestivalInfo: FestivalInfo = {
  name: "Palmillas",
  location: "Palmillas",
  totalEvents: 5,
  startDate: "3 de octubre de 2025",
  endDate: "11 de octubre de 2025",
  categories: ["Música", "Teatro", "Versátil", "Cuentacuentos", "Teatro de calle", "Marimba"]
};

// Exposiciones del Festival del Municipio Palmillas
export const palmillasFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
