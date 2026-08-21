"use client"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, CalendarDays, MapPin } from "lucide-react"
import { useParams } from "next/navigation"
import { FestivalEvent, FestivalInfo } from "@/types"
import FestivalBackground from "@/components/festival/FestivalBackground"
import PageHeader from "@/components/PageHeader"
import Pagination from "@/components/Pagination"
import { useFestivalLoading } from "@/hooks/useFestivalLoading"
import EventList from "@/components/artist/EventList"
import { victoriaFestivalInfo, victoriaFestival } from "@/data/municipalities/victoria"
import { matamorosFestivalInfo, matamorosFestival } from "@/data/municipalities/matamoros"
import { tampicoFestivalInfo, tampicoFestival } from "@/data/municipalities/tampico"
import { reynosaFestivalInfo, reynosaFestival } from "@/data/municipalities/reynosa"
import { nvFestivalInfo, nuevolaredoFestival } from "@/data/municipalities/nv"
import { altamiraFestivalInfo, altamiraFestival } from "@/data/municipalities/altamira"
import { camargoFestivalInfo, camargoFestival } from "@/data/municipalities/camargo"
import { manteFestivalInfo, manteFestival } from "@/data/municipalities/mante"
import { sanFernandoFestivalInfo, sanFernandoFestival } from "@/data/municipalities/sanFernando"
import { valleHermosoFestivalInfo, vallehermosoFestival } from "@/data/municipalities/valleHermoso"
import { rioBravoFestivalInfo, rioBravoFestival } from "@/data/municipalities/rioBravo"
import { miguelAlemanFestivalInfo, miguelAlemanFestival } from "@/data/municipalities/miguelAleman"
import { gonzalezFestivalInfo, gonzalezFestival } from "@/data/municipalities/gonzalez"
import { xicotencatlFestivalInfo, xicotencatlFestival } from "@/data/municipalities/xicotencatl"
import { lleraFestivalInfo, lleraFestival } from "@/data/municipalities/llera"
import { jaumaveFestivalInfo, jaumaveFestival } from "@/data/municipalities/jaumave"
import { palmillasFestivalInfo, palmillasFestival } from "@/data/municipalities/palmillas"
import { maineroFestivalInfo, maineroFestival } from "@/data/municipalities/mainero"
import { villagranFestivalInfo, villagranFestival } from "@/data/municipalities/villagran"
import { bustamanteFestivalInfo, bustamanteFestival } from "@/data/municipalities/bustamante"
import { miquihuanaFestivalInfo, miquihuanaFestival } from "@/data/municipalities/miquihuana"
import { tulaFestivalInfo, tulaFestival } from "@/data/municipalities/tula"
import { ocampoFestivalInfo, ocampoFestival } from "@/data/municipalities/ocampo"
import { nuevoMorelosFestivalInfo, nuevomorelosFestival } from "@/data/municipalities/nuevoMorelos"
import { antiguoMorelosFestivalInfo, antiguoMorelosFestival } from "@/data/municipalities/antiguoMorelos"
import { casasFestivalInfo, casasFestival } from "@/data/municipalities/casas"
import { gomezFariasFestivalInfo, gomezFariasFestival } from "@/data/municipalities/gomezFarias"
import { guerreroFestivalInfo, guerreroFestival } from "@/data/municipalities/guerrero"
import { guemezFestivalInfo, guemezFestival } from "@/data/municipalities/guemez"
import { hidalgoFestivalInfo, hidalgoFestival } from "@/data/municipalities/hidalgo"
import { jimenezFestivalInfo, jimenezFestival } from "@/data/municipalities/jimenez"
import { maderoFestivalInfo, maderoFestival } from "@/data/municipalities/madero"
import { mendezFestivalInfo, mendezFestival } from "@/data/municipalities/mendez"
import { mierFestivalInfo, mierFestival } from "@/data/municipalities/mier"
import { padillaFestivalInfo, padillaFestival } from "@/data/municipalities/padilla"
import { sanCarlosFestivalInfo, sanCarlosFestival } from "@/data/municipalities/sanCarlos"
import { sanNicolasFestivalInfo, sanNicolasFestival } from "@/data/municipalities/sanNicolas"
import { sotoLaMarinaFestivalInfo, sotoLaMarinaFestival } from "@/data/municipalities/sotoLaMarina"
import { abasoloFestivalInfo, abasoloFestival } from "@/data/municipalities/abasolo"
import { aldamaFestivalInfo, aldamaFestival } from "@/data/municipalities/aldama"
import { burgosFestivalInfo, burgosFestival } from "@/data/municipalities/burgos"
import { gustavoDiazOrdazFestivalInfo, gustavoDiazOrdazFestival } from "@/data/municipalities/gustavoDiazOrdaz"
import { cruillasFestivalInfo, cruillasFestival } from "@/data/municipalities/cruillas"
import { getArtistImageUniversal } from "@/data/artistImages"
import { municipalImages } from "@/data/municipalImages"

