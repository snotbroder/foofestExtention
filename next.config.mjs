/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
      },

      {
        protocol: "https",
        hostname: "sudsy-jet-grill.glitch.me",
      },
    ],
  },
};

export default nextConfig;
