# Spec 001 — Cuestionario de Elegibilidad (Diccionario de Datos)

- **Estado:** Borrador pendiente de aprobación. Sin esta aprobación no hay código (constitución, principio 2).
- **Alcance:** Solo tipos TypeScript y constante `PREGUNTAS_ELEGIBILIDAD` con las 10 preguntas, opciones y paneles informativos. Archivo destino: `src/data/preguntasElegibilidad.ts`.
- **Fuera de alcance:** Reglas de resultado/elegibilidad, `PreguntaCard`, `EncuestaView`, persistencia en `localStorage`, pantalla de resultado. Encuesta en secuencia simple, sin etapas; el progreso se muestra como "Pregunta N de 10".

## Requisitos generales (EARS)

- **REQ-01:** El sistema DEBE exponer las interfaces `OpcionRespuesta { id, titulo, textoApoyo? }`, `BloqueInformativo { tipo: 'texto' | 'listado' | 'texto-listado', titulo, icono?, textoApoyo?, itemsListado? }` (`icono?: 'info' | 'documento' | 'norma' | 'destacado'`, enmienda aprobada: cada bloque lleva icono para el panel lateral) y `PreguntaElegibilidad { id, titulo, textoApoyo, opciones, panelInformativo }`.
- **REQ-02:** El sistema DEBE exponer `PREGUNTAS_ELEGIBILIDAD: PreguntaElegibilidad[]` con exactamente 10 elementos, `id` numérico del 1 al 10 en orden.
- **REQ-03:** Cada opción DEBE tener `id` cadena única con formato `p{id}_op{n}` (ej. `p1_op1`).
- **REQ-04:** Cuando un bloque incluya puntos (normativa, documentos), el sistema DEBE usar `tipo: 'listado'` o `'texto-listado'` con los ítems en `itemsListado`.
- **REQ-05:** Los textos de UI DEBEN estar en español (constitución, principio 6).

## Contenido (transcripción literal de la data aprobada)

### P1 — ¿Tu proyecto genera energía eléctrica a partir de una Fuente No Convencional de Energía (FNCE)?
- Apoyo: Esta pregunta nos permite identificar si tu proyecto está relacionado con la generación de energía eléctrica a partir de fuentes no convencionales y orientar las siguientes preguntas según sus características.
- Opciones (`p1_op1`…`p1_op3`): Sí, mi proyecto genera energía eléctrica a partir de una FNCE. | No, mi proyecto no genera energía eléctrica a partir de una FNCE. | No estoy seguro/a.
- Panel: [texto] ¿Qué es una FNCE? — Las Fuentes No Convencionales de Energía incluyen fuentes como la energía solar, eólica, biomasa, geotérmica y pequeñas centrales hidroeléctricas, entre otras, según la clasificación normativa aplicable. | [texto] Ten en cuenta — No generar electricidad directamente a partir de una FNCE no significa necesariamente que debas finalizar la encuesta. Algunos proyectos pueden estar relacionados con la gestión eficiente de la energía y requieren una evaluación diferenciada.

### P2 — ¿Cuál es el objetivo principal de tu proyecto?
- Apoyo: Esta pregunta nos permite identificar el tipo de proyecto y adaptar las preguntas siguientes a los beneficios tributarios que podrían ser aplicables a tu caso.
- Opciones (`p2_op1`…`p2_op5`, con titulo + textoApoyo): Generar energía eléctrica a partir de una FNCE. / Proyectos de generación con fuentes como solar, eólica, biomasa, geotérmica y pequeñas hidroeléctricas, entre otras. | Implementar medidas de eficiencia energética. / Proyectos orientados a reducir el consumo de energía en procesos, equipos o infraestructura. | Desarrollar un proyecto que combine ambas alternativas. / Proyectos que integran generación de energía a partir de FNCE y medidas de eficiencia energética. | Desarrollar otro tipo de proyecto. / Puede incluir otras iniciativas relacionadas con innovación, almacenamiento, redes inteligentes u otras tecnologías. Su aplicabilidad deberá verificarse de acuerdo con la normativa vigente. | No estoy seguro/a. / Puedo recibir más información sobre las opciones disponibles.
- Panel: [texto] ¿Por qué es importante? — El objetivo del proyecto ayuda a determinar qué régimen de incentivos debe revisarse y cuáles son los requisitos técnicos y documentales correspondientes. | [texto] Ten en cuenta — La aplicabilidad de un beneficio no depende únicamente del nombre del proyecto. Es necesario revisar sus actividades, los bienes y servicios involucrados y las condiciones establecidas en la normativa vigente.

### P3 — ¿Los bienes, equipos y servicios de tu proyecto están contemplados en el listado aplicable de la UPME?
- Apoyo: Verifica si los equipos, elementos y servicios relacionados con tu proyecto corresponden a los conceptos contemplados en la normativa aplicable al incentivo que deseas solicitar.
- Opciones (`p3_op1`…`p3_op4`): Sí, he verificado que están incluidos. | No, he verificado que no están incluidos. | Algunos están incluidos y otros están pendientes de verificar. | No estoy seguro/a.
- Panel: [texto] ¿Qué debes revisar? — Es importante identificar los equipos, bienes y servicios de forma clara, con sus descripciones, características técnicas y relación con las actividades del proyecto. | [texto] Ten en cuenta — La UPME establece requisitos y listados aplicables al procedimiento de certificación. Estos deben consultarse en su versión vigente, incluidas las modificaciones posteriores a las resoluciones inicialmente expedidas. No basta con que un equipo esté relacionado con energías renovables: debe verificarse su correspondencia con los requisitos específicos aplicables al proyecto y al incentivo solicitado.

