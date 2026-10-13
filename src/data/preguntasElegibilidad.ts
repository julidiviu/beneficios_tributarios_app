// Diccionario de datos del cuestionario de elegibilidad (spec 001 aprobada).
// Solo contenido: sin lógica de evaluación, sin UI, sin persistencia.

export interface OpcionRespuesta {
  id: string;
  titulo: string;
  textoApoyo?: string;
}

export interface BloqueInformativo {
  tipo: 'texto' | 'listado' | 'texto-listado';
  titulo: string;
  icono?: 'info' | 'documento' | 'norma' | 'destacado';
  textoApoyo?: string;
  itemsListado?: string[];
}

export interface PreguntaElegibilidad {
  id: number;
  titulo: string;
  textoApoyo: string;
  opciones: OpcionRespuesta[];
  panelInformativo: BloqueInformativo[];
}

export const PREGUNTAS_ELEGIBILIDAD: PreguntaElegibilidad[] = [
  {
    id: 1,
    titulo: '¿Tu proyecto genera energía eléctrica a partir de una Fuente No Convencional de Energía (FNCE)?',
    textoApoyo:
      'Esta pregunta nos permite identificar si tu proyecto está relacionado con la generación de energía eléctrica a partir de fuentes no convencionales y orientar las siguientes preguntas según sus características.',
    opciones: [
      { id: 'p1_op1', titulo: 'Sí, mi proyecto genera energía eléctrica a partir de una FNCE.' },
      { id: 'p1_op2', titulo: 'No, mi proyecto no genera energía eléctrica a partir de una FNCE.' },
      { id: 'p1_op3', titulo: 'No estoy seguro/a.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Qué es una FNCE?',
        icono: 'info',
        textoApoyo:
          'Las Fuentes No Convencionales de Energía incluyen fuentes como la energía solar, eólica, biomasa, geotérmica y pequeñas centrales hidroeléctricas, entre otras, según la clasificación normativa aplicable.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'No generar electricidad directamente a partir de una FNCE no significa necesariamente que debas finalizar la encuesta. Algunos proyectos pueden estar relacionados con la gestión eficiente de la energía y requieren una evaluación diferenciada.',
      },
    ],
  },
  {
    id: 2,
    titulo: '¿Cuál es el objetivo principal de tu proyecto?',
    textoApoyo:
      'Esta pregunta nos permite identificar el tipo de proyecto y adaptar las preguntas siguientes a los beneficios tributarios que podrían ser aplicables a tu caso.',
    opciones: [
      {
        id: 'p2_op1',
        titulo: 'Generar energía eléctrica a partir de una FNCE.',
        textoApoyo:
          'Proyectos de generación con fuentes como solar, eólica, biomasa, geotérmica y pequeñas hidroeléctricas, entre otras.',
      },
      {
        id: 'p2_op2',
        titulo: 'Implementar medidas de eficiencia energética.',
        textoApoyo:
          'Proyectos orientados a reducir el consumo de energía en procesos, equipos o infraestructura.',
      },
      {
        id: 'p2_op3',
        titulo: 'Desarrollar un proyecto que combine ambas alternativas.',
        textoApoyo:
          'Proyectos que integran generación de energía a partir de FNCE y medidas de eficiencia energética.',
      },
      {
        id: 'p2_op4',
        titulo: 'Desarrollar otro tipo de proyecto.',
        textoApoyo:
          'Puede incluir otras iniciativas relacionadas con innovación, almacenamiento, redes inteligentes u otras tecnologías. Su aplicabilidad deberá verificarse de acuerdo con la normativa vigente.',
      },
      {
        id: 'p2_op5',
        titulo: 'No estoy seguro/a.',
        textoApoyo: 'Puedo recibir más información sobre las opciones disponibles.',
      },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Por qué es importante?',
        icono: 'info',
        textoApoyo:
          'El objetivo del proyecto ayuda a determinar qué régimen de incentivos debe revisarse y cuáles son los requisitos técnicos y documentales correspondientes.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'La aplicabilidad de un beneficio no depende únicamente del nombre del proyecto. Es necesario revisar sus actividades, los bienes y servicios involucrados y las condiciones establecidas en la normativa vigente.',
      },
    ],
  },
  {
    id: 3,
    titulo: '¿Los bienes, equipos y servicios de tu proyecto están contemplados en el listado aplicable de la UPME?',
    textoApoyo:
      'Verifica si los equipos, elementos y servicios relacionados con tu proyecto corresponden a los conceptos contemplados en la normativa aplicable al incentivo que deseas solicitar.',
    opciones: [
      { id: 'p3_op1', titulo: 'Sí, he verificado que están incluidos.' },
      { id: 'p3_op2', titulo: 'No, he verificado que no están incluidos.' },
      { id: 'p3_op3', titulo: 'Algunos están incluidos y otros están pendientes de verificar.' },
      { id: 'p3_op4', titulo: 'No estoy seguro/a.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Qué debes revisar?',
        icono: 'info',
        textoApoyo:
          'Es importante identificar los equipos, bienes y servicios de forma clara, con sus descripciones, características técnicas y relación con las actividades del proyecto.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'La UPME establece requisitos y listados aplicables al procedimiento de certificación. Estos deben consultarse en su versión vigente, incluidas las modificaciones posteriores a las resoluciones inicialmente expedidas. No basta con que un equipo esté relacionado con energías renovables: debe verificarse su correspondencia con los requisitos específicos aplicables al proyecto y al incentivo solicitado.',
      },
    ],
  },
  {
    id: 4,
    titulo: '¿Cuentas con la certificación de la UPME para tu proyecto?',
    textoApoyo:
      'La certificación es un elemento fundamental del procedimiento para acceder a los incentivos que la requieren. Indica cuál es la situación actual de tu proyecto.',
    opciones: [
      { id: 'p4_op1', titulo: 'Sí, cuento con la certificación correspondiente.' },
      { id: 'p4_op2', titulo: 'No, todavía no he solicitado la certificación.' },
      { id: 'p4_op3', titulo: 'La solicitud está en trámite.' },
      { id: 'p4_op4', titulo: 'La solicitud fue presentada, pero requiere ajustes o información adicional.' },
      { id: 'p4_op5', titulo: 'No estoy seguro/a.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Por qué es importante?',
        icono: 'info',
        textoApoyo:
          'La certificación permite acreditar los aspectos del proyecto que han sido evaluados por la autoridad competente y sirve de soporte para los trámites relacionados con los beneficios que la requieren.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'Si aún no tienes la certificación, puedes continuar con la encuesta. El sistema identificará que este requisito debe revisarse y te orientará sobre los pasos siguientes. La certificación y las condiciones de aplicación tributaria deben analizarse según el incentivo específico y las disposiciones vigentes.',
      },
      {
        tipo: 'listado',
        titulo: 'Normativa de referencia:',
        icono: 'norma',
        itemsListado: [
          'Ley 1715 de 2014.',
          'Ley 2099 de 2021.',
          'Decreto 1625 de 2016.',
          'Resoluciones y lineamientos vigentes de la UPME aplicables al procedimiento.',
        ],
      },
    ],
  },
  {
    id: 5,
    titulo: '¿La empresa o el solicitante cuenta con la documentación técnica, jurídica y financiera requerida?',
    textoApoyo:
      'Esta pregunta permite identificar si dispones de la información necesaria para sustentar las características del proyecto y avanzar en la verificación de los requisitos aplicables.',
    opciones: [
      { id: 'p5_op1', titulo: 'Sí, contamos con toda la documentación requerida.' },
      { id: 'p5_op2', titulo: 'Tenemos parte de la documentación, pero nos faltan algunos soportes.' },
      { id: 'p5_op3', titulo: 'No contamos con la documentación en este momento.' },
      { id: 'p5_op4', titulo: 'No estoy seguro/a.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto-listado',
        titulo: '¿Qué documentos se suelen requerir?',
        icono: 'documento',
        textoApoyo:
          'La documentación puede variar según el tipo de proyecto y el beneficio solicitado, pero puede incluir:',
        itemsListado: [
          'Descripción técnica del proyecto.',
          'Diseños, planos, diagramas y memorias de cálculo.',
          'Diagramas unifilares, cuando correspondan.',
          'Fichas técnicas de los equipos y sus proveedores.',
          'Cotizaciones y cronograma de ejecución.',
          'Identificación del solicitante y documentos tributarios pertinentes.',
          'Documentos de existencia y representación legal, cuando corresponda.',
          'Estados financieros y autorizaciones corporativas, cuando sean aplicables.',
          'Documentos adicionales exigidos por el procedimiento vigente.',
        ],
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'La documentación debe ser consistente, estar actualizada y corresponder al proyecto presentado. La lista anterior es orientativa y no reemplaza la lista oficial de requisitos aplicable a cada solicitud.',
      },
      {
        tipo: 'texto',
        titulo: 'Normativa de referencia:',
        icono: 'norma',
        textoApoyo:
          'Ley 1715 de 2014, Ley 2099 de 2021, Decreto 1625 de 2016 y disposiciones vigentes de la UPME.',
      },
    ],
  },
  {
    id: 6,
    titulo: '¿La inversión del proyecto está debidamente soportada y se puede relacionar con el proyecto de FNCE o gestión eficiente de la energía?',
    textoApoyo:
      'Esta pregunta permite verificar si cuentas con soportes que acrediten la inversión y su relación directa con el proyecto.',
    opciones: [
      {
        id: 'p6_op1',
        titulo:
          'Sí, cuento con cotizaciones, contratos, facturas y demás soportes que acreditan la inversión y su relación con el proyecto.',
      },
      {
        id: 'p6_op2',
        titulo: 'Parcialmente, cuento con algunos soportes, pero me faltan documentos importantes.',
      },
      { id: 'p6_op3', titulo: 'No, aún no cuento con los soportes necesarios.' },
      { id: 'p6_op4', titulo: 'La inversión todavía no se ha realizado.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Qué se evalúa en esta pregunta?',
        icono: 'info',
        textoApoyo:
          'Se busca identificar si existe documentación suficiente para relacionar los costos, adquisiciones o servicios con las actividades y los elementos del proyecto.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'Los soportes pueden incluir cotizaciones, contratos, facturas, órdenes de compra, comprobantes de pago, fichas técnicas y otros documentos pertinentes. La documentación debe ser clara, verificable y consistente con la información del proyecto. Los documentos exigibles pueden variar según la etapa de ejecución y el incentivo evaluado.',
      },
      {
        tipo: 'texto',
        titulo: 'Mensaje destacado:',
        icono: 'destacado',
        textoApoyo:
          'Una inversión bien soportada hace más sólido tu proyecto. Con la documentación adecuada, podrás avanzar en la verificación de los requisitos necesarios para evaluar la aplicación de los beneficios tributarios.',
      },
    ],
  },
  {
    id: 7,
    titulo: '¿En qué etapa se encuentra actualmente tu proyecto?',
    textoApoyo:
      'La etapa de desarrollo permite identificar qué documentación podría estar disponible y cuáles son los siguientes pasos recomendados.',
    opciones: [
      { id: 'p7_op1', titulo: 'Idea o planeación inicial.' },
      { id: 'p7_op2', titulo: 'Diseño y estudios técnicos.' },
      { id: 'p7_op3', titulo: 'Compra de equipos o contratación de servicios.' },
      { id: 'p7_op4', titulo: 'Construcción o implementación.' },
      { id: 'p7_op5', titulo: 'Proyecto en operación.' },
      { id: 'p7_op6', titulo: 'Proyecto terminado o inversión ya realizada.' },
      { id: 'p7_op7', titulo: 'Otra etapa.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Por qué es importante?',
        icono: 'info',
        textoApoyo:
          'Los soportes disponibles y las actuaciones que deben adelantarse pueden variar según la etapa del proyecto.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'La etapa de ejecución no determina por sí sola la elegibilidad. Es necesario verificar las reglas aplicables al beneficio solicitado, las fechas relevantes, la documentación y las condiciones exigidas por la normativa vigente.',
      },
    ],
  },
  {
    id: 8,
    titulo: '¿Quién solicita o pretende aplicar los beneficios tributarios?',
    textoApoyo:
      'Identificar al solicitante permite orientar la revisión de los requisitos jurídicos, tributarios y documentales correspondientes.',
    opciones: [
      { id: 'p8_op1', titulo: 'Persona natural.' },
      { id: 'p8_op2', titulo: 'Empresa o persona jurídica.' },
      { id: 'p8_op3', titulo: 'Consorcio, unión temporal u otro esquema asociativo.' },
      { id: 'p8_op4', titulo: 'Otro tipo de solicitante.' },
      { id: 'p8_op5', titulo: 'Aún no está definido.' },
      { id: 'p8_op6', titulo: 'No estoy seguro/a.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto',
        titulo: '¿Qué debes tener en cuenta?',
        icono: 'info',
        textoApoyo:
          'La identificación del solicitante es importante para revisar los documentos requeridos, las responsabilidades tributarias y las condiciones que deben cumplirse para aplicar el beneficio.',
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'La posibilidad de acceder a un incentivo debe verificarse según el régimen aplicable, las características del solicitante y las condiciones específicas del beneficio. No debe asumirse que todas las figuras jurídicas tienen idéntico tratamiento.',
      },
    ],
  },
  {
    id: 9,
    titulo: '¿Los bienes, equipos y servicios de tu proyecto están identificados individualmente?',
    textoApoyo:
      'Para evaluar el proyecto es importante identificar los elementos que lo integran y relacionarlos con su función, sus características técnicas y la inversión correspondiente.',
    opciones: [
      { id: 'p9_op1', titulo: 'Sí, están identificados con descripción, referencia y proveedor.' },
      { id: 'p9_op2', titulo: 'Parcialmente, algunos elementos están identificados.' },
      { id: 'p9_op3', titulo: 'No, todavía no están identificados individualmente.' },
      { id: 'p9_op4', titulo: 'No estoy seguro/a.' },
    ],
    panelInformativo: [
      {
        tipo: 'texto-listado',
        titulo: '¿Qué información puede ser útil?',
        icono: 'info',
        textoApoyo: 'Según corresponda, conviene contar con:',
        itemsListado: [
          'Nombre y descripción del bien o servicio.',
          'Referencia o modelo del equipo.',
          'Fabricante o proveedor.',
          'Ficha técnica.',
          'Cantidad y valor.',
          'Función dentro del proyecto.',
          'Cotización, contrato, factura u otro soporte pertinente.',
        ],
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'La información debe permitir comprobar la relación entre los elementos, el proyecto y el incentivo que se pretende evaluar. Los requisitos específicos deben contrastarse con las disposiciones vigentes de la UPME y las reglas aplicables a cada beneficio.',
      },
    ],
  },
  {
    id: 10,
    titulo: '¿Qué beneficio tributario deseas evaluar para tu proyecto?',
    textoApoyo:
      'Selecciona el incentivo que te interesa. Si todavía no lo tienes claro, puedes solicitar una orientación preliminar sobre los beneficios que podrían ser pertinentes para tu caso.',
    opciones: [
      {
        id: 'p10_op1',
        titulo: 'Deducción especial en el impuesto sobre la renta.',
        textoApoyo:
          'Evaluación de los requisitos aplicables a la deducción de inversiones elegibles, de acuerdo con la normativa vigente.',
      },
      {
        id: 'p10_op2',
        titulo: 'Exclusión del IVA.',
        textoApoyo:
          'Evaluación de la posible aplicación de la exclusión del impuesto sobre las ventas a los bienes o servicios que cumplan las condiciones correspondientes.',
      },
      {
        id: 'p10_op3',
        titulo: 'Exención de derechos arancelarios.',
        textoApoyo:
          'Evaluación de los requisitos aplicables a la exención de derechos arancelarios para las importaciones elegibles.',
      },
      {
        id: 'p10_op4',
        titulo: 'Depreciación acelerada.',
        textoApoyo:
          'Evaluación de las condiciones aplicables al tratamiento de depreciación de los activos que cumplan los requisitos legales.',
      },
      {
        id: 'p10_op5',
        titulo: 'Quiero evaluar todos los beneficios aplicables.',
        textoApoyo:
          'El sistema orientará la revisión de los incentivos que podrían corresponder a las características de mi proyecto.',
      },
      {
        id: 'p10_op6',
        titulo: 'No estoy seguro/a.',
        textoApoyo: 'Necesito orientación para identificar qué beneficios conviene revisar.',
      },
    ],
    panelInformativo: [
      {
        tipo: 'texto-listado',
        titulo: 'Beneficios que pueden aplicar según el proyecto',
        icono: 'info',
        textoApoyo:
          'Dependiendo del tipo de proyecto, los bienes o servicios involucrados, el solicitante y el cumplimiento de los requisitos legales, pueden evaluarse beneficios como:',
        itemsListado: [
          'Deducción especial en el impuesto sobre la renta.',
          'Exclusión del IVA.',
          'Exención de derechos arancelarios.',
          'Depreciación acelerada.',
        ],
      },
      {
        tipo: 'texto',
        titulo: 'Ten en cuenta',
        icono: 'documento',
        textoApoyo:
          'No todos los beneficios aplican automáticamente a todos los proyectos. Cada incentivo tiene condiciones propias, por lo que debe evaluarse de manera individual.',
      },
    ],
  },
];
