// Data del Festival del Municipio Victoria
import { FestivalEvent, FestivalExhibition, FestivalInfo } from '../types';

// Done
export const victoriaFestival: FestivalEvent[] = [
  // Viernes 3 de octubre
  {
    id: "vi-1",
    date: "3",
    day: "viernes",
    title: "Sabor Life is Rhythm",
    artist: "Sabor Life is Rhythm",
    origin: "España, Inglaterra, Francia, Italia y México",
    category: "Interdisciplinario",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-1b",
    date: "3",
    day: "viernes",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - TALLER ACADÉMICO",
    artist: "Imparte: Mayra Sérbulo",
    origin: "Tamaulipas",
    category: "Taller",
    venue: "Galería \"Ramón García Zurita\" de Casa del Arte Victoria",
    time: "10:00 hrs."
  },
  {
    id: "vi-1c",
    date: "3",
    day: "viernes",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - CONVERSATORIO",
    artist: "Mayra Sérbulo, Alex Orozco, Petrona de la Cruz",
    origin: "Tamaulipas",
    category: "Conversatorio",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "18:00 hrs."
  },
  // Sábado 4 de octubre
  {
    id: "vi-2",
    date: "4",
    day: "sábado",
    artist: "Polvo Enamorado",
    title: "Producción Escénica",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-2b",
    date: "4",
    day: "sábado",
    title: "Xitzahuil",
    artist: "Danza Folklórica Infantil",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:30 hrs."
  },
  {
    id: "vi-2c",
    date: "4",
    day: "sábado",
    title: "Gustavo Sánchez",
    artist: "Gustavo Sánchez",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:55 hrs."
  },
  {
    id: "vi-2d",
    date: "4",
    day: "sábado",
    title: "Jesús Cardoza Barrientos",
    artist: "Grupo de Danza Folklórica infantil y juvenil",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:20 hrs."
  },
  {
    id: "vi-2e",
    date: "4",
    day: "sábado",
    title: "De costa a costa",
    artist: "Grupo Folklórico Kauyumarie",
    origin: "Tamaulipas",
    category: "Danza",
    venue: "Escenario \"Plaza Juárez\"",
    time: "20:00 hrs."
  },
  {
    id: "vi-2f",
    date: "4",
    day: "sábado",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - TALLER ACADÉMICO",
    artist: "Imparte: Mayra Sérbulo",
    origin: "Tamaulipas",
    category: "Taller",
    venue: "Galería \"Ramón García Zurita\"",
    time: "10:00 hrs."
  },
  {
    id: "vi-2g",
    date: "4",
    day: "sábado",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - CONVERSATORIO",
    artist: "Petrona de la Cruz, Sonia Gregorio, Mayra Sérbulo, Yaremi Chan",
    origin: "Tamaulipas",
    category: "Conversatorio",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "17:00 hrs."
  },
  // Domingo 5 de octubre
  {
    id: "vi-3",
    date: "5",
    day: "domingo",
    title: "Un Paseo por México",
    artist: "Orquesta Sinfónica de Alientos de la Guardia Nacional",
    origin: "CDMX",
    category: "Música",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-3c",
    date: "5",
    day: "domingo",
    title: "Al Son de mi Tierra",
    artist: "Ballet Folklórico de la Guardia Nacional",
    origin: "CDMX",
    category: "Danza",
    venue: "Escenario \"Plaza Juárez\"",
    time: "18:00 hrs."
  },
  {
    id: "vi-3g",
    date: "5",
    day: "domingo",
    title: "Kali Bafa",
    artist: "Ballet Folklórico de Apizaco",
    origin: "Tlaxcala",
    category: "Danza",
    venue: "Escenario \"Plaza Juárez\"",
    time: "17:00 hrs."
  },
  {
    id: "vi-3d",
    date: "5",
    day: "domingo",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - TALLER ACADÉMICO",
    artist: "Imparte: Mayra Sérbulo",
    origin: "Tamaulipas",
    category: "Taller",
    venue: "Galería \"Ramón García Zurita\"",
    time: "10:00 hrs."
  },
  {
    id: "vi-3e",
    date: "5",
    day: "domingo",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - CLASE MAGISTRAL",
    artist: "Imparte: Petrona de la Cruz",
    origin: "Tamaulipas",
    category: "Clase Magistral",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "16:00 hrs."
  },
  {
    id: "vi-3f",
    date: "5",
    day: "domingo",
    title: "Coloquio de Mujeres Creadoras Escénicas Indígenas - FUNCIÓN",
    artist: "Monólogo: Bala Na - De Alexis Orozco",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Auditorio \"Consuelo Cantú Leal\" de Casa del Arte Victoria",
    time: "18:00 hrs."
  },
  // Lunes 6 de octubre
  {
    id: "vi-4",
    date: "6",
    day: "lunes",
    title: "Mi voz al mundo",
    artist: "Argelia Fragoso",
    origin: "Cuba",
    category: "Interdisciplinario",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-4b",
    date: "6",
    day: "lunes",
    title: "Zeferino Herrera",
    artist: "Zeferino Herrera",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:30 hrs."
  },
  {
    id: "vi-4c",
    date: "6",
    day: "lunes",
    title: "Xitzahuil",
    artist: "Danza Folklórica Infantil",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:55 hrs."
  },
  {
    id: "vi-4d",
    date: "6",
    day: "lunes",
    title: "Ángel de la Luz",
    artist: "Ángel de la Luz",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:15 hrs."
  },
  {
    id: "vi-4e",
    date: "6",
    day: "lunes",
    title: "Macehualliztli",
    artist: "Grupo de Danza Folklórica Infantil y Juvenil",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:40 hrs."
  },
  // Martes 7 de octubre  
  {
    id: "vi-5",
    date: "7",
    day: "martes",
    title: "Se nos quedaron ellos",
    artist: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
    origin: "Tamaulipas-CDMX",
    category: "Danza",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-5b",
    date: "7",
    day: "martes",
    title: "Unión Folklórica Tamaulipeca",
    artist: "Grupo de Danza Folklórica Tamaulipeca",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:30 hrs."
  },
  {
    id: "vi-5c",
    date: "7",
    day: "martes",
    title: "Sarahí García",
    artist: "Sarahí García",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:55 hrs."
  },
  {
    id: "vi-5d",
    date: "7",
    day: "martes",
    title: "In motion",
    artist: "Dance Company",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:20 hrs."
  },
  {
    id: "vi-5e",
    date: "7",
    day: "martes",
    title: "Del Circo a la Calle",
    artist: "Cirque erös",
    origin: "Tamaulipas-PROFEST",
    category: "Interdisciplinario",
    venue: "Techumbre del Ejido \"La Libertad\"",
    time: "17:00 hrs."
  },
  // Miércoles 8 de octubre
  {
    id: "vi-6",
    date: "8",
    day: "miércoles",
    title: "Diálogo en piel",
    artist: "Hands Percussion of Malaysia",
    origin: "Malasia",
    category: "Interdisciplinario",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-6b",
    date: "8",
    day: "miércoles",
    title: "Perla Tamaulipeca",
    artist: "Grupo de Danza Folklórica de Maestros Jubilados",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:30 hrs."
  },
  {
    id: "vi-6c",
    date: "8",
    day: "miércoles",
    title: "Blanco y Negro Dueto",
    artist: "Blanco y Negro Dueto",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:50 hrs."
  },
  {
    id: "vi-6d",
    date: "8",
    day: "miércoles",
    title: "Adultos Plenos",
    artist: "Grupo de Danza Folklórica",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:15 hrs."
  },
  {
    id: "vi-6e",
    date: "8",
    day: "miércoles",
    title: "Tamatán",
    artist: "Grupo de Danza Folklórica",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:35 hrs."
  },
  {
    id: "vi-6f",
    date: "8",
    day: "miércoles",
    title: "Kayu",
    artist: "Gato Negro Teatro",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Auditorio \"Alberto López\" del Centro Cultural Tamaulipas",
    time: "10:00 hrs."
  },
  // Jueves 9 de octubre
  {
    id: "vi-7",
    date: "9",
    day: "jueves",
    title: "Broadway Baby",
    artist: "Bianca Marroquín",
    origin: "Estados Unidos-México",
    category: "Interdisciplinario",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-7b",
    date: "9",
    day: "jueves",
    title: "Ximena Guzmán",
    artist: "Ximena Guzmán",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:30 hrs."
  },
  {
    id: "vi-7c",
    date: "9",
    day: "jueves",
    title: "Herencia de mi Tierra",
    artist: "Conjunto Folklórico",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:55 hrs."
  },
  {
    id: "vi-7d",
    date: "9",
    day: "jueves",
    title: "La Puerta del Talento",
    artist: "MFox",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:20 hrs."
  },
  {
    id: "vi-7e",
    date: "9",
    day: "jueves",
    title: "El vuelo de la Luciérnaga",
    artist: "Apapacho Teatro, arte y diversidad",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Auditorio \"Alberto López\" del Centro Cultural Tamaulipas",
    time: "10:00 hrs."
  },
  // Viernes 10 de octubre
  {
    id: "vi-8",
    date: "10",
    day: "viernes",
    title: "Piaf de bolsillo",
    artist: "María Katzarava",
    origin: "CDMX",
    category: "Interdisciplinario",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-8b",
    date: "10",
    day: "viernes",
    title: "Froy",
    artist: "Froy",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:30 hrs."
  },
  {
    id: "vi-8c",
    date: "10",
    day: "viernes",
    title: "BS Studio",
    artist: "BS Studio",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "17:55 hrs."
  },
  {
    id: "vi-8d",
    date: "10",
    day: "viernes",
    title: "Actitud Ballet",
    artist: "Actitud Ballet",
    origin: "Municipio de Victoria",
    category: "Danza",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:20 hrs."
  },
  {
    id: "vi-8e",
    date: "10",
    day: "viernes",
    title: "El barco papel",
    artist: "Teatro ingenio – Creación",
    origin: "Tamaulipas",
    category: "Teatro",
    venue: "Auditorio \"Alberto López\" del Centro Cultural Tamaulipas",
    time: "10:00 hrs."
  },
  // Sábado 11 de octubre
  {
    id: "vi-9",
    date: "11",
    day: "sábado",
    title: "Saúl Gamez",
    artist: "Saúl Gamez",
    origin: "Municipio de Victoria",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "18:00 hrs."
  },
  {
    id: "vi-9b",
    date: "11",
    day: "sábado",
    title: "Música de banda del planeta tierra",
    artist: "Brassas Mexican Beat",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Plaza \"Benito Juárez\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-9c",
    date: "11",
    day: "sábado",
    title: "Vibraciones Ancestrales: Sonido que Sana",
    artist: "Vibra/Tam",
    origin: "Tamaulipas",
    category: "Interdisciplinario",
    venue: "Concha Acústica del Museo de Historia Natural de Tamaulipas TAMUX, ubicado en el Parque Cultural y Recreativo Siglo XXI",
    time: "8:00 hrs."
  },
  {
    id: "vi-9d",
    date: "11",
    day: "sábado",
    title: "Raíces Tamaulipecas",
    artist: "Agrupación de Casa del Arte Victoria",
    origin: "Tamaulipas",
    category: "Música",
    venue: "Concha Acústica del Museo de Historia Natural de Tamaulipas TAMUX, ubicado en el Parque Cultural y Recreativo Siglo XXI",
    time: "18:00 hrs."
  },
  // Domingo 12 de octubre
  {
    id: "vi-10",
    date: "12",
    day: "domingo",
    title: "Los Empeños de una Casa de Sor Juana Inéz de la Cruz",
    artist: "Compañía Nacional de Teatro",
    origin: "CDMX",
    category: "Teatro",
    venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas\"",
    time: "19:00 hrs."
  },
  {
    id: "vi-10b",
    date: "12",
    day: "domingo",
    title: "Cumbia por el Mundo",
    artist: "Ronda Machetera (Ronda Bogotá + Pato Machete)",
    origin: "Nuevo León",
    category: "Música",
    venue: "Escenario \"Plaza Juárez\"",
    time: "20:00 hrs."
  }
];

