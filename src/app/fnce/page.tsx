import type { Metadata } from "next";
import Image from "next/image";
import { HERO_FNCE } from "@/data/fnce";

export const metadata: Metadata = {
  title: "FNCE | Beneficios Tributarios FNCE Colombia",
  description:
    "Guía para empresas y proyectos: conoce las oportunidades de la Ley 1715 de 2014 y la Ley 2099 de 2021 para proyectos de Fuentes No Convencionales de Energía.",
};

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
              <div
                key={t.titulo}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 border-l-4 border-l-brand-600 bg-white p-4 shadow-md dark:border-zinc-800 dark:border-l-brand-400 dark:bg-zinc-950"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-base font-bold text-brand-700 dark:text-brand-400"
                >
                  {t.icono}
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
    </div>
  );
}
