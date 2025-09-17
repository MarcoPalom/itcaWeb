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
      id: "nl-7",
      title: "Piaf de bolsillo",
      date: "7",
      day: "martes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-8",
      title: "Piaf de bolsillo",
      date: "8",
      day: "miércoles",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-9",
      title: "Piaf de bolsillo",
      date: "9",
      day: "jueves",
      venue: "Teatro de la Reforma",
      time: "20:00 hrs.",
      municipality: "Matamoros"
    },
    {
      id: "vc-10",
      title: "Piaf de bolsillo",
      date: "10",
      day: "viernes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
    },
    {
      id: "ma-11",
      title: "Piaf de bolsillo",
      date: "11",
      day: "sábado",
      venue: "Teatro del IMSS",
      time: "18:00 hrs.",
      municipality: "Mante"
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
      id: "nl-11",
      title: "Se nos quedaron ellos",
      date: "11",
      day: "sábado",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-9",
      title: "Se nos quedaron ellos",
      date: "9",
      day: "jueves",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "vc-7",
      title: "Se nos quedaron ellos",
      date: "7",
      day: "martes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
    },
    {
      id: "vc-7-2",
      title: "Se nos quedaron ellos",
      date: "7",
      day: "martes",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
      municipality: "Victoria"
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
      id: "g-11",
      title: "Cuentos, música y arte para mi ciudad, Guerrero",
      date: "11",
      day: "sábado",
      venue: "Casa de la Cultura Municipal",
      time: "19:00 hrs.",
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
      id: "g-3",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "3",
      day: "viernes",
      venue: "Explanda de Palacio Municipal",
      time: "19:00 hrs.",
      municipality: "Guerrero"
    },
    {
      id: "m-4",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Mier"
    },
    {
      id: "ma-5",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "5",
      day: "domingo",
      venue: "Foro Eleazar García \"Chelelo\" de la Plaza Principal \"Miguel Hidalgo\"",
      time: "19:25 hrs.",
      municipality: "Miguel Alemán"
    },
    {
      id: "c-11",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "11",
      day: "sábado",
      venue: "Foro Plaza Principal \"Miguel Hidalgo\"",
      time: "18:30 hrs.",
      municipality: "Camargo"
    },
    {
      id: "gdo-12",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "12",
      day: "domingo",
      venue: "Casa de Cultura (Calle segunda esq. con Adolfo López)",
      time: "19:00 hrs.",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "c-11-2",
      title: "América grande otra vez - Cancionero popular de las Américas",
      date: "11",
      day: "sábado",
      venue: "Foro Plaza Principal \"Miguel Hidalgo\"",
      time: "18:30 hrs.",
      municipality: "Camargo"
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
      id: "ma-3",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "3",
      day: "viernes",
      venue: "Foro Eleazar García \"Chelelo\" de la Plaza Principal \"Miguel Hidalgo\"",
      time: "19:25 hrs.",
      municipality: "Miguel Alemán"
    },
    {
      id: "c-4",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "4",
      day: "sábado",
      venue: "Kiosko Plaza Principal \"Miguel Hidalgo\"",
      time: "18:30 hrs.",
      municipality: "Camargo"
    },
    {
      id: "gdo-5",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "5",
      day: "domingo",
      venue: "Casa de Cultura (Calle segunda esq. con Adolfo López)",
      time: "17:00 hrs.",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "rb-6",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "6",
      day: "lunes",
      venue: "Plaza Principal de Villa de Nuevo Progreso",
      time: "20:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "md-7",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "7",
      day: "martes",
      venue: "Auditorio \"Rodolfo Torre Cantú\", Cabecera Municipal",
      time: "16:00 hrs.",
      municipality: "Méndez"
    },
    {
      id: "bg-8",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "8",
      day: "miércoles",
      venue: "Plaza Principal",
      time: "18:00 hrs.",
      municipality: "Burgos"
    },
    {
      id: "cr-9",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "9",
      day: "jueves",
      venue: "Centro Cívico Municipal",
      time: "11:00 hrs.",
      municipality: "Cruillas"
    },
    {
      id: "sc-10",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "10",
      day: "viernes",
      venue: "Plaza Principal",
      time: "19:00 hrs.",
      municipality: "San Carlos"
    },
    {
      id: "jm-11",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "11",
      day: "sábado",
      venue: "Kiosko de la Plaza Principal \"Plaza Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "hd-12",
      title: "¡Ajua Raza! Homenaje a Piporro",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Hidalgo"
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
      id: "r-9",
      title: "Xolo",
      date: "9",
      day: "jueves",
      venue: "Instalaciones de la Universidad Tenológica de Tamaulipas Norte",
      time: "17:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-10",
      title: "Xolo",
      date: "10",
      day: "viernes",
      venue: "Concha Acústica del Museo de Arte Contemporáneo de Tamaulipas (MACT)",
      time: "20:00 hrs.",
      municipality: "Matamoros"
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
      id: "vh-10",
      title: "Cazando Estrellas en Bicicleta",
      date: "10",
      day: "viernes",
      venue: "Escuela Secundaria General #1 Lic. \"Adolfo López Mateos\" Calle Juárez y 5 de Mayo, Zona Centro",
      time: "11:00 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "md-9",
      title: "Cazando Estrellas en Bicicleta",
      date: "9",
      day: "jueves",
      venue: "Escuela Primaria \"Justo Sierra Méndez\" Col. San Lorenzo, Sector Carretera",
      time: "15:00 hrs.",
      municipality: "Méndez"
    },
    {
      id: "sf-8",
      title: "Cazando Estrellas en Bicicleta",
      date: "8",
      day: "miércoles",
      venue: "Escuela Primaria \"Juana de Asbaje y Ramírez\"",
      time: "10:00 hrs.",
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
      id: "mt-11",
      title: "Escrito en el cuerpo de la noche",
      date: "11",
      day: "sábado",
      venue: "Teatro de la Reforma",
      time: "20:00 hrs.",
      municipality: "Matamoros"
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
      id: "sn-4",
      title: "El Zar de Monterrey",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal de la Cabecera Municipal",
      time: "19:00 hrs.",
      municipality: "San Nicolás"
    },
    {
      id: "hd-5",
      title: "El Zar de Monterrey",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Hidalgo"
    },
    {
      id: "gf-3",
      title: "El Zar de Monterrey",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Gómez Farías"
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
      id: "sn-10",
      title: "El Lobo",
      date: "10",
      day: "viernes",
      venue: "Ejido \"Flechadores\"",
      time: "15:00 hrs.",
      municipality: "San Nicolás"
    },
    {
      id: "sc-9",
      title: "El Lobo",
      date: "9",
      day: "jueves",
      venue: "Escuela Primaria \"Lauro Aguirre\"",
      time: "9:00 hrs.",
      municipality: "San Carlos"
    },
    {
      id: "vg-7",
      title: "El Lobo",
      date: "7",
      day: "martes",
      venue: "Plaza Juárez",
      time: "19:00 hrs.",
      municipality: "Villagrán"
    },
    {
      id: "ab-5",
      title: "El Lobo",
      date: "5",
      day: "domingo",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Abasolo"
    },
    {
      id: "cs-6",
      title: "El Lobo",
      date: "6",
      day: "lunes",
      venue: "Escuela Primaria \"Amado Nervo\" en Ej. \"La Lajilla\"",
      time: "10:00 hrs.",
      municipality: "Casas"
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
      id: "jm-6",
      title: "Organillermo",
      date: "6",
      day: "lunes",
      venue: "Kiosko de la Plaza Principal \"Plaza Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "pd-5",
      title: "Organillermo",
      date: "5",
      day: "domingo",
      venue: "Teatro del Pueblo",
      time: "17:30 hrs.",
      municipality: "Padilla"
    },
    {
      id: "gm-8",
      title: "Organillermo",
      date: "8",
      day: "miércoles",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Güémez"
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
      id: "slm-9",
      title: "Seguiré mi viaje",
      date: "9",
      day: "jueves",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
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
      id: "vc-5",
      title: "Un Paseo por México",
      date: "5",
      day: "domingo",
      venue: "Teatro \"Amalia G. de Castillo Ledón\" del Centro Cultural Tamaulipas",
      time: "19:00 hrs.",
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
      id: "vc-12",
      title: "Cumbia por el Mundo",
      date: "12",
      day: "domingo",
      venue: "Escenario \"Plaza Juárez\"",
      time: "20:00 hrs.",
      municipality: "Victoria"
    },
    {
      id: "t-10",
      title: "Cumbia por el Mundo",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Tula"
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
      id: "vc-5",
      title: "Al Son de mi Tierra",
      date: "5",
      day: "domingo",
      venue: "Escenario \"Plaza Juárez\"",
      time: "18:00 hrs.",
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
      id: "ll-5",
      title: "¡Llévame!",
      date: "5",
      day: "domingo",
      venue: "Explanada de la Presidencia Municipal",
      time: "18:00 hrs.",
      municipality: "Llera"
    },
    {
      id: "xi-4",
      title: "¡Llévame!",
      date: "4",
      day: "sábado",
      venue: "Plaza Cultura",
      time: "19:30 hrs.",
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
      id: "bs-4",
      title: "Primera Cita",
      date: "4",
      day: "sábado",
      venue: "Plaza \"20 de Noviembre\"",
      time: "20:00 hrs.",
      municipality: "Bustamante"
    },
    {
      id: "t-5",
      title: "Primera Cita",
      date: "5",
      day: "domingo",
      venue: "Explanda de la Presidencia Municipal",
      time: "18:30 hrs.",
      municipality: "Tula"
    },
    {
      id: "g-3",
      title: "Primera Cita",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de González",
      time: "19:00 hrs.",
      municipality: "González"
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
      id: "mq-12",
      title: "Las futbolistas",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Miquihuana"
    },
    {
      id: "bs-11",
      title: "Las futbolistas",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Bustamante"
    },
    {
      id: "am-7",
      title: "Las futbolistas",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Antiguo Morelos"
    },
    {
      id: "pl-10",
      title: "Las futbolistas",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Palmillas"
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
      id: "t-6",
      title: "Me importas tú, boleros para abrazar",
      date: "6",
      day: "lunes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Tula"
    },
    {
      id: "m-7",
      title: "Me importas tú, boleros para abrazar",
      date: "7",
      day: "martes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Mante"
    }
  ]
};

