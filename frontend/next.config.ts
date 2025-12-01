import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: false,
  experimental: {
    optimizeCss: true,
  },
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kyra-images.kyra.com',
      },
    ],
  },
};

export default nextConfig;
