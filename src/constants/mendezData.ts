// Data del Festival del Municipio Méndez
import { FestivalEvent, FestivalInfo } from './types';

// Data del Festival del Municipio Méndez
export const mendezFestival: FestivalEvent[] = [
  {
    id: "md-1",
    date: "3",
    day: "Viernes",
    title: "Concierto - baile acá por el norte",
    artist: "Amenaza Norteña",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Norteña",
    venue: "Por confirmar",
    time: "Por confirmar",
    description: "Sector carretero"
  },
  {
    id: "md-2",
    date: "4",
    day: "Sábado",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani Ensamble Coral",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Coral",
    venue: "Por confirmar",
    time: "Por confirmar",
    description: "Sector carretero"
  },
  {
    id: "md-3",
    date: "7",
    day: "Martes",
    title: "¡Ajua Raza! Homenaje a Piporro",
    artist: "Grupo Tayer",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
    venue: "Por confirmar",
    time: "Por confirmar",
    description: "Escuelas"
  },
  {
    id: "md-4",
    date: "9",
    day: "Jueves",
    title: "Cazando Estrellas en Bicicleta",
    artist: "Las Plastiqué Teatro",
    origin: "Nuevo León",
    category: "Teatro",
    subcategory: "Teatro de calle para infancias",
    venue: "Por confirmar",
    time: "Por confirmar",
    description: "Escuelas"
  },
  {
    id: "md-5",
    date: "10",
    day: "Viernes",
    title: "Hermanos del equilibrio",
    artist: "Cirko Frontera",
    origin: "Tamaulipas",
    category: "Arte de la representación",
    subcategory: "Circense",
    venue: "Por confirmar",
    time: "Por confirmar",
    description: "Cabecera municipal"
  },
  {
    id: "md-6",
    date: "12",
    day: "Domingo",
    title: "Espectáculo musical",
    artist: "Son Kndla",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Por confirmar",
    time: "Por confirmar",
    description: "Cabecera municipal"
  }
];

// Información general del festival de Méndez
export const mendezFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Méndez",
  location: "Municipio Méndez, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  totalEvents: 6,
  categories: ["Música", "Teatro", "Arte de la representación"]
};
