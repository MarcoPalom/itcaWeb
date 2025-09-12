// Data de Artistas Tamaulipecos

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
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-7",
      title: "Polvo Enamorado",
      date: "7",
      day: "martes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
      municipality: "Reynosa"
    },
    {
      id: "mt-6",
      title: "Polvo Enamorado",
      date: "6",
      day: "lunes",
      venue: "Teatro de la Reforma",
      time: "20:00 hrs.",
      municipality: "Matamoros"
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
  description: "Fundada en 2013 por el maestro Orlando Mora, la Camerata del Colegio de San Juan Siglo XXI tiene como objetivo elevar el nivel técnico e interpretativo de sus estudiantes y difundir un amplio repertorio orquestal. Desde su creación, se ha destacado por combinar calidad artística y formación académica, consolidándose como un referente musical en Tamaulipas. La Camerata ha llevado su música a distintos escenarios dentro y fuera del estado, participando en festivales como el Festival Internacional Tamaulipas, el Festival Internacional de Otoño y el Festival Internacional de la Costa del Seno Mexicano, así como en presentaciones en Monterrey, Nuevo León. Ha contado con la participación de solistas y directores invitados de gran renombre, entre ellos Álvaro Bitrán, Mauricio Garza Salazar, Erick López, Álvaro Díaz y Michael Meissner. La Camerata se presenta con un recorrido musical que va desde la Alemania barroca hasta los paisajes sonoros de la Sierra Madre y las costas de Altamira, celebrando la diversidad y riqueza del patrimonio musical local e internacional.",
  events: [
    {
      id: "nl-9",
      title: "Tamaulipas galante",
      date: "9",
      day: "jueves",
      venue: "Foro Cultural del Parque Viveros",
      time: "20:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "m-10",
      title: "Tamaulipas galante",
      date: "10",
      day: "viernes",
      venue: "Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Mier"
    }
  ]
};

