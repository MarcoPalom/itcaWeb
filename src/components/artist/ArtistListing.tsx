"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { getArtistImage } from "@/data/artistImages";
import {
  getArtistEventsFromAllMunicipalities,
  getArtistStatsFromAllMunicipalities,
} from "@/lib/artistEvents";
import FestivalBackground from "@/components/festival/FestivalBackground";
import PosterCard from "@/components/festival/PosterCard";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Select from "@/components/ui/Select";

/** Forma comun a las tres colecciones de artistas. */
export interface ListedArtist {
  id: string;
  name: string;
  origin: string;
  category: string;
  subcategory?: string;
  events: unknown[];
}

type ArtistKind = "international" | "national" | "tamaulipecos";

interface ArtistListingProps {
  artists: ListedArtist[];
  kind: ArtistKind;
  title: string;
  description: string;
}

const PER_PAGE = 20;

const SORT_OPTIONS = [
  { id: "name", name: "Orden alfabético" },
  { id: "shows", name: "Más espectáculos" },
];

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export default function ArtistListing({
  artists,
  kind,
  title,
  description,
}: ArtistListingProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);

  const categoryOptions = useMemo(
    () => [
      { id: "", name: "Todas las categorías" },
      ...[...new Set(artists.map((a) => a.category))].map((c) => ({
        id: c,
        name: c,
      })),
    ],
    [artists],
  );

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return artists
      .filter((artist) => {
        const matchesSearch =
          !term ||
          artist.name.toLowerCase().includes(term) ||
          artist.origin.toLowerCase().includes(term);
        return matchesSearch && (!category || artist.category === category);
      })
      .sort((a, b) => {
        if (sortBy === "shows") {
          return (
            getArtistStatsFromAllMunicipalities(b.name).totalEvents -
            getArtistStatsFromAllMunicipalities(a.name).totalEvents
          );
        }
        return a.name.localeCompare(b.name, "es", { sensitivity: "base" });
      });
  }, [artists, searchTerm, category, sortBy]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  const hasFilters = searchTerm !== "" || category !== "" || sortBy !== "name";

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setSortBy("name");
    setPage(1);
  };

  /** La ficha del artista lee esto de sessionStorage para no recalcular. */
  const stashArtist = (artist: ListedArtist) => {
    const events = getArtistEventsFromAllMunicipalities(artist.name);
    sessionStorage.setItem(
      "selectedArtist",
      JSON.stringify({
        ...artist,
        events: events.length > 0 ? events : artist.events,
        totalEvents: events.length,
        municipalities: [...new Set(events.map((e) => e.municipality))],
      }),
    );
  };

  return (
    <>
      <FestivalBackground />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-6 lg:px-8">
        <PageHeader
          title={title}
          description={description}
          count={`${artists.length} artistas`}
        />

        {/* Barra de filtros */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
            />
            <label htmlFor="artist-search" className="sr-only">
              Buscar artista
            </label>
            <input
              id="artist-search"
              type="search"
              placeholder="Buscar por nombre u origen…"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-line bg-surface py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint transition-colors hover:border-line-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            />
          </div>

          <Select
            label="Filtrar por categoría"
            value={category}
            options={categoryOptions}
            onChange={(v) => {
              setCategory(v);
              setPage(1);
            }}
            className="md:w-56"
          />

          <Select
            label="Ordenar"
            value={sortBy}
            options={SORT_OPTIONS}
            onChange={(v) => {
              setSortBy(v);
              setPage(1);
            }}
            className="md:w-52"
          />
        </div>

        {/* Recuento del filtro activo */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <p aria-live="polite" className="text-sm text-ink-faint">
            {filtered.length === 0
              ? "Sin resultados"
              : `${filtered.length} de ${artists.length} artistas`}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <X aria-hidden="true" className="h-3.5 w-3.5" />
              Limpiar filtros
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-line py-20 text-center">
            <p className="text-lg font-medium text-ink">
              No encontramos artistas con esos criterios
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Prueba con otro término o quita los filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {visible.map((artist, i) => {
              const stats = getArtistStatsFromAllMunicipalities(artist.name);
              const where = stats.municipalityNames[0];
              const more = stats.municipalityNames.length - 1;
              return (
                <PosterCard
                    key={artist.id}
                    href={`/artistas/${slug(artist.name)}`}
                    onSelect={() => stashArtist(artist)}
                    image={getArtistImage(artist.name, kind)}
                    title={artist.name}
                    kicker={artist.category}
                    meta={
                      stats.totalEvents > 0
                        ? `${stats.totalEvents} evento${stats.totalEvents !== 1 ? "s" : ""} · ${where}${more > 0 ? ` +${more}` : ""}`
                        : artist.origin
                    }
                    priority={i < 5}
                  />
              );
            })}
          </div>
        )}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
