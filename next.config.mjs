/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-hook-form'], // Transpilar react-hook-form para evitar problemas con useEffectEvent
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placehold.co', 'res.cloudinary.com'],
    unoptimized: true,
  },
};

export default nextConfig;
