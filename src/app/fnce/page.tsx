import type { Metadata } from "next";
import Image from "next/image";
import { COMPARATIVA_FNCE, CONCEPTO_FNCE, FUENTES_FNCE, HERO_FNCE, INCENTIVOS_FNCE, OTRAS_FNCE, PROCESO_FNCE } from "@/data/fnce";
import { FnceIcon } from "./components/FnceIcon";
import { Reveal } from "./components/Reveal";

export const metadata: Metadata = {
  title: "FNCE | Beneficios Tributarios FNCE Colombia",
  description:
    "Guía para empresas y proyectos: conoce las oportunidades de la Ley 1715 de 2014 y la Ley 2099 de 2021 para proyectos de Fuentes No Convencionales de Energía.",
};

const TARJETA_BORDE =
  "flex items-start gap-3 rounded-xl border border-zinc-200 border-l-4 border-l-brand-600 bg-white p-4 shadow-md transition-colors hover:border-brand-600 dark:border-zinc-800 dark:border-l-brand-400 dark:bg-zinc-950 dark:hover:border-brand-400";

const TARJETA_BORDE_LG =
  "flex items-start gap-3 rounded-xl border border-zinc-200 border-l-4 border-l-brand-600 bg-white p-6 shadow-md transition-colors hover:border-brand-600 sm:p-8 dark:border-zinc-800 dark:border-l-brand-400 dark:bg-zinc-950 dark:hover:border-brand-400";

