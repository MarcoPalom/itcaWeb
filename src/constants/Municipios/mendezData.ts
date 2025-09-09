// Data del Festival del Municipio Méndez
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Méndez
export const mendezFestival: FestivalEvent[] = [
  {
    id: "mé-1",
    date: "7",
    day: "martes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Auditorio",
    time: "16:00 hrs."
  },
  {
    id: "mé-2",
    date: "9",
    day: "jueves",
    title: "Cazando Estrellas en Bicicleta",
    artist: "Las Plastiqué Teatro",
    origin: "Nacional",
    category: "Teatro",
    venue: "Escuela Primaria",
    time: "15:00 hrs."
  },
  {
    id: "mé-3",
    date: "10",
    day: "viernes",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Auditorio",
    time: "16:00 hrs."
  },
  {
    id: "mé-4",
    date: "3",
    day: "viernes",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "mé-5",
    date: "4",
    day: "sábado",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani Ensamble Coral",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "mé-6",
    date: "12",
    day: "domingo",
    title: "Espectáculo musical",
    artist: "Son Kndla",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Lugar por definir",
    time: "Por confirmar"
  }
];

// Información del Festival del Municipio Méndez
export const mendezFestivalInfo: FestivalInfo = {
  name: "Méndez",
  location: "Méndez",
  totalEvents: 0,
  startDate: "3 de enero de 2025",
  endDate: "12 de enero de 2025",
  categories: ["Interdisciplinario","Teatro","Música"]
};

// Exposiciones del Festival del Municipio Méndez
export const mendezFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
