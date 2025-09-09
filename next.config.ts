import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configuración para optimización de imágenes
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Configuración para Vercel
    unoptimized: false,
    // Configuración de calidad se maneja en el componente Image
    // Configuración de carga
    loader: 'default',
    // Configuración de dominios (si usas imágenes externas)
    domains: [],
    // Configuración de remotePatterns para mayor flexibilidad
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configuración de compresión
  compress: true,
  // Configuración de headers para cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
