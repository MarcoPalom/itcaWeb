// Utilidades para extraer eventos de artistas de todos los municipios
import { FestivalEvent } from '@/types';
import { isArtistInSharedShow, normalizeArtistName } from './artistNameNormalization';

// Importar todos los festivales de municipios
import { maderoFestival } from '@/data/municipalities/madero';
import { altamiraFestival } from '@/data/municipalities/altamira';
import { aldamaFestival } from '@/data/municipalities/aldama';
import { gonzalezFestival } from '@/data/municipalities/gonzalez';
import { antiguoMorelosFestival } from '@/data/municipalities/antiguoMorelos';
import { nuevomorelosFestival } from '@/data/municipalities/nuevoMorelos';
import { manteFestival } from '@/data/municipalities/mante';
import { gomezFariasFestival } from '@/data/municipalities/gomezFarias';
import { xicotencatlFestival } from '@/data/municipalities/xicotencatl';
import { ocampoFestival } from '@/data/municipalities/ocampo';
import { tulaFestival } from '@/data/municipalities/tula';
import { miquihuanaFestival } from '@/data/municipalities/miquihuana';
import { palmillasFestival } from '@/data/municipalities/palmillas';
import { bustamanteFestival } from '@/data/municipalities/bustamante';
import { jaumaveFestival } from '@/data/municipalities/jaumave';
import { lleraFestival } from '@/data/municipalities/llera';
import { casasFestival } from '@/data/municipalities/casas';
import { padillaFestival } from '@/data/municipalities/padilla';
import { guemezFestival } from '@/data/municipalities/guemez';
import { sotoLaMarinaFestival } from '@/data/municipalities/sotoLaMarina';
import { abasoloFestival } from '@/data/municipalities/abasolo';
import { jimenezFestival } from '@/data/municipalities/jimenez';
import { hidalgoFestival } from '@/data/municipalities/hidalgo';
import { villagranFestival } from '@/data/municipalities/villagran';
import { maineroFestival } from '@/data/municipalities/mainero';
import { sanCarlosFestival } from '@/data/municipalities/sanCarlos';
import { sanNicolasFestival } from '@/data/municipalities/sanNicolas';
import { cruillasFestival } from '@/data/municipalities/cruillas';
import { burgosFestival } from '@/data/municipalities/burgos';
import { sanFernandoFestival } from '@/data/municipalities/sanFernando';
import { mendezFestival } from '@/data/municipalities/mendez';
import { vallehermosoFestival } from '@/data/municipalities/valleHermoso';
import { rioBravoFestival } from '@/data/municipalities/rioBravo';
import { gustavoDiazOrdazFestival } from '@/data/municipalities/gustavoDiazOrdaz';
import { camargoFestival } from '@/data/municipalities/camargo';
import { miguelAlemanFestival } from '@/data/municipalities/miguelAleman';
import { mierFestival } from '@/data/municipalities/mier';
import { guerreroFestival } from '@/data/municipalities/guerrero';
import { victoriaFestival } from '@/data/municipalities/victoria';
import { tampicoFestival } from '@/data/municipalities/tampico';
import { matamorosFestival } from '@/data/municipalities/matamoros';
import { reynosaFestival } from '@/data/municipalities/reynosa';
import { nuevolaredoFestival } from '@/data/municipalities/nv';

