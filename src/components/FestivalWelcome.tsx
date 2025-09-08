"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface FestivalWelcomeProps {
  onComplete: () => void;
}

const FestivalWelcome = ({ onComplete }: FestivalWelcomeProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            y: "-100vh",
            transition: {
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        >
          {/* Máscara superior con gradiente */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-sm"
          >
            {/* Elementos decorativos en la máscara */}
            <div className="absolute top-4 left-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-8 h-8 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-60"
              />
            </div>
            <div className="absolute top-6 right-12">
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-60"
              />
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"
              />
            </div>
          </motion.div>

          {/* Contenedor principal centrado */}
          <div className="flex items-center justify-center min-h-screen p-8">
            {/* Marco con gradiente */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0.8,
                scale: 0.95
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.4 
              }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden"
            >
              {/* Borde con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 p-1 rounded-3xl">
                <div className="w-full h-full bg-black rounded-3xl relative overflow-hidden">
                  {/* Video local */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  >
                    <source src="/fest-exampl.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Overlay con gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30" />
                  
                  {/* Contenido sobre el video */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                    {/* Logo */}
                    <motion.div
                      initial={{ y: -20, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.7 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mb-6"
                    >
                      <div className="relative w-20 h-20 mx-auto">
                        <Image
                          src="/images/logos/logo.png"
                          alt="FICSM 2025"
                          fill
                          className="object-contain filter brightness-0 invert"
                          priority
                        />
                      </div>
                    </motion.div>

                    {/* Título principal */}
                    <motion.h1
                      initial={{ y: 20, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.7 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-3xl md:text-5xl font-bold text-white mb-2"
                      style={{ 
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      FICSM 2025
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                      initial={{ y: 20, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.7 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="text-sm md:text-lg text-gray-200 mb-6"
                    >
                      Festival Internacional en la Costa del Seno Mexicano
                    </motion.p>

                    {/* Fecha y ubicación */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full"
                      >
                        <span className="text-white font-bold text-sm">3-12 OCTUBRE</span>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-full"
                      >
                        <span className="text-white font-bold text-sm">TAMAULIPAS, MÉXICO</span>
                      </motion.div>
                    </div>

                    {/* Indicador de carga */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.7 }}
                      transition={{ duration: 0.3, delay: 1.8 }}
                      className="mt-4"
                    >
                      <div className="flex justify-center space-x-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              y: [0, -8, 0],
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.2 
                            }}
                            className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Elementos decorativos inferiores */}
          <div className="absolute bottom-8 left-8">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            />
          </div>
          <div className="absolute bottom-12 right-12">
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FestivalWelcome;