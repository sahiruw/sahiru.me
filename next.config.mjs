/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: "build",
  images: {
    domains: ['assets.aceternity.com'],
  },
  // output: 'export',
};

export default nextConfig;
