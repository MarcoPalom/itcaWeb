// Data del Festival del Municipio Méndez
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Méndez
export const mendezFestival: FestivalEvent[] = [
  {
    id: "me-1",
    date: "3",
    day: "viernes",
    title: "Concierto-baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza Principal de la Cabecera Municipal",
    time: "19:00 hrs."
  },
  {
    id: "me-2",
    date: "4",
    day: "sábado",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani Ensamble Coral",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  },
  {
    id: "me-3",
    date: "7",
    day: "martes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    venue: "Auditorio \"Rodolfo Torre Cantú\", Cabecera Municipal",
    time: "16:00 hrs."
  },
  {
    id: "me-4",
    date: "9",
    day: "jueves",
    title: "Cazando Estrellas en Bicicleta",
    artist: "Las Plastiqué Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    venue: "Escuela Primaria \"Justo Sierra Méndez\" Col. San Lorenzo, Sector Carretera",
    time: "15:00 hrs."
  },
  {
    id: "me-5",
    date: "10",
    day: "viernes",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Auditorio \"Rodolfo Torre Cantú\", Cabecera Municipal",
    time: "16:00 hrs."
  },
  {
    id: "me-6",
    date: "12",
    day: "domingo",
    title: "Espectáculo musical",
    artist: "Son Kndla",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Lugar por definir",
    time: "Horario por definir"
  }
];

// Información del Festival del Municipio Méndez
export const mendezFestivalInfo: FestivalInfo = {
  name: "Méndez",
  location: "Méndez",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Música", "Teatro"]
};

// Exposiciones del Festival del Municipio Méndez
export const mendezFestivalExhibitions: FestivalExhibition[] = [
  // No hay exposiciones para Méndez en los datos proporcionados
];
