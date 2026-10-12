import Link from "next/link";

// 404 propio: usa el layout raíz (mismo tema, header y footer),
// así no aparece la página blanca por defecto de Next.
export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center">
      <p className="text-5xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página no encontrada</h1>
      <p className="mt-3 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
        La ruta que buscas no existe o el módulo aún está en construcción.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
