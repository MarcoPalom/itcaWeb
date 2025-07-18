import React, { useState, useMemo } from "react";

// Municipios de Tamaulipas (ejemplo)
const MUNICIPIOS = [
  "CD. VICTORIA", "TAMPICO", "MATAMOROS", "REYNOSA", "NUEVO LAREDO", "MANTE", "ALTAMIRA", "MIGUEL ALEMÁN", "VALLE HERMOSO", "SAN FERNANDO"
];

// Eventos ficticios nutridos
const EVENTS = [
  {
    id: 1,
    date: "2023-10-26",
    day: "JUEVES",
    municipio: "CD. VICTORIA",
    artist: "Regina Orozco (Soprano) y Ricardo Rodríguez (Tenor)",
    title: "De amores y otros infiernos",
    hour: "19:00 hrs",
    venue: "Teatro Amalia G. de Castillo Ledón",
    type: "Internacional",
    color: "#ffe066"
  },
  {
    id: 2,
    date: "2023-10-27",
    day: "VIERNES",
    municipio: "TAMPICO",
    artist: "Ballet de Monterrey",
    title: "Romeo y Julieta",
    hour: "20:00 hrs",
    venue: "Teatro Metropolitano",
    type: "Nacional",
    color: "#b6e880"
  },
  {
    id: 3,
    date: "2023-10-28",
    day: "SÁBADO",
    municipio: "MATAMOROS",
    artist: "Mateo Hurtado",
    title: "Concierto a piano",
    hour: "19:00 hrs",
    venue: "Teatro Reforma",
    type: "Tamaulipeco",
    color: "#ffe066"
  },
  {
    id: 4,
    date: "2023-10-29",
    day: "DOMINGO",
    municipio: "REYNOSA",
    artist: "Puerto Flamenco",
    title: "Elementos y la fuente",
    hour: "18:00 hrs",
    venue: "Centro Cultural Reynosa",
    type: "Internacional",
    color: "#b6e880"
  },
  {
    id: 5,
    date: "2023-10-30",
    day: "LUNES",
    municipio: "NUEVO LAREDO",
    artist: "Mujer Dance Company",
    title: "Danza Korea",
    hour: "20:00 hrs",
    venue: "Teatro Principal",
    type: "Internacional",
    color: "#ffe066"
  },
  {
    id: 6,
    date: "2023-10-31",
    day: "MARTES",
    municipio: "MANTE",
    artist: "A corazón abierto - Made in Colombia",
    title: "Folklore Colombiano",
    hour: "19:00 hrs",
    venue: "Auditorio Municipal",
    type: "Internacional",
    color: "#b6e880"
  },
  {
    id: 7,
    date: "2023-11-01",
    day: "MIÉRCOLES",
    municipio: "ALTAMIRA",
    artist: "Orquesta Sinfónica de Altamira",
    title: "Gala Sinfónica",
    hour: "19:30 hrs",
    venue: "Teatro de la Ciudad",
    type: "Nacional",
    color: "#ffe066"
  },
  {
    id: 8,
    date: "2023-11-02",
    day: "JUEVES",
    municipio: "MIGUEL ALEMÁN",
    artist: "Grupo Folklórico Tamaulipeco",
    title: "Raíces de mi tierra",
    hour: "18:00 hrs",
    venue: "Plaza Principal",
    type: "Tamaulipeco",
    color: "#b6e880"
  },
  {
    id: 9,
    date: "2023-11-03",
    day: "VIERNES",
    municipio: "VALLE HERMOSO",
    artist: "Ballet Folklórico Juvenil",
    title: "México en el corazón",
    hour: "19:00 hrs",
    venue: "Casa de la Cultura",
    type: "Nacional",
    color: "#ffe066"
  },
  {
    id: 10,
    date: "2023-11-04",
    day: "SÁBADO",
    municipio: "SAN FERNANDO",
    artist: "Ensamble de Jazz Tamaulipas",
    title: "Noche de Jazz",
    hour: "20:00 hrs",
    venue: "Foro Cultural",
    type: "Tamaulipeco",
    color: "#b6e880"
  },
  // ...más eventos ficticios si se requiere
];

