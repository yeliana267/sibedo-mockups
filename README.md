# SIBEDO - Mockups

Maquetación HTML/CSS de la plataforma **SIBEDO** (Sistema de Información de Becas para Estudiantes Dominicanos), proyecto académico para Introducción a la Ingeniería de Software.

---

## Cómo abrir el proyecto

Este proyecto usa `fetch` para cargar partials (nav y footer) en cada página, así que **necesitas un servidor local** — no se puede abrir con doble click.

### Opción recomendada: Live Server (VS Code)

1. Instala la extensión **Live Server** en VS Code
2. Click derecho sobre `index.html` → "Open with Live Server"
3. Se abre en el navegador automáticamente en `http://127.0.0.1:5500`

---

## Estructura del proyecto

```
sibedo-mockups/
├── _template.html          ← Plantilla base (cópiala para crear nuevas pantallas)
├── index.html              ← HomePage
├── buscar.html             ← Buscador con filtros
├── beca-detalle.html       ← Detalle de una beca
├── guia.html               ← Guía de aplicación
├── testimonios.html        ← Testimonios de becados
├── admin/                  ← Módulo del administrador
│   ├── login.html
│   ├── dashboard.html
│   ├── agregar-beca.html
│   ├── editar-beca.html
│   └── moderar.html
├── partials/               ← Fragmentos reutilizables
│   ├── nav.html
│   └── footer.html
├── css/
│   ├── variables.css       ← Design system (colores, tipografía, espaciados)
│   ├── components.css      ← Botones, cards, inputs reutilizables
│   └── styles.css          ← Layout general, navbar, footer
├── js/
│   └── includes.js         ← Carga partials con fetch
└── assets/img/             ← Imágenes del proyecto
```

---

## Repartición de responsabilidades

| Persona  | Responsabilidad                          | Archivos                                              |
|----------|------------------------------------------|-------------------------------------------------------|
| Yeli     | Design system + Home + Buscador          | `css/*`, `partials/*`, `index.html`, `buscar.html`    |
| Mariana  | Detalle de beca + Guía de aplicación     | `beca-detalle.html`, `guia.html`                      |
| Alvely   | Testimonios                              | `testimonios.html`                                    |
| Eduardo  | Módulo administrador completo            | `admin/*`                                             |

---

## Cómo crear una pantalla nueva

1. **Copia** `_template.html` y renómbralo (ej: `mi-pagina.html`)
2. **Cambia** el `<title>` por el nombre de tu pantalla
3. **Modifica solo** lo que está dentro de `<main>` — no toques los `<link>` de CSS, el `data-include` ni el `<script>`
4. **Usa los componentes existentes** (botones, cards, inputs) en lugar de inventar nuevos. Si necesitas algo que no existe, avísale a Yeli para agregarlo a `components.css`

---

## Reglas del equipo

- ✅ Usa **siempre** las variables de `variables.css` (colores, espaciados, tipografía). Nunca hardcodees colores hex.
- ✅ Trabaja en tu **propia rama** (`yeli/feature`, `mariana/feature`, etc.) y haz pull request a `main`
- ✅ Antes de empezar a trabajar, siempre haz `git pull` desde `main`
- ❌ No edites `variables.css`, `components.css`, ni los `partials/` sin avisar al equipo
- ❌ No abras el HTML con doble click — usa Live Server

---

## Design system

**Colores principales:**
- Azul `#2563EB` — confianza, educación
- Ámbar `#F59E0B` — oportunidad, becas

**Tipografía:**
- `Sora` — títulos
- `Inter` — texto general

Todas las variables están definidas en `css/variables.css`. Úsalas así:

```css
.mi-clase {
  color: var(--color-primary);
  padding: var(--space-4);
  font-size: var(--fs-lg);
}
```

---

## Equipo

- Yeliana Diaz de Jesus
- Mariana Emilia Sánchez Adon
- Alvely Bencosme Ramos
- Eduardo Rojas Fernandez

**Materia:** Introducción a la Ingeniería de Software
**Facilitador:** Eduandy Isabel Cruz Abreu