// Array con todos los festivales de municipios
const allMunicipalFestivals = [
  { name: 'Madero', events: maderoFestival },
  { name: 'Altamira', events: altamiraFestival },
  { name: 'Aldama', events: aldamaFestival },
  { name: 'González', events: gonzalezFestival },
  { name: 'Antiguo Morelos', events: antiguoMorelosFestival },
  { name: 'Nuevo Morelos', events: nuevomorelosFestival },
  { name: 'Mante', events: manteFestival },
  { name: 'Gómez Farías', events: gomezFariasFestival },
  { name: 'Xicoténcatl', events: xicotencatlFestival },
  { name: 'Ocampo', events: ocampoFestival },
  { name: 'Tula', events: tulaFestival },
  { name: 'Miquihuana', events: miquihuanaFestival },
  { name: 'Palmillas', events: palmillasFestival },
  { name: 'Bustamante', events: bustamanteFestival },
  { name: 'Jaumave', events: jaumaveFestival },
  { name: 'Llera', events: lleraFestival },
  { name: 'Casas', events: casasFestival },
  { name: 'Padilla', events: padillaFestival },
  { name: 'Güémez', events: guemezFestival },
  { name: 'Soto la Marina', events: sotoLaMarinaFestival },
  { name: 'Abasolo', events: abasoloFestival },
  { name: 'Jiménez', events: jimenezFestival },
  { name: 'Hidalgo', events: hidalgoFestival },
  { name: 'Villagrán', events: villagranFestival },
  { name: 'Mainero', events: maineroFestival },
  { name: 'San Carlos', events: sanCarlosFestival },
  { name: 'San Nicolás', events: sanNicolasFestival },
  { name: 'Cruillas', events: cruillasFestival },
  { name: 'Burgos', events: burgosFestival },
  { name: 'San Fernando', events: sanFernandoFestival },
  { name: 'Méndez', events: mendezFestival },
  { name: 'Valle Hermoso', events: vallehermosoFestival },
  { name: 'Río Bravo', events: rioBravoFestival },
  { name: 'Gustavo Díaz Ordaz', events: gustavoDiazOrdazFestival },
  { name: 'Camargo', events: camargoFestival },
  { name: 'Miguel Alemán', events: miguelAlemanFestival },
  { name: 'Mier', events: mierFestival },
  { name: 'Guerrero', events: guerreroFestival },
  { name: 'Victoria', events: victoriaFestival },
  { name: 'Tampico', events: tampicoFestival },
  { name: 'Matamoros', events: matamorosFestival },
  { name: 'Reynosa', events: reynosaFestival },
  { name: 'Nuevo Laredo', events: nuevolaredoFestival },
];

// Interfaz para eventos de artista con información del municipio
export interface ArtistEventWithMunicipality extends FestivalEvent {
  municipality: string;
}


export function getArtistEventsFromAllMunicipalities(
  artistName: string, 
  exactMatch: boolean = false
): ArtistEventWithMunicipality[] {
  const results: ArtistEventWithMunicipality[] = [];
  const normalizedArtistName = normalizeArtistName(artistName);

  allMunicipalFestivals.forEach(({ name: municipality, events }) => {
    
    events.forEach((event: FestivalEvent, eventIndex) => {
      let isMatch = false;
      
      if (exactMatch) {
        // Búsqueda exacta: comparar nombre normalizado
        isMatch = normalizeArtistName(event.artist) === normalizedArtistName;
      } else {
        // Búsqueda parcial: verificar si el artista está en el evento
        isMatch = event.artist.toLowerCase().includes(artistName.toLowerCase()) ||
                 isArtistInSharedShow(artistName, event.artist);
      }

      if (isMatch) {
        results.push({
          ...event,
          municipality
        });
      } else if (eventIndex < 3) { // Log first 3 events for debugging
      }
    });
  });


  return results;
}


export function getArtistStatsFromAllMunicipalities(
  artistName: string, 
  exactMatch: boolean = false
) {
  
  const events = getArtistEventsFromAllMunicipalities(artistName, exactMatch);
  
  const municipalities = [...new Set(events.map(event => event.municipality))];
  const categories = [...new Set(events.map(event => event.category))];
  const totalEvents = events.length;

  const stats = {
    artistName,
    totalEvents,
    municipalities: municipalities.length,
    municipalityNames: municipalities,
    categories,
    events
  };


  return stats;
}

export function searchArtistsInAllMunicipalities(searchTerm: string): string[] {
  const artistNames = new Set<string>();

  allMunicipalFestivals.forEach(({ events }) => {
    events.forEach((event: FestivalEvent) => {
      if (event.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
        artistNames.add(event.artist);
      }
    });
  });

  return Array.from(artistNames).sort();
}

export function getAllArtistsFromAllMunicipalities(): string[] {
  const artistNames = new Set<string>();

  allMunicipalFestivals.forEach(({ events }) => {
    events.forEach((event: FestivalEvent) => {
      artistNames.add(event.artist);
    });
  });

  return Array.from(artistNames).sort();
}

export function getArtistEventsInMunicipality(
  artistName: string,
  municipalityName: string,
  exactMatch: boolean = false
): FestivalEvent[] {
  const municipality = allMunicipalFestivals.find(
    m => m.name.toLowerCase() === municipalityName.toLowerCase()
  );

  if (!municipality) {
    return [];
  }

  return municipality.events.filter((event: FestivalEvent) => {
    const isMatch = exactMatch 
      ? event.artist.toLowerCase() === artistName.toLowerCase()
      : event.artist.toLowerCase().includes(artistName.toLowerCase());
    return isMatch;
  });
}
