import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // optional: only needed if different from 80
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
