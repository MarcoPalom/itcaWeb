import { motion, AnimatePresence } from "framer-motion"
import { Button } from "antd"
import { Calendar, MapPin, X } from "lucide-react"

interface Evento {
  fecha: string
  dia: string
  titulo: string
  artista: string
  categoria: string
  hora: string
  sede: string
}

interface CarteleraModalProps {
  municipio: string | null
  eventos: Evento[]
  onClose: () => void
}

export default function CarteleraModal({ municipio, eventos, onClose }: CarteleraModalProps) {
  return (
    <AnimatePresence>
      {municipio && (
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
                <MapPin className="text-lime-600 w-6 h-6" />
                <h2 className="text-2xl font-bold text-lime-700">{municipio}</h2>
              </div>
              <Button shape="circle" icon={<X />} onClick={onClose} />
            </div>
            <div className="mb-4 px-6">
              <span className="inline-block bg-lime-400 text-white text-xs font-bold rounded-full px-3 py-1">Cartelera de eventos</span>
            </div>
            <div className="space-y-4 px-6 pb-8">
              {(eventos || []).length === 0 && (
                <div className="text-center text-gray-500 py-12">No hay eventos para este municipio.</div>
              )}
              {(eventos || []).map((evento, idx) => (
                <div key={idx} className="bg-white/80 rounded-xl p-4 shadow flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-lime-400">
                  <div className="flex flex-col items-center md:items-start min-w-[80px]">
                    <div className="text-3xl font-extrabold text-lime-600 leading-none">{evento.dia}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{evento.fecha}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-lime-800 mb-1">{evento.titulo}</div>
                    <div className="text-sm text-gray-700 mb-1">{evento.artista}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{evento.hora}</span>
                      <span className="px-2 py-0.5 bg-lime-200 text-lime-800 rounded-full font-semibold ml-2">{evento.categoria}</span>
                      <span className="ml-2">{evento.sede}</span>
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