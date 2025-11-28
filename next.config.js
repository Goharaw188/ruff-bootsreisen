/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.lescanalous.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.lescanalous.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    // Ignore ESLint errors during build (we handle them in CI/linting separately)
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

