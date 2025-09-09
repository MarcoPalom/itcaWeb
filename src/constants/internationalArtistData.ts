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
  description: "Reconocida artista mexicana a nivel internacional, Bianca Marroquín es mejor conocida por estelarizar obras musicales en Broadway, incluyendo los dos papeles protagonistas en \"Chicago, The Musical\" en el Teatro Ambassador, por el cual fue galardonada con el Premio Helen Hayes y \"Anita\" en West Side Story para el Carnegie Hall, The Pajama Game, In The Heights y otros. Además de interpretar a Chita Rivero en la serie de televisión Fosse/Verdon para FX, aparece en otros programas y series como Acapulco, de Apple y jueza \"Mira Quién Baila\" o \"Pequeños Gigantes\" para el público latino. Regresa a Tamaulipas, al Festival Internacional en la Costa del Seno Mexicano con \"Broadway Baby\", que narra su propia historia como una niña fronteriza que soñaba con bailar y se catapultó hasta ser la primera mujer mexicana en estelarizar una obra en Broadway. En una experiencia de concierto teatral, Bianca nos brinda un mensaje poderosamente inspirador a través de una mezcla ecléctica de música y danza.",
  events: [
    {
      id: "nl-3",
      title: "Broadway Baby",
      date: "3",
      day: "viernes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-5",
      title: "Broadway Baby",
      date: "5",
      day: "domingo",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "17:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-7",
      title: "Broadway Baby",
      date: "7",
      day: "martes",
      venue: "Teatro de la Reforma",
      time: "20:00 hrs.",
      municipality: "Matamoros"
    },
    {
      id: "vc-9",
      title: "Broadway Baby",
      date: "9",
      day: "jueves",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
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
  description: "Cuando Argelia Fragoso irrumpió en el ámbito de la popularidad, asistimos sin darnos cuenta, al nacimiento de una de las figuras más importantes que brindaría Cuba al escenario internacional. Nos hallamos, sin duda alguna, ante una de las voces que más da de qué hablar por sus excepcionales dotes y su versatilidad artística, ganando así el calificativo de la prensa especializada, quien la define para siempre como «La voz de Oro de Cuba». Armada de un gran registro de contralto, cálido y profundo, Argelia compendia, además, una impactante musicalidad, una perfecta afinación, y una exquisita dicción, lo que hacen de su canto un regalo para los oídos más exigentes.",
  events: [
    {
      id: "nl-5",
      title: "Mi voz al mundo",
      date: "5",
      day: "domingo",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "g-4",
      title: "Mi voz al mundo",
      date: "4",
      day: "sábado",
      venue: "Centro Cívico Municipal",
      time: "19:00 hrs.",
      municipality: "Guerrero"
    },
    {
      id: "m-3",
      title: "Mi voz al mundo",
      date: "3",
      day: "viernes",
      venue: "Atrio de la Parroquia \"Inmaculada Concepción\"",
      time: "19:30 hrs.",
      municipality: "Mier"
    },
    {
      id: "vc-6",
      title: "Mi voz al mundo",
      date: "6",
      day: "lunes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
    },
    {
      id: "t-8",
      title: "Mi voz al mundo",
      date: "8",
      day: "miércoles",
      venue: "Explanda de la Presidencia Municipal",
      time: "18:30 hrs.",
      municipality: "Tula"
    },
    {
      id: "m-9",
      title: "Mi voz al mundo",
      date: "9",
      day: "jueves",
      venue: "Teatro del IMSS",
      time: "19:00 hrs.",
      municipality: "Mante"
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
  description: "Célebre conjunto de percusión malayo, cuya creación en 1997 supuso todo un acontecimiento en el panorama de las artes escénicas de Kuala Lumpur por lo innovador de sus espectáculos. Las actuaciones de Hands Percussion son muy apreciadas y admiradas por sus esfuerzos por preservar un patrimonio cultural al tiempo que introducen nuevas dimensiones en la percusión teatral, aventurándose en la música de percusión contemporánea y explorando la música y los instrumentos de diferentes culturas. El espectáculo extrae su inspiración y la riqueza de su programa de la increíble diversidad de islas y costumbres que conforman Malasia. Combina la cultura de las tribus de las montañas, que viven en el frondoso bosque donde descansan los espíritus de los muertos, con las danzas y la música de los pueblos que comparten la tierra entre el arroz, el té y el mar.",
  events: [
    {
      id: "nl-6",
      title: "Diálogo en piel",
      date: "6",
      day: "lunes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-3",
      title: "Diálogo en piel",
      date: "3",
      day: "viernes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-4",
      title: "Diálogo en piel",
      date: "4",
      day: "sábado",
      venue: "Teatro de la Reforma",
      time: "20:00 hrs.",
      municipality: "Matamoros"
    },
    {
      id: "vc-8",
      title: "Diálogo en piel",
      date: "8",
      day: "miércoles",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
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
  description: "Descripción pendiente",
  events: [
    {
      id: "g-12",
      title: "Madame Saxi",
      date: "12",
      day: "domingo",
      venue: "Plaza \"Ruíz Cortínez\"",
      time: "19:00 hrs.",
      municipality: "Guerrero"
    },
    {
      id: "c-9",
      title: "Madame Saxi",
      date: "9",
      day: "jueves",
      venue: "Kiosko Plaza Principal \"Miguel Hidalgo\"",
      time: "18:30 hrs.",
      municipality: "Camargo"
    },
    {
      id: "gdo-10",
      title: "Madame Saxi",
      date: "10",
      day: "viernes",
      venue: "Centro Deportivo \"El Vivero\" (Av. Hidalgo)",
      time: "19:00 hrs.",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "r-11",
      title: "Madame Saxi",
      date: "11",
      day: "sábado",
      venue: "Plaza \"Treviño Zapata\", Col. Longoria",
      time: "18:00 hrs.",
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
  description: "Cinco instrumentos, cuatro bailarines, tres generaciones, una misión: difundir el \"Sabor\" y el Tap Dance (claqué), a través de un viaje desde sus orígenes hasta la actualidad, pasando por una fusión fresca de estilos y ritmos ejecutados con respeto y pasión. SABOR-Life is Rhythm invita a todo tipo de público a disfrutar de coreografías suculentas y ritmos frescos que sabrán satisfacer el paladar de cada comensal, una delicia para los sentidos. Con algunos de los mejores bailarines de Europa, es un espectáculo electrizante donde el carisma y la música en directo son los ingredientes principales que llegan al Festival Internacional en la Costa del Seno Mexicano. ¡La vida sin sabor no tiene ritmo!",
  events: [
    {
      id: "r-4",
      title: "Sabor Life is Rhythm",
      date: "4",
      day: "sábado",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-5",
      title: "Sabor Life is Rhythm",
      date: "5",
      day: "domingo",
      venue: "Teatro de la Reforma",
      time: "20:00 hrs.",
      municipality: "Matamoros"
    },
    {
      id: "vc-3",
      title: "Sabor Life is Rhythm",
      date: "3",
      day: "viernes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
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
  description: "Ballet Nepantla es una compañía galardonada que fusiona de manera única el ballet contemporáneo con el folclore mexicano, explorando nuevas formas interpretativas para abordar la \"in-between-ness\", un estado intermedio entre lo cultural e histórico. Fundada en 2017 por Andrea Guajardo (Edinburg, Texas) y Martín Rodríguez Vigíl (Guadalajara, México), la obra \"Mística\" es un viaje escénico dividido en dos actos, un espectáculo que conmueve y celebra, donde cada pieza es un puente entre la herencia cultural y la sensibilidad contemporánea. Inicia en el mundo de los vivos, a través de paisajes, rituales y emociones que evocan el duelo, la memoria y la celebración, mientras que el segundo acto transporta al mundo de los muertos, entre catrinas coquetas, danzas afro-mexicanas, sones jarochos y ceremonias indígenas, la obra celebra el Día de Muertos como un espacio donde la música, la danza y el recuerdo unen a vivos y difuntos.",
  events: [
    {
      id: "r-10",
      title: "Ballet Nepantla",
      date: "10",
      day: "viernes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
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
  description: "Matías Aguayo, productor, DJ y vocalista chileno-alemán, es una figura esencial de la escena electrónica internacional. Con más de veinte años de trayectoria, ha creado un estilo propio que fusiona house, techno, ritmos latinoamericanos, influencias africanas y voces en vivo. Su propuesta, a la vez experimental y orgánica, lo ha llevado a presentarse en algunos de los clubes y festivales más relevantes del mundo. Como fundador del influyente sello Cómeme, Aguayo propone una visión musical audaz, diversa y profundamente conectada con el cuerpo y la pista de baile. Sus presentaciones destacan por su energía y por la capacidad de cantar, improvisar y manipular loops en vivo, logrando una conexión intensa con el público. Más que poner música, Aguayo la vive y la transmite. Su show promete una experiencia sonora poderosa, emotiva y totalmente fuera de lo habitual.",
  events: [
    {
      id: "r-4",
      title: "Matías Aguayo",
      date: "4",
      day: "sábado",
      venue: "Explanada del Parque Cultural Reynosa",
      time: "20:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-5",
      title: "Matías Aguayo",
      date: "5",
      day: "domingo",
      venue: "Parque Olímpico Cultura y Conocimiento Explanada \"Gran Puerta de México\"",
      time: "18:00 hrs.",
      municipality: "Matamoros"
    }
  ]
};

// Data de Del Vali
export const delVali: InternationalArtist = {
  id: "dv-001",
  name: "Del Vali",
  origin: "Estados Unidos",
  category: "Música",
  description: "Del Valí es una nueva y electrizante fuerza en el mundo de la música norteña, que combina las ricas tradiciones de la música norteña y la cumbia con un enfoque urbano fresco e innovador, infundiendo su sonido con cautivadores nuevos géneros y melodías.",
  events: [
    {
      id: "r-6",
      title: "Del Vali",
      date: "6",
      day: "lunes",
      venue: "Del Río, Plaza Comercial",
      time: "17:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "rb-4",
      title: "Del Vali",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal \"Santa Apolonia\"",
      time: "21:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "vh-5",
      title: "Del Vali",
      date: "5",
      day: "domingo",
      venue: "Foro al Aire Libre de la Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "mt-3",
      title: "Del Vali",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal \"Miguel Hidalgo\"",
      time: "19:30 hrs.",
      municipality: "Matamoros"
    },
    {
      id: "sf-9",
      title: "Del Vali",
      date: "9",
      day: "jueves",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "San Fernando"
    },
    {
      id: "j-10",
      title: "Del Vali",
      date: "10",
      day: "viernes",
      venue: "Kiosko de la Plaza Principal \"Plaza Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "slm-11",
      title: "Del Vali",
      date: "11",
      day: "sábado",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
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
  description: "\"El Wero\" Hernández es una estrella en ascenso en el mundo de la música norteña-texana. Está listo para inspirar a una nueva generación de seguidores, creando un sonido que es tanto auténtico como innovador.",
  events: [
    {
      id: "r-6",
      title: "Wero Hernández",
      date: "6",
      day: "lunes",
      venue: "Del Río, Plaza Comercial",
      time: "17:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "rb-4",
      title: "Wero Hernández",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal \"Santa Apolonia\"",
      time: "21:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "vh-5",
      title: "Wero Hernández",
      date: "5",
      day: "domingo",
      venue: "Foro al Aire Libre de la Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "mt-3",
      title: "Wero Hernández",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal \"Miguel Hidalgo\"",
      time: "19:30 hrs.",
      municipality: "Matamoros"
    },
    {
      id: "sf-9",
      title: "Wero Hernández",
      date: "9",
      day: "jueves",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "San Fernando"
    },
    {
      id: "j-10",
      title: "Wero Hernández",
      date: "10",
      day: "viernes",
      venue: "Kiosko de la Plaza Principal \"Plaza Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "slm-11",
      title: "Wero Hernández",
      date: "11",
      day: "sábado",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
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
