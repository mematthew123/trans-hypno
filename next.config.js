
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'localhost',
      'cdn.sanity.io',
      'csimg.nyc3.cdn.digitaloceanspaces.com',
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;