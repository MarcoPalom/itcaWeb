// Data del Festival del Municipio Altamira
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '@/types';

// Dane
export const altamiraFestival: FestivalEvent[] = [
  {
    id: "al-1",
    date: "3",
    day: "viernes",
    title: "Distrito Cero",
    artist: "Distrito Cero",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Isla de la Esperanza Blvd. Cuco Sánchez",
    time: "19:00 hrs"
  },
  {
    id: "al-2",
    date: "4",
    day: "sábado",
    title: "Nación SKA",
    artist: "Los Valdés SKA",
    origin: "Tamaulipas",
    category: "Música | Fusión",
    venue: "Isla de la Esperanza Blvd. Cuco Sánchez",
    time: "19:00 hrs."
  },
  {
    id: "al-3",
    date: "6",
    day: "lunes",
    title: "Poetas y lugares con Viola Trigo",
    artist: "Viola Trigo",
    origin: "CDMX",
    category: "Interdisciplinario",
    venue: "Calle Quinterno N° 100 Zona Centro",
    time: "19:00 hrs."
  },
  {
    id: "al-4",
    date: "8",
    day: "miércoles",
    title: "Seguiré mi viaje",
    artist: "Las Hermanas García",
    origin: "Guerrero",
    category: "Música | Boleros Costeños",
    venue: "auditorio juan macias",
    time: "19:00 hrs."
  },
  {
    id: "al-5",
    date: "10",
    day: "viernes",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Artes de la representación | Circense",
    venue: "Isla de la Esperanza Blvd. Cuco Sánchez",
    time: "19:00 hrs."
  },
  {
    id: "al-6",
    date: "11",
    day: "sábado",
    title: "Cuatete Sound",
    artist: "Cuatete Sound",
    origin: "Guerrero",
    category: "Música",
    venue: "Isla de la Esperanza Blvd. Cuco Sánchez",
    time: "19:00 hrs."
  },
  {
    id: "al-7",
    date: "12",
    day: "domingo",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani ensamble coral",
    origin: "Tamaulipas",
    category: "Música | Fusión",
    venue: "Isla de la Esperanza Blvd. Cuco Sánchez",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Altamira
export const altamiraFestivalInfo: FestivalInfo = {
  name: "Altamira",
  location: "Altamira",
  totalEvents: 7,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Música", "Interdisciplinario", "Artes de la representación"]
};

// Exposiciones del Festival del Municipio Altamira
export const altamiraFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
