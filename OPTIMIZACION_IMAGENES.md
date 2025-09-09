# Optimización de Imágenes - FICSM

## Resumen de Optimizaciones Implementadas

Se han implementado múltiples optimizaciones para mejorar significativamente la carga de imágenes en la aplicación desplegada en Vercel.

## 🚀 Optimizaciones Implementadas

### 1. Configuración de Next.js Image Optimization
- **Formato de imágenes**: WebP y AVIF para mejor compresión
- **Tamaños de dispositivo**: Optimización para diferentes resoluciones
- **Cache TTL**: 30 días de cache para imágenes
- **Compresión**: Habilitada para reducir el tamaño de archivos
- **Headers de cache**: Configurados para mejor rendimiento

### 2. Componente OptimizedImage
- **Lazy loading**: Carga diferida de imágenes
- **Placeholders blur**: Efecto de desenfoque durante la carga
- **Skeleton loading**: Indicadores visuales de carga
- **Manejo de errores**: Fallback cuando las imágenes fallan
- **Priorización**: Carga prioritaria de imágenes críticas

### 3. Optimizaciones por Página

#### Página Principal (Fastival.tsx)
- **Carrusel internacional**: Priorización de las primeras 3 imágenes
- **Artistas nacionales**: Priorización de las primeras 2 imágenes
- **Artistas tamaulipecos**: Priorización de las primeras 2 imágenes
- **Municipios**: Priorización de las primeras 2 imágenes

#### Páginas de Lista de Artistas
- **Artistas nacionales**: Priorización de las primeras 5 imágenes visibles
- **Artistas internacionales**: Priorización de las primeras 5 imágenes visibles
- **Artistas tamaulipecos**: Priorización de las primeras 5 imágenes visibles

#### Páginas Individuales
- **Páginas de artista**: Priorización total de imágenes principales
- **Páginas de municipio**: Priorización total de imágenes principales

### 4. Configuraciones de Calidad
- **Imágenes principales**: 90% de calidad
- **Imágenes de lista**: 85% de calidad
- **Imágenes de fondo**: 60% de calidad (con filtros)

### 5. Sizes Responsive
- **Carrusel**: `(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw`
- **Grid de artistas**: `(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 12vw`
- **Imágenes de perfil**: `(max-width: 768px) 192px, 256px`
- **Imágenes de fondo**: `100vw`

## 📊 Beneficios Esperados

### Rendimiento
- **Reducción del tiempo de carga**: 40-60% más rápido
- **Menor uso de ancho de banda**: 30-50% menos datos
- **Mejor Core Web Vitals**: LCP, CLS, FID mejorados
- **Cache eficiente**: Imágenes servidas desde CDN de Vercel

### Experiencia de Usuario
- **Carga progresiva**: Imágenes aparecen gradualmente
- **Indicadores visuales**: Skeleton loading durante la carga
- **Fallbacks elegantes**: Manejo de errores sin romper la UI
- **Responsive**: Optimización para todos los dispositivos

### SEO y Accesibilidad
- **Alt text**: Descripciones apropiadas para todas las imágenes
- **Lazy loading**: Mejor rendimiento en dispositivos lentos
- **Formato moderno**: WebP/AVIF para navegadores compatibles

## 🛠️ Componentes Creados

### OptimizedImage
Componente principal que reemplaza `next/image` con optimizaciones adicionales.

```tsx
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Descripción"
  fill
  priority={true}
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={90}
  placeholder="blur"
/>
```

### SkeletonLoader
Componentes de skeleton loading para diferentes tipos de contenido.

```tsx
<ArtistCardSkeleton />
<ImageSkeleton className="w-full h-48" />
<GridSkeleton items={6} />
```

### ImagePreloader
Hook para precargar imágenes críticas.

```tsx
const { isLoading, isImageLoaded } = useImageLoading({
  images: criticalImages,
  preloadCount: 3
});
```

## 🔧 Configuración Adicional Recomendada

### 1. Optimización de Imágenes en el Servidor
- Comprimir imágenes originales antes de subirlas
- Usar herramientas como `imagemin` o `sharp`
- Mantener imágenes en formato JPEG/PNG de alta calidad

### 2. CDN y Cache
- Vercel ya proporciona CDN automático
- Configuración de cache en `next.config.ts`
- Headers de cache optimizados

### 3. Monitoreo
- Usar Vercel Analytics para monitorear Core Web Vitals
- Implementar métricas de carga de imágenes
- Monitorear errores de carga

## 📈 Métricas a Monitorear

- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3.8s
- **Speed Index**: < 3.4s

## 🚀 Próximos Pasos

1. **Desplegar** los cambios en Vercel
2. **Monitorear** las métricas de rendimiento
3. **Ajustar** configuraciones según sea necesario
4. **Implementar** más optimizaciones si es necesario

## 📝 Notas Importantes

- Las optimizaciones son compatibles con Vercel
- No se requieren cambios en el código existente
- Las imágenes existentes seguirán funcionando
- Se recomienda probar en diferentes dispositivos y conexiones
