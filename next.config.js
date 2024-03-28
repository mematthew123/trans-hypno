const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['localhost', 'cdn.sanity.io'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withMDX(nextConfig);
