"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Tag, CalendarDays } from "lucide-react";
import { getArtistImageUniversal } from "@/data/artistImages";
import { getTamaulipecoArtistByName } from "@/data/tamaulipecanArtists";
import { getArtistByName as getNationalArtistByName } from "@/data/nationalArtists";
import { getArtistByName as getInternationalArtistByName } from "@/data/internationalArtists";
import EventList from "@/components/artist/EventList";
import FestivalBackground from "@/components/festival/FestivalBackground";
import PageHeader from "@/components/PageHeader";
import {
  getArtistStatsFromAllMunicipalities,
  ArtistEventWithMunicipality,
} from "@/lib/artistEvents";

type Artist = {
  name: string;
  origin: string;
  category: string;
  subcategory?: string;
  events: ArtistEventWithMunicipality[];
  municipalities: string[];
  description?: string;
};

export default function ArtistPage() {
  const params = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!params.name) return;
    const artistName = decodeURIComponent(params.name as string);

    const staticArtist =
      getTamaulipecoArtistByName(artistName) ??
      getNationalArtistByName(artistName) ??
      getInternationalArtistByName(artistName);

    if (!staticArtist) {
      setNotFound(true);
      return;
    }

    let stats = getArtistStatsFromAllMunicipalities(staticArtist.name, false);
    if (stats.totalEvents === 0) {
      const byUrlName = getArtistStatsFromAllMunicipalities(artistName, false);
      if (byUrlName.totalEvents > 0) stats = byUrlName;
    }

    setArtist({
      ...staticArtist,
      events: stats.events,
      municipalities: stats.municipalityNames,
    } as Artist);
  }, [params.name]);

  if (notFound) {
    return (
      <>
        <FestivalBackground />
        <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
          <h1 className="font-poster text-2xl font-extrabold uppercase text-ink">
            Artista no encontrado
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Puede que el enlace esté mal escrito o que el artista ya no forme
            parte de esta edición.
          </p>
          <Link
            href="/artistas-nacionales"
            className="mt-6 inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover"
          >
            Ver todos los artistas
          </Link>
        </div>
      </>
    );
  }

  if (!artist) {
    return (
      <>
        <FestivalBackground />
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
          <div className="py-24">
            <div className="h-8 w-40 animate-pulse rounded bg-surface-2" />
            <div className="mt-6 h-64 w-full animate-pulse rounded-xl bg-surface-2" />
          </div>
        </div>
      </>
    );
  }

  const artistImage = getArtistImageUniversal(artist.name);
  const municipalities = artist.municipalities ?? [];

  return (
    <>
      <FestivalBackground />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-6 lg:px-8">
        <PageHeader title={artist.name} />

        {/* Ficha: retrato a la izquierda, datos a la derecha */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,320px)_1fr] md:gap-12">
          <div>
            <div
              className="relative w-full overflow-hidden rounded-xl border border-line shadow-[var(--poster-shadow)]"
              style={{ aspectRatio: "2 / 3" }}
            >
              <Image
                src={artistImage}
                alt={artist.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <dl className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-start gap-2">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint"
                />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-faint">
                    Origen
                  </dt>
                  <dd className="text-sm font-semibold text-ink">
                    {artist.origin}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Tag
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint"
                />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-faint">
                    Disciplina
                  </dt>
                  <dd className="text-sm font-semibold text-ink">
                    {artist.category}
                    {artist.subcategory && (
                      <span className="block font-normal text-ink-muted">
                        {artist.subcategory}
                      </span>
                    )}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CalendarDays
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint"
                />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-faint">
                    Presentaciones
                  </dt>
                  <dd className="text-sm font-semibold tabular-nums text-ink">
                    {artist.events.length} en {municipalities.length} municipio
                    {municipalities.length !== 1 ? "s" : ""}
                  </dd>
                </div>
              </div>
            </dl>

            {artist.description && (
              <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted">
                {artist.description}
              </p>
            )}

            {municipalities.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  Se presenta en
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {municipalities.map((municipality) => (
                    <li key={municipality}>
                      <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-muted">
                        {municipality}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-5 font-poster text-xl font-extrabold uppercase tracking-tight text-ink md:text-2xl">
            Funciones
          </h2>
          <EventList
            events={artist.events}
            artistImage={artistImage}
            artistName={artist.name}
          />
        </div>
      </div>
    </>
  );
}