const TABS = [
  { label: "Por Municipio", value: "municipio" },
  { label: "Por Artista", value: "artista" },
];

export default function FestivalSorter() {
  const [tab, setTab] = useState("municipio");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  // Opciones para el filtro actual
  const options = useMemo(() => {
    if (tab === "municipio") {
      return MUNICIPIOS;
    } else {
      // Artistas únicos ordenados alfabéticamente
      return Array.from(new Set(EVENTS.map(e => e.artist))).sort();
    }
  }, [tab]);

  // Eventos filtrados
  const filteredEvents = useMemo(() => {
    let events = EVENTS;
    if (selected) {
      events = events.filter(e =>
        tab === "municipio" ? e.municipio === selected : e.artist === selected
      );
    }
    if (search) {
      const s = search.toLowerCase();
      events = events.filter(e =>
        e.artist.toLowerCase().includes(s) ||
        e.municipio.toLowerCase().includes(s) ||
        e.title.toLowerCase().includes(s)
      );
    }
    return events;
  }, [tab, selected, search]);

  return (
    <div className="w-[95%] h-[95%] mx-auto bg-white/90 rounded-2xl shadow-xl p-1 mt-2 flex flex-row gap-2">
      {/* Cartelera (eventos) a la izquierda */}
      <div className="w-[80%]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
          {filteredEvents.length === 0 && (
            <div className="col-span-2 text-center text-gray-500 py-12 text-xl">No se encontraron eventos.</div>
          )}
          {filteredEvents.map(ev => (
            <div key={ev.id} className="bg-white rounded-lg shadow p-1 border-l-2 min-h-[32px]" style={{ borderColor: ev.color }}>
              <div className="flex items-center gap-1 mb-0.5 min-h-[32px]">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[8px] font-bold text-gray-500 uppercase">{ev.day}</span>
                  <span className="text-base font-extrabold text-green-800 leading-none">{new Date(ev.date).getDate()}</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xs text-green-900 mb-0.5 leading-tight">{ev.artist}</div>
                  <div className="text-xs text-gray-700 font-medium mb-0.5 leading-tight">{ev.title}</div>
                  <div className="text-[10px] text-gray-500 leading-tight">{ev.venue} &bull; {ev.hour}</div>
                  <div className="text-[8px] text-green-700 mt-0.5 leading-tight">{ev.municipio} &bull; {ev.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Criterios de filtro a la derecha */}
      <div className="w-[20%] flex flex-col gap-1 min-w-[180px]">
        {/* Tabs */}
        <div className="flex gap-1 mb-1 w-full">
          {TABS.map(t => (
            <button
              key={t.value}
              className={`w-1/2 px-2 py-2 rounded-full font-semibold border-2 transition-all duration-200 text-base ${tab === t.value ? "bg-[#ffe066] border-[#b6e880] text-green-900" : "bg-white border-[#ffe066] text-gray-700 hover:bg-[#b6e880]/30"}`}
              onClick={() => { setTab(t.value); setSelected(""); }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Buscar artista, municipio o evento..."
          className="px-2 py-1 rounded-full border-2 border-[#ffe066] focus:border-[#b6e880] outline-none text-sm bg-white mb-1 w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {/* Selector de municipio/artista */}
        <div className="flex flex-wrap gap-0.5 min-h-[20px]">
          {options.map(opt => (
            <button
              key={opt}
              className={`px-2 py-0.5 rounded-lg border-2 text-xs font-medium transition-all duration-150 ${selected === opt ? "bg-[#b6e880] border-[#ffe066] text-green-900" : "bg-white border-[#b6e880] text-gray-700 hover:bg-[#ffe066]/40"}`}
              onClick={() => setSelected(selected === opt ? "" : opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 