/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jalandharart.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
