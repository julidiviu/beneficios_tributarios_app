"use client";

import { useEffect, useRef, useState } from "react";
import { PREGUNTAS_ELEGIBILIDAD } from "@/data/preguntasElegibilidad";
import { AvisoInicial } from "./AvisoInicial";
import { InfoPanel } from "./InfoPanel";
import { PreguntaCard } from "./PreguntaCard";

const TOTAL = PREGUNTAS_ELEGIBILIDAD.length;
// Marca local: el aviso inicial se muestra solo la primera vez.
const AVISO_KEY = "encuesta:aviso-visto";
// Duraciones sincronizadas con las clases de Tailwind de abajo.
const SALIDA_MS = 200;
const ENTRADA_MS = 300;

type Fase = "reposo" | "saliendo" | "pre-entrada" | "entrando";

export function EncuestaView() {
  const [displayed, setDisplayed] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [fase, setFase] = useState<Fase>("reposo");
  const [respuestas, setRespuestas] = useState<Record<number, string>>({});
  const [avisoAbierto, setAvisoAbierto] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const shouldScroll = useRef(false);
  const timers = useRef<number[]>([]);

  // Al entrar (incluida recarga a mitad de página), empezar desde el hero.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // El aviso se abre solo la primera vez, al iniciar en P1 sin respuestas
  // (al montar siempre se está en ese estado); se marca en localStorage.
  // setState diferido: evita el set directo en el cuerpo del efecto.
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        if (window.localStorage.getItem(AVISO_KEY) !== "1") setAvisoAbierto(true);
      } catch {
        setAvisoAbierto(true);
      }
    }, 0);
    timers.current.push(t);
  }, []);

  function cerrarAviso() {
    try {
      window.localStorage.setItem(AVISO_KEY, "1");
    } catch {
      // Sin almacenamiento el aviso se muestra en cada visita.
    }
    setAvisoAbierto(false);
  }

  // Limpia los temporizadores de la animación al desmontar.
  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  // Solo los botones ordenan el desplazamiento (a prueba de StrictMode en dev).
  useEffect(() => {
    if (shouldScroll.current) {
      shouldScroll.current = false;
      topRef.current?.scrollIntoView({ block: "start" });
    }
  }, [displayed]);

  // Transición en dos fases con un solo elemento montado: fade de salida,
  // intercambio de pregunta y entrada deslizante. Sin colisión en el layout.
  function goTo(index: number) {
    if (index < 0 || index >= TOTAL || index === displayed || fase !== "reposo") return;
    setDirection(index > displayed ? 1 : -1);
    setFase("saliendo");
    timers.current.push(
      window.setTimeout(() => {
        setDisplayed(index);
        // Estado inicial de entrada sin transición (un frame) para que el
        // paso a "entrando" anime desde el desplazamiento lateral.
        setFase("pre-entrada");
        shouldScroll.current = true;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setFase("entrando");
            timers.current.push(window.setTimeout(() => setFase("reposo"), ENTRADA_MS));
          });
        });
      }, SALIDA_MS),
    );
  }

  const pregunta = PREGUNTAS_ELEGIBILIDAD[displayed];
  const isLast = displayed === TOTAL - 1;
  const answered = Boolean(respuestas[pregunta.id]);
  const animando = fase !== "reposo";

  // La pregunta actual se desvanece en su posición; la nueva entra desde el
  // lateral según la dirección (derecha al avanzar, izquierda al retroceder).
  const animClass =
    fase === "saliendo"
      ? "opacity-0 transition-opacity duration-200 ease-out motion-reduce:transition-none"
      : fase === "pre-entrada"
        ? `opacity-0 ${direction === 1 ? "translate-x-8" : "-translate-x-8"} motion-reduce:translate-x-0 motion-reduce:opacity-100`
        : "translate-x-0 opacity-100 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none";

  function select(optionId: string) {
    setRespuestas((prev) => ({ ...prev, [pregunta.id]: optionId }));
  }

  function handleVerResultados() {
    // TODO fase de resultados: conectar aquí el motor de cálculo de elegibilidad.
    console.log("Respuestas guardadas:", respuestas);
  }

  return (
    <div ref={topRef} className="mx-auto w-full max-w-[90rem] scroll-mt-20 px-4 pb-16 sm:px-6">
      {avisoAbierto && <AvisoInicial onClose={cerrarAviso} />}
      <div className={`mt-8 flex flex-col gap-8 md:flex-row ${animClass}`}>
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
              onClick={() => goTo(displayed - 1)}
              disabled={displayed === 0 || animando}
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
                onClick={() => goTo(displayed + 1)}
                disabled={!answered || animando}
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
