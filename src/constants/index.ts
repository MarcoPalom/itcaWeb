import { PanelProps } from "@/components/Section3/Panel";

export const SITE_NAME = "ITCA Web";

// Imágenes de la sección 2
export const stockImages = ["/agenda.png", "casa.jpg", "cerro1.jpg"];

// Títulos de la sección 2
export const stockTitles = [
  "AGENDA CULTURAL",
  "CONOCE LOS ESPACIOS CULTURALES",
  "CONOCE LOS EVENTOS EN TU LOCALIDAD",
];

// Variantes de animación para la sección 2
export const imageVariants = {
  down: {
    initial: {
      y: -100,
      opacity: 0,
      scale: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: 100,
      opacity: 0,
      scale: 1,
    },
  },
  up: {
    initial: {
      y: 100,
      opacity: 0,
      scale: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
      scale: 1,
    },
  },
};

export const cerroImages = [
  "/cerro-pixel-01.png",
  "/cerro-pixel-02.png",
  "/cerro-pixel-03.png",
  "/cerro-pixel-04.png",
];

export const panels: PanelProps[] = [
  {
    orientation: "left",
    image: "/cerro-pixel-01.png",
    badge: "19 87",
    items: [
      "Programa Nacional de Teatro Escolar",
      "Muestra Estatal de Teatro Rafael Solana",
      "Red de Colectivos Culturales Comunitarios",
    ],
    descriptions: [
      "Descripción del Programa Nacional de Teatro Escolar.",
      "Descripción de la Muestra Estatal de Teatro Rafael Solana.",
      "Descripción de la Red de Colectivos Culturales Comunitarios.",
    ],
    defaultDescription:
      "Esta dirección ejecuta todas aquellas actividades relacionadas con teatro, danza, música, artes plásticas y cine; así como actividades vinculadas con el desarrollo cultural comunitario, el estímulo a la creación, la promoción artística y la descentralización de los bienes y servicios culturales. Además se apoya a la formación de públicos y artistas de acuerdo al Plan Estatal de Desarrollo y a las políticas del Instituto Tamaulipeco para la Cultura y las Artes.",
  },
  {
    orientation: "right",
    image: "/cerro-pixel-02.png",
    badge: "19 87",
    items: ["lorem ipsum", "lorem ipsum2", "lorem ipsum3"],
    descriptions: [
      "Descripción de los cursos, talleres, congresos y festivales.",
    ],
    defaultDescription:
      "La Dirección de Educación y Desarrollo Artístico crea cultura mediante la enseñanza de  las artes y oficios desde un punto de vista contemporáneo para poder llegar a la infancia y juventud tamaulipeca. El trabajo está en hacer que los centros de cultura, ya existentes, sean un centro de reunión familiar y no lugares que se visiten una vez al año.",
  },
  {
    orientation: "left",
    image: "/cerro-pixel-03.png",
    badge: "19 87",
    items: [
      "Programa de Apoyo a las Culturas Municipales y Comunitarias",
      "Programa De Desarrollo Cultural De La Huasteca",
    ],
    descriptions: [
      "Descripción del Programa de Apoyo a las Culturas Municipales y Comunitarias.",
      "Descripción del Programa De Desarrollo Cultural De La Huasteca.",
    ],
    defaultDescription:
      "Fortalece la identidad cultural por medio de la gestión y ejecución de actividades que redunden en el fomento de las tradiciones, el arte popular, estilo de vida y prácticas históricas que promuevan la participación social para la conservación y preservación del patrimonio cultural tamaulipeco. De igual manera se aplican políticas de protección y conservación del patrimonio histórico de la entidad.",
  },
  {
    orientation: "right",
    image: "/cerro-pixel-04.png",
    badge: "19 87",
    items: ["lorem ipsum4", "lorem ipsum5", "lorem ipsum6"],
    descriptions: [
      "Descripción de los cursos, talleres, congresos y festivales.",
    ],
    defaultDescription:
      "Área encargada del fomento y difusión de la literatura, en especial de la realizada por escritores tamaulipecos. Coordinación y seguimiento a Salas de Lectura y Paralibros con los que cuenta el estado. Realización de convocatorias para concursos, edición y publicación de las obras de los autores locales. Desarrollar y llevar a cabo los programas para el fomento y difusión de la literatura.",
  },
];

