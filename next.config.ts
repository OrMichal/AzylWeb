import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // optional: only needed if different from 80
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
