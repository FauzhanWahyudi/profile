/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/profile-nextjs", // Match your project folder inside the repo
  assetPrefix: "/profile-nextjs/",
  images: { unoptimized: true },
};

export default nextConfig;
