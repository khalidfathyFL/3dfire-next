/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: true,
    path: '/_next/image', // ✅ Default path
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'khalidfathyfl.github.io', // ✅ Optional, can remove if not using remote GitHub-hosted images
        pathname: '/3dfire-next/**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
