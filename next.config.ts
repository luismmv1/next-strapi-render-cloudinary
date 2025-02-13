import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* experimental: {
    appDir: true,
  }, */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
