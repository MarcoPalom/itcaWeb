// Data del Festival del Municipio Mante
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Mante
export const manteFestival: FestivalEvent[] = [
  {
    id: "ma-1",
    date: "3",
    day: "Viernes",
    title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Teatro del IMSS",
    time: "Por confirmar"
  },
  {
    id: "ma-2",
    date: "4",
    day: "Sábado",
    title: "Tamaulipas a la cámara \"Voces y cuerdas de nuestra tierra\"",
    artist: "ELGAR diseño musical",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Clásica",
    venue: "Castillo Nueva Apolonia",
    time: "Por confirmar",
    artisticDirection: "Alma Gabriela Lozano Leiva"
  },
  {
    id: "ma-3",
    date: "5",
    day: "Domingo",
    title: "El barco de papel",
    artist: "Teatro Ingenio – Creación",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar, considerar realizar por la mañana e invitar a escuelas",
    artisticDirection: "Marco Antonio Rivas Vélez"
  },
  {
    id: "ma-4",
    date: "6",
    day: "Lunes",
    title: "El vuelo de la Luciérnaga",
    artist: "Apapacho, arte y diversidad",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar, considerar realizar por la mañana e invitar a escuelas",
    cast: ["Guillermo Valencia", "Daniela Maldonado", "Sofía García"]
  },
  {
    id: "ma-5",
    date: "7",
    day: "Martes",
    title: "Me importas tu, boleros para abrazar",
    artist: "CIA. A la Deriva Teatro",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro para primera infancia",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ma-6",
    date: "8",
    day: "Miércoles",
    title: "Kayu",
    artist: "Gato negro teatro",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar, considerar realizar por la mañana e invitar a escuelas",
    artisticDirection: "Valentín Arias Flores",
    dramaturgy: "Valentín Arias Flores"
  },
  {
    id: "ma-7",
    date: "9",
    day: "Jueves",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Cuba",
    category: "Música",
    subcategory: "Boleros",
    venue: "Teatro del IMSS",
    time: "Por confirmar"
  },
  {
    id: "ma-8",
    date: "10",
    day: "Viernes",
    title: "El día que la gente pez salió del mar",
    artist: "Teatromorfosis",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar, considerar realizar por la mañana e invitar a escuelas",
    artisticDirection: "Helena Cruve"
  },
  {
    id: "ma-9",
    date: "10",
    day: "Viernes",
    title: "Cuatete Sound",
    artist: "Guerrero",
    origin: "Guerrero",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "ma-10",
    date: "11",
    day: "Sábado",
    title: "Piaf de bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Música",
    subcategory: "Cabaret, jazz",
    venue: "Teatro del IMSS",
    time: "Por confirmar"
  },
  {
    id: "ma-11",
    date: "11",
    day: "Sábado",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar, tomar en consideración que no se empalme con el evento de Piaf de bolsillo"
  },
  {
    id: "ma-12",
    date: "12",
    day: "Domingo",
    title: "Solata - Un concierto sobre duelo, distancia y raíz",
    artist: "Melisa Castellanos",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Mante (por ahora vacío, se puede agregar después)
export const manteExhibitions: FestivalExhibition[] = [];

// Información general del festival de Mante
export const manteFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Mante",
  location: "Municipio Mante, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Teatro del IMSS",
  totalEvents: 12,
  categories: ["Música", "Teatro"]
};
