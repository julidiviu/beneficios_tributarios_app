"use client";

import type { PreguntaElegibilidad } from "@/data/preguntasElegibilidad";

interface PreguntaCardProps {
  pregunta: PreguntaElegibilidad;
  selectedId?: string;
  onSelect: (optionId: string) => void;
}

export function PreguntaCard({ pregunta, selectedId, onSelect }: PreguntaCardProps) {
  return (
    <div>
      <h2 className="text-xl font-bold leading-snug">{pregunta.titulo}</h2>
      <p className="mt-2 text-[15px] leading-6 text-ink-600 dark:text-zinc-400">{pregunta.textoApoyo}</p>

      <div role="radiogroup" aria-label={pregunta.titulo} className="mt-5 flex flex-col gap-3">
        {pregunta.opciones.map((opcion) => {
          const checked = selectedId === opcion.id;
          return (
            <label
              key={opcion.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                checked
                  ? "border-brand-600 bg-brand-50 dark:border-brand-400 dark:bg-brand-400/10"
                  : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
              }`}
            >
              <input
                type="radio"
                name={`pregunta-${pregunta.id}`}
                checked={checked}
                onChange={() => onSelect(opcion.id)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  checked ? "border-brand-600 dark:border-brand-400" : "border-zinc-300 dark:border-zinc-600"
                }`}
              >
                {checked && <span className="h-2.5 w-2.5 rounded-full bg-brand-600 dark:bg-brand-400" />}
              </span>
              <span>
                <span className={`block text-[15px] ${opcion.textoApoyo ? "font-bold" : ""}`}>{opcion.titulo}</span>
                {opcion.textoApoyo && (
                  <span className="mt-1 block text-sm leading-5 text-ink-600 dark:text-zinc-400">{opcion.textoApoyo}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
