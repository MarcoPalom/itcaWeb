"use client"
import { AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

interface FestivalWarningLabelProps {
  className?: string
}

export default function FestivalWarningLabel({ className = "" }: FestivalWarningLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-[#864e94] text-white text-sm font-medium rounded-full shadow-lg border border-[#864e94]/20 backdrop-blur-sm">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span className="whitespace-nowrap">
          La programación del festival está sujeta a cambios
        </span>
      </div>
    </motion.div>
  )
}
