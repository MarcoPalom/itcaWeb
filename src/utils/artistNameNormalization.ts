// Mapeo de shows compartidos a artistas individuales
const SHARED_SHOWS_MAPPING: Record<string, string[]> = {
  "Del Vali & El Wero Hernández": ["Del Vali", "Wero Hernández"],
  "Del Vali & El Wero": ["Del Vali", "Wero Hernández"],
  "Del Vali y El Wero Hernández": ["Del Vali", "Wero Hernández"],
  "Del Vali y El Wero": ["Del Vali", "Wero Hernández"],
  // Agregar más mapeos según sea necesario
}

// Función para extraer nombres individuales de un show compartido
export function extractIndividualArtists(showTitle: string): string[] {
  // Primero verificar si existe en el mapeo
  if (SHARED_SHOWS_MAPPING[showTitle]) {
    return SHARED_SHOWS_MAPPING[showTitle]
  }

  // Si no está en el mapeo, intentar extraer nombres usando patrones comunes
  const patterns = [
    /(.+?)\s*&\s*(.+)/, // "Artista1 & Artista2"
    /(.+?)\s*y\s*(.+)/, // "Artista1 y Artista2"
    /(.+?)\s*con\s*(.+)/, // "Artista1 con Artista2"
    /(.+?)\s*feat\.?\s*(.+)/, // "Artista1 feat. Artista2"
  ]

  for (const pattern of patterns) {
    const match = showTitle.match(pattern)
    if (match) {
      return [match[1].trim(), match[2].trim()]
    }
  }

  // Si no se puede extraer, devolver el título original
  return [showTitle]
}

// Función para normalizar nombres de artistas (eliminar títulos, etc.)
export function normalizeArtistName(name: string): string {
  return name
    .replace(/^(El|La|Los|Las)\s+/i, '') // Remover artículos
    .replace(/\s+$/, '') // Remover espacios al final
    .trim()
}

// Función para verificar si un artista está en un show compartido
export function isArtistInSharedShow(artistName: string, showTitle: string): boolean {
  const individualArtists = extractIndividualArtists(showTitle)
  const normalizedArtistName = normalizeArtistName(artistName)
  
  return individualArtists.some(artist => 
    normalizeArtistName(artist) === normalizedArtistName
  )
}

// Función para obtener el nombre del show original de un artista individual
export function getOriginalShowTitle(artistName: string, allShows: string[]): string | null {
  for (const show of allShows) {
    if (isArtistInSharedShow(artistName, show)) {
      return show
    }
  }
  
  return null
}
