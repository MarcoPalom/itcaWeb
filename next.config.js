/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  distDir: 'out',
  async rewrites() {
    return []
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
