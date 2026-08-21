"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const POSTER = "/images/backgrounds/festivalbanner.jpg";

/**
 * Hero partido: texto editorial a la izquierda, cartel oficial a la derecha.
 *
 * El cartel ya trae su propia tipografia ("XXXII FESTIVAL INTERNACIONAL..."),
 * asi que usarlo de fondo y encimarle un h1 producia un choque tipografico y
 * dejaba ambos ilegibles. Tratarlo como objeto respeta la pieza grafica y libera
 * la columna de texto.
 */
export default function FestivalHeroCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-line bg-canvas-deep">
      {/* Atmosfera: el mismo cartel, ampliado y desenfocado, casi apagado */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={POSTER}
          alt=""
          fill
          // Solo es atmosfera desenfocada: con una version diminuta basta.
          sizes="64px"
          className="scale-125 object-cover opacity-25 blur-3xl"
        />
        <div className="absolute inset-0 bg-canvas-deep/70" />
      </div>

      <div className="relative grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:p-14 lg:p-16">
        {/* Columna editorial */}
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent/35 px-3 py-1 font-poster text-xs font-bold tracking-[0.18em] text-accent">
              XXXII EDICIÓN
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
              Tamaulipas · 2025
            </span>
          </div>

          <h1 className="font-poster text-[clamp(2.4rem,6.5vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
            Cultura
            <br />
            <span className="text-brand">sin fronteras</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
            Arte, música y tradición se unen en la costa más vibrante de México.
            Diez días de programación en los 43 municipios del estado.
          </p>

          <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <CalendarDays
                aria-hidden="true"
                className="h-4 w-4 text-ink-faint"
              />
              <dt className="sr-only">Fechas</dt>
              <dd className="text-sm font-semibold tabular-nums text-ink md:text-base">
                3 – 12 octubre 2025
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4 text-ink-faint" />
              <dt className="sr-only">Sede</dt>
              <dd className="text-sm font-semibold text-ink md:text-base">
                Tamaulipas, México
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/carteleras"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:text-base"
            >
              Ver la cartelera
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:text-base"
            >
              Agenda cultural
            </Link>
          </div>
        </div>

        {/* El cartel oficial, mostrado completo y sin nada encima */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Image
            src={POSTER}
            alt="Cartel oficial de la XXXII edición del Festival Internacional en la Costa del Seno Mexicano"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
            className="h-auto w-full rounded-xl border border-line shadow-[var(--poster-shadow)]"
          />
        </div>
      </div>
    </section>
  );
}
