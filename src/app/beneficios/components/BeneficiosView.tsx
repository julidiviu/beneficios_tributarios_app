"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { InfoPanel } from "@/app/encuesta/components/InfoPanel";
import { BENEFICIOS, type Beneficio, type CifraBeneficio } from "@/data/beneficios";

// Duración de la animación de las cifras, en milisegundos.
const CIFRA_MS = 1200;

const ICONOS: Record<Beneficio["id"], string> = {
  deduccion: "%",
  iva: "IVA",
  arancel: "0%",
  depreciacion: "↗",
};

function formatearCifra(valor: number, formato: CifraBeneficio["formato"]) {
  const texto =
    formato === "entero"
      ? String(Math.round(valor))
      : valor.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${texto}%`;
}

// Aparece una sola vez al entrar en viewport; con movimiento reducido visible por CSS.
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          obs.disconnect();
          // setState en callback asíncrono, no directo en el cuerpo del efecto.
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 ease-out motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

// Cifra animada: se anima una sola vez por montaje al entrar en viewport.
// Al cambiar de tarjeta no se re-anima (registro en `vistos`); al recargar sí.
function Cifra({
  cifra,
  beneficioId,
  vistos,
}: {
  cifra: CifraBeneficio;
  beneficioId: string;
  vistos: RefObject<Set<string>>;
}) {
  const [valor, setValor] = useState(cifra.inicio);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let viva = true;
    const finalizar = () => {
      if (!viva) return;
      setValor(cifra.valorFinal);
      vistos.current.add(beneficioId);
    };
    // Ya vista en este montaje o movimiento reducido: valor final sin animar.
    if (
      vistos.current.has(beneficioId) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      raf = requestAnimationFrame(finalizar);
      return () => {
        viva = false;
        cancelAnimationFrame(raf);
      };
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        obs.disconnect();
        const t0 = performance.now();
        const paso = (t: number) => {
          if (!viva) return;
          const p = Math.min(1, (t - t0) / CIFRA_MS);
          const avance = 1 - Math.pow(1 - p, 3);
          setValor(cifra.inicio + (cifra.valorFinal - cifra.inicio) * avance);
          if (p < 1) raf = requestAnimationFrame(paso);
          else finalizar();
        };
        raf = requestAnimationFrame(paso);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => {
      viva = false;
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [beneficioId, cifra, vistos]);

  return (
    <div
      ref={ref}
      className="grid place-items-center rounded-2xl bg-brand-50 p-8 text-center dark:bg-brand-400/10"
    >
      <div>
        <p className="text-5xl font-extrabold leading-none text-brand-700 dark:text-brand-400">
          {formatearCifra(valor, cifra.formato)}
        </p>
        <p className="mt-2 text-sm text-ink-600 dark:text-zinc-400">{cifra.etiqueta}</p>
      </div>
    </div>
  );
}

function CtaFlecha() {
  return (
    <span
      aria-hidden="true"
      className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg text-white"
    >
      →
    </span>
  );
}

function CtaBoton({
  etiqueta,
  titulo,
  icono,
  href,
}: {
  etiqueta: string;
  titulo: string;
  icono: string;
  href: string | null;
}) {
  const interior = (
    <>
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-base font-bold text-brand-700 dark:text-brand-400"
      >
        {icono}
      </span>
      <span>
        <span className="block text-xs font-semibold text-brand-700 dark:text-brand-400">{etiqueta}</span>
        <span className="block text-[15px] font-semibold leading-snug">{titulo}</span>
      </span>
      <CtaFlecha />
    </>
  );
  const clases =
    "flex items-center gap-3 rounded-2xl border border-zinc-200 bg-gradient-to-br from-brand-50 to-white p-4 dark:border-zinc-800 dark:from-brand-400/10 dark:to-zinc-950";
  if (!href) {
    return (
      <span aria-disabled="true" title="Módulo en construcción" className={`${clases} cursor-not-allowed opacity-70`}>
        {interior}
      </span>
    );
  }
  return (
    <Link href={href} className={`${clases} transition-colors hover:border-brand-600`}>
      {interior}
    </Link>
  );
}

export function BeneficiosView() {
  // null = panel plegado (al entrar a la página inicia plegado).
  const [seleccionado, setSeleccionado] = useState<number | null>(null);  // Cifras ya animadas en este montaje: no se repiten al cambiar de tarjeta.
  const vistos = useRef<Set<string>>(new Set());
  const tarjetasRef = useRef<HTMLDivElement>(null);
  const erroresRef = useRef<HTMLDivElement>(null);

  const beneficio = seleccionado !== null ? BENEFICIOS[seleccionado] : null;
  const mitad = beneficio ? Math.ceil(beneficio.bloques.length / 2) : 0;

  // Al entrar (desde otra pestaña, atrás/adelante o recarga), empezar desde el hero.
  useEffect(() => {
    // Manual: el navegador no restaura la posición anterior al volver.
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // Sin History API no hay restauración que desactivar.
    }
    const irArriba = () => window.scrollTo(0, 0);
    // Diferido tras el pintado: gana a cualquier restauración pendiente.
    const t = window.setTimeout(irArriba, 0);
    // pageshow cubre la vuelta con caché (el árbol se reutiliza sin remontar).
    window.addEventListener("pageshow", irArriba);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("pageshow", irArriba);
      try {
        window.history.scrollRestoration = "auto";
      } catch {
        // Sin History API no hay nada que restablecer.
      }
    };
  }, []);

  // Al abrir un detalle se ancla el borde de las tarjetas (quedan visibles
  // para elegir la siguiente); al plegar no se mueve.
  useEffect(() => {
    if (seleccionado === null) return;
    const reducida = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    tarjetasRef.current?.scrollIntoView({ block: "start", behavior: reducida ? "auto" : "smooth" });
  }, [seleccionado]);

  function elegir(i: number) {
    setSeleccionado((actual) => (actual === i ? null : i));
  }

  function alternarErrores() {
    const lista = erroresRef.current?.querySelectorAll("details");
    if (!lista || lista.length === 0) return;
    const algunoCerrado = Array.from(lista).some((d) => !d.open);
    lista.forEach((d) => {
      d.open = algunoCerrado;
    });
  }

  return (
    <div className="mx-auto w-full max-w-[90rem] px-4 pb-16 sm:px-6">
      <Reveal className="mt-8">
        <div
          ref={tarjetasRef}
          role="group"
          aria-label="Beneficios tributarios"
          className="grid scroll-mt-20 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {BENEFICIOS.map((b, i) => {
            const activa = i === seleccionado;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => elegir(i)}
                aria-expanded={activa}
                aria-controls="panel-beneficio"
                className={`relative flex flex-col gap-2 rounded-2xl border p-4 pr-10 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                  activa
                    ? "border-brand-600 bg-brand-50 dark:border-brand-400 dark:bg-brand-400/10"
                    : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/10 px-1 text-center text-xs font-bold text-brand-700 dark:text-brand-400"
                >
                  {ICONOS[b.id]}
                </span>
                <span className="text-[15px] font-bold">{b.tituloCorto}</span>
                <span className="text-[13px] leading-5 text-ink-600 dark:text-zinc-400">{b.resumen}</span>
                <span
                  aria-hidden="true"
                  className={`absolute right-4 top-4 text-brand-600 transition-transform dark:text-brand-400 ${activa ? "rotate-180" : ""}`}
                >
                  ⌄
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {beneficio && (
        <Reveal className="mt-6">
          <section
            id="panel-beneficio"
            aria-label={beneficio.tituloDetalle}
            className="scroll-mt-20 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
              {beneficio.norma}
            </p>
            <h2 className="mt-3 text-2xl font-bold">{beneficio.tituloDetalle}</h2>
            {beneficio.descripcion && (
              <p className="mt-2 max-w-3xl text-[15px] leading-7 text-ink-600 dark:text-zinc-400">
                {beneficio.descripcion}
              </p>
            )}

            {beneficio.cifra ? (
              <div className="mt-6 grid items-start gap-5 md:grid-cols-[0.7fr_1.3fr]">
                <Cifra cifra={beneficio.cifra} beneficioId={beneficio.id} vistos={vistos} />
                <InfoPanel bloques={beneficio.bloques} />
              </div>
            ) : (
              <div className="mt-6 grid items-start gap-5 md:grid-cols-2">
                <InfoPanel bloques={beneficio.bloques.slice(0, mitad)} />
                <InfoPanel bloques={beneficio.bloques.slice(mitad)} />
              </div>
            )}

            {beneficio.errores && (
              <div className="mt-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold">Errores que hacen perder el beneficio</h3>
                  <button
                    type="button"
                    onClick={alternarErrores}
                    className="rounded-lg border border-brand-600 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-400/10"
                  >
                    Abrir todos / Cerrar todos
                  </button>
                </div>
                <div ref={erroresRef} className="grid items-start gap-3 md:grid-cols-2">
                  {beneficio.errores.map((e) => (
                    <details
                      key={e.titulo}
                      className="group rounded-xl bg-navy-900 text-sm text-zinc-100 dark:bg-zinc-900"
                    >
                      <summary className="flex cursor-pointer list-none items-center gap-2 p-4 font-semibold [&::-webkit-details-marker]:hidden">
                        <span aria-hidden="true" className="text-amber-400">
                          ⚠
                        </span>
                        {e.titulo}
                        <span aria-hidden="true" className="ml-auto text-zinc-400 group-open:hidden">
                          +
                        </span>
                        <span aria-hidden="true" className="ml-auto hidden text-zinc-400 group-open:block">
                          −
                        </span>
                      </summary>
                      <p className="px-4 pb-4 pl-10 text-[13px] leading-5 text-zinc-300">{e.detalle}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </section>
        </Reveal>
      )}

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <CtaBoton
            etiqueta="Pestaña: Certificación paso a paso"
            titulo="Conoce el paso a paso para certificarte"
            icono="✓"
            href={null}
          />
          <CtaBoton
            etiqueta="Pestaña: Encuesta"
            titulo="¿Sabes si puedes tener beneficios tributarios?"
            icono="?"
            href="/encuesta"
          />
          <CtaBoton
            etiqueta="Pestaña: Calculadora"
            titulo="Calculemos un estimado"
            icono="∑"
            href={null}
          />
        </div>
      </Reveal>
    </div>
  );
}
