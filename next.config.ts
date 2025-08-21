import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ifg.id",
        port: "",
        pathname: "/images/ifg/logo-white.png",
      },
    ],
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  reactStrictMode: true,
};

export default nextConfig;