// Data de Afrodescendencia Matamoros
export const afrodescendenciaMatamoros: TamaulipecoArtist = {
  id: "am-001",
  name: "Afrodescendencia Matamoros",
  origin: "Matamoros, Tamaulipas",
  category: "Música",
  subcategory: "Música afrodescendiente",
  description: "Nacida en 2022, Afrodescendencia Matamoros rinde homenaje a la herencia africana que forma parte del mosaico cultural mexicano. Dirigida por el Mtro. Nils Becerra e integrada por talentosos músicos de Matamoros, la agrupación combina percusión, piano, acordeón, bajo y cinco estilos vocales distintos, ofreciendo una propuesta sonora vibrante y diversa que celebra nuestras raíces africanas, indígenas y españolas. Su repertorio invita a recorrer la música afrodescendiente de América Latina, desde Venezuela, Colombia y Cuba hasta República Dominicana y México, mostrando cómo los ritmos y melodías africanas han dado forma a la identidad cultural de nuestra región. Cada interpretación es una experiencia llena de energía, emoción y riqueza musical, que conecta al público con la historia viva de estas tradiciones. Este año, Afrodescendencia Matamoros llega al Festival Internacional en la Costa del Seno Mexicano con su espectáculo \"Afrodescendencia Matamoros #PorqueLoLlevamoEnLaSangre\", un concierto que celebra la fuerza, el orgullo y la diversidad de nuestras raíces compartidas a través de un recorrido musical inolvidable.",
  events: [
    {
      id: "nl-10",
      title: "#porquelollevamosenlasangre",
      date: "10",
      day: "viernes",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-12",
      title: "#porquelollevamosenlasangre",
      date: "12",
      day: "domingo",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "nl-12",
      title: "Orinoco",
      date: "12",
      day: "domingo",
      venue: "Teatro Principal del Centro Cultural Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "r-6",
      title: "Orinoco",
      date: "6",
      day: "lunes",
      venue: "Teatro Principal del Parque Cultural Reynosa",
      time: "19:00 hrs.",
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
  description: "El grupo Raíces Huastecas nació en 2006 con la finalidad de preservar y difundir la música y danza huasteca de Tamaulipas, especialmente entre niños y jóvenes, fomentando su identidad cultural y creatividad. Desde 2010, cuentan con una extensión infantil que impulsa la participación de los más pequeños, formando un semillero de talento que proyecta la riqueza del folklore local a nivel regional y nacional. La agrupación desarrolla talleres y espectáculos centrados en el \"Huapango Tamaulipeco\", combinando la enseñanza de la danza, la música y la versería huasteca con la participación activa de la comunidad. Sus presentaciones destacan en concursos de huapango por parejas y en eventos culturales que promueven la tradición, la convivencia y el fortalecimiento de la identidad huasteca. En el FICSM 2025, Raíces Huastecas llega con un viaje por las tradiciones huastecas a través de música en vivo, danza y folklore. El público podrá disfrutar de leyendas como \"La Bruja de la Huasteca\", las fábulas del \"Robalo\" y el \"Sabalito\", y sones emblemáticos como \"El Tampiqueño\" y \"Acuarela tamaulipeca\".",
  events: [
    {
      id: "nl-11",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "11",
      day: "sábado",
      venue: "Centro Cívico Nuevo Laredo",
      time: "19:00 hrs.",
      municipality: "Nuevo Laredo"
    },
    {
      id: "g-10",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "10",
      day: "viernes",
      venue: "Ruinas de Viejo Guerrero o Explanada de Palacio Municipal",
      time: "19:00 hrs.",
      municipality: "Guerrero"
    },
    {
      id: "m-12",
      title: "MIJKAILJUITL \"Leyendas, Mitos y Raíces\", que se cuentan y bailan con Huapango\"",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal",
      time: "19:30 hrs.",
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
  subcategory: "Música coral",
  description: "Fundado en 2009, En Boca Ensamble tiene como misión rescatar y difundir la música coral mexicana y tamaulipeca. Su propuesta destaca por la calidad vocal y la originalidad, lo que les ha permitido presentarse en importantes festivales nacionales e internacionales. Bajo la dirección del Mtro. Nils Becerra, el ensamble combina tradición e innovación con un sello propio. Su repertorio abarca desde lo tradicional hasta lo contemporáneo, siempre con un enfoque en la identidad cultural del noreste del país. Este estilo les ha permitido consolidarse como un referente en la música coral de la región, llevando la voz de Tamaulipas a distintos escenarios. En el FICSM 2025, llega con un recorrido sonoro que celebra la riqueza musical de México y América Latina con temas como La cucaracha, La Llorona y La bamba, además de canciones tradicionales tamaulipecas. Una experiencia festiva y emotiva para disfrutar en familia.",
  events: [
    {
      id: "g-5",
      title: "De chile, mole y pozole",
      date: "5",
      day: "domingo",
      venue: "Centro Cívico Municipal",
      time: "19:00 hrs.",
      municipality: "Guerrero"
    },
    {
      id: "g-10",
      title: "De chile, mole y pozole",
      date: "10",
      day: "viernes",
      venue: "Ruinas de Viejo Guerrero o Explanada de Palacio Municipal",
      time: "19:00 hrs.",
      municipality: "Guerrero"
    },
    {
      id: "m-11",
      title: "De chile, mole y pozole",
      date: "11",
      day: "sábado",
      venue: "Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Mier"
    },
    {
      id: "c-3",
      title: "De chile, mole y pozole",
      date: "3",
      day: "viernes",
      venue: "MAHM Camargo Museo y Archivo Histórico (Patio)",
      time: "18:30 hrs.",
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
  description: "Desde su formación en 1995, Soraima y sus Huastecos han llevado la música huasteca a escenarios locales, nacionales e internacionales, conservando la riqueza de los sones y huapangos tradicionales. El grupo inició como un trío conformado por Soraima e Iván Galindo y Ponciano Santiago, y con el paso de los años evolucionó al actual ensamble familiar, integrando también a Zorayma Guadalupe y Cecilia Leilany, quienes aportan frescura y continuidad al legado musical. Conformado actualmente por Ponciano Santiago y Zorayma Guadalupe en los violines, Soraima en la jarana y Cecilia Leilany en la guitarra quinta o huapanguera, el grupo ha mantenido un estilo auténtico que fusiona tradición y sentimiento, ofreciendo interpretaciones llenas de emotividad y precisión que conectan con públicos de todas las edades. En el Festival Internacional en la Costa del Seno Mexicano 2025, presentan \"Huasteca viva\", un recorrido musical que celebra tres décadas de historia, rescatando sones y huapangos de la tradición huasteca, algunos en uso y otros en desuso, para compartir con el público tamaulipeco y visitante la riqueza y diversidad de nuestra cultura.",
  events: [
    {
      id: "m-5",
      title: "Huasteca viva: \"Sonidos y raíces en el corazón tamaulipeco\" 3 décadas de tradición con Soraima y sus huastecos",
      date: "5",
      day: "domingo",
      venue: "Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Mier"
    },
    {
      id: "gdo-4",
      title: "Huasteca viva: \"Sonidos y raíces en el corazón tamaulipeco\" 3 décadas de tradición con Soraima y sus huastecos",
      date: "4",
      day: "sábado",
      venue: "Plaza \"Damas Leonas\"",
      time: "19:00 hrs.",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "vh-3",
      title: "Huasteca viva: \"Sonidos y raíces en el corazón tamaulipeco\" 3 décadas de tradición con Soraima y sus huastecos",
      date: "3",
      day: "viernes",
      venue: "Foro al Aire Libre de la Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Valle Hermoso"
    }
  ]
};

// Data de Colectivo teatro de bolsillo
export const colectivoTeatroDeBolsillo: TamaulipecoArtist = {
  id: "ctb-001",
  name: "Colectivo teatro de bolsillo",
  origin: "Matamoros, Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro infantil",
  description: "Llamando a base es una obra creada para niñas y niños, que combina técnicas clown, actuación, títeres y efectos con luz ultravioleta. La historia sigue a un astronauta que regresa a la Tierra y descubre que algo ha cambiado: ¡el agua escasea! En su aventura por comprender lo que sucede, conoce a diversos personajes que le enseñan la importancia de cuidar este recurso vital. A través del juego, la interacción y el humor, Colectivo Teatro de Bolsillo nos comparte una obra que habla sobre la cooperación, la honestidad, la limpieza y el compromiso con el medio ambiente, con un montaje divertido y conmovedor se invita a reflexionar sobre el presente y futuro de nuestro planeta. Teatro de Bolsillo es dirigido por Armando Mancilla, desde Matamoros, Tamaulipas, desde donde crean principalmente para las infancias.",
  events: [
    {
      id: "m-7",
      title: "Llamando a base",
      date: "7",
      day: "martes",
      venue: "Casino Argüelles",
      time: "11:00 hrs.",
      municipality: "Mier"
    },
    {
      id: "rb-10",
      title: "Llamando a base",
      date: "10",
      day: "viernes",
      venue: "Escuela Primaria Nissan",
      time: "10:30 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "ab-12",
      title: "Llamando a base",
      date: "12",
      day: "domingo",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
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
  subcategory: "Rock-Pop",
  description: "Warislov es una banda de rock-pop, cuyos integrantes son músicos tamaulipecos con formación en escuelas de música y conservatorios y han colaborado juntos por más de 15 años en diversos proyectos personales y colaborativos. Han participado en festivales internacionales en Tamaulipas y Nuevo León. Su experiencia les ha permitido construir un sonido sólido, versátil y con identidad propia que queda de manifiesto en su espectáculo \"Rockteño\". Este espectáculo rinde homenaje a la música regional a través de versiones originales de canciones clásicas del género norteño y grupero; como cumbias, corridos, boleros, polkas y huapangos. Rockteño fusiona estos sonidos con influencias del rock pop, ritmos latinos, africanos y elementos endémicos de Tamaulipas. Con un enfoque en la memoria colectiva, el repertorio abarca temas desde los años 70 hasta la actualidad, promoviendo valores como el amor, la nostalgia y la armonía. La propuesta busca conectar generaciones mediante una experiencia sonora actual, con el uso de instrumentos eléctricos, acústicos y recursos tecnológicos que enriquecen el viaje musical compartido con el público.",
  events: [
    {
      id: "ma-4",
      title: "Warislov Concierto Rockteño",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal de Miguel Alemán",
      time: "20:00 hrs.",
      municipality: "Miguel Alemán"
    },
    {
      id: "gdo-3",
      title: "Warislov Concierto Rockteño",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de Gustavo Díaz Ordaz",
      time: "20:00 hrs.",
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
  subcategory: "Música regional mexicana con mariachi",
  description: "Originaria de Tamaulipas, Aglaé Salinas nació el 23 de abril de 2004 y se ha consolidado como una joven intérprete de música regional mexicana con mariachi. A lo largo de su trayectoria ha compartido escenario con artistas como Tropical Panamá, La Tracalosa de Monterrey, Fato, Aleks Syntek y Jorge \"El Coque\" Muñiz, además de colaborar con reconocidos mariachis como El Mariachi de América de Jesús Rodríguez de Hijar, El Mariachi Femenil Corona y El Mariachi Femenil Nuevo Tecalitlán. Su propuesta artística combina voz e interpretación con un profundo respeto por la tradición musical de México, resaltando la riqueza del repertorio popular y las raíces culturales de cada pieza. La combinación de mariachi en vivo, arreglos musicales destacados y vestuario tradicional convierte sus presentaciones en experiencias auténticas y emotivas. En esta edición del Festival Internacional en la Costa del Seno Mexicano, Aglaé Salinas llega con el espectáculo \"México en mi alma\", un recorrido musical que celebra la identidad mexicana, donde su voz se convierte en el hilo conductor de melodías populares y composiciones propias, acompañada de mariachi y ballet folklórico, para brindar al público una experiencia inolvidable.",
  events: [
    {
      id: "c-12",
      title: "México en mi alma",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Camargo"
    },
    {
      id: "gdo-11",
      title: "México en mi alma",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Horario por definir",
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
  description: "Fundado en 2020, Cirko Frontera es un colectivo circense formado por Aldo Jesús Collazo Guerrero, Reynaldo Camacho García y Kevin Adán Vega Sauceda. Su misión es crear comunidad entre artistas del malabarismo y promover las artes circenses en la región fronteriza, fomentando la creatividad y la colaboración entre generaciones. La agrupación ha participado en festivales y encuentros como el Cuarto y Quinto Encuentro de Circo en Nuevo León, el Día Mundial del Circo en Reynosa, y actividades culturales del IRCA y centros culturales como Alaken y Casa Quinqué. Con su trabajo, buscan fortalecer el tejido social y activar los espacios públicos a través del arte del circo, acercando la cultura a toda la comunidad. En el FICSM 2025, presenta un espectáculo dinámico e interactivo que combina malabarismo, equilibrismo y comedia. Ideal para toda la familia, esta experiencia cercana y participativa promueve la convivencia, la alegría y demuestra cómo el arte puede equilibrar, literalmente, nuestras emociones.",
  events: [
    {
      id: "gdo-7",
      title: "Hermanos del equilibrio",
      date: "7",
      day: "martes",
      venue: "Escuela Secundaria Técnica #48 (Cong. Valadeces)",
      time: "11:00 hrs.",
      municipality: "Gustavo Díaz Ordaz"
    },
    {
      id: "rb-8",
      title: "Hermanos del equilibrio",
      date: "8",
      day: "miércoles",
      venue: "Centro de Asistencia Infantil Comunitario (CAIC)",
      time: "10:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "vh-9",
      title: "Hermanos del equilibrio",
      date: "9",
      day: "jueves",
      venue: "Escuela Secundaria General #2 Profr. \"Antonio Torres\"",
      time: "11:00 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "sf-11",
      title: "Hermanos del equilibrio",
      date: "11",
      day: "sábado",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "San Fernando"
    },
    {
      id: "bg-5",
      title: "Hermanos del equilibrio",
      date: "5",
      day: "domingo",
      venue: "Plaza Principal",
      time: "18:00 hrs.",
      municipality: "Burgos"
    },
    {
      id: "cr-12",
      title: "Hermanos del equilibrio",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal",
      time: "19:00 hrs.",
      municipality: "Cruillas"
    },
    {
      id: "sn-6",
      title: "Hermanos del equilibrio",
      date: "6",
      day: "lunes",
      venue: "Techumbre del Ejido las Vírgenes",
      time: "16:00 hrs.",
      municipality: "San Nicolás"
    },
    {
      id: "md-10",
      title: "Hermanos del equilibrio",
      date: "10",
      day: "viernes",
      venue: "Auditorio \"Rodolfo Torre Cantú\", Cabecera Municipal",
      time: "16:00 hrs.",
      municipality: "Méndez"
    }
  ]
};

// Data de Los Valdés Ska
export const losValdesSka: TamaulipecoArtist = {
  id: "lvs-001",
  name: "Los Valdés SKA",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Ska",
  description: "Los Valdés SKA nace en 2019 como una propuesta musical fresca y versátil, ofreciendo a sus integrantes una descarga de energía y creatividad. Desde sus primeros conciertos, han participado en plazas públicas, eventos privados, festivales y actividades gubernamentales. Su estilo principal es el ska, acompañado de ritmos latinos como salsa, cumbia, batucada y rock, en una combinación que contagia alegría y movimiento. Inspirados en exponentes como Panteón Rococó, La Maldita Vecindad e Inspector, la banda busca generar experiencias donde la música sea un espacio de diversión, baile y unión entre los asistentes. En esta edición presentan \"Nación SKA\", un espectáculo donde ocho músicos en escena celebran la vida al ritmo del ska y los sonidos latinos. Con su propuesta, invitan al público a dejarse llevar por la música, sentir la unidad y disfrutar de la fiesta en cada acorde y tambor.",
  events: [
    {
      id: "r-11",
      title: "Nación SKA",
      date: "11",
      day: "sábado",
      venue: "Explanada del Parque Cultural Reynosa",
      time: "19:00 hrs.",
      municipality: "Reynosa"
    }
  ]
};

// Data de El Contrato
export const elContrato: TamaulipecoArtist = {
  id: "ec-001",
  name: "El Contrato",
  origin: "Sur de Tamaulipas",
  category: "Música",
  subcategory: "Música norteña renovada",
  description: "El Contrato es una agrupación originaria del sur de Tamaulipas, formada en 2020 por cinco jóvenes músicos con el objetivo de renovar el género norteño con un estilo fresco y juvenil. Han colaborado con artistas como Leandro Ríos y Edwin Luna. Actualmente presentan \"Popteño: Que no muera la música norteña\", un concierto vibrante que fusiona lo mejor del regional mexicano con el pop. Con temas propios y canciones del recuerdo, la agrupación combina el sabor de la cumbia y la fuerza del norteño con arreglos modernos sin perder la esencia de sus raíces. Con acordeón, bajo quinto, batería y percusiones, esta propuesta musical llegará al FICSM 2025 para invitar a bailar, cantar y disfrutar de una nueva manera de vivir la música norteña. Una experiencia para todas las generaciones, que honra el pasado con la energía del presente.",
  events: [
    {
      id: "rb-3",
      title: "Popteño, \"Que no muera la música norteña\"",
      date: "3",
      day: "viernes",
      venue: "Casa de Ladrillo Ex Hacienda \"La Sauteña\"",
      time: "20:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "sf-4",
      title: "Popteño, \"Que no muera la música norteña\"",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
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
      venue: "Gimnasio \"Las Liebres\"",
      time: "18:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "sf-12",
      title: "Mosaico Musical",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
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
  description: "La nota alegre es un grupo musical que combina alegría, nostalgia y raíces del norte de México. Su estilo integra géneros como huapango, bolero, cumbia, redova y polka, interpretados con instrumentos típicos como acordeón, bajoquinto, contrabajo y batería, logrando un sonido auténtico y lleno de vitalidad. La agrupación ha destacado por interpretar repertorios que unen tradición e identidad regional, incluyendo temas populares y composiciones originales que celebran el orgullo tamaulipeco, como \"Tamaulipas de mis amores\" y \"La octava maravilla\". Su música refleja la riqueza sonora y la historia cultural del norte del país, acercando al público a experiencias auténticas y vibrantes. El espectáculo \"De amores, polka y huapango\" es un recorrido musical lleno de energía, tradición y folclor regional, invitando al público a disfrutar de los sonidos que representan la identidad del norte mexicano.",
  events: [
    {
      id: "rb-12",
      title: "De amores, polka y huapango",
      date: "12",
      day: "domingo",
      venue: "Casa del Arte de Río Bravo",
      time: "19:00 hrs.",
      municipality: "Río Bravo"
    },
    {
      id: "vh-11",
      title: "De amores, polka y huapango",
      date: "11",
      day: "sábado",
      venue: "Foro al Aire Libre de la Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "slm-5",
      title: "De amores, polka y huapango",
      date: "5",
      day: "domingo",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
      municipality: "Soto la Marina"
    },
    {
      id: "h-3",
      title: "De amores, polka y huapango",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Hidalgo"
    }
  ]
};

// Data de Los del Pueblo
export const losDelPueblo: TamaulipecoArtist = {
  id: "ldp-001",
  name: "Los Del Pueblo",
  origin: "Aldama, Tamaulipas",
  category: "Música",
  subcategory: "Música del norte tamaulipeco",
  description: "Originaria de Aldama, Tamaulipas, Los Del Pueblo es una agrupación que celebra la identidad y tradición del norte de México. Su propuesta se centra en cumbias, corridos y huapangos al estilo norteño, interpretados con energía auténtica y un sonido potente que refleja las raíces musicales de su región. Conformada por seis músicos en escena, la agrupación combina acordeón, bajoquinto, bajo eléctrico, batería, percusiones y voces tradicionales para ofrecer un espectáculo 100% en vivo. Su estilo fusiona géneros como corrido, bolero norteño, huapango y cumbia, manteniendo un equilibrio entre frescura y arraigo cultural. En el FICSM 2025, Los Del Pueblo llega con una experiencia que invita a adentrarse en la riqueza musical del noreste mexicano y disfrutar de un viaje lleno de ritmo, tradición y sentimiento.",
  events: [
    {
      id: "vh-12",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "12",
      day: "domingo",
      venue: "Foro al Aire Libre de la Plaza Principal",
      time: "19:30 hrs.",
      municipality: "Valle Hermoso"
    },
    {
      id: "h-11",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Hidalgo"
    },
    {
      id: "j-5",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "5",
      day: "domingo",
      venue: "Museo \"Casa Conde de Sierra Gorda\"",
      time: "19:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "p-4",
      title: "Raíces del pueblo: música del norte tamaulipeco",
      date: "4",
      day: "sábado",
      venue: "Teatro del Pueblo",
      time: "17:30 hrs.",
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
  description: "Amenaza Norteña se formó en 1995, consolidándose como una agrupación fundamental en la música norteña de la región. Está integrada por Martín González Vera (acordeón y segunda voz), Gabriel Saldívar Saldívar (bajo sexto y primera voz), José Juan González (bajo eléctrico) y Edwin Varela (batería). Con siete producciones musicales que combinan temas originales y covers, Amenaza Norteña ha llevado su música a fiestas populares, programas de televisión y radio, así como a escenarios dentro y fuera de Tamaulipas, destacando siempre por su autenticidad y compromiso con la tradición norteña. La agrupación llega con su espectáculo \"Concierto-Baile: Acá por el norte\", un recorrido musical lleno de ritmo y sabor que invita al público a bailar y disfrutar de la riqueza de la música del norte de México, en una fiesta familiar que celebra con orgullo nuestras raíces.",
  events: [
    {
      id: "md-3",
      title: "Concierto-baile acá por el norte",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Méndez"
    },
    {
      id: "sf-4",
      title: "concierto-baile acá por el norte",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "San Fernando"
    },
    {
      id: "bg-4",
      title: "concierto-baile acá por el norte",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal",
      time: "18:00 hrs.",
      municipality: "Burgos"
    },
    {
      id: "ll-10",
      title: "concierto-baile acá por el norte",
      date: "10",
      day: "viernes",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "Llera"
    },
    {
      id: "jv-11",
      title: "concierto-baile acá por el norte",
      date: "11",
      day: "sábado",
      venue: "Plaza Hidalgo",
      time: "20:00 hrs.",
      municipality: "Jaumave"
    },
    {
      id: "bs-12",
      title: "concierto-baile acá por el norte",
      date: "12",
      day: "domingo",
      venue: "Plaza \"20 de Noviembre\"",
      time: "20:00 hrs.",
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
  description: "Kani Ensamble Coral surge de la plataforma Kani Desarrollo Vocal, reuniendo a un grupo selecto de alumnos con el propósito de fomentar el trabajo coral y el desarrollo artístico y vocal de sus integrantes. Desde 2022 se ha formado con cursos y talleres, y en 2023 inició su actividad escénica formal, consolidando un repertorio diverso que abarca pop, rock, teatro musical, bolero, folclor del mundo, cantos africanos, gospel, soul y negro-espirituales. La agrupación ha destacado rápidamente en la escena coral local y nacional. En 2023 presentó su primer concierto, \"Érase una vez\", y participó en el Festival \"Dreams Come True\" en Cd. Victoria. En 2024 fue seleccionada para el Festival Internacional de Coros \"Voces por la Paz\" y para formar parte del FICSM 2025, además de colaborar con el artista Jurokaa Hu y la banda Ron Martillo en su proyecto musical \"Camino de los sueños\". En esta edición invita un viaje coral que recorre los ecos africanos sembrados en la música del mundo, celebrando ritmos, voces y latidos que cruzan mares, generaciones y corazones, en un espectáculo que conecta historia, tradición y emoción.",
  events: [
    {
      id: "md-4",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Méndez"
    },
    {
      id: "j-3",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "3",
      day: "viernes",
      venue: "Museo \"Casa Conde de Sierra Gorda\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "gf-11",
      title: "Afro-ecos: raíces que susurran en el canto",
      date: "11",
      day: "sábado",
      venue: "Foro de la Iglesia del Poblado \"Loma Alta\"",
      time: "18:00 hrs.",
      municipality: "Gómez Farías"
    }
  ]
};

// Data de Son Kndla
export const sonKndla: TamaulipecoArtist = {
  id: "sk-001",
  name: "Son Kndla",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Cumbia tropical",
  description: "Fundada en 2013, Son Kndla es una agrupación musical con un estilo distintivo de cumbia tropical. Integrada por diez músicos con amplia trayectoria, combina teclados, metales, cuerdas, percusiones y voces en un espectáculo lleno de energía, sabor y tradición. Han participado en eventos como la Feria Tamaulipas, el Festival Internacional Tamaulipas, programas de televisión, y festivales comunitarios en distintos municipios del estado. En esta edición, Son Kandela llega con un espectáculo vibrante y bailable, que invita a todas las generaciones a disfrutar del ritmo, la alegría y la buena vibra de la cumbia, en un concierto lleno de carisma y ejecución musical impecable.",
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
  origin: "Ciudad Victoria, Tamaulipas",
  category: "Circo",
  subcategory: "Circo contemporáneo",
  description: "Formado en 2012, Cirque erös es un grupo de arte circense que combina acrobacias, malabares, hula hoop, monociclo, zancos, danza aérea y espectáculos de fuego, creando experiencias llenas de emoción y riesgo. En 2015 fundaron la Academia de Arte Circense Cirque erös, la primera y única de su tipo en Ciudad Victoria, donde sus integrantes se han formado con artistas nacionales e internacionales. A lo largo de su trayectoria, la agrupación ha participado en festivales como el Festival Internacional Tamaulipas, Festival Arriba Tamaulipas, Encuentro de Arte Circense del Noreste y el Festival Internacional en la Costa del Seno Mexicano, consolidándose como un referente del arte circense en la región. Este año, presenta un espectáculo que rinde homenaje al elemento más feroz a través de destrezas que combinan danza, circo y fuego, mostrando el dominio y la creatividad de sus artistas en cada presentación.",
  events: [
    {
      id: "sf-5",
      title: "Danzas de fuegos",
      date: "5",
      day: "domingo",
      venue: "Plaza Principal",
      time: "20:00 hrs.",
      municipality: "San Fernando"
    },
    {
      id: "sc-4",
      title: "Danzas de fuegos",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal",
      time: "19:00 hrs.",
      municipality: "San Carlos"
    },
    {
      id: "vg-3",
      title: "Danzas de fuegos",
      date: "3",
      day: "viernes",
      venue: "Plaza Juárez",
      time: "19:00 hrs.",
      municipality: "Villagrán"
    },
    {
      id: "cr-6",
      title: "Del Circo a la Calle",
      date: "6",
      day: "lunes",
      venue: "Centro Cívico Municipal",
      time: "11:00 hrs.",
      municipality: "Cruillas"
    },
    {
      id: "ab-7",
      title: "Del Circo a la Calle",
      date: "7",
      day: "martes",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Abasolo"
    },
    {
      id: "slm-8",
      title: "Del Circo a la Calle",
      date: "8",
      day: "miércoles",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
      municipality: "Soto la Marina"
    }
  ]
};

// Data de Grupo espejos taller de teatro y pantomima
export const grupoEspejos: TamaulipecoArtist = {
  id: "ge-001",
  name: "Grupo Espejos",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro y pantomima",
  description: "Fundado en 1983, el Grupo Espejos se ha consolidado como referente del teatro y la pantomima en México. Sus integrantes se han formado con destacados maestros nacionales e internacionales, desarrollando un estilo que combina tradición, técnica y creatividad en cada puesta en escena. A lo largo de su trayectoria, la agrupación ha participado en festivales nacionales e internacionales, como el XXX Festival Internacional Cervantino en Guanajuato, el 2.° Festival Internacional de Pantomima en Puebla, y el Festival Nacional de Pantomima en Monterrey, entre muchos otros. Su trabajo ha llevado la magia de la pantomima a distintos escenarios, conectando con públicos de todas las edades. En el FICSM 2025, presenta un espectáculo que combina circo, mimo y payasos con la participación del público, transportando al fascinante mundo de la fantasía y la creatividad del circo.",
  events: [
    {
      id: "bg-7",
      title: "Con las manos entre los pies",
      date: "7",
      day: "martes",
      venue: "Escuela Primaria \"Mártires de la Revolución\"",
      time: "11:00 hrs.",
      municipality: "Burgos"
    },
    {
      id: "cr-8",
      title: "Con las manos entre los pies",
      date: "8",
      day: "miércoles",
      venue: "Centro Cívico Municipal",
      time: "11:00 hrs.",
      municipality: "Cruillas"
    },
    {
      id: "sn-9",
      title: "Con las manos entre los pies",
      date: "9",
      day: "jueves",
      venue: "Ejido \"El Palmar\"",
      time: "15:00 hrs.",
      municipality: "San Nicolás"
    },
    {
      id: "j-5",
      title: "Con las manos entre los pies",
      date: "5",
      day: "domingo",
      venue: "Museo \"Casa Conde de Sierra Gorda\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "nm-12",
      title: "Con las manos entre los pies",
      date: "12",
      day: "domingo",
      venue: "Explanada Ejidal, Ejido \"Ampliación de la Reforma\"",
      time: "17:30 hrs.",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "bg-3",
      title: "Paseando con huapangos y tradición",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal",
      time: "18:00 hrs.",
      municipality: "Burgos"
    },
    {
      id: "cr-4",
      title: "Paseando con huapangos y tradición",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal",
      time: "19:00 hrs.",
      municipality: "Cruillas"
    },
    {
      id: "j-12",
      title: "Paseando con huapangos y tradición",
      date: "12",
      day: "domingo",
      venue: "Kiosko de la Plaza Principal \"Plaza Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "p-11",
      title: "Paseando con huapangos y tradición",
      date: "11",
      day: "sábado",
      venue: "Teatro del Pueblo",
      time: "17:30 hrs.",
      municipality: "Padilla"
    },
    {
      id: "slm-10",
      title: "Paseando con huapangos y tradición",
      date: "10",
      day: "viernes",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
      municipality: "Soto la Marina"
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
  description: "Roberto Cuentacuentos es un narrador que combina su talento con la música, la historieta, la caricatura y el humor para acercar a las niñas y los niños al mundo de la imaginación y la lectura. Ha participado en festivales artísticos, ferias del libro y presentaciones en diversos estados de México, compartiendo historias que promueven la convivencia, la creatividad y la alegría. Su trabajo destaca por el uso de la narración oral como herramienta para sensibilizar, divertir y enseñar, conectando con las infancias a través de cuentos que trascienden fronteras y culturas. Cada presentación se convierte en un viaje donde la imaginación se despierta y la lectura se celebra como una experiencia viva y divertida. En esta edición, Roberto Cuentacuentos nos invita a recorrer el mundo con \"Cuentos del mundo\", presentando historias tradicionales de Japón, Chile y México que encantarán a grandes y pequeños por igual.",
  events: [
    {
      id: "sn-12",
      title: "Cuentos del mundo",
      date: "12",
      day: "domingo",
      venue: "Auditorio Rodolfo Torre Cantú",
      time: "14:00 hrs.",
      municipality: "San Nicolás"
    },
    {
      id: "j-6",
      title: "Cuentos del mundo",
      date: "6",
      day: "lunes",
      venue: "Teatro del Pueblo",
      time: "9:00 hrs.",
      municipality: "Jaumave"
    },
    {
      id: "bu-5",
      title: "Cuentos del mundo",
      date: "5",
      day: "domingo",
      venue: "Plaza \"20 de Noviembre\"",
      time: "17:00 hrs.",
      municipality: "Bustamante"
    },
    {
      id: "sc-11",
      title: "Cuentos del mundo",
      date: "11",
      day: "sábado",
      venue: "Plaza Juárez, Zona Centro",
      time: "10:00 hrs.",
      municipality: "San Carlos"
    },
    {
      id: "p-9",
      title: "Cuentos del mundo",
      date: "9",
      day: "jueves",
      venue: "Escuela Primaria \"Josefa Ortíz de Dominguez\"",
      time: "9:00 hrs.",
      municipality: "Padilla"
    },
    {
      id: "g-10",
      title: "Cuentos del mundo",
      date: "10",
      day: "viernes",
      venue: "Foro de la Escuela Secundaria Técnica #43",
      time: "11:00 hrs.",
      municipality: "Güémez"
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
  description: "Descripción no disponible",
  events: [
    {
      id: "sc-12",
      title: "Herencia Norteña",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal",
      time: "19:00 hrs.",
      municipality: "San Carlos"
    },
    {
      id: "ab-3",
      title: "Herencia Norteña",
      date: "3",
      day: "viernes",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Abasolo"
    },
    {
      id: "h-10",
      title: "Herencia Norteña",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Hidalgo"
    },
    {
      id: "g-11",
      title: "Herencia Norteña",
      date: "11",
      day: "sábado",
      venue: "Plaza Principal de Estación Manuel",
      time: "19:00 hrs.",
      municipality: "González"
    },
    {
      id: "m-11",
      title: "Herencia Norteña",
      date: "11",
      day: "sábado",
      venue: "Plaza Principal \"Plutarco Elías Calles\"",
      time: "19:00 hrs.",
      municipality: "Mante"
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
  description: "Fundado en 2024, Érase una vez dos veces es un grupo de cuentacuentos que promueve la lectura en la infancia y resalta el valor de las historias como herramienta de imaginación y aprendizaje. Su propuesta integra narración oral, lectura en voz alta, dramatización y juego escénico, generando experiencias cercanas y significativas para niñas y niños. En poco tiempo, la agrupación ha formado parte de actividades culturales y educativas como el Festival Internacional en la Costa del Seno Mexicano 2024, los festivales Maquinitas Creativas de Estación Palabra, así como funciones escolares y municipales. Su trabajo está respaldado por procesos de formación teatral, como el taller \"Herramientas teatrales para contar historias\" impartido por Pablo Luna de Percha Teatro. Este 2025 regresan al Festival con un cuentacuentos teatralizado que combina narración, comedia y teatro físico. A través de personajes curiosos y divertidos, niñas y niños exploran temas como la creatividad, la felicidad y el sentido de la vida en una experiencia participativa que invita a descubrir el mundo con curiosidad y libertad.",
  events: [
    {
      id: "vg-11",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "11",
      day: "sábado",
      venue: "Plaza Juárez",
      time: "19:00 hrs.",
      municipality: "Villagrán"
    },
    {
      id: "h-10",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "10",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Hidalgo"
    },
    {
      id: "m-12",
      title: "Aristótefes y Sócrafes y el Misterio del Movimiento",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Mainero"
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
  description: "Descripción no disponible",
  events: [
    {
      id: "sn-3",
      title: "Concierto Trío UATsteco",
      date: "3",
      day: "viernes",
      venue: "Auditorio Rodolfo Torre Cantú",
      time: "16:00 hrs.",
      municipality: "San Nicolás"
    },
    {
      id: "j-4",
      title: "Concierto Trío UATsteco",
      date: "4",
      day: "sábado",
      venue: "Kiosko de la Plaza Principal \"Plaza Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "gm-5",
      title: "Concierto Trío UATsteco",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Güémez"
    },
    {
      id: "t-11",
      title: "Concierto Trío UATsteco",
      date: "11",
      day: "sábado",
      venue: "Explanda de la Presidencia Municipal",
      time: "18:30 hrs.",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "oc-11",
      title: "Concierto Quinteto de Alientos UAT",
      date: "11",
      day: "sábado",
      venue: "Presidencia Municipal",
      time: "19:00 hrs.",
      municipality: "Ocampo"
    },
    {
      id: "x-10",
      title: "Concierto Quinteto de Alientos UAT",
      date: "10",
      day: "viernes",
      venue: "Plaza Cultura",
      time: "19:30 hrs.",
      municipality: "Xicoténcatl"
    },
    {
      id: "nm-3",
      title: "Concierto Quinteto de Alientos UAT",
      date: "3",
      day: "viernes",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Nuevo Morelos"
    },
    {
      id: "g-4",
      title: "Concierto Quinteto de Alientos UAT",
      date: "4",
      day: "sábado",
      venue: "Plaza Principal de González",
      time: "19:00 hrs.",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "x-12",
      title: "Concierto Trío Bohemia UAT",
      date: "12",
      day: "domingo",
      venue: "Plaza Cultura",
      time: "19:30 hrs.",
      municipality: "Xicoténcatl"
    }
  ]
};

// Data de Teatro Guarapo
export const teatroGuarapo: TamaulipecoArtist = {
  id: "tg-002",
  name: "Grupo de teatro Guarapo",
  origin: "El Mante, Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro comunitario",
  description: "Fundado en 1998 bajo la dirección del maestro Jorge Montenegro Ramírez, el Grupo de teatro Guarapo se ha destacado como un referente cultural en El Mante, representando a la Casa de la Cultura y participando en festivales internacionales, como el primer Festival Internacional Tamaulipas en Texas. A lo largo de su trayectoria, el grupo ha trabajado en la recuperación y promoción del teatro local, llevando sus montajes a diversos escenarios de la región. Con un enfoque en la formación y el entretenimiento de las infancias, Guarapo ha presentado obras que mezclan títeres, actores y comedia, como la comedia \"El Abuelo\" en 2024, que formó parte del Festival de la Costa del Seno Mexicano. Sus puestas en escena buscan transmitir valores, tradiciones y la riqueza cultural de la región centro-sur de Tamaulipas, siempre con creatividad, música y color. En esta edición del FICSM 2025, invita a un recorrido por cinco relatos que celebran la historia, las costumbres y los sabores de Ciudad Mante, desde la llegada de sus primeros pobladores hasta su identidad como la \"ciudad más dulce del planeta\". Una experiencia divertida y educativa para que niños, jóvenes y familias descubran la riqueza cultural de su propio entorno.",
  events: [
    {
      id: "j-7",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "7",
      day: "martes",
      venue: "Escuela Primaria \"Lic. Benito Juárez\"",
      time: "9:00 hrs.",
      municipality: "Jiménez"
    },
    {
      id: "ab-6",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "6",
      day: "lunes",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Abasolo"
    },
    {
      id: "p-8",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "8",
      day: "miércoles",
      venue: "Escuela Primaria \"Conrado Castillo\"",
      time: "9:00 hrs.",
      municipality: "Padilla"
    },
    {
      id: "g-10",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "10",
      day: "viernes",
      venue: "Foro de la Escuela Secundaria Técnica #43",
      time: "11:00 hrs.",
      municipality: "Güémez"
    },
    {
      id: "c-9",
      title: "Canasta de cuentos de la zona donde vivimos",
      date: "9",
      day: "jueves",
      venue: "Ejido \"Lázaro Cárdenas del Río\"",
      time: "10:00 hrs.",
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
  description: "José Palacios es un artista multidisciplinario con más de 40 años de trayectoria como actor, titiritero, bailarín, coreógrafo, productor y periodista cultural. Fundador del Grupo Ecléctico de Teatro, la Compañía de Danza Contemporánea danzArte y de la Asociación Cultural Rodas A.C., ha participado en más de 100 montajes escénicos y recibido 15 premios locales y nacionales. Su trabajo también incluye la organización de festivales, docencia y curaduría artística en diversos foros nacionales e internacionales. A lo largo de su carrera, ha impulsado la escena teatral y dancística, promoviendo la formación de públicos y la difusión de la cultura en distintas comunidades. Su enfoque combina creatividad, humor y sensibilidad social, conectando con audiencias de todas las edades mediante propuestas innovadoras y cercanas. José Palacios presenta el unipersonal \"La tienda de Don Verdi\", un montaje que recrea un tendajón de barrio donde el tendero da vida a los personajes del vecindario a través de los productos de su tienda. Con humor, nostalgia y reflexión, la obra invita a reflexionar sobre la vida comunitaria y la globalización.",
  events: [
    {
      id: "jv-9",
      title: "La tienda de Don Verdi",
      date: "9",
      day: "jueves",
      venue: "Teatro del Pueblo",
      time: "10:00 hrs.",
      municipality: "Jaumave"
    },
    {
      id: "bs-10",
      title: "La tienda de Don Verdi",
      date: "10",
      day: "viernes",
      venue: "Plaza \"20 de Noviembre\"",
      time: "17:00 hrs.",
      municipality: "Bustamante"
    },
    {
      id: "p-8",
      title: "La tienda de Don Verdi",
      date: "8",
      day: "miércoles",
      venue: "Escuela Primaria Lauro Aguirre",
      time: "9:00 hrs.",
      municipality: "Palmillas"
    },
    {
      id: "t-7",
      title: "La tienda de Don Verdi",
      date: "7",
      day: "martes",
      venue: "Escuela Primaria \"Benito Juárez\"",
      time: "10:30 hrs.",
      municipality: "Tula"
    },
    {
      id: "nm-6",
      title: "La tienda de Don Verdi",
      date: "6",
      day: "lunes",
      venue: "Escuela Miguel Hidalgo",
      time: "11:30 hrs.",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "ab-4",
      title: "Urban revolution",
      date: "4",
      day: "sábado",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Abasolo"
    },
    {
      id: "ll-12",
      title: "Urban revolution",
      date: "12",
      day: "domingo",
      venue: "Explanada de la Presidencia Municipal",
      time: "19:00 hrs.",
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
  description: "Rockpango fusiona el rock con la música tradicional huasteca, creando un estilo de rock huasteco. Su propuesta busca difundir entre las juventudes la riqueza de la cultura tamaulipeca y mexicana a través de un lenguaje sonoro contemporáneo, potente y auténtico. Fundado en 2005 bajo el nombre 3rEvol, el grupo adoptó en 2013 el nombre Rockpango, combinación de \"rock\" y \"huapango\" que refleja su identidad musical. Integrado por músicos egresados de la Facultad de Música de la UAT, el grupo combina formación académica con profundas raíces culturales y sociales, consolidando un repertorio versátil y lleno de energía. En el FICSM 2025, Rockpango presenta un espectáculo donde el rock y el huapango se encuentran en un concierto vibrante, celebrando la fusión entre lo tradicional y lo contemporáneo con el sello inconfundible de la agrupación.",
  events: [
    {
      id: "slm-3",
      title: "Huasteco hasta los huesos",
      date: "3",
      day: "viernes",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
      municipality: "Soto la Marina"
    }
  ]
};

// Data de Norteños de Río Bravo
export const nortenosDeRioBravo: TamaulipecoArtist = {
  id: "ndrb-001",
  name: "Norteños de Río Bravo",
  origin: "Río Bravo, Tamaulipas",
  category: "Música",
  subcategory: "Música norteña",
  description: "Fundados el 12 de octubre de 2012 en Río Bravo, Tamaulipas, Norteños de Río Bravo es un grupo de amigos apasionados por la música y la danza, especialmente por las tradiciones del noreste de México. Su trayectoria refleja el orgullo por la cultura norestense, representando su música en distintos estados del país y también en Estados Unidos, en ciudades como Valle de Texas, Corpus Christi y Florida. La agrupación se ha presentado en numerosos eventos culturales, difundiendo la riqueza del folclore y la música del norte, combinando ritmos tradicionales con zapateado, creando un espectáculo que une entretenimiento y tradición. \"En tierras tamaulipecas\" es un espectáculo musical que celebra la música folclórica y clásica del norte de México, invitando al público a disfrutar y bailar al ritmo de su tierra.",
  events: [
    {
      id: "slm-4",
      title: "En tierras Tamaulipecas",
      date: "4",
      day: "sábado",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
      municipality: "Soto la Marina"
    },
    {
      id: "t-12",
      title: "En tierras Tamaulipecas",
      date: "12",
      day: "domingo",
      venue: "Explanda de la Presidencia Municipal",
      time: "18:30 hrs.",
      municipality: "Tula"
    },
    {
      id: "x-11",
      title: "En tierras Tamaulipecas",
      date: "11",
      day: "sábado",
      venue: "Plaza Cultura",
      time: "19:30 hrs.",
      municipality: "Xicoténcatl"
    },
    {
      id: "a-3",
      title: "En tierras Tamaulipecas",
      date: "3",
      day: "viernes",
      venue: "Plaza \"Hidalgo\"",
      time: "19:00 hrs.",
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
  description: "El Grupo de danza Anacahuitas está formado por ocho mujeres, de entre 50 y 70 años, que han encontrado en la danza folclórica una pasión compartida. Sus integrantes combinan su amor por el baile con distintas profesiones como enfermería, docencia, comercio y oficios del hogar, demostrando que la creatividad y el arte no tienen edad. Con más de cuatro años de trayectoria, han llevado sus bailes a escenarios de diferentes ciudades de Tamaulipas como Nuevo Laredo, Matamoros, Río Bravo, Tampico, Altamira y la capital, Ciudad Victoria, compartiendo la riqueza cultural y el folclore de México. Este año, el Grupo de danza Anacahuitas llega con un recorrido por los bailes típicos de Jalisco, Veracruz, Oaxaca, Chiapas y Tamaulipas, invitando a todos a disfrutar de un viaje imaginario por la diversidad cultural del país.",
  events: [
    {
      id: "ab-11",
      title: "Sones de mi México",
      date: "11",
      day: "sábado",
      venue: "Plaza \"Hidalgo\"",
      time: "18:00 hrs.",
      municipality: "Abasolo"
    },
    {
      id: "slm-12",
      title: "Sones de mi México",
      date: "12",
      day: "domingo",
      venue: "Explanada Municipal",
      time: "19:00 hrs.",
      municipality: "Soto la Marina"
    },
    {
      id: "g-3",
      title: "Sones de mi México",
      date: "3",
      day: "viernes",
      venue: "Auditorio del Ayuntamiento en la Cabecera Municipal",
      time: "19:00 hrs.",
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
  subcategory: "Música norteña",
  description: "Con apenas seis años de trayectoria, Grupo Relativo se ha consolidado como un exponente de la música norteña. Su estilo combina carisma, talento y una gran interacción en el escenario. La agrupación ha compartido escenario con grandes nombres de la música regional mexicana como Carín León, Edén Muñóz, Joss Favela, El Komander, Pedro Fernández y Peso Pluma. Su alcance va más allá de Tamaulipas, con presentaciones en estados como Nuevo León, Veracruz, San Luis Potosí e Hidalgo, así como transmisiones en radio, televisión y plataformas de streaming. En esta edición llega con el espectáculo \"Las favoritas\", ofreciendo un recorrido por sus éxitos más conocidos y la energía que los ha hecho destacar en la música norteña contemporánea, asegurando una experiencia vibrante y llena de ritmo para todos los asistentes.",
  events: [
    {
      id: "p-3",
      title: "Las favoritas con Grupo Relativo",
      date: "3",
      day: "viernes",
      venue: "Teatro del Pueblo",
      time: "17:30 hrs.",
      municipality: "Padilla"
    },
    {
      id: "gm-12",
      title: "Las favoritas con Grupo Relativo",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal de la Cabecera Municipal",
      time: "19:00 hrs.",
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
  description: "Bocatoma Jazz cuenta con más de una década de trayectoria en la escena del jazz, consolidándose como un referente del género en Tamaulipas. Su propuesta artística combina exploración sonora y autenticidad, ofreciendo interpretaciones que conectan con distintos públicos en escenarios locales, estatales y nacionales. La agrupación ha participado en festivales y eventos culturales, destacando por su capacidad de fusionar melodías icónicas del repertorio mexicano con los lenguajes del jazz, explorando estilos como swing, latin jazz, samba, funk y bossa nova. Su repertorio incluye obras de grandes figuras como Consuelo Velázquez, Armando Manzanero y Chavela Vargas, así como clásicos esenciales del jazz internacional. Este año, Bocatoma Jazz llega con un recorrido sonoro lleno de matices, energía y emoción que invita al público a disfrutar del jazz en toda su diversidad y riqueza cultural.",
  events: [
    {
      id: "p-12",
      title: "El arte de la expresión musical",
      date: "12",
      day: "domingo",
      venue: "Teatro del Pueblo",
      time: "17:30 hrs.",
      municipality: "Padilla"
    }
  ]
};

// Data de Grupo Folklórico Kauyumarie
export const grupoFolkloricoKauyumarie: TamaulipecoArtist = {
  id: "gfk-001",
  name: "Grupo Folclórico Kauyumarie",
  origin: "Tamaulipas",
  category: "Danza",
  subcategory: "Danza folklórica",
  description: "El Grupo Folclórico Kauyumarie fue fundado en 1984 como un espacio para que niños y jóvenes desarrollen sus habilidades artísticas. Gracias a su disciplina, esfuerzo y dedicación, el grupo ha obtenido importantes premios estatales y nacionales. A lo largo de su trayectoria, Kauyumarie se ha presentado en destacados foros y festivales, como el Festival Internacional en la Costa del Seno Mexicano, el Festival Internacional Tamaulipas y el Festival Internacional del Caribe en Puebla, así como en diversos eventos culturales en todo el país. Su repertorio incluye bailes y danzas tradicionales de Tamaulipas y de otras regiones de México, reflejando la riqueza y diversidad de nuestra herencia cultural. En esta edición del FICSM 2025, el grupo presenta el espectáculo \"De costa a costa\", un viaje por los estados del Pacífico como Nayarit, Michoacán y Jalisco, así como del Golfo de México, incluyendo Veracruz y Tamaulipas. El programa combina géneros musicales como el son, el jarabe, el son huasteco, la polka, el shotis y la redova, ofreciendo al público una experiencia vibrante y llena de color.",
  events: [
    {
      id: "c-3",
      title: "De costa a costa",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal Cabecera Municipal",
      time: "16:00 hrs.",
      municipality: "Casas"
    },
    {
      id: "v-4",
      title: "De costa a costa",
      date: "4",
      day: "sábado",
      venue: "Escenario \"Plaza Juárez\"",
      time: "20:00 hrs.",
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
  description: "Brassas Mexican Beat es un proyecto que interpreta música tradicional y original de bandas de alientos de distintas partes del mundo, fusionando estilos como huapango norteño, chilena de costa chica, dixieland, ska, balkan y sones sinaloenses. Su propuesta musical combina virtuosismo y creatividad, llevando la tradición de las bandas mexicanas a un contexto global. Con profundo respeto por la autenticidad de cada género, la agrupación preserva y promueve las músicas de banda mientras las reinventa para las audiencias contemporáneas. Sus interpretaciones y composiciones crean experiencias sonoras que celebran la riqueza cultural de México y del mundo, conectando con el público de manera intensa y divertida. En el FICSM 2025, llega con un emocionante viaje musical que recorre diferentes latitudes usando la instrumentación de las bandas de alientos como hilo conductor, garantizando diversión, virtuosismo y energía en cada presentación.",
  events: [
    {
      id: "v-11",
      title: "Música de banda del planeta tierra",
      date: "11",
      day: "sábado",
      venue: "Plaza \"Benito Juárez\"",
      time: "19:00 hrs.",
      municipality: "Victoria"
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
  description: "Descripción no disponible",
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
  origin: "Reynosa, Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro inclusivo",
  description: "¿Qué le preguntarías a tu \"yo\" del futuro o qué le dirías a tu niña de hace 25 años? El vuelo de la luciérnaga es una obra de teatro sensible para las jóvenes audiencias a partir de los 7 años. La obra aborda el tema del divorcio desde la mirada de Luz, una niña de 11 años, que explora su identidad en un relato profundo y lleno de ternura. Apapacho Arte y Diversidad es una agrupación sin fines de lucro que, desde 2015, trabaja por la inclusión artística y cultural. Desde su centro cultural independiente en Reynosa, han impulsado la formación artística en niñas, niños y jóvenes, así como la producción y promoción del teatro. La agrupación ha representado a Tamaulipas en importantes festivales como \"Chicos y chicas a escena\" en Xalapa, la Feria del Libro del Zócalo en CDMX, el Encuentro Nacional de los Amantes del Teatro y la Feria Internacional del Libro de la Habana, Cuba.",
  events: [
    {
      id: "v-4",
      title: "El vuelo de la Luciérnaga",
      date: "4",
      day: "sábado",
      venue: "Escenario \"Plaza Juárez\"",
      time: "20:00 hrs.",
      municipality: "Victoria"
    },
    {
      id: "m-6",
      title: "El vuelo de la Luciérnaga",
      date: "6",
      day: "lunes",
      venue: "Esc. \"Héctor Pérez Martínez\"",
      time: "10:00 hrs.",
      municipality: "Mante"
    }
  ]
};

// Data de Colectivo Trueque
export const colectivoTrueque: TamaulipecoArtist = {
  id: "ct-001",
  name: "Colectivo Trueque",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro independiente",
  description: "Colectivo Trueque es una agrupación escénica independiente con trayectoria nacional e internacional. Ha sido becaria del FONCA y reconocida en múltiples concursos y festivales, entre ellos el Concurso Estatal de Teatro \"Mtro. Rafael Solana\". Sus integrantes han participado en circuitos como \"Los Independientes a Chapultepec\" y el \"Festival Internacional de Circo Manotas\", además de formarse con maestros destacados del ámbito teatral. Entre sus montajes más conocidos se encuentran Lo que queda de nosotros, Arrullos para Benjamín y Pim pam clown (La guerra de los payasos), presentada en festivales de Colombia. Su propuesta se caracteriza por un estilo versátil y comprometido, que combina humor, reflexión y un lenguaje escénico cercano al público. En el Festival Internacional en la Costa del Seno Mexicano 2025, el colectivo presenta un espectáculo itinerante que llena plazas y explanadas de música, color y alegría, invitando a la convivencia y al disfrute familiar.",
  events: [
    {
      id: "ll-8",
      title: "Animación con zanqueros y mimo",
      date: "8",
      day: "miércoles",
      venue: "Primaria \"Leyes de Reforma\"",
      time: "11:00 hrs.",
      municipality: "Llera"
    },
    {
      id: "oc-7",
      title: "Animación con zanqueros y mimo",
      date: "7",
      day: "martes",
      venue: "Techumbre de Plaza del Poblado Adolfo López Mateos",
      time: "18:00 hrs.",
      municipality: "Ocampo"
    },
    {
      id: "x-6",
      title: "Animación con zanqueros y mimo",
      date: "6",
      day: "lunes",
      venue: "Escuela Secundaria General",
      time: "10:00 hrs.",
      municipality: "Xicoténcatl"
    },
    {
      id: "gf-5",
      title: "Animación con zanqueros y mimo",
      date: "5",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Gómez Farías"
    },
    {
      id: "nm-12",
      title: "Animación con zanqueros y mimo",
      date: "12",
      day: "domingo",
      venue: "Explanada Ejidal, Ejido \"Ampliación de la Reforma\"",
      time: "17:30 hrs.",
      municipality: "Nuevo Morelos"
    },
    {
      id: "g-9",
      title: "Animación con zanqueros y mimo",
      date: "9",
      day: "jueves",
      venue: "Plaza Principal de Estación Manuel",
      time: "19:00 hrs.",
      municipality: "González"
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
  description: "Percutam Dúo nace en 2012 en la Facultad de Música de la Universidad Veracruzana, integrado por Daniel Sánchez y Judith Aguilar. Desde entonces, han construido una trayectoria destacada con presentaciones en festivales nacionales e internacionales como Vibraciones Perú 2023, Percusonidos, Raíz México y Nuntempa, así como en diversas salas de concierto del sureste mexicano. Su talento ha sido reconocido con premios en concursos como el Southern California Marimba Competition y PAWC Italia, y han sido beneficiarios del PECDA en Tamaulipas y Veracruz. El dúo se especializa en la interpretación de obras de marimba de concierto de alta complejidad técnica y expresiva. Su repertorio combina creatividad y virtuosismo, explorando una amplia gama de timbres, dinámicas y ritmos que resaltan la riqueza sonora del instrumento, creando experiencias sonoras únicas y envolventes para el público. En esta edición presenta \"Marimba Perpetua\", un programa que incluye seis piezas originales de Daniel Sánchez inspiradas en la naturaleza, los paisajes y la cultura de Tamaulipas, invitando a los asistentes a un recorrido musical lleno de color, ritmo y emoción.",
  events: [
    {
      id: "jv-12",
      title: "Marimba perpetua",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal de Jaumave",
      time: "19:00 hrs.",
      municipality: "Jaumave"
    },
    {
      id: "pl-11",
      title: "Marimba perpetua",
      date: "11",
      day: "sábado",
      venue: "Plaza Principal de Palmillas",
      time: "19:00 hrs.",
      municipality: "Palmillas"
    },
    {
      id: "t-4",
      title: "Marimba perpetua",
      date: "4",
      day: "sábado",
      venue: "Explanda de la Presidencia Municipal",
      time: "18:30 hrs.",
      municipality: "Tula"
    },
    {
      id: "oc-3",
      title: "Marimba perpetua",
      date: "3",
      day: "viernes",
      venue: "Presidencia Municipal",
      time: "19:00 hrs.",
      municipality: "Ocampo"
    },
    {
      id: "x-5",
      title: "Marimba perpetua",
      date: "5",
      day: "domingo",
      venue: "Plaza Cultura",
      time: "19:30 hrs.",
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
  description: "La agrupación está conformada por maestras y maestros de distintos niveles educativos, unidos por el amor a la música y el compromiso de fortalecer el sentido de comunidad a través del arte. Con el respaldo de la Secretaría de Educación de Tamaulipas, la Rondalla promueve la cultura musical en escenarios locales y eventos estatales como el Festival Internacional en la Costa del Seno Mexicano. La Rondalla presentará un espectáculo musical que rinde homenaje a uno de los grandes íconos de la música romántica: José José. Conformado por 13 integrantes, el ensamble combina la armonía vocal con guitarras acústicas, requintos, contrabajo y arreglos distintivos que dan un toque único a la tradicional rondalla. El repertorio incluye temas emblemáticos como El Triste y Gavilán o Paloma, evocando recuerdos y emociones que han acompañado a generaciones enteras. Para la agrupación, este tributo cobra especial significado por el vínculo de José José con Tampico, ciudad de origen de su familia paterna.",
  events: [
    {
      id: "pl-3",
      title: "Tributo al príncipe de la canción \"José José\"",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de Palmillas",
      time: "19:00 hrs.",
      municipality: "Palmillas"
    },
    {
      id: "oc-12",
      title: "Tributo al príncipe de la canción \"José José\"",
      date: "12",
      day: "domingo",
      venue: "Techumbre de Plaza del Poblado Adolfo López Mateos",
      time: "19:00 hrs.",
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
  description: "Descripción no disponible",
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
      venue: "Plaza Principal de González",
      time: "20:00 hrs.",
      municipality: "González"
    }
  ]
};

// Data de La Espuma de Mar
export const laEspumaDeMar: TamaulipecoArtist = {
  id: "ledm-001",
  name: "La Espuma del Mar",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música tradicional mexicana",
  description: "La Espuma del Mar nació como un proyecto inspirado en la diversidad de la música tradicional mexicana. Creada por Miguel Arizmendi, Pável González y Cecilia Fajardo, la agrupación fusiona ritmos para enriquecer su propuesta. Cada integrante de La Espuma del Mar comparte la pasión por la música tradicional mexicana y el amor por sus raíces, entregando al público un sonido que evoca el vaivén del mar y el alma de la costa. Con un espíritu libre y apasionado, la agrupación se posiciona como una propuesta que no solo interpreta música, sino que la convierte en un puente entre generaciones, territorios y emociones. La agrupación llegará al Festival Internacional en la Costa del Seno Mexicano con una propuesta musical que combina tradiciones y la comunión entre sonoridades de las que se han nutrido sus integrantes a lo largo de sus carreras, que con un nutrido repertorio, habitan el imaginario de los territorios en donde se enraízan sus historias de vida.",
  events: [
    {
      id: "gf-4",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "4",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Gómez Farías"
    },
    {
      id: "m-3",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal \"Plutarco Elías Calles\"",
      time: "19:00 hrs.",
      municipality: "Mante"
    },
    {
      id: "g-5",
      title: "Si la brisa se vuelve canción, marejada musical por \"La espuma del mar\"",
      date: "5",
      day: "domingo",
      venue: "Plaza Principal de González",
      time: "20:00 hrs.",
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
  subcategory: "Música de cámara contemporánea",
  description: "Fundado en 2005 y dirigido por las hermanas Lozano, ELGAR Diseño Musical es un ensamble contemporáneo que combina formación clásica con géneros populares adaptados al formato de música de cámara. Su estilo se distingue por la calidad interpretativa y la creatividad en los arreglos, ofreciendo experiencias sonoras únicas. La agrupación ha participado en festivales y eventos en diversos estados del país como Campeche, Veracruz, Aguascalientes, Estado de México y CDMX. Entre sus logros destacan el Festival Internacional Tamaulipas, el Festival de Otoño del INBA en Matamoros, la Feria de San Marcos, así como la grabación del soundtrack de la película italiana Arritmia de Gibrán Bazán. Además, han sido ganadores del PECDA Tamaulipas en 2019 y 2024. ELGAR Diseño Musical presenta un homenaje al legado sonoro de la región con versiones de cámara de piezas icónicas de compositores como Roberto Cantoral, Cuco Sánchez, Rigo Tovar y Sierra Flores, acompañado por reconocidas voces de la ópera tamaulipeca.",
  events: [
    {
      id: "m-4",
      title: "Tamaulipas a la cámara \"Voces y cuerdas de nuestra tierra\"",
      date: "4",
      day: "sábado",
      venue: "Castillo de la Nueva Apolonia",
      time: "19:00 hrs.",
      municipality: "Mante"
    }
  ]
};

// Data de Teatro ingenio – Creación
export const teatroIngenioCreacion: TamaulipecoArtist = {
  id: "tic-001",
  name: "Teatro Ingenio - Creación",
  origin: "Ciudad Madero, Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "\"Teatro Ingenio - Creación\" es una compañía originaria de Ciudad Madero, Tamaulipas, fundada en 2007 bajo la dirección de Marco Antonio Rivas Vélez. A lo largo de su trayectoria ha explorado lenguajes como el teatro físico, la pantomima, el clown, los títeres y la narración oral. Se especializa en espectáculos interdisciplinarios dirigidos a jóvenes audiencias, priorizando la identidad cultural, la participación familiar y la formación de nuevos públicos. Sus producciones han sido reconocidas con premios a nivel municipal, estatal y nacional. Con \"El barco de papel\" la agrupación presenta una obra que aborda la convivencia familiar cuando uno de sus miembros es diagnosticado con Alzheimer. Con el uso de proyecciones de video y efectos sonoros en vivo, la propuesta busca generar empatía sobre la importancia de los recuerdos. La dramaturgia es una adaptación de Marco Antonio Rivas Vélez a partir del cuento de Alberto Martínez San Miguel, una propuesta sensible y accesible que promueve la unión intergeneracional y el diálogo familiar.",
  events: [
    {
      id: "m-5",
      title: "El barco papel",
      date: "5",
      day: "domingo",
      venue: "Teatro del IMSS",
      time: "18:00 hrs.",
      municipality: "Mante"
    }
  ]
};

// Data de Gato Negro
export const gatoNegro: TamaulipecoArtist = {
  id: "gn-001",
  name: "Gato Negro Teatro",
  origin: "Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro contemporáneo para jóvenes audiencias",
  description: "Gato Negro Teatro es una compañía de teatro contemporáneo dedicada a jóvenes audiencias que, desde 2013, ha desarrollado su labor en Tamaulipas y en festivales nacionales. Su trabajo destaca por el compromiso social y por crear experiencias escénicas sensibles, cercanas y significativas, que conectan con públicos de distintas edades y contextos. A lo largo de su trayectoria, la compañía ha colaborado con instituciones como Alas y Raíces, así como con gobiernos municipales y estatales, consolidándose como un referente del teatro que combina creatividad, reflexión y entretenimiento. Su propuesta artística se centra en explorar emociones, historias y problemáticas sociales de manera cercana y profunda. En esta edición, Gato Negro Teatro presenta \"KAYU\", una obra que sigue el viaje de un joven hacia el amor propio, entre recuerdos de su infancia, la amistad con Carmelita y su pasión por las artes marciales, en una historia que invita a sanar, valorar la propia fuerza interior y celebrar la resiliencia.",
  events: [
    {
      id: "m-8",
      title: "Kayu",
      date: "8",
      day: "miércoles",
      venue: "Teatro del IMSS",
      time: "18:00 hrs.",
      municipality: "Mante"
    },
    {
      id: "t-7",
      title: "Kayu",
      date: "7",
      day: "martes",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "19:00 hrs.",
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
  description: "Teatromorfosis es una agrupación que se especializa en teatro para niñas, niños, adolescentes y jóvenes adultos. En el año 2024, su obra \"La flor con menos pétalos\" resultó ganadora del primer lugar en el Concurso Estatal de Teatro XLI Mtro. Rafael Solana, al igual que mejor dramaturgia. Actualmente presentan la obra \"El día que la gente pez salió del mar\", que nos cuenta la historia de un grupo de adolescentes que viajan a playa Miramar como parte de sus festejos por el final de cursos, sólo para encontrarse con verdades incómodas que develan a cada uno tal como son. Entre personajes vivos, otros que no se sabe, salvo que son gente pez que salen del mar, y un huracán categoría cinco que debía ser detenido, Nicole vive una de las experiencias más fuertes de su vida: alguien filtró en internet material íntimo suyo y ahora recibe el rechazo del que muchas mujeres en esta situación suelen ser víctimas.",
  events: [
    {
      id: "m-10",
      title: "El día que la gente pez salió del mar",
      date: "10",
      day: "viernes",
      venue: "Teatro del IMSS",
      time: "18:00 hrs.",
      municipality: "Mante"
    }
  ]
};

// Data de Melissa Castellanos
export const melissaCastellanos: TamaulipecoArtist = {
  id: "mc-001",
  name: "Melissa Castellanos",
  origin: "Ciudad Mante, Tamaulipas",
  category: "Música",
  subcategory: "Música de autor",
  description: "Melissa Castellanos es una compositora, cantante y multiinstrumentista originaria de Ciudad Mante, Tamaulipas, radicada en Ciudad de México desde 2014. Su música fusiona raíces mexicanas con pop, rock y world music, creando una propuesta íntima y emocional. En 2020 lanzó Granar, su primer EP, y actualmente prepara el lanzamiento de Solata (octubre 2025), su primer álbum de larga duración. Ha participado en festivales como Vive Latino, SXSW, Tecate Comuna y Festival Marvin. Forma parte de la agrupación CENTAVRVS como acordeonista y cantante, y ha colaborado en proyectos cinematográficos y escénicos. En 2024 fue nominada a los Premios Metropolitanos de Teatro y recibió el Premio Estatal de la Juventud en Tamaulipas por su labor artística y docente. En este espectáculo, Melisa presenta su nuevo disco a través de un concierto lleno de fuerza emocional y sonoridades diversas. Solata recorre las fases del duelo con una mezcla de géneros, instrumentación variada y una puesta en escena vibrante. Más que un show, es una experiencia compartida donde el dolor se transforma en música y el público es invitado a cantar, sanar y sentir en colectivo.",
  events: [
    {
      id: "m-12",
      title: "Solata - Un concierto sobre duelo, distancia y raíz",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Mante"
    },
    {
      id: "g-11",
      title: "Solata - Un concierto sobre duelo, distancia y raíz",
      date: "11",
      day: "sábado",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "González"
    }
  ]
};

// Data de Esther Tovar
export const estherTovar: TamaulipecoArtist = {
  id: "et-001",
  name: "Esther Tovar",
  origin: "Nuevo Laredo, Tamaulipas",
  category: "Música",
  subcategory: "Bolero Feeling",
  description: "Originaria de Nuevo Laredo, Esther Tovar ha dedicado más de 20 años a la música, consolidándose como intérprete del Bolero Feeling. Su pasión por el canto la ha llevado a presentarse en escenarios de México y Estados Unidos, cautivando al público con su estilo romántico y elegante. A lo largo de su trayectoria ha participado en festivales culturales de gran relevancia, como el Festival Internacional Tamaulipas, además de lanzar producciones discográficas como Luna Nueva y Contigo en la Intimidad. Reconocida por su calidad interpretativa, ha recibido múltiples distinciones que avalan su aporte a la música y la cultura. En el Festival Internacional en la Costa del Seno Mexicano 2025, llega con \"La dama del bolero jazz\", un espectáculo que reinterpreta los clásicos del bolero fusionándolos con la improvisación y la sofisticación del jazz. Una propuesta que rinde homenaje a la tradición latina mientras ofrece nuevas sonoridades cargadas de nostalgia, intimidad y emoción.",
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

// Data de Punto Exacto
export const puntoExacto: TamaulipecoArtist = {
  id: "pe-002",
  name: "Punto Exacto",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Rock",
  description: "Punto Exacto es una banda de rock que ha estado activa en la escena profesional durante los últimos cuatro años. Su estilo se inspira en las leyendas del rock en español de los años 80, combinando riffs potentes y melodías pegajosas con letras cargadas de nostalgia, logrando un sonido único que conecta con diversas generaciones. La banda se ha destacado por su crecimiento constante, ganando reconocimiento tanto a nivel nacional como internacional. Cada presentación en vivo refleja su pasión y dedicación por el rock, ofreciendo interpretaciones enérgicas y frescas que capturan la esencia del género clásico y moderno al mismo tiempo. \"Punto exacto rock en inglés y español\" es un espectáculo que lleva al público a un viaje musical entre los grandes éxitos del rock clásico y nuevas propuestas, garantizando una experiencia enérgica e inolvidable.",
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

// Data de El Cuervo
export const elCuervo: TamaulipecoArtist = {
  id: "ec-002",
  name: "El Cuervo",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Metal sinfónico",
  description: "El Cuervo inició su trayectoria en 2013 con una propuesta dentro de la escena local, fusionando el metal sinfónico con tintes de folk y alternativo. Su estilo combina los instrumentos tradicionales del metal con teclados, saxofón, clarinete, trompeta, voz soprano y guturales, creando un sonido potente y atmosférico. La agrupación ha recorrido distintos escenarios de Tamaulipas y Nuevo León, presentándose en ciudades como Nuevo Laredo, Matamoros, Ciudad Victoria, Tampico, Monterrey y más. A lo largo de su carrera han lanzado dos álbumes: Amanecer y Los elegidos, que reúnen doce temas inéditos inspirados en la cultura y leyendas mexicanas, abordadas desde una visión introspectiva y oscura. En el Festival Internacional en la Costa del Seno Mexicano 2025, llega con \"Los elegidos\", una propuesta de metal sinfónico que reinterpreta elementos de la música popular mexicana, dotándolos de una estética sombría y poderosa que envuelve al público en una experiencia sonora diferente.",
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

// Data de Mr. Trash
export const mrTrash: TamaulipecoArtist = {
  id: "mt-001",
  name: "Mr. Trash",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Rock alternativo",
  description: "Mr. Trash es un artista musical de Tamaulipas que forma parte del proyecto conjunto con Punto Exacto y El Cuervo. Su propuesta se caracteriza por su enfoque alternativo y experimental, aportando elementos únicos al sonido conjunto del grupo.",
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
  origin: "Ciudad Victoria, Tamaulipas",
  category: "Música",
  subcategory: "Pop-Rock",
  description: "Originaria de Ciudad Victoria, Adicto5 es una banda versátil de Pop-Rock con más de 20 años de trayectoria. Fundada en 2002 bajo el nombre \"Adicción\", se ha consolidado como uno de los grupos con mayor poder de convocatoria en la capital tamaulipeca, destacándose por sus presentaciones en vivo y su cercanía con el público. Los integrantes Kankel, Alicia, Walo, Meche y Fabián aportan experiencia en producción, giras, tours de medios y shows de televisión, sumando un sello único a cada interpretación. A lo largo de su carrera, Adicto5 ha participado en giras por el estado y el país, incluyendo ediciones anteriores del FICSM y festivales internacionales, además de colaborar con reconocidos artistas como Piso 21, RBD, Belinda, Moderatto, Maria José y Yuridia. La banda también ha apoyado diversas causas benéficas, demostrando su compromiso social y cultural desde la música. En esta edición del Festival Internacional en la Costa del Seno Mexicano 2025, Adicto5 llega con el espectáculo \"Noches Adictiva5\", un recorrido musical que va desde los clásicos de los 80 hasta hits actuales, siempre con el toque rock-pop que caracteriza a la banda, respetando la esencia de cada canción y ofreciendo al público una velada cargada de energía y nostalgia.",
  events: [
    {
      id: "ma-4",
      title: "Noches Adictiva5",
      date: "4",
      day: "sábado",
      venue: "Foro Eleazar García \"Chelelo\" de la Plaza Principal \"Miguel Hidalgo\"",
      time: "19:20 hrs.",
      municipality: "Miguel Alemán"
    }
  ]
};

// Data de Hijk
export const hijk: TamaulipecoArtist = {
  id: "h-001",
  name: "HIJK Teatro",
  origin: "Nuevo Laredo, Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Wyrd es una experiencia escénica inmersiva que invita al público a habitar y transformar el escenario junto al elenco. Inspirada en la noción anglosajona de wyrd —el devenir del destino—, la obra combina teatro, performance, danza, instalación y participación directa. A través de un lenguaje escénico no convencional y una propuesta colectiva, se abordan temas como la identidad, el deseo, la memoria y la autoafirmación. Con dinámicas lúdicas, rituales, karaoke y confesiones personales, este montaje de HIJK Teatro, busca crear un espacio seguro y festivo donde público y artistas construyen juntos el sentido de la obra. HIJK Teatro es una compañía independiente de Nuevo Laredo, fundada en 2019 por un colectivo de artistas decididos a revitalizar la escena teatral local. Su objetivo es fomentar la creatividad, la colaboración y la formación de públicos a través de montajes originales y clásicos.",
  events: [
    {
      id: "t-4",
      title: "Wyrd: exploración escénica sobre destino y el ser",
      date: "4",
      day: "sábado",
      venue: "Teatro Principal del Espacio Cultural Metropolitano",
      time: "Por confirmar",
      municipality: "Tampico"
    }
  ]
};

// Data de Alex del Ángel
export const alexDelAngel: TamaulipecoArtist = {
  id: "ada-001",
  name: "Alex del Ángel",
  origin: "Tamaulipas",
  category: "Danza",
  subcategory: "Danza contemporánea y coreografía",
  description: "Alex del Ángel es un artista y coreógrafo, egresado de la \"Victoria Academy of Ballet\" y con diploma en danza profesional. Su formación se ha enriquecido internacionalmente, incluyendo estudios en danza contemporánea en \"Modus Operandi\" en Vancouver, Canadá, y experiencias con coreógrafos de renombre como Alyssa Pires, Vanessa Goodman, David Raymond y Tiffany Tregarthen. Además, ha trabajado como coreógrafo para la \"Youth Company\" de su alma mater y ha participado en eventos como Im:print 2022. Su trabajo abarca diversos estilos, desde ballet y danza contemporánea hasta Wacking/Punking, lo que le ha permitido crear propuestas artísticas versátiles y profundas. Alex ha sido reconocido recientemente con el premio \"Strike with Force 2025\" en Ciudad de México por su performance y coreografía \"Años después\", además de desempeñarse como educador en talleres de ballet para adultos principiantes y Wacking/Punking. En el FICSM 2025 presenta una pieza breve e intensa que invita al público a reflexionar sobre las experiencias de la comunidad LGBTQ+. A través de un monólogo pregrabado, música clásica y la interacción directa con el artista, la puesta en escena se convierte en una experiencia compartida, conmovedora y profundamente emotiva.",
  events: [
    {
      id: "t-4",
      title: "Años después",
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
  origin: "Reynosa, Tamaulipas",
  category: "Teatro",
  subcategory: "Teatro experimental",
  description: "Ambientada en Reynosa en los años 60, esta obra combina teatro, danza y diseño sonoro original para explorar el autodescubrimiento en contextos de migración. Un juego escénico y una narrativa íntima logran adentrarnos al sentido de pertenencia, la memoria y la posibilidad de encontrar hogar en tierra ajena de su protagonista. Interpretada por Graciela Vergara y José Becerra, la obra original de Valeria Loera Planeta propone una mirada luminosa sobre la migración: como reencuentro con uno mismo, como forma de resistencia y como un acto profundamente humano que puede romper estigmas y generar comunidad. Serendipia Teatro es un proyecto cultural independiente nacido en Reynosa, Tamaulipas en 2019, bajo la dirección de Graciela Vergara. Integrado por jóvenes artistas de la frontera norte, el grupo ha impulsado propuestas escénicas que abordan problemáticas sociales desde una mirada sensible, crítica y humanista.",
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
  origin: "Tampico, Tamaulipas",
  category: "Música",
  subcategory: "Música social interdisciplinaria",
  description: "Creado por la compositora tampiqueña Martha Cazaubon, Feminoflexia es un proyecto interdisciplinario que fusiona música, narrativa y mensaje social. Con una trayectoria que incluye colaboraciones con disqueras como Sony Music y composiciones para artistas como María del Sol e Irán Castillo, Cazaubon aporta su experiencia y sensibilidad. La obra está conformada por once canciones originales que invitan a reflexionar sobre temas como el feminicidio, la violencia intrafamiliar y la discriminación. Desde la música, Feminoflexia se convierte en un espacio de diálogo y visibilización sobre las violencias hacia las mujeres, con una mirada crítica y comprometida con los derechos humanos. En el Festival Internacional en la Costa del Seno Mexicano 2025, se presenta como una experiencia artística que trasciende el escenario y busca llevar al público hacia una vivencia profunda y necesaria en torno a la igualdad y la justicia.",
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
  origin: "Ciudad Victoria, Tamaulipas",
  category: "Música",
  subcategory: "Mexicountry",
  description: "Jimmy Yunes es un cantante, compositor, productor y músico con más de 20 años de trayectoria, originario de Ciudad Victoria. Actualmente radicado en Houston, Texas, fusiona en su propuesta artística la esencia de la música country con elementos de blues, rock y raíces latinas, creando un estilo único al que él mismo ha bautizado como \"Mexicountry\". Actualmente Jimmy impulsa su carrera como solista, ofreciendo un puente sonoro entre el country estadounidense y el corazón de la cultura latina. A lo largo de su carrera, ha recorrido escenarios en toda la República Mexicana y Estados Unidos, compartiendo cartel con grandes artistas como Emmanuel, Belanova, Elefante, 8 Segundos y Caballo Dorado. Tanto para transmitir mensajes profundos con las letras de sus canciones, como para pasar un buen rato bailando, el espectáculo de Mexicountry es una experiencia poderosa, emotiva y llena de identidad, la cual se presentará en el FICSM 2025, a través del sello distintivo de Jimmy Yunes que combina lo mejor de dos mundos.",
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
  description: "Descripción no disponible",
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
  description: "Descripción no disponible",
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
  description: "Descripción no disponible",
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
  description: "Descripción no disponible",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "ll-3",
      title: "Se realiza inauguración del Festival con su Festival de Huapango",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de Llera",
      time: "20:00 hrs.",
      municipality: "Llera"
    }
  ]
};

// Data de Internacional Orquesta de Tampico
export const internacionalOrquestaTampico: TamaulipecoArtist = {
  id: "iot-001",
  name: "La Orquesta Tampico de Claudio Rosas",
  origin: "Tampico, Tamaulipas",
  category: "Música",
  subcategory: "Música de orquesta",
  description: "Con su reconocida trayectoria, La Orquesta Tampico de Claudio Rosas llega al Festival Internacional en la Costa del Seno Mexicano para deleitar al público con un variado repertorio musical. Formada en noviembre de 1951, más de 73 años de tradición definen el estilo de la Orquesta, la cual ha destacado en eventos locales, nacionales e internacionales. Con \"Un atardecer con la Internacional Orquesta Tampico de Claudio Rosas\", entregarán un recorrido musical por temas inolvidables, para encender, tal como un atardecer, los corazones en el recuerdo del público tamaulipeco.",
  events: [
    {
      id: "t-3",
      title: "\"Un atardecer con la Internacional Orquesta Tampico de Claudio Rosas\"",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de Tula",
      time: "20:00 hrs.",
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
  description: "Originado en 1999 por los músicos Iram Nadir (guitarra y voz) y Rafael Torres (guitarra requinto y saxofón), Aldebarán Acústico nació de la pasión de dos estudiantes de la Facultad de Música de la UAT por crear un estilo propio y acústico. Han llevado su música a escenarios de todo México, participando en diversos eventos culturales para públicos de todas las edades. Su espectáculo Acusticumbias combina lo acústico con la energía contagiosa de la cumbia, reinterpretando clásicos del pop, rock y bolero con un toque fresco y bailable. Este formato versátil permite presentaciones en espacios abiertos o cerrados, ofreciendo una experiencia musical íntima y participativa donde la audiencia puede escuchar, sentir y bailar. Este año, Aldebarán Acústico llega al Festival Internacional en la Costa del Seno Mexicano 2025 con un show que celebra la riqueza de la música latina y la alegría de compartirla en comunidad, garantizando una experiencia festiva e inolvidable para todo el público.",
  events: [
    {
      id: "bs-3",
      title: "Acusticumbias",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de Bustamante",
      time: "20:00 hrs.",
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
  description: "Descripción no disponible",
  events: [
    {
      id: "h-3",
      title: "Huapangos tamaulipecos, la raíz de mi tierra",
      date: "3",
      day: "viernes",
      venue: "Plaza Principal de Hidalgo",
      time: "20:00 hrs.",
      municipality: "Hidalgo"
    },
    {
      id: "gf-12",
      title: "Huapangos tamaulipecos, la raíz de mi tierra",
      date: "12",
      day: "domingo",
      venue: "Plaza Principal de Gómez Farías",
      time: "20:00 hrs.",
      municipality: "Gómez Farías"
    }
  ]
};


// Data de Andrés Gea y su guitarra mexicana
export const andresGea: TamaulipecoArtist = {
  id: "ag-001",
  name: "Andrés Gea y su guitarra mexicana",
  origin: "Tamaulipas",
  category: "Música",
  subcategory: "Música mexicana",
  description: "Descripción no disponible",
  events: [
    {
      id: "am-12",
      title: "México y sus canciones",
      date: "12",
      day: "domingo",
      venue: "Lugar por definir",
      time: "Horario por definir",
      municipality: "Antiguo Morelos"
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
  puntoExacto,
  elCuervo,
  mrTrash,
  adicto5,
  hijk,
  alexDelAngel,
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
  grupoHondaNorT,
  andresGea
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