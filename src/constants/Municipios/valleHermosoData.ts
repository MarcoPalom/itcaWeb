// Data del Festival del Municipio Valle Hermoso
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Valle Hermoso
export const valleHermosoFestival: FestivalEvent[] = [
  {
    id: "vh-1",
    date: "3",
    day: "Viernes",
    title: "Huasteca viva: 'Sonidos y raíces en el corazón tamaulipeco'",
    artist: "3 décadas de tradición con Soraima y sus Huastecos",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Huasteca",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vh-2",
    date: "4",
    day: "Sábado",
    title: "Concierto Fara Fara",
    artist: "Las Jaras",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Tradicional, polka, chotis",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vh-3",
    date: "5",
    day: "Domingo",
    title: "Del Vali & Wero Hernández",
    artist: "Del Vali & Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vh-4",
    date: "9",
    day: "Jueves",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vh-5",
    date: "10",
    day: "Viernes",
    title: "Cazando Estrellas en Bicicleta",
    artist: "Las Plastiqué Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle para infancias",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vh-6",
    date: "11",
    day: "Sábado",
    title: "De amores, polka y huapango",
    artist: "La Nota Alegre",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vh-7",
    date: "12",
    day: "Domingo",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Valle Hermoso
export const valleHermosoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Valle Hermoso",
  location: "Municipio Valle Hermoso, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 7,
  categories: ["Música", "Teatro", "Arte de la representación"]
};
