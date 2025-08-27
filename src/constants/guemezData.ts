// Data del Festival del Municipio Güémez
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio Güémez
export const guemezFestival: FestivalEvent[] = [
  {
    id: "gm-1",
    date: "3",
    day: "Viernes",
    title: "Sones de mi México",
    artist: "Grupo de Danza Anacahuitas",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Danza folclórica",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gm-2",
    date: "5",
    day: "Domingo",
    title: "Trío UATsteco",
    artist: "Trío UATsteco",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gm-3",
    date: "8",
    day: "Miércoles",
    title: "Organillermo",
    artist: "Organillermo",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar",
    director: "Guillermo Méndez"
  },
  {
    id: "gm-4",
    date: "9",
    day: "Jueves",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Cuentacuentos teatralizado",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Alberto Dávila y Josué Castillo"
  },
  {
    id: "gm-5",
    date: "10",
    day: "Viernes",
    title: "Canasta de cuentos de la zona donde vivimos",
    artist: "Grupo de Teatro Guarapo",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gm-6",
    date: "12",
    day: "Domingo",
    title: "Las favoritas con Grupo Relativo",
    artist: "Grupo Relativo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Güémez
export const guemezFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Güémez",
  location: "Municipio Güémez, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Danza", "Música", "Teatro"]
};
