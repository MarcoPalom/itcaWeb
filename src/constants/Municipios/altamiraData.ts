// Data del Festival del Municipio Altamira
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Altamira
export const altamiraFestival: FestivalEvent[] = [
  {
    id: "at-1",
    date: "3",
    day: "Viernes",
    title: "Distrito Cero",
    artist: "Distrito Cero",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "at-2",
    date: "4",
    day: "Sábado",
    title: "Nación SKA",
    artist: "Los Valdés SKA",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "at-3",
    date: "6",
    day: "Lunes",
    title: "Poetas y lugares con Viola Trigo",
    artist: "Viola Trigo",
    origin: "CDMX",
    category: "Literatura",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "at-4",
    date: "8",
    day: "Miércoles",
    title: "Seguiré mi viaje",
    artist: "Las Hermanas García",
    origin: "Guerrero",
    category: "Música",
    subcategory: "Boleros Costeños",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "at-5",
    date: "10",
    day: "Viernes",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Artes de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "at-6",
    date: "11",
    day: "Sábado",
    title: "Cuatete Sound",
    artist: "Cuatete Sound",
    origin: "Guerrero",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "at-7",
    date: "12",
    day: "Domingo",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani ensamble coral",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Altamira (por ahora vacío, se puede agregar después)
export const altamiraExhibitions: FestivalExhibition[] = [];

// Información general del festival de Altamira
export const altamiraFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Altamira",
  location: "Municipio Altamira, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 7,
  categories: ["Música", "Literatura", "Artes de la representación"]
};
