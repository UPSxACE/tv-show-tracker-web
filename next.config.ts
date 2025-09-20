import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ignore TypeScript errors on build
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  }
  /* config options here */
};

export default nextConfig;
