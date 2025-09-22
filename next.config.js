/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  async rewrites() {
    return []
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
