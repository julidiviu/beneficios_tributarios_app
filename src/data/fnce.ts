// Diccionario de la pestaña FNCE: solo contenido, sin UI.
// Se amplía por secciones: hero + concepto básico + fuentes.
export type IconoFnce =
  | "sostenible"
  | "incentivos"
  | "ruta"
  | "diversificacion"
  | "hoja"
  | "moneda"
  | "solar"
  | "eolica"
  | "calor"
  | "generacion"
  | "agua"
  | "hidrogeno"
  | "hidrogeno-azul"
  | "arriba"
  | "diagonal";

export interface TarjetaAccesoFnce {
  icono: IconoFnce;
  titulo: string;
  bajanta: string;
}

export interface HeroFnce {
  distintivo: string;
  titulo: string;
  descripcion: string;
  cta: string;
  destinoCta: string;
  tarjetas: TarjetaAccesoFnce[];
}

export interface ConceptoFnce {
  kicker: string;
  titulo: string;
  bajanta: string;
  conceptoTitulo: string;
  conceptoTexto: string;
  marcoTitulo: string;
  marcoItems: string[];
  marcoTexto: string;
  importanciaTitulo: string;
  importancia: TarjetaAccesoFnce[];
}

export const HERO_FNCE: HeroFnce = {
  distintivo: "GUÍA PARA EMPRESAS Y PROYECTOS",
  titulo: "¿Tu proyecto puede acceder a beneficios tributarios?",
  descripcion:
    "Conoce las oportunidades de la Ley 1715 de 2014 y la Ley 2099 de 2021 para proyectos de Fuentes No Convencionales de Energía.",
  cta: "Explora las FNCE y sus incentivos",
  destinoCta: "#accesos",
  tarjetas: [
    {
      icono: "sostenible",
      titulo: "Energía sostenible",
      bajanta: "Sol, viento, calor terrestre, biomasa y más.",
    },
    {
      icono: "incentivos",
      titulo: "Incentivos tributarios",
      bajanta: "Renta, IVA, aranceles y depreciación acelerada.",
    },
    {
      icono: "ruta",
      titulo: "Ruta de acceso",
      bajanta: "Conoce el proceso de certificación y aplicación.",
    },
  ],
};

export const CONCEPTO_FNCE: ConceptoFnce = {
  kicker: "CONCEPTO BÁSICO",
  titulo: "¿Qué son las Fuentes No Convencionales de Energía?",
  bajanta:
    "Alternativas energéticas con potencial para diversificar la matriz energética y avanzar hacia la sostenibilidad.",
  conceptoTitulo: "Una forma diferente de producir energía",
  conceptoTexto:
    "Las FNCE aprovechan recursos como el sol, el viento, el calor de la tierra, la biomasa y los ríos pequeños. En Colombia su participación ha sido baja o marginal frente a fuentes tradicionales como los combustibles fósiles y las grandes hidroeléctricas.",
  marcoTitulo: "Marco normativo",
  marcoItems: ["Ley 1715 de 2014", "Ley 2099 de 2021"],
  marcoTexto:
    "Estas normas promueven la integración de las FNCE y establecen incentivos para proyectos que cumplen los requisitos aplicables.",
  importanciaTitulo: "¿Por qué son importantes?",
  importancia: [
    {
      icono: "diversificacion",
      titulo: "Diversificación",
      bajanta: "Reducen la dependencia de pocas fuentes energéticas.",
    },
    {
      icono: "hoja",
      titulo: "Menor impacto",
      bajanta: "Pueden contribuir a disminuir las emisiones asociadas a la energía.",
    },
    {
      icono: "moneda",
      titulo: "Oportunidad empresarial",
      bajanta: "La inversión puede acceder a incentivos tributarios si cumple requisitos.",
    },
  ],
};

export interface NodoRecursoFnce {
  icono: IconoFnce;
  etiqueta: string;
}

