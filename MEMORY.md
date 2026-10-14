# MEMORY.md — Beneficios Tributarios FNCE Colombia
Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

## Estado Actual
- Repo remoto enlazado y al día: `origin` = `https://github.com/julidiviu/beneficios_tributarios_app.git`, rama `main` con upstream; commits `b6bda0f` (template) + `d933092` (layout header/footer).
- Proyecto inicializado con Next.js (App Router), TypeScript y Tailwind CSS.
- Arnés completo: `AGENTS.md` (con regla de leer constitución + spec activa), `MEMORY.md` y `docs/constitution.md` (6 principios).
- Layout base global creado: `Header` (9 links, activo con `usePathname`, hamburguesa móvil), `Footer` institucional dos franjas, `ThemeToggle` propio, `Logo` provisional inline, `layout.tsx` (`lang="es"`, anti-parpadeo) y home placeholder mínima sin restos del template.
- Layout hecho sin spec formal (waiver puntual: es shell, no funcionalidad); la spec arranca con la encuesta `encuesta`.
- Ajuste layout: footer compacto (`py-6`, `gap-6`), sin link "Inicio" (el logo es el inicio), `not-found.tsx` propio en español dentro del layout (el 404 por defecto de Next es blanco y simulaba un cambio de tema).
- **Logo final:** `Logo` usa `/images/Beneficios_Tributarios_LOGO.png` (36×36 con `next/image`) en header y footer.
- **Sin etapas:** encuesta en secuencia simple con progreso "Pregunta N de 10"; spec 001 aprobada.
- **Diccionario creado:** `src/data/preguntasElegibilidad.ts` con 3 interfaces y 10 preguntas (48 opciones, IDs `pN_opM`); `lint` + `tsc` + `build` en verde. Link "Inicio" eliminado también de `AGENTS.md` (retorno futuro posible).
- **Spec 002 aprobada e implementada:** `/encuesta` con hero full-bleed (molinos.png + degradado, sin divisor), `EncuestaView` (memoria sin persistencia, progreso dentro de la columna 60%, transición saliendo→entrando con `translate-x`+opacidad, card+panel juntos), `PreguntaCard` (radio nativo) e `InfoPanel` (iconos explícitos por bloque: info/documento/norma/destacado, SVG inline); tokens `brand-50`/`brand-800`.
- **Tinta institucional:** texto en modo claro en escala `ink` (`900 #000942`, `600 #3d4675`, `400 #6a7194`); hero con padding a mitad del vacío lateral. Specs 001/002 sincronizadas; `lint` + `tsc` + `build` en verde.
- **Scroll al cambiar de pregunta:** solo los botones lo ordenan (bandera `shouldScroll`, a prueba de `StrictMode`); al entrar/recargar siempre se muestra el hero. Hero alineado al inset de la sección 2 con leve invasión a la foto. Spec 002 sincronizada.
- **Prueba de navegación:** script temporal verificó las 10 preguntas (títulos, 48 opciones con IDs únicos, paneles con tipo/icono, conteos de listados, textos fieles) + HTML prerenderizado de P1 (título, opción, panel, progreso, botón). Todo pasa; script eliminado.

## Decisiones (y por qué)
- **Sin backend / Sin base de datos:** El estado de las 10 preguntas se gestionará localmente en el cliente con React state y persistencia opcional en `localStorage` para agilidad y simplicidad.
- **Componente Base de Pregunta:** Se estandarizará la estructura UI de las preguntas (título, texto de apoyo, opciones A/B/C/D, paneles de "Ten en cuenta" y botones de navegación) para garantizar reusabilidad y evitar código duplicado.
- **Wizard en una sola ruta (`/encuesta`):** Toda la encuesta avanzará progresivamente dentro de `EncuestaView` para mantener una experiencia fluida y reactiva sin recargas de página.
- **Nav de 5 secciones:** navbar/footer con FNCE, Beneficios, Encuesta, Certificación paso a paso, Calculadora (solo Encuesta con href; resto deshabilitado). Sin redirect de `/soy-elegible` (muere con 404).
- **Hero full-bleed + contenido ancho + aviso:** hero con imagen a todo el ancho (degradado corta ~mitad, texto en `max-w-[90rem] max-w-2xl` alineado con preguntas), contenido en `max-w-[90rem]`, modal `AvisoInicial` solo la primera vez (marca `encuesta:aviso-visto` en `localStorage`, cierra con botón/fuera/Escape, bloquea scroll).
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
- **Spec 003 enmienda 2 (inicia plegada):** `seleccionado` inicia en `null`; scroll al panel vía efecto (el `rAF` fallaba al primer clic porque el panel aún no existe); spec y criterios actualizados; `tsc` + `lint` + `build` en verde.
- **Spec 003 enmienda 3 (scroll al entrar):** `scrollRestoration` en `manual` + scroll diferido + `pageshow` (la vuelta atrás/adelante restaura scroll nativo y reutiliza el árbol sin remontar); spec actualizada.
- **Spec 003 enmienda 4 (ancla en tarjetas):** al abrir se ancla el borde superior de la sección de tarjetas (`block: "start"` + `scroll-mt-20`), no el detalle; spec actualizada.
- **Spec 002 enmienda 1 (hero móvil + menú móvil):** encuesta con foto debajo en móvil (sin mezcla con texto) y menú que se cierra al pulsar enlace; spec actualizada; `tsc` + `lint` + `build` en verde.
- **Spec 003 enmienda 5 (hero contenido):** foto en columna derecha (`object-center`, `sizes` 45vw, fundido solo en borde izquierdo) en vez de full-bleed; spec actualizada.
- **Spec 003 enmienda 6 (hero al borde derecho):** foto anclada a la derecha hasta el borde (62% en `md+`, fundido al 45%) como el SVG del mockup; spec actualizada; `tsc` + `lint` + `build` en verde.
- **FNCE hero (sin spec, waiver solo-UI):** `src/data/fnce.ts` + `src/app/fnce/page.tsx` con hero espejo de Beneficios (fade 62%/45%, `dark:`, fallback móvil) + CTA a `#accesos` + 3 tarjetas; nav header/footer FNCE desbloqueado a `/fnce`; `build` + `tsc` en verde.
