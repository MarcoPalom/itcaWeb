"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { allMunicipalFestivals } from "@/data/municipalities";
import { getMunicipalImage } from "@/data/municipalImages";
import FestivalBackground from "@/components/festival/FestivalBackground";
import PosterCard from "@/components/festival/PosterCard";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Select from "@/components/ui/Select";

const PER_PAGE = 16;

const SORT_OPTIONS = [
  { id: "name", name: "Orden alfabético" },
  { id: "events", name: "Más eventos" },
];

const cleanName = (name: string) =>
  name.replace("Festival del Municipio ", "").replace("Festival de ", "");

const municipalitySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace("festival-del-municipio-", "");

export default function MunicipalBillboards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);

  const totalEvents = useMemo(
    () => allMunicipalFestivals.reduce((n, m) => n + (m.totalEvents || 0), 0),
    [],
  );

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return allMunicipalFestivals
      .filter((m) => !term || cleanName(m.name).toLowerCase().includes(term))
      .sort((a, b) =>
        sortBy === "events"
          ? (b.totalEvents || 0) - (a.totalEvents || 0)
          : cleanName(a.name).localeCompare(cleanName(b.name), "es", {
              sensitivity: "base",
            }),
      );
  }, [searchTerm, sortBy]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);
  const hasFilters = searchTerm !== "" || sortBy !== "name";

  return (
    <>
      <FestivalBackground />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-6 lg:px-8">
        <PageHeader
          title="Carteleras por municipio"
          description="La programación completa del festival, municipio por municipio."
          count={`${allMunicipalFestivals.length} municipios · ${totalEvents} eventos`}
        />

        <div className="mb-8 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
            />
            <label htmlFor="municipality-search" className="sr-only">
              Buscar municipio
            </label>
            <input
              id="municipality-search"
              type="search"
              placeholder="Buscar municipio…"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-line bg-surface py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint transition-colors hover:border-line-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            />
          </div>

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

        <div className="mb-5 flex items-center justify-between gap-4">
          <p aria-live="polite" className="text-sm text-ink-faint">
            {filtered.length === 0
              ? "Sin resultados"
              : `${filtered.length} de ${allMunicipalFestivals.length} municipios`}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSortBy("name");
                setPage(1);
              }}
              className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <X aria-hidden="true" className="h-3.5 w-3.5" />
              Limpiar
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-line py-20 text-center">
            <p className="text-lg font-medium text-ink">
              No encontramos ese municipio
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Revisa la ortografía o limpia la búsqueda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {visible.map((municipality, i) => {
              const name = cleanName(municipality.name);
              return (
                <PosterCard
                  key={municipality.name}
                  href={`/municipios/${municipalitySlug(municipality.name)}`}
                  image={getMunicipalImage(name)}
                  title={name}
                  kicker={`${municipality.totalEvents} eventos`}
                  meta={`${municipality.startDate} – ${municipality.endDate}`}
                  ratio="landscape"
                  priority={i < 4}
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
