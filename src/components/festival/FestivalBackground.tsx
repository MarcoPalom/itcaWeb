"use client";

/**
 * Lienzo de la home.
 *
 * Deliberadamente sobrio: la version anterior pintaba un degradado amarillo con
 * ~160 iconos de marca esparcidos al azar (posicion, rotacion, escala y opacidad
 * aleatorias) mas el logo a tamano completo detras del contenido. Competia con
 * las fotos de los artistas, solo asomaba por los margenes y regeneraba todos los
 * nodos en cada resize.
 *
 * Ahora es un fondo plano con dos halos de marca muy tenues y una vineta. Todo
 * en CSS, cero nodos por icono, cero estado. El color lo ponen los posters.
 */
export default function FestivalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none bg-canvas"
    >
      {/* Halo de marca, esquina superior izquierda */}
      <div
        className="absolute -left-[10%] -top-[15%] h-[60vmax] w-[60vmax] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--brand) 0%, transparent 65%)",
        }}
      />
      {/* Halo calido, esquina inferior derecha */}
      <div
        className="absolute -bottom-[20%] -right-[10%] h-[55vmax] w-[55vmax] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
        }}
      />
      {/* Vineta: hunde los bordes para que el contenido central pese mas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 45%, var(--canvas-deep) 100%)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}
