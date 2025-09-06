"use client";

import "./globals.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { ReactNode, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { ScrollLockProvider } from '../hooks/ScrollLockContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const controls = useAnimation();
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  // Check if we're on pages that shouldn't show TopNav
  const hideTopNav = pathname === '/festival' || pathname === '/national-artists' || pathname === '/municipal-billboards' || pathname === '/artists-tamaulipecos' || pathname.startsWith('/artist/') || pathname.startsWith('/municipio/');

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
    <html lang="en">
      <body>
        <ThemeProvider>
          <ScrollLockProvider>
            <motion.div
              initial={{ scaleY: 1 }}
              animate={controls}
              style={{ minHeight: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, zIndex: -1, background: "#f8fafc" }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              {!hideTopNav && <TopNav />}
              {children}
              <Footer />
            </div>
          </ScrollLockProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
