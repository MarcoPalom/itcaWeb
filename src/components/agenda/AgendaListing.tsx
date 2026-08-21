"use client";

import { CalendarDays, Clock, MapPin } from "lucide-react";
import { culturalCenters } from "@/data/culturalCenters";
import FestivalBackground from "@/components/festival/FestivalBackground";
import PageHeader from "@/components/PageHeader";

/**
 * Agenda de centros culturales.
 *
 * Las tarjetas son deliberadamente tipograficas: el catalogo de `culturalCenters`
 * todavia apunta a un placeholder inexistente, asi que una tarjeta con foto se
 * veria rota. En cuanto haya imagenes reales, cambiar a `PosterCard`.
 */
export default function AgendaListing() {
  return (
    <>
      <FestivalBackground />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-6 lg:px-8">
        <PageHeader
          title="Agenda cultural"
          description="Actividad permanente en los centros culturales del estado."
          count={`${culturalCenters.length} recintos`}
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {culturalCenters.map((item) => (
            <li key={item.id}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                <span className="mb-4 inline-flex w-fit rounded-full border border-brand/30 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
                  {item.category}
                </span>

                <h2 className="font-poster text-lg font-bold leading-tight text-ink">
                  {item.name}
                </h2>

                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>

                <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-ink-faint"
                    />
                    <dt className="sr-only">Fechas</dt>
                    <dd className="tabular-nums text-ink">{item.date}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-ink-faint"
                    />
                    <dt className="sr-only">Horario</dt>
                    <dd className="tabular-nums text-ink-muted">{item.time}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-faint">
          <MapPin aria-hidden="true" className="h-4 w-4" />
          Consulta la cartelera de tu municipio para la programación del festival.
        </p>
      </div>
    </>
  );
}
