/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
  // output: 'export',
};

export default nextConfig;
