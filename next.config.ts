import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "compassionate-meadowlark-610.convex.cloud",
        port: "",
      },
    ],
  },
};

export default nextConfig;

