"use client";

import ArtistListing from "@/components/artist/ArtistListing";
import { internationalArtists } from "@/data/internationalArtists";

export default function InternationalArtistsPage() {
  return (
    <ArtistListing
      artists={internationalArtists}
      kind="international"
      title="Artistas internacionales"
      description="Compañías y solistas de todo el mundo en la XXXII edición."
    />
  );
}
