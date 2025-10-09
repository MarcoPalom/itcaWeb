// Data del Festival del Municipio Hidalgo
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Hidalgo
export const hidalgoFestival: FestivalEvent[] = [
  {
    id: "hi-1",
    date: "3",
    day: "viernes",
    title: "Huapangos tamaulipecos, la raíz de mi tierra",
    artist: "Grupo Honda Nor-T",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de la Cabecera Municipal",
    time: "19:00 hrs."
  },
  {
    id: "hi-2",
    date: "4",
    day: "sábado",
    title: "De amores, polka y huapango",
    artist: "La Nota Alegre",
    origin: "Tamaulipas-PROFEST",
    category: "Música",
    venue: "Comité Ejidal del Ejido \"Guillermo Zúñiga\"",
    time: "18:00 hrs."
  },
  {
    id: "hi-3",
    date: "5",
    day: "domingo",
    title: "El Zar de Monterrey",
    artist: "El Zar de Monterrey",
    origin: "Nuevo León",
    category: "Música",
    venue: "Comité Ejidal del Ejido \"Guillermo Zúñiga\"",
    time: "18:00 hrs."
  },
  {
    id: "hi-4",
    date: "10",
    day: "viernes",
    title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
    artist: "Érase una vez dos veces",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Esc. Primaria \"Baldomero Sánchez\" de la Cabecera Municipal",
    time: "11:00 hrs."
  },
  {
    id: "hi-5",
    date: "11",
    day: "sábado",
    title: "Raíces del pueblo: música del norte tamaulipeco",
    artist: "Los del Pueblo",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Ejido Emiliano Zapata",
    time: "18:00 hrs."
  },
  {
    id: "hi-6",
    date: "12",
    day: "domingo",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    venue: "Ejido Emiliano Zapata",
    time: "18:00 hrs."
  }
];

// Información del Festival del Municipio Hidalgo
export const hidalgoFestivalInfo: FestivalInfo = {
  name: "Hidalgo",
  location: "Hidalgo",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música"]
};

// Exposiciones del Festival del Municipio Hidalgo
export const hidalgoFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Hidalgo en los datos proporcionados
];
