// Data del Festival del Municipio San Fernando
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio San Fernando
export const sanFernandoFestival: FestivalEvent[] = [
  {
    id: "sf-1",
    date: "3",
    day: "Viernes",
    title: "Concierto Fara Fara",
    artist: "Las Jaras",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Tradicional, polka, chotis",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sf-2",
    date: "4",
    day: "Sábado",
    title: "Popteño, Que no muera la música norteña",
    artist: "El Contrato",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sf-3",
    date: "5",
    day: "Domingo",
    title: "Danzas de fuegos",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sf-4",
    date: "8",
    day: "Miércoles",
    title: "Cazando Estrellas en Bicicleta",
    artist: "Las Plastiqué Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle para infancias",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sf-5",
    date: "9",
    day: "Jueves",
    title: "Del Vali & Wero Hernández",
    artist: "Del Vali & Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sf-6",
    date: "11",
    day: "Sábado",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "sf-7",
    date: "12",
    day: "Domingo",
    title: "Mosaico Musical",
    artist: "Banda Sinfónica Municipal de Reynosa Mtro. Elías Valenzuela",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Sinfónica",
    venue: "Por confirmar",
    time: "Por confirmar (programar temprano para regreso a Reynosa)"
  }
];

// Información general del festival de San Fernando
export const sanFernandoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio San Fernando",
  location: "Municipio San Fernando, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 7,
  categories: ["Música", "Teatro", "Arte de la representación"]
};
