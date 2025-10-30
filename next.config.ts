// next.config.ts
import type { NextConfig } from "next";

import { withContentlayer } from 'next-contentlayer2';

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ✅ não falhar o build por causa do ESLint
    ignoreDuringBuilds: true,
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
} satisfies NextConfig;

export default withContentlayer(nextConfig);
