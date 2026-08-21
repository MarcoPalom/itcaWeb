"use client";

import { internationalArtists } from "@/data/internationalArtists";
import { nationalArtists } from "@/data/nationalArtists";
import { tamaulipecosArtists } from "@/data/tamaulipecanArtists";
import { victoriaFestivalInfo } from "@/data/municipalities/victoria";
import { matamorosFestivalInfo } from "@/data/municipalities/matamoros";
import { tampicoFestivalInfo } from "@/data/municipalities/tampico";
import { reynosaFestivalInfo } from "@/data/municipalities/reynosa";
import { getMunicipalImage } from "@/data/municipalImages";
import {
  internationalArtistImages,
  nationalArtistImages,
  tamaulipecosArtistImages,
} from "@/data/artistImages";
import FestivalBackground from "./FestivalBackground";
import FestivalHeroCard from "./FestivalHeroCard";
import PosterCard from "./PosterCard";
import SectionHeader from "./SectionHeader";

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const municipalitySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace("festival-del-municipio-", "");

/** Rejilla de posters. Un solo ritmo para todas las secciones de artistas. */
function PosterGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
      {children}
    </div>
  );
}

export default function Festival() {
  const selectedNationalArtists = [
    nationalArtists[0],
    nationalArtists[1],
    nationalArtists[9],
    nationalArtists[3],
    nationalArtists[4],
  ];

  const selectedTamaulipecoArtists = [
    tamaulipecosArtists.find((a) => a.name === "Polvo Enamorado")!,
    tamaulipecosArtists.find((a) => a.name === "Afrodescendencia Matamoros")!,
    tamaulipecosArtists.find((a) => a.name === "DOSCE La Compañía")!,
    tamaulipecosArtists.find((a) => a.name === "En Boca Ensamble")!,
    tamaulipecosArtists.find((a) => a.name === "Colectivo teatro de bolsillo")!,
  ];

  const featuredInternational = internationalArtists.slice(0, 5);

  const municipalFestivals = [
    victoriaFestivalInfo,
    matamorosFestivalInfo,
    tampicoFestivalInfo,
    reynosaFestivalInfo,
  ];

  return (
    <>
      <FestivalBackground />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-16 md:px-6 lg:px-8">
        <FestivalHeroCard />

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          <section aria-labelledby="artistas-internacionales">
            <SectionHeader
              title="Artistas internacionales"
              count={internationalArtists.length}
              href="/artistas-internacionales"
            />
            <PosterGrid>
              {featuredInternational.map((artist, i) => (
                <PosterCard
                  key={artist.id}
                  href={`/artistas/${slug(artist.name)}`}
                  image={internationalArtistImages[artist.name]}
                  title={artist.name}
                  kicker={artist.category}
                  priority={i < 3}
                />
              ))}
            </PosterGrid>
          </section>

          <section aria-labelledby="artistas-nacionales">
            <SectionHeader
              title="Artistas nacionales"
              count={nationalArtists.length}
              href="/artistas-nacionales"
            />
            <PosterGrid>
              {selectedNationalArtists.map((artist) => (
                <PosterCard
                  key={artist.name}
                  href={`/artistas/${slug(artist.name)}`}
                  image={nationalArtistImages[artist.name]}
                  title={artist.name}
                  kicker={artist.category}
                />
              ))}
            </PosterGrid>
          </section>

          <section aria-labelledby="artistas-tamaulipecos">
            <SectionHeader
              title="Artistas tamaulipecos"
              count={tamaulipecosArtists.length}
              href="/artistas-tamaulipecos"
            />
            <PosterGrid>
              {selectedTamaulipecoArtists.map((artist) => (
                <PosterCard
                  key={artist.name}
                  href={`/artistas/${slug(artist.name)}`}
                  image={tamaulipecosArtistImages[artist.name]}
                  title={artist.name}
                  kicker={artist.category}
                />
              ))}
            </PosterGrid>
          </section>

          <section aria-labelledby="carteleras">
            <SectionHeader
              title="Carteleras por municipio"
              count={43}
              href="/carteleras"
              linkLabel="Ver las 43"
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
              {municipalFestivals.map((municipality) => {
                const name = municipality.name.replace(
                  "Festival del Municipio ",
                  "",
                );
                return (
                  <PosterCard
                    key={municipality.name}
                    href={`/municipios/${municipalitySlug(municipality.name)}`}
                    image={getMunicipalImage(name)}
                    title={name}
                    kicker={`${municipality.totalEvents} eventos`}
                    meta={`${municipality.startDate} – ${municipality.endDate}`}
                    ratio="landscape"
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
