<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Beneficios Tributarios FNCE Colombia
Aplicación web interactiva en Next.js para guiar y orientar a usuarios y empresas en la evaluación de elegibilidad para acceder a incentivos tributarios en proyectos de Fuentes No Convencionales de Energía (FNCE) y Gestión Eficiente de la Energía.

## Stack y Estructura
- **Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS.
- **Estructura de Carpetas:**
  - `src/app/layout.tsx`: Layout principal con `Header`/`Navbar` global y `Footer`.
  - `src/app/soy-elegible/`: Ruta principal del módulo de la encuesta de elegibilidad.
  - `src/app/soy-elegible/components/`: Componentes modulares de la encuesta (vista principal `SoyElegibleView`, componente base para renderizar preguntas, paneles informativos y botones).
  - `src/components/ui/`: Componentes comunes de la interfaz (`Header`, `Footer`, `ProgressBar`, `Button`, `Card`).
  - `specs/`: Carpeta de especificaciones SDD (`specs/001-cuestionario-elegibilidad/`).
  - `docs/`: Documentación y constitución del proyecto (`docs/constitution.md`).

## Arquitectura de UI y Reglas de Negocio de la Encuesta
1. **Layout General:**
   - **Navbar / Header:** Debe incluir navegación hacia: *Beneficios*, *Calculadora*, *¿Soy elegible?* (activo), *Guía de acceso*, *Casos de uso*, *Normativa*, *Recursos* y el botón hacia *Fuentes oficiales*. (El logo es el acceso al inicio; el link "Inicio" se quitó, posible retorno futuro.)
   - **Footer:** Diseñado fiel a los mockups institucionales con enlaces de navegación 
2. **Módulo "¿Soy elegible?" (`SoyElegibleView`):**
   - El cuestionario completo de 10 preguntas en secuencia simple (progreso "Pregunta N de 10", sin etapas) se maneja en una misma vista interactiva dentro de `/soy-elegible`.
   - Se debe crear un **Componente Base reutilizable para las preguntas** (`PreguntaCard` / `PreguntaLayout`). Cada pregunta comparte una estructura estandarizada que contiene:
     - Título principal de la pregunta y número de paso.
     - Texto de apoyo / descripción orientativa.
     - Opciones de respuesta seleccionables (tipo A, B, C, D o casillas interactivas).
     - Panel informativo lateral/inferior ("¿Qué se evalúa?" / "¿Por qué es importante?").
     - Bloque "Ten en cuenta" / "Importante" / "Normativa de referencia".
     - Botones de navegación de la encuesta (*Anterior*, *Siguiente* / *Ver resultado*).
3. **Gestión de Estado y Calidad de Código:**
   - Código en Next.js limpio, simple y fácil de mantener.
   - Estado interactivo del cliente manejado mediante React State / Context API con almacenamiento local (`localStorage`) para mantener el progreso del usuario sin requerir backend o base de datos por ahora.
   - Usar la directiva `'use client'` únicamente en los componentes interactivos.

## Forma de Trabajar
- Antes de tocar código, lee `docs/constitution.md` y la spec activa (`specs/NNN-*/spec.md`).
- Sigue de forma estricta la metodología Spec-Driven Development (SDD): la spec manda.
- Haz solo lo que se pide en la spec/tarea activa: no agregues lógica ni dependencias no solicitadas.
- Cambios pequeños, enfocados y respetando el diseño fiel a los mockups con Tailwind CSS.

## Memoria
- Al empezar cada tarea o sesión, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de dejarlo en la memoria.
- No guardes nunca datos sensibles (claves, tokens, datos personales).

## Límites
- ✅ Siempre: actualizar `MEMORY.md` al terminar cada tarea.
- ✅ Siempre: mantener componentes desacoplados, código TypeScript con tipos estrictos y textos en español.
- ⚠️ Pregunta antes: instalar nuevas dependencias de npm o crear archivos/rutas no previstos en el plan.
- 🚫 Nunca: escribir código de componentes o vistas sin tener la `spec.md` correspondiente aprobada.

## Verificación
- Comprobar que compila correctamente con `npm run build`.
- Verificar en desarrollo visual con `npm run dev`.
