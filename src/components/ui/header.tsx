"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

type NavItem = { label: string; href: string | null };

const LINKS: NavItem[] = [
  { label: "FNCE", href: "/fnce" },
  { label: "Beneficios", href: "/beneficios" },
  { label: "Encuesta", href: "/encuesta" },
  { label: "Certificación paso a paso", href: null },
  { label: "Calculadora", href: null },
];

function BoltIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function NavLink({
  item,
  active,
  stacked = false,
  onNavigate,
}: {
  item: NavItem;
  active: boolean;
  stacked?: boolean;
  onNavigate?: () => void;
}) {
  const base = stacked ? "block px-2 py-2.5 text-[15px]" : "px-1 py-2 text-sm";
  if (!item.href) {
    return (
      <span
        aria-disabled="true"
        title="Módulo en construcción"
        className={`${base} cursor-not-allowed font-medium text-ink-400 dark:text-zinc-600`}
      >
        {item.label}
      </span>
    );
  }
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`${base} font-medium transition-colors ${
        active
          ? "border-b-2 border-brand-600 text-brand-700 dark:text-brand-400"
          : "text-ink-600 hover:text-ink-900 dark:text-zinc-300 dark:hover:text-white"
      }`}
    >
      {item.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string | null) {
    return href !== null && (pathname?.startsWith(href) ?? false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Ir al inicio">
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex">
          {LINKS.map((item) => (
            <NavLink key={item.label} item={item} active={isActive(item.href)} />
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <span
            aria-disabled="true"
            title="Módulo en construcción"
            className="hidden cursor-not-allowed items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
          >
            <BoltIcon />
            Fuentes oficiales
          </span>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-600 hover:bg-zinc-100 lg:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Navegación móvil" className="border-t border-zinc-200 bg-white px-4 pb-4 pt-1 lg:hidden dark:border-zinc-800 dark:bg-zinc-950">
          {LINKS.map((item) => (
            <NavLink key={item.label} item={item} stacked active={isActive(item.href)} onNavigate={() => setOpen(false)} />
          ))}
          <span
            aria-disabled="true"
            className="mt-2 inline-flex cursor-not-allowed items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
          >
            <BoltIcon />
            Fuentes oficiales
          </span>
        </nav>
      )}
    </header>
  );
}
