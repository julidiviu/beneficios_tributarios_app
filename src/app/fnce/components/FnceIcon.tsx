import type { ReactNode } from "react";
import type { IconoFnce } from "@/data/fnce";

// Iconos de la pestaña FNCE: SVG inline con stroke currentColor,
// mismo patrón que InfoPanel. El color lo da el círculo padre
// (text-brand-700), así siempre respetan la paleta.
const PATHS: Record<Exclude<IconoFnce, "hidrogeno" | "hidrogeno-azul">, ReactNode> = {
  sostenible: (
    <>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 3v6h-6" />
    </>
  ),
  incentivos: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
    </>
  ),
  ruta: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  diversificacion: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  hoja: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-10 5-2 8-2 8-2s0 3-2 8c-2 5-4 8-7 11z" />
      <path d="M4 21c4-4 7-7 12-11" />
    </>
  ),
  moneda: (
    <>
      <path d="M12 2v20" />
      <path d="M17 6.5c0-2-2-2.5-4.5-2.5S7 5.5 7 8c0 3.5 10 2.5 10 6.5 0 2.5-2.5 4-5.5 4S7 17.7 7 15.7" />
    </>
  ),
  solar: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  eolica: (
    <>
      <path d="M3 8h9a3 3 0 1 0-3-3" />
      <path d="M3 12h13a3 3 0 1 1-3 3" />
      <path d="M3 16h6a2.5 2.5 0 1 1-2.5 2.5" />
    </>
  ),
  calor: (
    <>
      <path d="M12 22c4 0 7-2.8 7-6.5 0-2.5-1.2-4.3-2.5-5.8-.3 1-1 2-2 2.3C14 8 13.5 4.5 13.5 2 10 4 5 8.5 5 15.5 5 19.2 8 22 12 22z" />
    </>
  ),
  generacion: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
  agua: (
    <>
      <path d="M2 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
      <path d="M2 13c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
      <path d="M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
    </>
  ),
  arriba: (
    <>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </>
  ),
  diagonal: (
    <>
      <path d="M7 7l10 10" />
      <path d="M17 7v10H7" />
    </>
  ),
};

// H₂ como texto SVG con fill currentColor: respeta la paleta sin emojis.
function HidrogenoTexto() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="inherit">
        H₂
      </text>
    </svg>
  );
}

export function FnceIcon({ nombre }: { nombre: IconoFnce }) {
  if (nombre === "hidrogeno" || nombre === "hidrogeno-azul") return <HidrogenoTexto />;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[nombre]}
    </svg>
  );
}
