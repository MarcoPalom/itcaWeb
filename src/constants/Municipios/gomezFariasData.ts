// Data del Festival del Municipio Gómez Farías
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Gómez Farías
export const gomezFariasFestival: FestivalEvent[] = [
  {
    id: "gf-1",
    date: "3",
    day: "viernes",
    title: "El Zar de Monterrey",
    artist: "El Zar de Monterrey",
    origin: "Nuevo León",
    category: "Música | Norteño",
    venue: "Foro de la Iglesia del Poblado Loma alta",
    time: "18:00 hrs."
  },
  {
    id: "gf-2",
    date: "4",
    day: "sábado",
    title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
    artist: "La Espuma de Mar",
    origin: "Tamaulipas",
    category: "Música | Norteño",
    venue: "Foro de la iglesia del Poblado \"Loma Alta\"",
    time: "18:00 hrs."
  },
  {
    id: "gf-3",
    date: "5",
    day: "domingo",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro | Animación",
    venue: "Foro de la iglesia del Poblado \"Loma Alta\"",
    time: "18:00 hrs."
  },
  {
    id: "gf-4",
    date: "7",
    day: "martes",
    title: "Organillermo",
    artist: "Guillermo Méndez",
    origin: "Jalisco",
    category: "Teatro | Teatro de calle",
    venue: "Esc. Primaria Norberto Uriegas, Ej. 5 de Mayo",
    time: "12:00 hrs"
  },
  {
    id: "gf-5",
    date: "11",
    day: "sábado",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani Ensamble Coral",
    origin: "Tamaulipas",
    category: "Música | Fusión",
    venue: "Foro de la Iglesia del Poblado Loma Alta",
    time: "18:00 hrs."
  },
  {
    id: "gf-6",
    date: "12",
    day: "domingo",
    title: "Huapangos tamaulipecos, la raíz de mi tierra",
    artist: "Grupo Honda Nor-t",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Explanada de la Presidencia Municipal",
    time: "18:00 hrs."
  }
];

// Información del Festival del Municipio Gómez Farías
export const gomezFariasFestivalInfo: FestivalInfo = {
  name: "Gómez Farías",
  location: "Gómez Farías",
  totalEvents: 6,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Música", "Teatro", "Norteño", "Fusión", "Animación", "Teatro de calle"]
};

// Exposiciones del Festival del Municipio Gómez Farías
export const gomezFariasFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
