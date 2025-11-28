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
    // Ignore ESLint errors during build to prevent build failures
    // ESLint rules are still enforced in development via .eslintrc.json
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

