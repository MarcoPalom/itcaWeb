import "./globals.css";
import type { Metadata } from 'next';
import { ReactNode } from "react";
import localFont from "next/font/local";
import ClientLayout from "@/components/ClientLayout";
import StructuredData from "@/components/StructuredData";

// Fuentes alojadas en el repo, no descargadas de Google en tiempo de build.
// `next/font/google` rompe bajo Turbopack en esta version de Next (no resuelve
// @vercel/turbopack-next/internal/font/google/font), y ademas esto evita una
// conexion externa en tiempo de ejecucion. Ambas son variables: un solo archivo
// cubre todos los pesos. Inter y Archivo estan bajo SIL Open Font License 1.1.
const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--ff-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--ff-display",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: 'FICSM - Festival Internacional en la Costa del Seno Mexicano',
    template: '%s | FICSM'
  },
  description: 'Festival Internacional en la Costa del Seno Mexicano. Evento cultural que reúne artistas nacionales e internacionales en Tamaulipas. Música, danza, teatro y artes visuales.',
  keywords: [
    'FICSM',
    'Festival Internacional',
    'Costa del Seno Mexicano',
    'Tamaulipas',
    'cultura',
    'arte',
    'música',
    'danza',
    'teatro',
    'festival cultural',
    'artistas nacionales',
    'artistas internacionales',
    'eventos culturales',
    'Tampico',
    'Matamoros',
    'Reynosa',
    'Nuevo Laredo'
  ],
  authors: [{ name: 'FICSM' }],
  creator: 'FICSM',
  publisher: 'FICSM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ficsm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://ficsm.com',
    siteName: 'FICSM',
    title: 'FICSM - Festival Internacional en la Costa del Seno Mexicano',
    description: 'Festival Internacional en la Costa del Seno Mexicano. Evento cultural que reúne artistas nacionales e internacionales en Tamaulipas.',
    images: [
      {
        url: '/images/logos/logol.png',
        width: 1200,
        height: 630,
        alt: 'FICSM - Festival Internacional en la Costa del Seno Mexicano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FICSM - Festival Internacional en la Costa del Seno Mexicano',
    description: 'Festival Internacional en la Costa del Seno Mexicano. Evento cultural que reúne artistas nacionales e internacionales en Tamaulipas.',
    images: ['/images/logos/logol.png'],
    creator: '@ficsm',
    site: '@ficsm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Reemplaza con tu código real
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logos/logol.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/logol.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/logos/logol.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'culture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-MX" data-theme="dark" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#864e94" />
        <meta name="msapplication-TileColor" content="#864e94" />
        <meta name="msapplication-TileImage" content="/images/logos/logol.png" />
        <link rel="canonical" href="https://ficsm.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logos/logol.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image:alt" content="FICSM - Festival Internacional en la Costa del Seno Mexicano" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
