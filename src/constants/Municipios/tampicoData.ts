// Data del Festival del Municipio Tampico
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Tampico
export const tampicoFestival: FestivalEvent[] = [
  {
    id: "tp-1",
    date: "3",
    day: "Viernes",
    title: "Polvo Enamorado",
    artist: "Producción escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    subcategory: "Teatro y música homenaje a compositores tamaulipecos",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar",
    cast: "Pepe Navarrete, Polo Rojas, Cynthia Sánchez, Héctor Gamaliel, Júpiter Bautista, Isabelle Govea y Carmen Sarahí"
  },
  {
    id: "tp-2",
    date: "4",
    day: "Sábado",
    title: "Años después",
    artist: "Alex del Ángel",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Perfomance",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "tp-3",
    date: "4",
    day: "Sábado",
    title: "Wyrd: Exploración escénica sobre destino y el ser",
    artist: "HIJK Teatro",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Perfomance",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "tp-4",
    date: "4",
    day: "Sábado",
    title: "Mexicountry",
    artist: "Jimmy Yunes",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Country",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "tp-5",
    date: "5",
    day: "Domingo",
    title: "Escrito en el cuerpo de la noche",
    artist: "PROTEAC",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar"
  },
  {
    id: "tp-6",
    date: "5",
    day: "Domingo",
    title: "Nación SKA",
    artist: "Los Valdés SKA",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "tp-7",
    date: "6",
    day: "Lunes",
    title: "Se nos quedaron ellos",
    artist: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
    origin: "CDMX",
    category: "Danza",
    subcategory: "Danza Contemporánea",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar",
    artisticDirection: "Cecilia Lugo",
    choreography: "Francisco Córdova"
  },
  {
    id: "tp-8",
    date: "7",
    day: "Martes",
    title: "Kayu",
    artist: "Gato negro teatro",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Infantil",
    venue: "Por confirmar",
    time: "Por confirmar",
    direction: "Valentín Arias Flores"
  },
  {
    id: "tp-9",
    date: "8",
    day: "Miércoles",
    title: "Planeta Kepler o los datos inútiles",
    artist: "Serendipia",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Por confirmar",
    time: "Por confirmar",
    direction: "Gabriela Vergara, José Becerra, Citlaly CE"
  },
  {
    id: "tp-10",
    date: "9",
    day: "Jueves",
    title: "Feminoflexia",
    artist: "Feminoflexia",
    origin: "Tamaulipas",
    category: "Interdisciplinaria",
    subcategory: "Fusión",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar"
  },
  {
    id: "tp-11",
    date: "10",
    day: "Viernes",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    subcategory: "Música, danza",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar"
  },
  {
    id: "tp-12",
    date: "11",
    day: "Sábado",
    title: "Broadway Baby",
    artist: "Bianca Marroquín",
    origin: "Tamaulipas-Estados Unidos-México",
    category: "Teatro",
    subcategory: "Teatro Musical",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar"
  },
  {
    id: "tp-13",
    date: "12",
    day: "Domingo",
    title: "Piaf de bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Música",
    subcategory: "Cabaret, jazz",
    venue: "Teatro Principal del Espacio Cultural Metropolitano",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Tampico (por ahora vacío, se puede agregar después)
export const tampicoExhibitions: FestivalExhibition[] = [];

// Información general del festival de Tampico
export const tampicoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Tampico",
  location: "Municipio Tampico, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Teatro Principal del Espacio Cultural Metropolitano",
  totalEvents: 13,
  categories: ["Teatro", "Danza", "Música", "Interdisciplinario", "Interdisciplinaria"]
};