export interface FuentesFnce {
  kicker: string;
  titulo: string;
  bajanta: string;
  tecnologias: TarjetaAccesoFnce[];
  recursosTitulo: string;
  recursosTexto: string;
  nodos: NodoRecursoFnce[];
}

export const FUENTES_FNCE: FuentesFnce = {
  kicker: "FUENTES DE ENERGÍA",
  titulo: "Fuentes cubiertas por el marco de las FNCE",
  bajanta:
    "Ejemplos de tecnologías y recursos que pueden formar parte de proyectos de energía no convencional.",
  tecnologias: [
    {
      icono: "solar",
      titulo: "Solar",
      bajanta: "Paneles fotovoltaicos convierten la radiación del sol en electricidad.",
    },
    {
      icono: "eolica",
      titulo: "Eólica",
      bajanta: "Turbinas aprovechan la fuerza del viento para generar electricidad.",
    },
    {
      icono: "calor",
      titulo: "Geotérmica",
      bajanta: "Utiliza el calor del subsuelo para producir energía.",
    },
  ],
  recursosTitulo: "Recursos naturales",
  recursosTexto:
    "El recurso disponible, la ubicación y la viabilidad técnica influyen en el diseño de cada proyecto.",
  nodos: [
    { icono: "solar", etiqueta: "Radiación solar" },
    { icono: "eolica", etiqueta: "Viento" },
    { icono: "calor", etiqueta: "Calor terrestre" },
    { icono: "generacion", etiqueta: "Generación" },
  ],
};

export interface OtrasFuentesFnce {
  kicker: string;
  titulo: string;
  bajanta: string;
  tarjetas: TarjetaAccesoFnce[];
  aviso: string;
}

export const OTRAS_FNCE: OtrasFuentesFnce = {
  kicker: "MÁS ALTERNATIVAS",
  titulo: "Otras fuentes y vectores energéticos",
  bajanta:
    "Estas opciones pueden complementar la transición energética según su disponibilidad y las condiciones del proyecto.",
  tarjetas: [
    {
      icono: "hoja",
      titulo: "Biomasa",
      bajanta: "Energía obtenida de materia orgánica y residuos agrícolas o forestales.",
    },
    {
      icono: "agua",
      titulo: "Pequeñas hidroeléctricas",
      bajanta: "Centrales de agua de baja escala, con menor impacto que las grandes represas.",
    },
    {
      icono: "sostenible",
      titulo: "Residuos aprovechables",
      bajanta: "Transforman residuos en energía en lugar de enviarlos a disposición final.",
    },
    {
      icono: "hidrogeno",
      titulo: "Hidrógeno verde",
      bajanta:
        "Se obtiene al separar agua usando electricidad de fuentes renovables, como solar o eólica.",
    },
    {
      icono: "hidrogeno-azul",
      titulo: "Hidrógeno azul",
      bajanta:
        "Se produce a partir de gas natural y captura el CO₂ generado para evitar que llegue a la atmósfera.",
    },
  ],
  aviso: "La clasificación y los requisitos aplicables deben verificarse para cada proyecto.",
};

export interface FilaComparativaFnce {
  criterio: string;
  convencional: string;
  fnce: string;
}

export interface ComparativaFnce {
  kicker: string;
  titulo: string;
  bajanta: string;
  filas: FilaComparativaFnce[];
  dato: string;
}

