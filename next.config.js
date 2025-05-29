/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ Needed for static export
    domains: ['placehold.co'], // ✅ Include any image domains you use
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'khalidfathyfl.github.io',
        pathname: '/3dfire-next/**',
      },
    ],
  },
};

module.exports = nextConfig;
