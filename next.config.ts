import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Add the packages in transpilePackages for standalone builds
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
  /* config options here */
};

export default nextConfig;
