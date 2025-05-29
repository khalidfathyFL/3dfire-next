/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: true,
    path: '/3dfire-next/_next/image',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'khalidfathyfl.github.io',
        pathname: '/3dfire-next/**',
      },
    ],
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/3dfire-next' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/3dfire-next' : '',
}

module.exports = nextConfig;
