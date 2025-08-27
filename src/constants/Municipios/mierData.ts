// Data del Festival del Municipio Mier
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Mier
export const mierFestival: FestivalEvent[] = [
  {
    id: "m-1",
    date: "3",
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
    id: "m-2",
    date: "4",
    day: "Sábado",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Música Folklórica Latinoamericana",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "m-3",
    date: "5",
    day: "Domingo",
    title: "Huasteca viva: 'Sonidos y raíces en el corazón tamaulipeco'",
    artist: "3 décadas de tradición con Soraima y sus Huastecos",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Huasteca",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "m-4",
    date: "7",
    day: "Martes",
    title: "Llamando a base",
    artist: "Colectivo Teatro de Bolsillo",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Infantil",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "m-5",
    date: "10",
    day: "Viernes",
    title: "Tamaulipas Galante",
    artist: "Camerata del Colegio 'San Juan Siglo XXI'",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Orquestal",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "m-6",
    date: "11",
    day: "Sábado",
    title: "De chile, mole y pozole",
    artist: "En Boca Ensamble",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Latinoamericana",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Tenor Nils Gustavo Becerra"
  },
  {
    id: "m-7",
    date: "12",
    day: "Domingo",
    title: "MIJKAILJUITL 'Leyendas, Mitos y Raíces, que se cuentan y bailan con Huapango'",
    artist: "Raíces Huastecas",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Danza Folclórica",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Dietrich Canizalez",
    description: "Agrupación interdisciplinaria de danza, música indumentaria y tradición"
  }
];

// Información general del festival de Mier
export const mierFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Mier",
  location: "Municipio Mier, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 7,
  categories: ["Música", "Teatro", "Danza"]
};
