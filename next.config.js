/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // 优化构建大小
    config.optimization = {
      ...config.optimization,
      minimize: true,
    }
    
    return config
  },
};

module.exports = nextConfig;
