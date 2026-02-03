/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['assets.aceternity.com', 'flagcdn.com'],
  },
  // output: 'export',
};

export default nextConfig;
