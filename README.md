# FICSM

Sitio del **Festival Internacional en la Costa del Seno Mexicano**, del Instituto
Tamaulipeco para la Cultura y las Artes. Next.js 15 (App Router) + React 19 +
Tailwind CSS 4 + TypeScript.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

| Script           | Qué hace                           |
| ---------------- | ---------------------------------- |
| `pnpm dev`       | Servidor de desarrollo (Turbopack) |
| `pnpm build`     | Build de producción                |
| `pnpm start`     | Sirve el build                     |
| `pnpm lint`      | ESLint sobre `src/`                |
| `pnpm typecheck` | `tsc --noEmit`                     |

## Idioma: código en inglés, URLs en español

El público es mexicano, así que **las URLs van en español**. El **código va en
inglés**, como cualquier identificador. Las dos capas se cruzan solo en
`src/app/`, donde el nombre de la carpeta *es* la URL:

| Carpeta                       | URL                        | Componente que renderiza                       |
| ----------------------------- | -------------------------- | ---------------------------------------------- |
| `app/page.tsx`                | `/`                        | `components/festival/Festival`                 |
| `app/agenda/`                 | `/agenda`                  | `components/agenda/AgendaHero`                 |
| `app/artistas-nacionales/`    | `/artistas-nacionales`     | —                                              |
| `app/artistas-internacionales/` | `/artistas-internacionales` | —                                            |
| `app/artistas-tamaulipecos/`  | `/artistas-tamaulipecos`   | —                                              |
| `app/artistas/[name]/`        | `/artistas/:slug`          | `components/artist/EventList`                  |
| `app/carteleras/`             | `/carteleras`              | `components/municipal-billboards/MunicipalBillboards` |
| `app/municipios/[name]/`      | `/municipios/:slug`        | `components/artist/EventList`                  |

El segmento dinámico se llama `[name]`, no `[nombre]`: nunca aparece en la URL,
solo en el código como `params.name`.

Las URLs anteriores (`/national-artists`, `/municipio/:name`, `/festival`, …)
siguen resolviendo mediante redirects 308 declarados en `next.config.ts`. Se
pueden eliminar cuando los buscadores y los enlaces entrantes se hayan
actualizado.

## Estructura

```
src/
├── app/          Rutas del App Router (nombres en español = URLs)
├── components/   Componentes de UI, agrupados por feature
│   ├── agenda/
│   ├── artist/
│   ├── festival/
│   ├── municipal-billboards/
│   └── ui/       Primitivas reutilizables
├── contexts/     React contexts (tema, bloqueo de scroll)
├── data/         Contenido del festival
│   └── municipalities/  Un módulo por municipio (43)
├── hooks/        Hooks de React
├── lib/          Helpers puros, sin estado ni JSX
└── types/        Tipos compartidos del dominio
```

Convenciones:

- **Imports:** `@/…` para cualquier salto entre carpetas, `./…` solo entre hermanos.
- **Nombres:** componentes en `PascalCase.tsx`, todo lo demás en `camelCase.ts`,
  carpetas en `kebab-case`.
- **Datos vs. tipos:** `src/data/` guarda contenido, `src/types/` las interfaces.
  Los módulos de municipio no se importan por un barrel: se importan directo por
  su ruta.
- **Assets:** `public/images/municipios/` conserva el nombre en español porque
  las rutas de asset también son URLs.

## Modo mantenimiento

`src/components/ClientLayout.tsx` expone la bandera `showMaintenance`. En `true`
todas las rutas muestran `MaintenanceScreen`.
