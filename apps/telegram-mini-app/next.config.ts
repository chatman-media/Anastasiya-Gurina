import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Optimize for Telegram Mini Apps
  compress: true,

  // Enable static image optimization
  images: {
    unoptimized: false,
    remotePatterns: [],
  },

  // Environment variables for Telegram
  env: {
    NEXT_PUBLIC_APP_NAME: 'Anastasiya Gurina NFT Gallery',
  },

  // Headers for Telegram Mini Apps
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
