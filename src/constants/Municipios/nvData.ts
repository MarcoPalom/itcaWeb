// Data del Festival de Nuevo Laredo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival de Nuevo Laredo
export const nuevoLaredoFestival: FestivalEvent[] = [
  {
    id: "nl-1",
    date: "3",
    day: "Viernes",
    title: "Broadway Baby",
    artist: "Bianca Marroquín",
    origin: "Tamaulipas-México-Estados Unidos",
    category: "Teatro",
    subcategory: "Teatro Musical",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar"
  },
  {
    id: "nl-2",
    date: "4",
    day: "Sábado",
    title: "De Miles y Manzanero, ecos de dos orillas",
    artist: "Last Word Trío",
    origin: "Nuevo León",
    category: "Música",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar"
  },
  {
    id: "nl-3",
    date: "5",
    day: "Domingo",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Cuba",
    category: "Música",
    subcategory: "Boleros",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar"
  },
  {
    id: "nl-4",
    date: "6",
    day: "Lunes",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    subcategory: "Música, danza",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar"
  },
  {
    id: "nl-5",
    date: "7",
    day: "Martes",
    title: "Piaf de Bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Música",
    subcategory: "Cabaret, jazz",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar"
  },
  {
    id: "nl-6",
    date: "8",
    day: "Miércoles",
    title: "Polvo Enamorado",
    artist: "Producción escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    subcategory: "Teatro y música homenaje a compositores tamaulipecos",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar",
    cast: [
      "Pepe Navarrete",
      "Polo Rojas", 
      "Cynthia Sánchez",
      "Héctor Gamaliel",
      "Júpiter Bautista",
      "Isabelle Govea",
      "Carmen Sarahí"
    ]
  },
  {
    id: "nl-7",
    date: "9",
    day: "Jueves",
    title: "Tamaulipas galante",
    artist: "Camerata del Colegio 'San Juan Siglo XXI'",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Orquesta",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "nl-8",
    date: "10",
    day: "Viernes",
    title: "Afrodescendencia Matamoros #Porquelollevamosenlasangre",
    artist: "Afrodescendencia Matamoros",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Tradicional y popular latinoamericana",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar"
  },
  {
    id: "nl-9",
    date: "11",
    day: "Sábado",
    title: "Se nos quedaron ellos",
    artist: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
    origin: "CDMX",
    category: "Danza",
    subcategory: "Danza Contemporánea",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar",
    artisticDirection: "Cecilia Lugo",
    choreography: "Francisco Córdova"
  },
  {
    id: "nl-10",
    date: "11",
    day: "Sábado",
    title: "MIJKAILJUITL 'Leyendas, Mitos y Raíces, que se cuentan y bailan con Huapango'",
    artist: "Raíces Huastecas",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Danza Folclórica",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Dietrich Canizalez",
    description: "Agrupación interdisciplinaria de danza, música indumentaria y tradición"
  },
  {
    id: "nl-11",
    date: "12",
    day: "Domingo",
    title: "Orinoco",
    artist: "DOSCE La Compañía",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
    time: "Por confirmar",
    artisticDirection: "Sandra Muñoz",
    description: "En el marco del Centenario del nacimiento de Emilio Carballido (1925-2008)"
  }
];

// Exposición del Festival
export const nuevoLaredoExhibition: FestivalExhibition = {
  id: "nl-expo-1",
  title: "Memorias",
  artist: "Agnes Druenne",
  origin: "Bélgica",
  category: "Exposición",
  subcategory: "Escultura y óleos",
  venue: "Estación Palabra, Nuevo Laredo, Tamaulipas",
  startDate: "3 Octubre del 2025",
  endDate: "11 de Enero del 2026",
  description: "Colección del Artista"
};

// Información general del festival
export const nuevoLaredoFestivalInfo = {
  name: "Festival de Nuevo Laredo",
  location: "Nuevo Laredo, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Teatro Principal del Centro Cultural Nuevo Laredo",
  totalEvents: 11,
  categories: ["Teatro", "Música", "Danza", "Interdisciplinario", "Exposición"]
};