export default function MunicipalityPage() {
  const params = useParams()
  const [municipality, setMunicipality] = useState<FestivalInfo | null>(null)
  const [municipalityEvents, setMunicipalityEvents] = useState<FestivalEvent[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const { isLoading } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2000,
  })

  // Mapeo de todos los municipios
  const municipalitiesData = useMemo(() => ({
    "victoria": { info: victoriaFestivalInfo, events: victoriaFestival },
    "matamoros": { info: matamorosFestivalInfo, events: matamorosFestival },
    "tampico": { info: tampicoFestivalInfo, events: tampicoFestival },
    "reynosa": { info: reynosaFestivalInfo, events: reynosaFestival },
    "nuevo-laredo": { info: nvFestivalInfo, events: nuevolaredoFestival },
    "altamira": { info: altamiraFestivalInfo, events: altamiraFestival },
    "camargo": { info: camargoFestivalInfo, events: camargoFestival },
    "mante": { info: manteFestivalInfo, events: manteFestival },
    "san-fernando": { info: sanFernandoFestivalInfo, events: sanFernandoFestival },
    "valle-hermoso": { info: valleHermosoFestivalInfo, events: vallehermosoFestival },
    "rio-bravo": { info: rioBravoFestivalInfo, events: rioBravoFestival },
    "miguel-aleman": { info: miguelAlemanFestivalInfo, events: miguelAlemanFestival },
    "gonzalez": { info: gonzalezFestivalInfo, events: gonzalezFestival },
    "xicotencatl": { info: xicotencatlFestivalInfo, events: xicotencatlFestival },
    "llera": { info: lleraFestivalInfo, events: lleraFestival },
    "jaumave": { info: jaumaveFestivalInfo, events: jaumaveFestival },
    "palmillas": { info: palmillasFestivalInfo, events: palmillasFestival },
    "mainero": { info: maineroFestivalInfo, events: maineroFestival },
    "villagran": { info: villagranFestivalInfo, events: villagranFestival },
    "bustamante": { info: bustamanteFestivalInfo, events: bustamanteFestival },
    "miquihuana": { info: miquihuanaFestivalInfo, events: miquihuanaFestival },
    "tula": { info: tulaFestivalInfo, events: tulaFestival },
    "ocampo": { info: ocampoFestivalInfo, events: ocampoFestival },
    "nuevo-morelos": { info: nuevoMorelosFestivalInfo, events: nuevomorelosFestival },
    "antiguo-morelos": { info: antiguoMorelosFestivalInfo, events: antiguoMorelosFestival },
    "casas": { info: casasFestivalInfo, events: casasFestival },
    "gomez-farias": { info: gomezFariasFestivalInfo, events: gomezFariasFestival },
    "guerrero": { info: guerreroFestivalInfo, events: guerreroFestival },
    "guemez": { info: guemezFestivalInfo, events: guemezFestival },
    "hidalgo": { info: hidalgoFestivalInfo, events: hidalgoFestival },
    "jimenez": { info: jimenezFestivalInfo, events: jimenezFestival },
    "madero": { info: maderoFestivalInfo, events: maderoFestival },
    "mendez": { info: mendezFestivalInfo, events: mendezFestival },
    "mier": { info: mierFestivalInfo, events: mierFestival },
    "padilla": { info: padillaFestivalInfo, events: padillaFestival },
    "san-carlos": { info: sanCarlosFestivalInfo, events: sanCarlosFestival },
    "san-nicolas": { info: sanNicolasFestivalInfo, events: sanNicolasFestival },
    "soto-la-marina": { info: sotoLaMarinaFestivalInfo, events: sotoLaMarinaFestival },
    "abasolo": { info: abasoloFestivalInfo, events: abasoloFestival },
    "aldama": { info: aldamaFestivalInfo, events: aldamaFestival },
    "burgos": { info: burgosFestivalInfo, events: burgosFestival },
    "gustavo-diaz-ordaz": { info: gustavoDiazOrdazFestivalInfo, events: gustavoDiazOrdazFestival },
    "cruillas": { info: cruillasFestivalInfo, events: cruillasFestival }
  }), [])

  // Filtrar eventos basado en el término de búsqueda
  const filteredEvents = useMemo(() => {
    if (!searchTerm.trim()) return municipalityEvents

    return municipalityEvents.filter((event: FestivalEvent) =>
      event.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.venue && event.venue.toLowerCase().includes(searchTerm.toLowerCase())) ||
      event.day.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [municipalityEvents, searchTerm])

  // Paginación
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex)

  // Función para manejar cambios en la búsqueda
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1) // Reset a la primera página cuando se busca
  }

  useEffect(() => {
    if (params.name) {
      const municipalitySlug = params.name as string
      const municipalityData = municipalitiesData[municipalitySlug as keyof typeof municipalitiesData]

      if (municipalityData) {
        setMunicipality(municipalityData.info)
        setMunicipalityEvents(municipalityData.events)
      }
    }
  }, [params.name, municipalitiesData])

  if (isLoading) {
    return (
      <>
        <FestivalBackground />
        <div className="mx-auto w-full max-w-[1400px] px-4 py-24 md:px-6 lg:px-8">
          <div className="h-8 w-40 animate-pulse rounded bg-surface-2" />
          <div className="mt-6 h-64 w-full animate-pulse rounded-xl bg-surface-2" />
        </div>
      </>
    )
  }

  if (!municipality) {
    return (
      <>
        <FestivalBackground />
        <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
          <h1 className="font-poster text-2xl font-extrabold uppercase text-ink">
            Municipio no encontrado
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Revisa el enlace o vuelve al listado de carteleras.
          </p>
          <Link
            href="/carteleras"
            className="mt-6 inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover"
          >
            Ver todas las carteleras
          </Link>
        </div>
      </>
    )
  }

  const municipalityImage =
    municipalImages[municipality.name] || "/images/municipal-festival-placeholder.jpg"

  const categories = [
    ...new Set(municipalityEvents.map((event: FestivalEvent) => event.category)),
  ]

  const getEventImage = (event: FestivalEvent) => getArtistImageUniversal(event.artist)

  const transformedEvents = paginatedEvents.map((event: FestivalEvent) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    day: event.day,
    venue: event.venue,
    time: event.time,
    municipality: municipality.name,
    artistImage: getEventImage(event),
    artist: event.artist,
    origin: event.origin,
  }))

  return (
    <>
      <FestivalBackground />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-6 lg:px-8">
        <PageHeader
          title={municipality.name}
          description={municipality.location}
          count={`${municipalityEvents.length} eventos`}
        />

        <div className="grid gap-8 md:grid-cols-[minmax(0,420px)_1fr] md:gap-12">
          <div>
            <div
              className="relative w-full overflow-hidden rounded-xl border border-line shadow-[var(--poster-shadow)]"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={municipalityImage}
                alt={municipality.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <dl className="flex flex-wrap gap-x-10 gap-y-4">
              <div className="flex items-start gap-2">
                <CalendarDays aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-faint">Fechas</dt>
                  <dd className="text-sm font-semibold tabular-nums text-ink">
                    {municipality.startDate} – {municipality.endDate}
                  </dd>
                </div>
              </div>
              {municipality.mainVenue && (
                <div className="flex items-start gap-2">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-faint">Sede principal</dt>
                    <dd className="text-sm font-semibold text-ink">{municipality.mainVenue}</dd>
                  </div>
                </div>
              )}
            </dl>

            {categories.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  Disciplinas en cartel
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-muted">
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-poster text-xl font-extrabold uppercase tracking-tight text-ink md:text-2xl">
              Programación
            </h2>
            <div className="relative sm:w-80">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
              />
              <label htmlFor="event-search" className="sr-only">Buscar en la programación</label>
              <input
                id="event-search"
                type="search"
                placeholder="Buscar artista, sede o día…"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full rounded-lg border border-line bg-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint transition-colors hover:border-line-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              />
            </div>
          </div>

          <p aria-live="polite" className="mb-4 text-sm text-ink-faint">
            {filteredEvents.length === 0
              ? "Sin resultados"
              : `${filteredEvents.length} de ${municipalityEvents.length} eventos`}
          </p>

          <EventList
            events={transformedEvents}
            artistImage={municipalityImage}
            artistName={municipality.name}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  )
}
