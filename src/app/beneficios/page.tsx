import type { Metadata } from "next";
import Image from "next/image";
import { BeneficiosView } from "./components/BeneficiosView";

export const metadata: Metadata = {
  title: "Beneficios | Beneficios Tributarios FNCE Colombia",
  description:
    "Conoce los beneficios tributarios para proyectos FNCE: deducción en renta, exclusión de IVA, exención de aranceles y depreciación acelerada.",
};

export default function BeneficiosPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[62%] md:block">
          <Image
            src="/images/beneficios/beneficios_tributarios.jpg"
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
              BENEFICIOS TRIBUTARIOS
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              ¿Qué son los{" "}
              <span className="text-brand-800 dark:text-brand-400">beneficios tributarios</span> - FNCE?
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
              Es un incentivo que el Estado da a quien invierte en proyectos de Fuentes No Convencionales de
              Energía (FNCE). No es un regalo: es una forma de que la inversión en energía limpia se recupere más
              rápido y te permiten pagar menos impuestos. Aquí te explicamos cuáles son y cómo funcionan.
            </p>
          </div>
          <div aria-hidden="true" className="relative mt-8 h-52 w-full md:hidden">
            <Image
              src="/images/beneficios/beneficios_tributarios.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="pt-8">
        <BeneficiosView />
      </div>
    </div>
  );
}
