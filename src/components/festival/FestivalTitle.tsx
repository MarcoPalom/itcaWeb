import React from "react";

const FestivalTitle = () => (
  <div className="relative w-full flex flex-col items-center justify-center select-none">
    <h1
      className="font-serif text-[clamp(2.5rem,10vw,7rem)] font-bold tracking-tight leading-none text-white drop-shadow-lg text-center"
      style={{ letterSpacing: '0.02em', lineHeight: 1.05 }}
    >
      FESTIVAL<br />INTERNACIONAL
    </h1>
    <div className="my-2">
      <span className="inline-block font-serif text-[clamp(2.5rem,8vw,6rem)] font-bold text-white opacity-80" style={{fontFamily: 'serif', fontStyle: 'italic'}}>&amp;</span>
    </div>
    <h2
      className="font-serif text-[clamp(2.2rem,8vw,5rem)] font-bold tracking-tight leading-none text-white drop-shadow-lg text-center"
      style={{ letterSpacing: '0.01em', lineHeight: 1.05 }}
    >
      EN LA COSTA DEL SENO MEXICANO
    </h2>
    <div className="absolute right-0 top-1/2 flex flex-col items-end pr-8" style={{transform: 'translateY(-30%)'}}>
      <span className="font-serif text-lg md:text-2xl text-white/80 mb-1">Balancea tu espacio,</span>
      <span className="font-serif text-lg md:text-2xl text-white/80 mb-1">y entra a la galería</span>
      <span className="font-serif text-lg md:text-2xl text-white/80">→</span>
    </div>
  </div>
);

export default FestivalTitle; 