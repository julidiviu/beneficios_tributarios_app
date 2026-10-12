import Link from "next/link";
import { Logo } from "./logo";

const COL_A = [
  { label: "Beneficios", href: null as string | null },
  { label: "Calculadora", href: null },
  { label: "¿Soy elegible?", href: "/soy-elegible" },
];

const COL_B = [
  { label: "Guía de acceso", href: null as string | null },
  { label: "Casos de uso", href: null },
  { label: "Normativa", href: null },
  { label: "Recursos", href: null },
  { label: "Fuentes oficiales", href: null },
];

function FooterLink({ label, href }: { label: string; href: string | null }) {
  if (!href) {
    return (
      <li>
        <span aria-disabled="true" className="cursor-not-allowed text-sm text-zinc-400 dark:text-zinc-600">
          {label}
        </span>
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className="text-sm text-zinc-200 transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-white">
        {label}
      </Link>
    </li>
  );
}

function LeafIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-brand-400">
      <path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-10 5-2 8-2 8-2s0 3-2 8c-2 5-4 8-7 11z" />
      <path d="M4 21c4-4 7-7 12-11" />
    </svg>
  );
}

export function Footer() {
  // shortcut: año fijo, hacerlo dinámico cuando el footer deje de ser estático
  const year = 2026;

  return (
    <footer className="bg-navy-900 text-zinc-200 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
        </div>
        <nav aria-label="Enlaces secundarios">
          <ul className="space-y-2">
            {COL_A.map((item) => (
              <FooterLink key={item.label} label={item.label} href={item.href} />
            ))}
          </ul>
        </nav>
        <nav aria-label="Enlaces de recursos">
          <ul className="space-y-2">
            {COL_B.map((item) => (
              <FooterLink key={item.label} label={item.label} href={item.href} />
            ))}
          </ul>
        </nav>
        <div className="flex items-start gap-3">
          <LeafIcon />
          <p className="text-[15px] font-medium leading-snug text-white dark:text-zinc-100">
            Transición energética, un futuro más sostenible.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:text-zinc-500">
          <p>Información de carácter educativo. La aplicación de los beneficios tributarios está sujeta a la normatividad vigente y a la certificación de la UPME.</p>
          <p className="shrink-0">Colombia&nbsp;&nbsp;|&nbsp;&nbsp;{year}</p>
        </div>
      </div>
    </footer>
  );
}
