# Constitution — Beneficios Tributarios FNCE
1. Stack mínimo: solo Next/React/TS/Tailwind instalados; nueva dependencia exige justificación y aprobación previa.
2. Spec manda: sin spec.md aprobada no hay código; si discrepan, se corrige el código, no la spec.
3. Lógica fuera de UI: elegibilidad en funciones puras en `src/lib/`; componentes solo renderizan y navegan.
4. Tests sin dependencias: cada cambio verifica con `npm run build`, `tsc --noEmit` y recorrido manual de la spec.
5. Datos protegidos: encuesta anónima, solo respuestas en `localStorage`; prohibido pedir/guardar/enviar datos personales.
6. Idioma mixto: identificadores en inglés, textos visibles y comentarios en español (verificable en revisión y en `lang="es"`).
