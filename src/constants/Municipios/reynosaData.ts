// Data del Festival del Municipio Reynosa
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Reynosa
export const reynosaFestival: FestivalEvent[] = [
  {
    id: "r-1",
    date: "3",
    day: "Viernes",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    subcategory: "Música, danza",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar"
  },
  {
    id: "r-2",
    date: "4",
    day: "Sábado",
    title: "Sabor Life is Rhythm",
    artist: "Sabor Life is Rhythm",
    origin: "España, Inglaterra, Francia, Italia y México",
    category: "Interdisciplinario",
    subcategory: "Música, tap, jazz",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar",
    artisticDirection: "Iván Bouchain y Gaëtan Farnier"
  },
  {
    id: "r-3",
    date: "4",
    day: "Sábado",
    title: "Matías Aguayo",
    artist: "Matías Aguayo",
    origin: "Chile",
    category: "Música",
    subcategory: "DJ",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "r-4",
    date: "5",
    day: "Domingo",
    title: "Broadway Baby",
    artist: "Bianca Marroquín",
    origin: "Tamaulipas-México-Estados Unidos",
    category: "Teatro",
    subcategory: "Teatro Musical",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar"
  },
  {
    id: "r-5",
    date: "6",
    day: "Lunes",
    title: "Orinoco",
    artist: "DOSCE La Compañía",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar",
    artisticDirection: "Sandra Muñoz",
    description: "En el marco del Centenario del nacimiento de Emilio Carballido (1925-2008)"
  },
  {
    id: "r-6",
    date: "6",
    day: "Lunes",
    title: "Del Vali & Wero Hernández",
    artist: "Del Vali & Wero Hernández",
    origin: "Estados Unidos",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "r-7",
    date: "7",
    day: "Martes",
    title: "Polvo Enamorado",
    artist: "Producción escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    subcategory: "Teatro y música homenaje a compositores tamaulipecos",
    venue: "Teatro Principal del Parque Cultural Reynosa",
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
    id: "r-8",
    date: "8",
    day: "Miércoles",
    title: "Piaf de bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Música",
    subcategory: "Cabaret, jazz",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar"
  },
  {
    id: "r-9",
    date: "9",
    day: "Jueves",
    title: "Se nos quedaron ellos",
    artist: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
    origin: "CDMX",
    category: "Danza",
    subcategory: "Danza Contemporánea",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar",
    artisticDirection: "Cecilia Lugo",
    choreography: "Francisco Córdova"
  },
  {
    id: "r-10",
    date: "9",
    day: "Jueves",
    title: "Xolo",
    artist: "Mardonio Carballo y Juan Pablo Villa",
    origin: "Veracruz-CDMX",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "r-11",
    date: "10",
    day: "Viernes",
    title: "Ballet Nepantla",
    artist: "Ballet Nepantla",
    origin: "Estados Unidos",
    category: "Danza",
    subcategory: "Ballet",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar"
  },
  {
    id: "r-12",
    date: "11",
    day: "Sábado",
    title: "Nación SKA",
    artist: "Los Valdés Ska",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Explanada del Parque Cultural Reynosa",
    time: "Por confirmar al finalizar la Presentación en el Teatro Principal del PCR"
  },
  {
    id: "r-13",
    date: "11",
    day: "Sábado",
    title: "Madame Saxi",
    artist: "Charlotte Pescayre",
    origin: "Francia",
    category: "Interdisciplinario",
    subcategory: "Artes Circenses, pieza de danza en cuerda tensa para una maromera y su saxofón",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "r-14",
    date: "12",
    day: "Domingo",
    title: "Afrodescendencia Matamoros #Porquelollevamosenlasangre",
    artist: "Afrodescendencia Matamoros",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Tradicional y popular latinoamericana",
    venue: "Teatro Principal del Parque Cultural Reynosa",
    time: "Por confirmar"
  }
];

// Exposición del Festival de Reynosa
export const reynosaExhibition: FestivalExhibition = {
  id: "r-expo-1",
  title: "ZIGZAG Líneas en el Tiempo",
  artist: "Marycarmen Aguirre",
  origin: "Tamaulipas",
  category: "Exposición",
  subcategory: "Pintura, Grabado, Cuadro objeto",
  venue: "Galería Artemio Guerra, Parque Cultural Reynosa",
  startDate: "4 Octubre del 2025",
  endDate: "11 de Enero del 2026",
  description: "Colección del Artista"
};

// Información general del festival de Reynosa
export const reynosaFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Reynosa",
  location: "Municipio Reynosa, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Teatro Principal del Parque Cultural Reynosa",
  totalEvents: 14,
  categories: ["Teatro", "Música", "Danza", "Interdisciplinario", "Exposición"]
};
