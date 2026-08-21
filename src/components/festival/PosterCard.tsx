"use client";

import Link from "next/link";
import Image from "next/image";

interface PosterCardProps {
  href: string;
  image: string;
  title: string;
  /** Linea superior sobre el titulo: disciplina, municipio, etc. */
  kicker?: string;
  /** Linea inferior: fechas, numero de eventos. */
  meta?: string;
  /** 2/3 para artistas (formato cartel), 3/2 para municipios (formato paisaje). */
  ratio?: "poster" | "landscape";
  priority?: boolean;
  /** Se dispara al navegar. Para dejar datos listos a la pagina destino. */
  onSelect?: () => void;
}

const FALLBACK = "/images/logos/logol.png";

export default function PosterCard({
  href,
  image,
  title,
  kicker,
  meta,
  ratio = "poster",
  priority = false,
  onSelect,
}: PosterCardProps) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <article
        className="relative overflow-hidden rounded-xl bg-surface-2 shadow-[var(--poster-shadow)] transition-transform duration-300 ease-out group-hover:-translate-y-1"
        style={{ aspectRatio: ratio === "poster" ? "2 / 3" : "3 / 2" }}
      >
        <Image
          src={image || FALLBACK}
          alt={title}
          fill
          priority={priority}
          // La tarjeta ocupa media pantalla en movil, un tercio en tablet y un
          // quinto en escritorio: que el navegador no baje un archivo de mas.
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Degradado de legibilidad: solo el tercio inferior, no toda la foto */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/5"
          style={{
            background:
              "linear-gradient(to top, rgb(6 8 14 / 0.92) 0%, rgb(6 8 14 / 0.72) 38%, transparent 100%)",
          }}
        />

        {/* Filo de marca que aparece al enfocar o pasar el cursor */}
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 transition-colors duration-300 group-hover:ring-brand/70" />

        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
          {kicker && (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 md:text-[11px]">
              {kicker}
            </p>
          )}
          <h3 className="text-balance font-poster text-[15px] font-bold leading-tight text-white md:text-base">
            {title}
          </h3>
          {meta && (
            <p className="mt-1 text-[11px] leading-snug text-white/70 md:text-xs">
              {meta}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
