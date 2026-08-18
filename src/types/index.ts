// Interfaces compartidas para festivales de cualquier municipio
export interface FestivalEvent {
  id: string;
  date: string;
  day: string;
  title: string;
  artist: string;
  origin: string;
  category: string;
  subcategory?: string;
  venue?: string;
  time?: string;
  cast?: string[];
  artisticDirection?: string;
  choreography?: string;
  director?: string;
  description?: string;
}

export interface FestivalExhibition {
  id: string;
  title: string;
  artist: string;
  origin: string;
  category: string;
  subcategory?: string;
  venue?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface FestivalInfo {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  mainVenue?: string;
  totalEvents: number;
  categories: string[];
}
