import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

export default function FestivalInspiration() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start relative overflow-hidden">
      {/* Fondo de esferas animadas con blur y gradiente */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Esfera 1 */}
        <motion.div
          className="absolute top-24 left-1/4 w-56 h-56 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #faffd1 0%, #a8ff78 100%)",
            filter: "blur(32px)",
            opacity: 0.7,
          }}
          animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        {/* Esfera 2 */}
        <motion.div
          className="absolute top-40 right-1/4 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle at 70% 70%, #a8ff78 0%, #ffe066 100%)",
            filter: "blur(40px)",
            opacity: 0.6,
          }}
          animate={{ y: [0, -80, 0], x: [0, -60, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
        {/* Esfera 3 */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, #ffe066 0%, #a8ff78 100%)",
            filter: "blur(48px)",
            opacity: 0.5,
          }}
          animate={{ y: [0, 100, 0], x: [0, 80, 0] }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        />
        {/* Esfera 4 */}
        <motion.div
          className="absolute bottom-24 right-1/3 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle at 60% 40%, #faffd1 0%, #a8ff78 100%)",
            filter: "blur(28px)",
            opacity: 0.6,
          }}
          animate={{ y: [0, -60, 0], x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        {/* Esfera 5 */}
        <motion.div
          className="absolute bottom-10 left-1/5 w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 60%, #a8ff78 0%, #ffe066 100%)",
            filter: "blur(24px)",
            opacity: 0.5,
          }}
          animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>
      {/* Corchetes verdes grandes en las esquinas de la sección */}
      <div className="pointer-events-none z-20">
        <div className="absolute top-3 left-3 w-12 h-12 border-t-8 border-l-8 border-green-400" style={{ borderTopLeftRadius: 0 }}></div>
        <div className="absolute top-3 right-3 w-12 h-12 border-t-8 border-r-8 border-green-400" style={{ borderTopRightRadius: 0 }}></div>
        <div className="absolute bottom-3 left-3 w-12 h-12 border-b-8 border-l-8 border-green-400" style={{ borderBottomLeftRadius: 0 }}></div>
        <div className="absolute bottom-3 right-3 w-12 h-12 border-b-8 border-r-8 border-green-400" style={{ borderBottomRightRadius: 0 }}></div>
      </div>
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-start justify-end w-full py-24 pl-22 pr-6">
        <div className="relative w-fit">
          {/* Esquinas tipo corchete */}
          <div className="absolute -top-8 -left-8 w-8 h-8 border-t-4 border-l-4 border-white"></div>
          <div className="absolute -top-8 -right-8 w-8 h-8 border-t-4 border-r-4 border-white"></div>
          <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-4 border-l-4 border-white"></div>
          <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-4 border-r-4 border-white"></div>
          <div className="w-fit ml-0">
            <h1
              className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-left font-sans"
              style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}
            >
              Festival<br />Internacional<br />en la Costa<br />del Seno<br />Mexicano
            </h1>
            <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-2 text-left font-sans">
              25 Oct–<br />03 Nov<br />2024
            </div>
          </div>
        </div>
        {/* Pleca institucional debajo del bloque de texto */}
        <div className="mt-16 w-fit">
          <Image src="/pleca-34.png" alt="pleca institucional" width={900} height={120} className="w-full max-w-lg h-auto object-contain" />
        </div>
      </div>
      {/* Botón absoluto en la esquina inferior derecha de la sección */}
      <div className="absolute right-10 bottom-30 z-30">
        <Link href="/festival">
          <button className="bg-gradient-to-r from-lime-400 to-yellow-400 hover:from-lime-500 hover:to-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-white/30">
            Ir al Festival
          </button>
        </Link>
      </div>
      {/* Redes sociales en la esquina superior derecha */}
      <div className="absolute top-8 right-10 z-30 flex gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram ITCA" className="bg-white/80 hover:bg-lime-200 text-lime-700 rounded-full p-3 shadow transition-all">
          <FaInstagram size={22} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook ITCA" className="bg-white/80 hover:bg-lime-200 text-lime-700 rounded-full p-3 shadow transition-all">
          <FaFacebookF size={22} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter ITCA" className="bg-white/80 hover:bg-lime-200 text-lime-700 rounded-full p-3 shadow transition-all">
          <FaTwitter size={22} />
        </a>
      </div>
    </div>
  )
} 