/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
