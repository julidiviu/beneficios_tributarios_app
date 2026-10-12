import Link from "next/link";

// Portada provisional: se reemplazará con el contenido definitivo.
// El módulo de la encuesta vivirá en /soy-elegible.
export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center">
      <p className="mb-4 rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        Sitio en construcción
      </p>
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
        Beneficios tributarios para la transición energética
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Orientación educativa sobre los incentivos tributarios para proyectos de
        Fuentes No Convencionales de Energía (FNCE) en Colombia.
      </p>
      <Link
        href="/soy-elegible"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        ¿Soy elegible?
      </Link>
    </section>
  );
}
