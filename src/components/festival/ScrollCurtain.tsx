"use client"

import useHeroScroll from "../../hooks/useHeroScroll"
import Image from "next/image"
import { motion } from "framer-motion"
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import FestivalArte from "./FestivalArte";

export default function ScrollCurtain() {
  const { mainRef, scrollProgress } = useHeroScroll()

  return (
    <>
      <div
        ref={mainRef}
        className="relative min-h-[300vh]"
        style={{
          backgroundImage: "url('/fondo-hero-fest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Escena principal con bailarines */}
        <div
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #b6e880 0%, #ffe066 50%, #b6e880 100%)",
          }}
        >
          {/* Cortina izquierda */}
          <motion.div
            className="absolute top-0 left-0 h-full z-10"
            style={{
              width: "50%",
              backgroundImage: "url('/telon-flores.png')",
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
            animate={{ x: `${-scrollProgress * 100}%` }}
            transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
          >
            {/* Bailarín 2 en la cortina izquierda */}
            <div className="absolute left-0 bottom-0">
              <Image
                src="/bailarin2.png"
                alt="Bailarina con flores"
                width={380}
                height={500}
                className="drop-shadow-xl opacity-90"
              />
            </div>
          </motion.div>

          {/* Cortina derecha */}
          <motion.div
            className="absolute top-0 right-0 h-full z-10"
            style={{
              width: "50%",
              backgroundImage: "url('/telon-flores.png')",
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
            animate={{ x: `${scrollProgress * 100}%` }}
            transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
          >
            {/* Bailarín 1 en la cortina derecha */}
            <div className="absolute right-0 bottom-0">
              <Image
                src="/bailarin1.png"
                alt="Bailarín con guitarra"
                width={300}
                height={400}
                className="drop-shadow-xl opacity-90"
              />
            </div>
          </motion.div>

          {/* Cortinilla de flores de cempasúchil reales */}
          {scrollProgress > 0.4 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Flores grandes de cempasúchil */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`cempasuchil-large-${i}`}
                  className="absolute animate-bounce opacity-90"
                  style={{
                    top: `${-10 + scrollProgress * 120}%`,
                    left: `${((i * 19) % 85) + 7}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "3s",
                    transform: `rotate(${i * 30}deg) scale(${0.8 + (i % 3) * 0.3})`,
                  }}
                >
                  <Image
                    src="/Flor-de-cempasuchil.png"
                    alt="Flor de cempasúchil"
                    width={80}
                    height={80}
                    className="drop-shadow-lg"
                  />
                </div>
              ))}

              {/* Flores medianas */}
              {[...Array(18)].map((_, i) => (
                <div
                  key={`cempasuchil-medium-${i}`}
                  className="absolute animate-pulse opacity-85"
                  style={{
                    top: `${-5 + scrollProgress * 110}%`,
                    left: `${((i * 13) % 90) + 5}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "2.5s",
                    transform: `rotate(${i * 45}deg) scale(${0.6 + (i % 4) * 0.2})`,
                  }}
                >
                  <Image
                    src="/Flor-de-cempasuchil.png"
                    alt="Flor de cempasúchil"
                    width={60}
                    height={60}
                    className="drop-shadow-md"
                  />
                </div>
              ))}

              {/* Flores pequeñas */}
              {[...Array(25)].map((_, i) => (
                <div
                  key={`cempasuchil-small-${i}`}
                  className="absolute animate-bounce opacity-80"
                  style={{
                    top: `${-15 + scrollProgress * 130}%`,
                    left: `${((i * 11) % 95) + 2}%`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: "2s",
                    transform: `rotate(${i * 60}deg) scale(${0.3 + (i % 5) * 0.1})`,
                  }}
                >
                  <Image
                    src="/Flor-de-cempasuchil.png"
                    alt="Flor de cempasúchil"
                    width={40}
                    height={40}
                    className="drop-shadow-sm"
                  />
                </div>
              ))}

              {/* Pétalos individuales flotando */}
              {[...Array(30)].map((_, i) => (
                <div
                  key={`petalo-${i}`}
                  className="absolute animate-pulse opacity-70"
                  style={{
                    top: `${-20 + scrollProgress * 140}%`,
                    left: `${((i * 7) % 98) + 1}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${1.5 + (i % 3) * 0.5}s`,
                    transform: `rotate(${i * 90}deg) scale(${0.15 + (i % 6) * 0.05})`,
                  }}
                >
                  <Image
                    src="/Flor-de-cempasuchil.png"
                    alt="Pétalo de cempasúchil"
                    width={25}
                    height={25}
                    className="opacity-60"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Primera sección con título elegante */}
      <div
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #b6e880 0%, #ffe066 50%, #b6e880 100%)",
        }}
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <div className="text-center max-w-6xl mx-auto px-8 relative z-10">
          {/* Subtítulo superior */}
          <div className="mb-8">
            <p className="text-sm font-light tracking-[0.3em] text-orange-800 uppercase opacity-80">
              Celebración Cultural
            </p>
          </div>

          {/* Título principal */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white leading-none tracking-tight">
              <span className="block mb-4">FESTIVAL</span>
              <span className="block mb-4 font-light">INTERNACIONAL</span>
            </h1>

            {/* Elemento decorativo central */}
            <div className="flex items-center justify-center my-8">
              <div className="w-16 h-px bg-white opacity-60"></div>
              <div className="mx-6 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-white opacity-60"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              <span className="block mb-2">en la Costa del</span>
              <span className="block font-normal">Seno Mexicano</span>
            </h2>
          </div>

        </div>
      </div>

      {/* Sección 2 - Carrusel de fotos */}
      <div
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #b6e880 0%, #ffe066 50%, #b6e880 100%)",
        }}
      >

        <HorizontalCarousel />
      </div>

      <div
        className="h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #b6e880 0%, #ffe066 50%, #b6e880 100%)",
        }}
      >
        <FestivalArte />
      </div>

      <div
        className="h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #b6e880 0%, #ffe066 50%, #b6e880 100%)",
        }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Sección 4</h2>
          <p className="text-lg text-purple-700">Contenido de la cuarta sección</p>
        </div>
      </div>
    </>
  )

  function AutoplayPlugin(slider: any) {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 2000);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }

  function HorizontalCarousel() {
    const photos = [
      "/placeholder.svg?height=300&width=400&text=Foto+1",
      "/placeholder.svg?height=300&width=400&text=Foto+2",
      "/placeholder.svg?height=300&width=400&text=Foto+3",
      "/placeholder.svg?height=300&width=400&text=Foto+4",
      "/placeholder.svg?height=300&width=400&text=Foto+5",
      "/placeholder.svg?height=300&width=400&text=Foto+6",
      "/placeholder.svg?height=300&width=400&text=Foto+7",
      "/placeholder.svg?height=300&width=400&text=Foto+8",
      "/placeholder.svg?height=300&width=400&text=Foto+9",
      "/placeholder.svg?height=300&width=400&text=Foto+10",
    ];

    const [sliderRef] = useKeenSlider({
      loop: true,
      slides: { perView: 4, spacing: 2 },
      renderMode: "performance",
      drag: true,
      breakpoints: {
        "(max-width: 900px)": { slides: { perView: 1.2, spacing: 1 } },
        "(max-width: 1400px)": { slides: { perView: 2, spacing: 2 } },
      },
    }, [AutoplayPlugin]);

    return (
      <div className="relative w-full">
        <div ref={sliderRef} className="keen-slider py-8">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex items-center justify-center"
            >
              <div className="w-64 h-96 rounded-xl overflow-hidden shadow-lg bg-white/80 border-2 border-white/60 flex items-center justify-center">
                <Image
                  src={photo}
                  alt={`Foto del festival ${idx + 1}`}
                  width={256}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
