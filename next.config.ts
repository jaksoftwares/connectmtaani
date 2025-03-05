import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  output: "export",
  distDir: "out", 
};

export default nextConfig;
