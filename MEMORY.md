# MEMORY.md — Beneficios Tributarios FNCE Colombia
Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

## Estado Actual
- Proyecto inicializado con Next.js (App Router), TypeScript y Tailwind CSS.
- Arnés completo: `AGENTS.md` (con regla de leer constitución + spec activa), `MEMORY.md` y `docs/constitution.md` (6 principios).
- Layout base global creado: `Header` (9 links, activo con `usePathname`, hamburguesa móvil), `Footer` institucional dos franjas, `ThemeToggle` propio, `Logo` provisional inline, `layout.tsx` (`lang="es"`, anti-parpadeo) y home placeholder mínima sin restos del template.
- Layout hecho sin spec formal (waiver puntual: es shell, no funcionalidad); la spec arranca con la encuesta `soy-elegible`.
- Ajuste layout: footer compacto (`py-6`, `gap-6`), sin link "Inicio" (el logo es el inicio), `not-found.tsx` propio en español dentro del layout (el 404 por defecto de Next es blanco y simulaba un cambio de tema).
- **Logo final:** `Logo` usa `/images/Beneficios_Tributarios_LOGO.png` (36×36 con `next/image`) en header y footer.

## Decisiones (y por qué)
- **Sin backend / Sin base de datos:** El estado de las 10 preguntas se gestionará localmente en el cliente con React state y persistencia opcional en `localStorage` para agilidad y simplicidad.
- **Componente Base de Pregunta:** Se estandarizará la estructura UI de las preguntas (título, texto de apoyo, opciones A/B/C/D, paneles de "Ten en cuenta" y botones de navegación) para garantizar reusabilidad y evitar código duplicado.
- **Wizard en una sola ruta (`/soy-elegible`):** Toda la encuesta avanzará progresivamente dentro de `SoyElegibleView` para mantener una experiencia fluida y reactiva sin recargas de página.
- **Constitución aprobada (6 principios):** idioma mixto (identificadores en inglés, textos/comentarios en español), verificación por cambio con `build` + `tsc --noEmit` + recorrido manual, encuesta anónima total.
- **Tema sin dependencias:** toggle propio (clase `.dark` + `localStorage` + script anti-parpadeo) en vez de `next-themes`; oscuro exige `@custom-variant dark` en Tailwind v4 y paleta zinc.
- **Paleta por tokens:** `brand-*`/`navy-900` aproximados en `@theme` de `globals.css`; calibrar con hex reales de los mockups en un solo archivo.

## Aprendizajes y Errores a Evitar
- Next 16 bloquea `new Date()` en componentes prerenderizados: año del footer fijo en 2026 con nota `shortcut`.
- ESLint prohíbe `setState` directo en efectos: el toggle evita estado React (iconos alternados por CSS con `dark:`).
- PowerShell no acepta `&&` para encadenar comandos; usar `;`.

## Próximos Pasos
- Verificación visual en `npm run dev` contra las 3 capturas (navbar, footer, página) y calibrar tokens de color.
- Generar el borrador de la especificación inicial (`specs/001-cuestionario-elegibilidad/spec.md`) utilizando la plantilla SDD y formato EARS.