### P4 — ¿Cuentas con la certificación de la UPME para tu proyecto?
- Apoyo: La certificación es un elemento fundamental del procedimiento para acceder a los incentivos que la requieren. Indica cuál es la situación actual de tu proyecto.
- Opciones (`p4_op1`…`p4_op5`): Sí, cuento con la certificación correspondiente. | No, todavía no he solicitado la certificación. | La solicitud está en trámite. | La solicitud fue presentada, pero requiere ajustes o información adicional. | No estoy seguro/a.
- Panel: [texto] ¿Por qué es importante? — La certificación permite acreditar los aspectos del proyecto que han sido evaluados por la autoridad competente y sirve de soporte para los trámites relacionados con los beneficios que la requieren. | [texto] Ten en cuenta — Si aún no tienes la certificación, puedes continuar con la encuesta. El sistema identificará que este requisito debe revisarse y te orientará sobre los pasos siguientes. La certificación y las condiciones de aplicación tributaria deben analizarse según el incentivo específico y las disposiciones vigentes. | [listado] Normativa de referencia: — Ley 1715 de 2014. | Ley 2099 de 2021. | Decreto 1625 de 2016. | Resoluciones y lineamientos vigentes de la UPME aplicables al procedimiento.

### P5 — ¿La empresa o el solicitante cuenta con la documentación técnica, jurídica y financiera requerida?
- Apoyo: Esta pregunta permite identificar si dispones de la información necesaria para sustentar las características del proyecto y avanzar en la verificación de los requisitos aplicables.
- Opciones (`p5_op1`…`p5_op4`): Sí, contamos con toda la documentación requerida. | Tenemos parte de la documentación, pero nos faltan algunos soportes. | No contamos con la documentación en este momento. | No estoy seguro/a.
- Panel: [texto-listado] ¿Qué documentos se suelen requerir? — La documentación puede variar según el tipo de proyecto y el beneficio solicitado, pero puede incluir: | Descripción técnica del proyecto. | Diseños, planos, diagramas y memorias de cálculo. | Diagramas unifilares, cuando correspondan. | Fichas técnicas de los equipos y sus proveedores. | Cotizaciones y cronograma de ejecución. | Identificación del solicitante y documentos tributarios pertinentes. | Documentos de existencia y representación legal, cuando corresponda. | Estados financieros y autorizaciones corporativas, cuando sean aplicables. | Documentos adicionales exigidos por el procedimiento vigente. | [texto] Ten en cuenta — La documentación debe ser consistente, estar actualizada y corresponder al proyecto presentado. La lista anterior es orientativa y no reemplaza la lista oficial de requisitos aplicable a cada solicitud. | [texto] Normativa de referencia: — Ley 1715 de 2014, Ley 2099 de 2021, Decreto 1625 de 2016 y disposiciones vigentes de la UPME.

### P6 — ¿La inversión del proyecto está debidamente soportada y se puede relacionar con el proyecto de FNCE o gestión eficiente de la energía?
- Apoyo: Esta pregunta permite verificar si cuentas con soportes que acrediten la inversión y su relación directa con el proyecto.
- Opciones (`p6_op1`…`p6_op4`): Sí, cuento con cotizaciones, contratos, facturas y demás soportes que acreditan la inversión y su relación con el proyecto. | Parcialmente, cuento con algunos soportes, pero me faltan documentos importantes. | No, aún no cuento con los soportes necesarios. | La inversión todavía no se ha realizado.
- Panel: [texto] ¿Qué se evalúa en esta pregunta? — Se busca identificar si existe documentación suficiente para relacionar los costos, adquisiciones o servicios con las actividades y los elementos del proyecto. | [texto] Ten en cuenta — Los soportes pueden incluir cotizaciones, contratos, facturas, órdenes de compra, comprobantes de pago, fichas técnicas y otros documentos pertinentes. La documentación debe ser clara, verificable y consistente con la información del proyecto. Los documentos exigibles pueden variar según la etapa de ejecución y el incentivo evaluado. | [texto] Mensaje destacado: — Una inversión bien soportada hace más sólido tu proyecto. Con la documentación adecuada, podrás avanzar en la verificación de los requisitos necesarios para evaluar la aplicación de los beneficios tributarios.

