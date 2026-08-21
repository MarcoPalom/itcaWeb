import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Routes were renamed to Spanish to match the audience. These 308s keep the
  // previously indexed URLs resolving; they can be dropped once search engines
  // and inbound links have caught up.
  async redirects() {
    return [
      { source: "/festival", destination: "/", permanent: true },
      { source: "/national-artists", destination: "/artistas-nacionales", permanent: true },
      { source: "/international-artists", destination: "/artistas-internacionales", permanent: true },
      { source: "/artists-tamaulipecos", destination: "/artistas-tamaulipecos", permanent: true },
      { source: "/municipal-billboards", destination: "/carteleras", permanent: true },
      { source: "/artist/:name", destination: "/artistas/:name", permanent: true },
      { source: "/municipio/:name", destination: "/municipios/:name", permanent: true },
    ];
  },
};

export default nextConfig;
