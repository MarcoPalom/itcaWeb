"use client";

import "./globals.css";
import TopNav from "../components/TopNav";
import FestivalTopNav from "../components/FestivalTopNav";
import FestivalWarningLabel from "../components/FestivalWarningLabel";
import Footer from "../components/Footer";
import MaintenanceScreen from "../components/MaintenanceScreen";
import { ReactNode, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { ScrollLockProvider } from '../hooks/ScrollLockContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const controls = useAnimation();
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  // Show maintenance screen for all routes
  // Change to false to disable maintenance mode
  const showMaintenance = false;
  
  // Check if we're on pages that should show FestivalTopNav
  const showFestivalTopNav = pathname === '/' || pathname === '/national-artists' || pathname === '/international-artists' || pathname === '/municipal-billboards' || pathname === '/artists-tamaulipecos' || pathname.startsWith('/artist/') || pathname.startsWith('/municipio/');
  
  // Check if we're on pages that shouldn't show any TopNav
  const hideTopNav = showFestivalTopNav;

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const delta = scrollY - lastScroll.current;
          if (Math.abs(delta) > 10) {
            controls.start({
              scaleY: 1 + Math.min(Math.abs(delta) / 200, 0.12),
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                bounce: 0.5,
              },
            }).then(() => {
              controls.start({
                scaleY: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  bounce: 0.5,
                },
              });
            });
          }
          lastScroll.current = scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Siempre al recargar, ve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <html lang="es">
      <Head>
        {/* Meta tags básicos */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Meta tags específicos del festival */}
        <title>FICSM 2025 | Festival Internacional en la Costa del Seno Mexicano</title>
        <meta name="description" content="FICSM 2025 - Festival Internacional en la Costa del Seno Mexicano. Arte, música y tradición se unen en Tamaulipas. Del 3 al 12 de octubre. Artistas nacionales, internacionales y tamaulipecos." />
        <meta name="keywords" content="FICSM, festival internacional, costa del seno mexicano, tamaulipas, música, arte, cultura, 2025, artistas, conciertos, eventos culturales" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://festivaltamaulipas.com.mx/" />
        <meta property="og:title" content="FICSM 2025 - Festival Internacional en la Costa del Seno Mexicano" />
        <meta property="og:description" content="FICSM 2025 - Arte, música y tradición se unen en la costa más vibrante de México. Un festival que celebra la diversidad cultural y conecta al mundo a través de la creatividad." />
        <meta property="og:image" content="https://festivaltamaulipas.com.mx/images/logos/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FICSM - Festival Internacional Costa del Seno Mexicano" />
        <meta property="og:locale" content="es_MX" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://festivaltamaulipas.com.mx/" />
        <meta name="twitter:title" content="FICSM 2025 - Festival Internacional en la Costa del Seno Mexicano" />
        <meta name="twitter:description" content="FICSM 2025 - Arte, música y tradición se unen en la costa más vibrante de México. Del 3 al 12 de octubre en Tamaulipas." />
        <meta name="twitter:image" content="https://festivaltamaulipas.com.mx/images/logos/logo.png" />
        
        {/* Meta tags adicionales */}
        <meta name="author" content="Gobierno del Estado de Tamaulipas" />
        <meta name="copyright" content="© 2025 FICSM - Festival Internacional en la Costa del Seno Mexicano" />
        <meta name="theme-color" content="#864e94" />
        <meta name="msapplication-TileColor" content="#864e94" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="MX-TAM" />
        <meta name="geo.placename" content="Tamaulipas, México" />
        <meta name="geo.position" content="23.7500;-99.1833" />
        <meta name="ICBM" content="23.7500, -99.1833" />
        
        {/* Evento estructurado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "FICSM 2025 - Festival Internacional en la Costa del Seno Mexicano",
            "description": "FICSM 2025 - Arte, música y tradición se unen en la costa más vibrante de México. Un festival que celebra la diversidad cultural y conecta al mundo a través de la creatividad.",
              "startDate": "2025-10-03",
              "endDate": "2025-10-12",
              "location": {
                "@type": "Place",
                "name": "Tamaulipas, México",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Tamaulipas",
                  "addressCountry": "MX"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Gobierno del Estado de Tamaulipas",
                "url": "https://tamaulipas.gob.mx"
              },
              "image": "https://festivaltamaulipas.com.mx/images/logos/logo.png",
              "url": "https://festivaltamaulipas.com.mx"
            })
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://festivaltamaulipas.com.mx/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <ThemeProvider>
          <ScrollLockProvider>
            {showMaintenance ? (
              <MaintenanceScreen />
            ) : (
              <>
                <motion.div
                  initial={{ scaleY: 1 }}
                  animate={controls}
                  style={{ minHeight: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, zIndex: -1, background: "#f8fafc" }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  {!hideTopNav && <TopNav />}
                  {showFestivalTopNav && <FestivalTopNav />}
                  {showFestivalTopNav && <FestivalWarningLabel />}
                  {showFestivalTopNav && <div className="h-16" />} {/* Spacer for fixed nav */}
                  {children}
                  <Footer />
                </div>
              </>
            )}
          </ScrollLockProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
