"use client";

import { ReactNode, useEffect } from "react";
import FestivalTopNav from "./FestivalTopNav";
import FestivalWarningLabel from "./FestivalWarningLabel";
import Footer from "./Footer";
import MaintenanceScreen from "./MaintenanceScreen";
import { ScrollLockProvider } from '@/contexts/ScrollLockContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {

  // Show maintenance screen for all routes
  // Change to false to disable maintenance mode
  const showMaintenance = false;
  
  // Siempre al recargar, ve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <ScrollLockProvider>
        {showMaintenance ? (
          <MaintenanceScreen />
        ) : (
          <>
            <div className="relative z-[1] min-h-dvh bg-canvas">
              <FestivalTopNav />
              <FestivalWarningLabel />
              <div className="h-16" aria-hidden="true" /> {/* deja hueco al nav fijo */}
              {children}
              <Footer />
            </div>
          </>
        )}
      </ScrollLockProvider>
    </ThemeProvider>
  );
}
