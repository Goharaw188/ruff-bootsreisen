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
};

module.exports = nextConfig;

