/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.matcha.xyz',
        port: '',
        pathname: '/_next/static/images/**',
      },
    ],
  }
}

module.exports = nextConfig
