// Data de artistas nacionales del Festival
import { FestivalEvent } from './types';

// Interfaz específica para artistas nacionales
export interface NationalArtist {
  id: string;
  name: string;
  origin: string;
  category: string;
  subcategory?: string;
  description?: string;
  events: NationalArtistEvent[];
}

// Interfaz para eventos de artistas nacionales
export interface NationalArtistEvent {
  id: string;
  title: string;
  date: string;
  day: string;
  venue: string;
  time: string;
  municipality: string;
}

// Data de María Katzarava
export const mariaKatzarava: NationalArtist = {
  id: "mk-001",
  name: "María Katzarava",
  origin: "CDMX",
  category: "Música",
  subcategory: "Cabaret, jazz",
  description: "Un recorrido por los grandes temas del Gorrión de París, interpretados de manera magistral por María Katzarava. Una evocación profunda, casi mística, a la reencarnación de Edith Piaf, donde la voz poderosa y conmovedora de Katzarava se convierte en el vehículo perfecto para revivir la pasión, la melancolía y la fuerza que definieron a la icónica cantante francesa. Este espectáculo es más que un concierto: es un viaje en el tiempo. Un paseo sensorial por la Europa de los años 40 y 50, donde el cabaret vibraba con historias de amor y desamor, donde el jazz se entrelazaba con la chanson française, y donde cada melodía era una confesión íntima. María Katzarava no sólo interpreta, sino que habita cada canción, aportando su sensibilidad operística y su entrega escénica para dar nueva vida a clásicos como La Vie en Rose, Non, je ne regrette rien y Hymne à l'amour. Su presencia en el escenario transforma cada nota en un susurro del alma, un puente entre generaciones y geografías.",
  events: [
    {
      id: "nl-5",
      title: "Piaf de Bolsillo",
      date: "7",
      day: "Martes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "vc-19",
      title: "Piaf de bolsillo",
      date: "10",
      day: "Viernes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "r-8",
      title: "Piaf de bolsillo",
      date: "8",
      day: "Miércoles",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "ma-10",
      title: "Piaf de bolsillo",
      date: "11",
      day: "Sábado",
      venue: "Teatro del IMSS",
      time: "Por confirmar",
      municipality: "Mante"
    },
    {
      id: "mt-7",
      title: "Piaf de Bolsillo",
      date: "9",
      day: "Jueves",
      venue: "Teatro de la Reforma",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "tp-13",
      title: "Piaf de bolsillo",
      date: "12",
      day: "Domingo",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Centro de Producción de Danza Contemporánea (CEPRODAC)
export const ceprodac: NationalArtist = {
  id: "ceprodac-001",
  name: "Centro de Producción de Danza Contemporánea (CEPRODAC)",
  origin: "CDMX",
  category: "Danza",
  subcategory: "Danza Contemporánea",
  description: "El Centro de Producción de Danza Contemporánea (CEPRODAC) fomenta, estimula y divulga la creación coreográfica en México y el extranjero a partir de la infraestructura necesaria para la producción de obras dancísticas profesionales, privilegiando la libertad creativa. Iniciada en 2011, actualmente su ensamble que pertenece al Instituto Nacional de Bellas Artes y Literatura, cuenta con 20 bailarines profesionales, quienes participan en \"Se nos quedaron ellos\", bajo la dirección artística de Cecilia Lugo, con la coreografía y dirección de escena de Francisco Córdova. El espectáculo es un proceso escénico que teje un mosaico de narrativas fragmentadas que exploran la esencia de la vida a través de sus vacíos y plenitudes; las ausencias insalvables, los amores efímeros, los abandonos inevitables, la presencia de la muerte y la pobreza espiritual.",
  events: [
    {
      id: "nl-9",
      title: "Se nos quedaron ellos",
      date: "11",
      day: "Sábado",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "vc-16",
      title: "Se nos quedaron ellos",
      date: "7",
      day: "Martes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "r-9",
      title: "Se nos quedaron ellos",
      date: "9",
      day: "Jueves",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "tp-7",
      title: "Se nos quedaron ellos",
      date: "6",
      day: "Lunes",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Patricia Guerrero
export const patriciaGuerrero: NationalArtist = {
  id: "pg-001",
  name: "Patricia Guerrero",
  origin: "Nuevo León",
  category: "Música",
  description: "Artista musical de Nuevo León que presenta un repertorio variado de música mexicana",
  events: [
    {
      id: "g-5",
      title: "Patricia Guerrero",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Guerrero"
    }
  ]
};

// Data de Grupo La Trenza
export const grupoLaTrenza: NationalArtist = {
  id: "glt-001",
  name: "Grupo La Trenza",
  origin: "Nuevo León",
  category: "Música",
  subcategory: "Música Folklórica Latinoamericana",
  description: "Grupo musical de Nuevo León especializado en música folklórica latinoamericana",
  events: [
    {
      id: "g-1",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Guerrero"
    },
    {
      id: "c-5",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Camargo"
    },
    {
      id: "gdo-7",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "ma-3",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Miguel Alemán"
    },
    {
      id: "m-2",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Mier"
    }
  ]
};

// Data de Grupo Tayer
export const grupoTayer: NationalArtist = {
  id: "gt-001",
  name: "Grupo Tayer",
  origin: "Nuevo León",
  category: "Música",
  subcategory: "rancheras, corridos, polkas, redovas, mazurkas y huapangos",
  description: "Grupo musical de Nuevo León especializado en música norteña tradicional",
  events: [
    {
      id: "c-2",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Camargo"
    },
    {
      id: "gdo-3",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "ma-1",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Miguel Alemán"
    },
    {
      id: "bg-5",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Burgos"
    },
    {
      id: "hd-6",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Hidalgo"
    },
    {
      id: "jm-7",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "rb-4",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "sc-4",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Carlos"
    },
    {
      id: "md-3",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Méndez"
    }
  ]
};

// Data de Mardonio Carballo y Juan Pablo Villa
export const mardonioCarballoJuanPabloVilla: NationalArtist = {
  id: "mcjpv-001",
  name: "Mardonio Carballo y Juan Pablo Villa",
  origin: "Veracruz-CDMX",
  category: "Música",
  description: "Dúo musical de Veracruz y CDMX que presenta un repertorio variado de música mexicana",
  events: [
    {
      id: "mt-8",
      title: "Xolo",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "r-10",
      title: "Xolo",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de Las Plastiqué Teatro
export const lasPlastiqueTeatro: NationalArtist = {
  id: "lpt-001",
  name: "Las Plastiqué Teatro",
  origin: "Nuevo León",
  category: "Teatro",
  subcategory: "Teatro de calle para infancias",
  description: "Compañía teatral de Nuevo León especializada en teatro de calle para infancias",
  events: [
    {
      id: "md-4",
      title: "Cazando Estrellas en Bicicleta",
      date: "9",
      day: "Jueves",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Méndez"
    },
    {
      id: "vh-5",
      title: "Cazando Estrellas en Bicicleta",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    },
    {
      id: "sf-4",
      title: "Cazando Estrellas en Bicicleta",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Fernando"
    }
  ]
};

// Data de PROTEAC
export const proteac: NationalArtist = {
  id: "proteac-001",
  name: "PROTEAC",
  origin: "Nuevo León",
  category: "Teatro",
  description: "La llegada de Adela despierta a la familia a nuevas verdades. Nicolás florece en su despertar, mientras Gaviota encuentra su voz en el silencio. En el otro extremo, Dolores, la abuela, teje hilos de vida y muerte, enfrentando el miedo y la trascendencia. Juntos, se embarcan en un viaje de autodescubrimiento y transformación, donde la familia se reescribe a sí misma, entre la fragilidad y la resiliencia, en un baile eterno entre la vida y la muerte.",
  events: [
    {
      id: "mt-9",
      title: "Escrito en el cuerpo de la noche",
      date: "11",
      day: "Sábado",
      venue: "Teatro de la Reforma",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "tp-5",
      title: "Escrito en el cuerpo de la noche",
      date: "5",
      day: "Domingo",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Grupo El Zar
export const grupoElZar: NationalArtist = {
  id: "gez-001",
  name: "Grupo El Zar",
  origin: "Nuevo León",
  category: "Música",
  subcategory: "Norteño",
  description: "Grupo musical de Nuevo León especializado en música norteña",
  events: [
    {
      id: "gf-1",
      title: "Grupo \"El Zar\"",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    },
    {
      id: "hd-3",
      title: "Grupo El Zar",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Hidalgo"
    },
    {
      id: "sn-2",
      title: "Grupo El Zar",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Nicolás"
    }
  ]
};

// Data de La Percha Teatro
export const laPerchaTeatro: NationalArtist = {
  id: "lpt-002",
  name: "La Percha Teatro",
  origin: "Nuevo León",
  category: "Teatro",
  subcategory: "Teatro de calle",
  description: "Compañía teatral de Nuevo León especializada en teatro de calle",
  events: [
    {
      id: "ab-3",
      title: "La Percha Teatro",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Abasolo"
    },
    {
      id: "cs-2",
      title: "La Percha Teatro",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Casas"
    },
    {
      id: "mn-2",
      title: "La Percha Teatro",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Mainero"
    },
    {
      id: "sc-3",
      title: "La Percha Teatro",
      date: "9",
      day: "Jueves",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Carlos"
    },
    {
      id: "sn-5",
      title: "La Percha Teatro",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Nicolás"
    },
    {
      id: "vg-3",
      title: "La Percha Teatro",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Villagrán"
    }
  ]
};

// Data de Guillermo Méndez
export const guillermoMendez: NationalArtist = {
  id: "gm-001",
  name: "Guillermo Méndez",
  origin: "Jalisco",
  category: "Teatro",
  subcategory: "Teatro de calle",
  description: "Artista teatral de Jalisco especializado en teatro de calle con su obra 'Organillermo'",
  events: [
    {
      id: "gf-4",
      title: "Organillermo",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    },
    {
      id: "jm-4",
      title: "Organillermo",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "gm-3",
      title: "Organillermo",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Güémez"
    },
    {
      id: "pd-3",
      title: "Organillermo",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Padilla"
    }
  ]
};

// Data de Las Hermanas García
export const lasHermanasGarcia: NationalArtist = {
  id: "lhg-001",
  name: "Las Hermanas García",
  origin: "Guerrero",
  category: "Música",
  subcategory: "Boleros Costeños",
  description: "Dúo musical de Guerrero especializado en boleros costeños",
  events: [
    {
      id: "at-4",
      title: "Seguiré mi viaje",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Altamira"
    },
    {
      id: "md-4",
      title: "Seguiré mi viaje",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Madero"
    },
    {
      id: "slm-5",
      title: "Seguiré mi viaje",
      date: "9",
      day: "Jueves",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    }
  ]
};

// Data de Orquesta Sinfónica de Alientos de la Guardia Nacional
export const orquestaSinfonicaGuardiaNacional: NationalArtist = {
  id: "osgn-001",
  name: "Orquesta Sinfónica de Alientos de la Guardia Nacional",
  origin: "CDMX",
  category: "Música",
  subcategory: "Sinfónica",
  description: "La Orquesta Sinfónica de Alientos de la Guardia Nacional se ha distinguido por ser una de las mejores Bandas de Música en el país y presentará dentro del FICSM 2025 el programa denominado \"Un paseo por México\", una compilación de diferentes melodías que son representativas de algunos estados de la república, desde el norte hasta el sur. Contará con la participación especial de la Orquesta Sinfónica de la Universidad Autónoma de Tamaulipas y la Banda de Guerra Monumental de la Coordinación Territorial Regional GOLFO. Con su repertorio clásico, infantil y de música ligera, la Orquesta ha realizado también colaboraciones con la Banda de Guerra tocando marchas, himnos, entre otras, presentándose en recintos abiertos y cerrados. Cuenta con presentaciones en diferentes estados de la República Mexicana como son: Guanajuato, Michoacán, Querétaro, Tlaxcala, Puebla, Morelos, Veracruz, Aguascalientes, Zacatecas, Colima, Mérida, Oaxaca y Ciudad de México.",
  events: [
    {
      id: "vc-8",
      title: "Un Paseo por México",
      date: "5",
      day: "Domingo",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs",
      municipality: "Victoria"
    }
  ]
};

// Data de Ronda Machetera
export const rondaMachetera: NationalArtist = {
  id: "rm-001",
  name: "Ronda Machetera (Ronda Bogotá + Pato Machete)",
  origin: "Nuevo León",
  category: "Música",
  subcategory: "Fusión de cumbia y hip-hop",
  description: "Dúo musical de Nuevo León que fusiona cumbia y hip-hop",
  events: [
    {
      id: "md-2",
      title: "Cumbia por el Mundo",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Madero"
    },
    {
      id: "tl-8",
      title: "Ronda Machetera",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Tula"
    },
    {
      id: "vc-22",
      title: "Cumbia por el Mundo",
      date: "12",
      day: "Domingo",
      venue: "Escenario Principal de la Plaza Hidalgo",
      time: "Por confirmar",
      municipality: "Victoria"
    }
  ]
};

// Data de Ballet Folklórico de la Guardia Nacional
export const balletFolkloricoGuardiaNacional: NationalArtist = {
  id: "bfgn-001",
  name: "Ballet Folklórico de la Guardia Nacional",
  origin: "CDMX",
  category: "Danza",
  subcategory: "Folklórica",
  description: "Compañía de danza folklórica de la Ciudad de México",
  events: [
    {
      id: "vc-11",
      title: "Al son de mi Tierra",
      date: "5",
      day: "Domingo",
      venue: "Escenario Principal de la Plaza Hidalgo",
      time: "Por confirmar",
      municipality: "Victoria"
    }
  ]
};

// Data de Compañía Claunodromo
export const companiaClaunodromo: NationalArtist = {
  id: "cc-001",
  name: "Compañía Claunodromo",
  origin: "Jalisco",
  category: "Teatro",
  subcategory: "Teatro Comedia",
  description: "Compañía teatral de Jalisco especializada en teatro comedia",
  events: [
    {
      id: "mq-2",
      title: "¡Llévame!",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Miquihuana"
    },
    {
      id: "ll-1",
      title: "¡Llévame!",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Llera"
    },
    {
      id: "xi-2",
      title: "¡Llévame!",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    }
  ]
};

// Data de Los Bernal de Linares
export const losBernalDeLinares: NationalArtist = {
  id: "lbdl-001",
  name: "Los Bernal de Linares",
  origin: "Nuevo León",
  category: "Música",
  subcategory: "Norteño",
  description: "Grupo musical de Nuevo León especializado en música norteña",
  events: [
    {
      id: "bs-2",
      title: "Primera Cita",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Bustamante"
    },
    {
      id: "gz-1",
      title: "Primera Cita",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "González"
    },
    {
      id: "tl-4",
      title: "Primera Cita",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Tula"
    }
  ]
};

// Data de Ráfaga Teatro
export const rafagaTeatro: NationalArtist = {
  id: "rt-001",
  name: "Ráfaga Teatro",
  origin: "CDMX-Estado de México",
  category: "Teatro",
  subcategory: "Teatro de calle",
  description: "Compañía teatral de CDMX-Estado de México especializada en teatro de calle",
  events: [
    {
      id: "bs-5",
      title: "Las futbolistas",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Bustamante"
    },
    {
      id: "am-2",
      title: "Las futbolistas",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Antiguo Morelos"
    },
    {
      id: "mq-3",
      title: "Las futbolistas",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Miquihuana"
    },
    {
      id: "pl-4",
      title: "Las futbolistas",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "nm-4",
      title: "Las futbolistas",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Nuevo Morelos"
    },
    {
      id: "oc-4",
      title: "Las futbolistas",
      date: "9",
      day: "Jueves",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Ocampo"
    }
  ]
};

// Data de CIA. A la Deriva Teatro
export const ciaALaDerivaTeatro: NationalArtist = {
  id: "cadt-001",
  name: "CIA. A la Deriva Teatro",
  origin: "Jalisco",
  category: "Teatro",
  subcategory: "Teatro para primera infancia",
  description: "Compañía teatral de Jalisco especializada en teatro para primera infancia",
  events: [
    {
      id: "al-4",
      title: "Me importas tú, boleros para abrazar",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "ma-5",
      title: "Me importas tu, boleros para abrazar",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Mante"
    },
    {
      id: "tl-5",
      title: "Me importas tu, boleros para abrazar",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Tula"
    }
  ]
};

// Data de Viola Trigo
export const violaTrigo: NationalArtist = {
  id: "vt-001",
  name: "Viola Trigo",
  origin: "CDMX",
  category: "Literatura",
  description: "Artista literaria de la Ciudad de México especializada en poesía",
  events: [
    {
      id: "at-3",
      title: "Poetas y lugares con Viola Trigo",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Altamira"
    },
    {
      id: "md-3",
      title: "Poetas y Lugares con Viola Trigo",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Madero"
    }
  ]
};

// Array de todos los artistas nacionales
export const nationalArtists: NationalArtist[] = [
  mariaKatzarava,
  ceprodac,
  patriciaGuerrero,
  grupoLaTrenza,
  grupoTayer,
  mardonioCarballoJuanPabloVilla,
  lasPlastiqueTeatro,
  proteac,
  grupoElZar,
  laPerchaTeatro,
  guillermoMendez,
  lasHermanasGarcia,
  orquestaSinfonicaGuardiaNacional,
  rondaMachetera,
  balletFolkloricoGuardiaNacional,
  companiaClaunodromo,
  losBernalDeLinares,
  rafagaTeatro,
  ciaALaDerivaTeatro,
  violaTrigo
];

// Función para obtener todos los eventos de un artista específico
export const getArtistEvents = (artistName: string): NationalArtistEvent[] => {
  const artist = nationalArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
  return artist ? artist.events : [];
};

// Función para obtener artista por nombre
export const getArtistByName = (artistName: string): NationalArtist | undefined => {
  return nationalArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
};

// Función para obtener todos los eventos por municipio
export const getEventsByMunicipality = (municipality: string): NationalArtistEvent[] => {
  return nationalArtists.flatMap(artist => 
    artist.events.filter(event => 
      event.municipality.toLowerCase().includes(municipality.toLowerCase())
    )
  );
};
