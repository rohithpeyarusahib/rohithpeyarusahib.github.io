import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enabled for static hosting like GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
