import type { Metadata } from "next";
import Image from "next/image";
import { EncuestaView } from "./components/EncuestaView";

export const metadata: Metadata = {
  title: "Encuesta | Beneficios Tributarios FNCE Colombia",
  description:
    "Responde 10 preguntas para conocer si tu proyecto cumple los requisitos básicos de los incentivos tributarios FNCE.",
};

export default function EncuestaPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/images/molinos.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_0%,#ffffff_38%,rgba(255,255,255,0.55)_52%,rgba(255,255,255,0)_68%)] dark:bg-[linear-gradient(to_right,#09090b_0%,#09090b_38%,rgba(9,9,11,0.55)_52%,rgba(9,9,11,0)_68%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 py-10 sm:px-6 md:py-14">
          <div className="max-w-2xl">
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
        </div>
      </section>

      <div className="pt-8">
        <EncuestaView />
      </div>
    </div>
  );
}
