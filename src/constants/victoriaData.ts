// Data del Festival del Municipio Victoria
import { FestivalEvent, FestivalExhibition, FestivalInfo } from './types';

// Data del Festival del Municipio Victoria
export const victoriaFestival: FestivalEvent[] = [
  {
    id: "vc-1",
    date: "3",
    day: "Viernes",
    title: "Sabor Life is Rhythm",
    artist: "Sabor Life is Rhythm",
    origin: "España, Inglaterra, Francia, Italia y México",
    category: "Interdisciplinario",
    subcategory: "Música, tap, jazz",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar",
    artisticDirection: "Ivan Bouchain y Gaëtan Farnier"
  },
  {
    id: "vc-2",
    date: "3",
    day: "Viernes",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Taller de Entrenamiento físico-sensible para la escena",
    artist: "Mayra Sérbulo",
    origin: "Tamaulipas",
    category: "Taller",
    subcategory: "Entrenamiento físico-sensible para la escena",
    venue: "Aula con duela en Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-3",
    date: "3",
    day: "Viernes",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Conversatorio",
    artist: "Mayra Sérbulo, Alex Orozco y Petrona de la Cruz",
    origin: "Tamaulipas",
    category: "Conversatorio",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-4",
    date: "4",
    day: "Sábado",
    title: "Polvo Enamorado",
    artist: "Producción escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    subcategory: "Teatro y música homenaje a compositores tamaulipecos",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
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
    id: "vc-5",
    date: "4",
    day: "Sábado",
    title: "De costa a costa",
    artist: "Ballet Folklorico Kauyumarie",
    origin: "Tamaulipas",
    category: "Danza",
    subcategory: "Danza Folclórica",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "vc-6",
    date: "4",
    day: "Sábado",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Taller de Entrenamiento físico-sensible para la escena",
    artist: "Mayra Sérbulo",
    origin: "Tamaulipas",
    category: "Taller",
    subcategory: "Entrenamiento físico-sensible para la escena",
    venue: "Aula con duela en Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-7",
    date: "4",
    day: "Sábado",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Conversatorio",
    artist: "Petrona de la Cruz, Sonia Gregorio, Mayra Sérbulo y Yaremi Chan",
    origin: "Tamaulipas",
    category: "Conversatorio",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-8",
    date: "5",
    day: "Domingo",
    title: "Un Paseo por México",
    artist: "Orquesta Sinfónica de Alientos de la Guardia Nacional",
    origin: "CDMX",
    category: "Música",
    subcategory: "Sinfónica",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "19:00 hrs",
    description: "Con la participación de la Orquesta Sinfónica de la UAT y Banda de Guerra Monumental de la Coordinación Territorial Regional GOLFO"
  },
  {
    id: "vc-9",
    date: "5",
    day: "Domingo",
    title: "El vuelo de la Luciérnaga",
    artist: "Apapacho, arte y diversidad",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Infantil",
    venue: "Auditorio \"Alberto López\"",
    time: "Por confirmar",
    cast: ["Sofía García", "Daniela Maldonado", "Guillermo Valencia"],
    description: "Convocar público de casa hogar o escuelas para que acudan el fin de semana"
  },
  {
    id: "vc-10",
    date: "5",
    day: "Domingo",
    title: "Majestuosa Camada San Simón Cerro",
    artist: "Majestuosa Camada San Simón Cerro",
    origin: "Tlaxcala",
    category: "Danza",
    subcategory: "Tradicional del Estado de Tlaxcala",
    venue: "Considerar por todo \"Libre 17\" desde el Estadio hasta la Plaza Hidalgo",
    time: "Por confirmar",
    description: "Al finalizar, se realice la presentación del Ballet Folklórico de la Guardia Nacional"
  },
  {
    id: "vc-11",
    date: "5",
    day: "Domingo",
    title: "Al son de mi Tierra",
    artist: "Ballet Folklórico de la Guardia Nacional",
    origin: "CDMX",
    category: "Danza",
    subcategory: "Folklórica",
    venue: "Escenario Principal de la Plaza Hidalgo",
    time: "Por confirmar"
  },
  {
    id: "vc-12",
    date: "5",
    day: "Domingo",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Taller de Entrenamiento físico-sensible para la escena",
    artist: "Mayra Sérbulo",
    origin: "Tamaulipas",
    category: "Taller",
    subcategory: "Entrenamiento físico-sensible para la escena",
    venue: "Aula con duela en Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-13",
    date: "5",
    day: "Domingo",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Clase Magistral",
    artist: "Petrona de la Cruz",
    origin: "Tamaulipas",
    category: "Clase Magistral",
    subcategory: "El impacto del Teatro y la Cultura en la Sociedad",
    venue: "Definir espacio en Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-14",
    date: "5",
    day: "Domingo",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - Monólogo",
    artist: "Bala Na",
    origin: "Tamaulipas",
    category: "Monólogo",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "Por confirmar"
  },
  {
    id: "vc-15",
    date: "6",
    day: "Lunes",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Cuba",
    category: "Música",
    subcategory: "Boleros",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar"
  },
  {
    id: "vc-16",
    date: "7",
    day: "Martes",
    title: "Se nos quedaron ellos",
    artist: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
    origin: "CDMX",
    category: "Danza",
    subcategory: "Danza Contemporánea",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar",
    artisticDirection: "Cecilia Lugo",
    choreography: "Francisco Córdova"
  },
  {
    id: "vc-17",
    date: "8",
    day: "Miércoles",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    subcategory: "Música, danza",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar"
  },
  {
    id: "vc-18",
    date: "9",
    day: "Jueves",
    title: "Broadway Baby",
    artist: "Bianca Marroquín",
    origin: "Tamaulipas-México-Estados Unidos",
    category: "Teatro",
    subcategory: "Teatro Musical",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar"
  },
  {
    id: "vc-19",
    date: "10",
    day: "Viernes",
    title: "Piaf de bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Música",
    subcategory: "Cabaret, jazz",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar"
  },
  {
    id: "vc-20",
    date: "11",
    day: "Sábado",
    title: "Música banda del planeta tierra",
    artist: "Brassas Mexican Beat",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar"
  },
  {
    id: "vc-21",
    date: "12",
    day: "Domingo",
    title: "Selección del Sistema Tamaulipeco de Agrupaciones Musicales Comunitarias",
    artist: "Sistema Tamaulipeco de Agrupaciones Musicales Comunitarias",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
    time: "Por confirmar"
  },
  {
    id: "vc-22",
    date: "12",
    day: "Domingo",
    title: "Cumbia por el Mundo",
    artist: "Ronda Machetera",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Fusión de cumbia y hip-hop",
    venue: "Escenario Principal de la Plaza Hidalgo",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Victoria
export const victoriaExhibitions: FestivalExhibition[] = [
  {
    id: "vc-expo-1",
    title: "Historia Visual del Cálculo",
    artist: "Andrew Neuhart",
    origin: "Nuevo León",
    category: "Exposición",
    subcategory: "Fotografía y Máquinas de Cálculo",
    venue: "Galería Pedro Banda, CCT, Cd. Victoria, Tamaulipas",
    startDate: "1 de Septiembre del 2025",
    endDate: "19 de Octubre del 2025",
    description: "Colección FEMSA, Difusión y Fomento Cultural A.C."
  },
  {
    id: "vc-expo-2",
    title: "Historia de un Mural",
    artist: "Ramón García Zurita",
    origin: "Tamaulipas",
    category: "Exposición",
    subcategory: "Fotografías",
    venue: "Palacio de Gobierno, Tercer Nivel, Cd. Victoria, Tamaulipas",
    startDate: "3 de Octubre del 2025",
    endDate: "30 de Junio del 2026",
    description: "Instituto Tamaulipeco para la Cultura y las Artes"
  },
  {
    id: "vc-expo-3",
    title: "El Mundo Inmaterial",
    artist: "Joy LaVille",
    origin: "Inglaterra",
    category: "Exposición",
    subcategory: "Óleo, Acrílico, Escultura, Cerámica e Ilustración",
    venue: "Pinacoteca de Tamaulipas, Ciudad Victoria",
    startDate: "3 de Octubre del 2025",
    endDate: "11 de Enero del 2026",
    description: "Museo Nacional de la Estampa, Colección Trevor Rowe. Incluye las portadas de los libros de Jorge Ibargüengoitia"
  },
  {
    id: "vc-expo-4",
    title: "Alebrijes",
    artist: "Fernando Andriacci",
    origin: "Oaxaca",
    category: "Exposición",
    subcategory: "Escultura Monumental, Acero al carbón",
    venue: "Explanada Exterior del Palacio de Gobierno, Cd. Victoria, Tamaulipas",
    startDate: "3 de Octubre del 2025",
    endDate: "11 de Enero del 2026"
  }
];

// Información general del festival de Victoria
export const victoriaFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Victoria",
  location: "Municipio Victoria, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
  totalEvents: 22,
  categories: ["Música", "Danza", "Teatro", "Interdisciplinario", "Taller", "Conversatorio", "Clase Magistral", "Monólogo", "Exposición"]
};
