import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  // Remove `distDir: "dist"` so Next.js uses default `.next/`
};

export default nextConfig;
