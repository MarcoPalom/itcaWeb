"use client"

export default function FestivalHeroCard() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] rounded-none sm:rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/backgrounds/festivalbanner.jpg"
            alt="Festival Internacional en la Costa del Seno Mexicano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 sm:from-black/80 sm:via-black/40 sm:to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-lg">FICSM</span>
              </div>
              <div className="text-white min-w-0">
                <div className="text-xs sm:text-sm font-medium opacity-90">FESTIVAL INTERNACIONAL</div>
                <div className="text-xs opacity-70">COSTA DEL SENO MEXICANO</div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              CULTURA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                SIN FRONTERAS
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit">
                NUEVO
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-white text-xs sm:text-sm">3-12 OCTUBRE 2025</span>
                <span className="text-white text-xs sm:text-sm">TAMAULIPAS, MÉXICO</span>
              </div>
            </div>

            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Arte, música y tradición se unen en la costa más vibrante de México. 
              Un festival que celebra la diversidad cultural y conecta al mundo a través de la creatividad.
            </p>


          </div>
        </div>
      </div>
    </section>
  )
}