// Información del Festival del Municipio Victoria
export const victoriaFestivalInfo: FestivalInfo = {
  name: "Victoria",
  location: "Victoria",
  totalEvents: 46,
  startDate: "3 de octubre de 2025",
  endDate: "12 de octubre de 2025",
  categories: ["Interdisciplinario", "Danza", "Música", "Teatro", "Taller", "Conversatorio", "Clase Magistral"]
};

// Exposiciones del Festival del Municipio Victoria
export const victoriaFestivalExhibitions: FestivalExhibition[] = [
  {
    id: "vi-expo-1",
    title: "Historia de un Mural",
    artist: "Ramón García Zurita",
    origin: "Tamaulipas",
    category: "Exposición",
    venue: "Palacio de Gobierno, Tercer Nivel, Cd. Victoria, Tamaulipas",
    startDate: "3 de octubre de 2025",
    endDate: "30 de junio de 2026",
    description: "Fotografías - Instituto Tamaulipeco para la Cultura y las Artes"
  },
  {
    id: "vi-expo-2",
    title: "Historia Visual del Cálculo",
    artist: "Andrew Neuhart",
    origin: "Nuevo León",
    category: "Exposición",
    venue: "Galería Pedro Banda, CCT, Cd. Victoria, Tamaulipas",
    startDate: "1 de septiembre de 2025",
    endDate: "19 de octubre de 2025",
    description: "Fotografía y Máquinas de Cálculo - Colección FEMSA, Difusión y Fomento Cultural A.C."
  },
  {
    id: "vi-expo-3",
    title: "El Mundo Inmaterial",
    artist: "Joy LaVille",
    origin: "Inglaterra",
    category: "Exposición",
    venue: "Pinacoteca de Tamaulipas, Ciudad Victoria",
    startDate: "3 de octubre de 2025",
    endDate: "11 de enero de 2026",
    description: "Óleo, Acrílico, Escultura, Cerámica e Ilustración, como las portadas de los libros de Jorge Ibargüengoitia - Museo Nacional de la Estampa, Colección Trevor Rowe"
  },
  {
    id: "vi-expo-4",
    title: "Alebrijes",
    artist: "Fernando Andriacci",
    origin: "Oaxaca",
    category: "Exposición",
    venue: "Explanada Exterior del Palacio de Gobierno, Cd. Victoria, Tamaulipas",
    startDate: "3 de octubre de 2025",
    endDate: "11 de enero de 2026",
    description: "Escultura Monumental, Acero al carbón"
  }
];
