// Data del Festival del Municipio Aldama
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Aldama
export const aldamaFestival: FestivalEvent[] = [
  {
    id: "al-1",
    date: "3",
    day: "Viernes",
    title: "En tierras Tamaulipecas",
    artist: "Los norteños de Río Bravo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-2",
    date: "4",
    day: "Sábado",
    title: "Esther Tovar \"La dama del bolero Jazz\"",
    artist: "Esther Tovar",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Bolero Jazz",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-3",
    date: "5",
    day: "Domingo",
    title: "Herencia Norteña",
    artist: "Grupo Pendiente",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-4",
    date: "8",
    day: "Miércoles",
    title: "Me importas tú, boleros para abrazar",
    artist: "CIA. A la Deriva Teatro",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro para primera infancia",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-5",
    date: "9",
    day: "Jueves",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas",
    category: "Artes de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-6",
    date: "10",
    day: "Viernes",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Cuba",
    category: "Música",
    subcategory: "Boleros",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-7",
    date: "11",
    day: "Sábado",
    title: "Trío Bohemia",
    artist: "UAT",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Trío",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "al-8",
    date: "12",
    day: "Domingo",
    title: "Del Vali & Wero Hernández",
    artist: "Del Vali & Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Aldama (por ahora vacío, se puede agregar después)
export const aldamaExhibitions: FestivalExhibition[] = [];

// Información general del festival de Aldama
export const aldamaFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Aldama",
  location: "Municipio Aldama, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 8,
  categories: ["Música", "Teatro", "Artes de la representación"]
};
