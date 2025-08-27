import { Search, ArrowLeft, Signal, Wifi, Battery } from "lucide-react"
import Link from "next/link"

export default function Fastival() {
  return (
         <div className="min-h-screen bg-black text-white w-full">
      {/* Status Bar - Solo visible en móvil */}
      <div className="flex items-center justify-between px-4 py-2 text-xs md:hidden">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium md:text-lg">Bienvenido al FICSM</span>
        </div>
        <div className="flex gap-1 md:hidden">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4 md:px-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input
             type="text"
             placeholder="Find band, artist, genre..."
             className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-lg md:text-base w-full px-3 py-2 border rounded-lg"
           />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-6 md:px-6">
        <div className="flex gap-2 md:gap-4">
          <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg px-6 py-2 overflow-hidden md:px-8 md:py-3">
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M0,40 Q10,20 20,25 T40,30 T60,20 T80,35 T100,25 L100,40 Z" fill="black" opacity="0.3" />
                <circle cx="15" cy="25" r="2" fill="black" opacity="0.4" />
                <circle cx="25" cy="22" r="1.5" fill="black" opacity="0.4" />
                <circle cx="35" cy="28" r="2" fill="black" opacity="0.4" />
                <circle cx="45" cy="24" r="1.5" fill="black" opacity="0.4" />
                <circle cx="55" cy="20" r="2" fill="black" opacity="0.4" />
                <circle cx="65" cy="26" r="1.5" fill="black" opacity="0.4" />
                <circle cx="75" cy="32" r="2" fill="black" opacity="0.4" />
                <circle cx="85" cy="28" r="1.5" fill="black" opacity="0.4" />
              </svg>
            </div>
            <span className="relative z-10 text-white font-medium text-sm md:text-base">Todos</span>
          </div>
                     <button
             className="bg-gray-600 text-white hover:bg-gray-500 rounded-lg px-6 md:px-8 md:py-3 md:text-base"
           >
             Música
           </button>
           <button
             className="bg-gray-600 text-white hover:bg-gray-500 rounded-lg px-6 md:px-8 md:py-3 md:text-base"
           >
             Danza
           </button>
        </div>
      </div>

      {/* Artists Sections */}
      <div className="px-4 space-y-6 md:px-6 md:space-y-8">
        {/* Artistas Internacionales */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 md:text-xl md:mb-6">Artistas Internacionales</h2>
          <Link href="/artist/maria-katzarava" className="block">
            <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
              <img
                src="/elegant-female-opera-singer-performing-on-stage.png"
                alt="María Katzarava"
                className="w-full h-48 object-cover md:h-64 lg:h-80"
              />
            </div>
          </Link>
        </section>

        {/* Artistas Nacionales */}
        <section>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg font-semibold text-white md:text-xl">Artistas Nacionales</h2>
            <Link href="/artists/nacional" className="text-yellow-500 text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
            <div className="flex-shrink-0 w-40 md:w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
                <img
                  src="/mexican-national-artist-performing-traditional-mus.png"
                  alt="Artist"
                  className="w-full h-32 object-cover md:h-40"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm mb-1 text-white md:text-base">lorem ipsum</h3>
                  <p className="text-xs text-gray-400 md:text-sm">Parc del Fòrum, Barcelona</p>
                  <p className="text-xs text-gray-400 md:text-sm">22/09/2022</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40 md:w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
                <img
                  src="/mexican-folk-dancers-performing-in-colorful-costum.png"
                  alt="Artist"
                  className="w-full h-32 object-cover md:h-40"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm mb-1 text-white md:text-base">lorem ipsum</h3>
                  <p className="text-xs text-gray-400 md:text-sm">Palau Sant Jordi, Barcelona...</p>
                  <p className="text-xs text-gray-400 md:text-sm">03/10/2022</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40 md:w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
                <img
                  src="/tamaulipas-regional-artist-performing-traditional-.png"
                  alt="Artist"
                  className="w-full h-32 object-cover md:h-40"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm mb-1 text-white md:text-base">lorem ip</h3>
                  <p className="text-xs text-gray-400 md:text-sm">Palau San</p>
                  <p className="text-xs text-gray-400 md:text-sm">02/02/20</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artistas Tamaulipecos */}
        <section className="pb-6 md:pb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg font-semibold text-white md:text-xl">Artistas Tamaulipecos</h2>
            <Link href="/artists/tamaulipecos" className="text-yellow-500 text-sm hover:underline md:text-base">
              Ver todo
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
              <img
                src="/tamaulipas-regional-artist-performing-traditional-.png"
                alt="Artist"
                className="w-full h-24 object-cover md:h-32"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-medium text-sm mb-1 text-white md:text-base">Lorem Ipsum</h3>
                <p className="text-xs text-gray-400 md:text-sm">Parc del Fòrum, Barcelona</p>
                <p className="text-xs text-gray-400 md:text-sm">22/09/2022</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden md:rounded-xl">
              <img
                src="/tamaulipas-traditional-music-group-with-regional-i.png"
                alt="Artist"
                className="w-full h-24 object-cover md:h-32"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-medium text-sm mb-1 text-white md:text-base">Lorem Ipsum</h3>
                <p className="text-xs text-gray-400 md:text-sm">Palau Sant Jordi, Barcelona</p>
                <p className="text-xs text-gray-400 md:text-sm">03/09/2022</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
