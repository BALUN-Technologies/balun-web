import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Ensures proper build structure
  trailingSlash: true, // Helps with static exports
  eslint: {
    ignoreDuringBuilds: true, // Skips linting warnings during production builds
  },
};

export default nextConfig;
