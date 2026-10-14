# Spec 002 — Interfaz y Navegación de la "Encuesta"

- **Estado:** Aprobada. Código implementado según esta spec.
- **Base:** Spec 001 aprobada + `src/data/preguntasElegibilidad.ts` existente. Ruta nueva: `/encuesta`.
- **Alcance:** Maquetación de 3 secciones, estado en memoria React, reglas de navegación, progreso "Pregunta N de 10", handler preparado de "Ver Resultados".
- **Fuera de alcance:** Reglas de resultado/elegibilidad, persistencia en `localStorage` (diferida a la fase de resultados: recargar reinicia en P1), pantalla de resultados.

## Requisitos (EARS)

- **REQ-01:** La página DEBE componerse de 3 secciones: hero superior (2 columnas en `md`), pregunta+navegación (~60%) y panel informativo (~40%), apiladas en vertical en móvil.
- **REQ-02:** El hero DEBE ocupar todo el ancho del viewport con la imagen de fondo a sangre (`molinos.png`, `sizes="100vw"`), degradado blanco→transparente que cubre la mitad izquierda (lado fuerte de la imagen desde la mitad hacia la derecha) y texto en contenedor `max-w-[90rem]` alineado con el contenido inferior. Muestra badge "ENCUESTA DE ELEGIBILIDAD", H1 "¿Tu proyecto puede acceder a los beneficios tributarios?" (palabras clave en verde `brand-800`) y el subtítulo literal de la spec.
- **REQ-03:** Sobre la pregunta, dentro de la columna izquierda, el sistema DEBE mostrar "Pregunta N de 10" y barra con ancho `(N/10)*100%` del ancho de esa columna (sin etapas, sin stepper por fases).
- **REQ-04:** Las opciones DEBEN renderizarse como radio personalizado vertical; opción con `textoApoyo` muestra título en negrita + descriptivo pequeño; la seleccionada resalta con borde y fondo verde sutil (tokens `brand`, con variante `dark:`).
- **REQ-05:** El panel lateral DEBE renderizar cada bloque según su `tipo`: `texto` (título + párrafo), `listado` (solo ítems con check verde) y `texto-listado` (párrafo + ítems con check verde). Check con SVG inline (sin librerías nuevas).
- **REQ-06:** El estado DEBE ser `respuestas: Record<number, string>` (pregunta → opción) más índice actual, solo en memoria React.
- **REQ-07:** "Siguiente" DEBE estar deshabilitado si la pregunta activa no tiene respuesta; se habilita al seleccionar una opción. "Anterior" habilitado desde P2 y permite modificar respuestas ya dadas. Solo los botones ordenan el desplazamiento al inicio de la sección (bandera, a prueba de `StrictMode`); al entrar a la página siempre se muestra el hero (scroll a top al montar, cubre recargas a mitad).
- **REQ-08:** En P10 el botón DEBE decir "Ver Resultados" y llamar a un handler preparado que registra las respuestas en consola con TODO hacia la fase de resultados.
- **REQ-09:** La página DEBE verse bien en modo claro y oscuro zinc; el navbar marca "Encuesta" como activo automáticamente.
- **REQ-10:** Al abrir la encuesta por primera vez (P1 sin respuestas, sin marca en `localStorage`), el sistema DEBE mostrar el modal "Aviso inicial" (icono de advertencia, texto orientativo literal y botón "Siguiente"); cierra con el botón, clic fuera o Escape, bloquea el scroll de fondo y no vuelve a mostrarse tras cerrarse. El contenido de preguntas usa contenedor ancho `max-w-[90rem]`.

## Archivos previstos

- `src/app/encuesta/page.tsx` (server, composición) + `components/EncuestaView.tsx` (client, estado y navegación) + `components/PreguntaCard.tsx` + `components/InfoPanel.tsx`. Botones inline. Tokens nuevos en `globals.css`: `brand-50`, `brand-800 (#0c7c3c)`.

## Criterios de aceptación

- [ ] Avanzar exige responder; retroceder conserva y permite cambiar respuestas.
- [ ] P10 muestra "Ver Resultados"; el handler existe y compila.
- [ ] Panel renderiza los 3 tipos de bloque; listados con check verde.
- [ ] `lint` + `tsc --noEmit` + `build` en verde. Sin dependencias nuevas.

## Enmiendas

- **Enmienda 1 (hero móvil + menú móvil):** en móvil el hero muestra el texto sobre fondo liso con la foto debajo (`h-52`, sin imagen de fondo que se mezclaba con el texto); en `md+` sigue full-bleed. El menú móvil se cierra al pulsar un enlace (`onClick` en `NavLink`, sin efectos).
