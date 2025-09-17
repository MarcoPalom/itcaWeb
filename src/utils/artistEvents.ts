// Utilidades para extraer eventos de artistas de todos los municipios
import { FestivalEvent } from '@/constants/types';

// Importar todos los festivales de municipios
import { maderoFestival } from '@/constants/Municipios/maderoData';
import { altamiraFestival } from '@/constants/Municipios/altamiraData';
import { aldamaFestival } from '@/constants/Municipios/aldamaData';
import { gonzalezFestival } from '@/constants/Municipios/gonzalezData';
import { antiguoMorelosFestival } from '@/constants/Municipios/antiguoMorelosData';
import { nuevomorelosFestival } from '@/constants/Municipios/nuevoMorelosData';
import { manteFestival } from '@/constants/Municipios/manteData';
import { gomezFariasFestival } from '@/constants/Municipios/gomezFariasData';
import { xicotencatlFestival } from '@/constants/Municipios/xicotencatlData';
import { ocampoFestival } from '@/constants/Municipios/ocampoData';
import { tulaFestival } from '@/constants/Municipios/tulaData';
import { miquihuanaFestival } from '@/constants/Municipios/miquihuanaData';
import { palmillasFestival } from '@/constants/Municipios/palmillasData';
import { bustamanteFestival } from '@/constants/Municipios/bustamanteData';
import { jaumaveFestival } from '@/constants/Municipios/jaumaveData';
import { lleraFestival } from '@/constants/Municipios/lleraData';
import { casasFestival } from '@/constants/Municipios/casasData';
import { padillaFestival } from '@/constants/Municipios/padillaData';
import { guemezFestival } from '@/constants/Municipios/guemezData';
import { sotoLaMarinaFestival } from '@/constants/Municipios/sotoLaMarinaData';
import { abasoloFestival } from '@/constants/Municipios/abasoloData';
import { jimenezFestival } from '@/constants/Municipios/jimenezData';
import { hidalgoFestival } from '@/constants/Municipios/hidalgoData';
import { villagranFestival } from '@/constants/Municipios/villagranData';
import { maineroFestival } from '@/constants/Municipios/maineroData';
import { sanCarlosFestival } from '@/constants/Municipios/sanCarlosData';
import { sanNicolasFestival } from '@/constants/Municipios/sanNicolasData';
import { cruillasFestival } from '@/constants/Municipios/cruillasData';
import { burgosFestival } from '@/constants/Municipios/burgosData';
import { sanFernandoFestival } from '@/constants/Municipios/sanFernandoData';
import { mendezFestival } from '@/constants/Municipios/mendezData';
import { vallehermosoFestival } from '@/constants/Municipios/valleHermosoData';
import { rioBravoFestival } from '@/constants/Municipios/rioBravoData';
import { gustavoDiazOrdazFestival } from '@/constants/Municipios/gustavoDiazOrdazData';
import { camargoFestival } from '@/constants/Municipios/camargoData';
import { miguelAlemanFestival } from '@/constants/Municipios/miguelAlemanData';
import { mierFestival } from '@/constants/Municipios/mierData';
import { guerreroFestival } from '@/constants/Municipios/guerreroData';
import { victoriaFestival } from '@/constants/Municipios/victoriaData';
import { tampicoFestival } from '@/constants/Municipios/tampicoData';
import { matamorosFestival } from '@/constants/Municipios/matamorosData';
import { reynosaFestival } from '@/constants/Municipios/reynosaData';
import { nuevolaredoFestival } from '@/constants/Municipios/nvData';

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


  allMunicipalFestivals.forEach(({ name: municipality, events }) => {
    
    events.forEach((event: FestivalEvent, eventIndex) => {
      const isMatch = exactMatch 
        ? event.artist.toLowerCase() === artistName.toLowerCase()
        : event.artist.toLowerCase().includes(artistName.toLowerCase());

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