// Importar tipos compartidos
export * from './types';

// Importar data del Festival de Nuevo Laredo
export * from './Municipios/nvData';

// Importar data del Festival del Municipio Guerrero
export * from './Municipios/guerreroData';

// Importar data del Festival del Municipio Mier
export * from './Municipios/mierData';

// Importar data del Festival del Municipio Miguel Alemán
export * from './Municipios/miguelAlemanData';

// Importar data del Festival del Municipio Camargo
export * from './Municipios/camargoData';

// Importar data del Festival del Municipio Gustavo Díaz Ordaz
export * from './Municipios/gustavoDiazOrdazData';

// Importar data del Festival del Municipio Reynosa
export * from './Municipios/reynosaData';

// Importar data del Festival del Municipio Río Bravo
export * from './Municipios/rioBravoData';

// Importar data del Festival del Municipio Valle Hermoso
export * from './Municipios/valleHermosoData';

// Importar data del Festival del Municipio Matamoros
export * from './Municipios/matamorosData';

// Importar data del Festival del Municipio Méndez
export * from './Municipios/mendezData';

// Importar data del Festival del Municipio San Fernando
export * from './Municipios/sanFernandoData';

// Importar data del Festival del Municipio Burgos
export * from './Municipios/burgosData';

// Importar data del Festival del Municipio San Nicolás
export * from './Municipios/sanNicolasData';

// Importar data del Festival del Municipio San Carlos
export * from './Municipios/sanCarlosData';

// Importar data del Festival del Municipio Mainero
export * from './Municipios/maineroData';

// Importar data del Festival del Municipio Villagrán
export * from './Municipios/villagranData';

// Importar data del Festival del Municipio Hidalgo
export * from './Municipios/hidalgoData';

// Importar data del Festival del Municipio Jiménez
export * from './Municipios/jimenezData';

// Importar data del Festival del Municipio Abasolo
export * from './Municipios/abasoloData';

// Importar data del Festival del Municipio Soto la Marina
export * from './Municipios/sotoLaMarinaData';

// Importar data del Festival del Municipio Padilla
export * from './Municipios/padillaData';

// Importar data del Festival del Municipio Güémez
export * from './Municipios/guemezData';

// Importar data del Festival del Municipio Casas
export * from './Municipios/casasData';

// Importar data del Festival del Municipio Victoria
export * from './Municipios/victoriaData';

// Importar data del Festival del Municipio Llera
export * from './Municipios/lleraData';

// Importar data del Festival del Municipio Jaumave
export * from './Municipios/jaumaveData';

// Importar data del Festival del Municipio Bustamante
export * from './Municipios/bustamanteData';

// Importar data del Festival del Municipio Miquihuana
export * from './Municipios/miquihuanaData';

// Importar data del Festival del Municipio Palmillas
export * from './Municipios/palmillasData';

// Importar data del Festival del Municipio Tula
export * from './Municipios/tulaData';

// Importar data del Festival del Municipio Ocampo
export * from './Municipios/ocampoData';

// Importar data del Festival del Municipio Xicoténcatl
export * from './Municipios/xicotencatlData';

// Importar data del Festival del Municipio Gómez Farías
export * from './Municipios/gomezFariasData';

// Importar data del Festival del Municipio Mante
export * from './Municipios/manteData';

// Importar data del Festival del Municipio Nuevo Morelos
export * from './Municipios/nuevoMorelosData';

// Importar data del Festival del Municipio Antiguo Morelos
export * from './Municipios/antiguoMorelosData';

// Importar data del Festival del Municipio González
export * from './Municipios/gonzalezData';

// Importar data del Festival del Municipio Aldama
export * from './Municipios/aldamaData';

// Importar data del Festival del Municipio Altamira
export * from './Municipios/altamiraData';

// Importar data del Festival del Municipio Madero
export * from './Municipios/maderoData';

// Importar data del Festival del Municipio Tampico
export * from './Municipios/tampicoData';
