"use client";

import ArtistListing from "@/components/artist/ArtistListing";
import { nationalArtists } from "@/data/nationalArtists";

export default function NationalArtistsPage() {
  return (
    <ArtistListing
      artists={nationalArtists}
      kind="national"
      title="Artistas nacionales"
      description="El talento mexicano que llega a la costa del Seno Mexicano."
    />
  );
}