export const COMPARATIVA_FNCE: ComparativaFnce = {
  kicker: "PANORAMA ENERGÉTICO",
  titulo: "FNCE frente a las fuentes convencionales",
  bajanta: "La diferencia no es solo tecnológica: también es económica y ambiental.",
  filas: [
    {
      criterio: "Ejemplos",
      convencional: "Petróleo, carbón, gas y grandes hidroeléctricas",
      fnce: "Solar, eólica, geotérmica, biomasa y pequeñas hidroeléctricas",
    },
    {
      criterio: "Recurso",
      convencional: "Principalmente combustibles fósiles y recursos finitos",
      fnce: "Aprovechan recursos renovables o tecnologías alternativas",
    },
    {
      criterio: "Impacto ambiental",
      convencional: "Generalmente mayores emisiones de gases de efecto invernadero",
      fnce: "Pueden presentar menores emisiones durante la generación",
    },
    {
      criterio: "Tratamiento tributario",
      convencional: "Pueden estar sujetos a tributos ambientales, como el impuesto al carbono",
      fnce: "Pueden acceder a incentivos fiscales si cumplen los requisitos",
    },
  ],
  dato: "Dato clave del material: se proyecta que las energías renovables no convencionales alcancen el 15% de la capacidad eléctrica instalada en 2030; la UPME fijó una meta de más de 6 GW de capacidad con FNCER para 2026.",
};

export interface IncentivosFnce {
  kicker: string;
  titulo: string;
  bajanta: string;
  tarjetas: TarjetaAccesoFnce[];
  aviso: string;
}

export const INCENTIVOS_FNCE: IncentivosFnce = {
  kicker: "INCENTIVOS PARA PROYECTOS",
  titulo: "Beneficios tributarios para proyectos con FNCE",
  bajanta:
    "La Ley 1715 de 2014, ampliada por la Ley 2099 de 2021, contempla incentivos sujetos a condiciones y trámites.",
  tarjetas: [
    {
      icono: "moneda",
      titulo: "Deducción en renta",
      bajanta:
        "Posibilidad de deducir hasta el 50% del valor de la inversión en el proyecto, con certificación previa de la UPME.",
    },
    {
      icono: "incentivos",
      titulo: "Exclusión de IVA",
      bajanta:
        "Aplica a equipos, maquinaria y servicios relacionados con el proyecto, de acuerdo con los requisitos vigentes.",
    },
    {
      icono: "arriba",
      titulo: "Exención de aranceles",
      bajanta:
        "Para importar maquinaria, equipos e insumos destinados exclusivamente al proyecto; la solicitud se tramita ante la DIAN con anticipación.",
    },
    {
      icono: "diagonal",
      titulo: "Depreciación acelerada",
      bajanta:
        "Permite depreciar activos del proyecto en un periodo menor, lo que puede reducir la carga fiscal y mejorar el flujo de caja.",
    },
  ],
  aviso:
    "Importante: la procedencia de cada beneficio depende de la normativa vigente, la certificación y los requisitos específicos.",
};

export interface PasoProcesoFnce {
  titulo: string;
  texto: string;
}

export interface ProcesoFnce {
  kicker: string;
  titulo: string;
  bajanta: string;
  pasos: PasoProcesoFnce[];
  aviso: string;
}

export const PROCESO_FNCE: ProcesoFnce = {
  kicker: "PROCESO GENERAL",
  titulo: "¿Cómo acceder a los beneficios?",
  bajanta:
    "Para la mayoría de los incentivos, la empresa debe obtener la certificación de la UPME y aplicar el beneficio ante la entidad correspondiente.",
  pasos: [
    {
      titulo: "Formular el proyecto",
      texto: "Definir la tecnología FNCE que se va a desarrollar.",
    },
    {
      titulo: "Reunir soportes",
      texto: "Preparar documentos técnicos, financieros y legales.",
    },
    {
      titulo: "Registrar y radicar",
      texto: "Presentar la solicitud en la plataforma oficial.",
    },
    {
      titulo: "Evaluación técnica",
      texto: "La UPME revisa que la inversión cumpla los criterios.",
    },
    {
      titulo: "Obtener certificación",
      texto: "Si cumple, la UPME expide el certificado correspondiente.",
    },
    {
      titulo: "Aplicar ante la DIAN",
      texto: "Presentar la certificación y aplicar el beneficio en la declaración de renta.",
    },
  ],
  aviso: "Antes de iniciar el trámite, verifica la normativa y las guías oficiales de la UPME y la DIAN.",
};
