// Data del Festival del Municipio Gómez Farías
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Gómez Farías
export const gomezFariasFestival: FestivalEvent[] = [
  {
    id: "gf-1",
    date: "3",
    day: "Viernes",
    title: "Grupo \"El Zar\"",
    artist: "Grupo \"El Zar\"",
    origin: "Nuevo León",
    category: "Música",
    subcategory: "Norteño",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gf-2",
    date: "4",
    day: "Sábado",
    title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
    artist: "Tamaulipas",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gf-3",
    date: "5",
    day: "Domingo",
    title: "Animación con zanqueros y mimo",
    artist: "Colectivo Trueque",
    origin: "Tamaulipas",
    category: "Teatro",
    subcategory: "Animación",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gf-4",
    date: "7",
    day: "Martes",
    title: "Organillermo",
    artist: "Jalisco",
    origin: "Jalisco",
    category: "Teatro",
    subcategory: "Teatro de calle",
    venue: "Por confirmar",
    time: "Por confirmar",
    artisticDirection: "Guillermo Méndez"
  },
  {
    id: "gf-5",
    date: "11",
    day: "Sábado",
    title: "Afro-ecos: raíces que susurran en el canto",
    artist: "Kani Ensamble Coral",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Fusión",
    venue: "Por confirmar",
    time: "Por confirmar"
  },
  {
    id: "gf-6",
    date: "12",
    day: "Domingo",
    title: "Huapangos tamaulipecos, la raíz de mi tierra",
    artist: "Grupo Honda Nor-t",
    origin: "Tamaulipas",
    category: "Música",
    subcategory: "Huapango",
    venue: "Por confirmar",
    time: "Por confirmar"
  }
];

// Exposiciones del Festival de Gómez Farías (por ahora vacío, se puede agregar después)
export const gomezFariasExhibitions: FestivalExhibition[] = [];

// Información general del festival de Gómez Farías
export const gomezFariasFestivalInfo: FestivalInfo = {
  name: "Festival del Municipio Gómez Farías",
  location: "Municipio Gómez Farías, Tamaulipas",
  startDate: "3 de Octubre, 2025",
  endDate: "12 de Octubre, 2025",
  mainVenue: "Por confirmar",
  totalEvents: 6,
  categories: ["Música", "Teatro"]
};
