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
  description: "Cuando Argelia Fragoso irrumpió en el ámbito de la popularidad, asistimos sin darnos cuenta, al nacimiento de una de las figuras más importantes que brindaría Cuba al escenario internacional. Nos hallamos, sin duda alguna, ante una de las voces que más da de qué hablar por sus excepcionales dotes y su versatilidad artística, ganando así el calificativo de la prensa especializada, quien la define para siempre como «La voz de Oro de Cuba». Armada de un gran registro de contralto, cálido y profundo, Argelia compendia, además, una impactante musicalidad, una perfecta afinación, y una exquisita dicción, lo que hacen de su canto un regalo para los oídos más exigentes.",
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
  description: "Célebre conjunto de percusión malayo, cuya creación en 1997 supuso todo un acontecimiento en el panorama de las artes escénicas de Kuala Lumpur por lo innovador de sus espectáculos. Las actuaciones de Hands Percussion son muy apreciadas y admiradas por sus esfuerzos por preservar un patrimonio cultural al tiempo que introducen nuevas dimensiones en la percusión teatral, aventurándose en la música de percusión contemporánea y explorando la música y los instrumentos de diferentes culturas. El espectáculo extrae su inspiración y la riqueza de su programa de la increíble diversidad de islas y costumbres que conforman Malasia. Combina la cultura de las tribus de las montañas, que viven en el frondoso bosque donde descansan los espíritus de los muertos, con las danzas y la música de los pueblos que comparten la tierra entre el arroz, el té y el mar.",
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
  description: "Descripción pendiente",
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
  description: "Cinco instrumentos, cuatro bailarines, tres generaciones, una misión: difundir el \"Sabor\" y el Tap Dance (claqué), a través de un viaje desde sus orígenes hasta la actualidad, pasando por una fusión fresca de estilos y ritmos ejecutados con respeto y pasión. SABOR-Life is Rhythm invita a todo tipo de público a disfrutar de coreografías suculentas y ritmos frescos que sabrán satisfacer el paladar de cada comensal, una delicia para los sentidos. Con algunos de los mejores bailarines de Europa, es un espectáculo electrizante donde el carisma y la música en directo son los ingredientes principales que llegan al Festival Internacional en la Costa del Seno Mexicano. ¡La vida sin sabor no tiene ritmo!",
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
  description: "Ballet Nepantla es una compañía galardonada que fusiona de manera única el ballet contemporáneo con el folclore mexicano, explorando nuevas formas interpretativas para abordar la \"in-between-ness\", un estado intermedio entre lo cultural e histórico. Fundada en 2017 por Andrea Guajardo (Edinburg, Texas) y Martín Rodríguez Vigíl (Guadalajara, México), la obra \"Mística\" es un viaje escénico dividido en dos actos, un espectáculo que conmueve y celebra, donde cada pieza es un puente entre la herencia cultural y la sensibilidad contemporánea. Inicia en el mundo de los vivos, a través de paisajes, rituales y emociones que evocan el duelo, la memoria y la celebración, mientras que el segundo acto transporta al mundo de los muertos, entre catrinas coquetas, danzas afro-mexicanas, sones jarochos y ceremonias indígenas, la obra celebra el Día de Muertos como un espacio donde la música, la danza y el recuerdo unen a vivos y difuntos.",
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
  description: "Matías Aguayo, productor, DJ y vocalista chileno-alemán, es una figura esencial de la escena electrónica internacional. Con más de veinte años de trayectoria, ha creado un estilo propio que fusiona house, techno, ritmos latinoamericanos, influencias africanas y voces en vivo. Su propuesta, a la vez experimental y orgánica, lo ha llevado a presentarse en algunos de los clubes y festivales más relevantes del mundo. Como fundador del influyente sello Cómeme, Aguayo propone una visión musical audaz, diversa y profundamente conectada con el cuerpo y la pista de baile. Sus presentaciones destacan por su energía y por la capacidad de cantar, improvisar y manipular loops en vivo, logrando una conexión intensa con el público. Más que poner música, Aguayo la vive y la transmite. Su show promete una experiencia sonora poderosa, emotiva y totalmente fuera de lo habitual.",
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
  description: "Del Valí es una nueva y electrizante fuerza en el mundo de la música norteña, que combina las ricas tradiciones de la música norteña y la cumbia con un enfoque urbano fresco e innovador, infundiendo su sonido con cautivadores nuevos géneros y melodías.",
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
  description: "\"El Wero\" Hernández es una estrella en ascenso en el mundo de la música norteña-texana. Está listo para inspirar a una nueva generación de seguidores, creando un sonido que es tanto auténtico como innovador.",
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
