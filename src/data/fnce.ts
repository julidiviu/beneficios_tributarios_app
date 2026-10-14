// Diccionario de la pestaña FNCE: solo contenido, sin UI.
// Se amplía por secciones; por ahora solo el hero.
export interface TarjetaAccesoFnce {
  icono: string;
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

export const HERO_FNCE: HeroFnce = {
  distintivo: "GUÍA PARA EMPRESAS Y PROYECTOS",
  titulo: "¿Tu proyecto puede acceder a beneficios tributarios?",
  descripcion:
    "Conoce las oportunidades de la Ley 1715 de 2014 y la Ley 2099 de 2021 para proyectos de Fuentes No Convencionales de Energía.",
  cta: "Explora las FNCE y sus incentivos",
  destinoCta: "#accesos",
  tarjetas: [
    {
      icono: "♻",
      titulo: "Energía sostenible",
      bajanta: "Sol, viento, calor terrestre, biomasa y más.",
    },
    {
      icono: "✓",
      titulo: "Incentivos tributarios",
      bajanta: "Renta, IVA, aranceles y depreciación acelerada.",
    },
    {
      icono: "→",
      titulo: "Ruta de acceso",
      bajanta: "Conoce el proceso de certificación y aplicación.",
    },
  ],
};
