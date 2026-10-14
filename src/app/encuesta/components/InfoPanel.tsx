import type { BloqueInformativo } from "@/data/preguntasElegibilidad";

type IconoBloque = NonNullable<BloqueInformativo["icono"]>;

function BlockIcon({ icono }: { icono: IconoBloque }) {
  const paths: Record<IconoBloque, React.ReactNode> = {
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </>
    ),
    documento: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8" />
      </>
    ),
    norma: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
    destacado: (
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
    ),
  };
  const circle: Record<IconoBloque, string> = {
    info: "bg-brand-50 text-brand-700 dark:bg-brand-400/15 dark:text-brand-400",
    documento: "bg-blue-50 text-blue-700 dark:bg-blue-400/15 dark:text-blue-400",
    norma: "bg-blue-50 text-blue-700 dark:bg-blue-400/15 dark:text-blue-400",
    destacado: "bg-brand-50 text-brand-700 dark:bg-brand-400/15 dark:text-brand-400",
  };
  return (
    <span aria-hidden="true" className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${circle[icono]}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[icono]}
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
    </svg>
  );
}

export function InfoPanel({ bloques }: { bloques: BloqueInformativo[] }) {
  // Tonos del mockup de Beneficios (hex del mockup en claro, tenue en oscuro).
  const fondos: Record<NonNullable<BloqueInformativo["fondo"]>, string> = {
    neutro: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
    verde: "border-transparent bg-[#e8f4ec] dark:border-zinc-800 dark:bg-brand-400/10",
    azul: "border-transparent bg-[#e6f0fb] dark:border-zinc-800 dark:bg-blue-400/10",
    nota: "border-transparent bg-navy-900 dark:border-zinc-800 dark:bg-zinc-900",
  };
  return (
    <div className="flex flex-col gap-4">
      {bloques.map((bloque, index) => {
        const fondo = bloque.fondo ?? "neutro";
        const esNota = fondo === "nota";
        return (
          <article
            key={`${bloque.titulo}-${index}`}
            className={`rounded-xl border p-5 ${fondos[fondo]}`}
          >
            {(bloque.titulo !== "" || bloque.textoApoyo) && (
              <div className="flex items-start gap-3">
                <BlockIcon icono={bloque.icono ?? "info"} />
                <div>
                  {bloque.titulo !== "" && (
                    <h3
                      className={`text-[15px] font-bold ${esNota ? "text-amber-400" : ""}`}
                    >
                      {bloque.titulo}
                    </h3>
                  )}
                  {bloque.textoApoyo && (
                    <p
                      className={`mt-1 text-sm leading-6 ${esNota ? "text-zinc-200 dark:text-zinc-300" : "text-ink-600 dark:text-zinc-400"}`}
                    >
                      {bloque.textoApoyo}
                    </p>
                  )}
                </div>
              </div>
            )}
            {bloque.itemsListado && (
              <ul className="mt-2.5 flex flex-col gap-2">
                {bloque.itemsListado.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-sm leading-5 ${esNota ? "text-zinc-200 dark:text-zinc-300" : "text-ink-600 dark:text-zinc-300"}`}
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {bloque.pasos && (
              <ol className="mt-3 flex flex-col gap-4">
                {bloque.pasos.map((paso, i) => (
                  <li key={paso.titulo} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-bold">{paso.titulo}</p>
                      <p className="mt-0.5 text-sm leading-6 text-ink-600 dark:text-zinc-300">{paso.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </article>
        );
      })}
    </div>
  );
}
