import { motion, AnimatePresence } from "framer-motion"
import { Button, Carousel, Rate } from "antd"
import { X, MapPin, Star } from "lucide-react"
import Image from "next/image"

interface Evento {
  fecha: string
  dia: string
  titulo: string
  categoria: string
  hora: string
  sede: string
}

interface Artista {
  nombre: string
  municipio: string
  especialidad: string
  rating: number
  descripcion: string
  imagen: string
  fotos: string[]
}

interface ArtistaModalProps {
  artista: Artista | null
  eventos: Evento[]
  onClose: () => void
}

export default function ArtistaModal({ artista, eventos, onClose }: ArtistaModalProps) {
  return (
    <AnimatePresence>
      {artista && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-50 flex items-end justify-center"
        >
          <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-lime-100 via-yellow-50 to-yellow-200 shadow-2xl p-0 overflow-y-auto"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
          >
            <div className="flex items-center justify-between mb-4 p-6">
              <div className="flex items-center gap-3">
                <Image src={artista.imagen} alt={artista.nombre} width={56} height={56} className="rounded-full object-cover border-4 border-lime-300" />
                <div>
                  <h2 className="text-2xl font-bold text-lime-700">{artista.nombre}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-lime-500" />
                    <span>{artista.municipio}</span>
                    <span className="ml-2 px-2 py-0.5 bg-lime-200 text-lime-800 rounded-full font-semibold">{artista.especialidad}</span>
                  </div>
                </div>
              </div>
              <Button shape="circle" icon={<X />} onClick={onClose} />
            </div>
            <div className="px-6 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Rate allowHalf disabled defaultValue={artista.rating} style={{ color: '#facc15' }} />
                <span className="text-yellow-600 font-bold">{artista.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-700 text-base mb-4">{artista.descripcion}</p>
            </div>
            <div className="px-6 mb-8">
              <Carousel autoplay className="rounded-xl overflow-hidden shadow-lg">
                {(artista?.fotos || []).map((foto, idx) => (
                  <div key={idx} className="h-64 w-full relative">
                    <Image src={foto} alt={`Foto ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="mb-4 px-6">
              <span className="inline-block bg-lime-400 text-white text-xs font-bold rounded-full px-3 py-1">Cartelera de presentaciones</span>
            </div>
            <div className="space-y-4 px-6 pb-8">
              {(eventos || []).length === 0 && (
                <div className="text-center text-gray-500 py-12">No hay presentaciones para este artista.</div>
              )}
              {(eventos || []).map((evento, idx) => (
                <div key={idx} className="bg-white/80 rounded-xl p-4 shadow flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-yellow-400">
                  <div className="flex flex-col items-center md:items-start min-w-[80px]">
                    <div className="text-3xl font-extrabold text-yellow-600 leading-none">{evento.dia}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{evento.fecha}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-yellow-800 mb-1">{evento.titulo}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{evento.categoria}</span>
                      <span className="ml-2">{evento.sede}</span>
                      <span className="ml-2">{evento.hora}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 