import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are served locally from /public — no remote patterns needed.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
