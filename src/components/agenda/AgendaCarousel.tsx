import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { culturalCenters } from "./data";
import AgendaCard from "./AgendaCard";
import { AnimatePresence, motion } from "framer-motion";

export default function AgendaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1: next, -1: prev

  const getCurrentItem = () => culturalCenters[currentIndex];
  const getNextItem = () => culturalCenters[(currentIndex + 1) % culturalCenters.length];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % culturalCenters.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + culturalCenters.length) % culturalCenters.length);
  };

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      transition: { duration: 0.5, type: "spring" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
      transition: { duration: 0.5, type: "spring" },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
      {/* Left Panel - Current Image */}
      <div className="relative h-80">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={getCurrentItem().id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full"
            style={{ position: "absolute", width: "100%" }}
          >
            <AgendaCard item={getCurrentItem()} type="current" />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Center Panel - Current Item Details */}
      <div className="h-80 bg-white border border-neutral-200 shadow-xl rounded-2xl flex flex-col justify-between p-6">
        <div className="flex-1">
          <h3 className="text-neutral-900 text-xl font-bold mb-3 leading-tight">{getCurrentItem().name}</h3>
          <p className="text-neutral-700 text-sm mb-4 leading-relaxed">{getCurrentItem().description}</p>
          <div className="space-y-2">
            <div className="flex items-center text-neutral-500 text-sm">
              <span className="font-medium mr-2">Fecha:</span>
              <span>{getCurrentItem().date}</span>
            </div>
            <div className="flex items-center text-neutral-500 text-sm">
              <span className="font-medium mr-2">Horario:</span>
              <span>{getCurrentItem().time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button className="bg-transparent border-2 border-neutral-900 text-neutral-900 hover:bg-orange-400 hover:text-black px-6 py-2 rounded-full text-sm font-bold transition-all duration-300">
            Ver Todo
          </button>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border-2 border-neutral-300 rounded-full flex items-center justify-center text-neutral-900 hover:bg-orange-400 hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border-2 border-neutral-300 rounded-full flex items-center justify-center text-neutral-900 hover:bg-orange-400 hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Right Panel - Next Item Preview */}
      <div className="relative h-80">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={getNextItem().id + "-next"}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full"
            style={{ position: "absolute", width: "100%" }}
            onClick={nextSlide}
          >
            <AgendaCard item={getNextItem()} type="next" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 