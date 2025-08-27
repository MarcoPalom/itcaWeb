// Data del Festival del Municipio Hidalgo
import { FestivalEvent, FestivalInfo } from '../types';

// Data del Festival del Municipio Hidalgo
export const hidalgoFestival: FestivalEvent[] = [
  {
    id: "hd-1",
    date: "3",
    day: "Viernes",
    title: "Huapangos tamaulipecos, la raíz de mi tierra",
    artist: "Grupo Honda Nor-T",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "hd-2",
    date: "4",
    day: "Sábado",
    title: "De amores, polka y huapango",
    artist: "La Nota Alegre",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "hd-3",
    date: "5",
    day: "Domingo",
    title: "Grupo El Zar",
    artist: "Grupo El Zar",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "hd-4",
    date: "10",
    day: "Viernes",
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
    id: "hd-5",
    date: "11",
    day: "Sábado",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "hd-6",
    date: "12",
    day: "Domingo",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Información general del festival de Hidalgo
export const hidalgoFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Hidalgo",
  location: "Municipio Hidalgo, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro"]
};
