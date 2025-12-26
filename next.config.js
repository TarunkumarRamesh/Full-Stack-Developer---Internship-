/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },
};

module.exports = nextConfig;

