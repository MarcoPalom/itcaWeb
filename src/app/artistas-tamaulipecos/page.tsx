"use client";

import ArtistListing from "@/components/artist/ArtistListing";
import { tamaulipecosArtists } from "@/data/tamaulipecanArtists";

export default function TamaulipecanArtistsPage() {
  return (
    <ArtistListing
      artists={tamaulipecosArtists}
      kind="tamaulipecos"
      title="Artistas tamaulipecos"
      description="La escena local: teatro, danza, música y producción del estado."
    />
  );
}
