// Data del Festival del Municipio Jaumave
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Jaumave
export const jaumaveFestival: FestivalEvent[] = [
  {
    id: "jv-1",
    date: "3",
    day: "Viernes",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "jv-2",
    date: "4",
    day: "Sábado",
    title: "Majestuosa Camada San Simón Cerro",
    artist: "Majestuosa Camada San Simón Cerro",
    origin: "Tlaxcala",
    category: "Danza",
    subcategory: "Tradicional del Estado de Tlaxcala",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "jv-3",
    date: "6",
    day: "Lunes",
    title: "Cuentos del mundo",
    artist: "Roberto Cuentacuentos",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "jv-4",
    date: "9",
    day: "Jueves",
    title: "La tienda de Don Verdi",
    artist: "José Palacios",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "José Palacios"
  },
  {
    id: "jv-5",
    date: "11",
    day: "Sábado",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "jv-6",
    date: "12",
    day: "Domingo",
    title: "Marimba perpetua",
    artist: "Percutam Dúo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Marimba",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Jaumave
export const jaumaveFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Jaumave",
  location: "Municipio Jaumave, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Danza", "Teatro"]
};
