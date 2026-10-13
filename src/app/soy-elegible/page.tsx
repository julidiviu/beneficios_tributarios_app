import type { Metadata } from "next";
import Image from "next/image";
import { SoyElegibleView } from "./components/SoyElegibleView";

export const metadata: Metadata = {
  title: "¿Soy elegible? | Beneficios Tributarios FNCE Colombia",
  description:
    "Responde 10 preguntas para conocer si tu proyecto cumple los requisitos básicos de los incentivos tributarios FNCE.",
};

export default function SoyElegiblePage() {
  return (
    <div>
      <section>
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-4 py-10 sm:px-6 md:-mr-16 md:py-12 lg:-mr-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-600/30 bg-brand-50 px-3 py-1 text-xs font-bold tracking-wide text-brand-700 dark:bg-brand-600/10 dark:text-brand-400">
              ENCUESTA DE ELEGIBILIDAD
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              ¿Tu proyecto puede acceder a los{" "}
              <span className="text-brand-800 dark:text-brand-400">beneficios tributarios</span>?
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
              Responde estas preguntas para conocer si tu empresa cumple con los requisitos básicos para acceder a
              los incentivos tributarios destinados a proyectos de Fuentes No Convencionales de Energía (FNCE).
            </p>
          </div>
          <div className="relative min-h-56 overflow-hidden md:min-h-full">
            <Image
              src="/images/molinos.png"
              alt="Aerogeneradores y paneles solares en un paisaje montañoso"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent dark:from-zinc-950 dark:via-zinc-950/30"
            />
          </div>
        </div>
      </section>

      <div className="pt-8">
        <SoyElegibleView />
      </div>
    </div>
  );
}
