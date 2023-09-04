/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    minimumCacheTTL: 99999999999
  }
}

module.exports = nextConfig
