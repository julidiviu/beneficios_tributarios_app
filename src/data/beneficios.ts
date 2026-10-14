// Diccionario de datos de la pestaña Beneficios (spec 003 aprobada).
// Solo contenido: sin UI, sin lógica de animación, sin persistencia.
// Reusa BloqueInformativo del cuestionario para los bloques del detalle.

import type { BloqueInformativo } from "./preguntasElegibilidad";

export interface CifraBeneficio {
  valorFinal: number;
  formato: "entero" | "decimal-2";
  etiqueta: string;
  direccion: "sube" | "baja";
  inicio: number;
}

export interface ErrorBeneficio {
  titulo: string;
  detalle: string;
}

export interface Beneficio {
  id: "deduccion" | "iva" | "arancel" | "depreciacion";
  tituloCorto: string;
  resumen: string;
  norma: string;
  tituloDetalle: string;
  descripcion?: string;
  bloques: BloqueInformativo[];
  errores?: ErrorBeneficio[];
  cifra?: CifraBeneficio;
}

export const BENEFICIOS: Beneficio[] = [
  {
    id: "deduccion",
    tituloCorto: "Deducción en renta",
    resumen:
      "Permite deducir hasta el 50% del valor total de la inversión realizada del impuesto de renta, aplicable en un plazo máximo de 15 años. Límite: no puede superar el 50% de la renta líquida del año.",
    norma:
      "Art. 11 · Ley 1715 de 2014, mod. Ley 2099 de 2021 · Decreto 1625 de 2016, arts. 1.2.1.18.79 y 2.2.3.8.2.3",
    tituloDetalle: "La deducción especial en el impuesto de renta",
    descripcion:
      "Te permite restar de tu renta hasta el 50% de lo que inviertas en un proyecto de energía limpia, repartido hasta en 15 años.",
    bloques: [
      {
        tipo: "listado",
        titulo: "Ten en cuenta",
        icono: "documento",
        fondo: "verde",
        itemsListado: [
          "50% del valor de la inversión es deducible",
          "15 años es el plazo máximo para aprovecharlo",
          "Límite del 50% de la renta líquida antes de deducción es el tope de cada año",
          "UPME certifica el proyecto antes de aplicar el beneficio",
          "Se debe ingresar en la casilla 66 del formulario 110",
        ],
      },
      {
        tipo: "texto",
        titulo: "Nota:",
        icono: "destacado",
        fondo: "nota",
        textoApoyo:
          "registrar los paneles u otros equipos como propiedad, planta y equipo no impide la deducción. El activo se mantiene en tu contabilidad y, al mismo tiempo, genera la deducción especial, siempre que tengas la certificación de la UPME y respetes el tope anual.",
      },
      {
        tipo: "pasos",
        titulo: "Cómo funciona",
        icono: "info",
        fondo: "azul",
        pasos: [
          {
            titulo: "Paso 1: Inviertes y certificas",
            texto:
              "Compras e instalas un sistema FNCE y la UPME certifica que tu inversión corresponde a un proyecto de energía limpia.",
          },
          {
            titulo: "Paso 2: Calculas el tope del año",
            texto:
              "Cada año puedes deducir como máximo el 50% de tu renta líquida, calculada antes de restar este beneficio. Lo que no alcances a deducir queda disponible para los años siguientes.",
          },
          {
            titulo: "Paso 3: Lo declaras",
            texto:
              "En tu declaración de renta, con la certificación en mano, registras la deducción en la casilla y con el código que indica la DIAN: casilla 66 «Otros gastos y deducciones» del formulario 110.",
          },
        ],
      },
      {
        tipo: "texto",
        titulo: "Nota:",
        icono: "destacado",
        fondo: "nota",
        textoApoyo:
          "los gastos de operar el proyecto (mantenimiento, seguros, servicios) son deducibles por las reglas generales del Estatuto Tributario, de forma independiente.",
      },
    ],
    errores: [
      {
        titulo: "Aplicar la deducción sin certificado de la UPME",
        detalle: "Sin la certificación, la DIAN no acepta la deducción. Tramítala antes de declarar.",
      },
      {
        titulo: "Facturar todo en una sola factura",
        detalle:
          "La DIAN puede rechazar la deducción si las facturas no separan cada equipo y componente. Pide facturas discriminadas por ítem.",
      },
      {
        titulo: "Superar el tope anual",
        detalle: "No deduzcas más del 50% de tu renta líquida del año, calculada antes de restar la deducción.",
      },
      {
        titulo: "Usar la casilla equivocada",
        detalle: "En el formulario 110 va en la casilla 66.",
      },
      {
        titulo: "No enviar los reportes anuales a la UPME",
        detalle: "Puedes perder la certificación y, con ella, el beneficio.",
      },
      {
        titulo: "Vender el activo antes de tiempo",
        detalle:
          "Si lo vendes antes de terminar su depreciación, debes reintegrar lo deducido como renta líquida.",
      },
      {
        titulo: "Leasing sin opción de compra irrevocable",
        detalle:
          "Si desistes de la opción de compra, debes restituir lo deducido como renta líquida en ese año.",
      },
    ],
  },
  {
    id: "iva",
    tituloCorto: "Exclusión de IVA",
    resumen:
      "Los equipos, maquinaria y servicios del proyecto quedan excluidos de IVA (Ley 2099 de 2021). La inversión debe estar evaluada y certificada por la UPME.",
    norma: "Art. 12 · Ley 1715 de 2014, mod. art. 9 Ley 2099 de 2021",
    tituloDetalle: "Exclusión de IVA",
    bloques: [
      {
        tipo: "texto-listado",
        titulo: "Cómo funciona",
        icono: "info",
        fondo: "verde",
        textoApoyo:
          "Los equipos, maquinaria y servicios del proyecto quedan excluidos de IVA, evitando pagar el impuesto para luego solicitar devolución.",
        itemsListado: [
          "En una compra de $100.000.000 evitas $19.000.000 de IVA (si la tarifa es del 19%). Ese dinero queda disponible como caja y el activo entra a tu balance por un valor menor.",
          "La certificación de la UPME debe existir para aplicar directamente la exclusión al momento de la operación.",
        ],
      },
      {
        tipo: "texto",
        titulo: "Importante",
        icono: "documento",
        fondo: "azul",
        textoApoyo:
          "Si compras los equipos pagando IVA y posteriormente obtienes la certificación de la UPME, podrías solicitar la devolución del IVA pagado, siempre que cumplas los requisitos legales y documentales correspondientes. No es una devolución automática.",
      },
    ],
  },
  {
    id: "arancel",
    tituloCorto: "Exención de aranceles",
    resumen:
      "Arancel del 0% para la importación de maquinarias, equipos y materiales destinados exclusivamente a proyectos FNCE sin producción nacional.",
    norma: "Art. 13 · Ley 1715 de 2014, mod. Ley 2099 de 2021",
    tituloDetalle: "Exención de aranceles",
    cifra: { valorFinal: 0, formato: "entero", etiqueta: "de arancel", direccion: "baja", inicio: 40 },
    bloques: [
      {
        tipo: "listado",
        titulo: "",
        icono: "info",
        fondo: "verde",
        itemsListado: [
          "Los equipos importados que no se producen en Colombia entran sin pagar derechos de importación.",
          "Sin el beneficio, el arancel suele ir del 5% al 15% del valor del costo, seguro y flete de la mercancía.",
          "Solo aplica a equipos sin producción nacional suficiente, y debe solicitarse a la DIAN como mínimo 15 días hábiles antes de importar, a través de la Ventanilla Única de Comercio Exterior, con la certificación de la UPME.",
        ],
      },
    ],
  },
  {
    id: "depreciacion",
    tituloCorto: "Depreciación acelerada",
    resumen:
      "Depreciación anual acumulada de hasta el 33,33% para activos asociados a proyectos sostenibles y gestión eficiente de energía.",
    norma: "Art. 14 · Ley 1715 de 2014, mod. Ley 2099 de 2021",
    tituloDetalle: "Depreciación acelerada",
    cifra: { valorFinal: 33.33, formato: "decimal-2", etiqueta: "tasa anual máxima", direccion: "sube", inicio: 0 },
    bloques: [
      {
        tipo: "listado",
        titulo: "",
        icono: "info",
        fondo: "verde",
        itemsListado: [
          "Puedes depreciar los activos del proyecto (maquinarias, equipos y obras civiles) más rápido: contable y fiscalmente en un plazo mínimo de 3 años, reduciendo la base gravable del impuesto de renta mucho más rápido.",
          "Con un activo de $300.000.000, depreciarlo a 10 años da $30.000.000 por año. Con el 33,33% anual, la deducción puede acercarse a $99.900.000 por año.",
          "Puedes cambiar la tasa cada año sin superar el 33,33%, informando previamente a la DIAN. Antes de la Ley 2099 el máximo era 20%.",
          "Requiere la obtención previa de la certificación técnica de la UPME.",
        ],
      },
    ],
  },
];
