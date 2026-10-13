"use client";

import { useEffect, useRef, useState } from "react";
import { PREGUNTAS_ELEGIBILIDAD } from "@/data/preguntasElegibilidad";
import { InfoPanel } from "./InfoPanel";
import { PreguntaCard } from "./PreguntaCard";

const TOTAL = PREGUNTAS_ELEGIBILIDAD.length;

export function SoyElegibleView() {
  const [current, setCurrent] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, string>>({});
  const topRef = useRef<HTMLDivElement>(null);
  const shouldScroll = useRef(false);

  // Al entrar (incluida recarga a mitad de página), empezar desde el hero.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Solo los botones ordenan el desplazamiento (a prueba de StrictMode en dev).
  useEffect(() => {
    if (shouldScroll.current) {
      shouldScroll.current = false;
      topRef.current?.scrollIntoView({ block: "start" });
    }
  }, [current]);

  function goTo(index: number) {
    shouldScroll.current = true;
    setCurrent(index);
  }

  const pregunta = PREGUNTAS_ELEGIBILIDAD[current];
  const isLast = current === TOTAL - 1;
  const answered = Boolean(respuestas[pregunta.id]);

  function select(optionId: string) {
    setRespuestas((prev) => ({ ...prev, [pregunta.id]: optionId }));
  }

  function handleVerResultados() {
    // TODO fase de resultados: conectar aquí el motor de cálculo de elegibilidad.
    console.log("Respuestas guardadas:", respuestas);
  }

  return (
    <div ref={topRef} className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 pb-16 sm:px-6">
      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        <div className="md:w-[60%]">
          <p className="text-sm font-medium text-ink-400 dark:text-zinc-400">
            Pregunta {pregunta.id} de {TOTAL}
          </p>
          <div
            role="progressbar"
            aria-valuenow={pregunta.id}
            aria-valuemin={1}
            aria-valuemax={TOTAL}
            aria-label={`Pregunta ${pregunta.id} de ${TOTAL}`}
            className="mb-8 mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
          >
            <div
              className="h-full rounded-full bg-brand-600 transition-[width] dark:bg-brand-400"
              style={{ width: `${(pregunta.id / TOTAL) * 100}%` }}
            />
          </div>
          <PreguntaCard pregunta={pregunta} selectedId={respuestas[pregunta.id]} onSelect={select} />

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Anterior
            </button>
            {isLast ? (
              <button
                type="button"
                onClick={handleVerResultados}
                disabled={!answered}
                className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Ver Resultados
              </button>
            ) : (
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                disabled={!answered}
                className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente
              </button>
            )}
          </div>
        </div>

        <aside className="md:w-[40%]" aria-label="Información de ayuda">
          <InfoPanel bloques={pregunta.panelInformativo} />
        </aside>
      </div>
    </div>
  );
}
