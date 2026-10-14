# Spec 003 — Pestaña "Beneficios"

- **Estado:** Aprobada. Código implementado según esta spec.
- **Base:** Specs 001/002 aprobadas + reuso de `InfoPanel`, tokens `brand`/`ink`, patrón de hero full-bleed de `/encuesta` y patrón de nav deshabilitado de `header.tsx`. Imagen: `public/images/beneficios/beneficios_tributarios.jpg` (ya existe).
- **Alcance:** Ruta nueva `/beneficios` con 4 secciones (hero, 4 tarjetas, detalle del beneficio seleccionado, 3 CTAs), diccionario `src/data/beneficios.ts` (4 beneficios con contenido literal del mockup), animaciones de aparición por scroll y contadores 0% / 33,33% una vez por montaje, habilitación del link "Beneficios" en el header y en el footer.
- **Fuera de alcance:** Páginas "Certificación paso a paso" y "Calculadora" (sus CTAs quedan deshabilitados), motor de cálculo, persistencia en `localStorage`, cambios al mockup fuera de lo aquí descrito.

## Requisitos (EARS)

- **REQ-01:** La página DEBE vivir en la ruta `/beneficios`; el header DEBE marcar "Beneficios" como activo (misma lógica `usePathname` que "Encuesta") y el footer DEBE enlazarlo: `Beneficios` pasa de `href: null` a `href: "/beneficios"` en `header.tsx` (`LINKS`, desktop y móvil) y en `footer.tsx` (`COL_A`, el `FooterLink` existente ya resuelve enlace vs. deshabilitado).
- **REQ-02:** El sistema DEBE exponer en `src/data/beneficios.ts` los tipos `CifraBeneficio { valorFinal: number; formato: "entero" | "decimal-2"; etiqueta: string; direccion: "sube" | "baja"; inicio: number }`, `ErrorBeneficio { titulo: string; detalle: string }` y `Beneficio { id: "deduccion" | "iva" | "arancel" | "depreciacion"; tituloCorto: string; resumen: string; norma: string; tituloDetalle: string; descripcion?: string; bloques: BloqueInformativo[]; errores?: ErrorBeneficio[]; cifra?: CifraBeneficio }` (reusando `BloqueInformativo` de `preguntasElegibilidad.ts`, sin redefinirlo), y la constante `BENEFICIOS: Beneficio[]` con exactamente 4 elementos en el orden deducción → iva → arancel → depreciación.
- **REQ-03:** El hero DEBE mostrar el texto a la izquierda (contenedor `max-w-[90rem]`) y la foto `beneficios_tributarios.jpg` anclada a la derecha hasta el borde de la pantalla: en `md+` ocupa el 62% derecho a todo el alto del hero (`object-cover object-center`, foco en el portátil y los planos, `sizes="62vw"`), con fundido amplio en su borde izquierdo (blanco→transparente hasta el 45% y gemelo `dark:` en `zinc-950`); en móvil la foto va debajo del texto (`h-52`, ancho del contenedor). Textos literales: pill `BENEFICIOS TRIBUTARIOS`, H1 `¿Qué son los beneficios tributarios - FNCE?` y apoyo `Es un incentivo que el Estado da a quien invierte en proyectos de Fuentes No Convencionales de Energía (FNCE). No es un regalo: es una forma de que la inversión en energía limpia se recupere más rápido y te permiten pagar menos impuestos. Aquí te explicamos cuáles son y cómo funcionan.`
- **REQ-04:** La sección 2 DEBE mostrar las 4 tarjetas en grid (4→2→1 columnas) con título + resumen literales del mockup (ver Contenido), estilo `PreguntaCard` (borde, seleccionada en `brand-50`), `aria-expanded` y chevron que rota en la activa. Clic en la tarjeta activa DEBE plegar el panel (detalle oculto, `seleccionado: number | null`).
- **REQ-05:** La sección 3 DEBE iniciar plegada (sin detalle visible) al entrar a la página; al elegir una tarjeta aparece su panel y la página se ancla al borde superior de la sección de tarjetas (`block: "start"`, con `scroll-mt-20` por el header fijo) para que queden visibles al elegir la siguiente.`. El panel DEBE renderizar: chip de norma, H2 `tituloDetalle`, descripción, bloques vía `InfoPanel` (mismos tipos `texto`/`listado`/`texto-listado`/`pasos` y checks verdes), notas con fondo azul oscuro (`fondo: "nota"`, título ámbar) y errores (solo deducción) como `<details>` nativos en 2 columnas con botón "Abrir todos / Cerrar todos". Fondos por bloque (`BloqueInformativo.fondo`, hex del mockup): izquierda en verde (`#e8f4ec`), derecha en azul (`#e6f0fb`); en arancel/depreciación el listado va en verde. El bloque `Cómo funciona` de deducción usa `tipo: "pasos"` (círculo verde numerado + título en bold + texto en línea aparte).
- **REQ-06:** Las cifras DEBEN animarse solo cuando entran en viewport (`IntersectionObserver`, una vez por montaje): arancel de 40 a 0 con sufijo `%` y etiqueta `de arancel`; depreciación de 0 a 33,33 con formato `es-CO` y etiqueta `tasa anual máxima`. Cambiar de tarjeta NO re-anima (guardia `useRef<Set>`); recargar la página SÍ (el Set muere con el montaje). Duración ~1,2 s con `requestAnimationFrame`; con `prefers-reduced-motion` se muestra el valor final directo.
- **REQ-07:** Las secciones 2–4 DEBEN aparecer con reveal on scroll (una vez, `opacity` + `translate-y`, respeta `motion-reduce`); el hero es visible al cargar sin reveal. Al entrar a la página (desde otra pestaña, atrás/adelante o recarga) SIEMPRE se muestra el hero: `scrollRestoration` en `manual` + scroll a top diferido tras el pintado + `pageshow` (cubre la vuelta con caché del router sin remontaje).
- **REQ-08:** La sección 4 DEBE mostrar 3 CTAs (icono izq + flecha der) con textos literales (ver Contenido): solo "Encuesta" es `Link` a `/encuesta`; "Certificación paso a paso" y "Calculadora" quedan deshabilitados con `aria-disabled` y `title="Módulo en construcción"`, sin `href`.
- **REQ-09:** La página DEBE verse bien en modo claro y oscuro (cajas `mint`/`blue` → `brand-50`/`blue-50` con `dark:` tenues, cifra legible en ambos).
- **REQ-10:** Los textos visibles DEBEN estar en español e identificadores/comentarios según constitución (principio 6, `lang="es"`).
- **REQ-11:** La página DEBE ser responsiva y manejar el tema sin lógica nueva: tarjetas en grid 4→2→1 columnas, detalle y columnas internas (`cols`, `two`, errores, CTAs) apiladas en 1 columna en móvil, hero con texto legible sobre la foto en pantallas pequeñas y sin scroll horizontal en 360px; TODA superficie nueva DEBE tener variante `dark:` (nada de fondos claros fijos en oscuro), el hero reusa el degradado `dark:` gemelo de `/encuesta` y el toggle existente (`ThemeToggle`, clase `.dark` + `localStorage`) sigue siendo la única fuente del tema.

