import "./globals.css";
import type { Metadata } from 'next';
import { ReactNode } from "react";
import ClientLayout from "../components/ClientLayout";
import StructuredData from "../components/StructuredData";

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
        url: '/images/logos/logo.png',
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
    images: ['/images/logos/logo.png'],
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
      { url: '/images/logos/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logos/logo.png',
    apple: [
      { url: '/images/logos/logo.png', sizes: '180x180', type: 'image/png' },
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
    <html lang="es-MX">
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a365d" />
        <link rel="canonical" href="https://ficsm.com" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
