# Páginas de Artistas Nacionales

## Descripción
Se han creado páginas para mostrar los artistas nacionales del Festival Internacional en la Costa del Seno Mexicano, respetando el diseño tanto en mobile como en web. **El diseño respeta exactamente la imagen de referencia con cards verticales, imagen a la izquierda y datos a la derecha en formato de lista.**

## Estructura de Archivos

### Páginas
- `/national-artists` - Página principal que lista todos los artistas nacionales
- `/artists-tamaulipecos` - Página específica con diseño de lista vertical como en la imagen
- `/artist/[name]` - Página individual de cada artista

### Componentes
- `ArtistCard` - Tarjeta reutilizable para mostrar información del artista (diseño compacto)
- `ArtistListCard` - **NUEVO: Tarjeta vertical con imagen a la izquierda y datos a la derecha**
- `EventList` - Lista de eventos del artista
- `FestivalNavigation` - Navegación específica para el festival

## Características

### Página Principal de Artistas Nacionales (`/national-artists`)
- ✅ Lista todos los artistas nacionales
- ✅ Búsqueda por nombre o origen
- ✅ Filtro por categoría
- ✅ Diseño responsive (mobile y web)
- ✅ **Diseño de lista vertical con separadores azules**
- ✅ Navegación a páginas individuales

### Página de Artistas Tamaulipecos (`/artists-tamaulipecos`) - **NUEVA**
- ✅ **Diseño exacto como en la imagen de referencia**
- ✅ **Título "Artistas Tamaulipecos" alineado a la izquierda**
- ✅ **Cards verticales con imagen a la izquierda y datos a la derecha**
- ✅ **Separadores azules entre cada artista**
- ✅ Búsqueda y filtros
- ✅ Layout de lista vertical

### Página Individual del Artista (`/artist/[name]`)
- ✅ Información detallada del artista
- ✅ Lista de eventos ordenados por fecha
- ✅ Imagen del artista
- ✅ Detalles de origen y categoría
- ✅ Resumen de municipios visitados
- ✅ Diseño similar al de la imagen de referencia

### Componentes Reutilizables
- ✅ `ArtistCard` - Versión compacta para grids
- ✅ `ArtistListCard` - **NUEVO: Versión vertical para listas como en la imagen**
- ✅ `EventList` - Lista de eventos con diseño consistente
- ✅ Navegación integrada

## Diseño Vertical (Como en la Imagen)

### Características del Diseño
- **Layout**: Lista vertical con separadores azules
- **Imagen**: **Estructura de poster vertical**, lado izquierdo, tamaño fijo (20x28 en mobile, 24x36 en desktop)
- **Datos**: Lado derecho, organizados verticalmente y centrados
- **Separadores**: Líneas azules entre cada artista
- **Responsive**: Adaptado tanto para mobile como web

### Estructura de la Card
```
┌─────────────────────────────────────┐
│ [Poster] │ Nombre del Artista      │
│ 20x28    │ Origen                  │
│ 24x36    │ Categoría               │
│          │ Eventos + Municipios    │
└─────────────────────────────────────┘
```

## Navegación

### Desde la Página Principal
- Botón "Artistas Nacionales" en la sección del festival
- Enlace directo a `/national-artists`

### Desde el Festival
- Enlace "Ver todo" en la sección de artistas nacionales → `/national-artists`
- Enlace "Ver todo" en la sección de artistas tamaulipecos → `/artists-tamaulipecos`
- Navegación entre páginas del festival

## Diseño Responsive

### Mobile
- Status bar con hora y iconos (9:41, señal, wifi, batería)
- Layout de una columna
- Navegación táctil optimizada
- Imágenes adaptadas al tamaño de pantalla
- **Cards verticales con imagen 20x28 (estructura de poster)**

### Web
- Layout de lista vertical
- Navegación con hover effects
- Información expandida
- **Cards verticales con imagen 24x36 (estructura de poster)**
- **Separadores azules entre artistas**

## Datos de Artistas

Los artistas se obtienen del archivo `src/constants/nationalArtistData.ts` que incluye:
- Información personal del artista
- Lista de eventos programados
- Categorías y subcategorías
- Origen geográfico

## Uso

### Navegar a Artistas Nacionales
```tsx
import Link from 'next/link'

<Link href="/national-artists">
  <button>Ver Artistas Nacionales</button>
</Link>
```

### Navegar a Artistas Tamaulipecos
```tsx
import Link from 'next/link'

<Link href="/artists-tamaulipecos">
  <button>Ver Artistas Tamaulipecos</button>
</Link>
```

### Usar Componente ArtistListCard (Diseño Vertical)
```tsx
import { ArtistListCard } from '@/components/artist'

<ArtistListCard
  artist={artistData}
  imageSrc="/path/to/image.jpg"
  isLast={false}
/>
```

### Usar Componente ArtistCard (Diseño Compacto)
```tsx
import { ArtistCard } from '@/components/artist'

<ArtistCard
  artist={artistData}
  imageSrc="/path/to/image.jpg"
  compact={true}
/>
```

### Usar Componente EventList
```tsx
import { EventList } from '@/components/artist'

<EventList
  events={artistEvents}
  artistImage="/path/to/artist.jpg"
  artistName="Nombre del Artista"
/>
```

## Estilos

- **Colores principales**: Negro, gris oscuro, amarillo
- **Separadores**: Azul (#3B82F6) con opacidad 60%
- **Tipografía**: Inter, Arial, Helvetica
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion para transiciones suaves

## Accesibilidad

- ✅ Navegación por teclado
- ✅ Textos alternativos para imágenes
- ✅ Contraste adecuado
- ✅ Estructura semántica HTML
- ✅ Responsive design
- ✅ **Separadores visuales claros entre elementos**

## Compatibilidad

- ✅ Next.js 14+
- ✅ React 18+
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion

## Cambios Recientes

### ✅ Implementado Diseño Vertical
- Cards con **imagen de poster vertical** a la izquierda y datos a la derecha
- Separadores azules entre artistas
- Layout de lista vertical como en la imagen
- Componente `ArtistListCard` específico para este diseño
- **Estructura de poster: 20x28 (mobile) y 24x36 (desktop)**

### ✅ Nueva Página de Artistas Tamaulipecos
- Ruta `/artists-tamaulipecos`
- Diseño exacto como en la imagen de referencia
- Título alineado a la izquierda
- Separadores azules entre elementos