## Contenido (transcripción literal del mockup aprobado)

### Hero
- Pill: `BENEFICIOS TRIBUTARIOS` · H1: `¿Qué son los beneficios tributarios - FNCE?` (ver REQ-03 para el apoyo).

### Tarjetas (título + resumen)
1. `Deducción en renta` — `Permite deducir hasta el 50% del valor total de la inversión realizada del impuesto de renta, aplicable en un plazo máximo de 15 años. Límite: no puede superar el 50% de la renta líquida del año.`
2. `Exclusión de IVA` — `Los equipos, maquinaria y servicios del proyecto quedan excluidos de IVA (Ley 2099 de 2021). La inversión debe estar evaluada y certificada por la UPME.`
3. `Exención de aranceles` — `Arancel del 0% para la importación de maquinarias, equipos y materiales destinados exclusivamente a proyectos FNCE sin producción nacional.`
4. `Depreciación acelerada` — `Depreciación anual acumulada de hasta el 33,33% para activos asociados a proyectos sostenibles y gestión eficiente de energía.`

### Detalle deducción
- Norma: `Art. 11 · Ley 1715 de 2014, mod. Ley 2099 de 2021 · Decreto 1625 de 2016, arts. 1.2.1.18.79 y 2.2.3.8.2.3` · H2: `La deducción especial en el impuesto de renta` · Descripción: `Te permite restar de tu renta hasta el 50% de lo que inviertas en un proyecto de energía limpia, repartido hasta en 15 años.`
- [listado] `Ten en cuenta`: `50% del valor de la inversión es deducible` | `15 años es el plazo máximo para aprovecharlo` | `Límite del 50% de la renta líquida antes de deducción es el tope de cada año` | `UPME certifica el proyecto antes de aplicar el beneficio` | `Se debe ingresar en la casilla 66 del formulario 110`.
- [texto] `Nota:` `registrar los paneles u otros equipos como propiedad, planta y equipo no impide la deducción. El activo se mantiene en tu contabilidad y, al mismo tiempo, genera la deducción especial, siempre que tengas la certificación de la UPME y respetes el tope anual.`
- [texto] `Cómo funciona` pasos: `Paso 1: Inviertes y certificas — Compras e instalas un sistema FNCE y la UPME certifica que tu inversión corresponde a un proyecto de energía limpia.` | `Paso 2: Calculas el tope del año — Cada año puedes deducir como máximo el 50% de tu renta líquida, calculada antes de restar este beneficio. Lo que no alcances a deducir queda disponible para los años siguientes.` | `Paso 3: Lo declaras — En tu declaración de renta, con la certificación en mano, registras la deducción en la casilla y con el código que indica la DIAN: casilla 66 «Otros gastos y deducciones» del formulario 110.`
- [texto] `Nota:` `los gastos de operar el proyecto (mantenimiento, seguros, servicios) son deducibles por las reglas generales del Estatuto Tributario, de forma independiente.`
- Errores (7, título + detalle): `Aplicar la deducción sin certificado de la UPME` / `Sin la certificación, la DIAN no acepta la deducción. Tramítala antes de declarar.` | `Facturar todo en una sola factura` / `La DIAN puede rechazar la deducción si las facturas no separan cada equipo y componente. Pide facturas discriminadas por ítem.` | `Superar el tope anual` / `No deduzcas más del 50% de tu renta líquida del año, calculada antes de restar la deducción.` | `Usar la casilla equivocada` / `En el formulario 110 va en la casilla 66.` | `No enviar los reportes anuales a la UPME` / `Puedes perder la certificación y, con ella, el beneficio.` | `Vender el activo antes de tiempo` / `Si lo vendes antes de terminar su depreciación, debes reintegrar lo deducido como renta líquida.` | `Leasing sin opción de compra irrevocable` / `Si desistes de la opción de compra, debes restituir lo deducido como renta líquida en ese año.`