### P7 — ¿En qué etapa se encuentra actualmente tu proyecto?
- Apoyo: La etapa de desarrollo permite identificar qué documentación podría estar disponible y cuáles son los siguientes pasos recomendados.
- Opciones (`p7_op1`…`p7_op7`): Idea o planeación inicial. | Diseño y estudios técnicos. | Compra de equipos o contratación de servicios. | Construcción o implementación. | Proyecto en operación. | Proyecto terminado o inversión ya realizada. | Otra etapa.
- Panel: [texto] ¿Por qué es importante? — Los soportes disponibles y las actuaciones que deben adelantarse pueden variar según la etapa del proyecto. | [texto] Ten en cuenta — La etapa de ejecución no determina por sí sola la elegibilidad. Es necesario verificar las reglas aplicables al beneficio solicitado, las fechas relevantes, la documentación y las condiciones exigidas por la normativa vigente.

### P8 — ¿Quién solicita o pretende aplicar los beneficios tributarios?
- Apoyo: Identificar al solicitante permite orientar la revisión de los requisitos jurídicos, tributarios y documentales correspondientes.
- Opciones (`p8_op1`…`p8_op6`): Persona natural. | Empresa o persona jurídica. | Consorcio, unión temporal u otro esquema asociativo. | Otro tipo de solicitante. | Aún no está definido. | No estoy seguro/a.
- Panel: [texto] ¿Qué debes tener en cuenta? — La identificación del solicitante es importante para revisar los documentos requeridos, las responsabilidades tributarias y las condiciones que deben cumplirse para aplicar el beneficio. | [texto] Ten en cuenta — La posibilidad de acceder a un incentivo debe verificarse según el régimen aplicable, las características del solicitante y las condiciones específicas del beneficio. No debe asumirse que todas las figuras jurídicas tienen idéntico tratamiento.

### P9 — ¿Los bienes, equipos y servicios de tu proyecto están identificados individualmente?
- Apoyo: Para evaluar el proyecto es importante identificar los elementos que lo integran y relacionarlos con su función, sus características técnicas y la inversión correspondiente.
- Opciones (`p9_op1`…`p9_op4`): Sí, están identificados con descripción, referencia y proveedor. | Parcialmente, algunos elementos están identificados. | No, todavía no están identificados individualmente. | No estoy seguro/a.
- Panel: [texto-listado] ¿Qué información puede ser útil? — Según corresponda, conviene contar con: | Nombre y descripción del bien o servicio. | Referencia o modelo del equipo. | Fabricante o proveedor. | Ficha técnica. | Cantidad y valor. | Función dentro del proyecto. | Cotización, contrato, factura u otro soporte pertinente. | [texto] Ten en cuenta — La información debe permitir comprobar la relación entre los elementos, el proyecto y el incentivo que se pretende evaluar. Los requisitos específicos deben contrastarse con las disposiciones vigentes de la UPME y las reglas aplicables a cada beneficio.

### P10 — ¿Qué beneficio tributario deseas evaluar para tu proyecto?
- Apoyo: Selecciona el incentivo que te interesa. Si todavía no lo tienes claro, puedes solicitar una orientación preliminar sobre los beneficios que podrían ser pertinentes para tu caso.
- Opciones (`p10_op1`…`p10_op6`, con titulo + textoApoyo): Deducción especial en el impuesto sobre la renta. / Evaluación de los requisitos aplicables a la deducción de inversiones elegibles, de acuerdo con la normativa vigente. | Exclusión del IVA. / Evaluación de la posible aplicación de la exclusión del impuesto sobre las ventas a los bienes o servicios que cumplan las condiciones correspondientes. | Exención de derechos arancelarios. / Evaluación de los requisitos aplicables a la exención de derechos arancelarios para las importaciones elegibles. | Depreciación acelerada. / Evaluación de las condiciones aplicables al tratamiento de depreciación de los activos que cumplan los requisitos legales. | Quiero evaluar todos los beneficios aplicables. / El sistema orientará la revisión de los incentivos que podrían corresponder a las características de mi proyecto. | No estoy seguro/a. / Necesito orientación para identificar qué beneficios conviene revisar.
- Panel: [texto-listado] Beneficios que pueden aplicar según el proyecto — Dependiendo del tipo de proyecto, los bienes o servicios involucrados, el solicitante y el cumplimiento de los requisitos legales, pueden evaluarse beneficios como: | Deducción especial en el impuesto sobre la renta. | Exclusión del IVA. | Exención de derechos arancelarios. | Depreciación acelerada. | [texto] Ten en cuenta — No todos los beneficios aplican automáticamente a todos los proyectos. Cada incentivo tiene condiciones propias, por lo que debe evaluarse de manera individual.

## Criterios de aceptación

- [ ] `src/data/preguntasElegibilidad.ts` exporta las 3 interfaces y `PREGUNTAS_ELEGIBILIDAD` con 10 preguntas en orden.
- [ ] Conteo de opciones por pregunta: P1=3, P2=5, P3=4, P4=5, P5=4, P6=4, P7=7, P8=6, P9=4, P10=6.
- [ ] P2 y P10 usan `titulo` + `textoApoyo` en cada opción; el resto solo `titulo`.
- [ ] Normativas (P4, P5) y listados (P5, P9, P10) van en `itemsListado`, no pegados en `textoApoyo`.
- [ ] Cada uno de los 23 bloques informativos tiene `icono` asignado según el mapeo aprobado.
- [ ] `tsc --noEmit` y `npm run build` en verde. Sin dependencias nuevas.
