/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_DEV_IMAGE_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_DEV_IMAGE_HOSTNAME,
        port: "8000",
        pathname: "/img/**",
      },
    ],
  },
  output: "standalone",
};
export default nextConfig;