### Detalle IVA
- Norma: `Art. 12 · Ley 1715 de 2014, mod. art. 9 Ley 2099 de 2021` · H2: `Exclusión de IVA` (sin descripción).
- [texto-listado] `Cómo funciona`: apoyo `Los equipos, maquinaria y servicios del proyecto quedan excluidos de IVA, evitando pagar el impuesto para luego solicitar devolución.` + ítems `En una compra de $100.000.000 evitas $19.000.000 de IVA (si la tarifa es del 19%). Ese dinero queda disponible como caja y el activo entra a tu balance por un valor menor.` | `La certificación de la UPME debe existir para aplicar directamente la exclusión al momento de la operación.`
- [texto] `Importante`: `Si compras los equipos pagando IVA y posteriormente obtienes la certificación de la UPME, podrías solicitar la devolución del IVA pagado, siempre que cumplas los requisitos legales y documentales correspondientes. No es una devolución automática.`

### Detalle arancel
- Norma: `Art. 13 · Ley 1715 de 2014, mod. Ley 2099 de 2021` · H2: `Exención de aranceles` · Cifra: 40→0 `%`, etiqueta `de arancel`.
- [listado] sin título visible, ítems: `Los equipos importados que no se producen en Colombia entran sin pagar derechos de importación.` | `Sin el beneficio, el arancel suele ir del 5% al 15% del valor del costo, seguro y flete de la mercancía.` | `Solo aplica a equipos sin producción nacional suficiente, y debe solicitarse a la DIAN como mínimo 15 días hábiles antes de importar, a través de la Ventanilla Única de Comercio Exterior, con la certificación de la UPME.`

