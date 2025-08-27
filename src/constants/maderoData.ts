// Data del Festival del Municipio Madero
import { FestivalEvent, FestivalExhibition, FestivalInfo } from './types';

// Data del Festival del Municipio Madero
export const maderoFestival: FestivalEvent[] = [
  {
    id: "md-1",
    date: "3",
    day: "Viernes",
    title: "Esther Tovar \"La dama del bolero Jazz\"",
    artist: "Esther Tovar",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Bolero jazz",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "md-2",
    date: "4",
    day: "Sábado",
    title: "Cumbia por el Mundo",
    artist: "Ronda Machetera (Ronda Bogotá + Pato Machete)",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Fusión de cumbia y hip-hop",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "md-3",
    date: "5",
    day: "Domingo",
    title: "Poetas y Lugares con Viola Trigo",
    artist: "Viola Trigo",
    origin: "CDMX",
    category: "Literatura",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "md-4",
    date: "7",
    day: "Martes",
    title: "Seguiré mi viaje",
    artist: "Las Hermanas García",
    origin: "Guerrero",
    category: "Música",
    subcategory: "Boleros Costeños",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "md-5",
    date: "10",
    day: "Viernes",
    title: "Música de banda del planeta tierra",
    artist: "Brassas Mexican Beat",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "md-6",
    date: "11",
    day: "Sábado",
    title: "Circuito Rock",
    artist: "Punto Exacto, El cuervo y Mr. Trash",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Rock",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "md-7",
    date: "12",
    day: "Domingo",
    title: "Noches Adictiva5",
    artist: "Adicto5",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Rock, Pop",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Madero (por ahora vacío, se puede agregar después)
export const maderoExhibitions: FestivalExhibition[] = [];

// Información general del festival de Madero
export const maderoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Madero",
  location: "Municipio Madero, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 7,
  categories: ["Música", "Literatura"]
};
