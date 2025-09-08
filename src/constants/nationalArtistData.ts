// Data de artistas nacionales del Festival

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
  description: "Patricia Guerrero es cantante, maestra y narradora oral escénica con más de 40 años de experiencia, su trabajo ha recorrido plazas, museos, escuelas, teatros, iglesias, bibliotecas etc. siempre cerca de los niños y todo aquel que desee compartir, historias, música y arte.",
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
  description: "Integrado por tres multi instrumentistas, este conjunto hace gala de versatilidad de géneros y de un conocimiento musical muy amplio. Su repertorio abarca la totalidad de los países iberoamericanos. Desde carnavalitos y sones hasta joropos y huapangos, Maico, Richie y Ezaú nos llevan por un divertido viaje acompañando el recorrido con charangos, quenas, bombos y zampoñas.",
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
  description: "Con tres décadas de trayectoria, el grupo Tayer es un cronista musical, buscador gambusino y divulgador de la memoria musical popular norestense. Con dos generaciones de músicos, dedicados a la recopilación, documentación y difusión de la tradición oral, Tayer es un reconocido exponente, creador de festivales y espectáculos interdisciplinarios, que reflejan nuestra cultura regional. Con varios fonogramas y reconocimientos en su alforja, Tayer ha llevado la música de raíz norestense con conciertos y talleres didácticos por muchos lares, realizando giras y presentaciones en foros y festivales por todo el estado de nuevo león y la frontera norestense, en nuestro país y fuera de México.",
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
  description: "Este show, integrado por el músico vocal Juan Pablo Villa y el poeta náhuatl Mardonio Carballo, nos lleva a recorrer el libro Xolo, con autoría del poeta. Poesía y música en náhuatl y castellano. Aquí está la voz, íntima y profunda, pero también exaltada o teatral del poeta, recitando, cantando, sonando en castilla y en náhuatl. Aquí está la música. Están los gemidos, las respiraciones, los ritmos, los silencios, los juegos sonoros, las repeticiones, los aullidos, los murmullos que han construido entre los dos. Y que nos ponen la piel chinita. Hablemos de poesía, pues. De poesía, de memoria, de cuerpo, de ritmo. De la vida y de la muerte. Ni más ni menos. Luego vendrá lo demás.",
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
  description: "Descripción pendiente",
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
  description: "Descripción pendiente",
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
  description: "Percha Teatro nace en 1984 en Monterrey, desde su origen explora el trabajo corporal del actor: la mima corpórea, el clown y la carpa son parte de su genética. Procura un arte comprometido y la comicidad permea sus trabajos, desembocando en un estilo propio. A lo largo de sus 40 años se ha presentado en teatros, plazas, escuelas, ferias del libro y festivales nacionales e internacionales en diversos estados y fuera del país en Chile, Finlandia, Francia, El Salvador, Perú, EEUU. Ha participado en el Programa Nacional de Teatro Escolar en 7 ediciones como actores, productores, y como directores en: El patio de Monipodio, de Cervantes y Álvaro Custodio, Fray Servando de Fugas y Prisiones de Gerardo Dávila y \"Bajo tierra\" de David Olguín; bajo la dirección Pablo Luna Álvarez. En 2020 ganó el Premio a las Artes de la UANL 2020 por la destacada trayectoria en las Artes Escénicas y en 2024 presento su libro Percha Teatro Apuntes de un viaje de la UANL con el apoyo del Sistema Nuevo León para el impulso artístico y la creación de CONARTE.",
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
  description: "Celia y Laura, Las Hermanas García, es un dueto de jóvenes cantantes de la Costa Chica de Guerrero. Con voces aterciopeladas, con gran naturalidad, cantan los boleros costeños—los conocidos y los no tanto—en el estilo de los mejores duetos del pasado, aunque con un sabor y frescura propias de los jóvenes de hoy. En sus múltiples conciertos, que incluyen el Festival de Jazz de Nueva Orleans en 2025 y el Palacio de Bellas Artes en 2024, interpretan un programa muy alegre que incluye las chilenas y sones cubanos de las fiestas costeñas de México y el mundo. Actualmente, Laura y Celia tienen 23 y 22 años; empezaron a cantar en público desde los 10 años, ganando todos los concursos de chilenas en su región. En 2016, conocieron a los dos productores de Discos Corason durante uno de los viajes de investigación. Este sello mexicano grabó un disco de ellas acompañadas por su padre, el gran requintista Mariano García, mismo que fue lanzado en el Festival Internacional Cervantino a finales de ese mismo año. Desde su precoz lanzamiento, las dos chicas— con raíces indígenas y afromestizas-- recibieron muchísima atención, con invitaciones a participar en los programas de televisión de Cristina Pacheco y Armando Manzanero y ofreciendo conciertos en la UNAM, en los festivales del Tajín, Aguascalientes, la Nao de China, entre muchos más. En los últimos años se han presentado muchas veces en el Zócalo, en el Palacio de Bellas Artes y en el Museo de Culturas Populares, entre muchos otros importantes foros de la capital. Sus giras internacionales incluyen Inglaterra, España, Cuba y los EE. UU., en donde ofrecieron cuatro conciertos en los escenarios principales del legendario Festival de Jazz de Nueva Orleans. Actualmente, el dueto está acompañado por compañeros músicos de enorme calidad: el virtuoso del requinto se llama José María \"Chema\" Ángeles, que proviene del mismo pueblo amuzgo que el padre de las chicas. En el contrabajo está el renombrado músico Mario Cortés. Juntos, los cuatro han hecho arreglos novedosos de la música que Celia y Laura escucharon desde bebés, en su casa familiar. Los conciertos hoy día de este cuarteto, acompañados por la premiada bailadora Laura Maya, son muy movidos, siempre defendiendo la calidad musical al mismo tiempo de encantar al público que baila y todos los que quieren recordar los boleros de ayer con el sabor de hoy. El dueto ha ganado premios en Inglaterra y España y su versión de \"Que sepan todos\" tiene más de ocho millones de escuchas en Spotify.",
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
  description: "Ronda Machetera es el proyecto musical que une los talentos de Ronda Bogotá y Pato Machete, dos figuras destacadas en la escena musical. Con una fusión de Cumbia y Hip-Hop ha logrado combinar lo mejor ambos géneros.",
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
  description: "Con la finalidad de intensificar la Proximidad Social; la Guardia Nacional, trabaja en el desarrollo de estrategias para fortalecer la vinculación con la sociedad; fomentando la cultura de la participación ciudadana en la prevención del delito y el bien ciudadano. Se han creado espacios de cercanía entre la ciudadanía y la Institución a través de la música, la cultura, el arte, que han permitido generar mayor confianza y cercanía con la sociedad; proyectando la imagen de la Guardia Nacional. El objetivo es difundir la imagen de la Institución, mediante la danza folclórica; promoviendo y rescatando la cultura, valores, tradiciones y costumbres de México. El Ballet Folclórico de la Guardia Nacional ha participado en eventos del Casino de la Dirección General de Educación Militar, de la Alcaldía Xochimilco, del Centro Asturiano de Polanco, del Lienzo Charro de Constituyentes, se ha presentado en la explanada del Estadio Azteca, en la Alameda Central de la CDMX, en la Casa de Cultura de Siete Barrios de la Alcaldía Iztacalco, en la Feria Aero-Espacial de Santa Lucía, durante el Desfile del 16 de Septiembre en el Ángel de la Independencia, realizaron una gira de proximidad social en el Estado de Guanajuato y de Morelos, además de participaciones en eventos institucionales en la Comandancia de la Guardia Nacional y diversas sedes de la institución.",
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
  description: "Descripción pendiente",
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
  description: "Descripción pendiente",
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
  description: "Fundada en 2015, esta compañía mexicana se ha consolidado como una agrupación con un enfoque en el teatro físico y gestual, la danza y el teatro de calle. Su repertorio actual incluye nueve obras, entre ellas Los olvidados, Las futbolistas y El perdido de sí mismo, con una línea artística especialmente dirigida a las jóvenes audiencias. Ha participado en programas como Teatro Escolar (2018-2020), así como en la programación del Centro Cultural del Bosque y el Festival Infantil del Centro Histórico de la CDMX. Su obra Los olvidados fue parte de los festejos por los 25 años del CENART. La compañía ha recibido apoyos de instituciones como FONCA, IBERESCENA, INBAL, UNAM y diversas secretarías de cultura estatales. Sus trabajos han sido reconocidos internacionalmente, destacando premios en Egipto, el Festival Carlos Olvera y los premios METRO 2021. Desde 2019, colabora en el proyecto Los sueños de Manuel y en las brigadas de información a migrantes coordinadas por ACNUR y La Casa del Teatro.",
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
  description: "A la Deriva Teatro S.C. dirigida por Susana Romo y Fausto Ramírez es una compañía especializada en audiencias jóvenes nacida en Guadalajara México en el año 2008. En su búsqueda por acercar el teatro contemporáneo a nuevos públicos cuenta con veinte producciones a nivel profesional de las cuales siete se encuentran en repertorio atendiendo a bebés, niños y jóvenes. Sus puestas en escena se han presentado en más de 25 estados de la república mexicana. A nivel internacional se ha presentado en Festivales en Francia, Italia, Alemania, Finlandia, USA, Venezuela y Argentina.",
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
  description: "La Mtra. Viola Trigo inició su carrera con el grupo Los Tres con Ella y ha participado en proyectos emblemáticos como el doblaje de Julie Andrews en Mary Poppins y la interpretación de la Virgen de Guadalupe en la película homónima. Integrante del grupo del compositor yucateco Guadalupe Trigo, asumió desde su fallecimiento el compromiso de difundir su herencia musical y la de los grandes autores de México y Latinoamérica. Con más de diez años llevando poesía a diversos estados del país a través del programa Leo, luego existo del INBAL, ha compartido escenario con figuras como Mercedes Sosa, Chabuca Granda y Silvio Rodríguez. En esta ocasión, llega a Tamaulipas con el espectáculo Poetas y Lugares, acompañada por la guitarra del Mtro. Bernardo Lozano.",
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
