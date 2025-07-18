"use client"

import AgendaHeader from "./AgendaHeader";
import AgendaHeroTitle from "./AgendaHeroTitle";
import AgendaCarousel from "./AgendaCarousel";

export default function AgendaHero() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] relative overflow-hidden">
      {/* Geometric Background Elements (colores claros y acentos) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top right diagonal cut */}
        <div className="absolute top-0 right-0 w-1/2 h-3/5">
          <div
            className="w-full h-full bg-gradient-to-bl from-orange-100/60 via-amber-100/40 to-transparent"
            style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          ></div>
        </div>
        {/* Bottom left diagonal cut */}
        <div className="absolute bottom-0 left-0 w-4/5 h-3/5">
          <div
            className="w-full h-full bg-gradient-to-tr from-orange-200/60 via-amber-200/40 to-transparent"
            style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)" }}
          ></div>
        </div>
        {/* Additional angular cuts for more geometric complexity */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-amber-200/30 transform rotate-45 opacity-60"></div>
        {/* Bottom right accent */}
        <div className="absolute bottom-0 right-0 w-1/3 h-2/5">
          <div
            className="w-full h-full bg-gradient-to-tl from-orange-200/40 to-transparent"
            style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          ></div>
        </div>
        {/* Top left subtle accent */}
        <div className="absolute top-0 left-0 w-1/4 h-1/3 bg-gradient-to-br from-amber-100/20 to-orange-100/20 opacity-50"></div>
      </div>
      <AgendaHeader />
      <main className="relative z-20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <AgendaHeroTitle />
          <AgendaCarousel />
        </div>
      </main>
    </div>
  );
}