### Detalle depreciación
- Norma: `Art. 14 · Ley 1715 de 2014, mod. Ley 2099 de 2021` · H2: `Depreciación acelerada` · Cifra: 0→33,33 `%`, etiqueta `tasa anual máxima`.
- [listado] sin título visible, ítems: `Puedes depreciar los activos del proyecto (maquinarias, equipos y obras civiles) más rápido: contable y fiscalmente en un plazo mínimo de 3 años, reduciendo la base gravable del impuesto de renta mucho más rápido.` | `Con un activo de $300.000.000, depreciarlo a 10 años da $30.000.000 por año. Con el 33,33% anual, la deducción puede acercarse a $99.900.000 por año.` | `Puedes cambiar la tasa cada año sin superar el 33,33%, informando previamente a la DIAN. Antes de la Ley 2099 el máximo era 20%.` | `Requiere la obtención previa de la certificación técnica de la UPME.`

### CTAs
1. `Pestaña: Certificación paso a paso` / `Conoce el paso a paso para certificarte` (deshabilitado). 2. `Pestaña: Encuesta` / `¿Sabes si puedes tener beneficios tributarios?` (→ `/encuesta`). 3. `Pestaña: Calculadora` / `Calculemos un estimado` (deshabilitado).

## Archivos previstos

- `src/data/beneficios.ts` (tipos + `BENEFICIOS`, solo contenido, importa `BloqueInformativo`).
- `src/app/beneficios/page.tsx` (server: metadata + hero) + `src/app/beneficios/components/BeneficiosView.tsx` (único `'use client'`: tarjetas, detalle, cifras, reveal, CTAs; reusa `InfoPanel`).
- Ediciones: `src/components/ui/header.tsx` (`Beneficios` con `href: "/beneficios"` + active) y `src/components/ui/footer.tsx` (`COL_A Beneficios` con `href: "/beneficios"`). Sin dependencias nuevas, sin tokens nuevos.

## Criterios de aceptación

- [ ] `/beneficios` renderiza las 4 secciones con los textos literales de esta spec.
- [ ] `BENEFICIOS` tiene 4 elementos en orden con `id`, norma, bloques y cifras según Contenido.
- [ ] Inicia plegada; clic abre el panel, clic en la activa lo pliega; cambiar de tarjeta cambia el panel sin re-animar cifras.
- [ ] Al navegar desde otra pestaña la página carga desde el hero, no en el detalle.
- [ ] Cifras: 40→0 y 0→33,33 al entrar en viewport, una vez por montaje; `motion-reduce` muestra el final.
- [ ] CTAs: solo Encuesta navega; los otros dos deshabilitados sin `href`.
- [ ] Header y footer enlazan a `/beneficios`; el header lo marca activo.
- [ ] Responsiva en 360px sin scroll horizontal; toda superficie con variante `dark:` y sin lógica nueva de tema.
- [ ] `lint` + `tsc --noEmit` + `build` en verde. Sin dependencias nuevas.
