"use client";

import { useEffect } from "react";

function AdvertenciaIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-amber-500"
    >
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function AvisoInicial({ onClose }: { onClose: () => void }) {
  // Cierre con Escape + bloqueo del scroll de fondo mientras está abierto.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="aviso-inicial-titulo"
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
      >
        <div className="flex items-center gap-2.5">
          <AdvertenciaIcon />
          <h2 id="aviso-inicial-titulo" className="text-lg font-bold">
            Aviso inicial
          </h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-zinc-400">
          Esta encuesta tiene fines informativos y orientativos. El resultado no constituye una certificación de
          la UPME, un concepto tributario vinculante ni una garantía de aprobación de los beneficios. La
          aplicación de cada incentivo depende de las características del proyecto, la normativa vigente y el
          cumplimiento de los requisitos correspondientes.
        </p>
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            autoFocus
            onClick={onClose}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