// Data de Last Word Trío
export const lastWordTrio: NationalArtist = {
  id: "lwt-001",
  name: "Last Word Trío",
  origin: "Nuevo León",
  category: "Música",
  subcategory: "Jazz",
  description: "Descripción pendiente",
  events: [
    {
      id: "nl-4",
      title: "De Miles y Manzanero, ecos de dos orillas",
      date: "4",
      day: "sábado",
      venue: "Foro Cultural del Parque Viveros",
      time: "20:00 hrs.",
      municipality: "Nuevo Laredo"
    }
  ]
};

// Data de Compañía Nacional de Teatro
export const companiaNacionalTeatro: NationalArtist = {
  id: "cnt-001",
  name: "Compañía Nacional de Teatro",
  origin: "CDMX",
  category: "Teatro",
  subcategory: "Teatro Clásico",
  description: "Descripción pendiente",
  events: [
    {
      id: "tp-6",
      title: "El Quijote de la Mancha",
      date: "6",
      day: "lunes",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "19:00 hrs.",
      municipality: "Tampico"
    }
  ]
};

// Data de Las Jaras
export const lasJaras: NationalArtist = {
  id: "lj-001",
  name: "Las Jaras",
  origin: "Guerrero",
  category: "Música",
  subcategory: "Música Tradicional",
  description: "Descripción pendiente",
  events: [
    {
      id: "c-6",
      title: "Concierto Fara Fara",
      date: "6",
      day: "lunes",
      venue: "Foro de Casa de la Cultura",
      time: "18:30 hrs.",
      municipality: "Camargo"
    },
    {
      id: "rb-5",
      title: "Concierto Fara Fara",
      date: "5",
      day: "domingo",
      venue: "Plaza \"Benito Juárez\"",
      time: "19:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "vh-4",
      title: "Concierto Fara Fara",
      date: "4",
      day: "sábado",
      venue: "Foro al Aire Libre de la Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "sf-3",
      title: "Concierto Fara Fara",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "San Fernando"
    }
  ]
};

