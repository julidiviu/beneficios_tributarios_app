import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Beneficios Tributarios FNCE Colombia",
  description:
    "Orientación educativa sobre incentivos tributarios para proyectos de Fuentes No Convencionales de Energía (FNCE) y Gestión Eficiente de la Energía.",
};

// Aplica el tema guardado antes del primer pintado para evitar parpadeos.
const themeScript = `(function(){try{var t=localStorage.getItem("fnce-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-ink-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
