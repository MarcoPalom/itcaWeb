// Data del Festival del Municipio Guerrero
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Data del Festival del Municipio Guerrero
export const guerreroFestival: FestivalEvent[] = [
  {
    id: "gu-1",
    date: "4",
    day: "sábado",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Internacional",
    category: "Interdisciplinario",
    venue: "Centro Cívico Municipal",
    time: "19:00 hrs."
  },
  {
    id: "gu-2",
    date: "12",
    day: "domingo",
    title: "Madame Saxi",
    artist: "Charlotte Pescayre",
    origin: "Internacional",
    category: "Interdisciplinario",
    venue: "Plaza",
    time: "19:00 hrs."
  },
  {
    id: "gu-3",
    date: "11",
    day: "sábado",
    title: "Cuentos, música y arte para mi ciudad, Guerrero",
    artist: "Patricia Guerrero",
    origin: "Nacional",
    category: "Música",
    venue: "Casa de la Cultura Municipal",
    time: "19:00 hrs."
  },
  {
    id: "gu-4",
    date: "3",
    day: "viernes",
    title: "América grande otra vez - Cancionero popular de las Américas",
    artist: "Grupo La Trenza",
    origin: "Nacional",
    category: "Interdisciplinario",
    venue: "Explanda de Palacio Municipal",
    time: "19:00 hrs."
  },
  {
    id: "gu-5",
    date: "10",
    day: "viernes",
    title: "MIJKAILJUITL",
    artist: "Raíces Huastecas",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Ruinas de Viejo Guerrero o Explanada de Palacio Municipal",
    time: "19:00 hrs."
  },
  {
    id: "gu-6",
    date: "5",
    day: "domingo",
    title: "De chile, mole y pozole",
    artist: "En Boca Ensamble",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Centro Cívico Municipal",
    time: "19:00 hrs."
  },
  {
    id: "gu-7",
    date: "10",
    day: "viernes",
    title: "De chile, mole y pozole",
    artist: "En Boca Ensamble",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Ruinas de Viejo Guerrero o Explanada de Palacio Municipal",
    time: "19:00 hrs."
  }
];

// Información del Festival del Municipio Guerrero
export const guerreroFestivalInfo: FestivalInfo = {
  name: "Guerrero",
  location: "Guerrero",
  totalEvents: 7,
  startDate: "3 de enero de 2025",
  endDate: "12 de enero de 2025",
  categories: ["Interdisciplinario","Música"]
};

// Exposiciones del Festival del Municipio Guerrero
export const guerreroFestivalExhibitions: FestivalExhibition[] = [
  // Agregar exposiciones si las hay
];
