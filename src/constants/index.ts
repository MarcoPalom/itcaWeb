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
