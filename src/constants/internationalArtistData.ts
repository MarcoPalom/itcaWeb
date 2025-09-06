// Data de artistas internacionales del Festival

// Interfaz específica para artistas internacionales
export interface InternationalArtist {
  id: string;
  name: string;
  origin: string;
  category: string;
  subcategory?: string;
  description?: string;
  events: InternationalArtistEvent[];
}

// Interfaz para eventos de artistas internacionales
export interface InternationalArtistEvent {
  id: string;
  title: string;
  date: string;
  day: string;
  venue: string;
  time: string;
  municipality: string;
}

// Data de Bianca Marroquin
export const biancaMarroquin: InternationalArtist = {
  id: "bm-001",
  name: "Bianca Marroquín",
  origin: "Tamaulipas-México-Estados Unidos",
  category: "Teatro",
  subcategory: "Teatro Musical",
  description: "Actriz y cantante mexicana-estadounidense, reconocida por su trabajo en Broadway y teatro musical",
  events: [
    {
      id: "nl-1",
      title: "Broadway Baby",
      date: "3",
      day: "Viernes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "vc-18",
      title: "Broadway Baby",
      date: "9",
      day: "Jueves",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "r-4",
      title: "Broadway Baby",
      date: "5",
      day: "Domingo",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "mt-6",
      title: "Broadway Baby",
      date: "7",
      day: "Martes",
      venue: "Teatro de la Reforma",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "tp-12",
      title: "Broadway Baby",
      date: "11",
      day: "Sábado",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Argelia Fragoso
export const argeliaFragoso: InternationalArtist = {
  id: "af-001",
  name: "Argelia Fragoso",
  origin: "Cuba",
  category: "Música",
  subcategory: "Boleros",
  description: "Cantante cubana especializada en boleros, reconocida por su interpretación de 'Mi voz al mundo'",
  events: [
    {
      id: "nl-3",
      title: "Mi voz al mundo",
      date: "5",
      day: "Domingo",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "vc-15",
      title: "Mi voz al mundo",
      date: "6",
      day: "Lunes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "g-2",
      title: "Mi voz al mundo",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Guerrero"
    },
    {
      id: "ma-7",
      title: "Mi voz al mundo",
      date: "9",
      day: "Jueves",
      venue: "Teatro del IMSS",
      time: "Por confirmar",
      municipality: "Mante"
    },
    {
      id: "m-1",
      title: "Mi voz al mundo",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Mier"
    },
    {
      id: "al-6",
      title: "Mi voz al mundo",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "tl-7",
      title: "Mi voz al mundo",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Tula"
    }
  ]
};

// Data de Hands Percussion of Malaysia
export const handsPercussionMalaysia: InternationalArtist = {
  id: "hpm-001",
  name: "Hands Percussion of Malaysia",
  origin: "Malasia",
  category: "Interdisciplinario",
  subcategory: "Música, danza",
  description: "Grupo de percusión malayo que combina música y danza en un espectáculo interdisciplinario",
  events: [
    {
      id: "nl-4",
      title: "Diálogo en piel",
      date: "6",
      day: "Lunes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "Por confirmar",
      municipality: "Nuevo Laredo"
    },
    {
      id: "vc-17",
      title: "Diálogo en piel",
      date: "8",
      day: "Miércoles",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "r-1",
      title: "Diálogo en piel",
      date: "3",
      day: "Viernes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "mt-2",
      title: "Diálogo en piel",
      date: "4",
      day: "Sábado",
      venue: "Teatro de la Reforma",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "tp-11",
      title: "Diálogo en piel",
      date: "10",
      day: "Viernes",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Charlotte Pescayre
export const charlottePescayre: InternationalArtist = {
  id: "cp-001",
  name: "Charlotte Pescayre",
  origin: "Francia",
  category: "Interdisciplinario",
  subcategory: "Artes Circenses, pieza de danza en cuerda tensa para una maromera y su saxofón",
  description: "Artista francesa que combina artes circenses, danza en cuerda tensa y música con saxofón",
  events: [
    {
      id: "g-6",
      title: "Madame Saxi",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Guerrero"
    },
    {
      id: "c-4",
      title: "Madame Saxi",
      date: "9",
      day: "Jueves",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Camargo"
    },
    {
      id: "gdo-5",
      title: "Madame Saxi",
      date: "10",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "r-13",
      title: "Madame Saxi",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de Sabor Life is Rhythm
export const saborLifeIsRhythm: InternationalArtist = {
  id: "slr-001",
  name: "Sabor Life is Rhythm",
  origin: "España, Inglaterra, Francia, Italia y México",
  category: "Interdisciplinario",
  subcategory: "Música, tap, jazz",
  description: "Grupo internacional que fusiona música, tap y jazz con dirección artística de Ivan Bouchain y Gaëtan Farnier",
  events: [
    {
      id: "vc-1",
      title: "Sabor Life is Rhythm",
      date: "3",
      day: "Viernes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "Por confirmar",
      municipality: "Victoria"
    },
    {
      id: "mt-3",
      title: "Sabor Life is Rhythm",
      date: "5",
      day: "Domingo",
      venue: "Teatro de la Reforma",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "r-2",
      title: "Sabor Life is Rhythm",
      date: "4",
      day: "Sábado",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de Ballet Nepantla
export const balletNepantla: InternationalArtist = {
  id: "bn-001",
  name: "Ballet Nepantla",
  origin: "Estados Unidos",
  category: "Danza",
  subcategory: "Ballet",
  description: "Compañía de ballet estadounidense que presenta coreografías clásicas y contemporáneas",
  events: [
    {
      id: "r-11",
      title: "Ballet Nepantla",
      date: "10",
      day: "Viernes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de Matías Aguayo
export const matiasAguayo: InternationalArtist = {
  id: "ma-001",
  name: "Matías Aguayo",
  origin: "Chile",
  category: "Música",
  subcategory: "DJ",
  description: "DJ y productor musical chileno reconocido por su innovador estilo de música electrónica",
  events: [
    {
      id: "mt-4",
      title: "Matías Aguayo",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar (diferente horario a Life is Rhythm)",
      municipality: "Matamoros"
    },
    {
      id: "r-3",
      title: "Matías Aguayo",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Reynosa"
    }
  ]
};

// Data de Del Vali
export const delVali: InternationalArtist = {
  id: "dv-001",
  name: "Del Vali",
  origin: "Estados Unidos",
  category: "Música",
  description: "Artista musical estadounidense que forma parte del dúo Del Vali & Wero Hernández",
  events: [
    {
      id: "mt-1",
      title: "Del Vali & Wero Hernández",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "r-6",
      title: "Del Vali & Wero Hernández",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "al-8",
      title: "Del Vali & Wero Hernández",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "j-5",
      title: "Del Vali & Wero Hernández",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "sf-4",
      title: "Del Vali & Wero Hernández",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Fernando"
    },
    {
      id: "rb-2",
      title: "Del Vali & Wero Hernández",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "vh-3",
      title: "Del Vali & Wero Hernández",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    },
    {
      id: "slm-7",
      title: "Del Vali & Wero Hernández",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    }
  ]
};

// Data de Wero Hernández
export const weroHernandez: InternationalArtist = {
  id: "wh-001",
  name: "Wero Hernández",
  origin: "Estados Unidos",
  category: "Música",
  description: "Artista musical estadounidense que forma parte del dúo Del Vali & Wero Hernández",
  events: [
    {
      id: "mt-1",
      title: "Del Vali & Wero Hernández",
      date: "3",
      day: "Viernes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Matamoros"
    },
    {
      id: "r-6",
      title: "Del Vali & Wero Hernández",
      date: "6",
      day: "Lunes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Reynosa"
    },
    {
      id: "al-8",
      title: "Del Vali & Wero Hernández",
      date: "12",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Aldama"
    },
    {
      id: "j-5",
      title: "Del Vali & Wero Hernández",
      date: "8",
      day: "Miércoles",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Jiménez"
    },
    {
      id: "sf-4",
      title: "Del Vali & Wero Hernández",
      date: "7",
      day: "Martes",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "San Fernando"
    },
    {
      id: "rb-2",
      title: "Del Vali & Wero Hernández",
      date: "4",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Río Bravo"
    },
    {
      id: "vh-3",
      title: "Del Vali & Wero Hernández",
      date: "5",
      day: "Domingo",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Valle Hermoso"
    },
    {
      id: "slm-7",
      title: "Del Vali & Wero Hernández",
      date: "11",
      day: "Sábado",
      venue: "Por confirmar",
      time: "Por confirmar",
      municipality: "Soto la Marina"
    }
  ]
};

// Array de todos los artistas internacionales
export const internationalArtists: InternationalArtist[] = [
  biancaMarroquin,
  argeliaFragoso,
  handsPercussionMalaysia,
  charlottePescayre,
  saborLifeIsRhythm,
  balletNepantla,
  matiasAguayo,
  delVali,
  weroHernandez
];

// Función para obtener todos los eventos de un artista específico
export const getArtistEvents = (artistName: string): InternationalArtistEvent[] => {
  const artist = internationalArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
  return artist ? artist.events : [];
};

// Función para obtener artista por nombre
export const getArtistByName = (artistName: string): InternationalArtist | undefined => {
  return internationalArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
};

// Función para obtener todos los eventos por municipio
export const getEventsByMunicipality = (municipality: string): InternationalArtistEvent[] => {
  return internationalArtists.flatMap(artist => 
    artist.events.filter(event => 
      event.municipality.toLowerCase().includes(municipality.toLowerCase())
    )
  );
};
