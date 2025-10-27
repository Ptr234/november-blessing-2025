import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/november-blessing-2025',
  assetPrefix: '/november-blessing-2025',
  images: {
    unoptimized: true
  },
  reactCompiler: true,
};

export default nextConfig;