// Data de Majestuosa Camada "San Simón Cerro"
export const majestuosaCamadaSanSimonCerro: NationalArtist = {
  id: "mcssc-001",
  name: "Majestuosa Camada \"San Simón Cerro\"",
  origin: "Guerrero",
  category: "Danza",
  subcategory: "Danza Tradicional",
  description: "Descripción pendiente",
  events: [
    {
      id: "vc-5",
      title: "Majestuosa Camada \"San Simón Cerro\"",
      date: "5",
      day: "domingo",
      venue: "Libre 17",
      time: "17:00 hrs.",
      municipality: "Victoria"
    },
    {
      id: "j-4",
      title: "Majestuosa Camada \"San Simón Cerro\"",
      date: "4",
      day: "sábado",
      venue: "Plaza Hidalgo",
      time: "20:00 hrs.",
      municipality: "Jaumave"
    },
    {
      id: "t-3",
      title: "Majestuosa Camada \"San Simón Cerro\"",
      date: "3",
      day: "viernes",
      venue: "Calles Principales",
      time: "18:00 hrs.",
      municipality: "Tula"
    }
  ]
};

// Data de Cuatete Sound
export const cuateteSound: NationalArtist = {
  id: "cs-001",
  name: "Cuatete Sound",
  origin: "Guerrero",
  category: "Música",
  subcategory: "Música Electrónica",
  description: "Descripción pendiente",
  events: [
    {
      id: "m-10",
      title: "Cuatete a la carta",
      date: "10",
      day: "viernes",
      venue: "Plaza Principal \"Plutarco Elías Calles\"",
      time: "19:00 hrs.",
      municipality: "Mante"
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
  lastWordTrio,
  companiaNacionalTeatro,
  lasJaras,
  majestuosaCamadaSanSimonCerro,
  cuateteSound,
  violaTrigo
];

// Función para obtener todos los eventos de un artista específico
export const getArtistEvents = (artistName: string): NationalArtistEvent[] => {
  const artist = nationalArtists.find(a => 
    a.name.toLowerCase().includes(artistName.toLowerCase())
  );
  return artist ? artist.events : [];
};

// Función para obtener artista por nombre (compara con slug)
export const getArtistByName = (artistName: string): NationalArtist | undefined => {
  const found = nationalArtists.find(a => {
    const artistSlug = a.name.toLowerCase().replace(/\s+/g, '-')
    const isMatch = artistSlug === artistName.toLowerCase()
    return isMatch
  });
  
  return found;
};

// Función para obtener todos los eventos por municipio
export const getEventsByMunicipality = (municipality: string): NationalArtistEvent[] => {
  return nationalArtists.flatMap(artist => 
    artist.events.filter(event => 
      event.municipality.toLowerCase().includes(municipality.toLowerCase())
    )
  );
};
