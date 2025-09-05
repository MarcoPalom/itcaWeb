// Data de Artistas Tamaulipecos
import { FestivalEvent } from './types';

// Interfaz específica para artistas tamaulipecos
export interface TamaulipecoArtist {
  id: string;
  name: string;
  origin: string;
  category: string;
  subcategory?: string;
  description?: string;
  events: TamaulipecoArtistEvent[];
}

// Interfaz para eventos de artistas tamaulipecos
export interface TamaulipecoArtistEvent {
  id: string;
  title: string;
  date: string;
  day: string;
  venue: string;
  time: string;
  municipality: string;
}

// Data de Polvo Enamorado
export const polvoEnamorado: TamaulipecoArtist = {
  id: "pe-001",
  name: "Polvo Enamorado",
  origin: "Tamaulipas",
  category: "Producción Escénica",
  subcategory: "Teatro y música homenaje a compositores tamaulipecos",
  description: "Producción escénica de Tamaulipas que rinde homenaje a compositores tamaulipecos",
  events: [
    {
      id: "nl-8",
      title: "Polvo Enamorado",
      date: "8",
      day: "miércoles",
      venue: "Teatro Principal del Espacio Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-6",
      title: "Polvo Enamorado",
      date: "6",
      day: "lunes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "mt-6",
      title: "Polvo Enamorado",
      date: "6",
      day: "lunes",
      venue: "Teatro de la Reforma",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "cs-9",
      title: "Polvo Enamorado",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Casas"
    },
    {
      id: "vc-3",
      title: "Polvo Enamorado",
      date: "3",
      day: "viernes",
      venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "tp-3",
      title: "Polvo Enamorado",
      date: "3",
      day: "viernes",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Camerata del Colegio "San Juan Siglo XXI"
export const camerataSanJuan: TamaulipecoArtist = {
  id: "csj-001",
  name: "Camerata del Colegio \"San Juan Siglo XXI\"",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música de cámara",
  description: "Camerata musical del Colegio San Juan Siglo XXI de Tamaulipas",
  events: [
    {
      id: "nl-9",
      title: "Tamaulipas galante",
      date: "9",
      day: "jueves",
      venue: "Teatro Principal del Espacio Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "m-10",
      title: "Tamaulipas galante",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mier"
    }
  ]
};

// Data de Afrodescendencia Matamoros
export const afrodescendenciaMatamoros: TamaulipecoArtist = {
  id: "am-001",
  name: "Afrodescendencia Matamoros",
  origin: "Tamaulipas",
  category: "Danza",
  subcategory: "Danza afrodescendiente",
  description: "Grupo de danza afrodescendiente de Matamoros, Tamaulipas",
  events: [
    {
      id: "nl-10",
      title: "#porquelollevamosenlasangre",
      date: "10",
      day: "viernes",
      venue: "Teatro Principal del Espacio Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-12",
      title: "#porquelollevamosenlasangre",
      date: "12",
      day: "domingo",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de DOSCE La Compañía
export const dosceLaCompania: TamaulipecoArtist = {
  id: "dlc-001",
  name: "DOSCE La Compañía",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro contemporáneo",
  description: "Compañía teatral contemporánea de Tamaulipas",
  events: [
    {
      id: "nl-12",
      title: "Orinoco",
      date: "12",
      day: "domingo",
      venue: "Teatro Principal del Espacio Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-6",
      title: "Orinoco",
      date: "6",
      day: "lunes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de Raíces Huastecas
export const raicesHuastecas: TamaulipecoArtist = {
  id: "rh-001",
  name: "Raíces Huastecas",
  origin: "Tamaulipas",
  category: "Danza",
  subcategory: "Danza folklórica huasteca",
  description: "Grupo de danza folklórica huasteca de Tamaulipas",
  events: [
    {
      id: "nl-11",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "g-5",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Guerrero"
    },
    {
      id: "g-10",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Guerrero"
    },
    {
      id: "m-12",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mier"
    }
  ]
};

// Data de En Boca Ensamble
export const enBocaEnsamble: TamaulipecoArtist = {
  id: "ebe-001",
  name: "En Boca Ensamble",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional",
  description: "Ensamble musical tradicional de Tamaulipas",
  events: [
    {
      id: "g-5",
      title: "De chile, mole y pozole",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Guerrero"
    },
    {
      id: "m-11",
      title: "De chile, mole y pozole",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mier"
    },
    {
      id: "c-3",
      title: "De chile, mole y pozole",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Camargo"
    }
  ]
};

// Data de Soraima y sus Huastecos
export const soraimaYSusHuastecos: TamaulipecoArtist = {
  id: "syh-001",
  name: "Soraima y sus Huastecos",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música huasteca tradicional",
  description: "Grupo musical huasteco tradicional de Tamaulipas con 3 décadas de tradición",
  events: [
    {
      id: "m-5",
      title: "Huasteca viva: \"Sonidos y raíces en el corazón tamaulipeco\" 3 décadas de tradición con Soraima y sus huastecos",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mier"
    },
    {
      id: "gdo-3",
      title: "Huasteca viva: \"Sonidos y raíces en el corazón tamaulipeco\" 3 décadas de tradición con Soraima y sus huastecos",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "vh-3",
      title: "Huasteca viva: \"Sonidos y raíces en el corazón tamaulipeco\" 3 décadas de tradición con Soraima y sus huastecos",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    }
  ]
};

// Data de Colectivo teatro de bolsillo
export const colectivoTeatroDeBolsillo: TamaulipecoArtist = {
  id: "ctb-001",
  name: "Colectivo teatro de bolsillo",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Colectivo teatral experimental de Tamaulipas",
  events: [
    {
      id: "m-7",
      title: "Llamando a base",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mier"
    },
    {
      id: "rb-10",
      title: "Llamando a base",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "ab-12",
      title: "Llamando a base",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Abasolo"
    }
  ]
};

// Data de Warislov
export const warislov: TamaulipecoArtist = {
  id: "w-001",
  name: "Warislov",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Rock regional",
  description: "Grupo de rock regional de Tamaulipas",
  events: [
    {
      id: "ma-4",
      title: "Warislov Concierto Rockteño",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Miguel Alemán"
    },
    {
      id: "gdo-3",
      title: "Warislov Concierto Rockteño",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    }
  ]
};

// Data de Aglaé Salinas
export const aglaeSalinas: TamaulipecoArtist = {
  id: "as-001",
  name: "Aglaé Salinas",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional mexicana",
  description: "Artista musical de Tamaulipas especializada en música tradicional mexicana",
  events: [
    {
      id: "c-12",
      title: "México en mi alma",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Camargo"
    },
    {
      id: "gdo-11",
      title: "México en mi alma",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    }
  ]
};

// Data de Cirko Frontera
export const cirkoFrontera: TamaulipecoArtist = {
  id: "cf-001",
  name: "Cirko Frontera",
  origin: "Tamaulipas",
  category: "Circo",
  subcategory: "Circo contemporáneo",
  description: "Compañía de circo contemporáneo de Tamaulipas",
  events: [
    {
      id: "gdo-7",
      title: "Hermanos del equilibrio",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "rb-8",
      title: "Hermanos del equilibrio",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "vh-9",
      title: "Hermanos del equilibrio",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    },
    {
      id: "sf-5",
      title: "Hermanos del equilibrio",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Fernando"
    },
    {
      id: "bg-5",
      title: "Hermanos del equilibrio",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Burgos"
    },
    {
      id: "cr-12",
      title: "Hermanos del equilibrio",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Cruillas"
    },
    {
      id: "sn-6",
      title: "Hermanos del equilibrio",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Nicolás"
    },
    {
      id: "md-7",
      title: "Hermanos del equilibrio",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Méndez"
    }
  ]
};

// Data de Los Valdés Ska
export const losValdesSka: TamaulipecoArtist = {
  id: "lvs-001",
  name: "Los Valdés Ska",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Ska",
  description: "Grupo de ska de Tamaulipas",
  events: [
    {
      id: "nl-11",
      title: "Nación SKA",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "al-9",
      title: "Nación SKA",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Aldama"
    }
  ]
};

// Data de El Contrato
export const elContrato: TamaulipecoArtist = {
  id: "ec-001",
  name: "El Contrato",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música norteña",
  description: "Grupo de música norteña de Tamaulipas",
  events: [
    {
      id: "rb-3",
      title: "Popteño, \"Que no muera la música norteña\"",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "sf-4",
      title: "Popteño, \"Que no muera la música norteña\"",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Fernando"
    }
  ]
};

// Data de Banda Sinfónica Municipal de Reynosa
export const bandaSinfonicaReynosa: TamaulipecoArtist = {
  id: "bsr-001",
  name: "Banda Sinfónica Municipal de Reynosa \"Mtro. Elías Valenzuela\"",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música sinfónica",
  description: "Banda sinfónica municipal de Reynosa dirigida por el Mtro. Elías Valenzuela",
  events: [
    {
      id: "rb-11",
      title: "Mosaico Musical",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "sf-12",
      title: "Mosaico Musical",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Fernando"
    }
  ]
};

// Data de La Nota Alegre
export const laNotaAlegre: TamaulipecoArtist = {
  id: "lna-001",
  name: "La Nota Alegre",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional norteña",
  description: "Grupo de música tradicional norteña de Tamaulipas",
  events: [
    {
      id: "rb-12",
      title: "De amores, polka y huapango",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "vh-11",
      title: "De amores, polka y huapango",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    },
    {
      id: "slm-4",
      title: "De amores, polka y huapango",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    },
    {
      id: "h-3",
      title: "De amores, polka y huapango",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Hidalgo"
    }
  ]
};

// Data de Los del Pueblo
export const losDelPueblo: TamaulipecoArtist = {
  id: "ldp-001",
  name: "Los del Pueblo",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música del norte tamaulipeco",
  description: "Grupo musical del norte tamaulipeco",
  events: [
    {
      id: "vh-12",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    },
    {
      id: "ll-12",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Llera"
    },
    {
      id: "j-3",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "p-3",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Padilla"
    }
  ]
};

// Data de Amenaza Norteña
export const amenazaNortena: TamaulipecoArtist = {
  id: "an-001",
  name: "Amenaza Norteña",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música norteña",
  description: "Grupo de música norteña de Tamaulipas",
  events: [
    {
      id: "md-3",
      title: "Concierto-baile acá por el norte",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Méndez"
    },
    {
      id: "bg-4",
      title: "concierto-baile acá por el norte",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Burgos"
    },
    {
      id: "ll-10",
      title: "concierto-baile acá por el norte",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Llera"
    },
    {
      id: "jv-11",
      title: "concierto-baile acá por el norte",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jaumave"
    },
    {
      id: "bs-12",
      title: "concierto-baile acá por el norte",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Bustamante"
    }
  ]
};

// Data de Kani Ensamble Coral
export const kaniEnsambleCoral: TamaulipecoArtist = {
  id: "kec-001",
  name: "Kani Ensamble Coral",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música coral",
  description: "Ensamble coral de Tamaulipas",
  events: [
    {
      id: "md-4",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Méndez"
    },
    {
      id: "j-3",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "gf-11",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    },
    {
      id: "at-12",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Altamira"
    }
  ]
};

// Data de Son Kndla
export const sonKndla: TamaulipecoArtist = {
  id: "sk-001",
  name: "Son Kndla",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional",
  description: "Grupo musical tradicional de Tamaulipas",
  events: [
    {
      id: "md-12",
      title: "Espectáculo musical",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Méndez"
    },
    {
      id: "cr-3",
      title: "Espectáculo musical",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Cruillas"
    }
  ]
};

// Data de Cirque erös
export const cirqueEros: TamaulipecoArtist = {
  id: "ce-001",
  name: "Cirque erös",
  origin: "Tamaulipas",
  category: "Circo",
  subcategory: "Circo contemporáneo",
  description: "Compañía de circo contemporáneo de Tamaulipas",
  events: [
    {
      id: "sf-5",
      title: "Danzas de fuegos",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Fernando"
    },
    {
      id: "sc-4",
      title: "Danzas de fuegos",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Carlos"
    },
    {
      id: "cr-6",
      title: "Del Circo a la Calle",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir (escuelas)",
      time: "Por confirmar",
      municipality: "Cruillas"
    },
    {
      id: "ab-7",
      title: "Del Circo a la Calle",
      date: "7",
      day: "martes",
      venue: "Lugar por definir (escuelas)",
      time: "Por confirmar",
      municipality: "Abasolo"
    },
    {
      id: "slm-8",
      title: "Del Circo a la Calle",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir (escuelas)",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    },
    {
      id: "al-9",
      title: "Del Circo a la Calle",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir (escuelas)",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "at-10",
      title: "Del Circo a la Calle",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir (escuelas)",
      time: "Por confirmar",
      municipality: "Altamira"
    },
    {
      id: "vg-3",
      title: "Danzas de fuegos",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Villagrán"
    }
  ]
};

// Data de Grupo espejos taller de teatro y pantomima
export const grupoEspejos: TamaulipecoArtist = {
  id: "ge-001",
  name: "Grupo espejos taller de teatro y pantomima",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro y pantomima",
  description: "Grupo de teatro y pantomima de Tamaulipas",
  events: [
    {
      id: "bg-7",
      title: "Con las manos entre los pies",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Burgos"
    },
    {
      id: "cr-8",
      title: "Con las manos entre los pies",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Cruillas"
    },
    {
      id: "sn-9",
      title: "Con las manos entre los pies",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Nicolás"
    },
    {
      id: "mn-3",
      title: "Con las manos entre los pies",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mainero"
    },
    {
      id: "vg-4",
      title: "Con las manos entre los pies",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Villagrán"
    },
    {
      id: "nm-12",
      title: "Con las manos entre los pies",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Nuevo Morelos"
    }
  ]
};

// Data de Tradición Genuina
export const tradicionGenuina: TamaulipecoArtist = {
  id: "tg-001",
  name: "Tradición Genuina",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional",
  description: "Grupo de música tradicional de Tamaulipas",
  events: [
    {
      id: "bg-3",
      title: "Paseando con huapangos y tradición",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Burgos"
    },
    {
      id: "cr-4",
      title: "Paseando con huapangos y tradición",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Cruillas"
    },
    {
      id: "j-12",
      title: "Paseando con huapangos y tradición",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "slm-10",
      title: "Paseando con huapangos y tradición",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    },
    {
      id: "p-11",
      title: "Paseando con huapangos y tradición",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Padilla"
    }
  ]
};

// Data de Roberto Cuentacuentos
export const robertoCuentacuentos: TamaulipecoArtist = {
  id: "rc-001",
  name: "Roberto Cuentacuentos",
  origin: "Tamaulipas",
  category: "Literatura",
  subcategory: "Cuentacuentos",
  description: "Cuentacuentos de Tamaulipas",
  events: [
    {
      id: "sn-12",
      title: "Cuentos del mundo",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Nicolás"
    },
    {
      id: "sc-11",
      title: "Cuentos del mundo",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Carlos"
    },
    {
      id: "p-8",
      title: "Cuentos del mundo",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Padilla"
    },
    {
      id: "jv-6",
      title: "Cuentos del mundo",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jaumave"
    },
    {
      id: "bs-5",
      title: "Cuentos del mundo",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Bustamante"
    },
    {
      id: "pl-4",
      title: "Cuentos del mundo",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "mq-3",
      title: "Cuentos del mundo",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Miquihuana"
    }
  ]
};

// Data de Grupo Pendiente
export const grupoPendiente: TamaulipecoArtist = {
  id: "gp-001",
  name: "Grupo Pendiente",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música norteña",
  description: "Grupo de música norteña de Tamaulipas",
  events: [
    {
      id: "sc-12",
      title: "Herencia Norteña",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Carlos"
    },
    {
      id: "ab-3",
      title: "Herencia Norteña",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Abasolo"
    },
    {
      id: "h-10",
      title: "Herencia Norteña",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Hidalgo"
    },
    {
      id: "g-11",
      title: "Herencia Norteña",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "González"
    },
    {
      id: "al-5",
      title: "Herencia Norteña",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "oc-4",
      title: "Herencia Norteña",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Ocampo"
    },
    {
      id: "m-11",
      title: "Herencia Norteña",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mante"
    }
  ]
};

// Data de Érase una vez dos veces
export const eraseUnaVezDosVeces: TamaulipecoArtist = {
  id: "euvdv-001",
  name: "Érase una vez dos veces",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro infantil",
  description: "Compañía teatral infantil de Tamaulipas",
  events: [
    {
      id: "mn-12",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mainero"
    },
    {
      id: "vg-11",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Villagrán"
    },
    {
      id: "h-10",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Hidalgo"
    },
    {
      id: "gm-9",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Güémez"
    }
  ]
};

// Data de Trío UATsteco
export const trioUATsteco: TamaulipecoArtist = {
  id: "tuat-001",
  name: "Trío UATsteco",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música académica",
  description: "Trío musical de la Universidad Autónoma de Tamaulipas",
  events: [
    {
      id: "sn-3",
      title: "Concierto Trío UATsteco",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "San Nicolás"
    },
    {
      id: "j-4",
      title: "Concierto Trío UATsteco",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "gm-5",
      title: "Concierto Trío UATsteco",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Güémez"
    },
    {
      id: "pl-12",
      title: "Concierto Trío UATsteco",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "t-11",
      title: "Concierto Trío UATsteco",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Tula"
    }
  ]
};

// Data de Quinteto de Alientos UAT
export const quintetoAlientosUAT: TamaulipecoArtist = {
  id: "qauat-001",
  name: "Quinteto de Alientos UAT",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música académica",
  description: "Quinteto de alientos de la Universidad Autónoma de Tamaulipas",
  events: [
    {
      id: "oc-11",
      title: "Concierto Quinteto de Alientos UAT",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Ocampo"
    },
    {
      id: "x-10",
      title: "Concierto Quinteto de Alientos UAT",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    },
    {
      id: "nm-3",
      title: "Concierto Quinteto de Alientos UAT",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Nuevo Morelos"
    },
    {
      id: "am-12",
      title: "Concierto Quinteto de Alientos UAT",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Antiguo Morelos"
    },
    {
      id: "g-4",
      title: "Concierto Quinteto de Alientos UAT",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "González"
    }
  ]
};

// Data de Trío Bohemia UAT
export const trioBohemiaUAT: TamaulipecoArtist = {
  id: "tbauat-001",
  name: "Trío Bohemia UAT",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música académica",
  description: "Trío Bohemia de la Universidad Autónoma de Tamaulipas",
  events: [
    {
      id: "x-12",
      title: "Concierto Trío Bohemia UAT",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    },
    {
      id: "al-11",
      title: "Concierto Trío Bohemia UAT",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Aldama"
    }
  ]
};

// Data de Teatro Guarapo
export const teatroGuarapo: TamaulipecoArtist = {
  id: "tg-002",
  name: "Teatro Guarapo",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro comunitario",
  description: "Grupo de teatro comunitario de Tamaulipas",
  events: [
    {
      id: "j-7",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "ab-6",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Abasolo"
    },
    {
      id: "p-8",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Padilla"
    },
    {
      id: "gm-10",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Güémez"
    },
    {
      id: "c-9",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Casas"
    }
  ]
};

// Data de José Palacios
export const josePalacios: TamaulipecoArtist = {
  id: "jp-001",
  name: "José Palacios",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro unipersonal",
  description: "Actor y director teatral de Tamaulipas",
  events: [
    {
      id: "jv-9",
      title: "La tienda de Don Verdi",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jaumave"
    },
    {
      id: "bs-10",
      title: "La tienda de Don Verdi",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Bustamante"
    },
    {
      id: "pl-8",
      title: "La tienda de Don Verdi",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "t-7",
      title: "La tienda de Don Verdi",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Tula"
    },
    {
      id: "nm-6",
      title: "La tienda de Don Verdi",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Nuevo Morelos"
    }
  ]
};

// Data de MFOX La Puerta del Talento
export const mfoxLaPuertaDelTalento: TamaulipecoArtist = {
  id: "mfox-001",
  name: "MFOX La Puerta del Talento",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música urbana",
  description: "Grupo de música urbana de Tamaulipas",
  events: [
    {
      id: "ab-4",
      title: "Urban revolution",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Abasolo"
    },
    {
      id: "ll-12",
      title: "Urban revolution",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Llera"
    }
  ]
};

// Data de Rockpango
export const rockpango: TamaulipecoArtist = {
  id: "rp-001",
  name: "Rockpango",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Rock huasteco",
  description: "Grupo de rock huasteco de Tamaulipas",
  events: [
    {
      id: "slm-3",
      title: "Huasteco hasta los huesos",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    }
  ]
};

// Data de Norteños de Río Bravo
export const nortenosDeRioBravo: TamaulipecoArtist = {
  id: "ndrb-001",
  name: "Norteños de Río Bravo",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música norteña",
  description: "Grupo de música norteña de Río Bravo",
  events: [
    {
      id: "slm-4",
      title: "En tierras Tamaulipecas",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    },
    {
      id: "t-12",
      title: "En tierras Tamaulipecas",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Tula"
    },
    {
      id: "x-11",
      title: "En tierras Tamaulipecas",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    },
    {
      id: "al-3",
      title: "En tierras Tamaulipecas",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Aldama"
    }
  ]
};

// Data de Grupo de danza Anacahuitas
export const grupoDanzaAnacahuitas: TamaulipecoArtist = {
  id: "gda-001",
  name: "Grupo de danza Anacahuitas",
  origin: "Tamaulipas",
  category: "Danza",
  subcategory: "Danza folklórica",
  description: "Grupo de danza folklórica de Tamaulipas",
  events: [
    {
      id: "ab-11",
      title: "Sones de mi México",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Abasolo"
    },
    {
      id: "slm-12",
      title: "Sones de mi México",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    },
    {
      id: "gm-3",
      title: "Sones de mi México",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Güémez"
    }
  ]
};

// Data de Grupo Relativo
export const grupoRelativo: TamaulipecoArtist = {
  id: "gr-001",
  name: "Grupo Relativo",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música popular",
  description: "Grupo musical popular de Tamaulipas",
  events: [
    {
      id: "p-3",
      title: "Las favoritas con Grupo Relativo",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Padilla"
    },
    {
      id: "gm-12",
      title: "Las favoritas con Grupo Relativo",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Güémez"
    }
  ]
};

// Data de Bocatoma Jazz
export const bocatomaJazz: TamaulipecoArtist = {
  id: "bj-001",
  name: "Bocatoma Jazz",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Jazz",
  description: "Grupo de jazz de Tamaulipas",
  events: [
    {
      id: "p-12",
      title: "El arte de la expresión musical",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Padilla"
    }
  ]
};

// Data de Grupo Folklórico Kauyumarie
export const grupoFolkloricoKauyumarie: TamaulipecoArtist = {
  id: "gfk-001",
  name: "Grupo Folklórico Kauyumarie",
  origin: "Tamaulipas",
  category: "Danza",
  subcategory: "Danza folklórica",
  description: "Grupo de danza folklórica de Tamaulipas",
  events: [
    {
      id: "c-3",
      title: "De costa a costa",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Casas"
    },
    {
      id: "v-4",
      title: "De costa a costa",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Victoria"
    }
  ]
};

// Data de Brassas Mexican Beat
export const brassasMexicanBeat: TamaulipecoArtist = {
  id: "bmb-001",
  name: "Brassas Mexican Beat",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música de banda",
  description: "Grupo de música de banda de Tamaulipas",
  events: [
    {
      id: "v-11",
      title: "Música de banda del planeta tierra",
      date: "11",
      day: "sábado",
      venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "md-10",
      title: "Música de banda del planeta tierra",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Madero"
    }
  ]
};

// Data de Selección del Sistema Tamaulipeco de Agrupaciones Musicales Comunitarias
export const seleccionSistemaTamaulipeco: TamaulipecoArtist = {
  id: "sstamc-001",
  name: "Selección del Sistema Tamaulipeco de Agrupaciones Musicales Comunitarias",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música comunitaria",
  description: "Selección de agrupaciones musicales comunitarias de Tamaulipas",
  events: [
    {
      id: "v-12",
      title: "Concierto Selección del Sistema Tamaulipeco de Agrupaciones Musicales Comunitarias",
      date: "12",
      day: "domingo",
      venue: "Teatro \"Amalia G. de Castillo Ledón del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    }
  ]
};

// Data de Apapacho Teatro, arte y diversidad
export const apapachoTeatro: TamaulipecoArtist = {
  id: "atad-001",
  name: "Apapacho Teatro, arte y diversidad",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro inclusivo",
  description: "Compañía teatral inclusiva de Tamaulipas",
  events: [
    {
      id: "v-5",
      title: "El vuelo de la Luciérnaga",
      date: "5",
      day: "domingo",
      venue: "Auditorio Alberto López del CCT",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "m-6",
      title: "El vuelo de la Luciérnaga",
      date: "6",
      day: "lunes",
      venue: "Teatro del IMSS",
      time: "Por confirmar",
      municipality: "Mante"
    }
  ]
};

// Data de Colectivo Trueque
export const colectivoTrueque: TamaulipecoArtist = {
  id: "ct-001",
  name: "Colectivo Trueque",
  origin: "Tamaulipas",
  category: "Circo",
  subcategory: "Circo callejero",
  description: "Colectivo de circo callejero de Tamaulipas",
  events: [
    {
      id: "ll-8",
      title: "Animación con zanqueros y mimo",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Llera"
    },
    {
      id: "oc-7",
      title: "Animación con zanqueros y mimo",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Ocampo"
    },
    {
      id: "x-6",
      title: "Animación con zanqueros y mimo",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    },
    {
      id: "gf-5",
      title: "Animación con zanqueros y mimo",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    },
    {
      id: "g-9",
      title: "Animación con zanqueros y mimo",
      date: "9",
      day: "jueves",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "González"
    },
    {
      id: "nm-4",
      title: "Animación con zanqueros y mimo",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Nuevo Morelos"
    },
    {
      id: "am-3",
      title: "Animación con zanqueros y mimo",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Antiguo Morelos"
    }
  ]
};

// Data de Percutam Dúo
export const percutamDuo: TamaulipecoArtist = {
  id: "pd-001",
  name: "Percutam Dúo",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música de percusión",
  description: "Dúo de percusión de Tamaulipas",
  events: [
    {
      id: "jv-12",
      title: "Marimba perpetua",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Jaumave"
    },
    {
      id: "pl-11",
      title: "Marimba perpetua",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "pl-12",
      title: "Marimba perpetua",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "t-4",
      title: "Marimba perpetua",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Tula"
    },
    {
      id: "oc-3",
      title: "Marimba perpetua",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Ocampo"
    },
    {
      id: "x-5",
      title: "Marimba perpetua",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    }
  ]
};

// Data de Rondalla Magisterial de Tamaulipas
export const rondallaMagisterialTamaulipas: TamaulipecoArtist = {
  id: "rmt-001",
  name: "Rondalla Magisterial de Tamaulipas",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Rondalla",
  description: "Rondalla magisterial de Tamaulipas",
  events: [
    {
      id: "pl-3",
      title: "Tributo al príncipe de la canción \"José José\"",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Palmillas"
    },
    {
      id: "oc-12",
      title: "Tributo al príncipe de la canción \"José José\"",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Ocampo"
    }
  ]
};

// Data de Arael & Erihka Peña
export const araelErihkaPena: TamaulipecoArtist = {
  id: "aep-001",
  name: "Arael & Erihka Peña",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música popular",
  description: "Dúo musical de Tamaulipas",
  events: [
    {
      id: "x-3",
      title: "Tamaulipas es mi Tierra",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Xicoténcatl"
    },
    {
      id: "g-12",
      title: "Tamaulipas es mi Tierra",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "González"
    }
  ]
};

// Data de La Espuma de Mar
export const laEspumaDeMar: TamaulipecoArtist = {
  id: "ledm-001",
  name: "La Espuma de Mar",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música popular",
  description: "Grupo musical de Tamaulipas",
  events: [
    {
      id: "gf-4",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    },
    {
      id: "gf-12",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    },
    {
      id: "m-3",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mante"
    },
    {
      id: "g-5",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "González"
    }
  ]
};

// Data de Elgar, Diseño Musical
export const elgarDisenoMusical: TamaulipecoArtist = {
  id: "edm-001",
  name: "Elgar, Diseño Musical",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música experimental",
  description: "Proyecto musical experimental de Tamaulipas",
  events: [
    {
      id: "m-4",
      title: "Tamaulipas a la cámara \"Voces y cuerdas de nuestra tierra\"",
      date: "4",
      day: "sábado",
      venue: "Castillo de la Nueva Apolonia",
      time: "Por confirmar",
      municipality: "Mante"
    }
  ]
};

// Data de Teatro ingenio – Creación
export const teatroIngenioCreacion: TamaulipecoArtist = {
  id: "tic-001",
  name: "Teatro ingenio – Creación",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "m-5",
      title: "El barco papel",
      date: "5",
      day: "domingo",
      venue: "Teatro del IMSS",
      time: "Por confirmar",
      municipality: "Mante"
    }
  ]
};

// Data de Gato Negro
export const gatoNegro: TamaulipecoArtist = {
  id: "gn-001",
  name: "Gato Negro",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "m-8",
      title: "Kayu",
      date: "8",
      day: "miércoles",
      venue: "Teatro del IMSS",
      time: "Por confirmar",
      municipality: "Mante"
    },
    {
      id: "t-7",
      title: "Kayu",
      date: "7",
      day: "martes",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Teatromorfosis
export const teatromorfosis: TamaulipecoArtist = {
  id: "tm-001",
  name: "Teatromorfosis",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "m-10",
      title: "El día que la gente pez salió del mar",
      date: "10",
      day: "viernes",
      venue: "Teatro del IMSS",
      time: "Por confirmar",
      municipality: "Mante"
    }
  ]
};

// Data de Melissa Castellanos
export const melissaCastellanos: TamaulipecoArtist = {
  id: "mc-001",
  name: "Melissa Castellanos",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música de autor",
  description: "Cantautora de Tamaulipas",
  events: [
    {
      id: "m-12",
      title: "Solata - Un concierto sobre duelo, distancia y raíz",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Mante"
    },
    {
      id: "g-11",
      title: "Solata - Un concierto sobre duelo, distancia y raíz",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "González"
    }
  ]
};

// Data de Esther Tovar
export const estherTovar: TamaulipecoArtist = {
  id: "et-001",
  name: "Esther Tovar",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Bolero y jazz",
  description: "Cantante de bolero y jazz de Tamaulipas",
  events: [
    {
      id: "al-4",
      title: "Esther Tovar \"La dama del bolero Jazz\"",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "md-3",
      title: "Esther Tovar \"La dama del bolero Jazz\"",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Madero"
    }
  ]
};

// Data de Punto Exacto, El cuervo y Mr. Trash
export const puntoExactoElCuervoMrTrash: TamaulipecoArtist = {
  id: "peecmt-001",
  name: "Punto Exacto, El cuervo y Mr. Trash",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Rock",
  description: "Grupo de rock de Tamaulipas",
  events: [
    {
      id: "md-11",
      title: "ROCK",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Madero"
    }
  ]
};

// Data de Adicto5
export const adicto5: TamaulipecoArtist = {
  id: "a5-001",
  name: "Adicto5",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música popular",
  description: "Grupo musical de Tamaulipas",
  events: [
    {
      id: "md-12",
      title: "Noches Adictiva5",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Madero"
    }
  ]
};

// Data de Hijk & Alex del Ángel
export const AlexDelAngel: TamaulipecoArtist = {
  id: "hada-001",
  name: "Hijk & Alex del Ángel",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "t-4",
      title: "Wyrd: exploración escénica sobre destino y el ser & \"Años despues\"",
      date: "4",
      day: "sábado",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Serendipia Teatro
export const serendipiaTeatro: TamaulipecoArtist = {
  id: "st-001",
  name: "Serendipia Teatro",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "t-8",
      title: "Planeta Kepler o los datos inútiles",
      date: "8",
      day: "miércoles",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Feminoflexia
export const feminoflexia: TamaulipecoArtist = {
  id: "f-001",
  name: "Feminoflexia",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "t-9",
      title: "Feminoflexia",
      date: "9",
      day: "jueves",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Jimmy Yunes
export const jimmyYunes: TamaulipecoArtist = {
  id: "jy-001",
  name: "Jimmy Yunes",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música popular",
  description: "Cantante de música popular de Tamaulipas",
  events: [
    {
      id: "t-4",
      title: "Mexicountry",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Marching Band COBAT 15
export const marchingBandCOBAT15: TamaulipecoArtist = {
  id: "mbc15-001",
  name: "Marching Band COBAT 15",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Banda de marcha",
  description: "Banda de marcha del COBAT 15 de Tamaulipas",
  events: [
    {
      id: "t-3",
      title: "Concierto Marching Band COBAT 15",
      date: "3",
      day: "viernes",
      venue: "Barco Museo del Niño",
      time: "17:00 hrs.",
      municipality: "Tampico"
    }
  ]
};

// Data de Orquesta Sinfónica Comunitaria de Tampico
export const orquestaSinfonicaComunitariaTampico: TamaulipecoArtist = {
  id: "osct-001",
  name: "Orquesta Sinfónica Comunitaria de Tampico",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música sinfónica",
  description: "Orquesta sinfónica comunitaria de Tampico",
  events: [
    {
      id: "t-4",
      title: "Concierto Orquesta Sinfónica Comunitaria de Tampico",
      date: "4",
      day: "sábado",
      venue: "Barco Museo del Niño",
      time: "16:30 hrs.",
      municipality: "Tampico"
    }
  ]
};

// Data de Ensamble de Mujeres "María Bonita"
export const ensambleMujeresMariaBonita: TamaulipecoArtist = {
  id: "emmb-001",
  name: "Ensamble de Mujeres \"María Bonita\"",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música coral",
  description: "Ensamble coral femenino de Tamaulipas",
  events: [
    {
      id: "t-9",
      title: "Concierto Ensamble de Mujeres \"María Bonita\"",
      date: "9",
      day: "jueves",
      venue: "Barco Museo del Niño",
      time: "18:00 hrs.",
      municipality: "Tampico"
    }
  ]
};

// Data de Lobos teatro
export const lobosTeatro: TamaulipecoArtist = {
  id: "lt-001",
  name: "Lobos teatro",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "t-11",
      title: "Julia",
      date: "11",
      day: "sábado",
      venue: "Barco Museo del Niño",
      time: "18:00 hrs.",
      municipality: "Tampico"
    }
  ]
};

// Data de Paquidermo Artes Escénicas
export const paquidermoArtesEscenicas: TamaulipecoArtist = {
  id: "pae-001",
  name: "Paquidermo Artes Escénicas",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Compañía teatral experimental de Tamaulipas",
  events: [
    {
      id: "t-12",
      title: "El viaje de Azul",
      date: "12",
      day: "domingo",
      venue: "Barco Museo del Niño",
      time: "18:00 hrs.",
      municipality: "Tampico"
    }
  ]
};

// Data de Festival de Huapango (Evento especial)
export const festivalDeHuapango: TamaulipecoArtist = {
  id: "fdh-001",
  name: "Festival de Huapango",
  origin: "Tamaulipas",
  category: "Festival",
  subcategory: "Festival tradicional",
  description: "Festival tradicional de huapango de Tamaulipas",
  events: [
    {
      id: "ll-3",
      title: "Se realiza inauguración del Festival con su Festival de Huapango",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Llera"
    }
  ]
};

// Data de Internacional Orquesta de Tampico
export const internacionalOrquestaTampico: TamaulipecoArtist = {
  id: "iot-001",
  name: "Internacional Orquesta de Tampico",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música de orquesta",
  description: "Orquesta internacional de Tampico",
  events: [
    {
      id: "t-3",
      title: "\"Un atardecer con la Internacional Orquesta Tampico de Claudio Rosas\"",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Tula"
    }
  ]
};

// Data de Aldebarán Acústico
export const aldebaranAcustico: TamaulipecoArtist = {
  id: "aa-001",
  name: "Aldebarán Acústico",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música acústica",
  description: "Grupo de música acústica de Tamaulipas",
  events: [
    {
      id: "bs-3",
      title: "Acusticumbias",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Bustamante"
    }
  ]
};

// Data de Grupo Honda Nor-T
export const grupoHondaNorT: TamaulipecoArtist = {
  id: "ghnt-001",
  name: "Grupo Honda Nor-T",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional",
  description: "Grupo de música tradicional de Tamaulipas",
  events: [
    {
      id: "h-3",
      title: "Huapangos tamaulipecos, la raíz de mi tierra",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Hidalgo"
    },
    {
      id: "gf-12",
      title: "Huapangos tamaulipecos, la raíz de mi tierra",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Por confirmar",
      municipality: "Gómez Farías"
    }
  ]
};

// Array de todos los artistas tamaulipecos
export const tamaulipecosArtists: TamaulipecoArtist[] = [
  polvoEnamorado,
  camerataSanJuan,
  afrodescendenciaMatamoros,
  dosceLaCompania,
  raicesHuastecas,
  enBocaEnsamble,
  soraimaYSusHuastecos,
  colectivoTeatroDeBolsillo,
  warislov,
  aglaeSalinas,
  cirkoFrontera,
  losValdesSka,
  elContrato,
  bandaSinfonicaReynosa,
  laNotaAlegre,
  losDelPueblo,
  amenazaNortena,
  kaniEnsambleCoral,
  sonKndla,
  cirqueEros,
  grupoEspejos,
  tradicionGenuina,
  robertoCuentacuentos,
  grupoPendiente,
  eraseUnaVezDosVeces,
  trioUATsteco,
  quintetoAlientosUAT,
  trioBohemiaUAT,
  teatroGuarapo,
  josePalacios,
  mfoxLaPuertaDelTalento,
  rockpango,
  nortenosDeRioBravo,
  grupoDanzaAnacahuitas,
  grupoRelativo,
  bocatomaJazz,
  grupoFolkloricoKauyumarie,
  brassasMexicanBeat,
  seleccionSistemaTamaulipeco,
  apapachoTeatro,
  colectivoTrueque,
  percutamDuo,
  rondallaMagisterialTamaulipas,
  araelErihkaPena,
  laEspumaDeMar,
  elgarDisenoMusical,
  teatroIngenioCreacion,
  gatoNegro,
  teatromorfosis,
  melissaCastellanos,
  estherTovar,
  puntoExactoElCuervoMrTrash,
  adicto5,
  AlexDelAngel,
  serendipiaTeatro,
  feminoflexia,
  jimmyYunes,
  marchingBandCOBAT15,
  orquestaSinfonicaComunitariaTampico,
  ensambleMujeresMariaBonita,
  lobosTeatro,
  paquidermoArtesEscenicas,
  festivalDeHuapango,
  internacionalOrquestaTampico,
  aldebaranAcustico,
  grupoHondaNorT
];

// Función para obtener todos los eventos de un artista específico
export const getTamaulipecoArtistEvents = (artistName: string): TamaulipecoArtistEvent[] => {
  const artist = tamaulipecosArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
  return artist ? artist.events : [];
};

// Función para obtener artista por nombre
export const getTamaulipecoArtistByName = (artistName: string): TamaulipecoArtist | undefined => {
  return tamaulipecosArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
};

// Función para obtener todos los eventos por municipio
export const getTamaulipecoEventsByMunicipality = (municipality: string): TamaulipecoArtistEvent[] => {
  return tamaulipecosArtists.flatMap(artist => 
    artist.events.filter(event => 
      event.municipality.toLowerCase().includes(municipality.toLowerCase())
    )
  );
};