export default function FncePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[62%] md:block">
          <Image
            src="/images/fnce/fnce.jpg"
            alt=""
            fill
            priority
            sizes="62vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_0%,rgba(255,255,255,0)_45%)] dark:bg-[linear-gradient(to_right,#09090b_0%,rgba(9,9,11,0)_45%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 py-10 sm:px-6 md:py-14">
          <div className="max-w-2xl">
            <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-600/30 bg-brand-50 px-3 py-1 text-xs font-bold tracking-wide text-brand-700 dark:bg-brand-600/10 dark:text-brand-400">
              {HERO_FNCE.distintivo}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{HERO_FNCE.titulo}</h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
              {HERO_FNCE.descripcion}
            </p>
            <a
              href={HERO_FNCE.destinoCta}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              {HERO_FNCE.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div aria-hidden="true" className="relative mt-8 h-52 w-full md:hidden">
            <Image
              src="/images/fnce/fnce.jpg"
              alt=""
              fill
              sizes="100vw"
              className="rounded-xl object-cover object-center"
            />
          </div>
          <div id="accesos" className="mt-8 grid scroll-mt-20 gap-4 md:grid-cols-3">
            {HERO_FNCE.tarjetas.map((t) => (
              <div key={t.titulo} className={TARJETA_BORDE}>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-400"
                >
                  <FnceIcon nombre={t.icono} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold">{t.titulo}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                    {t.bajanta}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[90rem] px-4 pb-16 sm:px-6">
        <Reveal className="mt-12">
          <p className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
            {CONCEPTO_FNCE.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{CONCEPTO_FNCE.titulo}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
            {CONCEPTO_FNCE.bajanta}
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-bold">{CONCEPTO_FNCE.conceptoTitulo}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
                {CONCEPTO_FNCE.conceptoTexto}
              </p>
            </div>
            <div className="rounded-2xl bg-brand-50 p-6 dark:bg-brand-400/10">
              <h3 className="text-lg font-bold text-brand-700 dark:text-brand-400">
                {CONCEPTO_FNCE.marcoTitulo}
              </h3>
              <ul className="mt-3 space-y-1 text-[15px] font-medium">
                {CONCEPTO_FNCE.marcoItems.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-zinc-400">
                {CONCEPTO_FNCE.marcoTexto}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="text-lg font-bold">{CONCEPTO_FNCE.importanciaTitulo}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {CONCEPTO_FNCE.importancia.map((t) => (
              <div key={t.titulo} className={TARJETA_BORDE}>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-400"
                >
                  <FnceIcon nombre={t.icono} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold">{t.titulo}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                    {t.bajanta}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
            {FUENTES_FNCE.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{FUENTES_FNCE.titulo}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
            {FUENTES_FNCE.bajanta}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {FUENTES_FNCE.tecnologias.map((t) => (
              <div key={t.titulo} className={TARJETA_BORDE}>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-400"
                >
                  <FnceIcon nombre={t.icono} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold">{t.titulo}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                    {t.bajanta}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="grid gap-6 rounded-2xl border border-zinc-200 bg-zinc-100 p-6 md:grid-cols-[35%_65%] md:items-center dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <h3 className="text-lg font-bold">{FUENTES_FNCE.recursosTitulo}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-zinc-400">
                {FUENTES_FNCE.recursosTexto}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FUENTES_FNCE.nodos.map((n) => (
                <div key={n.etiqueta} className="flex flex-col items-center gap-2 text-center">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white text-brand-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-brand-400"
                  >
                    <FnceIcon nombre={n.icono} />
                  </span>
                  <span className="text-xs font-medium text-ink-600 dark:text-zinc-400">
                    {n.etiqueta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
            {OTRAS_FNCE.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{OTRAS_FNCE.titulo}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
            {OTRAS_FNCE.bajanta}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {OTRAS_FNCE.tarjetas.slice(0, 3).map((t) => (
              <div key={t.titulo} className={TARJETA_BORDE}>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-400"
                >
                  <FnceIcon nombre={t.icono} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold">{t.titulo}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                    {t.bajanta}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col items-stretch gap-4 md:flex-row md:justify-center">
            {OTRAS_FNCE.tarjetas.slice(3).map((t) => (
              <div key={t.titulo} className={`${TARJETA_BORDE} md:max-w-md md:flex-1`}>
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    t.icono === "hidrogeno-azul"
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-400/15 dark:text-blue-400"
                      : "bg-brand-600/10 text-brand-700 dark:text-brand-400"
                  }`}
                >
                  <FnceIcon nombre={t.icono} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold">{t.titulo}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                    {t.bajanta}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="rounded-xl bg-[#e6f0fb] px-6 py-4 text-center text-sm font-semibold dark:bg-blue-400/10 dark:text-zinc-200">
            {OTRAS_FNCE.aviso}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
            {COMPARATIVA_FNCE.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{COMPARATIVA_FNCE.titulo}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
            {COMPARATIVA_FNCE.bajanta}
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-2 text-left text-sm">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[20%] rounded-xl bg-navy-900 px-4 py-3 text-center font-bold text-white"
                  >
                    Criterio
                  </th>
                  <th
                    scope="col"
                    className="w-[40%] rounded-xl bg-navy-900 px-4 py-3 text-center font-bold text-white"
                  >
                    Fuentes convencionales
                  </th>
                  <th
                    scope="col"
                    className="w-[40%] rounded-xl bg-brand-700 px-4 py-3 text-center font-bold text-white"
                  >
                    FNCE
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA_FNCE.filas.map((f, i) => (
                  <tr key={f.criterio}>
                    <th
                      scope="row"
                      className={`rounded-xl px-4 py-3 font-bold shadow-sm ${
                        i % 2 === 0
                          ? "bg-white dark:bg-zinc-950"
                          : "bg-zinc-50 dark:bg-zinc-900"
                      }`}
                    >
                      {f.criterio}
                    </th>
                    <td
                      className={`rounded-xl px-4 py-3 leading-6 text-ink-600 shadow-sm dark:text-zinc-300 ${
                        i % 2 === 0
                          ? "bg-white dark:bg-zinc-950"
                          : "bg-zinc-50 dark:bg-zinc-900"
                      }`}
                    >
                      {f.convencional}
                    </td>
                    <td
                      className={`rounded-xl px-4 py-3 leading-6 text-ink-600 shadow-sm dark:text-zinc-300 ${
                        i % 2 === 0
                          ? "bg-white dark:bg-zinc-950"
                          : "bg-zinc-50 dark:bg-zinc-900"
                      }`}
                    >
                      {f.fnce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <p className="rounded-xl bg-brand-50 px-6 py-4 text-sm font-semibold leading-6 text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
            {COMPARATIVA_FNCE.dato}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
            {INCENTIVOS_FNCE.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{INCENTIVOS_FNCE.titulo}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
            {INCENTIVOS_FNCE.bajanta}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {INCENTIVOS_FNCE.tarjetas.map((t) => (
              <div key={t.titulo} className={TARJETA_BORDE_LG}>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-400"
                >
                  <FnceIcon nombre={t.icono} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold">{t.titulo}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                    {t.bajanta}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="rounded-xl bg-[#e6f0fb] px-6 py-4 text-center text-sm font-semibold dark:bg-blue-400/10 dark:text-zinc-200">
            {INCENTIVOS_FNCE.aviso}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
            {PROCESO_FNCE.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{PROCESO_FNCE.titulo}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
            {PROCESO_FNCE.bajanta}
          </p>
          <ol className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
            {PROCESO_FNCE.pasos.map((p, i) => (
              <li
                key={p.titulo}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-brand-600 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-brand-400"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-[15px] font-bold">{p.titulo}</h3>
                </div>
                <p className="mt-3 text-[13px] leading-5 text-ink-600 dark:text-zinc-400">
                  {p.texto}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-6">
          <p className="rounded-xl bg-brand-50 px-6 py-4 text-center text-sm font-semibold leading-6 text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
            {PROCESO_FNCE.aviso}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
